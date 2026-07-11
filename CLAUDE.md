# Axel Braunschweiger — Portfolio

Trilingual (EN/DE/ES) static portfolio for Axel Braunschweiger: AI-first engineer, freelance developer, founder of two companies. Goal: convert freelance clients (German SMEs first, startup founders second) for websites/redesigns and web apps/MVPs, while passively impressing recruiters. The approved strategy/design plan lives at `~/.claude/plans/personal-portfolio-project-temporal-bengio.md`.

## Positioning & voice

- Positioning: "I build websites and web apps the way an owner would — senior engineering fundamentals, AI-first workflow."
- Messaging pillars: (1) builds like an owner (founded Physio & Ergo Fürth + Ikuna Glamping, built both sites), (2) engineering fundamentals × AI velocity (heatbeat engineering GmbH history, Claude-partnered workflow), (3) teacher-grade clarity in three languages.
- Voice: **warm expert**. Approachable, plain verbs, active voice, no jargon, no hype. Copy explains; it never sells hard.
- Tech ability in the foreground; teacher/founder story as evidence of versatility, never the headline.

## Design system — "Camino v2"

Clean, stylish, professional, human, chronological. (v1 "Das Werkbuch" was rejected as too robotic; Camino v1's Fraunces serif was rejected as too playful and the green/amber palette wasn't Axel's taste. v2 keeps the human/chronological structure with a cleaner, more professional finish — Axel's own brief: "clean with a touch of dark pink, stylish but simple".)

- **Signature:** the chronological journey — Axel's path (teacher → EAFIT Medellín → heatbeat → founder ×2 → AI-first engineer) told in order along a dotted trail (`PathTimeline.astro`, white numbered markers) that draws itself in on scroll. Homepage is story-first; portrait in the hero on an offset pink tint plate.
- **Color:** clean near-white ground (#FBFAF9), near-black plum-undertone text (#1B181A), ONE dark-pink accent (#A62655, hover #831C42) used with restraint (links, primary buttons, eyebrows, stat numbers, small pills), pink tint #F7E9EF for washes/plates, plum-black band #211A1F for the CTA. Tokens in `src/styles/tokens.css` are the single source of truth; every text/ground pair contrast-validated ≥4.6:1 — re-validate before changing any color.
- **Shape:** disciplined-soft — 10–24px radii, pill buttons/nav, soft shadows, hairline dividers OK; one subtle radial pink wash top-right of each page (body::before).
- **Type:** ONE family — Hanken Grotesk Variable for everything; hierarchy via weight (730 display / 400 body / 600–700 UI) and tight display tracking (-0.025em). No serifs, no mono, nothing playful. Self-hosted only (GDPR — never load Google Fonts CDN).
- **Motion:** calm — gentle GSAP fade/rise reveals, scroll-scrubbed trail drawing, Lenis smooth scroll. No pinned sections. Every animation must have a `prefers-reduced-motion` fallback (motion system disables itself entirely).

## Stack & conventions

- Astro 5 (static output, built-in i18n) + TypeScript. GSAP/ScrollTrigger, Lenis. Hand-written CSS with custom-property tokens — no Tailwind, no UI kits.
- Content lives in per-language structured data (`src/data/{en,de,es}/`) sharing one schema; components never hardcode copy. Site is maintained via Claude Code sessions — keep content/data separation clean.
- Root routes = English; `/de/` and `/es/` mirrors; hreflang triplets everywhere.
- Performance is a feature: static output, `astro:assets` images, minimal JS islands, Lighthouse ≥95 target on every page.
- Accessibility: semantic HTML, visible focus, token contrast checked, alt text everywhere.
- Placeholder content pending from Axel is marked `TODO-CONTENT` (searchable).

## Decisions log

- 2026-07-10: Interview + analysis approved; concept "Das Werkbuch" chosen over Micromegas-full, Two Worlds, dark-tech "Signal".
- Contact = email only (no form/booking). No pricing shown. No blog. Heatbeat named with role+stack, no internal detail.
- SEO targets future domain `axelbraunschweiger.com`; until it exists, deploys go to GitHub Pages (account Micromegass) with **noindex** — do not remove noindex before the real domain is live.
- German legal pages (Impressum, Datenschutzerklärung) are required — site serves a German commercial purpose.
- Analytics: none until domain time; privacy-friendly only if added.
- 2026-07-10 (later): Complete redesign. Axel rejected "Das Werkbuch" (too robotic); replaced with "Camino" — warm/human/calm/chronological. Journey timeline is the signature; Micromegas scale story removed.
- 2026-07-10 (v2): Aesthetic refactor on Axel's feedback — Fraunces too playful, green/amber not his colors. Now: Hanken Grotesk only, clean neutrals + dark-pink accent (#A62655). Structure unchanged.
- 2026-07-10: Deployed. Source lives on the `main` branch of github.com/Micromegass/Portfolio (old portfolio remains on `master` for history). CI (`.github/workflows/deploy.yml`) builds with `GITHUB_PAGES=true` and force-publishes `dist/` to `gh-pages` on every push to `main` → live at micromegass.github.io/Portfolio/ (noindexed). Live Lighthouse: perf 100 / a11y 100 / BP 100 (SEO intentionally suppressed by noindex; local prod build scores SEO 100).

## Roadmap

1. ✅ Strategy, concept (this file's basis)
2. Build: scaffold → tokens/fonts → signature components → EN pages → DE/ES → motion → SEO/legal → deploy → audit
3. Later: real domain + hosting switch (Cloudflare Pages/Vercel), flip noindex, add testimonial(s), fill WIP-project demos, OG-image refresh, possibly analytics
