import type { SiteContent } from './types';

export const de: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio für Relaunch & KI',
      description:
        'Wir modernisieren veraltete Firmenwebsites, bauen Seiten mit integriertem KI-Assistenten und entwickeln Web-Apps mit echtem Backend. In Wochen live.',
    },
    relaunch: {
      title: 'Website-Relaunch & Modernisierung | RENOVO',
      description:
        'Ihre Website lädt und wirkt wie vor Jahren gebaut. Wir bauen sie neu — schnell, mobile-first und mehrsprachig, meist in drei bis fünf Wochen.',
    },
    ai: {
      title: 'Websites mit integriertem KI-Assistenten | RENOVO',
      description:
        'Wir bauen Websites mit Chat-Assistent auf Basis Ihrer eigenen Inhalte: Er beantwortet Fragen zu Leistungen, Preisen und Öffnungszeiten rund um die Uhr.',
    },
    apps: {
      title: 'Web-Apps mit echtem Backend | RENOVO',
      description:
        'Buchungssysteme, Kundenportale, Dashboards und MVPs. Full-Stack-Webanwendungen mit Datenbank, API und Authentifizierung — Produktionssoftware statt Prototyp.',
    },
    work: {
      title: 'Projekte — Websites und Web-Apps aus dem Studio | RENOVO',
      description:
        'Ausgewählte Projekte: eine Praxis-Website mit Online-Buchung, eine Hospitality-Marke mit Buchungsseite, dazu aktuelle Entwicklungen aus dem Studio-Labor.',
    },
    'case-physio': {
      title: 'Fallstudie: Website für eine Physiotherapiepraxis | RENOVO',
      description:
        'Website-Design und -Entwicklung für eine Physiotherapiepraxis in Fürth — jede Behandlung verständlich erklärt, konsequent mobile-first gebaut.',
    },
    'case-ikuna': {
      title: 'Fallstudie: Ikuna Glamping — Marke & Website',
      description:
        'Marke und bildstarke Website für ein Glamping-Refugium in Antioquia — schnell auf ländlichen Mobilverbindungen und atmosphärisch genug zum Buchen.',
    },
    about: {
      title: 'Das Studio — so arbeitet RENOVO',
      description:
        'Ein kleines AI-first Web-Studio zwischen Deutschland und Kolumbien. Wie wir arbeiten, woran wir beim Website-Bau glauben, und wer hinter dem Studio steht.',
    },
    contact: {
      title: 'Projekt starten — kostenloser Website-Check | RENOVO',
      description:
        'Schicken Sie uns Ihre Website und erhalten Sie eine ehrliche Einschätzung, was sie ausbremst. Wir antworten persönlich, auf Deutsch, Englisch oder Spanisch.',
    },
    check: {
      title: 'Kostenloser Website-Check — Tempo & SEO',
      description:
        'Testen Sie Ihre Website kostenlos: Ladezeit, Barrierefreiheit, Technik und SEO, gemessen von Google PageSpeed Insights und verständlich erklärt.',
    },
    imprint: {
      title: 'Impressum — Angaben gemäß § 5 DDG | RENOVO',
      description:
        'Impressum des RENOVO AI Web Studio nach § 5 DDG: Diensteanbieter, Kontaktdaten, Umsatzsteuerangaben und redaktionelle Verantwortung.' },
    privacy: {
      title: 'Datenschutzerklärung — ohne Cookies | RENOVO',
      description: 'Wie RENOVO mit Daten umgeht: keine Cookies, keine Analyse-Tools, eigene Schriften — und was Website-Check und Chat-Assistent übermitteln. Ihre DSGVO-Rechte.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Relaunch' },
      { page: 'ai', label: 'KI-Assistent' },
      { page: 'apps', label: 'Web-Apps' },
      { page: 'work', label: 'Projekte' },
      { page: 'about', label: 'Studio' },
      { page: 'check', label: 'Website-Check' },
    ],
    cta: 'Projekt starten',
    menuLabel: 'Hauptnavigation',
    homeAria: 'RENOVO — Startseite',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },

  footer: {
    blurb:
      'Ein AI-first Web-Studio. Wir bauen veraltete Firmenwebsites neu, integrieren KI-Assistenten und entwickeln Web-Apps mit echtem Backend.',
    servicesLabel: 'Leistungen',
    studioLabel: 'Studio',
    contactLabel: 'Kontakt',
    locations: 'Fürth · Nürnberg und Metropolregion ↔ Medellín, Kolumbien',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
    colophon: 'Von Hand gebaut, mit AI-first-Workflow. Keine Tracker, keine Cookies.',
  },

  home: {
    eyebrow: 'Website-Relaunch · KI-Assistenten · Web-Apps',
    headline: ['Ihre Website,', 'neu gebaut für', 'die KI-Zeit.'],
    sub: 'Wir modernisieren veraltete Firmenwebsites, bauen Seiten mit einem KI-Assistenten, der Ihre Kunden rund um die Uhr beantwortet, und entwickeln Web-Apps mit echtem Backend — in Wochen statt Quartalen.',
    ctaPrimary: 'Kostenlosen Website-Check anfordern',
    ctaSecondary: 'Projekte ansehen',
    checkNote: 'Kostenlos, ohne Anmeldung. Googles eigene Messwerte in etwa 30 Sekunden.',
    facts: [
      { value: '3–5 Wochen', label: 'von Kickoff bis Launch' },
      { value: '100/100', label: 'typischer Lighthouse-Score' },
      { value: 'DE · EN · ES', label: 'mehrsprachig von Haus aus' },
    ],
    transformer: {
      before: 'Vorher',
      after: 'Nachher',
      hint: 'Ziehen zum Vergleichen — so sieht ein Relaunch aus.',
    },
    services: {
      eyebrow: 'Was wir machen',
      title: 'Drei Wege, Ihren Webauftritt zu modernisieren.',
      intro:
        'Jedes Projekt beginnt mit derselben Frage: Was braucht Ihr Unternehmen wirklich, um online mehr Kunden zu gewinnen?',
      more: 'Mehr erfahren',
    },
    work: {
      eyebrow: 'Ausgewählte Projekte',
      title: 'Echte Unternehmen. Echte Ergebnisse.',
      intro: 'Websites, auf die sich echte Unternehmen jeden Tag verlassen.',
      more: 'Alle Projekte',
    },
    process: {
      eyebrow: 'So läuft es ab',
      title: 'Vier Schritte. Ohne Agenturaufschlag.',
      steps: [
        {
          title: 'Kostenloser Check',
          body: 'Schicken Sie uns Ihre aktuelle Website. Sie bekommen eine ehrliche Einschätzung, was sich zu ändern lohnt — und was nicht.',
        },
        {
          title: 'Festes Angebot',
          body: 'Umfang, Preis und Launch-Termin in Klartext. Keine Stundenabrechnung, keine Überraschungen am Ende.',
        },
        {
          title: 'Umsetzung',
          body: 'Nach der ersten Woche sehen Sie das echte Ergebnis, und danach jede Woche wieder. Ihr Feedback fließt direkt ein.',
        },
        {
          title: 'Launch & Übergabe',
          body: 'Deployt, dokumentiert und Ihres. Für Änderungen bleiben wir erreichbar, wenn Sie möchten.',
        },
      ],
    },
    testimonial: { quote: '', attribution: '' }, // TODO-CONTENT
  },

  services: {
    relaunch: {
      navLabel: 'Relaunch',
      cardTitle: 'Website-Relaunch & Modernisierung',
      cardDesc:
        'Ihre Seite sieht aus wie 2014 und lädt auch so. Wir bauen sie neu — gleiches Unternehmen, aktueller Stand.',
      eyebrow: 'Leistung 01',
      title: 'Eine Website, die endlich zu Ihrem Unternehmen passt.',
      lead: 'Die meisten Firmenwebsites wurden vor Jahren gebaut, von jemandem, der längst weitergezogen ist. Sie laden langsam, brechen auf dem Handy und schicken Kunden still und leise zur Konkurrenz. Wir bauen sie von Grund auf neu — für Praxen, Handwerksbetriebe, Kanzleien und Einzelhandel in Fürth, Nürnberg und der Metropolregion, und remote für Kunden überall.',
      problem: {
        title: 'Was eine veraltete Website kostet',
        body: 'Besucher entscheiden in Sekunden. Eine langsame, überladene oder auf dem Handy kaputte Seite signalisiert, dass Ihr Unternehmen hinterherhinkt — ob das stimmt oder nicht. Suchmaschinen bewerten sie schlechter, also finden Sie ohnehin weniger Leute. Und jede Anfrage, die nicht kommt, bleibt unsichtbar: Den Kunden, der wieder gegangen ist, sehen Sie nie.',
      },
      solution: {
        title: 'Was wir dagegen tun',
        body: 'Wir behalten, was Ihr Unternehmen ausmacht, und bauen alles drumherum neu: klare Struktur, ehrliche Texte, schneller moderner Code und ein Design, das jahrelang aktuell aussieht statt monatelang. Ihre Inhalte kommen mit, Ihre Rankings bleiben geschützt, und die neue Seite ist so gebaut, dass auch jemand ohne Technikhintergrund sie pflegen kann.',
      },
      includesLabel: 'Enthalten',
      includes: [
        'Design und Entwicklung aus einer Hand',
        'Mobile-first, auf echten Geräten getestet',
        'Exzellente Core Web Vitals und technisches SEO',
        'Mehrsprachig, wo Sie es brauchen (DE / EN / ES)',
        'Bestehende Inhalte übernommen, nichts geht verloren',
        'Barrierearmes Markup und DSGVO-sauberes Hosting-Setup',
        'Deployment, Dokumentation und Übergabe',
      ],
      forWhomLabel: 'Passt gut, wenn',
      forWhom: [
        'Ihre Seite vor mehr als vier Jahren zuletzt überarbeitet wurde',
        'sie auf dem Handy schlecht aussieht oder schwer bedienbar ist',
        'es Ihnen unangenehm ist, den Link an neue Kunden zu schicken',
        'niemand im Unternehmen weiß, wie man die Texte ändert',
      ],
      faqLabel: 'Häufige Fragen',
      faq: [
        {
          q: 'Wie lange dauert ein Relaunch?',
          a: 'Die meisten Firmenwebsites gehen in drei bis fünf Wochen von Kickoff bis Launch. Größere Seiten mit vielen Unterseiten oder mehreren Sprachen brauchen länger — einen festen Termin bekommen Sie in jedem Fall im Angebot.',
        },
        {
          q: 'Verlieren wir unsere Google-Rankings?',
          a: 'Nein. Bestehende URLs werden erfasst und weitergeleitet, Inhalte und Metadaten kommen mit, und die neue Seite ist technisch stärker als die alte. Rankings verbessern sich in der Regel eher, als dass sie fallen.',
        },
        {
          q: 'Können wir die Seite danach selbst bearbeiten?',
          a: 'Ja. Wir klären vorab, welche Bereiche Sie selbst ändern möchten, richten die Seite entsprechend ein und zeigen es Ihnen bei der Übergabe.',
        },
        {
          q: 'Was kostet das?',
          a: 'Jedes Projekt wird einzeln kalkuliert, und Sie erhalten einen Festpreis, bevor irgendetwas beginnt. Der kostenlose Check sagt Ihnen unverbindlich, mit welcher Größenordnung Sie rechnen können.',
        },
      ],
    },

    ai: {
      navLabel: 'KI-Assistent',
      cardTitle: 'Websites mit integriertem KI-Assistenten',
      cardDesc:
        'Ihre neue Website kann mit einem Chat-Assistenten kommen, der Kundenfragen aus Ihren eigenen Inhalten beantwortet — Tag und Nacht.',
      eyebrow: 'Leistung 02',
      title: 'Eine Website, die Fragen beantwortet, während Sie schlafen.',
      lead: 'Dieselben Fragen kommen immer wieder: Was bieten Sie an, was kostet das, wann haben Sie geöffnet, nehmen Sie meine Kasse. Wir bauen Websites mit einem Chat-Assistenten, der genau das aus Ihren eigenen Inhalten beantwortet — Ihre Kunden bekommen sofort eine Antwort, und Sie bekommen Ihre Abende zurück. Manche nennen es KI-Chatbot; wir nennen es einen Assistenten, der Ihr Unternehmen wirklich kennt.',
      problem: {
        title: 'Die Fragen hören nie auf',
        body: 'Jede Anfrage, die die Website hätte beantworten können, landet als Anruf, als E-Mail oder als verlorener Kunde, der keine Lust hatte zu fragen. Außerhalb der Öffnungszeiten ist es schlimmer: Wer sich abends um neun Ihre Seite ansieht, geht einfach wieder — und Sie erfahren nie davon.',
      },
      solution: {
        title: 'Ein Assistent, der Ihr Unternehmen wirklich kennt',
        body: 'Wenn wir Ihre Website bauen, können wir einen Chat-Assistenten integrieren, der auf Ihren eigenen Inhalten basiert: Leistungen, Preise, Öffnungszeiten, häufige Fragen. Er antwortet in der Sprache des Besuchers, verweist auf die richtige Seite und sagt, wie man Sie erreicht, wenn eine Frage einen Menschen braucht. Sie behalten die Kontrolle darüber, was er weiß und was er sagt.',
      },
      includesLabel: 'Enthalten',
      includes: [
        'Ein Chat-Assistent, eingebaut in die Website, die wir liefern',
        'Basiert auf Ihren Leistungen, Preisen und FAQs',
        'Antwortet auf Deutsch, Englisch und Spanisch',
        'Übergibt an E-Mail oder Telefon, wo es nötig ist',
        'Sie bestimmen Tonfall und Grenzen',
        'Einfach zu aktualisieren, wenn sich etwas ändert',
      ],
      forWhomLabel: 'Passt gut, wenn',
      forWhom: [
        'Sie jede Woche dieselben paar Fragen beantworten',
        'Kunden Ihre Seite außerhalb der Geschäftszeiten ansehen',
        'Ihre Leistungen erklärt werden müssen, bevor jemand bucht',
        'Sie Kunden in mehr als einer Sprache betreuen',
      ],
      faqLabel: 'Häufige Fragen',
      faq: [
        {
          q: 'Können Sie einen Assistenten in unsere bestehende Website einbauen?',
          a: 'Unser Schwerpunkt sind neue Websites, die den Assistenten von Anfang an mitbringen — so passt er zu Design, Inhalten und Aufbau der Seite. Wenn Sie bereits eine Website haben, ist die ehrliche Empfehlung meist ein Relaunch mit integriertem Assistenten.',
        },
        {
          q: 'Erfindet er Antworten?',
          a: 'Er antwortet aus den Inhalten, die Sie ihm geben, und ist so eingerichtet, dass er lieber sagt, dass er es nicht weiß, und auf einen echten Kontakt verweist, statt etwas zu erfinden. Das testen wir vor dem Launch gemeinsam.',
        },
        {
          q: 'Ist das DSGVO-konform?',
          a: 'Das Setup wird mit Blick auf die deutschen Datenschutzanforderungen gewählt, in Ihrer Datenschutzerklärung ausgewiesen und auf die Daten beschränkt, die zur Beantwortung nötig sind. Die Details gehen wir vor dem Launch mit Ihnen durch.',
        },
        {
          q: 'Was kostet der Betrieb?',
          a: 'Für den Assistenten fallen geringe monatliche Kosten an, abhängig davon, wie viele Gespräche er führt. Eine realistische Einschätzung steht im Angebot.',
        },
      ],
    },

    apps: {
      navLabel: 'Web-Apps',
      cardTitle: 'Web-Apps mit echtem Backend',
      cardDesc:
        'Buchungssysteme, Kundenportale, Dashboards, MVPs — Produktionssoftware mit Datenbank dahinter, kein Prototyp.',
      eyebrow: 'Leistung 03',
      title: 'Wenn eine Website nicht mehr reicht.',
      lead: 'Manche Unternehmen brauchen Software statt Seiten: etwas, das Daten speichert, Logins hat, E-Mails verschickt und echte Arbeit erledigt. Wir bauen Full-Stack-Webanwendungen — mit Datenbank, API und Authentifizierung — und bringen sie in Produktion.',
      problem: {
        title: 'Irgendwann reicht die Tabelle nicht mehr',
        body: 'Buchungen leben im Kalender einer einzigen Person. Kundendaten stehen in einer Tabelle, der niemand traut. Abläufe existieren nur in jemandes Kopf. Das funktioniert, bis es nicht mehr funktioniert — und Standardsoftware passt entweder nicht zu Ihren Abläufen oder kostet jedes Jahr mehr, je größer Sie werden.',
      },
      solution: {
        title: 'Software, die um Ihr Unternehmen herum gebaut ist',
        body: 'Wir bauen die Anwendung, die Ihr Unternehmen wirklich braucht: Buchung und Terminplanung, Kundenportale, interne Dashboards oder die erste Version eines Produkts, das Sie an den Markt bringen wollen. Ein AI-first-Workflow bedeutet: Was früher ein Team ein Quartal gekostet hat, dauert Wochen — mit den Engineering-Grundlagen weiterhin darunter: sauberes Datenmodell, Authentifizierung, Tests und ein Deployment, auf das Verlass ist.',
      },
      includesLabel: 'Enthalten',
      includes: [
        'Full-Stack-Entwicklung: Frontend, API, Datenbank',
        'Benutzerkonten und Authentifizierung, wo nötig',
        'Ehrliche Kalkulation mit festen Meilensteinen',
        'Produktives Deployment, Monitoring und Backups',
        'Dokumentation und echte Übergabe',
        'Gebaut, um über die ersten hundert Kunden hinaus zu wachsen',
      ],
      forWhomLabel: 'Passt gut, wenn',
      forWhom: [
        'Ihr Betrieb auf Tabellen und Kalendern läuft',
        'Standardsoftware fast passt, aber eben nur fast',
        'Sie als Gründer eine erste Version vor Nutzer bringen müssen',
        'Ihr Team jeden Tag denselben manuellen Ablauf wiederholt',
      ],
      faqLabel: 'Häufige Fragen',
      faq: [
        {
          q: 'Wie lange dauert ein MVP?',
          a: 'Eine fokussierte erste Version dauert typischerweise vier bis acht Wochen. Wir schneiden den Umfang bewusst auf das Kleinste zu, das wirklich nützt, und bauen weiter, sobald echte Nutzer es angefasst haben.',
        },
        {
          q: 'Wem gehört der Code?',
          a: 'Ihnen, vollständig. Alles wird mit Dokumentation übergeben, und nichts ist an uns gebunden.',
        },
        {
          q: 'Welche Technologie nutzen Sie?',
          a: 'Bewährte, angenehm unaufgeregte Werkzeuge: TypeScript, moderne Web-Frameworks, PostgreSQL, containerisiertes Deployment. Der Stack wird passend zum Projekt gewählt — und so, dass ihn später jede kompetente Entwicklerin warten kann.',
        },
        {
          q: 'Übernehmen Sie bestehende Projekte?',
          a: 'Oft ja. Wir starten mit einer kurzen Prüfung der Codebasis und sagen Ihnen ehrlich, ob Weiterbauen oder Neubauen die bessere Investition ist.',
        },
      ],
    },
  },

  work: {
    eyebrow: 'Projekte',
    title: 'Websites, auf denen Unternehmen täglich arbeiten.',
    intro:
      'Zwei laufende Unternehmen, deren digitalen Auftritt wir gestaltet und gebaut haben — dazu das, was im Studio gerade entsteht.',
    visitLabel: 'Website ansehen',
    readLabel: 'Fallstudie lesen',
    buildsEyebrow: 'Aktuelle Projekte',
    buildsTitle: 'Woran wir gerade bauen',
    buildsIntro:
      'Kundenprojekte in Arbeit und die Produkte, die wir intern entwickeln. Fragen Sie uns gern nach jedem davon.',
    builds: [
      {
        key: 'davidleutert',
        client: 'David Leutert',
        sector: 'Illustration & Lettering · Berlin',
        desc: 'Ein zweisprachiges Portfolio und Archiv für einen Berliner Illustrator und Lettering-Künstler: knapp 190 Seiten Auftrags- und freie Arbeiten, mit einem Hero, der seinen echten Zeichenprozess nachspielt — Bleistiftskizze, Tusche, Farbfläche, fertiger Druck.',
        status: 'Beim Kunden in Review',
        url: 'https://micromegass.github.io/davidleutert/',
        urlLabel: 'Vorschau ansehen',
        imageAlt: 'Startseite des Portfolios von David Leutert mit einem kräftigen handgeletterten Druck',
      },
      {
        key: 'fritzloesel',
        client: 'Fritz Lösel',
        sector: 'Therapiepraxis · Fürth',
        desc: 'Kompletter Relaunch für eine Praxis für Systemische Therapie und Sexualtherapie: ruhig, klar, auf Deutsch und Englisch. Ohne Cookies, ohne Tracker und ganz ohne externe Requests — dadurch braucht die Seite kein Cookie-Banner.',
        status: 'Startbereit',
        url: 'https://micromegass.github.io/fritzloesel/',
        urlLabel: 'Vorschau ansehen',
        imageAlt: 'Startseite der Website der Therapiepraxis Fritz Lösel',
      },
      {
        key: 'yosoytattoo',
        client: 'Yo Soy Tattoo Medellín',
        sector: 'Tattoo-Studio & Akademie · Medellín',
        desc: 'Eine spanischsprachige Website mit englischer Spiegelung für Tattoo-Studio und Akademie — inklusive eingebautem KI-Assistenten, der Fragen zu Kursen, Leistungen und Anfahrt beantwortet und lieber an WhatsApp übergibt, als zu raten.',
        status: 'Startbereit',
        imageAlt: 'Startseite der Website von Yo Soy Tattoo mit dem Chat-Assistenten in der Ecke',
      },
      {
        key: 'trazo',
        client: 'Trazo',
        sector: 'Studio-Produkt · intern',
        desc: 'Preis-Software für professionelle Tätowierer. Sie übersetzt Zeit, Material und Komplexität in eine belastbare Preisspanne, zeigt jeden Schritt der Rechnung und exportiert ein Angebot im eigenen Branding. Drei Sprachen, drei Währungen.',
        status: 'In Entwicklung',
        imageAlt: 'Ein Trazo-Angebot, das zeigt, wie ein Tattoo bewertet und kalkuliert wurde',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Gesundheitswesen · Deutschland',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      imageAlt: 'Behandlungsraum der Physiotherapiepraxis in Fürth',
      cardTitle: 'Eine Praxis, die sich klar erklärt',
      cardDesc:
        'Website und digitaler Auftritt für eine Physio- und Ergotherapiepraxis in Fürth — jede Behandlung und jedes Teammitglied verständlich erklärt.',
      metrics: [
        { value: 'Website', label: 'Design & Umsetzung' },
        { value: 'Mobile-first', label: 'fürs Handy gebaut' },
      ],
      title: 'Eine Praxis, die sich klar erklärt',
      summary:
        'Eine Physio- und Ergotherapiepraxis am Fürther Hauptbahnhof brauchte mehr als eine Visitenkarte im Netz. Wir haben die Website gestaltet und gebaut: das gesamte Behandlungsangebot in klarer Sprache, das Team persönlich vorgestellt, alles auf dem Handy schnell zu finden.',
      specs: [
        { label: 'Branche', value: 'Gesundheitswesen · Deutschland' },
        { label: 'Umfang', value: 'Website-Design & -Entwicklung' },
        { label: 'Sprachen', value: 'Deutsch' },
        { label: 'Status', value: 'Live' },
      ],
      sections: [
        {
          heading: 'Welches Problem sollte die Praxis lösen?',
          body: 'Wer eine Therapiepraxis sucht, will drei Dinge schnell wissen: Was behandelt ihr, wer behandelt es, und wie erreiche ich euch. Die meisten Praxis-Websites verstecken alle drei. Die Seite sollte sie sofort beantworten — in der Sprache, die Patienten tatsächlich benutzen, nicht in Fachkürzeln.',
        },
        {
          heading: 'Was hat RENOVO für die Praxis gebaut?',
          body: 'Eine schnelle, warme, mobile-first Website mit dem gesamten Physio- und Ergo-Angebot, dem Team persönlich vorgestellt und den Kontaktwegen immer in Reichweite. Die meisten Patienten kommen über das Handy — Layout, Tap-Flächen und Ladeverhalten wurden zuerst dafür entworfen.',
        },
        {
          heading: 'Warum funktioniert es?',
          body: 'Jede Entscheidung kam aus der Praxis heraus, nicht aus dem Design: welche Behandlungen im Fokus stehen, wie Fragen zu Kasse und Rezept formuliert werden, was neue Patienten vor der Kontaktaufnahme wissen müssen. Die Seite ist so aufgebaut, dass die Praxis Behandlungen und Teammitglieder später ohne Entwickler ergänzen kann.',
        },
      ],
      outcomeLabel: 'Was die Website leistet',
      outcomes: [
        'Erklärt jede Behandlung in verständlicher Sprache',
        'Stellt das ganze Team und jeden Schwerpunkt klar vor',
        'Funktioniert sauber auf den Handys, über die Patienten kommen',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitality · Kolumbien',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      imageAlt: 'Die Wortmarke von Ikuna Glamping auf der von uns gebauten Startseite, auf dunklem, strukturiertem Grund',
      cardTitle: 'Ein Bergrefugium mit digitaler Eingangstür',
      cardDesc:
        'Marke und bildstarke Buchungsseite für ein Glamping-Refugium in Antioquia — schnell genug fürs Land, atmosphärisch genug, um das Gefühl zu verkaufen.',
      metrics: [
        { value: 'Marke + Web', label: 'unser Umfang' },
        { value: 'Spanisch', label: 'für seinen Markt gebaut' },
      ],
      title: 'Ein Bergrefugium mit digitaler Eingangstür',
      summary:
        'Ikuna ist ein Glamping-Refugium in den Bergen von San Vicente Ferrer, Antioquia, eine Stunde von Medellín. Marke und Website entstanden zusammen: ein ruhiges, bildgeführtes Erlebnis auf Spanisch, das Fernweh in Buchungen verwandelt.',
      specs: [
        { label: 'Branche', value: 'Hospitality · Kolumbien' },
        { label: 'Umfang', value: 'Marke · Website · Buchungsstrecke' },
        { label: 'Sprachen', value: 'Spanisch' },
        { label: 'Status', value: 'Live und in Betrieb' },
      ],
      sections: [
        {
          heading: 'Welches Problem sollte das Refugium lösen?',
          body: 'Glamping verkauft ein Gefühl. Eine langsame, überladene Website zerstört dieses Gefühl, bevor ein Gast die Berge gesehen hat. Die Seite musste atmosphärisch sein, schnell auf den ländlichen Mobilverbindungen, die Gäste wirklich nutzen — und unverkennbar lokal statt generische Buchungsvorlage.',
        },
        {
          heading: 'Was hat RENOVO für Ikuna gebaut?',
          body: 'Eine bildgeführte, spanischsprachige Website, gebaut für Performance: zuerst die Geschichte des Ortes, dann die praktischen Details, und die Buchung nie mehr als einen Fingertipp entfernt. Jedes Foto, jedes Wort und jeder Abschnitt dienen derselben ruhigen Stimmung wie das Refugium selbst.',
        },
        {
          heading: 'Warum funktioniert es?',
          body: 'Niemand bucht eine Auszeit wegen einer Feature-Liste. Gebucht wird, weil die Seite den Ort fühlbar gemacht hat — also investiert das Design in Atmosphäre und Geschwindigkeit und entfernt alles, was mit der Entscheidung zu kommen konkurriert.',
        },
      ],
      outcomeLabel: 'Was es dem Unternehmen bringt',
      outcomes: [
        'Gäste kommen bereits überzeugt beim Buchungsschritt an',
        'Läuft schnell auf den Mobilverbindungen, die Gäste wirklich haben',
        'Die Marke, vom Namen bis zur Typografie, entstand mit der Website',
      ],
    },
  },

  caseMeta: {
    eyebrow: 'Fallstudie',
    specLabel: 'Projekt auf einen Blick',
    backLabel: 'Alle Projekte',
    nextLabel: 'Nächste Fallstudie',
  },

  about: {
    eyebrow: 'Das Studio',
    title: 'Kleines Studio. Erfahrene Arbeit. AI-first.',
    lead: 'RENOVO ist ein bewusst kleines Web-Studio zwischen Deutschland und Kolumbien. Klein heißt: Sie sprechen immer mit der Person, die Ihr Projekt baut. AI-first heißt: Was früher ein Team ein Quartal gekostet hat, dauert heute Wochen — ohne die Engineering-Grundlagen darunter aufzugeben.',
    principlesLabel: 'Wie wir arbeiten',
    principles: [
      {
        title: 'Wir sagen Ihnen, was wir nicht bauen würden',
        body: 'Manchmal lautet die ehrliche Antwort, dass Sie weniger Software brauchen als gedacht — oder etwas ganz anderes. Diese Antwort bekommen Sie vor der Rechnung.',
      },
      {
        title: 'Sie sehen früh das echte Ergebnis',
        body: 'Keine Folien als Fortschrittsersatz. Ab der ersten Woche gibt es eine funktionierende Website oder Anwendung unter einer echten URL, und sie wird jede Woche besser.',
      },
      {
        title: 'Immer Klartext',
        body: 'Sie sollten nie einen Übersetzer brauchen, um zu verstehen, wofür Sie zahlen. Jedes Angebot, jedes Update und jede Übergabe ist so geschrieben, dass eine nicht-technische Inhaberin folgen kann.',
      },
      {
        title: 'Schnell ist ein Feature',
        body: 'Jede Seite, die wir ausliefern, zielt auf Top-Lighthouse-Werte. Geschwindigkeit ist keine Eitelkeit: Sie entscheidet über Rankings, Verweildauer und wie viele Besucher zu Kunden werden.',
      },
    ],
    personEyebrow: 'Hinter dem Studio',
    personTitle: 'Axel Braunschweiger',
    personLead:
      'Lehrer, Universitätsdozent, Entwickler, Gründer — der Weg hierher war keine gerade Linie, und genau das ist der Punkt. Zwei Unternehmen zu führen lehrt, was Software leisten muss; das Unterrichten lehrt, es ohne Fachchinesisch zu erklären.',
    portraitAlt: 'Porträt von Axel Braunschweiger, Gründer von RENOVO',
    timelineLabel: 'Der Weg hierher',
    timeline: [
      {
        period: 'Das Fundament',
        title: 'Lehrer für Englisch, Wirtschaft & Philosophie',
        body: 'Studium in Englisch, Wirtschaft und Philosophie, danach Unterricht. Vor einem Raum zu stehen lehrt etwas, das kein Bootcamp vermitteln kann: Komplexes so zu erklären, dass es ankommt. Diese Fähigkeit zeigt sich bis heute jeden Tag — in Angeboten und beim Erklären von KI für skeptische Unternehmer.',
      },
      {
        period: 'Medellín',
        title: 'Dozent an der Universidad EAFIT, Kolumbien',
        body: 'Zwei Jahre Lehre an der Universidad EAFIT in Medellín. Irgendwo zwischen den Vorlesungen entstanden die ersten Zeilen Code — und dann das Bootcamp bei Make it Real: zwölf intensive Wochen Ruby, Rails, JavaScript und echte Projekte.',
      },
      {
        period: 'Deutschland',
        title: 'Full-Stack-Entwickler bei heatbeat engineering',
        body: 'Full-Stack-Entwicklung bei der heatbeat engineering GmbH: Python, Django, PostgreSQL, React, Docker. Verantwortung für Features über den gesamten Zyklus — Architektur, APIs, Datenvisualisierung, Deployment. Produktionssoftware, Produktionsverantwortung.',
      },
      {
        period: 'Gründung',
        title: 'Zwei Unternehmen, zwei Websites',
        body: 'Gründung einer Physio- und Ergotherapiepraxis in Fürth und Mitgründung von Ikuna Glamping in den kolumbianischen Bergen — inklusive digitalem Auftritt für beide. Unternehmen zu führen verändert, wie man Software baut: Man denkt in Umsatz, Abläufen und Kundenvertrauen statt in Features.',
      },
      {
        period: 'Heute',
        title: 'RENOVO',
        body: 'Das Studio bringt beide Hälften zusammen: solide Engineering-Grundlagen mit AI-first-Workflow, gerichtet an Unternehmen, deren Webauftritt endlich seine Aufgabe erfüllen soll. Diese Website ist genau so gebaut.',
      },
    ],
    facts: [
      { label: 'Standorte', value: 'Fürth, Deutschland ↔ Medellín, Kolumbien' },
      { label: 'Arbeitssprachen', value: 'Deutsch · Englisch · Spanisch' },
      { label: 'Fokus', value: 'Relaunches · KI-Assistenten · Web-Apps' },
      { label: 'Arbeitsweise', value: 'AI-first, engineering-fundiert' },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Schicken Sie uns Ihre Website. Sie bekommen eine ehrliche Einschätzung.',
    body: 'Eine E-Mail genügt: die Adresse Ihrer aktuellen Website und was Sie daran stört. Sie erhalten einen kurzen, kostenlosen Check, was sie ausbremst und was ein Relaunch realistisch bedeuten würde — ohne Foliensatz, ohne Verpflichtung.',
    emailLabel: 'Schreiben Sie an',
    availability: 'Aktuell offen für Projekte',
    languagesNote: 'Auf Deutsch, Englisch oder Spanisch — was für Sie am einfachsten ist.',
    reviewTitle: 'Was der kostenlose Check abdeckt',
    reviewBody:
      'Geschwindigkeit und Verhalten auf dem Handy, Ihre Sichtbarkeit in der Suche, wie klar die Seite erklärt, was Sie tun — und die zwei bis drei Änderungen mit dem größten Effekt. Wenn sich ein Relaunch für Sie nicht lohnt, sagen wir das.',
    includeTitle: 'Was in die erste E-Mail gehört',
    include: [
      'Die Adresse Ihrer aktuellen Website, falls vorhanden',
      'Was Ihr Unternehmen macht, in ein bis zwei Sätzen',
      'Was Sie an der Seite heute stört',
      'Wann die neue Seite ungefähr live gehen soll',
      'Ob Sie mehr als eine Sprache brauchen',
    ],
    nextTitle: 'Wie es dann weitergeht',
    next: [
      {
        title: 'Antwort meist innerhalb eines Werktags',
        body: 'Von der Person, die das Projekt auch bauen würde — nicht aus einem Vertriebspostfach. Wenn wir nicht passen, sagen wir das früh und verweisen Sie weiter.',
      },
      {
        title: 'Ein kurzes Gespräch, wenn es sinnvoll ist',
        body: 'Dreißig Minuten, um das Unternehmen hinter der Website zu verstehen. Ohne Präsentation, ohne Druck, ohne Kosten.',
      },
      {
        title: 'Ein schriftliches Angebot zum Festpreis',
        body: 'Umfang, Preis und Launch-Termin in Klartext, damit Sie mit allen Fakten entscheiden können.',
      },
    ],
  },

  cta: {
    eyebrow: 'Nächster Schritt',
    title: 'Finden wir heraus, was Ihre Website für Sie leisten könnte.',
    body: 'Ein Relaunch, ein KI-Assistent, eine Web-App — oder einfach eine ehrliche zweite Meinung. Das erste Gespräch ist kostenlos und erfrischend frei von Fachchinesisch.',
    button: 'Projekt starten',
  },

  check: {
    eyebrow: 'Kostenloser Website-Check',
    title: 'Wie gesund ist Ihre Website wirklich?',
    lead: 'Adresse eingeben und in etwa einer halben Minute Googles eigene Messwerte erhalten: Ladegeschwindigkeit, Barrierefreiheit, technische Qualität und Suchmaschinen-Tauglichkeit — mit den größten Problemen in verständlicher Sprache benannt.',
    inputLabel: 'Ihre Website-Adresse',
    placeholder: 'ihre-firma.de',
    submit: 'Check starten',
    running: 'Analysiere…',
    runningNote:
      'Google lädt Ihre Seite gerade auf einem simulierten Mobilgerät. Das dauert meist 20–40 Sekunden.',
    privacyNote:
      'Die eingegebene Adresse wird zur Analyse an die Google-PageSpeed-Insights-API übermittelt. Wir speichern sie nicht.',
    privacyLink: 'Wie wir mit Ihren Daten umgehen',
    scoresLabel: 'Bewertungen',
    categories: {
      performance: 'Tempo',
      accessibility: 'Barrierefreiheit',
      bestPractices: 'Technische Qualität',
      seo: 'Suchmaschinen',
    },
    vitalsLabel: 'Was Besucher erleben',
    vitals: {
      lcp: 'Größter Inhalt sichtbar',
      cls: 'Layout-Stabilität',
      tbt: 'Blockierte Bedienzeit',
      si: 'Optisch fertig',
    },
    opportunitiesLabel: 'Größte Hebel',
    opportunitiesNone: 'Keine größeren technischen Probleme gefunden — eine gute Ausgangslage.',
    savingsLabel: 'mögliche Ersparnis',
    scale: { good: 'Gut', ok: 'Ausbaufähig', poor: 'Schwach' },
    errors: {
      invalid: 'Das sieht nicht nach einer gültigen Adresse aus. Versuchen Sie es mit ihre-firma.de.',
      failed: 'Der Check konnte nicht abgeschlossen werden. Bitte versuchen Sie es gleich noch einmal.',
      quota:
        'Das kostenlose Analyse-Kontingent ist gerade erschöpft. Versuchen Sie es später noch einmal — oder schreiben Sie uns, wir führen den Check für Sie durch.',
      unreachable:
        'Google konnte diese Adresse nicht laden. Prüfen Sie die Schreibweise und ob die Seite öffentlich erreichbar ist.',
    },
    resultFor: 'Ergebnisse für',
    explainTitle: 'Was die vier Werte tatsächlich bedeuten',
    explain: [
      {
        term: 'Tempo',
        body: 'Wie schnell die Seite auf einem Mittelklasse-Handy bei normaler Mobilverbindung benutzbar wird. Unter 50 warten Besucher so lange, dass ein messbarer Teil abspringt, bevor überhaupt etwas zu sehen ist. Google wertet die Seitenerfahrung seit 2021 als Ranking-Signal — langsame Seiten verlieren also doppelt: Weniger Besucher bleiben, und weniger kommen überhaupt an.',
      },
      {
        term: 'Barrierefreiheit',
        body: 'Ob Menschen mit Screenreader, Tastatur oder starker Vergrößerung die Seite wirklich nutzen können. Typische Mängel sind Bilder ohne Alternativtext, Formularfelder ohne Beschriftung und zu geringe Kontraste. In Deutschland ist das zunehmend auch eine Rechtsfrage: Das Barrierefreiheitsstärkungsgesetz nimmt seit Juni 2025 viele private Unternehmen in die Pflicht.',
      },
      {
        term: 'Technische Qualität',
        body: 'Technische Hygiene: gültiges HTTPS-Zertifikat, keine Konsolenfehler, richtig dimensionierte Bilder, keine veralteten Schnittstellen. Ein schwacher Wert kostet selten allein Rankings, ist aber ein verlässliches Zeichen dafür, dass eine Seite länger nicht gepflegt wurde.',
      },
      {
        term: 'Suchmaschinen',
        body: 'Ob eine Suchmaschine die Seite crawlen, verstehen und sauber anzeigen kann: Titel, Meta-Beschreibung, Indexierbarkeit, funktionierende Links, lesbare Schriftgrößen. Geprüft wird, ob die Grundlagen stimmen — nicht, ob Ihre Inhalte ein gutes Ranking verdienen. Das muss ein Mensch beurteilen.',
      },
    ],
    afterTitle: 'Zahlen sind nur die halbe Wahrheit.',
    afterBody:
      'Eine Punktzahl sagt nicht, ob Ihre Website Ihr Unternehmen gut erklärt, ob die richtigen Leute sie finden oder ob sie aus Besuchern Kunden macht. Schicken Sie uns die Adresse — wir sehen sie uns richtig an, kostenlos und in Klartext.',
    afterButton: 'Menschliche Einschätzung anfordern',
    disclaimer:
      'Gemessen von Google PageSpeed Insights auf einem simulierten Mittelklasse-Smartphone. Die Werte schwanken zwischen einzelnen Durchläufen.',
  },

  chat: {
    launch: 'Studio fragen',
    launchAria: 'Studio-Assistenten öffnen',
    title: 'Studio-Assistent',
    subtitle: 'Genau die Art Assistent, die wir in Kundenseiten einbauen.',
    intro:
      'Hallo — ich beantworte Fragen dazu, was das Studio baut, wie ein Projekt abläuft und was wir schon umgesetzt haben. Fragen Sie einfach, oder schreiben Sie Axel direkt, wenn es um Ihr eigenes Projekt geht.',
    suggestionsLabel: 'Zum Einstieg',
    suggestions: [
      'Was gehört zu einem Relaunch meiner Website?',
      'Wie funktioniert der eingebaute KI-Assistent?',
      'Wie lange dauert ein Projekt üblicherweise?',
    ],
    inputLabel: 'Ihre Frage',
    placeholder: 'Frage stellen …',
    send: 'Senden',
    close: 'Assistenten schließen',
    thinking: 'Denkt nach …',
    replyReady: 'Der Assistent hat geantwortet.',
    privacyNote: 'Ihre Nachrichten gehen zur Beantwortung an Anthropic in den USA.',
    privacyLink: 'Was das bedeutet',
    disclaimer: 'Der Assistent kann sich irren. Nichts davon ist verbindlich.',
    errors: {
      failed:
        'Bei uns ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns eine E-Mail.',
      busy: 'Der Assistent ist gerade ausgelastet. Bitte versuchen Sie es gleich noch einmal.',
      rateLimited:
        'Das sind viele Fragen in einer Stunde. Schreiben Sie uns bitte stattdessen eine E-Mail.',
      tooLong:
        'Dieses Gespräch ist lang geworden. Bitte beginnen Sie ein neues oder schreiben Sie uns eine E-Mail.',
      offline: 'Der Assistent ist nicht erreichbar. Bitte schreiben Sie uns eine E-Mail.',
    },
  },

  legal: {
    imprint: {
      title: 'Impressum',
      intro: 'Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).',
      sections: [
        {
          heading: 'Diensteanbieter',
          body: [
            'RENOVO — AI Web Studio', // TODO-CONTENT: exakte Firmierung, falls abweichend
            'Inhaber: Axel Braunschweiger', // TODO-CONTENT: vollständige Anschrift ist gesetzlich Pflicht
            '[Straße und Hausnummer]',
            '[PLZ] Fürth',
          ],
        },
        {
          heading: 'Kontakt',
          body: [
            'E-Mail: axelbraunschweiger@gmail.com', // TODO-CONTENT: geschäftliche E-Mail + Telefonnummer
            'Telefon: [erforderlich — eine Telefonnummer oder ein gleichwertig unmittelbarer Kontaktweg muss angegeben werden]',
          ],
        },
        {
          heading: 'Umsatzsteuer',
          body: [
            'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr.]', // TODO-CONTENT
            'Falls die Kleinunternehmerregelung nach § 19 UStG gilt, wird keine Umsatzsteuer ausgewiesen; dann sollte hier stattdessen ein entsprechender Hinweis stehen.',
          ],
        },
        {
          heading: 'Redaktionell verantwortlich',
          body: ['Axel Braunschweiger, Anschrift wie oben (§ 18 Abs. 2 MStV).'],
        },
        {
          heading: 'Streitschlichtung',
          body: [
            'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr',
            'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).',
          ],
        },
        {
          heading: 'Haftung für Inhalte',
          body: [
            'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
            'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
          ],
        },
        {
          heading: 'Haftung für Links',
          body: [
            'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
            'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
          ],
        },
        {
          heading: 'Urheberrecht',
          body: [
            'Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung.',
            'Projektbilder werden mit Erlaubnis der jeweiligen Unternehmen veröffentlicht und bleiben deren Eigentum.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      intro:
        'Diese Website ist so gebaut, dass so wenig Daten wie möglich anfallen. Sie setzt keine Cookies, nutzt keine Analyse- oder Tracking-Werkzeuge und lädt weder Schriften noch Skripte von fremden Servern. Es gibt zwei Ausnahmen, die unten ausführlich beschrieben werden: den Website-Check und den Chat-Assistenten. Beide übermitteln erst dann Daten, wenn Sie sie aktiv starten.',
      updated: 'Stand: Juli 2026',
      sections: [
        {
          heading: '1. Verantwortlicher',
          body: [
            'Axel Braunschweiger, RENOVO — AI Web Studio, [Anschrift wie im Impressum], Deutschland.', // TODO-CONTENT
            'E-Mail: axelbraunschweiger@gmail.com',
            'Ein Datenschutzbeauftragter wurde nicht bestellt; eine gesetzliche Pflicht hierzu besteht in diesem Fall nicht.',
          ],
        },
        {
          heading: '2. Hosting und Server-Logfiles',
          body: [
            'Diese Website wird gehostet bei [Hosting-Anbieter, Anschrift].', // TODO-CONTENT: Hoster benennen; Auftragsverarbeitungsvertrag nach Art. 28 DSGVO erforderlich
            'Beim Aufruf der Website erfasst der Hosting-Anbieter automatisch technische Zugriffsdaten in Server-Logfiles: Ihre IP-Adresse, Datum und Uhrzeit der Anfrage, die aufgerufene Seite, die verweisende Seite sowie Angaben zu Browser und Betriebssystem.',
            'Zweck und Rechtsgrundlage: Diese Verarbeitung ist erforderlich, um die Website zuverlässig auszuliefern sowie Angriffe zu erkennen und abzuwehren. Rechtsgrundlage ist unser berechtigtes Interesse am sicheren und stabilen Betrieb der Website, Art. 6 Abs. 1 lit. f DSGVO.',
            'Speicherdauer: Logdaten werden nach dem Löschkonzept des Hosting-Anbieters gelöscht, in der Regel nach spätestens 30 Tagen. Sie werden nicht mit anderen Datenquellen zusammengeführt und nicht dazu verwendet, Sie persönlich zu identifizieren.',
          ],
        },
        {
          heading: '3. Website-Check (Google PageSpeed Insights)',
          body: [
            'Auf unserer Seite „Website-Check" können Sie die Adresse einer Website eingeben und analysieren lassen. Die Analyse führen nicht wir durch: Mit dem Klick auf den Button sendet Ihr Browser die eingegebene Adresse unmittelbar an die Google-PageSpeed-Insights-API der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.',
            'Dabei werden Ihre IP-Adresse sowie die technischen Angaben Ihrer Browseranfrage an Google übermittelt und können auf Server in den USA übertragen werden. Google verarbeitet diese Daten nach seiner eigenen Datenschutzerklärung: https://policies.google.com/privacy',
            'Zweck und Rechtsgrundlage: Die Analyse erfolgt ausschließlich auf Ihre ausdrückliche Veranlassung hin. Rechtsgrundlage ist daher Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das aktive Starten des Checks erteilen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie das Werkzeug nicht nutzen. Ohne gestarteten Check werden keine Daten an Google übermittelt.',
            'Drittlandübermittlung: Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert, für das die Europäische Kommission mit Angemessenheitsbeschluss vom 10. Juli 2023 ein angemessenes Schutzniveau festgestellt hat. Ergänzend stützt sich Google auf die Standardvertragsklauseln der Europäischen Kommission.',
            'Wir selbst speichern und werten die von Ihnen eingegebenen Adressen und die Analyseergebnisse nicht aus. Auf unserer Seite wird nichts gespeichert.',
          ],
        },
        {
          heading: '4. Studio-Assistent (Chat)',
          body: [
            'Auf unserer Website steht ein Chat-Assistent zur Verfügung, der Fragen zum Studio beantwortet. Er startet erst, wenn Sie ihn aktiv öffnen; vor dem Absenden einer Nachricht werden keine Daten übertragen.',
            'Wenn Sie eine Nachricht senden, werden diese Nachricht und der bisherige Gesprächsverlauf an unsere eigene Serverfunktion und von dort an die Anthropic PBC, 548 Market St, PMB 90375, San Francisco, CA 94104, USA, übermittelt, die die Antwort mit dem Sprachmodell Claude erzeugt. Ihre IP-Adresse wird von unserer Serverfunktion zur Missbrauchsvermeidung verarbeitet und nicht an Anthropic weitergegeben.',
            'Zweck und Rechtsgrundlage: Der Assistent läuft ausschließlich auf Ihre ausdrückliche Veranlassung. Rechtsgrundlage ist daher Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das aktive Absenden einer Nachricht erteilen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie den Assistenten nicht weiter nutzen. Daneben besteht unser berechtigtes Interesse an der beschriebenen Missbrauchsvermeidung, Art. 6 Abs. 1 lit. f DSGVO.',
            'Drittlandübermittlung: Die Anthropic PBC ist unter dem EU-US Data Privacy Framework zertifiziert, für das die Europäische Kommission ein angemessenes Schutzniveau festgestellt hat (Angemessenheitsbeschluss vom 10. Juli 2023). Mit Anthropic besteht zusätzlich ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.',
            'Speicherdauer: Wir speichern das Gespräch nicht. Es besteht in Ihrem Browser, solange das Chatfenster geöffnet ist, und ist nach dem Schließen oder Neuladen der Seite verloren. Anthropic speichert Ein- und Ausgaben befristet zur Missbrauchserkennung und nutzt sie nicht zum Training der Modelle. Unsere Serverfunktion speichert für maximal 65 Minuten einen Zähler pro IP-Adresse, ausschließlich zur Durchsetzung einer Nutzungsgrenze.',
            'Bitte geben Sie im Chat keine besonderen Kategorien personenbezogener Daten (etwa Gesundheitsdaten) und keine vertraulichen Informationen ein. Für sensible Anliegen schreiben Sie uns bitte eine E-Mail.',
            'Der Assistent erzeugt seine Antworten automatisiert und kann sich irren. Seine Antworten sind rechtlich nicht verbindlich; auf Grundlage des Gesprächs wird keine Entscheidung mit rechtlicher Wirkung Ihnen gegenüber getroffen.',
          ],
        },
        {
          heading: '5. Kontaktaufnahme per E-Mail',
          body: [
            'Wenn Sie uns schreiben, werden die von Ihnen mitgeteilten Daten — Ihre E-Mail-Adresse, gegebenenfalls Ihr Name und der Inhalt Ihrer Nachricht — ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.',
            'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Nachricht der Anbahnung oder Erfüllung eines Vertrags dient, andernfalls unser berechtigtes Interesse an der Beantwortung an uns gerichteter Anfragen, Art. 6 Abs. 1 lit. f DSGVO.',
            'Speicherdauer: Anfragen werden gelöscht, sobald sie abschließend bearbeitet sind und keine gesetzlichen Aufbewahrungspflichten, insbesondere aus Handels- und Steuerrecht, entgegenstehen.',
            'Bitte beachten Sie, dass E-Mails standardmäßig nicht verschlüsselt übertragen werden. Für vertrauliche Informationen fragen Sie uns gern nach einem anderen Weg.',
          ],
        },
        {
          heading: '6. Schriften und weitere Ressourcen',
          body: [
            'Sämtliche Schriften, Bilder, Skripte und Stylesheets werden vom eigenen Server dieser Website ausgeliefert. Insbesondere kommen kein Google-Fonts-CDN, kein Content Delivery Network und keine Social-Media-Plugins zum Einsatz. Beim bloßen Betrachten der Seiten wird keine Verbindung zu Servern Dritter aufgebaut.',
          ],
        },
        {
          heading: '7. Cookies, Analyse und Tracking',
          body: [
            'Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking-, Remarketing- oder Profiling-Technologien. Ihre Sprach- und Farbschema-Einstellung wird, sofern Sie sie ändern, ausschließlich lokal in Ihrem Browser gespeichert und nicht an uns übermittelt.',
          ],
        },
        {
          heading: '8. Ihre Rechte',
          body: [
            'Sie haben das Recht auf Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO), auf Berichtigung unrichtiger Daten (Art. 16), auf Löschung (Art. 17), auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie auf jederzeitigen Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3).',
            'Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO Widerspruch einzulegen (Art. 21 DSGVO).',
            'Für die Ausübung dieser Rechte genügt eine formlose E-Mail an die oben genannte Adresse.',
          ],
        },
        {
          heading: '9. Beschwerderecht',
          body: [
            'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere im Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO).',
            'Die für uns zuständige Behörde ist das Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach.', // TODO-CONTENT: anpassen, falls der Sitz außerhalb Bayerns liegt
          ],
        },
        {
          heading: '10. Änderungen dieser Erklärung',
          body: [
            'Wir passen diese Datenschutzerklärung an, wenn Änderungen an der Website oder der Rechtslage dies erforderlich machen. Es gilt jeweils die hier veröffentlichte Fassung.',
          ],
        },
      ],
    },
  },

  notFound: {
    title: 'Diese Seite wurde verschoben oder gab es nie.',
    body: 'Der Link ist womöglich veraltet. Alles, was das Studio macht, ist einen Klick von der Startseite entfernt.',
    link: 'Zurück zur Startseite',
  },
};
