/**
 * RENOVO site assistant — Cloudflare Worker.
 *
 * The site itself is static (GitHub Pages), so this is the one piece of server
 * we run: it holds the Anthropic key, enforces limits, and streams answers back.
 * It is deliberately small — no database, no session store, no user accounts.
 * The browser keeps the transcript and sends it with each turn.
 */
import Anthropic from '@anthropic-ai/sdk';
import { KNOWLEDGE } from './knowledge.generated';
import { SYSTEM_RULES } from './prompt';

export interface Env {
  ANTHROPIC_API_KEY: string;
  /** Comma-separated origins allowed to call this worker. */
  ALLOWED_ORIGINS?: string;
  /** Override the model without redeploying code. */
  CHAT_MODEL?: string;
  /** Optional: bind a KV namespace called RATE to enable rate limiting. */
  RATE?: KVNamespace;
  /** Requests per IP per hour (default 30). */
  RATE_PER_HOUR?: string;
}

type Locale = 'en' | 'de' | 'es';
type Turn = { role: 'user' | 'assistant'; content: string };

const LOCALES: Locale[] = ['en', 'de', 'es'];

/** Abuse ceilings. A support conversation that exceeds these is not a support
    conversation any more — it is someone using us as a free API. */
const MAX_TURNS = 24;
const MAX_CHARS_PER_TURN = 2_000;
const MAX_CHARS_TOTAL = 16_000;
const MAX_OUTPUT_TOKENS = 900;

const DEFAULT_ORIGINS = [
  'https://renovostudio.com',
  'https://www.renovostudio.com',
  'https://micromegass.github.io',
  'http://127.0.0.1:4990',
  'http://localhost:4990',
  'http://127.0.0.1:4980',
  'http://localhost:4980',
];

function allowedOrigins(env: Env): string[] {
  const configured = env.ALLOWED_ORIGINS?.split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return configured?.length ? configured : DEFAULT_ORIGINS;
}

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = allowedOrigins(env).includes(origin);
  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' },
  });
}

/** Returns an error code when the payload is unusable, otherwise null. */
function validate(body: unknown): { messages: Turn[]; locale: Locale } | string {
  if (typeof body !== 'object' || body === null) return 'bad_request';
  const { messages, locale } = body as { messages?: unknown; locale?: unknown };

  if (!Array.isArray(messages) || messages.length === 0) return 'bad_request';
  if (messages.length > MAX_TURNS) return 'too_long';

  let total = 0;
  const clean: Turn[] = [];
  for (const m of messages) {
    if (typeof m !== 'object' || m === null) return 'bad_request';
    const { role, content } = m as { role?: unknown; content?: unknown };
    if (role !== 'user' && role !== 'assistant') return 'bad_request';
    if (typeof content !== 'string') return 'bad_request';
    const text = content.trim();
    if (!text) return 'bad_request';
    if (text.length > MAX_CHARS_PER_TURN) return 'too_long';
    total += text.length;
    clean.push({ role, content: text });
  }
  if (total > MAX_CHARS_TOTAL) return 'too_long';
  if (clean[0].role !== 'user') return 'bad_request';
  if (clean[clean.length - 1].role !== 'user') return 'bad_request';

  const loc = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'en';
  return { messages: clean, locale: loc };
}

/** Fixed-window counter per IP. Skipped entirely when no KV namespace is bound. */
async function overRateLimit(request: Request, env: Env): Promise<boolean> {
  if (!env.RATE) return false;
  const limit = Number(env.RATE_PER_HOUR ?? '30');
  if (!Number.isFinite(limit) || limit <= 0) return false;

  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const window = Math.floor(Date.now() / 3_600_000);
  const key = `chat:${ip}:${window}`;

  const used = Number((await env.RATE.get(key)) ?? '0');
  if (used >= limit) return true;
  // TTL slightly over the window so the key cleans itself up.
  await env.RATE.put(key, String(used + 1), { expirationTtl: 3_900 });
  return false;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method === 'GET') {
      return json({ ok: true, service: 'renovo-assistant' }, 200, cors);
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, cors);
    }
    if (cors['Access-Control-Allow-Origin'] === 'null') {
      return json({ error: 'forbidden' }, 403, cors);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: 'not_configured' }, 503, cors);
    }
    if (await overRateLimit(request, env)) {
      return json({ error: 'rate_limited' }, 429, cors);
    }

    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return json({ error: 'bad_request' }, 400, cors);
    }

    const parsed = validate(raw);
    if (typeof parsed === 'string') return json({ error: parsed }, 400, cors);
    const { messages, locale } = parsed;

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
    const model = env.CHAT_MODEL || 'claude-opus-4-8';

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (event: string, data: unknown) => {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
        };

        try {
          const result = client.messages.stream({
            model,
            max_tokens: MAX_OUTPUT_TOKENS,
            system: [
              { type: 'text', text: SYSTEM_RULES[locale] },
              {
                type: 'text',
                text: KNOWLEDGE[locale],
                // Stable across every conversation — cache it and pay for it once.
                cache_control: { type: 'ephemeral' },
              },
            ],
            messages,
          });

          for await (const event of result) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              send('delta', { text: event.delta.text });
            }
          }

          const final = await result.finalMessage();
          send('done', { stop: final.stop_reason });
        } catch (error) {
          const code =
            error instanceof Anthropic.RateLimitError
              ? 'busy'
              : error instanceof Anthropic.APIConnectionError
                ? 'unreachable'
                : 'failed';
          console.error('assistant error', error);
          send('error', { error: code });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        ...cors,
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-store',
        Connection: 'keep-alive',
      },
    });
  },
};
