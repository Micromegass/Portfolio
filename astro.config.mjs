// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Interim deploy: GitHub Pages under /portfolio (noindex until the real
// domain exists). Set GITHUB_PAGES=true in CI; local dev/build uses the
// future production domain so canonical/hreflang URLs are correct.
const onGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: onGitHubPages
    ? 'https://micromegass.github.io'
    : 'https://axelbraunschweiger.com',
  base: onGitHubPages ? '/portfolio' : '/',
  trailingSlash: 'ignore',
  output: 'static',
  // No sitemap on the interim GitHub Pages deploy — it must not be indexed
  integrations: onGitHubPages ? [] : [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
