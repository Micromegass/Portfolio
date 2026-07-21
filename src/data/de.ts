import type { SiteContent } from './types';

export const de: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio | Website-Relaunch, KI-Assistenten, Web-Apps',
      description:
        'Wir modernisieren veraltete Firmenwebsites, bauen Websites mit integriertem KI-Assistenten und entwickeln Web-Apps mit echtem Backend. Mehrsprachig, schnell, in Wochen live.',
    },
    relaunch: {
      title: 'Website-Relaunch & Modernisierung | RENOVO',
      description:
        'Ihre Website sieht aus und lädt, als wäre sie vor Jahren gebaut worden. Wir bauen sie neu — schnell, mobile-first, suchmaschinenfreundlich, mehrsprachig. Meist in drei bis fünf Wochen.',
    },
    ai: {
      title: 'Websites mit integriertem KI-Assistenten | RENOVO',
      description:
        'Wir bauen Websites mit einem Chat-Assistenten, der auf Ihren eigenen Inhalten basiert und Kundenfragen zu Leistungen, Preisen und Öffnungszeiten rund um die Uhr beantwortet.',
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
      title: 'Fallstudie: Praxis-Website mit Online-Buchung | RENOVO',
      description:
        'Website, Marke und Online-Terminbuchung für eine Physio- und Ergotherapiepraxis in Fürth — Termine entstehen heute ohne einen einzigen Anruf.',
    },
    'case-ikuna': {
      title: 'Fallstudie: Ikuna Glamping — Marke und Buchungsseite | RENOVO',
      description:
        'Marke und bildstarke Website für ein Glamping-Refugium in Antioquia, Kolumbien — schnell auf ländlichen Mobilverbindungen, atmosphärisch genug, um das Erlebnis zu verkaufen.',
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
    imprint: { title: 'Impressum | RENOVO', description: 'Impressum des RENOVO AI Web Studio.' },
    privacy: {
      title: 'Datenschutzerklärung | RENOVO',
      description: 'Datenschutzerklärung des RENOVO AI Web Studio. Keine Cookies, kein Tracking.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Relaunch' },
      { page: 'ai', label: 'KI-Assistent' },
      { page: 'apps', label: 'Web-Apps' },
      { page: 'work', label: 'Projekte' },
      { page: 'about', label: 'Studio' },
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
    locations: 'Fürth, Deutschland ↔ Medellín, Kolumbien',
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
      intro: 'Websites und Buchungssysteme, auf denen Firmen jeden Tag arbeiten.',
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
      lead: 'Die meisten Firmenwebsites wurden vor Jahren gebaut, von jemandem, der längst weitergezogen ist. Sie laden langsam, brechen auf dem Handy und schicken Kunden still und leise zur Konkurrenz. Wir bauen sie von Grund auf neu.',
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
      lead: 'Dieselben Fragen kommen immer wieder: Was bieten Sie an, was kostet das, wann haben Sie geöffnet, nehmen Sie meine Kasse. Wir bauen Websites mit einem Chat-Assistenten, der genau das aus Ihren eigenen Inhalten beantwortet — Ihre Kunden bekommen sofort eine Antwort, und Sie bekommen Ihre Abende zurück.',
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
      'Zwei laufende Unternehmen, komplett gebaut — Marke, Website, Buchung — dazu das, was im Studio gerade entsteht.',
    visitLabel: 'Website ansehen',
    readLabel: 'Fallstudie lesen',
    labEyebrow: 'Studio-Labor',
    labTitle: 'Woran wir gerade bauen',
    labIntro:
      'Produkte, die das Studio intern entwickelt, um Werkzeuge und Workflow zu schärfen. Fragen Sie uns gern danach.',
    lab: [
      {
        title: 'Reminder-App',
        desc: 'Ein ruhiges Erinnerungs-Tool, das Aufmerksamkeit als knappes Gut behandelt.',
        tag: 'Funktionierender Prototyp',
      },
      {
        title: 'Tattoo-Preisrechner',
        desc: 'Sofortige, transparente Preisschätzungen für Tattoo-Studios und ihre Kundschaft.',
        tag: 'Funktionierender Prototyp',
      },
      {
        title: 'Flugsuche',
        desc: 'Eine fokussierte Flugsuche für Strecken, die die großen Plattformen schlecht abdecken.',
        tag: 'Funktionierender Prototyp',
      },
      {
        title: 'Medellín-Stadtführer',
        desc: 'Ein Guide für Medellín, gebaut von jemandem, der dort lebt.',
        tag: 'Funktionierender Prototyp',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Gesundheitswesen · Deutschland',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      cardTitle: 'Eine Praxis, die ihren Kalender selbst füllt',
      cardDesc:
        'Website, Marke und Online-Buchung für eine Physio- und Ergotherapiepraxis — Termine entstehen heute ohne einen einzigen Anruf.',
      metrics: [
        { value: '24/7', label: 'Online-Buchung' },
        { value: '0', label: 'Telefon-Pingpong' },
      ],
      title: 'Eine Praxis, die ihren Kalender selbst füllt',
      summary:
        'Eine Physio- und Ergotherapiepraxis am Fürther Hauptbahnhof brauchte mehr als eine Visitenkarte im Netz: Patienten sollten die Behandlungen verstehen, das Team kennenlernen und buchen können, ohne zum Hörer zu greifen.',
      specs: [
        { label: 'Branche', value: 'Gesundheitswesen · Deutschland' },
        { label: 'Umfang', value: 'Marke · Website · Online-Buchung' },
        { label: 'Sprachen', value: 'Deutsch' },
        { label: 'Status', value: 'Live und in Betrieb' },
      ],
      sections: [
        {
          heading: 'Die Aufgabe',
          body: 'Deutsche Therapiepraxen laufen über Telefonate und Wartelisten. Patienten wollen drei Dinge schnell wissen: Was behandeln Sie, wer behandelt es, und wann komme ich dran. Die meisten Praxis-Websites beantworten keine davon, und jede offene Frage wird zum Anruf mitten in der Behandlungszeit.',
        },
        {
          heading: 'Was wir gebaut haben',
          body: 'Eine schnelle, warme, mobile-first Website: das gesamte Physio- und Ergo-Angebot in klarer Sprache erklärt, das Team persönlich vorgestellt und die Online-Buchung im Mittelpunkt. Termine entstehen ohne einen einzigen Anruf — genau das erlaubt der Praxis, kurze Wartezeiten zu versprechen.',
        },
        {
          heading: 'Warum es funktioniert',
          body: 'Jede Entscheidung kam von der Geschäftsseite, nicht von der Designseite: welche Behandlungen im Fokus stehen, wie Kassenfragen formuliert werden, wo Buchungsreibung leise einen Patienten kostet. Die Seite ist so aufgebaut, dass die Praxis Behandlungen und Teammitglieder ohne Entwickler ergänzen kann.',
        },
      ],
      outcomeLabel: 'Was es dem Unternehmen bringt',
      outcomes: [
        'Termine werden rund um die Uhr online gebucht, ohne Telefon-Pingpong',
        'Das ganze Team und jede Spezialisierung werden klar präsentiert',
        'Auf dieser Website läuft jeden Tag eine echte Praxis',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitality · Kolumbien',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      cardTitle: 'Ein Bergrefugium mit digitaler Eingangstür',
      cardDesc:
        'Marke und bildstarke Buchungsseite für ein Glamping-Refugium in Antioquia — schnell genug fürs Land, atmosphärisch genug, um das Gefühl zu verkaufen.',
      metrics: [
        { value: '<1s', label: 'Ladezeit mobil' },
        { value: 'ES', label: 'Spanisch zuerst' },
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
          heading: 'Die Aufgabe',
          body: 'Glamping verkauft ein Gefühl. Eine langsame, überladene Website zerstört dieses Gefühl, bevor ein Gast die Berge gesehen hat. Die Seite musste atmosphärisch sein, schnell auf den ländlichen Mobilverbindungen, die Gäste wirklich nutzen — und unverkennbar lokal statt generische Buchungsvorlage.',
        },
        {
          heading: 'Was wir gebaut haben',
          body: 'Eine bildgeführte, spanischsprachige Website, gebaut für Performance: zuerst die Geschichte des Ortes, dann die praktischen Details, und die Buchung nie mehr als einen Fingertipp entfernt. Jedes Foto, jedes Wort und jeder Abschnitt dienen derselben ruhigen Stimmung wie das Refugium selbst.',
        },
        {
          heading: 'Warum es funktioniert',
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
  },

  cta: {
    eyebrow: 'Nächster Schritt',
    title: 'Finden wir heraus, was Ihre Website für Sie leisten könnte.',
    body: 'Ein Relaunch, ein KI-Assistent, eine Web-App — oder einfach eine ehrliche zweite Meinung. Das erste Gespräch ist kostenlos und erfrischend frei von Fachchinesisch.',
    button: 'Projekt starten',
  },

  legal: {
    imprint: {
      title: 'Impressum',
      body: [
        'Angaben gemäß § 5 TMG.',
        'RENOVO — AI Web Studio', // TODO-CONTENT: vollständige Firmierung, Anschrift, USt-IdNr.
        'Inhaber: Axel Braunschweiger',
        'Kontakt: axelbraunschweiger@gmail.com',
        'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      body: [
        'Diese Website ist bewusst datensparsam gestaltet: Sie setzt keine Cookies, nutzt keine Analyse-Tools und lädt keine Ressourcen von Drittanbietern. Alle Schriften und Assets werden vom eigenen Server ausgeliefert.',
        'Server-Logfiles: Der Hosting-Anbieter kann technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp) automatisch zu Sicherheits- und Betriebszwecken speichern. Diese Daten werden nicht mit anderen Quellen zusammengeführt und nach den Aufbewahrungsrichtlinien des Anbieters gelöscht.',
        'Kontakt per E-Mail: Wenn Sie uns schreiben, werden Ihre Nachricht und Adresse ausschließlich zur Beantwortung verwendet. Verantwortlicher: Axel Braunschweiger.', // TODO-CONTENT
        'Sie haben das Recht auf Auskunft, Berichtigung und Löschung Sie betreffender personenbezogener Daten (Art. 15–17 DSGVO).',
      ],
    },
  },

  notFound: {
    title: 'Diese Seite wurde verschoben oder gab es nie.',
    body: 'Der Link ist womöglich veraltet. Alles, was das Studio macht, ist einen Klick von der Startseite entfernt.',
    link: 'Zurück zur Startseite',
  },
};
