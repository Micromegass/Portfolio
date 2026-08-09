# Schema / Structured Data — findings & raw evidence

Score: **88 / 100**

All JSON-LD across all 37 pages **parses without error**.

## Coverage

| @type | Count |
|---|---|
| BreadcrumbList | 33 |
| Service | 9 |
| FAQPage | 9 |
| ProfessionalService | 7 |
| CreativeWork | 6 |
| WebSite | 4 |

## Per-page distribution

```
/                                  ProfessionalService, WebSite
/404.html                          ProfessionalService, WebSite      <- should carry none
/ai-assistant/                     BreadcrumbList, Service, FAQPage
/website-relaunch/                 BreadcrumbList, Service, FAQPage
/web-apps/                         BreadcrumbList, Service, FAQPage
   (+ the DE and ES equivalents of all three service pages)
/studio/  /de/studio/  /es/estudio/  ProfessionalService, BreadcrumbList
/work/{ikuna-glamping,physio-ergo-fuerth}/  BreadcrumbList, CreativeWork
   (+ DE /projekte/ and ES /proyectos/ equivalents)
/contact/ /website-check/ /work/ /imprint/ /privacy/   BreadcrumbList only
   (+ all DE and ES equivalents)
```

## ProfessionalService (homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://renovostudio.com/#studio",
  "name": "RENOVO",
  "description": "An AI-first web studio. We rebuild outdated business websites, add AI assistants, and develop web apps with real backends.",
  "url": "https://renovostudio.com/",
  "founder": {
    "@type": "Person",
    "name": "Axel Braunschweiger",
    "url": "https://renovostudio.com/studio/",
    "sameAs": ["https://github.com/Micromegass", "https://www.linkedin.com/in/axel-braunschweiger-17b5609b/"]
  },
  "sameAs": ["https://github.com/Micromegass", "https://www.linkedin.com/in/axel-braunschweiger-17b5609b/"],
  "email": "axelbraunschweiger@gmail.com",
  "areaServed": ["DE", "AT", "CH", "CO", "Remote"],
  "availableLanguage": ["German", "English", "Spanish"],
  "knowsAbout": ["Website relaunch", "Website modernisation", "AI chat assistants", "Web application development", "MVP development"],
  "address": [
    { "@type": "PostalAddress", "addressLocality": "Fürth", "addressCountry": "DE" },
    { "@type": "PostalAddress", "addressLocality": "Medellín", "addressCountry": "CO" }
  ]
}
```

### Missing properties

| Property | Impact |
|---|---|
| `logo` | Google uses it to build the entity/knowledge card — highest-value gap |
| `image` | Same |
| `telephone` | Blocked by the Impressum placeholder |
| `address[].streetAddress` | Blocked by the Impressum placeholder |
| `address[].postalCode` | Blocked by the Impressum placeholder |
| `email` | Present but is a personal Gmail — must match the final Impressum for NAP consistency |

## WebSite (homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://renovostudio.com/#website",
  "name": "RENOVO",
  "url": "https://renovostudio.com/",
  "inLanguage": "en",
  "publisher": { "@id": "https://renovostudio.com/#studio" },
  "dateModified": "2026-08-07"
}
```

Correct use of `@id` anchoring and a `publisher` reference back to the `ProfessionalService`
node — the graph is properly linked rather than duplicating the org on every page.

No `SearchAction` / sitelinks searchbox, which is correct: the site has no internal search.

## Gaps and opportunities

**[High] Complete `ProfessionalService`** — add `logo`, `image`, `telephone`, and full
`PostalAddress` once the Impressum data exists.

**[Medium] 12 pages carry only `BreadcrumbList`:**

| Pages | Suggested addition |
|---|---|
| `/contact/`, `/de/kontakt/`, `/es/contacto/` | `ContactPage` |
| `/work/`, `/de/projekte/`, `/es/proyectos/` | `CollectionPage` + `ItemList` (also helps the thin-content issue) |
| `/website-check/`, `/de/website-check/`, `/es/analisis-web/` | `WebApplication` or `Service` |
| `/imprint/`, `/privacy/` + DE/ES | `WebPage` |

**[Medium] No per-page `dateModified`** — only the `WebSite` node has it. Per-page freshness
is a meaningful citation signal for answer engines.

**[Low] `CreativeWork` case studies lack `author` and `datePublished`** — adding both
strengthens attribution when a case study is cited by an AI engine.

**[Low] `/404.html` carries `ProfessionalService` + `WebSite`** — remove with the noindex fix.
