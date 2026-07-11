# Axel Braunschweiger — Portfolio

Trilingual (EN/DE/ES) static portfolio for Axel Braunschweiger: AI-first engineer, freelance developer, founder of two companies. Goal: convert freelance clients (German SMEs first, startup founders second) for websites/redesigns and web apps/MVPs, while passively impressing recruiters. The approved strategy/design plan lives at `~/.claude/plans/personal-portfolio-project-temporal-bengio.md`.

## Positioning & voice

- Positioning: "I build websites and web apps the way an owner would — senior engineering fundamentals, AI-first workflow."
- Messaging pillars: (1) builds like an owner (founded Physio & Ergo Fürth + Ikuna Glamping, built both sites), (2) engineering fundamentals × AI velocity (heatbeat engineering GmbH history, Claude-partnered workflow), (3) teacher-grade clarity in three languages.
- Voice: **warm expert**. Approachable, plain verbs, active voice, no jargon, no hype. Copy explains; it never sells hard.
- Tech ability in the foreground; teacher/founder story as evidence of versatility, never the headline.

## Design system — "Camino"

Warm, human, calm, professional — and chronological. (Replaced the earlier "Das Werkbuch" technical-drawing concept, which Axel rejected as too robotic on 2026-07-10.)

- **Signature:** the chronological journey — Axel's path (teacher → EAFIT Medellín → heatbeat → founder ×2 → AI-first engineer) told in order along a gently curving dotted trail (`PathTimeline.astro`) that draws itself in on scroll. The homepage is story-first; the portrait appears in the hero.
- **Color:** warm linen ground (#FBF7F2), espresso text, deep green accent (#3E6B54 family) + soft amber highlights; full-bleed deep-green CTA band. Tokens in `src/styles/tokens.css` are the single source of truth; every text/ground pair is contrast-validated ≥4.5:1 — re-validate before changing any color.
- **Shape:** soft and human — rounded cards (10–28px radii), pill buttons/nav, arched portrait frame, soft shadows. No hairlines, no mono annotations, no drafting metaphors anywhere (incl. copy).
- **Type:** Fraunces Variable for display (soft optical serif; italic + SOFT axis for warm emphasis), Plus Jakarta Sans Variable for body. Self-hosted only (GDPR — never load Google Fonts CDN).
- **Motion:** calm — gentle GSAP fade/rise reveals, slow eases, scroll-scrubbed trail drawing, Lenis smooth scroll. No pinned sections. Every animation must have a `prefers-reduced-motion` fallback (motion system disables itself entirely).

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
- 2026-07-10: Deployed. Source lives on the `main` branch of github.com/Micromegass/Portfolio (old portfolio remains on `master` for history). CI (`.github/workflows/deploy.yml`) builds with `GITHUB_PAGES=true` and force-publishes `dist/` to `gh-pages` on every push to `main` → live at micromegass.github.io/Portfolio/ (noindexed). Live Lighthouse: perf 100 / a11y 100 / BP 100 (SEO intentionally suppressed by noindex; local prod build scores SEO 100).

## Roadmap

1. ✅ Strategy, concept (this file's basis)
2. Build: scaffold → tokens/fonts → signature components → EN pages → DE/ES → motion → SEO/legal → deploy → audit
3. Later: real domain + hosting switch (Cloudflare Pages/Vercel), flip noindex, add testimonial(s), fill WIP-project demos, OG-image refresh, possibly analytics
