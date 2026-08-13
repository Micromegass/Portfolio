// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Interim deploy: GitHub Pages under /portfolio (noindex until the real
// domain exists). Set GITHUB_PAGES=true in CI; local dev/build uses the
// future production domain so canonical/hreflang URLs are correct.
const onGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // TODO-CONTENT: confirm the studio domain before launch (see studio.domain
  // in src/lib/i18n.ts — both must match).
  site: onGitHubPages ? 'https://micromegass.github.io' : 'https://renovostudio.com',
  base: onGitHubPages ? '/Portfolio' : '/',
  trailingSlash: 'ignore',
  output: 'static',
  // No sitemap on the interim GitHub Pages deploy — it must not be indexed
  // `lastmod` is the one sitemap hint Google actually consumes; without it the
  // 36 URLs carry no freshness signal at all.
  integrations: onGitHubPages
    ? []
    : [sitemap({ serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }) })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
