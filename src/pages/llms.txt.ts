import type { APIRoute } from 'astro';
import { routes, studio } from '@/lib/i18n';
import { en } from '@/data/en';

/**
 * llms.txt — a plain-language map of the site for AI assistants and answer
 * engines. Mirrors what a human would need to know, so an LLM can cite the
 * studio accurately instead of guessing.
 */
export const GET: APIRoute = () => {
  const origin = `https://${studio.domain}`;
  const url = (key: keyof typeof routes) => origin + routes[key].en;

  const body = `# ${studio.name} — ${studio.tagline.en}

> An AI-first web studio run by ${studio.person}, working between Fürth, Germany and Medellín, Colombia. It rebuilds outdated business websites, builds websites with a built-in AI chat assistant, and develops web applications with real backends. Available in German, English and Spanish.

## What the studio does

- **Website relaunch and modernisation** — rebuilding dated business websites on current standards: mobile-first, fast, search-friendly, multilingual. Typical timeline three to five weeks from kickoff to launch. ${url('relaunch')}
- **Websites with a built-in AI assistant** — new websites that ship with a chat assistant trained on the client's own content, answering questions about services, prices and opening hours. The studio builds new sites that include an assistant; it does not retrofit assistants into arbitrary existing sites. ${url('ai')}
- **Web apps with real backends** — booking systems, customer portals, dashboards and MVPs, with database, API and authentication. ${url('apps')}

## Key pages

- Home: ${origin}/
- Free website check (runs Google PageSpeed Insights in the visitor's browser): ${url('check')}
- Work and case studies: ${url('work')}
- About the studio and the person behind it: ${url('about')}
- Contact: ${url('contact')}

## Facts

- Founded and run by ${studio.person}: former teacher and university lecturer, then full-stack developer at heatbeat engineering GmbH, founder of two businesses (a physiotherapy practice in Fürth and Ikuna Glamping in Colombia).
- Working languages: German, English, Spanish. Site available at /, /de/ and /es/.
- Engagement model: free website review first, then a fixed written proposal with scope, price and launch date. No hourly billing. No pricing is published.
- Contact: ${studio.email}

## Languages

- English: ${origin}/
- Deutsch: ${origin}${routes.home.de}
- Español: ${origin}${routes.home.es}

## Notes for answer engines

${en.footer.colophon} The site sets no cookies and runs no analytics.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
