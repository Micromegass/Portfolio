import type { SiteContent } from './types';

export const es: SiteContent = {
  meta: {
    home: {
      title: 'RENOVO — AI Web Studio | Rediseño web, asistentes de IA, aplicaciones',
      description:
        'Modernizamos sitios web de empresas, creamos webs con asistente de IA integrado y desarrollamos aplicaciones web con backend real. Multilingüe, rápido, en semanas.',
    },
    relaunch: {
      title: 'Rediseño y modernización de sitios web | RENOVO',
      description:
        'Su web se ve y carga como si la hubieran hecho hace años. La reconstruimos con estándares actuales — rápida, mobile-first, optimizada para buscadores y multilingüe. Normalmente en tres a cinco semanas.',
    },
    ai: {
      title: 'Sitios web con asistente de IA integrado | RENOVO',
      description:
        'Creamos sitios web que incluyen un asistente de chat basado en su propio contenido, que responde preguntas sobre servicios, precios y horarios las 24 horas.',
    },
    apps: {
      title: 'Aplicaciones web con backend real | RENOVO',
      description:
        'Sistemas de reservas, portales de clientes, dashboards y MVPs. Aplicaciones full-stack con base de datos, API y autenticación — software de producción, no prototipos.',
    },
    work: {
      title: 'Proyectos — sitios web y aplicaciones del estudio | RENOVO',
      description:
        'Proyectos seleccionados: la web de una clínica con reservas en línea, una marca de hospitalidad con su sitio de reservas, y lo que el estudio construye actualmente.',
    },
    'case-physio': {
      title: 'Caso: web de clínica con reservas en línea | RENOVO',
      description:
        'Web, marca y reservas en línea para una clínica de fisioterapia y terapia ocupacional en Fürth, Alemania — hoy las citas llegan sin una sola llamada.',
    },
    'case-ikuna': {
      title: 'Caso: Ikuna Glamping — marca y sitio de reservas | RENOVO',
      description:
        'Marca y sitio web visual para un refugio de glamping en Antioquia, Colombia — rápido en conexiones móviles rurales y con la atmósfera suficiente para vender la experiencia.',
    },
    about: {
      title: 'El estudio — así trabaja RENOVO',
      description:
        'Un estudio web AI-first, pequeño a propósito, entre Alemania y Colombia. Cómo trabajamos, en qué creemos al construir sitios web y quién está detrás del estudio.',
    },
    contact: {
      title: 'Iniciar un proyecto — revisión web gratuita | RENOVO',
      description:
        'Envíenos su sitio web actual y reciba una valoración honesta de qué lo está frenando. Respondemos personalmente en español, inglés o alemán.',
    },
    imprint: { title: 'Aviso legal | RENOVO', description: 'Aviso legal de RENOVO AI Web Studio.' },
    privacy: {
      title: 'Política de privacidad | RENOVO',
      description: 'Política de privacidad de RENOVO AI Web Studio. Sin cookies, sin rastreo.',
    },
  },

  nav: {
    items: [
      { page: 'relaunch', label: 'Rediseño' },
      { page: 'ai', label: 'Asistente IA' },
      { page: 'apps', label: 'Aplicaciones' },
      { page: 'work', label: 'Proyectos' },
      { page: 'about', label: 'Estudio' },
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
    locations: 'Fürth, Alemania ↔ Medellín, Colombia',
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
      intro: 'Sitios web y sistemas de reservas con los que las empresas trabajan cada día.',
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
      lead: 'La mayoría de los sitios web de empresa se hicieron hace años, por alguien que ya no está. Cargan lento, se rompen en el móvil y mandan clientes a la competencia sin que usted se entere. Los reconstruimos desde cero.',
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
      'Dos negocios en marcha, construidos de principio a fin — marca, web, reservas — y lo que el estudio está construyendo ahora.',
    visitLabel: 'Ver sitio en vivo',
    readLabel: 'Leer el caso',
    labEyebrow: 'Laboratorio del estudio',
    labTitle: 'Lo que estamos construyendo ahora',
    labIntro:
      'Productos que el estudio desarrolla internamente para afinar las herramientas y el flujo de trabajo. Pregúntenos por cualquiera.',
    lab: [
      {
        title: 'App de recordatorios',
        desc: 'Una herramienta de recordatorios calmada que trata la atención como un recurso escaso.',
        tag: 'Prototipo funcional',
      },
      {
        title: 'Calculadora de precios de tatuajes',
        desc: 'Estimaciones de precio instantáneas y transparentes para estudios de tatuaje y sus clientes.',
        tag: 'Prototipo funcional',
      },
      {
        title: 'Buscador de vuelos',
        desc: 'Una búsqueda de vuelos enfocada en rutas que las grandes plataformas manejan mal.',
        tag: 'Prototipo funcional',
      },
      {
        title: 'Guía de Medellín',
        desc: 'Una guía de la ciudad hecha por alguien que vive allí.',
        tag: 'Prototipo funcional',
      },
    ],
  },

  cases: {
    physio: {
      client: 'Physio & Ergo am Fürther Hauptbahnhof',
      sector: 'Salud · Alemania',
      url: 'https://www.physio-und-ergo-fuerth.de',
      urlLabel: 'physio-und-ergo-fuerth.de',
      cardTitle: 'Una clínica que llena su propia agenda',
      cardDesc:
        'Web, marca y reservas en línea para una clínica de fisioterapia y terapia ocupacional — hoy las citas llegan sin una sola llamada.',
      metrics: [
        { value: '24/7', label: 'reservas en línea' },
        { value: '0', label: 'llamadas de ida y vuelta' },
      ],
      title: 'Una clínica que llena su propia agenda',
      summary:
        'Una clínica de fisioterapia y terapia ocupacional junto a la estación central de Fürth necesitaba más que una tarjeta de presentación en línea: los pacientes tenían que entender los tratamientos, conocer al equipo y reservar sin levantar el teléfono.',
      specs: [
        { label: 'Sector', value: 'Salud · Alemania' },
        { label: 'Alcance', value: 'Marca · Web · Reservas en línea' },
        { label: 'Idiomas', value: 'Alemán' },
        { label: 'Estado', value: 'En vivo y operando' },
      ],
      sections: [
        {
          heading: 'El reto',
          body: 'Las clínicas de terapia en Alemania funcionan a base de llamadas y listas de espera. Los pacientes quieren saber tres cosas rápido: qué tratan, quién lo trata y cuándo hay cita. La mayoría de webs de clínicas no responde ninguna, y cada pregunta sin responder se convierte en una llamada en plena consulta.',
        },
        {
          heading: 'Qué construimos',
          body: 'Una web rápida, cálida y mobile-first: toda la oferta de fisioterapia y terapia ocupacional explicada en lenguaje claro, el equipo presentado de forma personal y la reserva en línea al centro. Las citas ocurren sin una sola llamada, que es justo lo que permite a la clínica prometer tiempos de espera cortos.',
        },
        {
          heading: 'Por qué funciona',
          body: 'Cada decisión se tomó desde el negocio, no desde el diseño: qué tratamientos destacar, cómo formular las preguntas de seguros, dónde la fricción de reserva pierde un paciente en silencio. El sitio está estructurado para que la clínica añada tratamientos y personas sin llamar a un desarrollador.',
        },
      ],
      outcomeLabel: 'Lo que aporta al negocio',
      outcomes: [
        'Las citas se reservan en línea a toda hora, sin ping-pong telefónico',
        'Todo el equipo y cada especialidad se presentan con claridad',
        'Una clínica real funciona sobre este sitio todos los días',
      ],
    },
    ikuna: {
      client: 'Ikuna Glamping',
      sector: 'Hospitalidad · Colombia',
      url: 'https://ikunaglamping.com',
      urlLabel: 'ikunaglamping.com',
      cardTitle: 'Un refugio de montaña con puerta digital',
      cardDesc:
        'Marca y sitio de reservas visual para un refugio de glamping en Antioquia — rápido para el campo, con la atmósfera suficiente para vender la sensación.',
      metrics: [
        { value: '<1s', label: 'carga en móvil' },
        { value: 'ES', label: 'español primero' },
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
          heading: 'El reto',
          body: 'El glamping vende una sensación. Un sitio lento y recargado la destruye antes de que el huésped vea las montañas. El sitio tenía que ser atmosférico, rápido en las conexiones móviles rurales que la gente realmente usa, e inconfundiblemente local en vez de una plantilla genérica de reservas.',
        },
        {
          heading: 'Qué construimos',
          body: 'Un sitio visual, en español primero, construido para el rendimiento: primero la historia del lugar, después los detalles prácticos, y la reserva siempre a un toque. Cada fotografía, palabra y sección sirven a la misma calma que el refugio mismo.',
        },
        {
          heading: 'Por qué funciona',
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
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Averigüemos qué podría estar haciendo su web por usted.',
    body: 'Un rediseño, un asistente de IA, una aplicación web — o simplemente una segunda opinión honesta. La primera conversación es gratis y refrescantemente libre de jerga.',
    button: 'Iniciar un proyecto',
  },

  legal: {
    imprint: {
      title: 'Aviso legal',
      body: [
        'Información según § 5 TMG (ley alemana de telemedios).',
        'RENOVO — AI Web Studio', // TODO-CONTENT: datos legales completos
        'Titular: Axel Braunschweiger',
        'Contacto: axelbraunschweiger@gmail.com',
        'Responsable del contenido según § 55 Abs. 2 RStV: Axel Braunschweiger.',
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      body: [
        'Este sitio web es privado por diseño: no usa cookies, no tiene analítica y no carga recursos de terceros. Todas las fuentes y archivos se sirven desde el propio servidor del sitio.',
        'Archivos de registro del servidor: el proveedor de hosting puede almacenar automáticamente datos técnicos de acceso (dirección IP, fecha y hora, tipo de navegador) por seguridad y operación. Estos datos no se cruzan con otras fuentes y se eliminan según la política de retención del proveedor.',
        'Contacto por correo: si nos escribe, su mensaje y dirección se usan únicamente para responderle. Responsable: Axel Braunschweiger.', // TODO-CONTENT
        'Tiene derecho a acceder, corregir y eliminar los datos personales que le conciernen (art. 15–17 RGPD).',
      ],
    },
  },

  notFound: {
    title: 'Esta página se movió o nunca existió.',
    body: 'Puede que el enlace esté desactualizado. Todo lo que hace el estudio está a un clic desde la página de inicio.',
    link: 'Volver al inicio',
  },
};
