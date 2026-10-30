import { getAssetUrl } from './utils/assets';
import { OFFICIAL_ASSETS } from './siteAssets';

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  benefitHeadline: string;
  coverImage: string;
  fallbackImage: string;
  copy: string;
  capabilities: string[];
  practicalChange: string;
}

export interface ChapterItem {
  number: number;
  title: string;
  description: string;
}

export interface PreviewImage {
  id: number;
  pageNumber: number;
  title: string;
  subtitle: string;
  url: string;
  fallbackUrl: string;
  aspectRatio?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SalesNotificationItem {
  name: string;
  city: string;
  country: string;
  minutesAgo: number;
}

export interface ScarcityConfig {
  enabled: boolean;
  totalSpots: number;
  reservedSpots: number;
  liveViewers: number;
  couponCode: string;
  regularPrice: number;
  offerPrice: number;
}

export interface SalesNotificationsConfig {
  enabled: boolean;
  intervalMinSeconds: number;
  intervalMaxSeconds: number;
  visibleDurationSeconds: number;
  notifications: SalesNotificationItem[];
}

export interface ExitIntentConfig {
  enabled: boolean;
  showOncePerSession: boolean;
  desktopTrigger: string;
  mobileTriggerMode: string;
  triggerDelaySeconds: number;
}

export const siteConfig = {
  brand: "CÓDIGO FÍSICO",
  productName: "Código Fuerza 28: Desde Cero - Entrena en casa sin equipo",
  shortName: "Código Fuerza 28",
  productType: "Libro digital en formato PDF",
  pageCount: 91,
  method: "Programa de entrenamiento progresivo de 28 días con calistenia y peso corporal",
  
  pricing: {
    regularPrice: 24,
    discountedPrice: 12,
    discountPercent: 50,
    savings: 12,
    currency: "USD",
    currencySymbol: "$",
    checkoutUrl: "https://pay.hotmart.com/X108167592L?checkoutMode=10&offDiscount=CODIGO",
    couponCode: "CODIGO",
    paymentNote: "Pago único · Acceso digital inmediato · Compra segura por Hotmart",
    shortPaymentNote: "Pago único · Ebook digital + 4 bonos · Hotmart"
  },

  guarantee: {
    days: 7,
    title: "Garantía de 7 días",
    subtitle: "Compra 100% protegida por Hotmart",
    description: "Si después de revisar el libro digital y los cuatro bonos consideras que el material no es lo que buscabas, puedes solicitar el reembolso completo dentro de los primeros 7 días posteriores a tu compra directamente a través de Hotmart. Sin trámites complicados."
  },

  assets: {
    bookCover: OFFICIAL_ASSETS.ebookCover,
    bookCoverFallback: getAssetUrl("/images/LIBRO-CODIGO-FUERZA-28.webp"),
    bundleImage: OFFICIAL_ASSETS.bundleCover,
    bundleImageFallback: getAssetUrl("/images/PACK-COMPLETO-1.webp"),
    bonus1Cover: OFFICIAL_ASSETS.bonuses[0].url,
    bonus1Fallback: getAssetUrl("/images/BONO-1.webp"),
    bonus2Cover: OFFICIAL_ASSETS.bonuses[1].url,
    bonus2Fallback: getAssetUrl("/images/BONO-2.webp"),
    bonus3Cover: OFFICIAL_ASSETS.bonuses[2].url,
    bonus3Fallback: getAssetUrl("/images/BONO-3.webp"),
    bonus4Cover: OFFICIAL_ASSETS.bonuses[3].url,
    bonus4Fallback: getAssetUrl("/images/BONO-4.webp")
  },

  testimonials: OFFICIAL_ASSETS.testimonials,

  contentPreviews: OFFICIAL_ASSETS.ebookPages.map((page, index) => ({
    id: index + 1,
    pageNumber: page.pageNumber,
    title: page.title,
    subtitle: page.subtitle,
    url: page.url,
    fallbackUrl: getAssetUrl(`/images/CONTENIDO-${index + 1}.png`)
  })) as PreviewImage[],

  programWeeks: [
    {
      weekNumber: 1,
      title: "Semana 1",
      subtitle: "Adaptación y Control",
      description: "Conoce los movimientos esenciales y trabaja el control corporal para despertar tus músculos de forma gradual.",
      focus: "Fundamentos, activación muscular y conciencia postural sin sobrecargas."
    },
    {
      weekNumber: 2,
      title: "Semana 2",
      subtitle: "Estabilidad y Core",
      description: "Practica ejercicios orientados a la estabilidad y al fortalecimiento de la zona central para consolidar una base sólida.",
      focus: "Fuerza de tronco, equilibrio en apoyos y control del centro de gravedad."
    },
    {
      weekNumber: 3,
      title: "Semana 3",
      subtitle: "Fuerza y Resistencia",
      description: "Continúa con una progresión enfocada en la fuerza y resistencia muscular, aumentando repeticiones y tiempo bajo tensión.",
      focus: "Consolidación de series, incremento de volumen y mayor tolerancia a la fatiga."
    },
    {
      weekNumber: 4,
      title: "Semana 4",
      subtitle: "Potencia y Confianza",
      description: "Explora movimientos más dinámicos y aprende cómo consolidar lo trabajado para dar continuidad a tu entrenamiento.",
      focus: "Fluidez motriz, integración de cadenas musculares y plan para sostener el hábito."
    }
  ],

  chapters: [
    { number: 1, title: "Bienvenida a tu nueva fuerza", description: "El punto de partida, objetivos reales y mentalidad para iniciar sin presiones." },
    { number: 2, title: "Fundamentos de la calistenia", description: "Bases del entrenamiento con peso corporal y principios mecánicos esenciales." },
    { number: 3, title: "Preparando tu cuerpo y entorno", description: "Acondicionamiento del espacio en casa, calentamiento y prevención de molestias." },
    { number: 4, title: "Movimientos básicos esenciales", description: "Empujes, tracciones, flexiones adaptadas y patrones de piernas con técnica precisa." },
    { number: 5, title: "Semana 1 — Adaptación y control", description: "Rutinas paso a paso para los primeros 7 días con progresiones accesibles." },
    { number: 6, title: "Semana 2 — Estabilidad y core", description: "Secuencias específicas para fortalecer la zona media y mejorar la postura." },
    { number: 7, title: "Semana 3 — Fuerza y resistencia", description: "Aumento progresivo de exigencia sin perder la calidad del movimiento." },
    { number: 8, title: "Semana 4 — Potencia y confianza", description: "Cierre del programa con movimientos dinámicos y mayor autonomía de entrenamiento." },
    { number: 9, title: "Cómo sostener tus resultados", description: "Estrategias para no perder el ritmo y continuar entrenando con constancia." },
    { number: 10, title: "Reflexiones finales", description: "Conclusiones, autoevaluación y próximos pasos hacia un estilo de vida activo." }
  ] as ChapterItem[],

  bonuses: [
    {
      id: "bono-1",
      number: 1,
      title: "Método Anti Excusas Diarias",
      benefitHeadline: "Aprende estrategias para reducir las excusas y facilitar el inicio de tus entrenamientos, incluso cuando tienes poco tiempo o motivación.",
      coverImage: OFFICIAL_ASSETS.bonuses[0].url,
      fallbackImage: getAssetUrl("/images/BONO-1.webp"),
      copy: "Con este recurso conocerás estrategias para identificar las excusas que suelen detenerte, facilitar el inicio de una sesión y organizar hábitos que hagan más sencillo mantener tu entrenamiento.",
      capabilities: [
        "Reconocer excusas frecuentes que provocan postergar.",
        "Aplicar técnicas de fricción mínima para comenzar.",
        "Utilizar estrategias de organización para tu horario diario.",
        "Trabajar la constancia día a día sin depender del ánimo."
      ],
      practicalChange: "En lugar de depender únicamente de sentirte motivado, tendrás ideas para hacer más sencillo el momento de comenzar."
    },
    {
      id: "bono-2",
      number: 2,
      title: "Recuperación Activa y Eficiente",
      benefitHeadline: "Conoce cómo incorporar movilidad, descanso y recuperación para acompañar tus sesiones de entrenamiento.",
      coverImage: OFFICIAL_ASSETS.bonuses[1].url,
      fallbackImage: getAssetUrl("/images/BONO-2.webp"),
      copy: "Con esta guía aprenderás conceptos de movilidad, respiración, descanso y recuperación para comprender por qué no todas las sesiones necesitan tener la misma intensidad.",
      capabilities: [
        "Incorporar movilidad suave en tus días libres.",
        "Conocer principios de recuperación y regeneración muscular.",
        "Reconocer señales tempranas de fatiga corporal.",
        "Comprender la importancia del descanso en tus resultados."
      ],
      practicalChange: "Tendrás criterios básicos para acompañar tu entrenamiento con una recuperación más consciente."
    },
    {
      id: "bono-3",
      number: 3,
      title: "Sistema de Progreso Sin Frustración",
      benefitHeadline: "Aprende a observar y registrar tus avances mediante indicadores como fuerza, resistencia y constancia, sin depender únicamente del espejo.",
      coverImage: OFFICIAL_ASSETS.bonuses[2].url,
      fallbackImage: getAssetUrl("/images/BONO-3.webp"),
      copy: "Con este bono aprenderás a observar tu progreso a través de indicadores como repeticiones, resistencia, control corporal y constancia.",
      capabilities: [
        "Registrar tu actividad y esfuerzo de forma simple.",
        "Observar cambios tangibles en tu desempeño funcional.",
        "Comparar avances semana tras semana sin ansiedad.",
        "Identificar aspectos específicos que puedes ajustar."
      ],
      practicalChange: "En vez de valorar todo tu progreso únicamente por tu apariencia, tendrás otras formas concretas de observar cómo evoluciona tu entrenamiento."
    },
    {
      id: "bono-4",
      number: 4,
      title: "Nutrición Simple para Fuerza",
      benefitHeadline: "Conoce principios básicos de alimentación para organizar mejor tus comidas y complementar tus entrenamientos.",
      coverImage: OFFICIAL_ASSETS.bonuses[3].url,
      fallbackImage: getAssetUrl("/images/BONO-4.webp"),
      copy: "Conocerás principios básicos sobre proteínas, carbohidratos, grasas e hidratación para comprender cómo la alimentación puede complementar tus rutinas.",
      capabilities: [
        "Comprender el rol de los principales macronutrientes.",
        "Organizar platos más equilibrados con ingredientes cotidianos.",
        "Reconocer la importancia de la hidratación constante.",
        "Aplicar recomendaciones generales de alimentación realista."
      ],
      practicalChange: "Tendrás una base educativa para tomar decisiones más informadas al organizar tus comidas."
    }
  ] as BonusItem[],

  faqs: [
    {
      question: "¿Necesito experiencia para comenzar?",
      answer: "No. La guía comienza con los fundamentos de la calistenia y está pensada para personas que desean empezar desde cero."
    },
    {
      question: "¿Tengo que ir al gimnasio?",
      answer: "No. El programa se enfoca en ejercicios de peso corporal que puedes trabajar desde casa."
    },
    {
      question: "¿Necesito máquinas o pesas?",
      answer: "No necesitas equipamiento especializado para seguir el enfoque principal del programa."
    },
    {
      question: "¿Qué recibiré al comprar?",
      answer: "Recibirás el libro digital Código Fuerza 28 y los cuatro bonos complementarios descritos en la oferta."
    },
    {
      question: "¿Es un libro físico?",
      answer: "No. Es un producto completamente digital en formato PDF."
    },
    {
      question: "¿Cómo recibiré el material?",
      answer: "Después de confirmar tu compra, Hotmart te enviará las instrucciones de acceso al correo registrado."
    },
    {
      question: "¿Los resultados físicos están garantizados?",
      answer: "No. Los resultados pueden variar según la condición inicial, constancia, alimentación, descanso y otros factores personales."
    },
    {
      question: "¿Qué sucede después de los 28 días?",
      answer: "El libro contiene recomendaciones para sostener el hábito y continuar progresando después del programa inicial."
    },
    {
      question: "¿Qué incluye el precio de $12?",
      answer: "Incluye el ebook principal y los cuatro bonos digitales, mediante un solo pago."
    },
    {
      question: "¿Cómo realizo la compra?",
      answer: "Haz clic en el botón de compra para continuar al checkout de Hotmart."
    }
  ] as FAQItem[],

  conversionWidgets: {
    scarcity: {
      enabled: true,
      totalSpots: 50,
      reservedSpots: 46,
      liveViewers: 19,
      couponCode: "CODIGO",
      regularPrice: 24,
      offerPrice: 12
    } as ScarcityConfig,
    salesNotifications: {
      enabled: true,
      intervalMinSeconds: 12,
      intervalMaxSeconds: 20,
      visibleDurationSeconds: 6,
      notifications: [
        { name: "María", city: "Ciudad de México", country: "México", minutesAgo: 3 },
        { name: "Juan", city: "Bogotá", country: "Colombia", minutesAgo: 5 },
        { name: "Andrea", city: "Quito", country: "Ecuador", minutesAgo: 8 },
        { name: "Carlos", city: "Lima", country: "Perú", minutesAgo: 11 },
        { name: "Valentina", city: "Santiago", country: "Chile", minutesAgo: 14 },
        { name: "Luis", city: "Guayaquil", country: "Ecuador", minutesAgo: 17 }
      ]
    } as SalesNotificationsConfig,
    exitIntent: {
      enabled: true,
      showOncePerSession: true,
      desktopTrigger: "mouseleave-top",
      mobileTriggerMode: "scroll-up-or-back-intent",
      triggerDelaySeconds: 15
    } as ExitIntentConfig
  }
};
