# RENOVO assistant — backend

The one piece of server the studio site runs. Everything else is static.

It receives a conversation from the chat widget, asks Claude for the next reply
with the site's own content as grounding, and streams the answer back. It holds
the Anthropic API key so the browser never sees it.

```
browser (ChatWidget) ──POST /──▶ worker ──▶ Anthropic Messages API
        ◀──── SSE: delta… delta… done ────┘
```

## What is in here

| File | Purpose |
|---|---|
| `src/index.ts` | The worker: CORS, validation, rate limiting, streaming |
| `src/prompt.ts` | The assistant's standing instructions, per language |
| `src/knowledge.generated.ts` | **Generated.** The site's content as reference material |
| `wrangler.toml` | Public config — origins, model, rate limit |

`knowledge.generated.ts` is built from `src/data/{en,de,es}.ts` by
`scripts/build-knowledge.mjs`, so the assistant can only ever describe what the
website itself says. Regenerate it whenever site copy changes:

```sh
npm run knowledge   # from this directory; also runs before dev and deploy
```

## Deploying

```sh
cd backend
npm install
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY   # paste the key from console.anthropic.com
npm run deploy
```

Wrangler prints the worker URL. Put it in the site's build environment as
`PUBLIC_CHAT_ENDPOINT` — locally in `.env`, and on GitHub under
Settings → Secrets and variables → Actions → Variables. **Without that variable
the chat widget is not built into the pages at all**, which is the safe default:
no half-working assistant if the backend is down or unpaid.

Then add the site's real origin to `ALLOWED_ORIGINS` in `wrangler.toml` and
redeploy. Only listed origins can call the worker.

### Rate limiting (recommended before the real domain goes live)

Off until a KV namespace is bound, because without one the worker cannot count.

```sh
npx wrangler kv namespace create RATE
```

Paste the returned id into the commented `[[kv_namespaces]]` block in
`wrangler.toml`, uncomment it, and redeploy. `RATE_PER_HOUR` (default 30) then
applies per IP address.

## Cost

Every reply pays for the system prompt (the rules plus ~5k tokens of site
content) and the conversation so far. The system prompt is marked for prompt
caching, so within a five-minute window repeat turns read it at a tenth of the
price; the first turn of each conversation pays full price.

Roughly, with `claude-opus-4-8` at $5/$25 per million tokens, a typical
three-question conversation costs a few cents. Set `CHAT_MODEL` in
`wrangler.toml` to `claude-haiku-4-5` if that matters more than answer quality —
it is a fraction of the price and fine for grounded FAQ answering. That is a
deliberate trade, not a default we made for you.

Hard ceilings already in place: 900 output tokens per reply, 24 turns and
16,000 characters per conversation, 2,000 characters per message.

## Scope

The assistant answers questions about the studio. It is instructed never to
quote prices, never to commit the studio to anything, and to say it does not
know rather than invent — see `src/prompt.ts`. Those rules are the product;
change them carefully.

## Privacy

Conversations are not stored. The worker keeps only a per-IP counter in KV for
at most 65 minutes for the rate limit. The processing is disclosed in the site's
privacy policy (section 4) in all three languages — if you change what this
worker does with data, change that section too.
