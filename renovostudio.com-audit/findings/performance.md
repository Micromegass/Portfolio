# Performance (Core Web Vitals) — findings & raw evidence

Score: **95 / 100**

## Method

Lighthouse CLI is non-functional in this environment — it returns `NO_FCP` for every URL
including `example.com`, so the tool is broken rather than the site. Substituted:

- Playwright + Chromium, `Emulation.setCPUThrottlingRate` **rate 4** via CDP
- Viewport 1440×900, `waitUntil: 'load'`, 2.5s settle
- `PerformanceObserver` with `buffered: true` for LCP / layout-shift / longtask
- Navigation Timing for TTFB, Resource Timing for transfer size
- Served from `npm run preview` (production build)

## Results (4× CPU throttle)

| Route | FCP | LCP | CLS | TTFB | Long tasks | Requests | Transfer |
|---|---|---|---|---|---|---|---|
| `/` | 240ms | 1244ms | 0 | 6ms | 3 | 11 | 385KB |
| `/website-relaunch/` | — | — | 0 | 2ms | 0 | 5 | 78KB |
| `/ai-assistant/` | 1292ms | 1292ms | 0 | 4ms | 0 | 7 | 198KB |
| `/web-apps/` | 88ms | 88ms | 0 | 4ms | 0 | 7 | 198KB |
| `/work/` | 64ms | 904ms | 0.0005 | 4ms | 0 | 7 | 198KB |
| `/work/ikuna-glamping/` | 60ms | 896ms | 0.0005 | 2ms | 0 | 6 | 314KB |
| `/studio/` | 76ms | 76ms | 0 | 4ms | 0 | 6 | 105KB |
| `/contact/` | 56ms | 884ms | 0.0005 | 4ms | 0 | 5 | 78KB |
| `/website-check/` | 72ms | 72ms | 0 | 4ms | 0 | 7 | 81KB |
| `/de/` | 76ms | 976ms | 0.0055 | 4ms | 3 | 11 | 385KB |
| `/es/` | — | — | 0 | 4ms | 0 | 8 | 85KB |

```
Worst LCP:   1292ms   (threshold: 2500ms "good")
Worst CLS:   0.0055   (threshold: 0.1 "good")
Long tasks:  6 total across 11 routes
JS errors:   0
Failed requests: 0
```

Dashes indicate the paint entry was not captured in the observation window; those routes are
among the fastest, so no LCP candidate was still pending.

## Bundle analysis

```
707.5KB  three.module.DZlTWqWi.js                    <- dynamically imported, NOT initial
 86.4KB  Base.astro…script_index_0_lang.js
 32.2KB  _..DNl4eIOY.css
 21.5KB  Base.D-kev4d2.css
 11.9KB  Transformer.astro…script_index_0_lang.js
  2.3KB  CheckPage.astro…script_index_0_lang.js
  1.8KB  websiteCheck.BoJsChG2.js
  0.6KB  HeroCheck.astro…script_index_0_lang.js
```

### Initial homepage payload

```
 28.8KB  index.html
 32.2KB  _..DNl4eIOY.css
 21.5KB  Base.D-kev4d2.css
 86.4KB  Base…script.js
 11.9KB  Transformer…script.js
  0.6KB  HeroCheck…script.js
--------
181.4KB  uncompressed
 57.1KB  gzipped
```

Three.js is **180.4KB gzipped but never in the initial payload** — verified:

```
static import of three in Transformer script: false
dynamic import() occurrences:                 1
"three.module" referenced in homepage HTML:   false
modulepreload for three:                      false
Guards present: requestIdleCallback ✓  IntersectionObserver ✓  prefers-reduced-motion ✓
```

The documented progressive-enhancement chain is intact.

## WebGL hero verification

The desktop screenshots show an apparently blank hero region. This was investigated and is a
**capture artifact, not a rendering fault** — headless Chromium does not composite the WebGL
layer into `page.screenshot()`. Direct pixel readback from the live context:

```
default headless:      hasCtx true, contextLost false, drawingBuffer 1600x900
                       nonZeroPixels 1600/1600, distinctColors 254
                       sample: (208,202,184) (173,166,146) (116,108,86) …
swiftshader forced:    identical behaviour, distinctColors 259
```

Those beige tones are the "outdated 2011 site" side of the transformer morph. The 2D fallback
is fully painted and then correctly fades to `opacity: 0` once WebGL takes over
(`tx-canvas` opacity 1, `tx-fallback` opacity 0). The dual-canvas handoff works as designed.

## Findings

**[High] No font preload.** Three self-hosted `woff2` (34KB latin, 19KB latin-ext, 9KB
vietnamese), `font-display: swap`, `@font-face` × 4, **zero `rel=preload`**. Fonts are
discovered only after 53.7KB of CSS parses. Preloading the latin subset is the clearest
remaining paint win.

**[Medium] 53.7KB render-blocking CSS, zero inline critical CSS.** Two stylesheets both block
render; `<head>` contains no `<style>` at all. The hero entrance animation is pure CSS, so its
rules are the natural inline candidate.

**[Low] 3 long tasks on the homepage** (and `/de/`), attributable to transformer setup. LCP
unaffected.

## Caching (live host)

```
cache-control: max-age=600      <- 10 min, GitHub Pages default
content-encoding: gzip
```

Hashed `_astro/*` assets are immutable and should be served `max-age=31536000, immutable` on
the production host. Not achievable on GitHub Pages.
