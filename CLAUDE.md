# Axel Braunschweiger — Portfolio

Trilingual (EN/DE/ES) static portfolio for Axel Braunschweiger: AI-first engineer, freelance developer, founder of two companies. Goal: convert freelance clients (German SMEs first, startup founders second) for websites/redesigns and web apps/MVPs, while passively impressing recruiters. The approved strategy/design plan lives at `~/.claude/plans/personal-portfolio-project-temporal-bengio.md`.

## Positioning & voice

- Positioning: "I build websites and web apps the way an owner would — senior engineering fundamentals, AI-first workflow."
- Messaging pillars: (1) builds like an owner (founded Physio & Ergo Fürth + Ikuna Glamping, built both sites), (2) engineering fundamentals × AI velocity (heatbeat engineering GmbH history, Claude-partnered workflow), (3) teacher-grade clarity in three languages.
- Voice: **warm expert**. Approachable, plain verbs, active voice, no jargon, no hype. Copy explains; it never sells hard.
- Tech ability in the foreground; teacher/founder story as evidence of versatility, never the headline.

## Design system — "Das Werkbuch"

Light, editorial-precision design inspired by German technical drawings (Werkbuch = engineer's workbook), warmed by Latin American type design.

- **Signature:** annotation/dimension lines that point at real proof; case studies rendered as annotated blueprints. One bold moment only: the Micromegas zoom hero on Home (Micromegas = Axel's GitHub handle, from Voltaire — scale/perspective). Everything else stays quiet and precise.
- **Color:** paper white ground, ink blue-black text, one warm accent. Tokens in `src/styles/tokens.css` are the single source of truth. Never introduce colors outside tokens. Avoid cream+terracotta AI-default look.
- **Type:** characterful grotesk display, humanist body, mono/utility face for annotations and dimension labels. Self-hosted + subsetted only (GDPR — never load Google Fonts CDN).
- **Motion:** GSAP + ScrollTrigger; annotation lines draw in on scroll; Lenis smooth scroll. Every animation must have a `prefers-reduced-motion` fallback. Motion enhances usability, never distracts.

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

## Roadmap

1. ✅ Strategy, concept (this file's basis)
2. Build: scaffold → tokens/fonts → signature components → EN pages → DE/ES → motion → SEO/legal → deploy → audit
3. Later: real domain + hosting switch (Cloudflare Pages/Vercel), flip noindex, add testimonial(s), fill WIP-project demos, OG-image refresh, possibly analytics
