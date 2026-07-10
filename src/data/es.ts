import type { SiteContent } from './types';

export const es: SiteContent = {
  meta: {
    home: {
      title: 'Axel Braunschweiger — Sitios web y aplicaciones, construidos como dueño',
      description:
        'Desarrollador web freelance e ingeniero AI-first entre Medellín y Alemania. Construyo sitios web, aplicaciones y MVPs para empresas — con el cuidado de alguien que ha fundado dos compañías propias.',
    },
    services: {
      title: 'Servicios — Sitios web, aplicaciones, integración de IA | Axel Braunschweiger',
      description:
        'Sitios web profesionales, rediseños, aplicaciones full-stack, MVPs, integraciones de IA y automatización. Proceso claro, asesoría honesta, calidad de producción.',
    },
    work: {
      title: 'Proyectos — Casos de estudio y trabajos actuales | Axel Braunschweiger',
      description:
        'Proyectos reales con riesgo real: dos empresas fundadas y sus sitios web, ingeniería de producción en heatbeat y un laboratorio de prototipos actuales.',
    },
    'case-physio': {
      title: 'Caso de estudio: Physio & Ergo Fürth — sitio web y reservas',
      description:
        'Cómo construí la presencia digital de mi propia clínica de fisioterapia y terapia ocupacional en Fürth, Alemania — de la marca a la reserva de citas.',
    },
    'case-ikuna': {
      title: 'Caso de estudio: Ikuna Glamping — marca y sitio web',
      description:
        'Marca y sitio web para Ikuna Glamping, un refugio en las montañas de San Vicente Ferrer, Antioquia — diseñado y desarrollado por su cofundador.',
    },
    about: {
      title: 'Sobre mí — profesor, fundador, ingeniero AI-first | Axel Braunschweiger',
      description:
        'De enseñar en la Universidad EAFIT de Medellín a la ingeniería de producción en Alemania y la fundación de dos empresas. El camino detrás del trabajo.',
    },
    contact: {
      title: 'Contacto — iniciar un proyecto | Axel Braunschweiger',
      description:
        'Cuénteme sobre su sitio web, aplicación o proyecto de automatización. Respondo personalmente, en español, inglés o alemán.',
    },
    imprint: {
      title: 'Aviso legal | Axel Braunschweiger',
      description: 'Aviso legal de axelbraunschweiger.com.',
    },
    privacy: {
      title: 'Política de privacidad | Axel Braunschweiger',
      description: 'Política de privacidad de axelbraunschweiger.com.',
    },
  },

  nav: {
    services: 'Servicios',
    work: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    menuLabel: 'Menú',
    homeAria: 'Axel Braunschweiger — inicio',
  },

  footer: {
    role: 'Ingeniero AI-first · Desarrollador web',
    locations: 'Fürth, Alemania ↔ Medellín, Colombia',
    languagesLabel: 'Idiomas',
    languages: 'ES · EN · DE',
    drawnBy: 'Dibujado por',
    sheetLabel: 'Hoja',
    revisionLabel: 'Rev.',
    contactLabel: 'Contacto',
    legalImprint: 'Aviso legal',
    legalPrivacy: 'Privacidad',
    colophon:
      'Diseñado y construido a mano — con Claude como socio de desarrollo. Sin rastreadores, sin cookies.',
  },

  home: {
    kicker: 'Axel Braunschweiger · Ingeniero AI-first · Fürth ↔ Medellín',
    headline: ['Software construido', 'como dueño.'],
    sub: 'Diseño y construyo sitios web y aplicaciones para empresas — con el cuidado de alguien que ha fundado dos compañías propias. Fundamentos sólidos de ingeniería, un flujo de trabajo AI-first y cero jerga técnica en el camino.',
    dims: [
      { value: '02', label: 'empresas fundadas' },
      { value: '03', label: 'idiomas de trabajo' },
      { value: '02', label: 'continentes de casa' },
    ],
    cta: { primary: 'Iniciar un proyecto', secondary: 'Ver el trabajo' },
    scale: {
      kicker: 'Micromegas — una nota sobre escalas',
      title: 'Trabajo en todas las escalas.',
      outro:
        'El nombre viene de Micromégas de Voltaire, una historia sobre ver el mismo mundo desde distancias muy distintas. El buen software necesita exactamente eso: cuidado en 1:1, criterio en 1:1000.',
      frames: [
        {
          scale: '1:1',
          title: 'Una línea de código',
          body: 'Todo descansa sobre esta escala. Código legible, probado y honesto — los hábitos que construí entregando sistemas de producción.',
        },
        {
          scale: '1:10',
          title: 'Una interfaz',
          body: 'Componentes que la gente realmente entiende. Como ex profesor, diseño interfaces como explicaba ideas: con claridad.',
        },
        {
          scale: '1:100',
          title: 'Un producto',
          body: 'Arquitectura, rendimiento, despliegue — las decisiones poco glamorosas que definen si el software sobrevive al contacto con la realidad.',
        },
        {
          scale: '1:1000',
          title: 'Un negocio',
          body: 'Fundé dos empresas y construí su presencia digital. Sé lo que cuesta el software, lo que produce, y cuándo vale la pena construirlo.',
        },
      ],
    },
    services: {
      kicker: 'Servicios',
      title: 'Lo que construyo',
      items: [
        {
          title: 'Sitios web y rediseños',
          desc: 'Sitios rápidos, precisos y amigables con los buscadores, que muestran un negocio como se merece.',
        },
        {
          title: 'Aplicaciones y MVPs',
          desc: 'Productos full-stack para fundadores — alcance honesto, entrega lista para producción.',
        },
        {
          title: 'IA y automatización',
          desc: 'Integraciones de IA, herramientas internas y flujos que eliminan horas de trabajo manual, silenciosamente.',
        },
      ],
      link: 'Todos los servicios',
    },
    work: {
      kicker: 'Trabajo seleccionado',
      title: 'Pruebas, no promesas',
      link: 'Todos los proyectos',
    },
    story: {
      kicker: 'Sobre mí',
      title: 'Profesor. Fundador. Ingeniero.',
      body: 'Enseñé en una universidad de Medellín, me volví desarrollador en Alemania, fundé dos empresas, y hoy construyo software con IA como socio diario. El hilo conductor: hacer entendible lo complicado.',
      link: 'Leer la historia',
    },
    testimonial: {
      kicker: 'Trabajar juntos',
      quote: '', // TODO-CONTENT: testimonio pendiente
      attribution: '',
    },
  },

  services: {
    kicker: 'Servicios',
    title: 'Alcance claro. Asesoría honesta. Calidad de producción.',
    intro:
      'Cada proyecto empieza con una conversación sobre lo que su negocio realmente necesita — a veces eso significa menos software del que esperaba. Esto es lo que construyo, y cómo.',
    items: [
      {
        id: 'websites',
        title: 'Sitios web y rediseños',
        desc: 'Un sitio web es su empleado más paciente — debe ser rápido, preciso y persuasivo. Diseño y construyo sitios que cargan al instante, posicionan bien y se leen con claridad en cada idioma que hablan sus clientes. También tomo sitios existentes que se volvieron un desorden y les doy una base sólida.',
        deliverables: [
          'Diseño y desarrollo de una sola mano',
          'Core Web Vitals y SEO excelentes',
          'Multilingüe (ES / EN / DE)',
          'Accesible y respetuoso de los datos',
        ],
      },
      {
        id: 'apps',
        title: 'Aplicaciones web y MVPs',
        desc: 'Para fundadores y equipos que necesitan software de verdad: sistemas de reservas, portales de clientes, dashboards, productos. Defino el alcance con honestidad, construyo con disciplina de producción y entrego algo que puede poner frente a usuarios — no un demo que reescribirá después.',
        deliverables: [
          'Desarrollo full-stack',
          'Alcance honesto e hitos fijos',
          'Listo para producción desde el día uno',
          'Documentación y entrega',
        ],
      },
      {
        id: 'ai',
        title: 'Integración de IA y automatización',
        desc: 'Los proyectos de IA más valiosos rara vez son chatbots. Encuentro el trabajo repetitivo dentro de su negocio — documentos, correos, digitación, reportes — y construyo flujos de IA y herramientas internas que lo eliminan. Uso estos sistemas a diario en mis propias empresas.',
        deliverables: [
          'Flujos e integraciones de IA',
          'Herramientas internas y dashboards',
          'Automatización de procesos',
          'Valor práctico y medible',
        ],
      },
      {
        id: 'consulting',
        title: 'Consultoría y refactorización',
        desc: 'Un segundo par de ojos senior: revisar una base de código existente, destrabar un proyecto estancado o asesorar sobre cómo la IA encaja realmente en su proceso de desarrollo. Directo, sin jerga, accionable.',
        deliverables: [
          'Revisión y refactorización de código',
          'Estrategia técnica',
          'Asesoría en flujos AI-first',
        ],
      },
    ],
    deliverablesLabel: 'Incluye',
    process: {
      kicker: 'El proceso',
      title: 'Así es trabajar conmigo',
      intro: 'Sin agencias, sin intermediarios, sin sorpresas. Usted habla con la persona que lo construye.',
      steps: [
        {
          title: 'Conversación',
          body: 'Hablamos primero de su negocio, después del software. Gratis, directo, en español, inglés o alemán.',
        },
        {
          title: 'Propuesta',
          body: 'Recibe un alcance por escrito en lenguaje claro: qué se construye, cuánto cuesta, cuándo se entrega.',
        },
        {
          title: 'Construcción',
          body: 'Ciclos cortos, progreso visible. Ve el producto real temprano y a menudo — nunca una sorpresa al final.',
        },
        {
          title: 'Entrega',
          body: 'Desplegado, documentado, explicado. Todo es suyo, y usted entiende lo que es suyo.',
        },
      ],
    },
  },

  work: {
    kicker: 'Proyectos',
    title: 'Proyectos reales, riesgo real',
    intro:
      'La prueba más fuerte que puedo ofrecer: fundé dos empresas y construí su presencia digital yo mismo. Cuando construyo para usted, construyo con el mismo sentido de dueño.',
    caseLabel: 'Caso de estudio',
    visitLabel: 'Visitar sitio en vivo',
    readLabel: 'Leer caso de estudio',
    employment: {
      kicker: 'Trayectoria en ingeniería',
      title: 'heatbeat engineering GmbH',
      body: 'Antes de independizarme trabajé como desarrollador full-stack en heatbeat engineering, en Alemania — responsable del ciclo completo de desarrollo: arquitectura de backend, APIs, visualización de datos, frontend, despliegue. Esa disciplina de producción es la base sobre la que descansa todo lo demás.',
      stack: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker', 'D3.js', 'REST APIs', 'DevOps'],
      stackLabel: 'Stack',
    },
    lab: {
      kicker: 'Construyendo ahora',
      title: 'El laboratorio',
      intro:
        'Prototipos funcionales que estoy construyendo en este momento — AI-first, de la idea al software usable en semanas. Pregúnteme por cualquiera.',
      statusLabel: 'Estado',
      items: [
        {
          title: 'App de recordatorios',
          desc: 'Una herramienta de recordatorios calmada y con criterio, que trata la atención como un recurso escaso.', // TODO-CONTENT
          status: 'Prototipo funcional',
        },
        {
          title: 'Calculadora de precios de tatuajes',
          desc: 'Estimaciones de precio instantáneas y transparentes para estudios de tatuaje y sus clientes.', // TODO-CONTENT
          status: 'Prototipo funcional',
        },
        {
          title: 'Buscador de vuelos',
          desc: 'Una búsqueda de vuelos enfocada en rutas que las grandes plataformas manejan mal.', // TODO-CONTENT
          status: 'Prototipo funcional',
        },
        {
          title: 'Guía turística de Medellín',
          desc: 'Una guía de Medellín hecha por alguien que de verdad vive allí.', // TODO-CONTENT
          status: 'Prototipo funcional',
        },
      ],
    },
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      role: 'Fundador · Diseño · Desarrollo',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      title: 'Una clínica que llena su propia agenda',
      summary:
        'Fundé una clínica de fisioterapia y terapia ocupacional en la estación central de Fürth, Alemania — y construí su presencia digital: marca, sitio web y reservas en línea. Cuando el sitio web es la puerta de entrada de su propia empresa, uno aprende qué convierte de verdad.',
      specs: [
        { label: 'Sector', value: 'Salud · Alemania' },
        { label: 'Rol', value: 'Fundador, diseñador, desarrollador' },
        { label: 'Alcance', value: 'Marca · Sitio web · Reservas en línea' },
        { label: 'Estado', value: 'En vivo y operando' },
      ],
      sections: [
        {
          heading: 'El problema',
          body: 'Las clínicas de terapia en Alemania funcionan a punta de llamadas y listas de espera. Los pacientes quieren saber tres cosas rápido: qué tratan, quién lo trata y cuándo hay cita. La mayoría de los sitios de clínicas no responde ninguna.',
        },
        {
          heading: 'La construcción',
          body: 'Un sitio rápido, cálido y mobile-first, con toda la oferta de fisioterapia y terapia ocupacional explicada con claridad, el equipo presentado personalmente y la reserva en línea al frente y al centro — las citas se agendan sin una sola llamada, y la clínica puede prometer tiempos de espera cortos.',
        },
        {
          heading: 'La perspectiva de dueño',
          body: 'Como es mi propia empresa, cada decisión fue una decisión de negocio: qué tratamientos destacar, cómo formular las preguntas de seguros, dónde la fricción de reserva pierde un paciente. Esa perspectiva entra hoy en cada proyecto de cliente.',
        },
      ],
      outcomeKicker: 'Lo que hace por el negocio',
      outcomes: [
        'Las citas se reservan en línea, a toda hora, sin ping-pong telefónico',
        'La clínica presenta a todo su equipo y cada especialidad con claridad',
        'Un negocio real funciona sobre este sitio todos los días',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      role: 'Cofundador · Marca · Diseño · Desarrollo',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      title: 'Un refugio de montaña con puerta digital',
      summary:
        'Ikuna es un refugio de glamping en las montañas de San Vicente Ferrer, Antioquia — a una hora de Medellín. Como cofundador construí la marca y el sitio web: una experiencia calmada y visual, en español, que convierte las ganas de escaparse en reservas.',
      specs: [
        { label: 'Sector', value: 'Hospitalidad · Colombia' },
        { label: 'Rol', value: 'Cofundador, marca, desarrollador' },
        { label: 'Alcance', value: 'Marca · Sitio web · Flujo de reservas' },
        { label: 'Estado', value: 'En vivo y operando' },
      ],
      sections: [
        {
          heading: 'El problema',
          body: 'El glamping vende una sensación. Un sitio lento y recargado mata esa sensación antes de que el huésped vea las montañas. El sitio tenía que ser atmosférico, rápido en conexiones móviles rurales e inconfundiblemente local.',
        },
        {
          heading: 'La construcción',
          body: 'Un sitio visual, en español primero, construido para el rendimiento: primero la historia del lugar («conecta con lo esencial»), después los detalles prácticos, y la reserva siempre a un toque de distancia. Cada fotografía, palabra y sección sirve a la misma calma que el refugio mismo.',
        },
        {
          heading: 'La perspectiva de dueño',
          body: 'La hospitalidad me enseñó honestidad de conversión: nadie reserva por una lista de características. Reservan porque la página les hizo sentir el lugar. Esa lección la llevo a cada sitio de marketing que construyo.',
        },
      ],
      outcomeKicker: 'Lo que hace por el negocio',
      outcomes: [
        'Los huéspedes llegan a la reserva ya convencidos de la experiencia',
        'Corre rápido en las conexiones móviles que los huéspedes realmente tienen',
        'La marca — del nombre a la tipografía — nació junto con el sitio',
      ],
    },
  },

  caseMeta: {
    kicker: 'Caso de estudio',
    specLabel: 'Especificación',
    backLabel: 'Todos los proyectos',
    nextLabel: 'Siguiente caso',
  },

  about: {
    kicker: 'Sobre mí',
    title: 'Hacer entendible lo complicado',
    intro:
      'Esa frase ha sido mi descripción de trabajo tres veces: como profesor, como fundador y ahora como ingeniero. Solo cambió el material.',
    portraitAlt: 'Retrato de Axel Braunschweiger',
    chapters: [
      {
        period: 'La base',
        title: 'Profesor de inglés, economía y filosofía',
        body: 'Estudié inglés, economía y filosofía y me hice profesor. Pararse frente a un salón enseña algo que ningún bootcamp puede: tomar algo complejo y hacerlo aterrizar. Esa habilidad la uso todos los días — en revisiones de código, en propuestas, explicándole IA a empresarios escépticos.',
      },
      {
        period: 'Medellín',
        title: 'Universidad EAFIT, Colombia',
        body: 'Me mudé a Colombia y enseñé dos años en la Universidad EAFIT de Medellín. En algún punto entre clases empecé a escribir código — y me di cuenta de que no quería parar. Completé el bootcamp presencial de Make it Real: doce semanas intensas de Ruby, Rails, JavaScript y proyectos reales.',
      },
      {
        period: 'Alemania',
        title: 'Desarrollador full-stack en heatbeat engineering',
        body: 'De regreso en Alemania entré a heatbeat engineering como desarrollador full-stack: Python, Django, PostgreSQL, React, Docker. Fui responsable de funcionalidades a lo largo de todo el ciclo — arquitectura, APIs, visualización de datos, despliegue. Software de producción, responsabilidad de producción.',
      },
      {
        period: 'Fundar',
        title: 'Dos empresas propias',
        body: 'Fundé una clínica de fisioterapia y terapia ocupacional en Fürth, y cofundé Ikuna Glamping en las montañas colombianas — y construí la presencia digital de ambas. Dirigir negocios cambió cómo construyo software: hoy pienso en ingresos, operaciones y confianza del cliente, no solo en funcionalidades.',
      },
      {
        period: 'Ahora',
        title: 'Ingeniero AI-first',
        body: 'Hoy construyo con Claude como socio diario de desarrollo. No como atajo — como multiplicador sobre fundamentos sólidos de ingeniería. Cambió lo que una sola persona puede entregar: sitios de producción, aplicaciones y automatizaciones en semanas, con una calidad que firmo con mi nombre. Este portafolio está construido exactamente así.',
      },
    ],
    now: {
      kicker: 'Hoy',
      title: 'Entre Fürth y Medellín',
      body: 'Divido mi tiempo entre Alemania y Colombia y trabajo con clientes en ambos mundos — en español, inglés o alemán. Esté donde esté, usted habla directamente con la persona que diseña, construye y entrega su software.',
    },
    facts: [
      { label: 'Base', value: 'Fürth (DE) ↔ Medellín (CO)' },
      { label: 'Idiomas', value: 'Español · Inglés · Alemán' },
      { label: 'Enfoque', value: 'Sitios web · Aplicaciones · Flujos de IA' },
      { label: 'Método', value: 'AI-first, con base de ingeniería' },
    ],
  },

  contact: {
    kicker: 'Contacto',
    title: 'Cuénteme sobre su proyecto',
    body: 'Un correo honesto es suficiente: qué hace su negocio, qué necesita y dónde le duele hoy. Leo todo yo mismo y respondo personalmente — normalmente dentro de un día hábil.',
    emailLabel: 'Escriba a',
    email: 'axelbraunschweiger@gmail.com', // TODO-CONTENT: cambiar a correo del dominio cuando exista
    availability: 'Actualmente aceptando proyectos',
    languagesNote: 'En español, inglés o alemán — el que le quede más fácil.',
  },

  cta: {
    kicker: 'Siguiente paso',
    title: 'Construyamos algo que se pague solo.',
    body: 'Un sitio web, una aplicación, una automatización — o simplemente una segunda opinión. La primera conversación es gratis y refrescantemente libre de jerga.',
    button: 'Iniciar un proyecto',
  },

  legal: {
    imprint: {
      title: 'Aviso legal',
      body: [
        'Información según § 5 TMG (ley alemana de telemedios).',
        'Axel Braunschweiger', // TODO-CONTENT: datos completos del aviso legal
        'Contacto: axelbraunschweiger@gmail.com',
        'Responsable del contenido según § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      body: [
        'Este sitio web es privado por diseño: no usa cookies, no tiene herramientas de analítica y no carga recursos de terceros. Todas las fuentes y archivos se sirven desde el propio servidor del sitio.',
        'Archivos de registro del servidor: el proveedor de hosting puede almacenar automáticamente datos técnicos de acceso (como dirección IP, fecha y hora, tipo de navegador) por seguridad y operación. Estos datos no se cruzan con otras fuentes y se eliminan según la política de retención del proveedor.',
        'Contacto por correo: si me escribe, su mensaje y dirección se usan únicamente para responderle. Responsable: Axel Braunschweiger.', // TODO-CONTENT: completar cuando el aviso legal y el hosting sean finales
        'Usted tiene derecho a acceder, corregir y eliminar los datos personales que le conciernen (art. 15–17 RGPD).',
      ],
    },
  },

  notFound: {
    title: 'Hoja no encontrada',
    body: 'Esta página no existe en el cuaderno de trabajo. Puede que el plano haya sido revisado o movido.',
    link: 'Volver a la hoja 01',
  },
};
