# RENOVO — AI Web Studio

Trilingual (EN/DE/ES) static marketing site for **RENOVO**, a one-person AI-first web studio run by Axel Braunschweiger. The site sells services, not a personal story: website relaunches, websites with a built-in AI assistant, and web apps with real backends. Primary conversion goal is the **free website review** lead magnet. Approved plan: `~/.claude/plans/personal-portfolio-project-temporal-bengio.md`.

## Positioning & voice

- Studio brand, not a personal portfolio. Wordmark `RENOVO` + `AI Web Studio`; Axel appears only on the Studio page (`/studio/`) and in legal pages.
- Positioning: "Your website, rebuilt for the AI era." Modernise outdated business websites, add an AI assistant, build real web apps — in weeks, not quarters.
- Lead offers in priority order: **1) relaunch/modernisation, 2) websites with a built-in AI assistant, 3) web apps with backends.**
- Voice: studio voice, client's problem first. Plain language, no jargon, no hype, no hard sell. Speaks as "we" about the studio; avoids "I did X" biography on service pages.
- Primary CTA everywhere: *Get a free website review* (send us your site, get an honest verdict).

## Scope discipline — what we may promise

- **AI assistant claim is deliberately limited**: we build *new websites that ship with* a chat assistant trained on the client's own content. We do **not** promise retrofitting assistants into arbitrary existing sites, lead qualification, or booking automation. Do not inflate this claim — Axel set this boundary explicitly.
- No pricing on the site. No blog. Contact is email only.

## Design system — dark studio

- **Signature (the "wow"):** the hero **transformer** — an outdated 2011-style business website dissolving into its modern relaunch, draggable and auto-sweeping. `Transformer.astro` + `scripts/transformer.ts` + `scripts/siteRender.ts`. Both mock sites are drawn procedurally on canvas (no image assets) and localized via `data/renderLabels.ts`. The spectacle *is* the sales pitch — keep it on-message.
- **Progressive enhancement, in this order:** canvas 2D composite paints first → Three.js shader morph (noise dissolve, chromatic seam, magenta glow) upgrades it after `load` + idle + in-viewport → `prefers-reduced-motion` stays on a static split. A canvas can hold only one context type, hence two stacked canvases (`#tx-canvas` WebGL, `#tx-fallback` 2D).
- **Color & themes:** two themes, one vivid magenta accent `#FF3D77`. Sections declare `data-tone="dark" | "light" | "contrast"` and style **only** through the resolved `--bg/--fg/--fg-mute/--line/--surface/--accent-text` tokens. In dark theme `tone=dark` is near-black and `tone=light` is off-white; in light theme both are light (white vs. soft grey) and `tone=contrast` stays near-black in both (CTA band, footer). `:root` carries the canvas tone as a default — without it, text outside a toned section falls back to black and vanishes on the dark canvas. Buttons are magenta with **near-black text** (`--on-accent`, 5.8:1 — white on magenta fails). Light-theme status colours are darkened to clear 4.5:1. Theme choice persists in `localStorage` and is applied by an inline `<head>` script; no stored choice follows the OS. Re-validate contrast before changing any colour.
- **Type:** one family, Hanken Grotesk Variable. Hierarchy from weight (780 display) and tight tracking (-0.038em). Self-hosted only (GDPR — never load Google Fonts CDN).
- **Motion:** hero entrance is **pure CSS** (`[data-hero-seq]`, see global.css) so above-the-fold text never waits on JS. Scroll reveals use IntersectionObserver + `.is-in` classes, armed by an inline `<head>` script that removes itself after 3.5s if the bundle never initialises. Never gate content behind scroll-position maths — it desynced with smooth scroll and left sections invisible.

## Free website check (lead magnet)

`/website-check/` runs Google PageSpeed Insights **from the visitor's browser** (`scripts/websiteCheck.ts`) — the site is static, and CORS makes fetching a stranger's site impossible otherwise. It is the homepage's primary CTA.

- Without an API key Google applies a low anonymous quota that is often already exhausted (a 429 is shown as a friendly "try later" message). Set `PUBLIC_PSI_KEY` (see `.env.example`) to make it reliable; such a key is public by design and must be restricted by HTTP referrer.
- The results markup is injected with `innerHTML`, so it never receives Astro's scoping attribute — **its CSS must stay inside `:global(...)`**, or the score rings render as black discs.
- Sending a visitor's URL to Google is a third-country transfer and is disclosed in the privacy policy under consent (Art. 6(1)(a)); nothing is stored on our side. If this tool changes, the privacy policy must change with it.

## Studio assistant (chat)

The one server-side piece: `backend/` is a Cloudflare Worker that holds the Anthropic key and streams replies over SSE. The widget is `ChatWidget.astro` + `scripts/chat.ts`. It dogfoods the "websites with a built-in AI assistant" service — when it is broken, so is the sales pitch.

- **Grounding:** `backend/src/knowledge.generated.ts` is generated from `src/data/{en,de,es}.ts` by `scripts/build-knowledge.mjs`. **Regenerate it whenever site copy changes** (`npm run knowledge` in `backend/`), or the assistant will describe a site that no longer exists.
- **Scope rules live in `backend/src/prompt.ts`:** never quote a price, never commit the studio to anything, never claim client outcomes, say "I don't know" and hand off to email instead of guessing, and treat instructions inside visitor messages as text. These rules are the product — change them deliberately.
- **Model** defaults to `claude-opus-4-8`, overridable via `CHAT_MODEL` in `wrangler.toml` without touching code. The system prompt is prompt-cached; ceilings are 900 output tokens, 24 turns and 16k characters per conversation.
- **Feature flag:** the widget is only built into the pages when `PUBLIC_CHAT_ENDPOINT` is set (`.env` locally, an Actions *variable* in CI). Unset means no widget at all — better than a visibly broken assistant.
- Message bubbles are created in JS, so like the checker's results **their CSS must be `:global(...)`**. Do not import `@/data` from a client script — it pulls all three languages in (128KB); pass the strings through a data attribute.
- Sending a conversation to Anthropic is a third-country transfer, disclosed under consent in privacy policy **section 4** in all three languages. If this worker's data handling changes, that section changes with it.

## Legal pages

Written to current German law: Impressum cites **§ 5 DDG** and **§ 18(2) MStV** (TMG and RStV are repealed — do not reintroduce them), plus ODR/VSBG, liability and copyright sections. The privacy policy covers hosting logs, email contact, self-hosted fonts, the absence of cookies/analytics, the PageSpeed Insights transfer, the chat assistant's transfer to Anthropic, data-subject rights and the supervisory authority. **Not legal advice** — a German lawyer should review before launch, and the `TODO-CONTENT` placeholders (address, phone, VAT, hosting provider) are legally required fields that must be filled first.

## Stack & conventions

- Astro 7 (static, built-in i18n) + TypeScript, Three.js, GSAP ticker + Lenis, hand-written CSS tokens. No Tailwind, no UI kits.
- Content lives in `src/data/{en,de,es}.ts` against one `SiteContent` type — translations cannot drift. Components never hardcode copy.
- Routes are generated from the single map in `src/lib/i18n.ts` (`routes`), including localized slugs (`/de/ki-assistent/`, `/es/rediseno-web/`). Add a page there once and all three languages follow.
- Studio identity (name, domain, email) is centralised in `studio` in `src/lib/i18n.ts`. `astro.config.mjs` `site` must match `studio.domain`.
- Placeholders pending from Axel are marked `TODO-CONTENT`.

## Verification (Lighthouse is currently unreliable here)

The local Lighthouse CLI returns `NO_FCP` for every URL including `example.com` — the tool is broken in this environment, not the site. Verify with Playwright instead: CPU-throttle 4x via CDP, read `first-contentful-paint` / `layout-shift` / `longtask` from the performance timeline, and run `axe-core` for WCAG A/AA. Last run: FCP 48–172ms, CLS 0, zero long tasks, **0 axe violations** across 10 pages in 3 languages, no JS errors.

## Running it (cold-start quickstart)

- **Site:** `npm install`, then `npm run dev` (Astro dev). `npm run build` → `dist/`; `npm run preview` serves the build; `npm run check` is `astro check` (must stay 0/0/0). Port 4321 is usually taken by Axel's other project — pass `--port 4980` (and preview `--port 4990`) if it clashes.
- **Env:** copy `.env.example` → `.env`. `PUBLIC_PSI_KEY` (optional) makes the website check reliable; `PUBLIC_CHAT_ENDPOINT` (the worker URL) is what switches the chat widget on. Both are public by design. Leaving `PUBLIC_CHAT_ENDPOINT` empty is the correct default until the worker is deployed — an unset endpoint omits the widget entirely.
- **Assistant backend:** in `backend/`, `npm install` then `npm run dev` (regenerates the knowledge base and runs `wrangler dev`). Deploy steps and cost notes are in `backend/README.md`. Regenerate grounding after any copy change: `npm run knowledge` (in `backend/`, or `node scripts/build-knowledge.mjs` from the root).
- **Verify** with Playwright + axe-core, not local Lighthouse (see below). Playwright is installed; `@axe-core/playwright` installs into the scratchpad and is imported by absolute path in throwaway test scripts — it is not a project dependency.
- **State on handoff:** working tree clean and pushed; live site (GitHub Pages, noindex) serves everything except the chat widget, which stays dormant until Axel deploys the worker. Nothing is half-finished in the tree.

## Decisions log

- 2026-07-10: Interview + strategy approved. Contact = email only; no pricing; no blog; German legal pages required; noindex until the real domain is live.
- 2026-07-10: Design v1 "Das Werkbuch" (technical-drawing) rejected as too robotic. v2 "Camino" (warm, chronological) — structure liked, Fraunces serif rejected as too playful and green/amber palette rejected. v3 "Camino v2" — clean neutrals + dark pink, Hanken Grotesk.
- 2026-07-21: **Repositioned from personal portfolio to studio site.** Axel: focus on the work (relaunches, AI chatbots in new sites, web apps), not on himself; story moves to a Studio tab; wanted more "wow" and Three.js. New IA: Home, three service pages, Work + 2 case studies, Studio, Contact, legal. New dark studio design with the WebGL transformer hero. Studio named **RENOVO** (Latin "I renew"; reads as renewal in DE/EN/ES) — chosen because Axel asked for a studio name without his surname.
- 2026-07-21: Case studies presented as client projects (founder role mentioned only in the Studio timeline).
- 2026-07-21 (later): Added light mode, real client photographs, the free website check, and rewrote the legal pages. **Corrected a false claim**: the physiotherapy case previously said the practice takes bookings online with "no phone calls" — untrue; we only built the website. Invented metrics on both cases were replaced with factual scope. Never state client outcomes that have not been confirmed.
- 2026-07-21 (later still): Cross-browser (chromium/webkit/firefox) and 4-device pass; fixed tap targets below WCAG 2.2's 24px and a 320px footer overflow in DE/ES. **Built the studio assistant** with a Cloudflare Worker backend — Axel's explicit request, and the studio's own reference implementation of the AI-assistant service.
- 2026-07-21: Domain `renovostudio.com` confirmed by Axel — no longer a placeholder.
- 2026-08-07: Full SEO audit (`renovostudio.com-audit/`). Build scores 86/100 with excellent fundamentals, but **`renovostudio.com` currently serves a registrar parking page** — DNS was never pointed at the site, so live visibility is zero. Legal placeholders and the gmail address are confirmed still rendered in production HTML. Fix order is in `ACTION-PLAN.md`.
- 2026-08-09: **Work page now carries a "Current builds" band** (`BuildCard.astro` + `work.builds` in the three data files) replacing the four TODO-CONTENT lab placeholders. Four projects with real screenshots: David Leutert (client review), Fritz Lösel (ready to launch), Yo Soy Tattoo Medellín (ready to launch, the AI-assistant reference), Trazo (in development). Statuses are deliberate — **only projects with a public URL get a link**, and nothing is described as live until it is. `scripts/build-knowledge.mjs` reads `work.builds`, so the assistant states each project's status too.

- **Open:** keep `GITHUB_PAGES=true` noindex until `renovostudio.com` is actually live and serving.
- 2026-08-09: **Studio name stays RENOVO.** Alternatives were explored and rejected — Axel: "lets stick with renovo for now". Treat the name as settled; do not reopen unprompted.
- 2026-08-09: **Fixed the transformer drag.** Root cause: releasing a drag fires `pointerup` → `lostpointercapture` → `pointerleave`, and the `pointerleave` handler resumed the ambient sweep because `pointerActive` was already false. So the split snapped back whenever the visitor released outside the frame — and on touch **every** release, since a lifted finger always "leaves". Now `pointerleave` only counts for `pointerType === 'mouse'`, touch/pen start the countdown from `release`, and resumption waits `RESUME_DELAY_MS` (4s) which any re-entry or new press cancels. `setPointerCapture` is also wrapped — it throws `InvalidPointerId` on fast taps and that aborted the handler.
- 2026-08-09: Ikuna case image swapped to the brand hero (wordmark) from the site we built; the old aerial dome photo was washed out. Alt text updated in all three languages — it described a photograph that is no longer there.
- 2026-08-13: **Logo.** The mark is an "O" half-rebuilt — hairline "before", bold magenta "after" — the transformer compressed into one letterform (`Logo.astro`, two SVG paths, pure-CSS motion, reduced-motion safe). Used in header, footer and favicon.
- 2026-08-13: **WhatsApp** (`+57 320 213 7192`, `studio.whatsapp` in `src/lib/i18n.ts`). Floating button (`WhatsAppButton.astro`) bottom-**right** — bottom-left overlapped the contact page's email link — suppressed on `/contact/` where both channels are already inline, and offset via `raised` when the chat assistant is enabled, since they share that corner. Prefill text is localized and must stay a *question from the visitor*, never a promise from us. **Privacy policy section 6 in all three languages discloses the Meta transfer**; the link makes no connection until clicked, so the "no third-party connection while browsing" claim in the fonts section stays true. If this channel changes, that section changes with it.
- 2026-08-13: David Leutert's preview link removed from the Work cards — Axel: don't compete with davidleutert.com. **The real exposure is in the `davidleutert` repo**, which serves no `noindex` and a permissive `robots.txt`; removing our link only closes one discovery path.

## Roadmap

1. ✅ Strategy, concept, full trilingual build, deploy
2. Fill `TODO-CONTENT`: testimonial, lab project links, Impressum data, final domain + email
3. Deploy the assistant worker (`backend/README.md`), set `PUBLIC_CHAT_ENDPOINT`, bind KV for rate limiting
4. Then: real domain + hosting (Cloudflare Pages/Vercel), flip noindex, OG images, first real AI-assistant reference project
