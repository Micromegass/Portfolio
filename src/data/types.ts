import type { PageKey } from '@/lib/i18n';

/** One typed shape for all three languages — translations cannot drift. */
export interface SiteContent {
  meta: Record<PageKey, { title: string; description: string }>;
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    menuLabel: string;
    homeAria: string;
  };
  footer: {
    /** DIN title-block cells */
    role: string;
    locations: string;
    languagesLabel: string;
    languages: string;
    drawnBy: string;
    sheetLabel: string;
    revisionLabel: string;
    contactLabel: string;
    legalImprint: string;
    legalPrivacy: string;
    colophon: string;
  };
  home: {
    kicker: string;
    headline: [string, string];
    sub: string;
    dims: { value: string; label: string }[];
    cta: { primary: string; secondary: string };
    scale: {
      kicker: string;
      title: string;
      outro: string;
      frames: { scale: string; title: string; body: string }[];
    };
    services: {
      kicker: string;
      title: string;
      items: { title: string; desc: string }[];
      link: string;
    };
    work: { kicker: string; title: string; link: string };
    story: { kicker: string; title: string; body: string; link: string };
    testimonial: { kicker: string; quote: string; attribution: string };
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    items: {
      id: string;
      title: string;
      desc: string;
      deliverables: string[];
    }[];
    deliverablesLabel: string;
    process: {
      kicker: string;
      title: string;
      intro: string;
      steps: { title: string; body: string }[];
    };
  };
  work: {
    kicker: string;
    title: string;
    intro: string;
    caseLabel: string;
    visitLabel: string;
    readLabel: string;
    employment: {
      kicker: string;
      title: string;
      body: string;
      stack: string[];
      stackLabel: string;
    };
    lab: {
      kicker: string;
      title: string;
      intro: string;
      statusLabel: string;
      items: { title: string; desc: string; status: string }[];
    };
  };
  cases: Record<
    'physio' | 'ikuna',
    {
      client: string;
      role: string;
      url: string;
      urlLabel: string;
      title: string;
      summary: string;
      specs: { label: string; value: string }[];
      sections: { heading: string; body: string }[];
      outcomeKicker: string;
      outcomes: string[];
    }
  >;
  caseMeta: {
    kicker: string;
    specLabel: string;
    backLabel: string;
    nextLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    portraitAlt: string;
    chapters: { period: string; title: string; body: string }[];
    now: { kicker: string; title: string; body: string };
    facts: { label: string; value: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    email: string;
    availability: string;
    languagesNote: string;
  };
  cta: { kicker: string; title: string; body: string; button: string };
  legal: {
    imprint: { title: string; body: string[] };
    privacy: { title: string; body: string[] };
  };
  notFound: { title: string; body: string; link: string };
}
