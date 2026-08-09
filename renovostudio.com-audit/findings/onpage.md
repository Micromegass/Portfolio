# On-Page SEO — findings & raw evidence

Score: **92 / 100** — the strongest category.

## Per-page inventory (all 37)

| Route | Words | Title len | Desc len | H1s | Canonical |
|---|---|---|---|---|---|
| `/` | 551 | 40 | 142 | 1 | ✓ |
| `/404.html` | 117 | 40 | 142 | 1 | ⚠ dup of `/` |
| `/ai-assistant/` | 692 | 46 | 141 | 1 | ✓ |
| `/contact/` | 338 | 46 | 132 | 1 | ✓ |
| `/de/` | 498 | 40 | 148 | 1 | ✓ |
| `/de/datenschutz/` | 1140 | 44 | 156 | 1 | ✓ |
| `/de/impressum/` | 402 | 42 | 132 | 1 | ✓ |
| `/de/ki-assistent/` | 634 | 49 | 151 | 1 | ✓ |
| `/de/kontakt/` | 309 | 52 | 156 | 1 | ✓ |
| `/de/projekte/` | 294 | 56 | 153 | 1 | ✓ |
| `/de/projekte/ikuna-glamping/` | 353 | 44 | 146 | 1 | ✓ |
| `/de/projekte/physio-ergo-fuerth/` | 361 | 58 | 142 | 1 | ✓ |
| `/de/studio/` | 553 | 31 | 154 | 1 | ✓ |
| `/de/web-apps/` | 558 | 36 | 157 | 1 | ✓ |
| `/de/website-check/` | 444 | 39 | 144 | 1 | ✓ |
| `/de/website-relaunch/` | 613 | 42 | 141 | 1 | ✓ |
| `/es/` | 566 | 37 | 142 | 1 | ✓ |
| `/es/analisis-web/` | 511 | 39 | 151 | 1 | ✓ |
| `/es/aplicaciones-web/` | 642 | 42 | 153 | 1 | ✓ |
| `/es/asistente-ia/` | 652 | 49 | 156 | 1 | ✓ |
| `/es/aviso-legal/` | 469 | 48 | 147 | 1 | ✓ |
| `/es/contacto/` | 324 | 52 | 140 | 1 | ✓ |
| `/es/estudio/` | 623 | 47 | 139 | 1 | ✓ |
| `/es/privacidad/` | 1340 | 45 | 157 | 1 | ✓ |
| `/es/proyectos/` | 354 | 43 | 146 | 1 | ✓ |
| `/es/proyectos/ikuna-glamping/` | 406 | 34 | 151 | 1 | ✓ |
| `/es/proyectos/physio-ergo-fuerth/` | 426 | 51 | 144 | 1 | ✓ |
| `/es/rediseno-web/` | 671 | 37 | 151 | 1 | ✓ |
| `/imprint/` | 450 | 45 | 145 | 1 | ✓ |
| `/privacy/` | 1316 | 49 | 155 | 1 | ✓ |
| `/studio/` | 605 | 29 | 145 | 1 | ✓ |
| `/web-apps/` | 608 | 36 | 160 | 1 | ✓ |
| `/website-check/` | 518 | 56 | 146 | 1 | ✓ |
| `/website-relaunch/` | 658 | 41 | 153 | 1 | ✓ |
| `/work/` | 335 | 51 | 148 | 1 | ✓ |
| `/work/ikuna-glamping/` | 389 | 60 | 151 | 1 | ✓ |
| `/work/physio-ergo-fuerth/` | 405 | 57 | 152 | 1 | ✓ |

**Title lengths: 29–60 chars. Description lengths: 132–160 chars. Every page in range.**

## Duplicates

```
Duplicate titles:       1 pair — "RENOVO — AI Web Studio for relaunch & AI" on / and /404.html
Duplicate descriptions: 1 pair — same two pages
```

Everything else is unique.

## Heading hierarchy

```
Heading-level skips across all 37 pages: 0
Pages with exactly one H1: 37 / 37
```

## EN title / H1 pairs

| Route | Title | H1 |
|---|---|---|
| `/` | RENOVO — AI Web Studio for relaunch & AI | Your website, rebuilt for the AI era. |
| `/ai-assistant/` | Websites with a built-in AI assistant \| RENOVO | A website that answers questions while you sleep. |
| `/contact/` | Start a project — free website review \| RENOVO | Send us your website. Get an honest verdict. |
| `/imprint/` | Imprint — legal notice \| RENOVO AI Web Studio | Imprint |
| `/privacy/` | Privacy policy — no cookies, no tracking \| RENOVO | Privacy policy |
| `/studio/` | The studio — how RENOVO works | Small studio. Senior work. AI-first workflow. |
| `/web-apps/` | Web apps with real backends \| RENOVO | When a website is not enough. |
| `/website-check/` | Free website check — speed, SEO & accessibility \| RENOVO | How healthy is your website, really? |
| `/website-relaunch/` | Website relaunch & modernisation \| RENOVO | A website that finally matches your business. |
| `/work/` | Work — websites and web apps we have built \| RENOVO | Websites businesses run on every day. |
| `/work/ikuna-glamping/` | Case study: Ikuna Glamping — brand and booking site \| RENOVO | A mountain refuge with a digital front door |
| `/work/physio-ergo-fuerth/` | Case study: website for a physiotherapy practice \| RENOVO | A practice that explains itself clearly |

Titles are benefit-led and brand-suffixed; H1s are distinct from titles rather than duplicating
them — which is the right pattern.

## Social markup

Present and complete on every page:

```
og:type, og:title, og:description, og:url, og:locale, og:site_name
og:image (+ og:image:width 1200, og:image:height 630, og:image:alt)
twitter:card = summary_large_image, twitter:image
theme-color
```

Per-language OG images wired: `og.png` (en), `og-de.png`, `og-es.png`.

## Head tag order (homepage)

```
1. charset          2. viewport        3. generator     4. favicon
5. inline theme script (pre-paint, prevents FOUC)
6. title            7. description     8. canonical     9-12. hreflang x4
13-22. Open Graph   23-24. Twitter     25. theme-color
26-27. JSON-LD x2   28-29. stylesheets
```

`charset` and `viewport` come first; the theme script is intentionally pre-paint. Correct.
