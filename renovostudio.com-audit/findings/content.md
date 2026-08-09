# Content Quality & E-E-A-T — findings & raw evidence

Score: **80 / 100**

## Placeholder text rendered into production HTML

Extracted from the built `/imprint/index.html`:

> Service provider | RENOVO — AI Web Studio | Owner: Axel Braunschweiger | **[Street and number]** |
> **[Postcode]** Fürth, Germany | Contact | Email: axelbraunschweiger@gmail.com |
> Telephone: **[required — a phone number or an equally direct channel must be given]** |
> VAT | VAT identification number according to § 27a UStG: **[VAT ID]**

From `/de/impressum/index.html`:

> Diensteanbieter | RENOVO — AI Web Studio | Inhaber: Axel Braunschweiger | **[Straße und Hausnummer]** |
> **[PLZ]** Fürth | Kontakt | E-Mail: axelbraunschweiger@gmail.com |
> Telefon: **[erforderlich — eine Telefonnummer oder ein gleichwertig unmittelbarer Kontaktweg muss angegeben werden]** |
> Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: **[USt-IdNr.]**

From the privacy policies:

> This website is hosted by **[hosting provider, address]**.
> Axel Braunschweiger, RENOVO — AI Web Studio, **[address as in the imprint]**, Germany.

These are legally mandated fields under § 5 DDG (full postal address + a direct contact
channel), and they are visible to both users and crawlers on the two pages a cautious B2B
buyer checks first.

### Source locations (`TODO-CONTENT` markers)

```
src/lib/i18n.ts:9            domain — drives canonicals + hreflang
src/data/{en,de,es}.ts:~145  testimonial: { quote: '', attribution: '' }
src/data/{en,de,es}.ts:~654  registered business name if different
src/data/{en,de,es}.ts:~655  full street address, postal code and city — legally required
src/data/{en,de,es}.ts:~663  business email + telephone number
src/data/{en,de,es}.ts:~670  VAT ID
src/data/{en,de,es}.ts:~717  controller address (privacy)
src/data/{en,de,es}.ts:~725  hosting provider — Art. 28 GDPR processing agreement required
src/data/{en,de,es}.ts:~786  supervisory authority — adjust if registered outside Bavaria
src/data/en.ts:327-342       four lab-project descriptions
```

## Contact identity

```
mailto: links across the build: 43
Unique address:                  1  -> axelbraunschweiger@gmail.com
Also appears in:                 Impressum (x3 languages), privacy policy,
                                 ProfessionalService schema "email"
```

`studio.email` in `src/lib/i18n.ts` is the single source — changing it there updates all 43.

## Thin content (< 400 words)

```
294w  /de/projekte/                      <- work index, real miss
309w  /de/kontakt/                       <- contact, acceptable
324w  /es/contacto/                      <- contact, acceptable
335w  /work/                             <- work index, real miss
338w  /contact/                          <- contact, acceptable
353w  /de/projekte/ikuna-glamping/
354w  /es/proyectos/                     <- work index, real miss
361w  /de/projekte/physio-ergo-fuerth/
389w  /work/ikuna-glamping/
```

The three work-index pages are the natural landing pages for portfolio-intent queries
("web design studio portfolio", "Webagentur Referenzen") and currently carry little more
than two case-study cards.

## E-E-A-T signals

| Signal | State |
|---|---|
| Founder named | ✓ Axel Braunschweiger |
| `sameAs` profiles | ✓ GitHub + LinkedIn |
| Named clients | ✓ Ikuna Glamping, Physio & Ergo Fürth — both linked to live sites |
| Case study honesty | ✓ scope-accurate, no invented outcomes or metrics |
| Testimonial | ✗ **empty** (`quote: ''` in all three languages) |
| Business email | ✗ personal Gmail |
| Postal address | ✗ placeholder |
| Phone | ✗ placeholder |
| VAT ID | ✗ placeholder |
| Freshness dates | ✓ `WebSite.dateModified: 2026-08-07` |

## Trilingual parity

All 12 page types exist in EN/DE/ES. Content is authored per language against a single
`SiteContent` type, so translations structurally cannot drift. Spot-checked copy reads as
genuine translation, not machine output — e.g. the DE hero "Ihre Website, neu gebaut für die
KI-Zeit." and the ES "Su sitio web, reconstruido para la era de la IA."

Notably the DE and ES privacy policies are the longest pages on the site (1140w / 1340w),
which is appropriate for GDPR disclosure depth.

## Claims accuracy

The homepage hero states **"100/100 — typical Lighthouse score"**.

Lighthouse cannot be run in this environment (returns `NO_FCP` for every URL including
`example.com`), so the claim is not reproducible from this repo. Measured Core Web Vitals are
genuinely excellent — worst LCP 1.24s under 4× throttling, CLS ~0 — so the underlying substance
is defensible. Flagged only because this project has an explicit standing rule against
publishing metrics that have not been verified.
