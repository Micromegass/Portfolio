import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio for relaunch & AI',
      description:
        'We modernise outdated business websites, build sites with a built-in AI assistant, and develop web apps with real backends. Launched in weeks.',
    },
    relaunch: {
      title: 'Website relaunch & modernisation | RENOVO',
      description:
        'Your website looks and loads like it was built years ago. We rebuild it on current standards — fast, mobile-first and multilingual, usually in 3–5 weeks.',
    },
    ai: {
      title: 'Websites with a built-in AI assistant | RENOVO',
      description:
        'We build websites that ship with a chat assistant trained on your own content, answering customer questions about services, prices and hours.',
    },
    apps: {
      title: 'Web apps with real backends | RENOVO',
      description:
        'Booking systems, customer portals, dashboards and MVPs. Full-stack web applications with database, API and authentication — production software, not prototypes.',
    },
    work: {
      title: 'Work — websites and web apps we have built | RENOVO',
      description:
        'Selected projects: a physiotherapy practice website, a hospitality brand and booking site, plus the client work and studio products we are building right now.',
    },
    'case-physio': {
      title: 'Case study: website for a physiotherapy practice | RENOVO',
      description:
        'Website design and development for a physiotherapy practice in Fürth, Germany — every treatment and therapist explained in plain language, mobile-first.',
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
    check: {
      title: 'Free website check — speed, SEO & accessibility | RENOVO',
      description:
        'Test your website free: speed, accessibility, technical quality and search readiness, measured by Google PageSpeed Insights and explained plainly.',
    },
    imprint: {
      title: 'Imprint — legal notice | RENOVO AI Web Studio',
      description:
        'Legal notice for RENOVO AI Web Studio under § 5 DDG: service provider, contact details, VAT information and responsibility for editorial content.' },
    privacy: {
      title: 'Privacy policy — no cookies, no tracking | RENOVO',
      description: 'How RENOVO handles data: no cookies, no analytics, self-hosted fonts, and exactly what the website check and the chat assistant transmit. Your GDPR rights.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Relaunch' },
      { page: 'ai', label: 'AI assistant' },
      { page: 'apps', label: 'Web apps' },
      { page: 'work', label: 'Work' },
      { page: 'about', label: 'Studio' },
      { page: 'check', label: 'Free check' },
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
    locations: 'Fürth · Nürnberg metro area, Germany ↔ Medellín, Colombia',
    legalImprint: 'Imprint',
    legalPrivacy: 'Privacy',
    colophon: 'Built by hand with an AI-first workflow. No trackers, no cookies.',
  },

  whatsapp: {
    label: 'WhatsApp',
    aria: 'Write to us on WhatsApp',
    prefill: 'Hello RENOVO — I have a question about my website.',
  },

  home: {
    eyebrow: 'Website relaunch · AI assistants · Web apps',
    headline: ['Your website,', 'rebuilt for the', 'AI era.'],
    sub: 'We modernise outdated business websites, build sites with an AI assistant that answers your customers around the clock, and develop web apps with real backends — in weeks, not quarters.',
    ctaPrimary: 'Get a free website review',
    ctaSecondary: 'See the work',
    checkNote: 'Free, no sign-up. Google’s own measurements in about 30 seconds.',
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
      intro: 'Websites that real businesses rely on every day.',
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
      lead: 'Most business websites were built years ago, by someone who has since moved on. They load slowly, break on phones, and quietly send customers to competitors. We rebuild them from the ground up — for practices, trades, law firms and shops in Fürth, Nürnberg and the wider region, and remotely for clients anywhere.',
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
      'Two live businesses whose digital presence we designed and built — plus what the studio is working on right now.',
    visitLabel: 'Visit live site',
    readLabel: 'Read case study',
    buildsEyebrow: 'Current builds',
    buildsTitle: 'What the studio is building right now',
    buildsIntro:
      'Client projects in flight and the products we develop in-house. Ask us about any of them.',
    newTab: 'opens in a new tab',
    builds: [
      {
        key: 'davidleutert',
        client: 'David Leutert',
        sector: 'Illustration & lettering · Berlin',
        desc: 'A bilingual portfolio and archive for a Berlin illustrator and lettering artist: close to 190 pages of commissioned and personal work, with a hero that replays his actual drawing process — pencil sketch, ink, flat colour, finished print.',
        status: 'With the client for review',
        imageAlt: 'Home page of the David Leutert portfolio, showing a bold hand-lettered print',
      },
      {
        key: 'fritzloesel',
        client: 'Fritz Lösel',
        sector: 'Therapy practice · Fürth',
        desc: 'A full relaunch for a practice for systemic and sexual therapy: calm, clear, German and English. No cookies, no trackers and no external requests at all — so the site needs no cookie banner.',
        status: 'Ready to launch',
        preview: { url: 'https://micromegass.github.io/fritzloesel/', label: 'See the preview' },
        imageAlt: 'Home page of the Fritz Lösel therapy practice website',
      },
      {
        key: 'yosoytattoo',
        client: 'Yo Soy Tattoo Medellín',
        sector: 'Tattoo studio & academy · Medellín',
        desc: 'A Spanish-first website with an English mirror for a tattoo studio and academy — including a built-in AI assistant that answers questions about courses, services and location, and hands over to WhatsApp instead of guessing.',
        status: 'Ready to launch',
        imageAlt: 'Home page of the Yo Soy Tattoo website with the chat assistant button in the corner',
      },
      {
        key: 'trazo',
        client: 'Trazo',
        sector: 'Studio product · in-house',
        desc: 'Pricing software for professional tattoo artists. It turns hours, materials and complexity into a defensible price range, shows exactly how it got there, and exports a branded quote. Three languages, three currencies.',
        status: 'In development',
        imageAlt: 'A Trazo price quote showing how a tattoo was assessed and priced',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Healthcare · Germany',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      imageAlt: 'Treatment room at the physiotherapy practice in Fürth',
      cardTitle: 'A practice that explains itself clearly',
      cardDesc:
        'Website and digital presence for a physiotherapy and occupational therapy practice in Fürth — every treatment and every therapist, in plain language.',
      metrics: [
        { value: 'Website', label: 'design & build' },
        { value: 'Mobile-first', label: 'built for phones' },
      ],
      title: 'A practice that explains itself clearly',
      summary:
        'A physiotherapy and occupational therapy practice at Fürth central station needed more than a business card on the web. We designed and built the website: the full treatment range explained in plain language, the team introduced personally, and everything easy to find on a phone.',
      specs: [
        { label: 'Sector', value: 'Healthcare · Germany' },
        { label: 'Scope', value: 'Website design & development' },
        { label: 'Languages', value: 'German' },
        { label: 'Status', value: 'Live' },
      ],
      sections: [
        {
          heading: 'What problem was the practice trying to solve?',
          body: 'Patients looking for a therapy practice want three things fast: what do you treat, who treats it, and how do I reach you. Most practice websites bury all three. The site had to answer them immediately, in language a patient actually uses rather than clinical shorthand.',
        },
        {
          heading: 'What did RENOVO build for the practice?',
          body: 'A fast, warm, mobile-first website covering the full range of physiotherapy and occupational therapy services, with the team introduced personally and contact details always within reach. Most patients arrive on a phone, so the layout, tap targets and loading behaviour were designed for that first.',
        },
        {
          heading: 'Why does it work?',
          body: 'Every decision came from the practice side rather than the design side: which treatments to feature, how to phrase questions about insurance and prescriptions, what a new patient needs to know before getting in touch. The site is structured so the practice can add treatments and team members later without calling a developer.',
        },
      ],
      outcomeLabel: 'What the website does',
      outcomes: [
        'Explains every treatment in language patients understand',
        'Introduces the full team and each specialty clearly',
        'Works properly on the phones most patients arrive on',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitality · Colombia',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      imageAlt: 'The Ikuna Glamping wordmark on the home page we built, over a dark textured background',
      cardTitle: 'A mountain refuge with a digital front door',
      cardDesc:
        'Brand and image-led booking site for a glamping refuge in Antioquia — fast enough for rural mobile, atmospheric enough to sell the feeling.',
      metrics: [
        { value: 'Brand + Web', label: 'our scope' },
        { value: 'Spanish', label: 'built for its market' },
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
          heading: 'What problem was the refuge trying to solve?',
          body: 'Glamping sells a feeling. A slow, cluttered website kills that feeling before a guest has seen the mountains. The site had to be atmospheric, fast on the rural mobile connections guests actually use, and unmistakably local rather than a generic booking template.',
        },
        {
          heading: 'What did RENOVO build for Ikuna?',
          body: 'An image-led, Spanish-first website built for performance: the story of the place first, practical details second, and booking never more than a tap away. Every photograph, word and section serves the same calm mood as the refuge itself.',
        },
        {
          heading: 'Why does it work?',
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
    includeTitle: 'What to put in your first email',
    include: [
      'Your current website address, if you have one',
      'What your business does, in a sentence or two',
      'What is bothering you about the site today',
      'Roughly when you would like to launch',
      'Whether you need more than one language',
    ],
    nextTitle: 'What happens next',
    next: [
      {
        title: 'You get a reply, usually within one working day',
        body: 'From the person who would build the project, not a sales inbox. If we are not the right fit, we say so early and point you somewhere better.',
      },
      {
        title: 'A short call if it makes sense',
        body: 'Thirty minutes to understand the business behind the website. No presentation, no pressure, and no charge.',
      },
      {
        title: 'A written proposal with a fixed price',
        body: 'Scope, price and launch date in plain language, so you can decide with everything in front of you.',
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Let’s find out what your website could be doing for you.',
    body: 'A relaunch, an AI assistant, a web app — or just an honest second opinion. The first conversation is free and refreshingly jargon-free.',
    button: 'Start a project',
  },

  check: {
    eyebrow: 'Free website check',
    title: 'How healthy is your website, really?',
    lead: 'Enter your address and get Google’s own measurements in about half a minute: loading speed, accessibility, technical quality and search readiness — with the biggest problems named in plain language.',
    inputLabel: 'Your website address',
    placeholder: 'your-company.com',
    submit: 'Run the check',
    running: 'Analysing…',
    runningNote: 'Google is loading your site on a simulated mobile device. This usually takes 20–40 seconds.',
    privacyNote:
      'The address you enter is sent to the Google PageSpeed Insights API to run the analysis. We do not store it.',
    privacyLink: 'How we handle your data',
    scoresLabel: 'Scores',
    categories: {
      performance: 'Speed',
      accessibility: 'Accessibility',
      bestPractices: 'Best practices',
      seo: 'Search readiness',
    },
    vitalsLabel: 'What visitors experience',
    vitals: {
      lcp: 'Largest content visible',
      cls: 'Layout stability',
      tbt: 'Blocked interaction time',
      si: 'Visually complete',
    },
    opportunitiesLabel: 'Biggest opportunities',
    opportunitiesNone: 'No major technical issues found — a good starting point.',
    savingsLabel: 'potential saving',
    scale: { good: 'Good', ok: 'Needs work', poor: 'Poor' },
    errors: {
      invalid: 'That does not look like a valid website address. Try something like your-company.com.',
      failed: 'The check could not be completed. Please try again in a moment.',
      quota: 'The free analysis quota is exhausted right now. Please try again later, or email us and we will run it for you.',
      unreachable:
        'Google could not load that address. Check the spelling, and make sure the site is publicly reachable.',
    },
    resultFor: 'Results for',
    explainTitle: 'What the four scores actually mean',
    explain: [
      {
        term: 'Speed',
        body: 'How quickly the page becomes usable on a mid-range phone over a normal mobile connection. Below 50 means visitors are waiting long enough that a measurable share of them leave before the page appears. Google has used page experience as a ranking signal since 2021, so slow pages lose twice: fewer visitors stay, and fewer arrive in the first place.',
      },
      {
        term: 'Accessibility',
        body: 'Whether people using a screen reader, keyboard or high zoom can actually use the site. Common failures are images without alternative text, form fields without labels, and text with too little contrast. In Germany this is increasingly a legal question too, not only a courtesy: the Barrierefreiheitsstärkungsgesetz extends accessibility duties to many private businesses from June 2025.',
      },
      {
        term: 'Best practices',
        body: 'Technical hygiene: a valid HTTPS certificate, no console errors, correctly sized images, no deprecated APIs. A low score here rarely costs rankings on its own, but it is a reliable sign that a site has not been maintained for a while.',
      },
      {
        term: 'Search readiness',
        body: 'Whether a search engine can crawl the page, understand what it is about, and show it properly: title, meta description, indexability, working links and readable font sizes. It checks that the basics are present — not whether your content deserves to rank, which is the part a human has to judge.',
      },
    ],
    afterTitle: 'Numbers are only half the story.',
    afterBody:
      'A score does not tell you whether your website explains your business well, whether the right people find it, or whether it turns visitors into customers. Send us the address and we will look at it properly — for free, in plain language.',
    afterButton: 'Get the human review',
    disclaimer:
      'Measured by Google PageSpeed Insights on a simulated mid-range mobile device. Results vary between runs.',
  },

  chat: {
    launch: 'Ask the studio',
    launchAria: 'Open the studio assistant',
    title: 'Studio assistant',
    subtitle: 'The same kind of assistant we build into client sites.',
    intro:
      'Hello — I answer questions about what the studio builds, how a project runs and what we have shipped. Ask away, or write to Axel directly for anything about your own project.',
    suggestionsLabel: 'Try one of these',
    suggestions: [
      'What would a relaunch of my site involve?',
      'How does the built-in AI assistant work?',
      'How long does a project usually take?',
    ],
    inputLabel: 'Your question',
    placeholder: 'Ask a question…',
    send: 'Send',
    close: 'Close the assistant',
    thinking: 'Thinking…',
    replyReady: 'The assistant has replied.',
    privacyNote: 'Your messages go to Anthropic in the US to generate the reply.',
    privacyLink: 'What that means',
    disclaimer: 'The assistant can get things wrong. Nothing here is binding.',
    errors: {
      failed: 'Something went wrong on our side. Please try again, or write to us by email.',
      busy: 'The assistant is busy right now. Please try again in a moment.',
      rateLimited: 'That is a lot of questions for one hour. Please write to us by email instead.',
      tooLong: 'This conversation has grown long. Please start a new one, or write to us by email.',
      offline: 'The assistant is not reachable. Please write to us by email.',
    },
  },

  legal: {
    imprint: {
      title: 'Imprint',
      intro: 'Legal information according to § 5 DDG (German Digital Services Act).',
      sections: [
        {
          heading: 'Service provider',
          body: [
            'RENOVO — AI Web Studio', // TODO-CONTENT: registered business name if different
            'Owner: Axel Braunschweiger', // TODO-CONTENT: full street address, postal code and city — legally required
            '[Street and number]',
            '[Postcode] Fürth, Germany',
          ],
        },
        {
          heading: 'Contact',
          body: [
            'Email: axelbraunschweiger@gmail.com', // TODO-CONTENT: business email + telephone number
            'Telephone: [required — a phone number or an equally direct channel must be given]',
          ],
        },
        {
          heading: 'VAT',
          body: [
            'VAT identification number according to § 27a UStG: [VAT ID]', // TODO-CONTENT
            'If the small-business rule under § 19 UStG applies, no VAT is shown on invoices and this line should say so instead.',
          ],
        },
        {
          heading: 'Responsible for editorial content',
          body: ['Axel Braunschweiger, address as above (§ 18 para. 2 MStV).'],
        },
        {
          heading: 'Online dispute resolution and consumer arbitration',
          body: [
            'The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr',
            'We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board (§ 36 VSBG).',
          ],
        },
        {
          heading: 'Liability for content',
          body: [
            'As a service provider we are responsible for our own content on these pages under § 7 para. 1 DDG and general law. Under §§ 8 to 10 DDG we are not obliged to monitor transmitted or stored third-party information, or to investigate circumstances indicating unlawful activity.',
            'Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point in time at which a specific infringement becomes known. If we become aware of such infringements, we will remove the content immediately.',
          ],
        },
        {
          heading: 'Liability for links',
          body: [
            'Our website contains links to external websites over whose content we have no influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.',
            'The linked pages were checked for possible legal violations at the time of linking; unlawful content was not identifiable. Permanent monitoring of linked pages is not reasonable without concrete evidence of an infringement. If we become aware of legal violations, we will remove such links immediately.',
          ],
        },
        {
          heading: 'Copyright',
          body: [
            'The content and works created by us on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright require our written consent.',
            'Project images are published with the permission of the businesses concerned and remain their property.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      intro:
        'This website is built to collect as little data as possible. It sets no cookies, runs no analytics or tracking, and loads no fonts or scripts from third-party servers. There are two exceptions, both described in detail below: the website check tool and the chat assistant. Neither sends anything anywhere until you actively start it.',
      updated: 'Last updated: July 2026',
      sections: [
        {
          heading: '1. Controller',
          body: [
            'Axel Braunschweiger, RENOVO — AI Web Studio, [address as in the imprint], Germany.', // TODO-CONTENT
            'Email: axelbraunschweiger@gmail.com',
            'No data protection officer has been appointed; there is no legal obligation to do so in this case.',
          ],
        },
        {
          heading: '2. Hosting and server log files',
          body: [
            'This website is hosted by [hosting provider, address].', // TODO-CONTENT: name the host; a processing agreement (Art. 28 GDPR) is required
            'When you visit the site, the hosting provider automatically records technical access data in server log files: your IP address, the date and time of the request, the page requested, the referring page, and information about your browser and operating system.',
            'Purpose and legal basis: this processing is necessary to deliver the website reliably and to detect and defend against attacks. The legal basis is our legitimate interest in the secure and stable operation of the site, Art. 6 para. 1 lit. f GDPR.',
            'Retention: log data is deleted according to the hosting provider’s retention schedule, as a rule after no more than 30 days. It is not merged with other data sources and is not used to identify you personally.',
          ],
        },
        {
          heading: '3. Website check tool (Google PageSpeed Insights)',
          body: [
            'On our website check page you can enter the address of a website and have it analysed. The analysis is not performed by us: when you press the button, your browser sends the address you entered directly to the Google PageSpeed Insights API, operated by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.',
            'In doing so, your IP address and the technical details of your browser request are transmitted to Google and may be transferred to servers in the United States. Google may process this data according to its own privacy policy: https://policies.google.com/privacy',
            'Purpose and legal basis: the analysis is only carried out at your explicit request, so the legal basis is your consent under Art. 6 para. 1 lit. a GDPR, given by actively starting the check. You can withdraw your consent at any time with effect for the future simply by not using the tool. Without starting a check, no data is sent to Google.',
            'Third-country transfer: Google LLC is certified under the EU-US Data Privacy Framework, which the European Commission has recognised as providing an adequate level of protection (adequacy decision of 10 July 2023). Google additionally relies on the European Commission’s standard contractual clauses.',
            'We ourselves neither store nor evaluate the addresses you enter or the results of the analysis. Nothing is saved on our side.',
          ],
        },
        {
          heading: '4. Studio assistant (chat)',
          body: [
            'Our website offers a chat assistant that answers questions about the studio. It only starts when you actively open it; nothing is sent until you send a message.',
            'When you send a message, the message and the previous course of the conversation are transmitted to our own server function and from there to Anthropic PBC, 548 Market St, PMB 90375, San Francisco, CA 94104, USA, which generates the reply using the Claude language model. Your IP address is processed by our server function to prevent misuse; it is not passed on to Anthropic.',
            'Purpose and legal basis: the assistant only runs at your explicit request, so the legal basis is your consent under Art. 6 para. 1 lit. a GDPR, given by actively sending a message. You can withdraw your consent at any time with effect for the future simply by not using the assistant. In addition, we have a legitimate interest in the abuse prevention described above, Art. 6 para. 1 lit. f GDPR.',
            'Third-country transfer: Anthropic PBC is certified under the EU-US Data Privacy Framework, which the European Commission has recognised as providing an adequate level of protection (adequacy decision of 10 July 2023). A processing agreement under Art. 28 GDPR is in place with Anthropic.',
            'Retention: we do not store the conversation. It exists in your browser for as long as the chat window is open and is gone when you close or reload the page. Anthropic stores inputs and outputs for a limited period for abuse detection and does not use them to train its models. Our server function stores a counter per IP address for a maximum of 65 minutes, solely to enforce a rate limit.',
            'Please do not enter any special categories of personal data (for example health data) or other confidential information into the chat. For anything sensitive, please write to us by email.',
            'The assistant generates its answers automatically and can be wrong. Its replies are not legally binding and no decision with legal effect for you is made on the basis of the conversation.',
          ],
        },
        {
          heading: '5. Contact by email',
          body: [
            'If you write to us, the data you provide — your email address, your name where given, and the content of your message — is processed solely in order to deal with your enquiry.',
            'Legal basis: Art. 6 para. 1 lit. b GDPR where your message concerns the initiation or performance of a contract, otherwise our legitimate interest in answering enquiries addressed to us, Art. 6 para. 1 lit. f GDPR.',
            'Retention: enquiries are deleted once they have been dealt with conclusively and no statutory retention obligations, in particular under commercial and tax law, prevent deletion.',
            'Please note that email is not an encrypted means of transport by default. For confidential information, please ask us for an alternative channel.',
          ],
        },
        {
          heading: '6. Contact by WhatsApp',
          body: [
            'This site links to WhatsApp so you can reach us directly. The link only opens WhatsApp — merely loading our pages establishes no connection to WhatsApp or Meta, and we embed no WhatsApp widget or tracking pixel.',
            'If you choose to write to us there, the conversation is processed by WhatsApp Ireland Limited and, depending on the service configuration, by Meta Platforms, Inc. in the United States. We have no influence over that processing; WhatsApp receives your telephone number and the content of your messages, and metadata about the exchange. Meta’s own privacy information applies in addition to this policy.',
            'Legal basis: your consent, given by deliberately opening the chat and writing to us, Art. 6 para. 1 lit. a GDPR; where your message concerns the initiation or performance of a contract, also Art. 6 para. 1 lit. b GDPR.',
            'Third-country transfer: Meta Platforms, Inc. is certified under the EU-US Data Privacy Framework, which the European Commission has recognised as providing an adequate level of protection (adequacy decision of 10 July 2023).',
            'Retention: messages are deleted once your enquiry has been dealt with conclusively, unless statutory retention obligations prevent deletion. If you would rather not use WhatsApp, email reaches us just as well.',
          ],
        },
        {
          heading: '7. Fonts and other assets',
          body: [
            'All fonts, images, scripts and stylesheets are served from this website’s own server. In particular, no Google Fonts CDN, no content delivery network and no social media plugins are used. No connection to third-party servers is established when you simply browse the site.',
          ],
        },
        {
          heading: '8. Cookies, analytics and tracking',
          body: [
            'This website sets no cookies and uses no analytics, tracking, remarketing or profiling technologies. Your language preference and colour theme, if you change them, are stored locally in your browser and never transmitted to us.',
          ],
        },
        {
          heading: '9. Your rights',
          body: [
            'You have the right to obtain information about the personal data we process concerning you (Art. 15 GDPR), to have inaccurate data corrected (Art. 16), to have data erased (Art. 17), to have processing restricted (Art. 18), to receive your data in a portable format (Art. 20) and to withdraw consent you have given at any time with effect for the future (Art. 7 para. 3).',
            'Right to object: you have the right to object at any time, on grounds relating to your particular situation, to processing based on Art. 6 para. 1 lit. f GDPR (Art. 21 GDPR).',
            'To exercise any of these rights, an informal email to the address above is sufficient.',
          ],
        },
        {
          heading: '10. Right to lodge a complaint',
          body: [
            'You have the right to lodge a complaint with a data protection supervisory authority, in particular in the member state of your habitual residence, place of work or the place of the alleged infringement (Art. 77 GDPR).',
            'The authority responsible for us is the Bavarian State Office for Data Protection Supervision (Bayerisches Landesamt für Datenschutzaufsicht), Promenade 18, 91522 Ansbach, Germany.', // TODO-CONTENT: adjust if the business is registered outside Bavaria
          ],
        },
        {
          heading: '11. Changes to this policy',
          body: [
            'We update this privacy policy when changes to the website or to the law make it necessary. The version published here always applies.',
          ],
        },
      ],
    },
  },

  notFound: {
    title: 'This page moved or never existed.',
    body: 'The link may be out of date. Everything the studio does is one click away from the homepage.',
    link: 'Back to the homepage',
  },
};
