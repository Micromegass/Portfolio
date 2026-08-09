# RENOVO — Full SEO Audit

**Audited:** 2026-08-07
**Target:** production build of `renovostudio.com` (37 pages, EN/DE/ES) + live interim deploy
**Method:** static analysis of `dist/` (production config), plus Playwright/CDP field measurement and axe-core against `npm run preview`

---

## Executive summary

**Build health score: 86 / 100**
**Live organic visibility: 0** — and that is not a scoring artifact, it is the actual state.

The site itself is one of the more technically correct builds you will audit: canonicals, hreflang, schema, headings, alt text and Core Web Vitals are all in good order, with zero accessibility violations and zero third-party requests. The problems are almost entirely **launch-state** problems, not craft problems.

Three facts dominate this audit:

1. **`renovostudio.com` does not serve this site.** It resolves to a registrar **parking page** (`openresty`, 114-byte HTML that JS-redirects to `/lander`, with its own `robots.txt`, `llms.txt` and a one-URL `sitemap.xml` listing `https://renovostudio.com/lander`). Every canonical, hreflang and schema URL in the build points at that domain.
2. **The only live copy is the GitHub Pages interim deploy**, which is correctly and deliberately `noindex, nofollow` with no sitemap. Working as designed — but it means nothing is indexable anywhere today.
3. **The Impressum and privacy policy ship visible placeholder text** — `[Street and number]`, `[Postcode] Fürth`, `[VAT ID]`, `[required — a phone number …]`, `[hosting provider, address]` — rendered into production HTML in all three languages. These are legally mandated fields under § 5 DDG, and they are also crawlable trust signals.

None of these are code defects. They are the open items already tracked in `CLAUDE.md`, now confirmed against the built output and quantified.

### Top 5 critical / high issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | Canonical domain `renovostudio.com` serves a parking page, not the site | Critical |
| 2 | Impressum + privacy policy render bracketed placeholders in production HTML (§ 5 DDG fields) | Critical |
| 3 | Personal Gmail (`axelbraunschweiger@gmail.com`) is the studio's public contact in 43 links + schema | High |
| 4 | Empty testimonial (`quote: ''`) — social-proof slot builds but renders nothing | High |
| 5 | `ProfessionalService` schema has no `logo`/`image`, no `telephone`, incomplete `PostalAddress` | High |

### Top 5 quick wins

| # | Fix | Effort |
|---|-----|--------|
| 1 | Add `<link rel="preload">` for the latin `woff2` (34KB, currently discovered only after CSS parses) | 5 min |
| 2 | Add `sizes` to the 39 responsive images — `srcset` without `sizes` makes the browser assume `100vw` | 15 min |
| 3 | `noindex` the 404 page and drop its canonical/hreflang (it currently duplicates the homepage title + description) | 10 min |
| 4 | Add `lastmod` to the sitemap (36 URLs, currently none) | 10 min |
| 5 | Add `xhtml:link` hreflang alternates into the sitemap — recommended for trilingual sites | 20 min |

---

## Scoring

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 78 | 17.2 |
| Content Quality | 23% | 80 | 18.4 |
| On-Page SEO | 20% | 92 | 18.4 |
| Schema / Structured Data | 10% | 88 | 8.8 |
| Performance (CWV) | 10% | 95 | 9.5 |
| AI Search Readiness | 10% | 90 | 9.0 |
| Images | 5% | 90 | 4.5 |
| **Total** | | | **85.8 → 86** |

Business type detected: **B2B service studio / agency**, trilingual (EN/DE/ES), lead-gen driven, no e-commerce, no pricing, no blog. Local-service signals are present but secondary (Fürth DE + Medellín CO, `areaServed` DE/AT/CH/CO/Remote) — this is a remote-first studio, not a walk-in local business, so local-pack optimisation is deliberately out of scope.

---

## Technical SEO — 78

### What works

- **Canonicals**: all 37 pages carry a self-referencing absolute canonical.
- **hreflang**: 36/37 pages emit `en` / `de` / `es` / `x-default`, all self-referencing, **all reciprocal**, no dangling targets. This is the single best-executed part of the build — trilingual hreflang is where most sites fail, and this one is clean.
- **Localized slugs** work correctly (`/de/ki-assistent/`, `/es/rediseno-web/`) and each is correctly cross-linked.
- **robots.txt**: clean `Allow: /` with an absolute `Sitemap:` pointer.
- **No broken internal links** across 901 anchors.
- **No orphan pages** (every page has ≥8 inbound internal links; the 404 is intentionally unlinked).
- **Zero third-party hosts** in markup — no Google Fonts, no analytics, no tag managers. Excellent for both GDPR and performance.
- Clean, flat, keyword-relevant URLs; trailing-slash consistent.

### Findings

**[Critical] Canonical domain serves a parking page**
`https://renovostudio.com/` returns a 114-byte JS redirect to `/lander`, served by `openresty` — a domain-parking placeholder. It publishes its own competing `robots.txt`, `llms.txt` and a `sitemap.xml` containing exactly one URL (`/lander`). Meanwhile every canonical, `og:url`, hreflang and schema `@id` in the build asserts this domain. Until DNS points at real hosting, the site has no indexable presence and the parked page is what any crawler or AI engine sees.

**[High] No `lastmod` in the sitemap**
`sitemap-0.xml` lists 36 URLs with no `lastmod`, `changefreq` or `priority`. `lastmod` is the one Google actually uses, and for a site whose selling point is freshness it is a wasted signal. (The `WebSite` schema already emits `dateModified: 2026-08-07`, so the data exists.)

**[Medium] Sitemap omits `xhtml:link` hreflang alternates**
For a 3-language site, annotating each sitemap entry with its alternates is Google's recommended reinforcement of the in-page hreflang. Currently absent.

**[Medium] 404 page is treated as a real page**
`/404.html` carries a canonical (`…/404/`), full hreflang, and `ProfessionalService` + `WebSite` schema, and duplicates the homepage's exact `<title>` and `<meta description>`. It is correctly excluded from the sitemap and has zero inbound links, but it should carry `noindex` and drop the canonical/hreflang/schema. Its three hreflang entries are also the audit's only non-reciprocal ones.

**[Medium] No security headers on the current host**
The live deploy sends only `strict-transport-security`. `content-security-policy`, `x-content-type-options`, `referrer-policy` and `permissions-policy` are all absent. GitHub Pages cannot set headers — this is a constraint of the interim host and should be resolved as part of the move to Cloudflare Pages/Vercel, where a `_headers` file covers it.

**[Info] Interim deploy is correctly suppressed**
`micromegass.github.io/Portfolio/` serves `noindex, nofollow`, has no sitemap (404), and canonicals to itself rather than the production domain. Exactly right for a staging deploy — no accidental duplicate-content exposure.

---

## Content Quality — 80

### What works

- Every page's copy is unique — **no duplicate titles or descriptions** anywhere except the 404/homepage pair.
- Genuinely well-written, specific, plain-language copy. No filler, no keyword stuffing, no hype.
- Full trilingual parity — all 12 page types exist in EN/DE/ES with real translations, not machine output.
- Case studies are honest and scope-accurate (a deliberate correction made earlier in the project's history).
- Named, verifiable clients with outbound links (`ikunaglamping.com`, `physio-und-ergo-fuerth.de`).
- Founder named and linked to GitHub + LinkedIn — real E-E-A-T identity signals.

### Findings

**[Critical] Legal pages ship bracketed placeholders**
Rendered into production HTML in all three languages:
- Imprint: `[Street and number]`, `[Postcode] Fürth, Germany`, `[VAT ID]`, `Telephone: [required — a phone number or an equally direct channel must be given]`
- Privacy: `This website is hosted by [hosting provider, address].`, `[address as in the imprint]`

Under § 5 DDG a full postal address and a direct contact channel are mandatory, and these are user-visible. Beyond the legal exposure, placeholder text on the two pages a cautious B2B buyer checks first is a direct trust cost.

**[High] Personal Gmail as the studio's public identity**
`axelbraunschweiger@gmail.com` appears in 43 `mailto:` links, the Impressum, the privacy policy and the `ProfessionalService` schema `email`. For a studio selling professional web work, a free consumer mailbox undercuts the positioning at the exact moment of conversion. A domain mailbox (`hello@renovostudio.com`) also gives NAP consistency across schema, legal pages and outreach.

**[High] Testimonial renders empty**
`testimonial: { quote: '', attribution: '' }` in all three data files. The component ships but has nothing to show — the site's only social-proof slot is blank.

**[Medium] Thin index and contact pages**
Nine pages under 400 words: `/de/projekte/` (294), `/de/kontakt/` (309), `/es/contacto/` (324), `/work/` (335), `/contact/` (338), plus the case-study and index variants. Contact pages being short is fine and expected. The **work index pages** (`/work/`, `/de/projekte/`, `/es/proyectos/`) are the real miss — they are the natural landing page for "web design agency portfolio" style queries and currently carry almost no descriptive text around the two case-study cards.

**[Low] Unverifiable "100/100 typical Lighthouse score" claim in the hero**
The homepage states `100/100 — typical Lighthouse score`. Lighthouse is currently non-functional in this environment (returns `NO_FCP` for every URL including `example.com`), so the claim cannot be substantiated from this repo. Measured performance is genuinely excellent, so the substance is defensible — but given the project's own standing rule against stating unverified metrics, this is worth either backing with a dated, reproducible run or softening to a factual statement about measured Core Web Vitals.

---

## On-Page SEO — 92

The strongest category. Verified across all 37 pages:

- **Titles**: 29–60 characters, all unique except the 404. Well-formed, brand-suffixed, benefit-led.
- **Descriptions**: 132–160 characters — every single page inside the optimal range. Unusual and deliberate.
- **H1**: exactly one per page, 37/37. No page missing, none duplicated.
- **Heading hierarchy**: zero level skips across all 37 pages.
- **Internal linking**: 901 anchors, zero broken, zero orphans, **zero generic anchors** ("click here", "read more", "mehr", "más").
- **Open Graph / Twitter**: complete on every page — `og:type`, `title`, `description`, `url`, `locale`, `site_name`, plus `og:image` with explicit `width`, `height` and `alt`, and `summary_large_image`. Locale-specific OG images (`og.png`, `og-de.png`, `og-es.png`) are wired per language.

**[Low] 404 duplicates the homepage title and description** — covered above.

**[Low] No `sizes` on responsive images** — see Images.

---

## Schema / Structured Data — 88

All JSON-LD parses without error. Coverage:

| Type | Count |
|------|-------|
| BreadcrumbList | 33 |
| Service | 9 |
| FAQPage | 9 |
| ProfessionalService | 7 |
| CreativeWork | 6 |
| WebSite | 4 |

`ProfessionalService` is well built — `founder` with `sameAs`, `areaServed`, `availableLanguage`, `knowsAbout`, dual `PostalAddress` (Fürth + Medellín), stable `@id` anchors and a `WebSite` → `publisher` reference.

### Findings

**[High] `ProfessionalService` is missing knowledge-panel essentials**
No `logo`, no `image`, no `telephone`. Both `PostalAddress` nodes carry only `addressLocality` + `addressCountry` — no `streetAddress`, no `postalCode` (blocked by the same missing data as the Impressum). `logo` and `image` in particular are what Google uses to build an entity card.

**[Medium] Schema `email` is the personal Gmail** — same NAP-consistency issue as above; the schema should agree with whatever the Impressum finally says.

**[Medium] Missing page-type schema on 12 pages**
`/contact/`, `/website-check/`, `/work/` and the legal pages carry only `BreadcrumbList`. Opportunities: `ContactPage` on the contact pages, `CollectionPage` + `ItemList` on the work index (which would also help those thin pages), and `WebPage` on the legal pages.

**[Low] 404 carries `ProfessionalService` + `WebSite`** — harmless, but should go with the noindex fix.

---

## Performance (Core Web Vitals) — 95

Measured with Playwright + CDP at **4× CPU throttling**, 1440×900, across 11 routes. Lighthouse CLI is broken in this environment (`NO_FCP` on every URL including `example.com`), so field measurement was used instead — the same method `CLAUDE.md` documents.

| Route | FCP | LCP | CLS | Long tasks | Transfer |
|-------|-----|-----|-----|-----------|----------|
| `/` | 240ms | 1244ms | 0 | 3 | 385KB |
| `/ai-assistant/` | 1292ms | 1292ms | 0 | 0 | 198KB |
| `/web-apps/` | 88ms | 88ms | 0 | 0 | 198KB |
| `/work/` | 64ms | 904ms | 0.0005 | 0 | 198KB |
| `/work/ikuna-glamping/` | 60ms | 896ms | 0.0005 | 0 | 314KB |
| `/studio/` | 76ms | 76ms | 0 | 0 | 105KB |
| `/contact/` | 56ms | 884ms | 0.0005 | 0 | 78KB |
| `/website-check/` | 72ms | 72ms | 0 | 0 | 81KB |
| `/de/` | 76ms | 976ms | 0.0055 | 3 | 385KB |

**Worst LCP 1.29s, worst CLS 0.0055, 6 long tasks total, zero JS errors, zero failed requests.** All well inside "good" thresholds.

The Three.js decision is correctly implemented: `three.module.js` is **707KB uncompressed / 180KB gzipped but dynamically imported**, never referenced from HTML, with no `modulepreload`. Initial homepage payload is **181KB uncompressed / 57KB gzipped** including HTML, both stylesheets and all entry scripts. The progressive-enhancement chain (2D composite → WebGL upgrade after load+idle+in-viewport, static under `prefers-reduced-motion`) is intact.

*Verification note:* the WebGL hero was confirmed rendering by reading pixels directly off the canvas — 1600/1600 non-zero pixels, 254 distinct colours in the beige palette of the "old site" mock, context not lost, in both default-headless and forced-SwiftShader runs. Headless Chromium does not composite the WebGL layer into `page.screenshot()`, so the hero looks blank in the desktop captures in `screenshots/`. That is a capture artifact, not a rendering fault.

### Findings

**[High] Fonts are not preloaded**
Three self-hosted `woff2` files (34KB latin, 19KB latin-ext, 9KB vietnamese) with `font-display: swap` and no `<link rel="preload">`. The browser only discovers them after parsing 53.7KB of CSS, which delays text paint and is the most likely remaining FCP win. Preload the latin subset only.

**[Medium] 53.7KB of render-blocking CSS, no critical inline CSS**
Two stylesheets (`_..DNl4eIOY.css` 32.2KB + `Base.D-kev4d2.css` 21.5KB) both block render; the `<head>` contains zero inline `<style>`. Given the hero animation is pure CSS, inlining its critical rules would protect above-the-fold paint.

**[Low] Homepage runs 3 long tasks** — attributable to transformer setup. LCP is unaffected; noted for completeness.

---

## Images — 90

Genuinely well handled:

- **39/39 images have an `alt` attribute** — zero missing, zero empty, all descriptive and properly localized ("Behandlungsraum der Physiotherapiepraxis in Fürth", "Domo geodésico de glamping en una ladera boscosa de Antioquia").
- **39/39 have explicit `width` and `height`** — which is why CLS is ~0.
- **39/39 ship `srcset`**; all content images are WebP via Astro's pipeline.
- Below-fold images are `loading="lazy"`; the 6 case-study hero images are correctly eager.

### Findings

**[Medium] No `sizes` attribute on any of the 39 images**
With `w`-descriptor `srcset` and no `sizes`, the browser assumes `100vw` and may fetch a wider candidate than the slot needs. In a constrained layout that means downloading a 315KB WebP where a 91KB one would do. Adding accurate `sizes` is the single highest-value image fix.

**[Low] Two large WebP source variants**
`ikuna.DHXyT3kI_Z23zTnC.webp` (315KB) and `…_1KfRtK.webp` (263KB) are the largest assets in the build. Fixing `sizes` will stop most visitors ever requesting them; capping the top srcset width would remove them entirely.

**[Info] OG images** — `og.png` 107KB, `og-de.png` 109KB, `og-es.png` 114KB at 1200×630 with declared dimensions and alt text. Correct.

---

## AI Search Readiness (GEO) — 90

Better prepared than most sites of any size:

- **`llms.txt` is present and genuinely good** — 2257 characters, structured as `What the studio does` / `Key pages` / `Facts` / `Languages` / `Notes for answer engines`, with absolute URLs and an explicit statement of the AI-assistant scope boundary. This is the format actually working, not a token file.
- **9 `FAQPage` blocks** across the three service pages in all three languages.
- **57 question-form headings** — case studies are literally structured as "What problem was the refuge trying to solve?" / "What did RENOVO build?" / "Why does it work?", which is close to ideal passage-level citability.
- Clean semantic HTML, server-rendered — no JS required to read any content.
- Strong entity grounding: named founder, `sameAs` to GitHub + LinkedIn, `knowsAbout`, `areaServed`, named clients with outbound links.
- `robots.txt` blocks no AI crawlers.

### Findings

**[Critical, inherited] Zero AI-crawler reachability today**
The parked domain publishes its own `llms.txt` (`Disallow-Training: /`) and a one-URL sitemap. The real `llms.txt` — the good one — is not reachable by anything. Every GEO asset is currently unreadable, and any answer engine asked about RENOVO today resolves to a parking page.

**[Medium] No `dateModified` on individual pages**
Only the `WebSite` node carries `dateModified`. Per-page freshness (`WebPage.dateModified` or `Service.dateModified`) is a meaningful citation signal for answer engines.

**[Low] No `Article`/`CreativeWork` authorship on case studies**
The 6 `CreativeWork` nodes have no `author` / `datePublished`. Adding them strengthens attribution when a case study is cited.

---

## Accessibility cross-check

Not a scored SEO category, but it reinforces rankings and is an EU legal requirement.

**axe-core (WCAG 2.0/2.1/2.2, A + AA): 0 violations across 13 pages in 3 languages.**
No horizontal overflow at 390px or at 320px on any tested page. Mobile homepages verified rendering in all three languages (H1 visible, transformer canvases correctly sized, `scrollWidth == clientWidth`).

---

## Method & limitations

- **Primary target was the production build** (`dist/`, built with the production config so canonicals and the sitemap reflect `renovostudio.com`) rather than the live interim deploy, because the interim deploy is deliberately `noindex` and rewrites all URLs to `/Portfolio`. Auditing it would have measured the staging shim, not the product.
- **No crawl was performed** — the site is static and fully enumerable, so all 37 pages were analysed directly. Coverage is 100%, not sampled.
- **No Google API data** (CrUX / GSC / GA4): the domain has never served the site, so there is no field data or index coverage to fetch. All performance figures are lab measurements.
- **No backlink data**: a never-launched domain has no meaningful profile. The parked domain may carry registrar-placeholder links, which are not worth analysing.
- **Lighthouse was not used** — broken in this environment, per the project's own documented finding. Playwright + CDP throttling substituted.
- **PDF generation unavailable**: the `seo-audit` skill references `scripts/google_report.py`, but the installed skill directory contains only `SKILL.md` and `LICENSE.txt`. No report scripts are present, so `audit-data.json` is written to the documented schema and can be rendered whenever those scripts are available.
