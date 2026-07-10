import type { APIRoute } from 'astro';

/**
 * Interim GitHub Pages deploy: block everything (site also ships noindex meta).
 * Real domain: allow everything and point to the sitemap.
 */
export const GET: APIRoute = () => {
  const onGitHubPages = import.meta.env.GITHUB_PAGES === 'true';

  const body = onGitHubPages
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: https://axelbraunschweiger.com/sitemap-index.xml\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
