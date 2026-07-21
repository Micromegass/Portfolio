/**
 * Studio assistant — client side.
 *
 * Holds the transcript in memory (nothing is persisted), streams the reply from
 * the worker over SSE, and keeps the panel keyboard-operable. The panel only
 * exists in the DOM when PUBLIC_CHAT_ENDPOINT is configured at build time.
 */

export interface ChatStrings {
  thinking: string;
  replyReady: string;
  errors: {
    failed: string;
    busy: string;
    rateLimited: string;
    tooLong: string;
    offline: string;
  };
}

interface Options {
  root: HTMLElement;
  endpoint: string;
  locale: 'en' | 'de' | 'es';
  strings: ChatStrings;
}

type Turn = { role: 'user' | 'assistant'; content: string };

/** Server error codes → the string we show. Anything unknown reads as `failed`. */
const ERROR_KEYS: Record<string, keyof ChatStrings['errors']> = {
  busy: 'busy',
  rate_limited: 'rateLimited',
  too_long: 'tooLong',
  unreachable: 'offline',
  not_configured: 'failed',
  forbidden: 'failed',
  bad_request: 'failed',
  failed: 'failed',
};

export function initChat({ root, endpoint, locale, strings }: Options): void {
  const launcher = root.querySelector<HTMLButtonElement>('[data-chat-launch]');
  const panel = root.querySelector<HTMLElement>('[data-chat-panel]');
  const closeBtn = root.querySelector<HTMLButtonElement>('[data-chat-close]');
  const log = root.querySelector<HTMLElement>('[data-chat-log]');
  const form = root.querySelector<HTMLFormElement>('[data-chat-form]');
  const input = root.querySelector<HTMLTextAreaElement>('[data-chat-input]');
  const sendBtn = root.querySelector<HTMLButtonElement>('[data-chat-send]');
  const status = root.querySelector<HTMLElement>('[data-chat-status]');
  const suggestions = root.querySelector<HTMLElement>('[data-chat-suggestions]');

  if (!launcher || !panel || !closeBtn || !log || !form || !input || !sendBtn || !status) return;

  const transcript: Turn[] = [];
  let open = false;
  let busy = false;
  let controller: AbortController | null = null;

  /* ---------- panel ---------- */

  function setOpen(next: boolean) {
    open = next;
    root.classList.toggle('chat--open', next);
    launcher!.setAttribute('aria-expanded', String(next));
    panel!.hidden = !next;
    if (next) {
      input!.focus();
    } else {
      controller?.abort();
      launcher!.focus();
    }
  }

  launcher.addEventListener('click', () => setOpen(!open));
  closeBtn.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation();
      setOpen(false);
    }
  });

  // Keep tabbing inside the panel while it is open — it behaves as a dialog.
  panel.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button:not([disabled]), textarea, a[href]'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ---------- rendering ---------- */

  function bubble(role: 'user' | 'assistant' | 'error', text: string): HTMLElement {
    const el = document.createElement('div');
    el.className = `chat__msg chat__msg--${role}`;
    // textContent, never innerHTML — model output is never trusted as markup.
    el.textContent = text;
    log!.append(el);
    log!.scrollTop = log!.scrollHeight;
    return el;
  }

  function announce(message: string) {
    status!.textContent = message;
  }

  function setBusy(next: boolean) {
    busy = next;
    sendBtn!.disabled = next;
    input!.disabled = next;
    root.classList.toggle('chat--busy', next);
  }

  /* ---------- sending ---------- */

  async function send(text: string) {
    if (busy || !text.trim()) return;
    suggestions?.remove();

    transcript.push({ role: 'user', content: text.trim() });
    bubble('user', text.trim());
    input!.value = '';
    resize();
    setBusy(true);
    announce(strings.thinking);

    const pending = bubble('assistant', '');
    pending.classList.add('chat__msg--pending');

    controller = new AbortController();
    let reply = '';
    let failure: string | null = null;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: transcript, locale }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const body = await response.json().catch(() => ({}));
        failure = (body as { error?: string }).error ?? 'failed';
      } else {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // SSE frames are separated by a blank line; keep any partial tail.
          const frames = buffer.split('\n\n');
          buffer = frames.pop() ?? '';

          for (const frame of frames) {
            const event = /^event: (.+)$/m.exec(frame)?.[1];
            const raw = /^data: (.+)$/m.exec(frame)?.[1];
            if (!event || !raw) continue;
            let payload: { text?: string; error?: string };
            try {
              payload = JSON.parse(raw);
            } catch {
              continue;
            }
            if (event === 'delta' && payload.text) {
              reply += payload.text;
              pending.textContent = reply;
              pending.classList.remove('chat__msg--pending');
              log!.scrollTop = log!.scrollHeight;
            } else if (event === 'error') {
              failure = payload.error ?? 'failed';
            }
          }
        }
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        pending.remove();
        transcript.pop();
        setBusy(false);
        return;
      }
      failure = 'unreachable';
    }

    setBusy(false);
    controller = null;

    if (reply) {
      transcript.push({ role: 'assistant', content: reply });
      announce(strings.replyReady);
      // A failure after partial text still leaves the visitor with a truncated
      // answer, so say so rather than pretending the reply is complete.
      if (failure) bubble('error', strings.errors.failed);
    } else {
      pending.remove();
      transcript.pop();
      const key = ERROR_KEYS[failure ?? 'failed'] ?? 'failed';
      const message = strings.errors[key];
      bubble('error', message);
      announce(message);
    }

    input!.focus();
  }

  /* ---------- composer ---------- */

  function resize() {
    input!.style.height = 'auto';
    input!.style.height = `${Math.min(input!.scrollHeight, 140)}px`;
  }

  input.addEventListener('input', resize);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form!.requestSubmit();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void send(input.value);
  });

  suggestions?.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-suggestion]');
    if (button) void send(button.textContent ?? '');
  });

  // Drop the in-flight request if the visitor leaves mid-answer.
  window.addEventListener('pagehide', () => controller?.abort());
}
