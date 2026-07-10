import type { SiteContent } from './types';

export const de: SiteContent = {
  meta: {
    home: {
      title: 'Axel Braunschweiger — Websites & Web-Apps, gebaut wie vom Inhaber',
      description:
        'Freiberuflicher Webentwickler und AI-Engineer in Fürth/Nürnberg. Ich baue Websites, Web-Apps und MVPs für Unternehmen — mit der Sorgfalt von jemandem, der selbst zwei Firmen gegründet hat.',
    },
    services: {
      title: 'Leistungen — Websites, Web-Apps, KI-Integration | Axel Braunschweiger',
      description:
        'Professionelle Websites, Redesigns, Full-Stack-Web-Apps, MVPs, KI-Integrationen und Automatisierung. Klarer Prozess, ehrliche Beratung, Produktionsqualität.',
    },
    work: {
      title: 'Projekte — Fallstudien & aktuelle Arbeiten | Axel Braunschweiger',
      description:
        'Echte Projekte mit echtem Einsatz: zwei gegründete Unternehmen und ihre Websites, Produktionsentwicklung bei heatbeat und ein Labor aktueller Prototypen.',
    },
    'case-physio': {
      title: 'Fallstudie: Physio & Ergo Fürth — Praxis-Website & Online-Buchung',
      description:
        'Wie ich den digitalen Auftritt meiner eigenen Physio- und Ergotherapiepraxis am Fürther Hauptbahnhof aufgebaut habe — von der Marke bis zur Terminbuchung.',
    },
    'case-ikuna': {
      title: 'Fallstudie: Ikuna Glamping — Hospitality-Marke & Website',
      description:
        'Marke und Website für Ikuna Glamping, ein Bergrefugium in San Vicente Ferrer, Antioquia — gestaltet und entwickelt vom Mitgründer.',
    },
    about: {
      title: 'Über mich — Lehrer, Gründer, AI-Engineer | Axel Braunschweiger',
      description:
        'Vom Dozenten an der Universidad EAFIT in Medellín über Produktionsentwicklung in Deutschland bis zur Gründung zweier Unternehmen. Der Weg hinter der Arbeit.',
    },
    contact: {
      title: 'Kontakt — Projekt starten | Axel Braunschweiger',
      description:
        'Erzählen Sie mir von Ihrer Website, Web-App oder Automatisierung. Ich antworte persönlich — auf Deutsch, Englisch oder Spanisch.',
    },
    imprint: {
      title: 'Impressum | Axel Braunschweiger',
      description: 'Impressum von axelbraunschweiger.com.',
    },
    privacy: {
      title: 'Datenschutzerklärung | Axel Braunschweiger',
      description: 'Datenschutzerklärung von axelbraunschweiger.com.',
    },
  },

  nav: {
    services: 'Leistungen',
    work: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
    menuLabel: 'Menü',
    homeAria: 'Axel Braunschweiger — Startseite',
  },

  footer: {
    role: 'AI-Engineer · Webentwickler',
    locations: 'Fürth, Deutschland ↔ Medellín, Kolumbien',
    languagesLabel: 'Sprachen',
    languages: 'DE · EN · ES',
    drawnBy: 'Gezeichnet von',
    sheetLabel: 'Blatt',
    revisionLabel: 'Rev.',
    contactLabel: 'Kontakt',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
    colophon:
      'Von Hand entworfen und gebaut — mit Claude als Entwicklungspartner. Keine Tracker, keine Cookies.',
  },

  home: {
    kicker: 'Axel Braunschweiger · AI-Engineer · Fürth ↔ Medellín',
    headline: ['Software, gebaut', 'wie vom Inhaber.'],
    sub: 'Ich entwerfe und entwickle Websites und Web-Apps für Unternehmen — mit der Sorgfalt von jemandem, der selbst zwei Firmen gegründet hat. Solides Engineering, ein AI-first-Workflow und kein Fachchinesisch unterwegs.',
    dims: [
      { value: '02', label: 'gegründete Unternehmen' },
      { value: '03', label: 'Arbeitssprachen' },
      { value: '02', label: 'Heimatkontinente' },
    ],
    cta: { primary: 'Projekt starten', secondary: 'Arbeiten ansehen' },
    scale: {
      kicker: 'Micromegas — eine Notiz über Maßstäbe',
      title: 'Ich arbeite in jedem Maßstab.',
      outro:
        'Benannt nach Voltaires Micromégas — einer Geschichte darüber, dieselbe Welt aus sehr unterschiedlichen Entfernungen zu sehen. Gute Software braucht genau das: Sorgfalt bei 1:1, Urteilsvermögen bei 1:1000.',
      frames: [
        {
          scale: '1:1',
          title: 'Eine Zeile Code',
          body: 'Auf diesem Maßstab ruht alles. Lesbarer, getesteter, ehrlicher Code — die Gewohnheiten aus Jahren Produktionsentwicklung.',
        },
        {
          scale: '1:10',
          title: 'Eine Oberfläche',
          body: 'Interfaces, die Menschen wirklich verstehen. Als ehemaliger Lehrer gestalte ich Oberflächen so, wie ich Ideen erklärt habe: klar.',
        },
        {
          scale: '1:100',
          title: 'Ein Produkt',
          body: 'Architektur, Performance, Deployment — die unglamourösen Entscheidungen, die darüber entscheiden, ob Software den Kontakt mit der Realität übersteht.',
        },
        {
          scale: '1:1000',
          title: 'Ein Unternehmen',
          body: 'Ich habe zwei Firmen gegründet und ihren digitalen Auftritt gebaut. Ich weiß, was Software kostet, was sie einbringt — und wann sie sich lohnt.',
        },
      ],
    },
    services: {
      kicker: 'Leistungen',
      title: 'Was ich baue',
      items: [
        {
          title: 'Websites & Redesigns',
          desc: 'Schnelle, präzise, suchmaschinenfreundliche Websites, die ein Unternehmen so zeigen, wie es das verdient.',
        },
        {
          title: 'Web-Apps & MVPs',
          desc: 'Full-Stack-Produkte für Gründer — ehrlich kalkuliert, produktionsreif ausgeliefert.',
        },
        {
          title: 'KI & Automatisierung',
          desc: 'KI-Integrationen, interne Tools und Workflows, die still und leise Stunden Handarbeit abschaffen.',
        },
      ],
      link: 'Alle Leistungen',
    },
    work: {
      kicker: 'Ausgewählte Arbeiten',
      title: 'Belege statt Versprechen',
      link: 'Alle Projekte',
    },
    story: {
      kicker: 'Über mich',
      title: 'Lehrer. Gründer. Entwickler.',
      body: 'Ich habe an einer Universität in Medellín gelehrt, wurde Entwickler in Deutschland, gründete zwei Unternehmen — und baue heute Software mit KI als täglichem Partner. Der rote Faden: komplizierte Dinge verständlich machen.',
      link: 'Die ganze Geschichte',
    },
    testimonial: {
      kicker: 'Zusammenarbeit',
      quote: '', // TODO-CONTENT: Testimonial folgt
      attribution: '',
    },
  },

  services: {
    kicker: 'Leistungen',
    title: 'Klarer Umfang. Ehrliche Beratung. Produktionsqualität.',
    intro:
      'Jedes Projekt beginnt mit einem Gespräch darüber, was Ihr Unternehmen wirklich braucht — manchmal ist das weniger Software, als Sie dachten. Das baue ich, und so arbeite ich.',
    items: [
      {
        id: 'websites',
        title: 'Websites & Redesigns',
        desc: 'Eine Website ist Ihr geduldigster Mitarbeiter — sie sollte schnell, präzise und überzeugend sein. Ich entwerfe und baue Websites, die sofort laden, gut ranken und in jeder Sprache Ihrer Kunden klar lesbar sind. Ich übernehme auch bestehende Websites, die unübersichtlich geworden sind, und stelle sie auf ein solides Fundament.',
        deliverables: [
          'Design & Entwicklung aus einer Hand',
          'Exzellente Core Web Vitals & SEO',
          'Mehrsprachig (DE / EN / ES)',
          'Barrierearm & DSGVO-bewusst',
        ],
      },
      {
        id: 'apps',
        title: 'Web-Apps & MVPs',
        desc: 'Für Gründer und Teams, die echte Software brauchen: Buchungssysteme, Kundenportale, Dashboards, Produkte. Ich kalkuliere ehrlich, entwickle mit Produktionsdisziplin und liefere etwas, das Sie Nutzern zeigen können — kein Demo, das später neu geschrieben wird.',
        deliverables: [
          'Full-Stack-Entwicklung',
          'Ehrliche Kalkulation & feste Meilensteine',
          'Produktionsreif vom ersten Tag',
          'Dokumentation & Übergabe',
        ],
      },
      {
        id: 'ai',
        title: 'KI-Integration & Automatisierung',
        desc: 'Die wertvollsten KI-Projekte sind selten Chatbots. Ich finde die repetitive Arbeit in Ihrem Unternehmen — Dokumente, E-Mails, Datenerfassung, Reporting — und baue KI-Workflows und interne Tools, die sie abschaffen. Diese Systeme nutze ich täglich in meinen eigenen Firmen.',
        deliverables: [
          'KI-Workflows & Integrationen',
          'Interne Tools & Dashboards',
          'Prozessautomatisierung',
          'Praktischer, messbarer Nutzen',
        ],
      },
      {
        id: 'consulting',
        title: 'Beratung & Refactoring',
        desc: 'Ein zweites Paar erfahrener Augen: eine bestehende Codebasis prüfen, ein festgefahrenes Projekt entwirren oder klären, wie KI wirklich in Ihren Entwicklungsprozess passt. Direkt, verständlich, umsetzbar.',
        deliverables: ['Code-Reviews & Refactoring', 'Technische Strategie', 'AI-first-Workflow-Beratung'],
      },
    ],
    deliverablesLabel: 'Enthalten',
    process: {
      kicker: 'Der Prozess',
      title: 'So läuft die Zusammenarbeit',
      intro: 'Keine Agentur, keine Übergaben, keine Überraschungen. Sie sprechen mit der Person, die es baut.',
      steps: [
        {
          title: 'Gespräch',
          body: 'Wir sprechen zuerst über Ihr Unternehmen, dann über Software. Kostenlos, direkt, auf Deutsch, Englisch oder Spanisch.',
        },
        {
          title: 'Angebot',
          body: 'Sie erhalten einen schriftlichen Umfang in Klartext: was gebaut wird, was es kostet, wann es fertig ist.',
        },
        {
          title: 'Umsetzung',
          body: 'Kurze Zyklen, sichtbarer Fortschritt. Sie sehen das echte Produkt früh und oft — nie eine Überraschung am Ende.',
        },
        {
          title: 'Übergabe',
          body: 'Deployt, dokumentiert, erklärt. Alles gehört Ihnen — und Sie verstehen, was Ihnen gehört.',
        },
      ],
    },
  },

  work: {
    kicker: 'Projekte',
    title: 'Echte Projekte, echter Einsatz',
    intro:
      'Der stärkste Beleg, den ich anbieten kann: Ich habe zwei Unternehmen gegründet und ihren digitalen Auftritt selbst gebaut. Wenn ich für Sie baue, baue ich mit derselben Verantwortung.',
    caseLabel: 'Fallstudie',
    visitLabel: 'Live-Website besuchen',
    readLabel: 'Fallstudie lesen',
    employment: {
      kicker: 'Engineering-Hintergrund',
      title: 'heatbeat engineering GmbH',
      body: 'Vor meiner Selbstständigkeit arbeitete ich als Full-Stack-Entwickler bei heatbeat engineering in Deutschland — verantwortlich für den gesamten Entwicklungszyklus: Backend-Architektur, APIs, Datenvisualisierung, Frontend, Deployment. Diese Produktionsdisziplin ist das Fundament, auf dem alles andere steht.',
      stack: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker', 'D3.js', 'REST APIs', 'DevOps'],
      stackLabel: 'Stack',
    },
    lab: {
      kicker: 'Aktuell im Bau',
      title: 'Das Labor',
      intro:
        'Funktionierende Prototypen, an denen ich gerade baue — AI-first, von der Idee zur nutzbaren Software in Wochen. Fragen Sie mich gern danach.',
      statusLabel: 'Status',
      items: [
        {
          title: 'Reminder App',
          desc: 'Ein ruhiges, meinungsstarkes Erinnerungs-Tool, das Aufmerksamkeit als knappes Gut behandelt.', // TODO-CONTENT
          status: 'Funktionierender Prototyp',
        },
        {
          title: 'Tattoo-Preisrechner',
          desc: 'Sofortige, transparente Preisschätzungen für Tattoo-Studios und ihre Kundschaft.', // TODO-CONTENT
          status: 'Funktionierender Prototyp',
        },
        {
          title: 'Flugsuche-Tool',
          desc: 'Eine fokussierte Flugsuche für Strecken, die die großen Plattformen schlecht abdecken.', // TODO-CONTENT
          status: 'Funktionierender Prototyp',
        },
        {
          title: 'Medellín-Reiseführer',
          desc: 'Ein Guide für Medellín von jemandem, der wirklich dort lebt.', // TODO-CONTENT
          status: 'Funktionierender Prototyp',
        },
      ],
    },
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      role: 'Gründer · Design · Entwicklung',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      title: 'Eine Praxis, die ihren eigenen Kalender füllt',
      summary:
        'Ich habe eine Physio- und Ergotherapiepraxis am Fürther Hauptbahnhof gegründet — und ihren digitalen Auftritt gebaut: Marke, Website und Online-Buchung. Wenn die Website die Eingangstür der eigenen Firma ist, lernt man, was wirklich konvertiert.',
      specs: [
        { label: 'Branche', value: 'Gesundheitswesen · Deutschland' },
        { label: 'Rolle', value: 'Gründer, Designer, Entwickler' },
        { label: 'Umfang', value: 'Marke · Website · Online-Buchung' },
        { label: 'Status', value: 'Live & in Betrieb' },
      ],
      sections: [
        {
          heading: 'Das Problem',
          body: 'Deutsche Therapiepraxen laufen über Telefonate und Wartelisten. Patienten wollen drei Dinge schnell wissen: Was behandelt ihr, wer behandelt es, und wann komme ich dran? Die meisten Praxis-Websites beantworten keine davon.',
        },
        {
          heading: 'Die Umsetzung',
          body: 'Eine schnelle, warme, mobile-first Website mit dem gesamten Physio- und Ergo-Angebot klar erklärt, dem Team persönlich vorgestellt und der Online-Buchung im Mittelpunkt — Termine entstehen ohne einen einzigen Anruf, und die Praxis kann kurze Wartezeiten versprechen.',
        },
        {
          heading: 'Die Inhaber-Perspektive',
          body: 'Weil es meine eigene Firma ist, war jede Entscheidung eine Geschäftsentscheidung: welche Behandlungen im Fokus stehen, wie Versicherungsfragen formuliert werden, wo Buchungsreibung einen Patienten kostet. Diese Perspektive fließt heute in jedes Kundenprojekt.',
        },
      ],
      outcomeKicker: 'Was es dem Unternehmen bringt',
      outcomes: [
        'Termine werden rund um die Uhr online gebucht — ohne Telefon-Pingpong',
        'Die Praxis zeigt ihr ganzes Team und jede Spezialisierung klar',
        'Auf dieser Website läuft jeden Tag ein echtes Unternehmen',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      role: 'Mitgründer · Marke · Design · Entwicklung',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      title: 'Ein Bergrefugium mit digitaler Eingangstür',
      summary:
        'Ikuna ist ein Glamping-Refugium in den Bergen von San Vicente Ferrer, Antioquia — eine Stunde von Medellín. Als Mitgründer habe ich Marke und Website gebaut: ein ruhiges, bildstarkes Erlebnis auf Spanisch, das Fernweh in Buchungen verwandelt.',
      specs: [
        { label: 'Branche', value: 'Hospitality · Kolumbien' },
        { label: 'Rolle', value: 'Mitgründer, Marke, Entwickler' },
        { label: 'Umfang', value: 'Marke · Website · Buchungsstrecke' },
        { label: 'Status', value: 'Live & in Betrieb' },
      ],
      sections: [
        {
          heading: 'Das Problem',
          body: 'Glamping verkauft ein Gefühl. Eine langsame, überladene Website zerstört dieses Gefühl, bevor ein Gast die Berge je gesehen hat. Die Website musste atmosphärisch sein, schnell auf ländlichen Mobilverbindungen — und unverkennbar lokal.',
        },
        {
          heading: 'Die Umsetzung',
          body: 'Eine bildstarke, spanischsprachige Website, gebaut für Performance: zuerst die Geschichte des Ortes („conecta con lo esencial"), dann die praktischen Details, die Buchung immer einen Fingertipp entfernt. Jedes Foto, jedes Wort dient derselben ruhigen Stimmung wie das Refugium selbst.',
        },
        {
          heading: 'Die Inhaber-Perspektive',
          body: 'Hospitality hat mich Konversionsehrlichkeit gelehrt: Niemand bucht wegen einer Feature-Liste. Gebucht wird, weil die Seite den Ort fühlbar gemacht hat. Diese Lektion trage ich in jede Marketing-Website, die ich baue.',
        },
      ],
      outcomeKicker: 'Was es dem Unternehmen bringt',
      outcomes: [
        'Gäste kommen bereits überzeugt bei der Buchung an',
        'Läuft schnell auf den Mobilverbindungen, die Gäste wirklich haben',
        'Die Marke — vom Namen bis zur Typografie — entstand mit der Website',
      ],
    },
  },

  caseMeta: {
    kicker: 'Fallstudie',
    specLabel: 'Spezifikation',
    backLabel: 'Alle Projekte',
    nextLabel: 'Nächste Fallstudie',
  },

  about: {
    kicker: 'Über mich',
    title: 'Komplizierte Dinge verständlich machen',
    intro:
      'Dieser Satz war dreimal meine Berufsbeschreibung: als Lehrer, als Gründer und jetzt als Entwickler. Nur das Material hat sich geändert.',
    portraitAlt: 'Porträt von Axel Braunschweiger',
    chapters: [
      {
        period: 'Das Fundament',
        title: 'Lehrer für Englisch, Wirtschaft & Philosophie',
        body: 'Ich habe Englisch, Wirtschaft und Philosophie studiert und wurde Lehrer. Vor einem Raum zu stehen lehrt einen etwas, das kein Bootcamp vermitteln kann: etwas Komplexes so zu vermitteln, dass es ankommt. Diese Fähigkeit nutze ich bis heute jeden Tag — in Code-Reviews, in Angeboten, beim Erklären von KI für skeptische Unternehmer.',
      },
      {
        period: 'Medellín',
        title: 'Universidad EAFIT, Kolumbien',
        body: 'Ich zog nach Kolumbien und lehrte zwei Jahre an der Universidad EAFIT in Medellín. Irgendwo zwischen den Vorlesungen begann ich zu programmieren — und merkte, dass ich nicht mehr aufhören wollte. Ich absolvierte das Bootcamp bei Make it Real: zwölf intensive Wochen Ruby, Rails, JavaScript und echte Projekte.',
      },
      {
        period: 'Deutschland',
        title: 'Full-Stack-Entwickler bei heatbeat engineering',
        body: 'Zurück in Deutschland kam ich als Full-Stack-Entwickler zu heatbeat engineering: Python, Django, PostgreSQL, React, Docker. Ich verantwortete Features durch den ganzen Zyklus — Architektur, APIs, Datenvisualisierung, Deployment. Produktionssoftware, Produktionsverantwortung.',
      },
      {
        period: 'Gründung',
        title: 'Zwei eigene Unternehmen',
        body: 'Ich gründete eine Physio- und Ergotherapiepraxis in Fürth und war Mitgründer von Ikuna Glamping in den kolumbianischen Bergen — und baute für beide den digitalen Auftritt. Unternehmen zu führen hat verändert, wie ich Software baue: Ich denke heute in Umsatz, Abläufen und Kundenvertrauen, nicht nur in Features.',
      },
      {
        period: 'Heute',
        title: 'AI-first Engineer',
        body: 'Heute baue ich mit Claude als täglichem Entwicklungspartner. Nicht als Abkürzung — als Multiplikator auf soliden Engineering-Grundlagen. Es hat verändert, was eine Person liefern kann: Produktions-Websites, Web-Apps und Automatisierungen in Wochen, auf einem Qualitätsniveau, unter das ich meinen Namen setze. Dieses Portfolio ist genau so gebaut.',
      },
    ],
    now: {
      kicker: 'Heute',
      title: 'Zwischen Fürth und Medellín',
      body: 'Ich teile meine Zeit zwischen Deutschland und Kolumbien und arbeite mit Kunden in beiden Welten — auf Deutsch, Englisch oder Spanisch. Wo immer Sie sind: Sie sprechen direkt mit der Person, die Ihre Software entwirft, baut und ausliefert.',
    },
    facts: [
      { label: 'Basis', value: 'Fürth (DE) ↔ Medellín (CO)' },
      { label: 'Sprachen', value: 'Deutsch · Englisch · Spanisch' },
      { label: 'Fokus', value: 'Websites · Web-Apps · KI-Workflows' },
      { label: 'Arbeitsweise', value: 'AI-first, engineering-fundiert' },
    ],
  },

  contact: {
    kicker: 'Kontakt',
    title: 'Erzählen Sie mir von Ihrem Projekt',
    body: 'Eine ehrliche E-Mail genügt: was Ihr Unternehmen macht, was Sie brauchen und wo es heute hakt. Ich lese alles selbst und antworte persönlich — meist innerhalb eines Werktags.',
    emailLabel: 'Schreiben Sie an',
    email: 'axelbraunschweiger@gmail.com', // TODO-CONTENT: später auf Domain-Adresse umstellen
    availability: 'Aktuell offen für Projekte',
    languagesNote: 'Auf Deutsch, Englisch oder Spanisch — was für Sie am einfachsten ist.',
  },

  cta: {
    kicker: 'Nächster Schritt',
    title: 'Bauen wir etwas, das sich bezahlt macht.',
    body: 'Eine Website, eine Web-App, eine Automatisierung — oder erst mal eine zweite Meinung. Das erste Gespräch ist kostenlos und erfrischend frei von Fachchinesisch.',
    button: 'Projekt starten',
  },

  legal: {
    imprint: {
      title: 'Impressum',
      body: [
        'Angaben gemäß § 5 TMG.',
        'Axel Braunschweiger', // TODO-CONTENT: vollständige Impressumsdaten (Anschrift, ggf. USt-IdNr.)
        'Kontakt: axelbraunschweiger@gmail.com',
        'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      body: [
        'Diese Website ist bewusst datensparsam gestaltet: Sie setzt keine Cookies, nutzt keine Analyse-Tools und lädt keine Ressourcen von Drittanbietern. Alle Schriften und Assets werden vom eigenen Server ausgeliefert.',
        'Server-Logfiles: Der Hosting-Anbieter kann technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp) automatisch zu Sicherheits- und Betriebszwecken speichern. Diese Daten werden nicht mit anderen Quellen zusammengeführt und nach den Aufbewahrungsrichtlinien des Anbieters gelöscht.',
        'Kontakt per E-Mail: Wenn Sie mir schreiben, werden Ihre Nachricht und Adresse ausschließlich zur Beantwortung verwendet. Verantwortlicher: Axel Braunschweiger.', // TODO-CONTENT: vervollständigen, sobald Impressum + Hoster final sind
        'Sie haben das Recht auf Auskunft, Berichtigung und Löschung Sie betreffender personenbezogener Daten (Art. 15–17 DSGVO).',
      ],
    },
  },

  notFound: {
    title: 'Blatt nicht gefunden',
    body: 'Diese Seite existiert nicht im Werkbuch. Die Zeichnung wurde möglicherweise überarbeitet oder verschoben.',
    link: 'Zurück zu Blatt 01',
  },
};
