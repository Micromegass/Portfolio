import type { Locale } from '@/lib/i18n';
import type { RenderLabels } from '@/scripts/siteRender';

/**
 * Copy for the two mock websites drawn in the hero comparison.
 * Deliberately generic — a typical small business, not any real client.
 */
export const renderLabels: Record<Locale, RenderLabels> = {
  en: {
    company: 'MEYER & SONS LTD',
    tagline: 'Quality since 1998 · Welcome!',
    nav: ['Home', 'About us', 'Products', 'References', 'Contact', 'Legal'],
    newsHeading: 'News',
    phone: 'Call us: 0911 / 123456',
    visitors: 'Visitors: 004213 · Best viewed in Internet Explorer 8',
    heroLine1: 'Quality you',
    heroLine2: 'can see.',
    heroSub: 'Family-run manufacturing for customers across the region since 1998.',
    ctaPrimary: 'Request a quote',
    ctaSecondary: 'Our services',
    cards: ['Manufacturing', 'Assembly', 'Service'],
    navNew: ['Services', 'Work', 'Team', 'Contact'],
  },
  de: {
    company: 'MEYER & SÖHNE GMBH',
    tagline: 'Qualität seit 1998 · Herzlich Willkommen!',
    nav: ['Startseite', 'Über uns', 'Produkte', 'Referenzen', 'Kontakt', 'Impressum'],
    newsHeading: 'Aktuelles',
    phone: 'Rufen Sie uns an: 0911 / 123456',
    visitors: 'Besucher: 004213 · Optimiert für Internet Explorer 8',
    heroLine1: 'Qualität, die',
    heroLine2: 'man sieht.',
    heroSub: 'Seit 1998 fertigen wir für Kunden in der ganzen Region.',
    ctaPrimary: 'Angebot anfragen',
    ctaSecondary: 'Leistungen',
    cards: ['Fertigung', 'Montage', 'Service'],
    navNew: ['Leistungen', 'Projekte', 'Team', 'Kontakt'],
  },
  es: {
    company: 'MEYER E HIJOS S.A.',
    tagline: 'Calidad desde 1998 · ¡Bienvenidos!',
    nav: ['Inicio', 'Nosotros', 'Productos', 'Clientes', 'Contacto', 'Aviso legal'],
    newsHeading: 'Novedades',
    phone: 'Llámenos: 0911 / 123456',
    visitors: 'Visitantes: 004213 · Optimizado para Internet Explorer 8',
    heroLine1: 'Calidad que',
    heroLine2: 'se nota.',
    heroSub: 'Fabricación familiar para clientes de toda la región desde 1998.',
    ctaPrimary: 'Pedir presupuesto',
    ctaSecondary: 'Servicios',
    cards: ['Fabricación', 'Montaje', 'Servicio'],
    navNew: ['Servicios', 'Proyectos', 'Equipo', 'Contacto'],
  },
};
