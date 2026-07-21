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
- **Color:** dark canvas `#0B0A0C` with light content bands (`#FAF8FA`), one vivid magenta accent `#FF3D77`. Buttons are magenta with **near-black text** (5.8:1 — white on magenta fails). Sections declare `data-tone="dark|light"` and everything styles through the resolved `--bg/--fg/--line/--accent-text` tokens in `src/styles/tokens.css`. Re-validate contrast before changing any color.
- **Type:** one family, Hanken Grotesk Variable. Hierarchy from weight (780 display) and tight tracking (-0.038em). Self-hosted only (GDPR — never load Google Fonts CDN).
- **Motion:** hero entrance is **pure CSS** (`[data-hero-seq]`, see global.css) so above-the-fold text never waits on JS. Scroll reveals use IntersectionObserver + `.is-in` classes, armed by an inline `<head>` script that removes itself after 3.5s if the bundle never initialises. Never gate content behind scroll-position maths — it desynced with smooth scroll and left sections invisible.

## Stack & conventions

- Astro 7 (static, built-in i18n) + TypeScript, Three.js, GSAP ticker + Lenis, hand-written CSS tokens. No Tailwind, no UI kits.
- Content lives in `src/data/{en,de,es}.ts` against one `SiteContent` type — translations cannot drift. Components never hardcode copy.
- Routes are generated from the single map in `src/lib/i18n.ts` (`routes`), including localized slugs (`/de/ki-assistent/`, `/es/rediseno-web/`). Add a page there once and all three languages follow.
- Studio identity (name, domain, email) is centralised in `studio` in `src/lib/i18n.ts`. `astro.config.mjs` `site` must match `studio.domain`.
- Placeholders pending from Axel are marked `TODO-CONTENT`.

## Verification (Lighthouse is currently unreliable here)

The local Lighthouse CLI returns `NO_FCP` for every URL including `example.com` — the tool is broken in this environment, not the site. Verify with Playwright instead: CPU-throttle 4x via CDP, read `first-contentful-paint` / `layout-shift` / `longtask` from the performance timeline, and run `axe-core` for WCAG A/AA. Last run: FCP 48–172ms, CLS 0, zero long tasks, **0 axe violations** across 10 pages in 3 languages, no JS errors.

## Decisions log

- 2026-07-10: Interview + strategy approved. Contact = email only; no pricing; no blog; German legal pages required; noindex until the real domain is live.
- 2026-07-10: Design v1 "Das Werkbuch" (technical-drawing) rejected as too robotic. v2 "Camino" (warm, chronological) — structure liked, Fraunces serif rejected as too playful and green/amber palette rejected. v3 "Camino v2" — clean neutrals + dark pink, Hanken Grotesk.
- 2026-07-21: **Repositioned from personal portfolio to studio site.** Axel: focus on the work (relaunches, AI chatbots in new sites, web apps), not on himself; story moves to a Studio tab; wanted more "wow" and Three.js. New IA: Home, three service pages, Work + 2 case studies, Studio, Contact, legal. New dark studio design with the WebGL transformer hero. Studio named **RENOVO** (Latin "I renew"; reads as renewal in DE/EN/ES) — chosen because Axel asked for a studio name without his surname.
- 2026-07-21: Case studies presented as client projects (founder role mentioned only in the Studio timeline).
- **Open:** `renovostudio.com` is a placeholder — confirm availability/trademark, then update `studio.domain` and `astro.config.mjs` together. Keep `GITHUB_PAGES=true` noindex until the real domain is live.

## Roadmap

1. ✅ Strategy, concept, full trilingual build, deploy
2. Fill `TODO-CONTENT`: testimonial, lab project links, Impressum data, final domain + email
3. Then: real domain + hosting (Cloudflare Pages/Vercel), flip noindex, OG images, first real AI-assistant reference project
