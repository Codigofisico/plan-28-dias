/**
 * RECURSOS VISUALES OFICIALES - CÓDIGO FUERZA 28
 * Gestion centralizada de las 23 URLs oficiales alojadas en WordPress (HTTPS absoluto).
 * Conservadas intactas sin prefijos relativos ni modificaciones.
 */

export interface TestimonialItem {
  id: number;
  title: string;
  url: string;
  alt: string;
}

export interface EbookPageItem {
  pageNumber: number;
  label: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface BonusAssetItem {
  id: string;
  number: number;
  title: string;
  benefitHeadline: string;
  url: string;
  badge: string;
}

export const OFFICIAL_ASSETS = {
  // 1. EBOOK PRINCIPAL - Portada Oficial
  ebookCover: "https://codigofisico.online/wp-content/uploads/2026/10/EBOOK-PRINCIPAL.webp",

  // 2. DIEZ TESTIMONIOS REALES (Capturas oficiales sin inventar datos)
  testimonials: [
    {
      id: 1,
      title: "Testimonio 1",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-1.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 1"
    },
    {
      id: 2,
      title: "Testimonio 2",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-2.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 2"
    },
    {
      id: 3,
      title: "Testimonio 3",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-3.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 3"
    },
    {
      id: 4,
      title: "Testimonio 4",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-4.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 4"
    },
    {
      id: 5,
      title: "Testimonio 5",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-5.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 5"
    },
    {
      id: 6,
      title: "Testimonio 6",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-6.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 6"
    },
    {
      id: 7,
      title: "Testimonio 7",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-7.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 7"
    },
    {
      id: 8,
      title: "Testimonio 8",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-8.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 8"
    },
    {
      id: 9,
      title: "Testimonio 9",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-9.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 9"
    },
    {
      id: 10,
      title: "Testimonio 10",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-10.webp",
      alt: "Opinión y experiencia real compartida sobre Código Fuerza 28 — Testimonio 10"
    }
  ] as TestimonialItem[],

  // 3. CUATRO BONOS OFICIALES
  bonuses: [
    {
      id: "bono-1",
      number: 1,
      title: "Bono 1: Método Anti Excusas Diarias",
      benefitHeadline: "Aprende estrategias para reducir las excusas y facilitar el inicio de tus entrenamientos, incluso cuando tienes poco tiempo o motivación.",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/BONO-1.webp",
      badge: "INCLUIDO EN TU COMPRA"
    },
    {
      id: "bono-2",
      number: 2,
      title: "Bono 2: Recuperación Activa y Eficiente",
      benefitHeadline: "Conoce cómo incorporar movilidad, descanso y recuperación para acompañar tus sesiones de entrenamiento.",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/BONO-2.webp",
      badge: "INCLUIDO EN TU COMPRA"
    },
    {
      id: "bono-3",
      number: 3,
      title: "Bono 3: Sistema de Progreso Sin Frustración",
      benefitHeadline: "Aprende a observar y registrar tus avances mediante indicadores como fuerza, resistencia y constancia, sin depender únicamente del espejo.",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/BONO-3.webp",
      badge: "INCLUIDO EN TU COMPRA"
    },
    {
      id: "bono-4",
      number: 4,
      title: "Bono 4: Nutrición Simple para Fuerza",
      benefitHeadline: "Conoce principios básicos de alimentación para organizar mejor tus comidas y complementar tus entrenamientos.",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/BONO-4.webp",
      badge: "INCLUIDO EN TU COMPRA"
    }
  ] as BonusAssetItem[],

  // 4. OCHO PÁGINAS DEL INTERIOR DEL EBOOK (Muestra real de páginas en orden)
  ebookPages: [
    {
      pageNumber: 31,
      label: "Página 31",
      title: "Página 31",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_31_-scaled.webp"
    },
    {
      pageNumber: 32,
      label: "Página 32",
      title: "Página 32",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_32_-scaled.webp"
    },
    {
      pageNumber: 33,
      label: "Página 33",
      title: "Página 33",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_33_-scaled.webp"
    },
    {
      pageNumber: 42,
      label: "Página 42",
      title: "Página 42",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_42_-scaled.webp"
    },
    {
      pageNumber: 51,
      label: "Página 51",
      title: "Página 51",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_51_-scaled.webp"
    },
    {
      pageNumber: 62,
      label: "Página 62",
      title: "Página 62",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_62_-scaled.webp"
    },
    {
      pageNumber: 73,
      label: "Página 73",
      title: "Página 73",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_73_-scaled.webp"
    },
    {
      pageNumber: 76,
      label: "Página 76",
      title: "Página 76",
      subtitle: "Muestra real del interior de Código Fuerza 28",
      url: "https://codigofisico.online/wp-content/uploads/2026/10/Pagina_76_-scaled.webp"
    }
  ] as EbookPageItem[],

  // 5. IMAGEN DE OFERTA REUNIDA (Pack completo con los 4 bonos incluidos)
  bundleCover: "https://codigofisico.online/wp-content/uploads/2026/10/PACK-COMPLETO-1.webp"
};

