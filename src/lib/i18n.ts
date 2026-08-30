export type Locale = 'en' | 'de' | 'es';

export const locales: Locale[] = ['en', 'de', 'es'];

/** Studio identity — change here to rename the studio everywhere structural. */
export const studio = {
  name: 'RENOVO',
  tagline: { en: 'AI Web Studio', de: 'AI Web Studio', es: 'AI Web Studio' },
  /** TODO-CONTENT: confirm before launch; drives canonicals + hreflang. */
  domain: 'renovostudio.com',
  email: 'axelbraunschweiger@gmail.com',
  person: 'Axel Braunschweiger',
  /**
   * WhatsApp: `digits` is what wa.me needs (no +, spaces or dashes); `display`
   * is what a human reads. Keep both in sync — and keep them in sync with the
   * Impressum, which needs a direct contact channel under § 5 DDG.
   */
  whatsapp: {
    digits: '573202137192',
    display: '+57 320 213 7192',
  },
  /** Profiles search and answer engines can use to identify us (schema sameAs) */
  profiles: [
    'https://github.com/Micromegass',
    'https://www.linkedin.com/in/axel-braunschweiger-17b5609b/',
  ],
};

export type PageKey =
  | 'home'
  | 'relaunch'
  | 'ai'
  | 'apps'
  | 'check'
  | 'pricing'
  | 'work'
  | 'case-physio'
  | 'case-ikuna'
  | 'about'
  | 'contact'
  | 'imprint'
  | 'privacy';

/** Localized slugs. English lives at the root (no /en prefix). */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', de: '/de/', es: '/es/' },
  relaunch: {
    en: '/website-relaunch/',
    de: '/de/website-relaunch/',
    es: '/es/rediseno-web/',
  },
  ai: {
    en: '/ai-assistant/',
    de: '/de/ki-assistent/',
    es: '/es/asistente-ia/',
  },
  apps: {
    en: '/web-apps/',
    de: '/de/web-apps/',
    es: '/es/aplicaciones-web/',
  },
  check: {
    en: '/website-check/',
    de: '/de/website-check/',
    es: '/es/analisis-web/',
  },
  pricing: { en: '/pricing/', de: '/de/preise/', es: '/es/precios/' },
  work: { en: '/work/', de: '/de/projekte/', es: '/es/proyectos/' },
  'case-physio': {
    en: '/work/physio-ergo-fuerth/',
    de: '/de/projekte/physio-ergo-fuerth/',
    es: '/es/proyectos/physio-ergo-fuerth/',
  },
  'case-ikuna': {
    en: '/work/ikuna-glamping/',
    de: '/de/projekte/ikuna-glamping/',
    es: '/es/proyectos/ikuna-glamping/',
  },
  about: { en: '/studio/', de: '/de/studio/', es: '/es/estudio/' },
  contact: { en: '/contact/', de: '/de/kontakt/', es: '/es/contacto/' },
  imprint: { en: '/imprint/', de: '/de/impressum/', es: '/es/aviso-legal/' },
  privacy: { en: '/privacy/', de: '/de/datenschutz/', es: '/es/privacidad/' },
};

/** Prefix a localized route with Astro's base (GitHub Pages serves under /Portfolio). */
export function href(page: PageKey, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + routes[page][locale];
}

/** All alternates of a page, for hreflang + the language switcher. */
export function alternates(page: PageKey): { locale: Locale; path: string }[] {
  return locales.map((locale) => ({ locale, path: routes[page][locale] }));
}

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
};

export const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_CO',
};

/** Service pages, in the order they appear in nav and on the homepage. */
export const servicePages = ['relaunch', 'ai', 'apps'] as const;
export type ServiceKey = (typeof servicePages)[number];
