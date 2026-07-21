import type { PageKey, ServiceKey } from '@/lib/i18n';

/** One typed shape for all three languages — translations cannot drift. */
export interface SiteContent {
  meta: Record<PageKey, { title: string; description: string }>;

  nav: {
    items: { page: PageKey; label: string }[];
    cta: string;
    menuLabel: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
  };

  footer: {
    blurb: string;
    servicesLabel: string;
    studioLabel: string;
    contactLabel: string;
    locations: string;
    legalImprint: string;
    legalPrivacy: string;
    colophon: string;
  };

  home: {
    eyebrow: string;
    headline: [string, string, string];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { value: string; label: string }[];
    transformer: { before: string; after: string; hint: string };
    services: { eyebrow: string; title: string; intro: string; more: string };
    work: { eyebrow: string; title: string; intro: string; more: string };
    process: {
      eyebrow: string;
      title: string;
      steps: { title: string; body: string }[];
    };
    testimonial: { quote: string; attribution: string };
  };

  /** The three service offerings — used on the homepage and as full pages. */
  services: Record<
    ServiceKey,
    {
      /** Short label for nav and cards */
      navLabel: string;
      cardTitle: string;
      cardDesc: string;
      /** Full page */
      eyebrow: string;
      title: string;
      lead: string;
      problem: { title: string; body: string };
      solution: { title: string; body: string };
      includesLabel: string;
      includes: string[];
      forWhomLabel: string;
      forWhom: string[];
      faqLabel: string;
      faq: { q: string; a: string }[];
    }
  >;

  work: {
    eyebrow: string;
    title: string;
    intro: string;
    visitLabel: string;
    readLabel: string;
    labEyebrow: string;
    labTitle: string;
    labIntro: string;
    lab: { title: string; desc: string; tag: string }[];
  };

  cases: Record<
    'physio' | 'ikuna',
    {
      client: string;
      sector: string;
      url: string;
      urlLabel: string;
      cardTitle: string;
      cardDesc: string;
      metrics: { value: string; label: string }[];
      title: string;
      summary: string;
      specs: { label: string; value: string }[];
      sections: { heading: string; body: string }[];
      outcomeLabel: string;
      outcomes: string[];
    }
  >;

  caseMeta: { eyebrow: string; specLabel: string; backLabel: string; nextLabel: string };

  about: {
    eyebrow: string;
    title: string;
    lead: string;
    principlesLabel: string;
    principles: { title: string; body: string }[];
    personEyebrow: string;
    personTitle: string;
    personLead: string;
    portraitAlt: string;
    timelineLabel: string;
    timeline: { period: string; title: string; body: string }[];
    facts: { label: string; value: string }[];
  };

  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    availability: string;
    languagesNote: string;
    reviewTitle: string;
    reviewBody: string;
  };

  cta: { eyebrow: string; title: string; body: string; button: string };

  legal: {
    imprint: { title: string; body: string[] };
    privacy: { title: string; body: string[] };
  };

  notFound: { title: string; body: string; link: string };
}
