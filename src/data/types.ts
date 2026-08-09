import type { PageKey, ServiceKey } from '@/lib/i18n';

/** Projects shown in the "current builds" band; each maps to one image. */
export type BuildKey = 'davidleutert' | 'fritzloesel' | 'yosoytattoo' | 'trazo';

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
    /** Reassurance under the hero's check field */
    checkNote: string;
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
    buildsEyebrow: string;
    buildsTitle: string;
    buildsIntro: string;
    /**
     * Projects currently in flight — client work not yet launched, plus the
     * studio's own products. `key` selects the image from `buildImages`;
     * `url` is present only where there is something a visitor may open.
     */
    builds: {
      key: BuildKey;
      client: string;
      sector: string;
      desc: string;
      status: string;
      url?: string;
      urlLabel?: string;
      imageAlt: string;
    }[];
  };

  cases: Record<
    'physio' | 'ikuna',
    {
      client: string;
      sector: string;
      url: string;
      urlLabel: string;
      imageAlt: string;
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
    /** What to put in the first email, so the reply is useful straight away */
    includeTitle: string;
    include: string[];
    nextTitle: string;
    next: { title: string; body: string }[];
  };

  cta: { eyebrow: string; title: string; body: string; button: string };

  /** Free website check — client-side PageSpeed Insights lead magnet */
  check: {
    eyebrow: string;
    title: string;
    lead: string;
    inputLabel: string;
    placeholder: string;
    submit: string;
    running: string;
    runningNote: string;
    privacyNote: string;
    privacyLink: string;
    scoresLabel: string;
    categories: { performance: string; accessibility: string; bestPractices: string; seo: string };
    vitalsLabel: string;
    vitals: { lcp: string; cls: string; tbt: string; si: string };
    opportunitiesLabel: string;
    opportunitiesNone: string;
    savingsLabel: string;
    scale: { good: string; ok: string; poor: string };
    errors: { invalid: string; failed: string; quota: string; unreachable: string };
    resultFor: string;
    /** Plain-language explainer of what each score means */
    explainTitle: string;
    explain: { term: string; body: string }[];
    afterTitle: string;
    afterBody: string;
    afterButton: string;
    disclaimer: string;
  };

  /** Site assistant — the chat widget, talking to the RENOVO worker */
  chat: {
    launch: string;
    launchAria: string;
    title: string;
    subtitle: string;
    /** The assistant's opening line, rendered client-side (not model output) */
    intro: string;
    suggestionsLabel: string;
    suggestions: string[];
    inputLabel: string;
    placeholder: string;
    send: string;
    close: string;
    thinking: string;
    /** Announced to screen readers when a reply finishes */
    replyReady: string;
    privacyNote: string;
    privacyLink: string;
    disclaimer: string;
    errors: {
      failed: string;
      busy: string;
      rateLimited: string;
      tooLong: string;
      offline: string;
    };
  };

  legal: {
    imprint: { title: string; intro: string; sections: { heading: string; body: string[] }[] };
    privacy: {
      title: string;
      intro: string;
      updated: string;
      sections: { heading: string; body: string[] }[];
    };
  };

  notFound: { title: string; body: string; link: string };
}
