'use client';

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.process": "Processus",
      "nav.testimonials": "Témoignages",
      "nav.contact": "Contact",
      "cta.contact": "Contactez nous",
      "logo.alt": "Conique",

      // Hero
      "hero.badge": "Conique",
      "hero.badge_sub": "Design & Growth Studio",
      "hero.title_line1": "On transforme",
      "hero.title_line2": "vos idées en impact.",
      "hero.subtitle": "Design UI/UX • Identité visuelle • Automatisations IA • Community Management",
      "hero.stats_intro": "Déjà",
      "hero.stats_brands": "marques accompagnées",
      "hero.desc_highlight": "48 projets livrés",
      "hero.desc": "Du concept à la croissance, on construit des expériences qui marquent et des systèmes qui scale.",
      "hero.cta_start": "Démarrer un projet",
      "hero.cta_portfolio": "Voir le portfolio",

      // Cards
      "hero.card1_badge": "DESIGN",
      "hero.card1_title": "Identité visuelle & Design d'interface",
      "hero.card1_stat1_label": "projets livrés",
      "hero.card1_stat2_label": "satisfaction client",
      "hero.card1_desc": "Logos, chartes graphiques, applications web & mobile — on donne vie à votre vision.",
      "hero.card1_project_label": "Dernière réalisation",
      "hero.card1_cta": "Voir",

      "hero.card2_title": "Community",
      "hero.card2_badge": "Croissance",
      "hero.card2_stat_label": "Engagement mensuel",
      "hero.card2_vs": "vs. moyenne secteur",
      "hero.card2_active": "Communautés actives",
      "hero.card2_members": "membres cumulés",

      "hero.card3_stat_label": "Temps économisé",
      "hero.card3_stat_desc": "sur les tâches répétitives",
      "hero.card3_roi": "en moyenne",
      "hero.card3_cta": "Audit offert",
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.process": "Process",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "cta.contact": "Contact us",
      "logo.alt": "Conique",

      // Hero
      "hero.badge": "Conique",
      "hero.badge_sub": "Design & Growth Studio",
      "hero.title_line1": "We transform",
      "hero.title_line2": "your ideas into impact.",
      "hero.subtitle": "UI/UX Design • Visual Identity • AI Automations • Community Management",
      "hero.stats_intro": "Already",
      "hero.stats_brands": "brands supported",
      "hero.desc_highlight": "48 projects delivered",
      "hero.desc": "From concept to growth, we build experiences that leave a mark and systems that scale.",
      "hero.cta_start": "Start a project",
      "hero.cta_portfolio": "View portfolio",

      // Cards
      "hero.card1_badge": "DESIGN",
      "hero.card1_title": "Visual Identity & Interface Design",
      "hero.card1_stat1_label": "projects delivered",
      "hero.card1_stat2_label": "client satisfaction",
      "hero.card1_desc": "Logos, brand guidelines, web & mobile apps — we bring your vision to life.",
      "hero.card1_project_label": "Latest work",
      "hero.card1_cta": "View",

      "hero.card2_title": "Community",
      "hero.card2_badge": "Growth",
      "hero.card2_stat_label": "Monthly engagement",
      "hero.card2_vs": "vs. industry average",
      "hero.card2_active": "Active communities",
      "hero.card2_members": "total members",

      "hero.card3_stat_label": "Time saved",
      "hero.card3_stat_desc": "on repetitive tasks",
      "hero.card3_roi": "on average",
      "hero.card3_cta": "Free audit",
    }
  }
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'fr',
      lng: 'fr',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
    });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default i18n;