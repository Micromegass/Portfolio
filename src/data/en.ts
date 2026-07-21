import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio | Website relaunch, AI assistants, web apps',
      description:
        'We modernise outdated business websites, build sites with a built-in AI assistant, and develop web apps with real backends. Multilingual, fast, launched in weeks.',
    },
    relaunch: {
      title: 'Website relaunch & modernisation | RENOVO',
      description:
        'Your website looks and loads like it was built years ago. We rebuild it on current standards — fast, mobile-first, search-friendly, multilingual — usually in three to five weeks.',
    },
    ai: {
      title: 'Websites with a built-in AI assistant | RENOVO',
      description:
        'We build websites that ship with a chat assistant trained on your own content — answering customer questions about services, prices and opening hours, day and night.',
    },
    apps: {
      title: 'Web apps with real backends | RENOVO',
      description:
        'Booking systems, customer portals, dashboards and MVPs. Full-stack web applications with database, API and authentication — production software, not prototypes.',
    },
    work: {
      title: 'Work — websites and web apps we have built | RENOVO',
      description:
        'Selected projects: a healthcare practice website with online booking, a hospitality brand and booking site, plus current builds from the studio lab.',
    },
    'case-physio': {
      title: 'Case study: practice website with online booking | RENOVO',
      description:
        'Website, brand and online booking for a physiotherapy and occupational therapy practice in Fürth, Germany — appointments now arrive without a single phone call.',
    },
    'case-ikuna': {
      title: 'Case study: Ikuna Glamping — brand and booking site | RENOVO',
      description:
        'Brand and image-led website for a glamping refuge in Antioquia, Colombia — fast on rural mobile connections, atmospheric enough to sell the experience.',
    },
    about: {
      title: 'The studio — how RENOVO works',
      description:
        'A small AI-first web studio between Germany and Colombia. How we work, what we believe about building websites, and the person behind the studio.',
    },
    contact: {
      title: 'Start a project — free website review | RENOVO',
      description:
        'Send us your current website and get an honest review of what is holding it back. We reply personally in German, English or Spanish.',
    },
    imprint: { title: 'Imprint | RENOVO', description: 'Legal notice for RENOVO AI Web Studio.' },
    privacy: {
      title: 'Privacy policy | RENOVO',
      description: 'Privacy policy for RENOVO AI Web Studio. No cookies, no tracking.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Relaunch' },
      { page: 'ai', label: 'AI assistant' },
      { page: 'apps', label: 'Web apps' },
      { page: 'work', label: 'Work' },
      { page: 'about', label: 'Studio' },
    ],
    cta: 'Start a project',
    menuLabel: 'Main navigation',
    homeAria: 'RENOVO — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  footer: {
    blurb:
      'An AI-first web studio. We rebuild outdated business websites, add AI assistants, and develop web apps with real backends.',
    servicesLabel: 'Services',
    studioLabel: 'Studio',
    contactLabel: 'Contact',
    locations: 'Fürth, Germany ↔ Medellín, Colombia',
    legalImprint: 'Imprint',
    legalPrivacy: 'Privacy',
    colophon: 'Built by hand with an AI-first workflow. No trackers, no cookies.',
  },

  home: {
    eyebrow: 'Website relaunch · AI assistants · Web apps',
    headline: ['Your website,', 'rebuilt for the', 'AI era.'],
    sub: 'We modernise outdated business websites, build sites with an AI assistant that answers your customers around the clock, and develop web apps with real backends — in weeks, not quarters.',
    ctaPrimary: 'Get a free website review',
    ctaSecondary: 'See the work',
    facts: [
      { value: '3–5 weeks', label: 'from kickoff to launch' },
      { value: '100/100', label: 'typical Lighthouse score' },
      { value: 'DE · EN · ES', label: 'multilingual by default' },
    ],
    transformer: {
      before: 'Before',
      after: 'After',
      hint: 'Drag to compare — this is what a relaunch looks like.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Three ways we modernise your web presence.',
      intro:
        'Every project starts with the same question: what does your business actually need to win more customers online?',
      more: 'Learn more',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Real businesses. Real results.',
      intro: 'Websites and booking systems that companies run on every day.',
      more: 'All work',
    },
    process: {
      eyebrow: 'How it works',
      title: 'Four steps. No agency overhead.',
      steps: [
        {
          title: 'Free review',
          body: 'Send us your current website. You get an honest assessment of what is worth changing — and what is not.',
        },
        {
          title: 'Fixed proposal',
          body: 'Scope, price and launch date in plain language. No hourly billing, no surprises at the end.',
        },
        {
          title: 'Build',
          body: 'You see the real thing after the first week, and every week after that. Feedback goes straight in.',
        },
        {
          title: 'Launch & handover',
          body: 'Deployed, documented and yours. We stay available for changes if you want us to.',
        },
      ],
    },
    testimonial: {
      quote: '', // TODO-CONTENT: LinkedIn testimonial pending
      attribution: '',
    },
  },

  services: {
    relaunch: {
      navLabel: 'Relaunch',
      cardTitle: 'Website relaunch & modernisation',
      cardDesc:
        'Your site looks like 2014 and loads like it too. We rebuild it — same business, current standards.',
      eyebrow: 'Service 01',
      title: 'A website that finally matches your business.',
      lead: 'Most business websites were built years ago, by someone who has since moved on. They load slowly, break on phones, and quietly send customers to competitors. We rebuild them from the ground up.',
      problem: {
        title: 'What an outdated website costs you',
        body: 'Visitors decide in seconds. A slow, cluttered or mobile-broken site tells them your business is behind the times, whether that is true or not. Search engines rank it lower, so fewer people find you at all. And every enquiry that does not happen is invisible — you never see the customer who left.',
      },
      solution: {
        title: 'What we do about it',
        body: 'We keep what works about your business and rebuild everything around it: a clear structure, honest copy, fast modern code, and a design that looks current for years rather than months. Your content comes across, your search rankings are protected, and the new site is built so a non-technical person can keep it running.',
      },
      includesLabel: 'What is included',
      includes: [
        'Design and development from one hand',
        'Mobile-first, tested on real devices',
        'Excellent Core Web Vitals and technical SEO',
        'Multilingual where you need it (DE / EN / ES)',
        'Existing content migrated, nothing lost',
        'Accessible markup and GDPR-clean hosting setup',
        'Deployment, documentation and handover',
      ],
      forWhomLabel: 'A good fit if',
      forWhom: [
        'Your site was last redesigned more than four years ago',
        'It looks wrong or is hard to use on a phone',
        'You are embarrassed to send the link to a new customer',
        'Nobody in the company knows how to change the text',
      ],
      faqLabel: 'Common questions',
      faq: [
        {
          q: 'How long does a relaunch take?',
          a: 'Most business websites go from kickoff to launch in three to five weeks. Larger sites with many pages or several languages take longer — you get a fixed date in the proposal either way.',
        },
        {
          q: 'Will we lose our Google rankings?',
          a: 'No. Existing URLs are mapped and redirected, content and metadata come across, and the new site is technically stronger than the old one. Rankings usually improve rather than drop.',
        },
        {
          q: 'Can we edit the site ourselves afterwards?',
          a: 'Yes. We agree upfront which parts you want to change yourself and set the site up accordingly, then walk you through it at handover.',
        },
        {
          q: 'What does it cost?',
          a: 'Every project is scoped individually, and you get one fixed price before anything starts. The free review tells you roughly what range to expect, with no obligation.',
        },
      ],
    },

    ai: {
      navLabel: 'AI assistant',
      cardTitle: 'Websites with a built-in AI assistant',
      cardDesc:
        'Your new site can ship with a chat assistant that answers customer questions from your own content, day and night.',
      eyebrow: 'Service 02',
      title: 'A website that answers questions while you sleep.',
      lead: 'The same questions arrive again and again: what do you offer, what does it cost, when are you open, do you take my insurance. We build websites with a chat assistant that answers them from your own content — so your customers get a reply immediately and you get your evenings back.',
      problem: {
        title: 'The questions never stop',
        body: 'Every enquiry that could have been answered by your website ends up as a phone call, an email or a lost customer who did not feel like asking. Outside opening hours it is worse: people looking at your site at nine in the evening simply leave, and you never know they were there.',
      },
      solution: {
        title: 'An assistant that actually knows your business',
        body: 'When we build your website, we can include a chat assistant trained on your own content — your services, prices, opening hours and frequently asked questions. It answers in the visitor\'s language, points them to the right page, and tells them how to get in touch when a question needs a human. You stay in control of what it knows and what it says.',
      },
      includesLabel: 'What is included',
      includes: [
        'A chat assistant built into the website we deliver',
        'Trained on your own services, prices and FAQs',
        'Answers in German, English and Spanish',
        'Hands over to email or phone for anything it should not answer',
        'You decide the tone and the boundaries',
        'Straightforward to update as your business changes',
      ],
      forWhomLabel: 'A good fit if',
      forWhom: [
        'You answer the same handful of questions every week',
        'Customers browse your site outside business hours',
        'Your services need explaining before someone books',
        'You serve customers in more than one language',
      ],
      faqLabel: 'Common questions',
      faq: [
        {
          q: 'Can you add an assistant to our existing website?',
          a: 'Our focus is building new websites that include an assistant from the start — that way it fits the design, the content and the way the site is structured. If you already have a site, the honest recommendation is usually a relaunch with the assistant included.',
        },
        {
          q: 'Will it make things up?',
          a: 'It answers from the content you give it and is set up to say it does not know rather than invent an answer, pointing the visitor to a real contact instead. We test this together before launch.',
        },
        {
          q: 'Is it GDPR-compliant?',
          a: 'The setup is chosen with German data protection requirements in mind, disclosed in your privacy policy, and kept to the minimum data needed to answer a question. We go through the details with you before launch.',
        },
        {
          q: 'What does it cost to run?',
          a: 'There is a small monthly cost for the assistant itself, which depends on how many conversations it handles. You get a realistic estimate in the proposal.',
        },
      ],
    },

    apps: {
      navLabel: 'Web apps',
      cardTitle: 'Web apps with real backends',
      cardDesc:
        'Booking systems, customer portals, dashboards, MVPs — production software with a database behind it, not prototypes.',
      eyebrow: 'Service 03',
      title: 'When a website is not enough.',
      lead: 'Some businesses need software, not pages: something that stores data, has logins, sends emails, and does real work. We build full-stack web applications — with a database, an API and authentication — and ship them to production.',
      problem: {
        title: 'Spreadsheets stop scaling',
        body: 'Bookings live in one person\'s calendar. Customer data sits in a spreadsheet nobody trusts. Processes exist only in someone\'s head. It works until it does not — and off-the-shelf tools either do not fit how you actually work or cost more every year as you grow.',
      },
      solution: {
        title: 'Software shaped around your business',
        body: 'We build the application your business actually needs: booking and scheduling, customer portals, internal dashboards, or the first version of a product you want to take to market. An AI-first workflow means what used to take a team a quarter takes weeks — with the engineering fundamentals still in place underneath: proper data modelling, authentication, tests, and a deployment you can rely on.',
      },
      includesLabel: 'What is included',
      includes: [
        'Full-stack development: frontend, API, database',
        'User accounts and authentication where needed',
        'Honest scoping with fixed milestones',
        'Production deployment, monitoring and backups',
        'Documentation and a real handover',
        'Built to grow past your first hundred customers',
      ],
      forWhomLabel: 'A good fit if',
      forWhom: [
        'You are running the business on spreadsheets and calendars',
        'Off-the-shelf software almost fits, but not quite',
        'You are a founder who needs a first version in front of users',
        'Your team repeats the same manual process every day',
      ],
      faqLabel: 'Common questions',
      faq: [
        {
          q: 'How long does an MVP take?',
          a: 'A focused first version typically takes four to eight weeks. We deliberately cut scope to the smallest thing that is genuinely useful, then build from there once real users have touched it.',
        },
        {
          q: 'Who owns the code?',
          a: 'You do, completely. Everything is handed over with documentation, and nothing is locked to us.',
        },
        {
          q: 'What technology do you use?',
          a: 'Proven, boring-in-a-good-way tools: TypeScript, modern web frameworks, PostgreSQL, containerised deployment. The stack is chosen to fit the project and to be maintainable by any competent developer later.',
        },
        {
          q: 'Can you take over an existing project?',
          a: 'Often yes. We start with a short review of the codebase and tell you honestly whether continuing or rebuilding is the better investment.',
        },
      ],
    },
  },

  work: {
    eyebrow: 'Work',
    title: 'Websites businesses run on every day.',
    intro:
      'Two live businesses, built end to end — brand, website, booking — plus what the studio is building right now.',
    visitLabel: 'Visit live site',
    readLabel: 'Read case study',
    labEyebrow: 'Studio lab',
    labTitle: 'What we are building right now',
    labIntro:
      'Products the studio develops in-house to sharpen the tools and the workflow. Ask us about any of them.',
    lab: [
      {
        title: 'Reminder app',
        desc: 'A calm reminder tool that treats attention as a scarce resource.', // TODO-CONTENT
        tag: 'Working prototype',
      },
      {
        title: 'Tattoo price calculator',
        desc: 'Instant, transparent price estimates for tattoo studios and their clients.', // TODO-CONTENT
        tag: 'Working prototype',
      },
      {
        title: 'Flight search tool',
        desc: 'A focused flight search for routes the big platforms handle badly.', // TODO-CONTENT
        tag: 'Working prototype',
      },
      {
        title: 'Medellín city guide',
        desc: 'A local guide to Medellín, built by someone who lives there.', // TODO-CONTENT
        tag: 'Working prototype',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Healthcare · Germany',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      cardTitle: 'A practice that fills its own schedule',
      cardDesc:
        'Website, brand and online booking for a physiotherapy and occupational therapy practice — appointments now arrive without a single phone call.',
      metrics: [
        { value: '24/7', label: 'online booking' },
        { value: '0', label: 'phone tag' },
      ],
      title: 'A practice that fills its own schedule',
      summary:
        'A physiotherapy and occupational therapy practice at Fürth central station needed more than a business card on the web: patients had to understand the treatments, meet the team, and book without picking up the phone.',
      specs: [
        { label: 'Sector', value: 'Healthcare · Germany' },
        { label: 'Scope', value: 'Brand · Website · Online booking' },
        { label: 'Languages', value: 'German' },
        { label: 'Status', value: 'Live and operating' },
      ],
      sections: [
        {
          heading: 'The challenge',
          body: 'German therapy practices run on phone calls and waiting lists. Patients want three things fast: what do you treat, who treats it, and when can I come in. Most practice websites answer none of them, and every unanswered question becomes a phone call during treatment hours.',
        },
        {
          heading: 'What we built',
          body: 'A fast, warm, mobile-first website with the full range of physiotherapy and occupational therapy services explained in plain language, the team introduced personally, and online booking front and centre. Appointments now happen without a single phone call, which is what lets the practice promise short waiting times.',
        },
        {
          heading: 'Why it works',
          body: 'Every decision was made from the business side rather than the design side: which treatments to feature, how to phrase insurance questions, where booking friction quietly loses a patient. The site is structured so the practice can add treatments and team members without calling a developer.',
        },
      ],
      outcomeLabel: 'What it does for the business',
      outcomes: [
        'Appointments are booked online, around the clock, without phone tag',
        'The full team and every specialty are presented clearly',
        'A real practice runs on this site every day',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitality · Colombia',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      cardTitle: 'A mountain refuge with a digital front door',
      cardDesc:
        'Brand and image-led booking site for a glamping refuge in Antioquia — fast enough for rural mobile, atmospheric enough to sell the feeling.',
      metrics: [
        { value: '<1s', label: 'load on mobile' },
        { value: 'ES', label: 'Spanish-first' },
      ],
      title: 'A mountain refuge with a digital front door',
      summary:
        'Ikuna is a glamping refuge in the mountains of San Vicente Ferrer, Antioquia, an hour from Medellín. The brand and the website were built together: a calm, image-led experience in Spanish that turns wanderlust into bookings.',
      specs: [
        { label: 'Sector', value: 'Hospitality · Colombia' },
        { label: 'Scope', value: 'Brand · Website · Booking flow' },
        { label: 'Languages', value: 'Spanish' },
        { label: 'Status', value: 'Live and operating' },
      ],
      sections: [
        {
          heading: 'The challenge',
          body: 'Glamping sells a feeling. A slow, cluttered website kills that feeling before a guest has seen the mountains. The site had to be atmospheric, fast on the rural mobile connections guests actually use, and unmistakably local rather than a generic booking template.',
        },
        {
          heading: 'What we built',
          body: 'An image-led, Spanish-first website built for performance: the story of the place first, practical details second, and booking never more than a tap away. Every photograph, word and section serves the same calm mood as the refuge itself.',
        },
        {
          heading: 'Why it works',
          body: 'Nobody books a retreat because of a feature list. They book because the page made them feel the place — so the design spends its budget on atmosphere and speed, and removes everything that competes with the decision to come.',
        },
      ],
      outcomeLabel: 'What it does for the business',
      outcomes: [
        'Guests reach the booking step already sold on the experience',
        'Runs fast on the mobile connections guests actually have',
        'The brand, from name to typography, was built alongside the site',
      ],
    },
  },

  caseMeta: {
    eyebrow: 'Case study',
    specLabel: 'Project at a glance',
    backLabel: 'All work',
    nextLabel: 'Next case study',
  },

  about: {
    eyebrow: 'The studio',
    title: 'Small studio. Senior work. AI-first workflow.',
    lead: 'RENOVO is a deliberately small web studio working between Germany and Colombia. Small means you always talk to the person who builds your project. AI-first means work that used to take a team a quarter now takes weeks — without giving up the engineering fundamentals underneath.',
    principlesLabel: 'How we work',
    principles: [
      {
        title: 'We tell you what we would not build',
        body: 'Sometimes the honest answer is that you need less software than you expected, or a different thing entirely. You get that answer before you get an invoice.',
      },
      {
        title: 'You see the real thing early',
        body: 'No slide decks standing in for progress. There is a working website or application on a real URL from the first week, and it gets better every week.',
      },
      {
        title: 'Plain language, always',
        body: 'You should never need a translator to understand what you are paying for. Every proposal, update and handover is written so a non-technical owner can follow it.',
      },
      {
        title: 'Fast is a feature',
        body: 'Every site we ship targets top Lighthouse scores. Speed is not vanity: it decides how you rank, how long visitors stay, and how many of them become customers.',
      },
    ],
    personEyebrow: 'Behind the studio',
    personTitle: 'Axel Braunschweiger',
    personLead:
      'Teacher, university lecturer, developer, founder — the path here was not a straight line, and that turns out to be the point. Running two businesses teaches you what software has to earn; teaching teaches you how to explain it without jargon.',
    portraitAlt: 'Portrait of Axel Braunschweiger, founder of RENOVO',
    timelineLabel: 'The path here',
    timeline: [
      {
        period: 'The foundation',
        title: 'Teacher of English, Economics & Philosophy',
        body: 'Studied English, Economics and Philosophy, then taught. Standing in front of a room teaches you something no bootcamp can: how to make something complex actually land. That skill still shows up every day, in proposals and in explaining AI to sceptical business owners.',
      },
      {
        period: 'Medellín',
        title: 'Lecturer at Universidad EAFIT, Colombia',
        body: 'Two years teaching at Universidad EAFIT in Medellín. Somewhere between lectures came the first lines of code — and then the instructor-led bootcamp at Make it Real: twelve intensive weeks of Ruby, Rails, JavaScript and shipping real projects.',
      },
      {
        period: 'Germany',
        title: 'Full-stack developer at heatbeat engineering',
        body: 'Full-stack development at heatbeat engineering GmbH: Python, Django, PostgreSQL, React, Docker. Ownership of features across the whole cycle — architecture, APIs, data visualisation, deployment. Production software, production responsibility.',
      },
      {
        period: 'Founding',
        title: 'Two companies, two websites',
        body: 'Founded a physiotherapy and occupational therapy practice in Fürth, and co-founded Ikuna Glamping in the Colombian mountains — building the digital presence for both. Running businesses changes how you build software: you start thinking in revenue, operations and customer trust rather than features.',
      },
      {
        period: 'Now',
        title: 'RENOVO',
        body: 'The studio brings both halves together: senior engineering fundamentals with an AI-first workflow, aimed at businesses that need their web presence to finally do its job. This website is built exactly that way.',
      },
    ],
    facts: [
      { label: 'Based in', value: 'Fürth, Germany ↔ Medellín, Colombia' },
      { label: 'Working languages', value: 'German · English · Spanish' },
      { label: 'Focus', value: 'Relaunches · AI assistants · Web apps' },
      { label: 'Workflow', value: 'AI-first, engineering-grounded' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Send us your website. Get an honest verdict.',
    body: 'Write one email with your current website address and what is bothering you about it. You get a short, free review of what is holding it back and what a relaunch would realistically involve — no pitch deck, no obligation.',
    emailLabel: 'Write to',
    availability: 'Currently taking on projects',
    languagesNote: 'In German, English or Spanish — whichever is easiest for you.',
    reviewTitle: 'What the free review covers',
    reviewBody:
      'Speed and mobile behaviour, how you appear in search, how clearly the site explains what you do, and the two or three changes that would make the biggest difference. If a relaunch is not worth it for you, we will say so.',
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Let’s find out what your website could be doing for you.',
    body: 'A relaunch, an AI assistant, a web app — or just an honest second opinion. The first conversation is free and refreshingly jargon-free.',
    button: 'Start a project',
  },

  legal: {
    imprint: {
      title: 'Imprint',
      body: [
        'Information according to § 5 TMG (German Telemedia Act).',
        'RENOVO — AI Web Studio', // TODO-CONTENT: full legal name, address, VAT ID
        'Owner: Axel Braunschweiger',
        'Contact: axelbraunschweiger@gmail.com',
        'Responsible for content according to § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Privacy policy',
      body: [
        'This website is private by design: it sets no cookies, uses no analytics and loads no third-party resources. All fonts and assets are served from this site’s own server.',
        'Server log files: the hosting provider may automatically store technical access data (such as IP address, date and time, browser type) for security and operation. This data is not merged with other sources and is deleted according to the provider’s retention policy.',
        'Contact by email: if you write to us, your message and address are used solely to answer you. Data controller: Axel Braunschweiger.', // TODO-CONTENT
        'You have the right to access, correct and delete personal data concerning you (Art. 15–17 GDPR).',
      ],
    },
  },

  notFound: {
    title: 'This page moved or never existed.',
    body: 'The link may be out of date. Everything the studio does is one click away from the homepage.',
    link: 'Back to the homepage',
  },
};
