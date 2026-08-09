import type { SiteContent } from './types';

export const es: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio: rediseño e IA',
      description:
        'Modernizamos sitios web desactualizados, creamos webs con asistente de IA integrado y desarrollamos aplicaciones con backend real. En semanas.',
    },
    relaunch: {
      title: 'Rediseño y modernización web | RENOVO',
      description:
        'Su web se ve y carga como si fuera de hace años. La reconstruimos con estándares actuales: rápida, mobile-first y multilingüe, en tres a cinco semanas.',
    },
    ai: {
      title: 'Sitios web con asistente de IA integrado | RENOVO',
      description:
        'Creamos sitios web que incluyen un asistente de chat basado en su propio contenido, que responde preguntas sobre servicios, precios y horarios las 24 horas.',
    },
    apps: {
      title: 'Aplicaciones web con backend real | RENOVO',
      description:
        'Sistemas de reservas, portales, dashboards y MVPs. Aplicaciones full-stack con base de datos, API y autenticación: software de producción, no prototipos.',
    },
    work: {
      title: 'Proyectos — sitios web del estudio | RENOVO',
      description:
        'Proyectos seleccionados: la web de una clínica de fisioterapia, una marca de hospitalidad en Antioquia, y lo que el estudio construye actualmente.',
    },
    'case-physio': {
      title: 'Caso: web para una clínica de fisioterapia | RENOVO',
      description:
        'Diseño y desarrollo web para una clínica de fisioterapia en Fürth, Alemania — cada tratamiento explicado con claridad y construido mobile-first.',
    },
    'case-ikuna': {
      title: 'Caso: Ikuna Glamping — marca y web',
      description:
        'Marca y sitio web visual para un refugio de glamping en Antioquia — rápido en conexiones móviles rurales y con la atmósfera para vender la experiencia.',
    },
    about: {
      title: 'El estudio — así trabaja RENOVO | AI Web Studio',
      description:
        'Un estudio web AI-first entre Alemania y Colombia. Cómo trabajamos, en qué creemos al construir sitios web y quién está detrás del estudio.',
    },
    contact: {
      title: 'Iniciar un proyecto — revisión web gratuita | RENOVO',
      description:
        'Envíenos su sitio web actual y reciba una valoración honesta de qué lo está frenando. Respondemos personalmente en español, inglés o alemán.',
    },
    check: {
      title: 'Análisis web gratuito — velocidad y SEO',
      description:
        'Analice su web gratis: velocidad, accesibilidad, calidad técnica y preparación para buscadores, medido por Google PageSpeed Insights y explicado claro.',
    },
    imprint: {
      title: 'Aviso legal — información según § 5 DDG | RENOVO',
      description:
        'Aviso legal de RENOVO AI Web Studio conforme al § 5 DDG: prestador del servicio, datos de contacto, información fiscal y responsabilidad editorial.' },
    privacy: {
      title: 'Política de privacidad — sin cookies | RENOVO',
      description: 'Cómo trata los datos RENOVO: sin cookies, sin analítica, fuentes propias, y qué transmiten el análisis web y el asistente de chat. Sus derechos bajo el RGPD.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Rediseño' },
      { page: 'ai', label: 'Asistente IA' },
      { page: 'apps', label: 'Aplicaciones' },
      { page: 'work', label: 'Proyectos' },
      { page: 'about', label: 'Estudio' },
      { page: 'check', label: 'Análisis gratis' },
    ],
    cta: 'Iniciar un proyecto',
    menuLabel: 'Navegación principal',
    homeAria: 'RENOVO — inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  footer: {
    blurb:
      'Un estudio web AI-first. Reconstruimos sitios web desactualizados, integramos asistentes de IA y desarrollamos aplicaciones con backend real.',
    servicesLabel: 'Servicios',
    studioLabel: 'Estudio',
    contactLabel: 'Contacto',
    locations: 'Fürth · área metropolitana de Núremberg ↔ Medellín, Colombia',
    legalImprint: 'Aviso legal',
    legalPrivacy: 'Privacidad',
    colophon: 'Hecho a mano con un flujo de trabajo AI-first. Sin rastreadores, sin cookies.',
  },

  home: {
    eyebrow: 'Rediseño web · Asistentes de IA · Aplicaciones web',
    headline: ['Su sitio web,', 'reconstruido para', 'la era de la IA.'],
    sub: 'Modernizamos sitios web desactualizados, creamos webs con un asistente de IA que responde a sus clientes a toda hora, y desarrollamos aplicaciones con backend real — en semanas, no en trimestres.',
    ctaPrimary: 'Pedir una revisión gratuita',
    ctaSecondary: 'Ver proyectos',
    checkNote: 'Gratis, sin registro. Las mediciones de Google en unos 30 segundos.',
    facts: [
      { value: '3–5 semanas', label: 'del inicio al lanzamiento' },
      { value: '100/100', label: 'puntuación Lighthouse habitual' },
      { value: 'ES · EN · DE', label: 'multilingüe de fábrica' },
    ],
    transformer: {
      before: 'Antes',
      after: 'Después',
      hint: 'Arrastre para comparar — así se ve un rediseño.',
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Tres formas de modernizar su presencia web.',
      intro:
        'Cada proyecto empieza con la misma pregunta: ¿qué necesita realmente su negocio para ganar más clientes en línea?',
      more: 'Saber más',
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Negocios reales. Resultados reales.',
      intro: 'Sitios web en los que negocios reales confían todos los días.',
      more: 'Todos los proyectos',
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Cuatro pasos. Sin sobrecoste de agencia.',
      steps: [
        {
          title: 'Revisión gratuita',
          body: 'Envíenos su sitio actual. Recibe una valoración honesta de qué vale la pena cambiar — y qué no.',
        },
        {
          title: 'Propuesta cerrada',
          body: 'Alcance, precio y fecha de lanzamiento en lenguaje claro. Sin facturación por horas ni sorpresas al final.',
        },
        {
          title: 'Construcción',
          body: 'Ve el resultado real desde la primera semana, y cada semana después. Sus comentarios entran de inmediato.',
        },
        {
          title: 'Lanzamiento y entrega',
          body: 'Desplegado, documentado y suyo. Seguimos disponibles para cambios si así lo quiere.',
        },
      ],
    },
    testimonial: { quote: '', attribution: '' }, // TODO-CONTENT
  },

  services: {
    relaunch: {
      navLabel: 'Rediseño',
      cardTitle: 'Rediseño y modernización web',
      cardDesc:
        'Su sitio parece de 2014 y carga igual. Lo reconstruimos — el mismo negocio, con estándares actuales.',
      eyebrow: 'Servicio 01',
      title: 'Un sitio web que por fin está a la altura de su negocio.',
      lead: 'La mayoría de los sitios web de empresa se hicieron hace años, por alguien que ya no está. Cargan lento, se rompen en el móvil y mandan clientes a la competencia sin que usted se entere. Los reconstruimos desde cero — para clínicas, oficios, despachos y comercios en Fürth, Núremberg y su área metropolitana, y en remoto para clientes de cualquier lugar.',
      problem: {
        title: 'Lo que le cuesta una web desactualizada',
        body: 'Los visitantes deciden en segundos. Un sitio lento, recargado o roto en el móvil dice que su negocio se quedó atrás, sea verdad o no. Los buscadores lo posicionan más abajo, así que menos gente lo encuentra. Y cada consulta que no llega es invisible: al cliente que se fue nunca lo ve.',
      },
      solution: {
        title: 'Qué hacemos al respecto',
        body: 'Conservamos lo que funciona de su negocio y reconstruimos todo lo demás: estructura clara, textos honestos, código moderno y rápido, y un diseño que se ve actual durante años, no meses. Su contenido se conserva, su posicionamiento queda protegido, y el nuevo sitio se construye para que alguien sin perfil técnico pueda mantenerlo.',
      },
      includesLabel: 'Qué incluye',
      includes: [
        'Diseño y desarrollo de una sola mano',
        'Mobile-first, probado en dispositivos reales',
        'Excelentes Core Web Vitals y SEO técnico',
        'Multilingüe donde lo necesite (ES / EN / DE)',
        'Contenido existente migrado, sin perder nada',
        'Marcado accesible y hosting respetuoso con los datos',
        'Despliegue, documentación y entrega',
      ],
      forWhomLabel: 'Encaja bien si',
      forWhom: [
        'Su sitio se rediseñó hace más de cuatro años',
        'Se ve mal o es difícil de usar en el móvil',
        'Le da reparo enviar el enlace a un cliente nuevo',
        'Nadie en la empresa sabe cómo cambiar los textos',
      ],
      faqLabel: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Cuánto tarda un rediseño?',
          a: 'La mayoría de sitios de empresa pasan del inicio al lanzamiento en tres a cinco semanas. Los sitios grandes, con muchas páginas o varios idiomas, tardan más — en cualquier caso recibe una fecha cerrada en la propuesta.',
        },
        {
          q: '¿Perderemos nuestro posicionamiento en Google?',
          a: 'No. Las URLs existentes se mapean y redirigen, el contenido y los metadatos se conservan, y el sitio nuevo es técnicamente más sólido que el anterior. El posicionamiento suele mejorar, no caer.',
        },
        {
          q: '¿Podemos editar el sitio nosotros mismos?',
          a: 'Sí. Acordamos desde el principio qué partes quiere cambiar usted, preparamos el sitio en consecuencia y se lo explicamos en la entrega.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Cada proyecto se presupuesta individualmente y recibe un precio cerrado antes de empezar. La revisión gratuita le indica el rango aproximado, sin compromiso.',
        },
      ],
    },

    ai: {
      navLabel: 'Asistente IA',
      cardTitle: 'Sitios web con asistente de IA integrado',
      cardDesc:
        'Su nuevo sitio puede incluir un asistente de chat que responde preguntas de clientes desde su propio contenido, de día y de noche.',
      eyebrow: 'Servicio 02',
      title: 'Un sitio web que responde preguntas mientras usted duerme.',
      lead: 'Las mismas preguntas llegan una y otra vez: qué ofrecen, cuánto cuesta, cuál es el horario, atienden mi seguro. Construimos sitios web con un asistente de chat que las responde desde su propio contenido — sus clientes reciben respuesta al instante y usted recupera sus noches.',
      problem: {
        title: 'Las preguntas no paran',
        body: 'Cada consulta que la web podría haber respondido termina en una llamada, un correo o un cliente perdido que no tuvo ganas de preguntar. Fuera del horario es peor: quien mira su sitio a las nueve de la noche simplemente se va, y usted nunca se entera.',
      },
      solution: {
        title: 'Un asistente que sí conoce su negocio',
        body: 'Cuando construimos su sitio, podemos incluir un asistente de chat basado en su propio contenido: servicios, precios, horarios y preguntas frecuentes. Responde en el idioma del visitante, lo lleva a la página correcta y le indica cómo contactarles cuando una pregunta necesita una persona. Usted controla qué sabe y qué dice.',
      },
      includesLabel: 'Qué incluye',
      includes: [
        'Un asistente de chat integrado en el sitio que entregamos',
        'Basado en sus servicios, precios y preguntas frecuentes',
        'Responde en español, inglés y alemán',
        'Deriva a correo o teléfono cuando corresponde',
        'Usted define el tono y los límites',
        'Fácil de actualizar cuando su negocio cambia',
      ],
      forWhomLabel: 'Encaja bien si',
      forWhom: [
        'Responde las mismas preguntas todas las semanas',
        'Sus clientes visitan la web fuera del horario comercial',
        'Sus servicios necesitan explicación antes de que alguien reserve',
        'Atiende clientes en más de un idioma',
      ],
      faqLabel: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Pueden añadir un asistente a nuestra web actual?',
          a: 'Nos enfocamos en construir sitios nuevos que incluyen el asistente desde el principio — así encaja con el diseño, el contenido y la estructura. Si ya tiene un sitio, la recomendación honesta suele ser un rediseño con el asistente incluido.',
        },
        {
          q: '¿Se inventa respuestas?',
          a: 'Responde a partir del contenido que usted le da y está configurado para decir que no sabe y derivar a un contacto real, en lugar de inventar. Eso lo probamos juntos antes del lanzamiento.',
        },
        {
          q: '¿Cumple con la protección de datos?',
          a: 'La configuración se elige teniendo en cuenta los requisitos de protección de datos alemanes y europeos, se declara en su política de privacidad y se limita a los datos mínimos necesarios. Revisamos los detalles con usted antes de lanzar.',
        },
        {
          q: '¿Cuánto cuesta mantenerlo?',
          a: 'Hay un coste mensual reducido por el asistente, según cuántas conversaciones atienda. En la propuesta recibe una estimación realista.',
        },
      ],
    },

    apps: {
      navLabel: 'Aplicaciones',
      cardTitle: 'Aplicaciones web con backend real',
      cardDesc:
        'Sistemas de reservas, portales de clientes, dashboards, MVPs — software de producción con base de datos detrás, no prototipos.',
      eyebrow: 'Servicio 03',
      title: 'Cuando una web ya no alcanza.',
      lead: 'Algunos negocios necesitan software, no páginas: algo que guarde datos, tenga usuarios, envíe correos y haga trabajo real. Construimos aplicaciones web full-stack — con base de datos, API y autenticación — y las llevamos a producción.',
      problem: {
        title: 'Las hojas de cálculo dejan de escalar',
        body: 'Las reservas viven en el calendario de una sola persona. Los datos de clientes están en una hoja en la que nadie confía. Los procesos existen solo en la cabeza de alguien. Funciona hasta que deja de funcionar — y el software estándar o no encaja con su forma de trabajar, o cuesta más cada año a medida que crece.',
      },
      solution: {
        title: 'Software hecho a la medida de su negocio',
        body: 'Construimos la aplicación que su negocio realmente necesita: reservas y agenda, portales de clientes, dashboards internos, o la primera versión de un producto que quiere llevar al mercado. Un flujo de trabajo AI-first significa que lo que antes le tomaba un trimestre a un equipo ahora toma semanas — con los fundamentos de ingeniería intactos debajo: modelo de datos serio, autenticación, pruebas y un despliegue confiable.',
      },
      includesLabel: 'Qué incluye',
      includes: [
        'Desarrollo full-stack: frontend, API, base de datos',
        'Cuentas de usuario y autenticación donde haga falta',
        'Alcance honesto con hitos fijos',
        'Despliegue en producción, monitoreo y copias de seguridad',
        'Documentación y una entrega de verdad',
        'Construido para crecer más allá de sus primeros cien clientes',
      ],
      forWhomLabel: 'Encaja bien si',
      forWhom: [
        'Lleva el negocio con hojas de cálculo y calendarios',
        'El software estándar casi encaja, pero no del todo',
        'Es fundador y necesita una primera versión frente a usuarios',
        'Su equipo repite el mismo proceso manual todos los días',
      ],
      faqLabel: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Cuánto tarda un MVP?',
          a: 'Una primera versión enfocada suele tomar de cuatro a ocho semanas. Recortamos el alcance a propósito hasta lo más pequeño que sea genuinamente útil, y seguimos construyendo cuando usuarios reales ya lo han tocado.',
        },
        {
          q: '¿De quién es el código?',
          a: 'Suyo, por completo. Todo se entrega con documentación y nada queda atado a nosotros.',
        },
        {
          q: '¿Qué tecnología usan?',
          a: 'Herramientas probadas y sanamente aburridas: TypeScript, frameworks web modernos, PostgreSQL, despliegue en contenedores. El stack se elige según el proyecto y para que cualquier desarrollador competente pueda mantenerlo después.',
        },
        {
          q: '¿Pueden retomar un proyecto existente?',
          a: 'A menudo sí. Empezamos con una revisión breve del código y le decimos honestamente si continuar o reconstruir es la mejor inversión.',
        },
      ],
    },
  },

  work: {
    eyebrow: 'Proyectos',
    title: 'Sitios web con los que las empresas trabajan cada día.',
    intro:
      'Dos negocios en marcha cuya presencia digital diseñamos y construimos — y lo que el estudio está construyendo ahora.',
    visitLabel: 'Ver sitio en vivo',
    readLabel: 'Leer el caso',
    buildsEyebrow: 'Proyectos actuales',
    buildsTitle: 'Lo que estamos construyendo ahora',
    buildsIntro:
      'Proyectos de clientes en curso y los productos que desarrollamos internamente. Pregúntenos por cualquiera de ellos.',
    builds: [
      {
        key: 'davidleutert',
        client: 'David Leutert',
        sector: 'Ilustración y lettering · Berlín',
        desc: 'Un portafolio y archivo bilingüe para un ilustrador y artista de lettering de Berlín: cerca de 190 páginas de trabajo por encargo y personal, con una portada que reproduce su proceso real de dibujo — boceto a lápiz, tinta, color plano, impresión final.',
        status: 'En revisión del cliente',
        url: 'https://micromegass.github.io/davidleutert/',
        urlLabel: 'Ver la vista previa',
        imageAlt: 'Página de inicio del portafolio de David Leutert con una impresión de lettering a mano',
      },
      {
        key: 'fritzloesel',
        client: 'Fritz Lösel',
        sector: 'Consulta de terapia · Fürth',
        desc: 'Relanzamiento completo para una consulta de terapia sistémica y sexual: serena, clara, en alemán e inglés. Sin cookies, sin rastreadores y sin ninguna petición externa — por eso el sitio no necesita aviso de cookies.',
        status: 'Lista para lanzar',
        url: 'https://micromegass.github.io/fritzloesel/',
        urlLabel: 'Ver la vista previa',
        imageAlt: 'Página de inicio del sitio de la consulta de terapia de Fritz Lösel',
      },
      {
        key: 'yosoytattoo',
        client: 'Yo Soy Tattoo Medellín',
        sector: 'Estudio y academia de tatuaje · Medellín',
        desc: 'Un sitio en español con espejo en inglés para un estudio y academia de tatuaje — con un asistente de IA integrado que responde sobre cursos, servicios y ubicación, y deriva a WhatsApp en lugar de adivinar.',
        status: 'Lista para lanzar',
        imageAlt: 'Página de inicio del sitio de Yo Soy Tattoo con el botón del asistente de chat',
      },
      {
        key: 'trazo',
        client: 'Trazo',
        sector: 'Producto del estudio · interno',
        desc: 'Software de precios para tatuadores profesionales. Convierte horas, materiales y complejidad en un rango de precio defendible, muestra exactamente cómo llegó ahí y exporta una cotización con marca propia. Tres idiomas, tres monedas.',
        status: 'En desarrollo',
        imageAlt: 'Una cotización de Trazo que muestra cómo se evaluó y calculó el precio de un tatuaje',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Salud · Alemania',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      imageAlt: 'Sala de tratamiento de la clínica de fisioterapia en Fürth',
      cardTitle: 'Una clínica que se explica con claridad',
      cardDesc:
        'Web y presencia digital para una clínica de fisioterapia y terapia ocupacional en Fürth — cada tratamiento y cada terapeuta, en lenguaje claro.',
      metrics: [
        { value: 'Web', label: 'diseño y desarrollo' },
        { value: 'Mobile-first', label: 'pensada para el móvil' },
      ],
      title: 'Una clínica que se explica con claridad',
      summary:
        'Una clínica de fisioterapia y terapia ocupacional junto a la estación central de Fürth necesitaba más que una tarjeta de presentación en línea. Diseñamos y construimos la web: toda la oferta de tratamientos explicada en lenguaje claro, el equipo presentado de forma personal y todo fácil de encontrar en el móvil.',
      specs: [
        { label: 'Sector', value: 'Salud · Alemania' },
        { label: 'Alcance', value: 'Diseño y desarrollo web' },
        { label: 'Idiomas', value: 'Alemán' },
        { label: 'Estado', value: 'En vivo' },
      ],
      sections: [
        {
          heading: '¿Qué problema quería resolver la clínica?',
          body: 'Quien busca una clínica de terapia quiere saber tres cosas rápido: qué tratan, quién lo trata y cómo contactarlos. La mayoría de webs de clínicas entierra las tres. El sitio tenía que responderlas de inmediato, en el lenguaje que usa un paciente y no en abreviaturas clínicas.',
        },
        {
          heading: '¿Qué construyó RENOVO para la clínica?',
          body: 'Una web rápida, cálida y mobile-first con toda la oferta de fisioterapia y terapia ocupacional, el equipo presentado de forma personal y los datos de contacto siempre a mano. La mayoría de pacientes llega desde el móvil, así que el diseño, las áreas táctiles y la carga se pensaron primero para eso.',
        },
        {
          heading: '¿Por qué funciona?',
          body: 'Cada decisión vino del lado de la clínica, no del diseño: qué tratamientos destacar, cómo formular las preguntas sobre seguros y prescripciones, qué necesita saber un paciente nuevo antes de escribir. El sitio está estructurado para que la clínica añada tratamientos y personas más adelante sin llamar a un desarrollador.',
        },
      ],
      outcomeLabel: 'Lo que hace la web',
      outcomes: [
        'Explica cada tratamiento en un lenguaje que los pacientes entienden',
        'Presenta a todo el equipo y cada especialidad con claridad',
        'Funciona bien en los móviles desde los que llegan los pacientes',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitalidad · Colombia',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      imageAlt: 'El logotipo de Ikuna Glamping en la página de inicio que construimos, sobre un fondo oscuro con textura',
      cardTitle: 'Un refugio de montaña con puerta digital',
      cardDesc:
        'Marca y sitio de reservas visual para un refugio de glamping en Antioquia — rápido para el campo, con la atmósfera suficiente para vender la sensación.',
      metrics: [
        { value: 'Marca + Web', label: 'nuestro alcance' },
        { value: 'Español', label: 'hecho para su mercado' },
      ],
      title: 'Un refugio de montaña con puerta digital',
      summary:
        'Ikuna es un refugio de glamping en las montañas de San Vicente Ferrer, Antioquia, a una hora de Medellín. La marca y el sitio se construyeron juntos: una experiencia calmada y visual, en español, que convierte las ganas de escaparse en reservas.',
      specs: [
        { label: 'Sector', value: 'Hospitalidad · Colombia' },
        { label: 'Alcance', value: 'Marca · Web · Flujo de reservas' },
        { label: 'Idiomas', value: 'Español' },
        { label: 'Estado', value: 'En vivo y operando' },
      ],
      sections: [
        {
          heading: '¿Qué problema quería resolver el refugio?',
          body: 'El glamping vende una sensación. Un sitio lento y recargado la destruye antes de que el huésped vea las montañas. El sitio tenía que ser atmosférico, rápido en las conexiones móviles rurales que la gente realmente usa, e inconfundiblemente local en vez de una plantilla genérica de reservas.',
        },
        {
          heading: '¿Qué construyó RENOVO para Ikuna?',
          body: 'Un sitio visual, en español primero, construido para el rendimiento: primero la historia del lugar, después los detalles prácticos, y la reserva siempre a un toque. Cada fotografía, palabra y sección sirven a la misma calma que el refugio mismo.',
        },
        {
          heading: '¿Por qué funciona?',
          body: 'Nadie reserva un retiro por una lista de características. Reservan porque la página les hizo sentir el lugar — así que el diseño gasta su presupuesto en atmósfera y velocidad, y elimina todo lo que compita con la decisión de venir.',
        },
      ],
      outcomeLabel: 'Lo que aporta al negocio',
      outcomes: [
        'Los huéspedes llegan al paso de reserva ya convencidos',
        'Corre rápido en las conexiones móviles que los huéspedes realmente tienen',
        'La marca, del nombre a la tipografía, nació junto con el sitio',
      ],
    },
  },

  caseMeta: {
    eyebrow: 'Caso de estudio',
    specLabel: 'El proyecto de un vistazo',
    backLabel: 'Todos los proyectos',
    nextLabel: 'Siguiente caso',
  },

  about: {
    eyebrow: 'El estudio',
    title: 'Estudio pequeño. Trabajo senior. Flujo AI-first.',
    lead: 'RENOVO es un estudio web deliberadamente pequeño que trabaja entre Alemania y Colombia. Pequeño significa que siempre habla con la persona que construye su proyecto. AI-first significa que lo que antes le tomaba un trimestre a un equipo ahora toma semanas — sin renunciar a los fundamentos de ingeniería que hay debajo.',
    principlesLabel: 'Cómo trabajamos',
    principles: [
      {
        title: 'Le decimos qué no construiríamos',
        body: 'A veces la respuesta honesta es que necesita menos software del que esperaba, o algo distinto por completo. Esa respuesta llega antes que la factura.',
      },
      {
        title: 'Ve el resultado real desde temprano',
        body: 'Nada de presentaciones haciendo las veces de progreso. Desde la primera semana hay un sitio o una aplicación funcionando en una URL real, y mejora cada semana.',
      },
      {
        title: 'Lenguaje claro, siempre',
        body: 'Nunca debería necesitar un traductor para entender por qué está pagando. Cada propuesta, actualización y entrega se escribe para que un dueño sin perfil técnico la siga.',
      },
      {
        title: 'La velocidad es una función',
        body: 'Cada sitio que entregamos apunta a las mejores puntuaciones de Lighthouse. La velocidad no es vanidad: decide su posicionamiento, cuánto se quedan los visitantes y cuántos se vuelven clientes.',
      },
    ],
    personEyebrow: 'Detrás del estudio',
    personTitle: 'Axel Braunschweiger',
    personLead:
      'Profesor, docente universitario, desarrollador, fundador — el camino hasta aquí no fue una línea recta, y resulta que ese es justamente el punto. Dirigir dos negocios enseña qué tiene que rendir el software; enseñar enseña a explicarlo sin jerga.',
    portraitAlt: 'Retrato de Axel Braunschweiger, fundador de RENOVO',
    timelineLabel: 'El camino hasta aquí',
    timeline: [
      {
        period: 'La base',
        title: 'Profesor de inglés, economía y filosofía',
        body: 'Estudió inglés, economía y filosofía, y luego enseñó. Pararse frente a un salón enseña algo que ningún bootcamp puede: cómo hacer que algo complejo aterrice de verdad. Esa habilidad aparece todos los días, en las propuestas y al explicar IA a empresarios escépticos.',
      },
      {
        period: 'Medellín',
        title: 'Docente en la Universidad EAFIT, Colombia',
        body: 'Dos años enseñando en la Universidad EAFIT de Medellín. En algún punto entre clases llegaron las primeras líneas de código — y después el bootcamp presencial de Make it Real: doce semanas intensivas de Ruby, Rails, JavaScript y proyectos reales.',
      },
      {
        period: 'Alemania',
        title: 'Desarrollador full-stack en heatbeat engineering',
        body: 'Desarrollo full-stack en heatbeat engineering GmbH: Python, Django, PostgreSQL, React, Docker. Responsabilidad sobre funcionalidades en todo el ciclo — arquitectura, APIs, visualización de datos, despliegue. Software de producción, responsabilidad de producción.',
      },
      {
        period: 'Fundar',
        title: 'Dos empresas, dos sitios web',
        body: 'Fundó una clínica de fisioterapia y terapia ocupacional en Fürth y cofundó Ikuna Glamping en las montañas colombianas, construyendo la presencia digital de ambas. Dirigir negocios cambia cómo se construye software: se empieza a pensar en ingresos, operaciones y confianza del cliente, no en funcionalidades.',
      },
      {
        period: 'Hoy',
        title: 'RENOVO',
        body: 'El estudio junta las dos mitades: fundamentos sólidos de ingeniería con un flujo de trabajo AI-first, dirigido a negocios que necesitan que su presencia web por fin haga su trabajo. Este sitio está construido exactamente así.',
      },
    ],
    facts: [
      { label: 'Con base en', value: 'Fürth, Alemania ↔ Medellín, Colombia' },
      { label: 'Idiomas de trabajo', value: 'Español · Inglés · Alemán' },
      { label: 'Enfoque', value: 'Rediseños · Asistentes de IA · Aplicaciones' },
      { label: 'Método', value: 'AI-first, con base de ingeniería' },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Envíenos su sitio web. Reciba una valoración honesta.',
    body: 'Basta un correo con la dirección de su sitio actual y qué le molesta de él. Recibe una revisión breve y gratuita de qué lo está frenando y qué implicaría realmente un rediseño — sin presentación de ventas, sin compromiso.',
    emailLabel: 'Escriba a',
    availability: 'Actualmente aceptando proyectos',
    languagesNote: 'En español, inglés o alemán — el que le resulte más fácil.',
    reviewTitle: 'Qué cubre la revisión gratuita',
    reviewBody:
      'Velocidad y comportamiento en el móvil, cómo aparece en las búsquedas, qué tan claro explica el sitio lo que usted hace, y los dos o tres cambios que más diferencia harían. Si un rediseño no le conviene, se lo diremos.',
    includeTitle: 'Qué incluir en su primer correo',
    include: [
      'La dirección de su web actual, si la tiene',
      'Qué hace su negocio, en una o dos frases',
      'Qué le molesta hoy del sitio',
      'Más o menos cuándo querría lanzarlo',
      'Si necesita más de un idioma',
    ],
    nextTitle: 'Qué pasa después',
    next: [
      {
        title: 'Respuesta, normalmente en un día hábil',
        body: 'De la persona que construiría el proyecto, no de un buzón comercial. Si no somos lo que necesita, se lo decimos pronto y le indicamos otra opción.',
      },
      {
        title: 'Una llamada corta si tiene sentido',
        body: 'Treinta minutos para entender el negocio detrás de la web. Sin presentación, sin presión y sin coste.',
      },
      {
        title: 'Una propuesta escrita con precio cerrado',
        body: 'Alcance, precio y fecha de lanzamiento en lenguaje claro, para que decida con todo delante.',
      },
    ],
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Averigüemos qué podría estar haciendo su web por usted.',
    body: 'Un rediseño, un asistente de IA, una aplicación web — o simplemente una segunda opinión honesta. La primera conversación es gratis y refrescantemente libre de jerga.',
    button: 'Iniciar un proyecto',
  },

  check: {
    eyebrow: 'Análisis web gratuito',
    title: '¿Qué tan sana está su web, de verdad?',
    lead: 'Escriba su dirección y reciba en medio minuto las mediciones de Google: velocidad de carga, accesibilidad, calidad técnica y preparación para buscadores — con los mayores problemas explicados en lenguaje claro.',
    inputLabel: 'La dirección de su web',
    placeholder: 'su-empresa.com',
    submit: 'Analizar',
    running: 'Analizando…',
    runningNote:
      'Google está cargando su sitio en un móvil simulado. Suele tardar entre 20 y 40 segundos.',
    privacyNote:
      'La dirección que escriba se envía a la API de Google PageSpeed Insights para realizar el análisis. Nosotros no la guardamos.',
    privacyLink: 'Cómo tratamos sus datos',
    scoresLabel: 'Puntuaciones',
    categories: {
      performance: 'Velocidad',
      accessibility: 'Accesibilidad',
      bestPractices: 'Calidad técnica',
      seo: 'Buscadores',
    },
    vitalsLabel: 'Lo que experimentan los visitantes',
    vitals: {
      lcp: 'Contenido principal visible',
      cls: 'Estabilidad del diseño',
      tbt: 'Tiempo de interacción bloqueado',
      si: 'Visualmente completo',
    },
    opportunitiesLabel: 'Mayores oportunidades',
    opportunitiesNone: 'No se encontraron problemas técnicos importantes — buen punto de partida.',
    savingsLabel: 'de ahorro potencial',
    scale: { good: 'Bien', ok: 'Mejorable', poor: 'Deficiente' },
    errors: {
      invalid: 'Eso no parece una dirección válida. Pruebe con algo como su-empresa.com.',
      failed: 'No se pudo completar el análisis. Inténtelo de nuevo en un momento.',
      quota:
        'La cuota gratuita de análisis está agotada en este momento. Inténtelo más tarde o escríbanos y lo hacemos por usted.',
      unreachable:
        'Google no pudo cargar esa dirección. Revise la ortografía y compruebe que el sitio sea accesible públicamente.',
    },
    resultFor: 'Resultados para',
    explainTitle: 'Qué significan realmente las cuatro puntuaciones',
    explain: [
      {
        term: 'Velocidad',
        body: 'Con qué rapidez la página se vuelve utilizable en un móvil de gama media con una conexión normal. Por debajo de 50, los visitantes esperan lo suficiente como para que una parte medible se marche antes de ver nada. Google usa la experiencia de página como señal de posicionamiento desde 2021: las páginas lentas pierden dos veces, porque se quedan menos visitantes y llegan menos.',
      },
      {
        term: 'Accesibilidad',
        body: 'Si las personas que usan lector de pantalla, teclado o mucho zoom pueden usar el sitio de verdad. Los fallos habituales son imágenes sin texto alternativo, campos de formulario sin etiqueta y textos con poco contraste. Cada vez es más una cuestión legal además de una cortesía, tanto en la UE como en Latinoamérica.',
      },
      {
        term: 'Calidad técnica',
        body: 'Higiene técnica: certificado HTTPS válido, sin errores de consola, imágenes bien dimensionadas, sin APIs obsoletas. Una puntuación baja rara vez cuesta posiciones por sí sola, pero es una señal fiable de que el sitio lleva tiempo sin mantenimiento.',
      },
      {
        term: 'Buscadores',
        body: 'Si un buscador puede rastrear la página, entender de qué trata y mostrarla bien: título, meta descripción, indexabilidad, enlaces que funcionan y tamaños de letra legibles. Comprueba que están los fundamentos, no si su contenido merece posicionar — eso lo tiene que juzgar una persona.',
      },
    ],
    afterTitle: 'Los números son solo la mitad de la historia.',
    afterBody:
      'Una puntuación no dice si su web explica bien su negocio, si la encuentra la gente adecuada o si convierte visitantes en clientes. Envíenos la dirección y la miramos en serio — gratis y en lenguaje claro.',
    afterButton: 'Pedir la revisión humana',
    disclaimer:
      'Medido por Google PageSpeed Insights en un móvil de gama media simulado. Los resultados varían entre ejecuciones.',
  },

  chat: {
    launch: 'Pregunte al estudio',
    launchAria: 'Abrir el asistente del estudio',
    title: 'Asistente del estudio',
    subtitle: 'El mismo tipo de asistente que integramos en los sitios de clientes.',
    intro:
      'Hola: respondo preguntas sobre lo que hace el estudio, cómo funciona un proyecto y qué hemos construido. Pregunte lo que quiera, o escriba directamente a Axel si se trata de su propio proyecto.',
    suggestionsLabel: 'Para empezar',
    suggestions: [
      '¿Qué incluye el rediseño de mi sitio web?',
      '¿Cómo funciona el asistente de IA integrado?',
      '¿Cuánto suele durar un proyecto?',
    ],
    inputLabel: 'Su pregunta',
    placeholder: 'Escriba su pregunta…',
    send: 'Enviar',
    close: 'Cerrar el asistente',
    thinking: 'Pensando…',
    replyReady: 'El asistente ha respondido.',
    privacyNote: 'Sus mensajes se envían a Anthropic en EE. UU. para generar la respuesta.',
    privacyLink: 'Qué significa esto',
    disclaimer: 'El asistente puede equivocarse. Nada de esto es vinculante.',
    errors: {
      failed: 'Algo ha fallado de nuestro lado. Inténtelo de nuevo o escríbanos un correo.',
      busy: 'El asistente está ocupado ahora mismo. Inténtelo de nuevo en un momento.',
      rateLimited: 'Son muchas preguntas en una hora. Escríbanos un correo, por favor.',
      tooLong: 'Esta conversación se ha alargado. Empiece una nueva o escríbanos un correo.',
      offline: 'No se puede contactar con el asistente. Escríbanos un correo, por favor.',
    },
  },

  legal: {
    imprint: {
      title: 'Aviso legal',
      intro: 'Información legal según § 5 DDG (Ley alemana de Servicios Digitales).',
      sections: [
        {
          heading: 'Prestador del servicio',
          body: [
            'RENOVO — AI Web Studio', // TODO-CONTENT: denominación exacta si difiere
            'Titular: Axel Braunschweiger', // TODO-CONTENT: la dirección postal completa es obligatoria por ley
            '[Calle y número]',
            '[Código postal] Fürth, Alemania',
          ],
        },
        {
          heading: 'Contacto',
          body: [
            'Correo: axelbraunschweiger@gmail.com', // TODO-CONTENT: correo profesional + teléfono
            'Teléfono: [obligatorio — debe indicarse un teléfono u otro canal igual de directo]',
          ],
        },
        {
          heading: 'IVA',
          body: [
            'Número de identificación fiscal según § 27a UStG: [NIF-IVA]', // TODO-CONTENT
            'Si aplica el régimen de pequeño empresario del § 19 UStG, no se repercute IVA y aquí debería figurar esa indicación.',
          ],
        },
        {
          heading: 'Responsable editorial',
          body: ['Axel Braunschweiger, dirección indicada arriba (§ 18 párr. 2 MStV).'],
        },
        {
          heading: 'Resolución de litigios',
          body: [
            'La Comisión Europea facilita una plataforma de resolución de litigios en línea: https://ec.europa.eu/consumers/odr',
            'No estamos obligados ni dispuestos a participar en procedimientos de resolución de litigios ante una junta de arbitraje de consumo (§ 36 VSBG).',
          ],
        },
        {
          heading: 'Responsabilidad por los contenidos',
          body: [
            'Como prestador de servicios somos responsables de los contenidos propios de estas páginas conforme al § 7 párr. 1 DDG y a la legislación general. Según los §§ 8 a 10 DDG no estamos obligados a supervisar la información de terceros transmitida o almacenada, ni a investigar circunstancias que apunten a una actividad ilícita.',
            'Las obligaciones de retirar o bloquear el uso de información conforme a la legislación general no se ven afectadas. Una responsabilidad al respecto solo es posible desde el momento en que se conoce una infracción concreta. Al tener conocimiento de tales infracciones, retiraremos los contenidos de inmediato.',
          ],
        },
        {
          heading: 'Responsabilidad por los enlaces',
          body: [
            'Nuestro sitio contiene enlaces a webs externas sobre cuyo contenido no tenemos influencia, por lo que no podemos asumir responsabilidad alguna sobre esos contenidos ajenos. Del contenido de las páginas enlazadas responde siempre su respectivo prestador u operador.',
            'Las páginas enlazadas se revisaron en busca de posibles infracciones en el momento de enlazarlas; no se detectaron contenidos ilícitos. Un control permanente de las páginas enlazadas no es exigible sin indicios concretos de infracción. Al conocer infracciones, retiraremos dichos enlaces de inmediato.',
          ],
        },
        {
          heading: 'Derechos de autor',
          body: [
            'Los contenidos y obras creados por nosotros en estas páginas están sujetos a la ley alemana de derechos de autor. La reproducción, edición, distribución y cualquier forma de explotación fuera de los límites del derecho de autor requieren nuestro consentimiento por escrito.',
            'Las imágenes de proyectos se publican con permiso de las empresas correspondientes y siguen siendo de su propiedad.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      intro:
        'Este sitio está construido para recoger la menor cantidad de datos posible. No usa cookies, no ejecuta analítica ni rastreo, y no carga fuentes ni scripts desde servidores de terceros. Hay dos excepciones, ambas descritas en detalle más abajo: la herramienta de análisis web y el asistente de chat. Ninguna transmite nada hasta que usted la inicia activamente.',
      updated: 'Última actualización: julio de 2026',
      sections: [
        {
          heading: '1. Responsable del tratamiento',
          body: [
            'Axel Braunschweiger, RENOVO — AI Web Studio, [dirección como en el aviso legal], Alemania.', // TODO-CONTENT
            'Correo: axelbraunschweiger@gmail.com',
            'No se ha designado un delegado de protección de datos; en este caso no existe obligación legal de hacerlo.',
          ],
        },
        {
          heading: '2. Alojamiento y archivos de registro',
          body: [
            'Este sitio está alojado en [proveedor de hosting, dirección].', // TODO-CONTENT
            'Al visitar el sitio, el proveedor registra automáticamente datos técnicos de acceso: su dirección IP, la fecha y hora de la solicitud, la página solicitada, la página de referencia e información sobre su navegador y sistema operativo.',
            'Finalidad y base jurídica: este tratamiento es necesario para entregar el sitio de forma fiable y para detectar y repeler ataques. La base jurídica es nuestro interés legítimo en el funcionamiento seguro y estable del sitio, art. 6 apdo. 1 lit. f RGPD.',
            'Conservación: los registros se eliminan según el calendario del proveedor de hosting, por regla general tras un máximo de 30 días. No se cruzan con otras fuentes ni se utilizan para identificarle personalmente.',
          ],
        },
        {
          heading: '3. Herramienta de análisis web (Google PageSpeed Insights)',
          body: [
            'En nuestra página de análisis web puede introducir la dirección de un sitio y hacer que se analice. El análisis no lo realizamos nosotros: al pulsar el botón, su navegador envía la dirección introducida directamente a la API de Google PageSpeed Insights, operada por Google Ireland Limited, Gordon House, Barrow Street, Dublín 4, Irlanda.',
            'En ese proceso, su dirección IP y los datos técnicos de la solicitud de su navegador se transmiten a Google y pueden transferirse a servidores en Estados Unidos. Google trata estos datos conforme a su propia política de privacidad: https://policies.google.com/privacy',
            'Finalidad y base jurídica: el análisis se realiza únicamente a petición expresa suya, por lo que la base jurídica es su consentimiento conforme al art. 6 apdo. 1 lit. a RGPD, otorgado al iniciar activamente el análisis. Puede retirar su consentimiento en cualquier momento con efectos para el futuro simplemente no utilizando la herramienta. Sin iniciar un análisis, no se envía ningún dato a Google.',
            'Transferencia internacional: Google LLC está certificada bajo el Marco de Privacidad de Datos UE-EE. UU., para el que la Comisión Europea reconoció un nivel adecuado de protección mediante decisión de adecuación de 10 de julio de 2023. Google se apoya además en las cláusulas contractuales tipo de la Comisión Europea.',
            'Nosotros no almacenamos ni evaluamos las direcciones que introduce ni los resultados del análisis. En nuestro lado no se guarda nada.',
          ],
        },
        {
          heading: '4. Asistente del estudio (chat)',
          body: [
            'Nuestro sitio web ofrece un asistente de chat que responde preguntas sobre el estudio. Solo se inicia cuando usted lo abre activamente; no se envía nada hasta que usted manda un mensaje.',
            'Al enviar un mensaje, ese mensaje y el desarrollo previo de la conversación se transmiten a nuestra propia función de servidor y, desde allí, a Anthropic PBC, 548 Market St, PMB 90375, San Francisco, CA 94104, EE. UU., que genera la respuesta con el modelo de lenguaje Claude. Su dirección IP la procesa nuestra función de servidor para prevenir abusos y no se comunica a Anthropic.',
            'Finalidad y base jurídica: el asistente solo funciona a petición expresa suya, por lo que la base jurídica es su consentimiento conforme al art. 6.1.a RGPD, otorgado al enviar activamente un mensaje. Puede retirar su consentimiento en cualquier momento con efectos para el futuro simplemente dejando de usar el asistente. Además, existe nuestro interés legítimo en la prevención de abusos descrita, art. 6.1.f RGPD.',
            'Transferencia a terceros países: Anthropic PBC está certificada en el marco EU-US Data Privacy Framework, respecto del cual la Comisión Europea ha reconocido un nivel de protección adecuado (decisión de adecuación de 10 de julio de 2023). Con Anthropic existe además un contrato de encargo de tratamiento conforme al art. 28 RGPD.',
            'Conservación: nosotros no almacenamos la conversación. Existe en su navegador mientras la ventana de chat está abierta y desaparece al cerrar o recargar la página. Anthropic conserva entradas y salidas durante un tiempo limitado para detectar abusos y no las utiliza para entrenar sus modelos. Nuestra función de servidor guarda un contador por dirección IP durante un máximo de 65 minutos, únicamente para aplicar un límite de uso.',
            'Le rogamos que no introduzca en el chat categorías especiales de datos personales (por ejemplo, datos de salud) ni información confidencial. Para asuntos sensibles, escríbanos por correo electrónico.',
            'El asistente genera sus respuestas de forma automatizada y puede equivocarse. Sus respuestas no son jurídicamente vinculantes y no se adopta ninguna decisión con efectos jurídicos para usted sobre la base de la conversación.',
          ],
        },
        {
          heading: '5. Contacto por correo electrónico',
          body: [
            'Si nos escribe, los datos que facilite — su dirección de correo, su nombre si lo indica y el contenido de su mensaje — se tratan exclusivamente para atender su consulta.',
            'Base jurídica: art. 6 apdo. 1 lit. b RGPD cuando su mensaje se refiera al inicio o la ejecución de un contrato; en caso contrario, nuestro interés legítimo en responder a las consultas que se nos dirigen, art. 6 apdo. 1 lit. f RGPD.',
            'Conservación: las consultas se eliminan una vez atendidas de forma concluyente, siempre que no existan obligaciones legales de conservación, en particular de derecho mercantil y fiscal.',
            'Tenga en cuenta que el correo electrónico no viaja cifrado de forma predeterminada. Para información confidencial, pídanos un canal alternativo.',
          ],
        },
        {
          heading: '6. Fuentes y otros recursos',
          body: [
            'Todas las fuentes, imágenes, scripts y hojas de estilo se sirven desde el propio servidor de este sitio. En particular, no se utiliza el CDN de Google Fonts, ninguna red de distribución de contenidos ni complementos de redes sociales. Al navegar por el sitio no se establece ninguna conexión con servidores de terceros.',
          ],
        },
        {
          heading: '7. Cookies, analítica y rastreo',
          body: [
            'Este sitio no utiliza cookies ni tecnologías de analítica, rastreo, remarketing o elaboración de perfiles. Su preferencia de idioma y de tema de color, si las cambia, se guardan localmente en su navegador y nunca se nos transmiten.',
          ],
        },
        {
          heading: '8. Sus derechos',
          body: [
            'Tiene derecho a obtener información sobre los datos personales que tratamos sobre usted (art. 15 RGPD), a la rectificación de datos inexactos (art. 16), a la supresión (art. 17), a la limitación del tratamiento (art. 18), a la portabilidad (art. 20) y a retirar en cualquier momento el consentimiento otorgado con efectos para el futuro (art. 7 apdo. 3).',
            'Derecho de oposición: tiene derecho a oponerse en cualquier momento, por motivos relacionados con su situación particular, al tratamiento basado en el art. 6 apdo. 1 lit. f RGPD (art. 21 RGPD).',
            'Para ejercer cualquiera de estos derechos basta con un correo informal a la dirección indicada arriba.',
          ],
        },
        {
          heading: '9. Derecho a presentar una reclamación',
          body: [
            'Tiene derecho a presentar una reclamación ante una autoridad de control de protección de datos, en particular en el Estado miembro de su residencia habitual, lugar de trabajo o del lugar de la supuesta infracción (art. 77 RGPD).',
            'La autoridad competente para nosotros es la Oficina Estatal Bávara de Supervisión de Protección de Datos (Bayerisches Landesamt für Datenschutzaufsicht), Promenade 18, 91522 Ansbach, Alemania.', // TODO-CONTENT
          ],
        },
        {
          heading: '10. Cambios en esta política',
          body: [
            'Actualizamos esta política cuando los cambios en el sitio o en la legislación lo hacen necesario. Siempre rige la versión publicada aquí.',
          ],
        },
      ],
    },
  },

  notFound: {
    title: 'Esta página se movió o nunca existió.',
    body: 'Puede que el enlace esté desactualizado. Todo lo que hace el estudio está a un clic desde la página de inicio.',
    link: 'Volver al inicio',
  },
};
