# AI Search Readiness (GEO) — findings & raw evidence

Score: **90 / 100**

The GEO groundwork here is more thorough than most sites of any size. The blocker is
reachability, not preparation.

## llms.txt

Present at `/llms.txt`, 2257 characters, correctly structured:

```
# RENOVO — AI Web Studio

> An AI-first web studio run by Axel Braunschweiger, working between Fürth, Germany and
> Medellín, Colombia. It rebuilds outdated business websites, builds websites with a
> built-in AI chat assistant, and develops web applications with real backends.
> Available in German, English and Spanish.

## What the studio does
## Key pages
## Facts
## Languages
## Notes for answer engines
```

Each service entry carries a one-line description plus an absolute URL, and the AI-assistant
entry states the scope boundary explicitly ("The studio builds new sites that include an
assistant; it does not retrofit assistants into arbitrary existing sites"). That is exactly
what this file is for — it pre-empts the most likely thing an answer engine would otherwise
over-claim on the studio's behalf.

## Citability structure

```
Pages with FAQPage schema:  9  (3 service pages × 3 languages)
Question-form headings:    57
```

Case studies are structured as literal question passages:

```
/work/ikuna-glamping/            h2  What problem was the refuge trying to solve?
                                 h2  What did RENOVO build for Ikuna?
                                 h2  Why does it work?
/work/physio-ergo-fuerth/        h2  What problem was the practice trying to solve?
                                 h2  What did RENOVO build for the practice?
                                 h2  Why does it work?
/de/projekte/ikuna-glamping/     h2  Welches Problem sollte das Refugium lösen?
                                 h2  Was hat RENOVO für Ikuna gebaut?
                                 h2  Warum funktioniert es?
```

Question heading → self-contained answer paragraph is close to the ideal passage shape for
extraction into an AI Overview or a ChatGPT/Perplexity citation.

## Entity grounding

```
Founder named:      Axel Braunschweiger (Person node with url + sameAs)
sameAs:             github.com/Micromegass, linkedin.com/in/axel-braunschweiger-…
knowsAbout:         Website relaunch, Website modernisation, AI chat assistants,
                    Web application development, MVP development
areaServed:         DE, AT, CH, CO, Remote
availableLanguage:  German, English, Spanish
Named clients:      Ikuna Glamping, Physio & Ergo Fürth — both with outbound links
```

## Crawler access

```
robots.txt: User-agent: *  /  Allow: /
AI crawler blocks (GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended): none
JS required to read content: no — fully server-rendered static HTML
```

## Findings

**[Critical, inherited] Zero AI-crawler reachability today.**

The real `llms.txt` is unreachable. What is actually live at the canonical domain is the
registrar's parking file:

```
https://renovostudio.com/llms.txt
  User-agent: *
  Allow: /
  Disallow-Training: /
  Sitemap: /sitemap.xml
```

Note it asserts `Disallow-Training: /` — the opposite of what the studio would want — and the
accompanying `sitemap.xml` advertises exactly one URL (`/lander`). Any answer engine asked
about RENOVO today resolves to a parking page. Every GEO asset described above is currently
invisible.

This resolves entirely with the domain/hosting fix; no GEO work is needed to unblock it.

**[Medium] No per-page `dateModified`.** Only the `WebSite` node carries a date
(`2026-08-07`). Answer engines weight recency, and per-page freshness is the signal they can
actually read.

**[Low] Case studies lack `author` / `datePublished`.** The 6 `CreativeWork` nodes have
neither. Adding both strengthens attribution when a case study is cited rather than merely
summarised.

**[Note] Studio assistant is dormant.** The chat widget is only built in when
`PUBLIC_CHAT_ENDPOINT` is set, which it currently is not — so the site that sells "websites
with a built-in AI assistant" does not itself demonstrate one. Not an SEO finding, but it is
the most visible gap between the pitch and the artifact, and it is already on the roadmap.
