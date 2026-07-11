import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    home: {
      title: 'Axel Braunschweiger — Websites & web apps, built like an owner',
      description:
        'Freelance web developer and AI-first engineer. I build websites, web apps and MVPs for businesses in Germany and Latin America — with the care of someone who has founded two companies himself.',
    },
    services: {
      title: 'Services — Websites, web apps, AI integration | Axel Braunschweiger',
      description:
        'Professional websites, redesigns, full-stack web apps, MVPs, AI integrations and business automation. Clear process, honest advice, production quality.',
    },
    work: {
      title: 'Work — Case studies & current projects | Axel Braunschweiger',
      description:
        'Real projects with real stakes: two founded companies and their websites, production engineering at heatbeat, and a lab of current prototypes.',
    },
    'case-physio': {
      title: 'Case study: Physio & Ergo Fürth — practice website & booking',
      description:
        'How I built the digital presence for my own physiotherapy and occupational therapy practice at Fürth central station — from brand to booking.',
    },
    'case-ikuna': {
      title: 'Case study: Ikuna Glamping — hospitality brand & website',
      description:
        'Brand and website for Ikuna Glamping, a mountain refuge in San Vicente Ferrer, Antioquia — designed and built by its co-founder.',
    },
    about: {
      title: 'About — teacher, founder, AI-first engineer | Axel Braunschweiger',
      description:
        'From teaching at Universidad EAFIT in Medellín to production engineering in Germany to founding two companies. The path behind the work.',
    },
    contact: {
      title: 'Contact — start a project | Axel Braunschweiger',
      description:
        'Tell me about your website, web app or automation project. I answer personally, in English, German or Spanish.',
    },
    imprint: {
      title: 'Imprint | Axel Braunschweiger',
      description: 'Legal notice (Impressum) for axelbraunschweiger.com.',
    },
    privacy: {
      title: 'Privacy policy | Axel Braunschweiger',
      description: 'Privacy policy (Datenschutzerklärung) for axelbraunschweiger.com.',
    },
  },

  nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    menuLabel: 'Menu',
    homeAria: 'Axel Braunschweiger — home',
  },

  footer: {
    role: 'AI-first engineer · Web developer',
    locations: 'Fürth, Germany ↔ Medellín, Colombia',
    languagesLabel: 'Languages',
    languages: 'DE · EN · ES',
    contactLabel: 'Contact',
    legalImprint: 'Imprint',
    legalPrivacy: 'Privacy',
    colophon: 'Designed and built by hand — with Claude as development partner. No trackers, no cookies.',
  },

  home: {
    kicker: 'Axel Braunschweiger · AI-first engineer · Fürth ↔ Medellín',
    headline: ['Software, built', 'like an owner.'],
    sub: 'I design and build websites and web apps for businesses — with the care of someone who has founded two companies himself. Senior engineering fundamentals, an AI-first workflow, and no jargon along the way.',
    dims: [
      { value: '02', label: 'companies founded' },
      { value: '03', label: 'working languages' },
      { value: '02', label: 'home continents' },
    ],
    cta: { primary: 'Start a project', secondary: 'See the work' },
    journey: {
      kicker: 'My path',
      title: 'It’s been a bit of a journey.',
      intro:
        'Teacher, university lecturer, developer, founder — every stop taught me something I still use for my clients today. Here it is, in order.',
      link: 'More about me',
    },
    services: {
      kicker: 'Services',
      title: 'What I build',
      items: [
        {
          title: 'Websites & redesigns',
          desc: 'Fast, precise, search-friendly sites that make a business look the way it deserves.',
        },
        {
          title: 'Web apps & MVPs',
          desc: 'Full-stack products for founders — scoped honestly, shipped production-ready.',
        },
        {
          title: 'AI & automation',
          desc: 'AI integrations, internal tools and workflows that quietly remove hours of manual work.',
        },
      ],
      link: 'All services',
    },
    work: { kicker: 'Selected work', title: 'Proof, not promises', link: 'All work' },
    testimonial: {
      kicker: 'Working together',
      quote: '', // TODO-CONTENT: LinkedIn testimonial from Heatbeat colleague (text + permission pending)
      attribution: '',
    },
  },

  services: {
    kicker: 'Services',
    title: 'Clear scope. Honest advice. Production quality.',
    intro:
      'Every engagement starts with a conversation about what your business actually needs — sometimes that means less software than you expected. Here is what I build, and how.',
    items: [
      {
        id: 'websites',
        title: 'Websites & redesigns',
        desc: 'A website is your most patient employee — it should be fast, precise and persuasive. I design and build sites that load instantly, rank well and read clearly in every language your customers speak. I also take over existing sites that have grown messy and give them a solid foundation.',
        deliverables: [
          'Design & development from one hand',
          'Excellent Core Web Vitals & SEO',
          'Multilingual (DE / EN / ES)',
          'Accessible & GDPR-conscious',
        ],
      },
      {
        id: 'apps',
        title: 'Web apps & MVPs',
        desc: 'For founders and teams who need real software: booking systems, customer portals, dashboards, products. I scope honestly, build with production discipline, and ship something you can put in front of users — not a demo you will rewrite later.',
        deliverables: [
          'Full-stack development',
          'Honest scoping & fixed milestones',
          'Production-ready from day one',
          'Documentation & handover',
        ],
      },
      {
        id: 'ai',
        title: 'AI integration & automation',
        desc: 'The most valuable AI projects are rarely chatbots. I find the repetitive work inside your business — documents, emails, data entry, reporting — and build AI workflows and internal tools that remove it. I use these systems daily in my own companies.',
        deliverables: [
          'AI workflows & integrations',
          'Internal tools & dashboards',
          'Process automation',
          'Practical, measurable value',
        ],
      },
      {
        id: 'consulting',
        title: 'Consulting & refactoring',
        desc: 'A second pair of senior eyes: reviewing an existing codebase, untangling a stuck project, or advising on how AI actually fits into your development process. Direct, jargon-free, actionable.',
        deliverables: [
          'Codebase reviews & refactoring',
          'Technical strategy',
          'AI-first workflow advisory',
        ],
      },
    ],
    deliverablesLabel: 'Included',
    process: {
      kicker: 'The process',
      title: 'How working with me works',
      intro: 'No agencies, no handoffs, no surprises. You talk to the person who builds it.',
      steps: [
        {
          title: 'Conversation',
          body: 'We talk about your business first, the software second. Free, direct, in German, English or Spanish.',
        },
        {
          title: 'Proposal',
          body: 'You get a written scope in plain language: what will be built, what it costs, when it ships.',
        },
        {
          title: 'Build',
          body: 'Short cycles, visible progress. You see the real thing early and often — never a surprise at the end.',
        },
        {
          title: 'Handover',
          body: 'Deployed, documented, explained. You own everything, and you understand what you own.',
        },
      ],
    },
  },

  work: {
    kicker: 'Work',
    title: 'Real projects, real stakes',
    intro:
      'The strongest proof I can offer: I have founded two companies and built their digital presence myself. When I build for you, I build with the same ownership.',
    caseLabel: 'Case study',
    visitLabel: 'Visit live site',
    readLabel: 'Read case study',
    employment: {
      kicker: 'Engineering background',
      title: 'heatbeat engineering GmbH',
      body: 'Before going independent, I worked as a full-stack developer at heatbeat engineering in Germany — responsible for the whole development cycle: backend architecture, APIs, data visualization, frontend, deployment. That production discipline is the foundation everything else stands on.',
      stack: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker', 'D3.js', 'REST APIs', 'DevOps'],
      stackLabel: 'Stack',
    },
    lab: {
      kicker: 'Currently building',
      title: 'The lab',
      intro:
        'Working prototypes I am building right now — AI-first, from idea to usable software in weeks. Ask me about any of them.',
      statusLabel: 'Status',
      items: [
        {
          title: 'Reminder App',
          desc: 'A calm, opinionated reminder tool that treats attention as a scarce resource.', // TODO-CONTENT: real one-liner + demo link
          status: 'Working prototype',
        },
        {
          title: 'Tattoo Price Calculator',
          desc: 'Instant, transparent price estimates for tattoo studios and their clients.', // TODO-CONTENT: real one-liner + demo link
          status: 'Working prototype',
        },
        {
          title: 'Flight Search Tool',
          desc: 'A focused flight search for routes the big platforms handle badly.', // TODO-CONTENT: real one-liner + demo link
          status: 'Working prototype',
        },
        {
          title: 'Medellín Tourist Guide',
          desc: 'A local’s guide to Medellín — built by someone who actually lives there.', // TODO-CONTENT: real one-liner + demo link
          status: 'Working prototype',
        },
      ],
    },
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      role: 'Founder · Design · Development',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      title: 'A practice that fills its own schedule',
      summary:
        'I founded a physiotherapy and occupational therapy practice at Fürth central station — and built its digital presence: brand, website and online booking. When the website is your own company’s front door, you learn what actually converts.',
      specs: [
        { label: 'Sector', value: 'Healthcare · Germany' },
        { label: 'Role', value: 'Founder, designer, developer' },
        { label: 'Scope', value: 'Brand · Website · Online booking' },
        { label: 'Status', value: 'Live & operating' },
      ],
      sections: [
        {
          heading: 'The problem',
          body: 'German therapy practices run on phone calls and waiting lists. Patients want to know three things fast: what do you treat, who treats it, and when can I come in. Most practice websites answer none of them.',
        },
        {
          heading: 'The build',
          body: 'A fast, warm, mobile-first site with the full range of physio and ergo services clearly explained, the team presented personally, and online booking front and center — so appointments happen without a single phone call, and the practice can promise no long waiting times.',
        },
        {
          heading: 'Owner’s perspective',
          body: 'Because it is my own company, every decision was a business decision: which treatments to feature, how to phrase insurance questions, where booking friction loses a patient. That perspective now goes into every client project.',
        },
      ],
      outcomeKicker: 'What it does for the business',
      outcomes: [
        'Appointments are booked online, around the clock, without phone tag',
        'The practice presents its full team and every specialty clearly',
        'A real business runs on this site every day',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      role: 'Co-founder · Brand · Design · Development',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      title: 'A mountain refuge with a digital front door',
      summary:
        'Ikuna is a glamping refuge in the mountains of San Vicente Ferrer, Antioquia — an hour from Medellín. As co-founder I built the brand and the website: a calm, image-led experience in Spanish that turns wanderlust into bookings.',
      specs: [
        { label: 'Sector', value: 'Hospitality · Colombia' },
        { label: 'Role', value: 'Co-founder, brand, developer' },
        { label: 'Scope', value: 'Brand · Website · Booking flow' },
        { label: 'Status', value: 'Live & operating' },
      ],
      sections: [
        {
          heading: 'The problem',
          body: 'Glamping sells a feeling. A slow, cluttered website kills that feeling before a guest ever sees the mountains. The site had to be atmospheric, fast on rural mobile connections, and unmistakably local.',
        },
        {
          heading: 'The build',
          body: 'An image-led, Spanish-first site built for performance: the story of the place first (“conecta con lo esencial”), practical details second, booking always one tap away. Every photograph, word and section serves the same calm mood as the refuge itself.',
        },
        {
          heading: 'Owner’s perspective',
          body: 'Hospitality taught me conversion honesty: nobody books because of a feature list. They book because the page made them feel the place. I carry that lesson into every marketing site I build.',
        },
      ],
      outcomeKicker: 'What it does for the business',
      outcomes: [
        'Guests arrive at booking already sold on the experience',
        'Runs fast on the mobile connections guests actually have',
        'The brand — name to typography — was built alongside the site',
      ],
    },
  },

  caseMeta: {
    kicker: 'Case study',
    specLabel: 'At a glance',
    backLabel: 'All work',
    nextLabel: 'Next case study',
  },

  about: {
    kicker: 'About',
    title: 'Making complicated things understandable',
    intro:
      'That sentence has been my job description three times: as a teacher, as a founder, and now as an engineer. Only the material changed.',
    portraitAlt: 'Portrait of Axel Braunschweiger',
    chapters: [
      {
        period: 'The foundation',
        title: 'Teacher of English, Economics & Philosophy',
        body: 'I studied English, Economics and Philosophy and became a teacher. Standing in front of a room teaches you something no bootcamp can: how to take something complex and make it land. I still use that skill every single day — in code reviews, in proposals, in explaining AI to skeptical business owners.',
      },
      {
        period: 'Medellín',
        title: 'Universidad EAFIT, Colombia',
        body: 'I moved to Colombia and taught for two years at Universidad EAFIT in Medellín. Somewhere between lectures I started writing code — and realized I didn’t want to stop. I completed the instructor-led bootcamp at Make it Real: twelve intense weeks of Ruby, Rails, JavaScript and shipping real projects.',
      },
      {
        period: 'Germany',
        title: 'Full-stack developer at heatbeat engineering',
        body: 'Back in Germany I joined heatbeat engineering as a full-stack developer: Python, Django, PostgreSQL, React, Docker. I owned features through the whole cycle — architecture, APIs, data visualization, deployment. Production software, production responsibility.',
      },
      {
        period: 'Founding',
        title: 'Two companies of my own',
        body: 'I founded a physiotherapy and occupational therapy practice in Fürth, and co-founded Ikuna Glamping in the Colombian mountains — and built the digital presence for both. Running businesses changed how I build software: I now think in revenue, operations and customer trust, not just in features.',
      },
      {
        period: 'Now',
        title: 'AI-first engineer',
        body: 'Today I build with Claude as my daily development partner. Not as a shortcut — as a multiplier on top of engineering fundamentals. It changed what one person can ship: production websites, web apps and automations in weeks, at a quality bar I would sign my name under. This portfolio is built exactly that way.',
      },
    ],
    now: {
      kicker: 'Today',
      title: 'Between Fürth and Medellín',
      body: 'I divide my time between Germany and Colombia and work with clients in both worlds — in German, English or Spanish. Wherever you are, you talk directly to the person who designs, builds and ships your software.',
    },
    facts: [
      { label: 'Base', value: 'Fürth (DE) ↔ Medellín (CO)' },
      { label: 'Languages', value: 'German · English · Spanish' },
      { label: 'Focus', value: 'Websites · Web apps · AI workflows' },
      { label: 'Workflow', value: 'AI-first, engineering-grounded' },
    ],
  },

  contact: {
    kicker: 'Contact',
    title: 'Tell me about your project',
    body: 'One honest email is enough: what your business does, what you need, and where it hurts today. I read everything myself and reply personally — usually within a working day.',
    emailLabel: 'Write to',
    email: 'axelbraunschweiger@gmail.com', // TODO-CONTENT: switch to domain address when available
    availability: 'Currently taking on projects',
    languagesNote: 'In German, English or Spanish — whichever is easiest for you.',
  },

  cta: {
    kicker: 'Next step',
    title: 'Let’s build something that earns its keep.',
    body: 'A website, a web app, an automation — or just a second opinion. The first conversation is free and refreshingly jargon-free.',
    button: 'Start a project',
  },

  legal: {
    imprint: {
      title: 'Imprint',
      body: [
        'Information according to § 5 TMG (German Telemedia Act).',
        'Axel Braunschweiger', // TODO-CONTENT: full Impressum data (address, contact, VAT ID if applicable)
        'Contact: axelbraunschweiger@gmail.com',
        'Responsible for content according to § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Privacy policy',
      body: [
        'This website is intentionally private by design: it sets no cookies, uses no analytics and loads no third-party resources. All fonts and assets are served from this site’s own server.',
        'Server log files: the hosting provider may automatically store technical access data (such as IP address, date and time, browser type) for security and operation. This data is not merged with other sources and is deleted according to the provider’s retention policy.',
        'Contact by email: if you write to me, your message and address are used solely to answer you. Data controller: Axel Braunschweiger.', // TODO-CONTENT: complete once Impressum data + hosting provider are final
        'You have the right to access, correct and delete personal data concerning you (Art. 15–17 GDPR).',
      ],
    },
  },

  notFound: {
    title: 'This page wandered off',
    body: 'The page you were looking for doesn’t exist — maybe it moved, maybe it never was. Let’s get you back on the path.',
    link: 'Back home',
  },
};
