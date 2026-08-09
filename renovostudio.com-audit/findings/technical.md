# Technical SEO — findings & raw evidence

Score: **78 / 100**

## Deployment state (the dominant finding)

```
https://renovostudio.com/           -> 200, openresty, Content-Length: 114
  body: <!DOCTYPE html><html><head><script>
        window.onload=function(){window.location.href="/lander"}</script></head></html>
https://renovostudio.com/lander     -> 200, 709 bytes (registrar landing page)
https://renovostudio.com/robots.txt -> User-agent: *  /  Allow: /
                                       LLM-Policy: /llms.txt  /  Sitemap: /sitemap.xml
https://renovostudio.com/llms.txt   -> "User-agent: *\nAllow: /\nDisallow-Training: /\nSitemap: /sitemap.xml"
https://renovostudio.com/sitemap.xml-> 1 URL: https://renovostudio.com/lander
```

The domain is registered and resolving, but parked. It publishes a competing `robots.txt`,
`llms.txt` and `sitemap.xml` that have nothing to do with this site.

Interim deploy:

```
https://micromegass.github.io/Portfolio/ -> 200, server: GitHub.com
  <meta name="robots" content="noindex, nofollow">
  canonical: https://micromegass.github.io/Portfolio/
  hreflang:  en/de/es/x-default -> all /Portfolio/ paths
  sitemap-index.xml -> 404 (correctly absent)
  /this-page-does-not-exist-xyz/ -> 404 (correct status)
  last-modified: Thu, 23 Jul 2026 20:52:04 GMT
```

Correct staging behaviour — no duplicate-content exposure.

## Response headers (live deploy)

| Header | Value |
|---|---|
| strict-transport-security | `max-age=31556952` |
| content-security-policy | **MISSING** |
| x-content-type-options | **MISSING** |
| x-frame-options | **MISSING** |
| referrer-policy | **MISSING** |
| permissions-policy | **MISSING** |
| cache-control | `max-age=600` |
| content-encoding | gzip |

GitHub Pages cannot set custom headers; resolve on the production host via `_headers`.

## Canonicals

37/37 pages carry a self-referencing absolute canonical. No relative canonicals, no
cross-domain canonicals, no chains.

Only anomaly: `/404.html` canonicals to `https://renovostudio.com/404/`.

## hreflang

```
Pages fully valid (self-ref + x-default + all targets resolve): 36 / 37
Reciprocity failures: 3 (all from /404.html)
Dangling targets: 0
```

Every content page emits exactly four alternates — `en`, `de`, `es`, `x-default` — each
pointing at a URL that exists in the build, and every target links back. Localized slugs
resolve correctly:

```
/website-relaunch/  <-> /de/website-relaunch/   <-> /es/rediseno-web/
/ai-assistant/      <-> /de/ki-assistent/       <-> /es/asistente-ia/
/web-apps/          <-> /de/web-apps/           <-> /es/aplicaciones-web/
/work/              <-> /de/projekte/           <-> /es/proyectos/
/website-check/     <-> /de/website-check/      <-> /es/analisis-web/
/imprint/           <-> /de/impressum/          <-> /es/aviso-legal/
/privacy/           <-> /de/datenschutz/        <-> /es/privacidad/
```

## robots.txt (production build)

```
User-agent: *
Allow: /

Sitemap: https://renovostudio.com/sitemap-index.xml
```

No AI crawler blocks. No accidental disallows.

## Sitemap

```
sitemap-index.xml -> sitemap-0.xml
sitemap-0.xml     -> 36 URLs
lastmod:     absent
changefreq:  absent
priority:    absent
xhtml:link:  absent
Canonicals not in sitemap: https://renovostudio.com/404/  (correct)
Sitemap URLs with no page:  none
```

## Link integrity

```
Total anchors:            901
Broken internal links:      0
External links:            80  (github.com, linkedin.com, ikunaglamping.com,
                                physio-und-ergo-fuerth.de)
External missing noopener:  0
Generic anchor texts:       0
Orphan pages:               0  (minimum 8 inbound links per page; 404 intentionally unlinked)
```

## Third-party surface

```
renovostudio.com:               185 refs (self)
github.com:                      37 (founder profile links)
www.linkedin.com:                37 (founder profile links)
ikunaglamping.com:                3 (client)
www.physio-und-ergo-fuerth.de:    3 (client)
```

No fonts CDN, no analytics, no tag manager, no embeds. Fully GDPR-clean.
