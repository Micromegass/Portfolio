# Images — findings & raw evidence

Score: **90 / 100**

## Inventory

```
Total <img> elements across 37 pages:  39
Missing alt attribute entirely:         0
Empty alt (decorative):                 0
With descriptive alt text:             39
Missing width/height:                   0
With srcset:                           39
With sizes:                             0   <- the one real gap
```

## Alt text quality

Descriptive and properly localized in all three languages:

```
EN  Portrait of Axel Braunschweiger, founder of RENOVO
EN  Treatment room at the physiotherapy practice in Fürth
EN  Geodesic glamping dome on a forested mountainside in Antioquia
DE  Porträt von Axel Braunschweiger, Gründer von RENOVO
DE  Behandlungsraum der Physiotherapiepraxis in Fürth
DE  Geodätisches Glamping-Dome an einem bewaldeten Berghang in Antioquia
ES  Sala de tratamiento de la clínica de fisioterapia en Fürth
ES  Domo geodésico de glamping en una ladera boscosa de Antioquia
```

These describe the image content rather than restating the caption — correct practice.

## Loading strategy

Six images are not lazy-loaded, and all six are correct — they are the above-fold case-study
heroes:

```
/work/ikuna-glamping/              ikuna.DHXyT3kI_1EWjW5.webp
/work/physio-ergo-fuerth/          physio.CRKYPN3x_2fzu1B.webp
/de/projekte/ikuna-glamping/       ikuna.DHXyT3kI_1EWjW5.webp
/de/projekte/physio-ergo-fuerth/   physio.CRKYPN3x_2fzu1B.webp
/es/proyectos/ikuna-glamping/      ikuna.DHXyT3kI_1EWjW5.webp
/es/proyectos/physio-ergo-fuerth/  physio.CRKYPN3x_2fzu1B.webp
```

Everything below the fold is `loading="lazy"`.

## Files on disk

```
315KB  _astro/ikuna.DHXyT3kI_Z23zTnC.webp     <- largest asset in the build
263KB  _astro/ikuna.DHXyT3kI_1KfRtK.webp
236KB  _astro/ikuna.DHXyT3kI_1EWjW5.webp
120KB  _astro/physio.CRKYPN3x_ZSxjFQ.webp
 91KB  _astro/ikuna.DHXyT3kI_Zo5udN.webp
 74KB  _astro/physio.CRKYPN3x_Z1YNHkC.webp
 66KB  _astro/physio.CRKYPN3x_2fzu1B.webp
 57KB  _astro/founder.DdDmJVV3_1xnPPb.webp
 29KB  _astro/physio.CRKYPN3x_ZbyNSD.webp
 27KB  _astro/founder.DdDmJVV3_ZWMtSt.webp
--- social ---
114KB  og-es.png
109KB  og-de.png
107KB  og.png
 0.3KB favicon.svg
```

Total image weight 1.28MB WebP + 330KB PNG. All content images are WebP via Astro's pipeline;
the OG images are correctly PNG (social scrapers handle it most reliably).

## Findings

**[Medium] No `sizes` attribute on any of the 39 images.**

All 39 ship a `w`-descriptor `srcset` with no `sizes`. Per the HTML spec the browser then
assumes `sizes="100vw"` and picks a candidate for the full viewport width — so a slot rendered
at half-width on desktop can still pull the 315KB variant instead of the 91KB one.

This is the single highest-value image fix and costs about fifteen minutes: pass accurate
`sizes` to the Astro `<Image>` calls, e.g. `sizes="(min-width: 900px) 50vw, 100vw"`.

**[Low] Two oversized WebP variants.** `ikuna…Z23zTnC.webp` (315KB) and `ikuna…1KfRtK.webp`
(263KB) exist only as top-end `srcset` candidates. Fixing `sizes` stops most visitors ever
requesting them; capping the top `widths` entry in the Astro image config removes them.

**[Info] OG images.** 1200×630 with `og:image:width`, `og:image:height` and `og:image:alt`
declared, one per language. Correct — no action.

**[Info] CLS.** Because all 39 images declare explicit `width`/`height`, measured CLS is
0–0.0055 across every route. This is why the layout stability is as good as it is; do not
remove the dimension attributes.
