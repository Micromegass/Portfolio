export type Locale = 'en' | 'de' | 'es';

export const locales: Locale[] = ['en', 'de', 'es'];
export const defaultLocale: Locale = 'en';

export type PageKey =
  | 'home'
  | 'services'
  | 'work'
  | 'case-physio'
  | 'case-ikuna'
  | 'about'
  | 'contact'
  | 'imprint'
  | 'privacy';

/**
 * Localized slugs per page. SEO: URLs speak the visitor's language.
 * English lives at the root (no /en prefix).
 */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', de: '/de/', es: '/es/' },
  services: { en: '/services/', de: '/de/leistungen/', es: '/es/servicios/' },
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
  about: { en: '/about/', de: '/de/ueber-mich/', es: '/es/sobre-mi/' },
  contact: { en: '/contact/', de: '/de/kontakt/', es: '/es/contacto/' },
  imprint: { en: '/imprint/', de: '/de/impressum/', es: '/es/aviso-legal/' },
  privacy: { en: '/privacy/', de: '/de/datenschutz/', es: '/es/privacidad/' },
};

/** Prefix a localized route with Astro's base (GitHub Pages serves under /portfolio). */
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

/** BCP47 for <html lang> and og:locale. */
export const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_CO',
};
