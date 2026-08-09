# Visual, Mobile & Accessibility — findings & raw evidence

## Screenshots

27 captures in `../screenshots/` — desktop (1440×900) and mobile (390×844) for 13 routes
across all three languages, plus a settled desktop homepage capture.

```
home-en, home-de, home-es
website-relaunch, ai-assistant, web-apps
work, case-ikuna, studio, contact, website-check
imprint, privacy
```

### Capture caveat

Headless Chromium does not composite the WebGL layer into `page.screenshot()`, so the
transformer hero region appears blank in the three homepage desktop captures. This was
verified as a tooling artifact, not a rendering fault — see `performance.md` for the pixel
readback (1600/1600 non-zero pixels, 254 distinct colours, context not lost). Do not read the
homepage screenshots as evidence of a broken hero.

Initial mobile capture attempts on the three homepages failed with
`Protocol error (Page.captureScreenshot): Unable to capture screenshot` under
`isMobile: true` + WebGL; re-running without the `isMobile` flag captured them successfully.

## Responsive behaviour

Tested at 390px and 320px on all 13 routes:

```
Horizontal overflow at 390px:  none
Horizontal overflow at 320px:  none
```

Mobile homepage render verified in all three languages:

```
/     h1 "Your website, rebuilt for the AI era."     opacity 1
      tx-canvas 348×196 visible, tx-fallback 348×196 visible
      scrollWidth 390 == clientWidth 390
/de/  h1 "Ihre Website, neu gebaut für die KI-Zeit."  opacity 1   (same geometry)
/es/  h1 "Su sitio web, reconstruido para la era de la IA."  opacity 1   (same geometry)
```

The H1 is painted and at full opacity without waiting on JS — confirming the pure-CSS hero
entrance works as designed.

## Accessibility (axe-core)

Tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`

| Route | Violations |
|---|---|
| `/` | 0 |
| `/website-relaunch/` | 0 |
| `/ai-assistant/` | 0 |
| `/web-apps/` | 0 |
| `/work/` | 0 |
| `/work/ikuna-glamping/` | 0 |
| `/studio/` | 0 |
| `/contact/` | 0 |
| `/website-check/` | 0 |
| `/imprint/` | 0 |
| `/privacy/` | 0 |
| `/de/` | 0 |
| `/es/` | 0 |

**Total violation nodes: 0** across 13 pages in 3 languages.

This independently confirms the project's previously documented result. Accessibility is not a
scored SEO category here, but it correlates with ranking factors (semantic structure, alt
text, contrast, focus order) and is a European Accessibility Act requirement for an EU-facing
business site.

## Above-the-fold assessment (desktop homepage)

What a first-time visitor sees without scrolling:

- Wordmark `RENOVO` + `AI WEB STUDIO`, full nav (Relaunch / AI assistant / Web apps / Work /
  Studio / Free check), language switcher EN·DE·ES, theme toggle, `Start a project` CTA
- Eyebrow: `WEBSITE RELAUNCH · AI ASSISTANTS · WEB APPS`
- H1: "Your website, rebuilt for the AI era." with `AI era` in the magenta accent
- Sub-paragraph stating the three services and the "weeks, not quarters" promise
- **The primary CTA — the free website check URL input — is above the fold**, with the
  reassurance line "Free, no sign-up. Google's own measurements in about 30 seconds."
- Secondary `See the work →` link
- Right rail: `3–5 weeks` / `100/100 typical Lighthouse score` / `DE · EN · ES`

The conversion path is correctly prioritised: the lead magnet is the first interactive element,
not buried below a scroll. One content note — the `100/100 typical Lighthouse score` stat is
the unverifiable claim flagged in `content.md`.

## No JS errors

Across all 11 performance routes and 13 axe routes: **zero console errors, zero page errors,
zero failed requests**.
