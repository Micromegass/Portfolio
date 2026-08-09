# RENOVO — Prioritized SEO Action Plan

Generated 2026-08-07 from the full audit. Ordered by impact, not by effort.

The build is in good shape (86/100). Almost everything below is about **getting it live and filling in owed content** — not about fixing engineering.

---

## Phase 1 — Launch blockers (Week 1)

Nothing else on this list matters until these are done. The site currently has zero indexable presence.

### 1.1 Point `renovostudio.com` at real hosting — **Critical**
The domain resolves to a registrar parking page (`openresty`, JS-redirect to `/lander`) that publishes its own `robots.txt`, `llms.txt` and a one-URL `sitemap.xml`. Every canonical, hreflang, `og:url` and schema `@id` in the build asserts this domain.

- Deploy `dist/` to Cloudflare Pages or Vercel (both give the `_headers` support GitHub Pages lacks).
- Point DNS; confirm the parking page and its `robots.txt` / `llms.txt` / `sitemap.xml` are fully gone.
- Drop `GITHUB_PAGES=true` so the build stops emitting `noindex` and starts emitting the sitemap.
- Verify: `curl https://renovostudio.com/robots.txt` returns *your* robots.txt, and the homepage has no `noindex`.

### 1.2 Fill the Impressum and privacy placeholders — **Critical**
Currently rendered, user-visible, in all three languages:

| File | Placeholder |
|------|-------------|
| `src/data/{en,de,es}.ts` | `[Street and number]` / `[Straße und Hausnummer]` |
| | `[Postcode] Fürth` / `[PLZ] Fürth` |
| | `[VAT ID]` / `[USt-IdNr.]` — or the § 19 UStG small-business note instead |
| | `Telephone: [required — …]` — § 5 DDG requires a direct channel |
| | `[hosting provider, address]` — name the host; an Art. 28 GDPR processing agreement is required |
| | `[address as in the imprint]` (privacy, controller section) |

Also confirm the supervisory authority line (currently Bayerisches Landesamt für Datenschutzaufsicht) matches the registered business address.

### 1.3 Switch to a domain email address — **High**
`axelbraunschweiger@gmail.com` appears in 43 `mailto:` links, both legal pages and the `ProfessionalService` schema. Set `studio.email` in `src/lib/i18n.ts` to `hello@renovostudio.com` (single source — all 43 follow). Keep it identical across schema, Impressum and privacy for NAP consistency.

### 1.4 Submit and verify
- Google Search Console + Bing Webmaster Tools property for `renovostudio.com`.
- Submit `https://renovostudio.com/sitemap-index.xml`.
- Request indexing for the three homepages (`/`, `/de/`, `/es/`).

---

## Phase 2 — High-impact improvements (Weeks 2–3)

### 2.1 Preload the latin font — **High**, 5 min
Three `woff2` files are discovered only after 53.7KB of CSS parses. Add to `<head>`, latin subset only:
```html
<link rel="preload" as="font" type="font/woff2" href="/_astro/hanken-grotesk-latin-wght-normal.CaVRRdDk.woff2" crossorigin>
```

### 2.2 Add `sizes` to responsive images — **Medium**, ~15 min
All 39 images ship `srcset` with **no `sizes`**, so the browser assumes `100vw` and can fetch a 315KB WebP for a slot that needs 91KB. Pass accurate `sizes` to the Astro `<Image>` calls (e.g. `sizes="(min-width: 900px) 50vw, 100vw"`).

### 2.3 Fix the 404 page — **Medium**, ~10 min
It currently duplicates the homepage `<title>` + `<meta description>` and carries a canonical, full hreflang and `ProfessionalService` + `WebSite` schema. Give it its own title, add `<meta name="robots" content="noindex">`, and drop the canonical, hreflang and schema.

### 2.4 Enrich the sitemap — **High**, ~30 min
36 URLs with no `lastmod`, `changefreq` or `priority`, and no `xhtml:link` alternates. Configure `@astrojs/sitemap` to emit `lastmod` (the data already exists — `WebSite.dateModified`) and per-entry hreflang alternates via its `i18n` option.

### 2.5 Complete the `ProfessionalService` schema — **High**
Add `logo` and `image` (the entity-card essentials), `telephone`, and `streetAddress` + `postalCode` on the Fürth `PostalAddress` — all unblocked by 1.2.

### 2.6 Ship security headers — **Medium**
Add a `_headers` file on the new host: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. The CSP must allow the chat worker origin once `PUBLIC_CHAT_ENDPOINT` is set.

---

## Phase 3 — Content & authority (Month 2)

### 3.1 Fill the testimonial — **High**
`testimonial: { quote: '', attribution: '' }` in all three data files. The component ships and renders nothing — the site's only social-proof slot is blank. One real, attributed quote.

### 3.2 Thicken the work index pages — **Medium**
`/work/` (335w), `/de/projekte/` (294w), `/es/proyectos/` (354w) are the natural landing pages for portfolio-intent queries and are currently little more than two cards. Add an intro framing how the studio works and what a project looks like. Pairs well with adding `CollectionPage` + `ItemList` schema.

### 3.3 Add page-type schema to the 12 `BreadcrumbList`-only pages — **Medium**
`ContactPage` on contact, `CollectionPage`/`ItemList` on work indexes, `WebPage` on legal pages.

### 3.4 Per-page freshness for answer engines — **Medium**
Only the `WebSite` node has `dateModified`. Add per-page `dateModified`, and `author` + `datePublished` on the 6 `CreativeWork` case studies.

### 3.5 Resolve the "100/100 typical Lighthouse score" claim — **Low**
Unverifiable from this repo (Lighthouse returns `NO_FCP` for every URL here, including `example.com`). Measured CWV are genuinely excellent, so either back it with a dated reproducible run or restate it factually. Flagged because of the project's own standing rule against publishing unverified metrics.

### 3.6 Inline critical CSS — **Low**
53.7KB of render-blocking CSS with no inline `<style>`. Inlining the hero's critical rules protects above-the-fold paint.

---

## Phase 4 — Monitoring & iteration (Ongoing)

- **Re-audit after launch with real data.** CrUX, GSC index coverage and GA4 were all unavailable here because the domain has never served the site. Once it has ~28 days of traffic, re-run to replace lab numbers with field data.
- **Watch indexation weekly** for the first month — 36 URLs across 3 languages; confirm Google picks the right language variant per market and that hreflang is respected.
- **Regenerate the assistant knowledge base whenever copy changes** (`npm run knowledge` in `backend/`) — the audit found no drift, but the fix for 1.2 and 1.3 will change the source copy.
- **Re-run the CWV + axe checks after the Three.js hero changes**, using Playwright rather than Lighthouse (broken in this environment).
- **Deploy the chat worker** and set `PUBLIC_CHAT_ENDPOINT` — the widget is the studio's own reference implementation of the AI-assistant service it sells, and it is currently dormant.

---

## What is already right — do not "fix" it

Worth stating explicitly so none of this gets regressed:

- **hreflang across 3 languages, 36/37 pages, fully reciprocal, no dangling targets.** This is the hardest thing on the list to get right and it is correct.
- **Every page: one H1, unique title (29–60 chars), description in the 132–160 range.** All 37.
- **39/39 images with descriptive localized alt text and explicit dimensions.** CLS is ~0 because of it.
- **Zero broken links, zero orphans, zero generic anchor text** across 901 anchors.
- **Zero third-party requests.** No Google Fonts, no analytics, no tag managers.
- **0 axe violations** (WCAG 2.2 AA) across 13 pages in 3 languages.
- **Three.js is dynamically imported** — 707KB that never touches the initial 57KB gzipped payload.
- **`llms.txt` is real and well-structured**, and case studies are written as question-form passages. The GEO groundwork is done.
