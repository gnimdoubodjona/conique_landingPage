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

      // Portfolio
      "portfolio.title": "Nos Réalisations",
      "portfolio.desc": "Identité visuelle · Community management · Logo & Affiches · Design d'application · Automatisation.",
      "portfolio.cta_all": "Voir tous les projets",
      "portfolio.cta_start": "Démarrer un projet",
      "portfolio.stats": "projets livrés · clients satisfaits",
      "portfolio.project1_client": "Maison Léa",
      "portfolio.project1_category": "Identité Visuelle",
      "portfolio.project1_desc": "Refonte complète de l'identité d'une marque de cosmétiques naturels. Palette, typographie et supports print/digital.",
      "portfolio.project1_bubble": "Charte livrée ✓",
      "portfolio.project2_client": "Korner Studio",
      "portfolio.project2_category": "Redesign Web",
      "portfolio.project2_desc": "Refonte du site vitrine d'un studio d'architecture. Focus sur la conversion et la mise en valeur des projets.",
      "portfolio.project2_bubble": "Score Perf. 97 / 100",
      "portfolio.project3_client": "FoodRush",
      "portfolio.project3_category": "Community Mgmt",
      "portfolio.project3_desc": "Stratégie de contenu et animation de communauté pour une marque food. +12k abonnés en 4 mois.",
      "portfolio.project3_bubble": "Engagement +6.8%",
      "portfolio.project1_statLabel": "supports livrés",
      "portfolio.project2_statLabel": "taux de contact",
      "portfolio.project3_statLabel": "abonnés en 4 mois",

      // Processus
      "process.title": "Un process qui délivre.",
      "process.desc": "Brief · Stratégie · Création · Livraison — chaque étape est pensée pour que votre projet arrive exactement où il doit être.",
      "process.status": "Disponible pour de nouveaux projets",
      "process.duration_prefix": "De l'idée au résultat —",
      "process.duration_highlight": "en moyenne 2 à 4 semaines.",
      "process.step_label": "Étape",
      "process.step1_title": "Brief & Discovery",
      "process.step1_desc": "On prend le temps de comprendre votre activité, vos objectifs et votre cible. Chaque projet commence par une écoute attentive.",
      "process.step2_title": "Stratégie & Concept",
      "process.step2_desc": "On définit la direction créative, le positionnement et les livrables. Rien n'est lancé sans une vision claire et validée ensemble.",
      "process.step3_title": "Création & Itération",
      "process.step3_desc": "On conçoit, on affine, on itère. Vous validez à chaque étape. Le résultat final est exactement ce que vous aviez imaginé — en mieux.",
      "process.step4_title": "Livraison & Suivi",
      "process.step4_desc": "Livraison des fichiers, mise en ligne ou déploiement. On reste disponibles après pour assurer la continuité et le suivi.",

      // Testimonials
      "testimonials.badge": "Ce qu'ils disent",
      "testimonials.title": "Ils nous font\nconfiance.",
      "testimonials.desc": "Des clients satisfaits, des résultats mesurables, des collaborations qui durent.",
      "testimonials.stats": "des clients recommandent Conique",
      "testimonials.item1_name": "Sophie Marchand",
      "testimonials.item1_role": "Fondatrice · Maison Léa",
      "testimonials.item1_category": "Identité Visuelle",
      "testimonials.item1_quote": "Conique a capturé l'essence de notre marque dès le premier brief. L'identité livrée était épurée, forte, mémorable. On a eu des retours clients dès le premier jour.",
      "testimonials.item1_resultLabel": "reconnaissance marque",
      "testimonials.item2_name": "Thomas Rey",
      "testimonials.item2_role": "CEO · Korner Studio",
      "testimonials.item2_category": "Redesign Web",
      "testimonials.item2_quote": "Le redesign a complètement transformé notre image. En deux semaines, notre taux de contact avait plus que doublé. Les délais tenus, le résultat au-delà de nos attentes.",
      "testimonials.item2_resultLabel": "taux de contact",
      "testimonials.item3_name": "Kévin Diallo",
      "testimonials.item3_role": "Co-fondateur · FoodRush",
      "testimonials.item3_category": "Community Management",
      "testimonials.item3_quote": "En 4 mois, on est passé de zéro présence à 12k abonnés engagés. Conique ne livre pas juste du contenu — ils construisent une vraie audience.",
      "testimonials.item3_resultLabel": "abonnés en 4 mois",

      // CTA
      "cta.badge": "On démarre quand vous voulez",
      "cta.title": "Un projet en tête ?",
      "cta.title_highlight": "Parlons-en.",
      "cta.stat1_label": "projets livrés",
      "cta.stat2_label": "délai moyen",
      "cta.stat3_label": "satisfaction",
      "cta.stat2_value": "4 sem.",
      "cta.desc": "Que ce soit pour une identité visuelle, un redesign web, une stratégie de contenu ou des automatisations — on est là.",
      "cta.btn_message": "Nous envoyer un message",
      "cta.btn_call": "Réserver un appel découverte",
      "cta.dispo_prefix": "Disponible pour de nouveaux projets —",
      "cta.dispo_highlight": "réponse sous 24h garantie",
      "cta.footer_rights": "© 2024 Conique. Tous droits réservés.",
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

      // Community
      "hero.card2_title": "Community",
      "hero.card2_badge": "Growth",
      "hero.card2_stat_label": "Monthly engagement",
      "hero.card2_vs": "vs. industry average",
      "hero.card2_active": "Active communities",
      "hero.card2_members": "total members",

      // Automation
      "hero.card3_stat_label": "Time saved",
      "hero.card3_stat_desc": "on repetitive tasks",
      "hero.card3_roi": "on average",
      "hero.card3_cta": "Free audit",

      // Portfolio
      "portfolio.title": "Our Work",
      "portfolio.desc": "Visual Identity · Community management · Logo & Posters · App Design · Automation.",
      "portfolio.cta_all": "View all projects",
      "portfolio.cta_start": "Start a project",
      "portfolio.stats": "delivered projects · satisfied clients",
      "portfolio.project1_client": "Maison Léa",
      "portfolio.project1_category": "Visual Identity",
      "portfolio.project1_desc": "Complete visual identity redesign for a natural cosmetics brand. Palette, typography and print/digital assets.",
      "portfolio.project1_bubble": "Brand book delivered ✓",
      "portfolio.project1_statLabel": "assets delivered",
      "portfolio.project2_client": "Korner Studio",
      "portfolio.project2_category": "Web Redesign",
      "portfolio.project2_desc": "Website redesign for an architecture studio. Focus on conversion and highlighting projects.",
      "portfolio.project2_bubble": "Perf. Score 97 / 100",
      "portfolio.project2_statLabel": "contact rate",
      "portfolio.project3_client": "FoodRush",
      "portfolio.project3_category": "Community Mgmt",
      "portfolio.project3_desc": "Content strategy and community management for a food brand. +12k followers in 4 months.",
      "portfolio.project3_bubble": "Engagement +6.8%",
      "portfolio.project3_statLabel": "followers in 4 months",

      // Processus
      "process.title": "A process that delivers.",
      "process.desc": "Brief · Strategy · Creation · Delivery — each step is designed so that your project arrives exactly where it needs to be.",
      "process.status": "Available for new projects",
      "process.duration_prefix": "From idea to result —",
      "process.duration_highlight": "2 to 4 weeks on average.",
      "process.step_label": "Step",
      "process.step1_title": "Brief & Discovery",
      "process.step1_desc": "We take the time to understand your business, your goals and your target. Every project begins with attentive listening.",
      "process.step2_title": "Strategy & Concept",
      "process.step2_desc": "We define the creative direction, positioning and deliverables. Nothing is launched without a clear vision validated together.",
      "process.step3_title": "Creation & Iteration",
      "process.step3_desc": "We design, we refine, we iterate. You validate at every step. The final result is exactly what you imagined — even better.",
      "process.step4_title": "Delivery & Follow-up",
      "process.step4_desc": "File delivery, going live or deployment. We remain available after to ensure continuity and follow-up.",

      // Testimonials
      "testimonials.badge": "What they say",
      "testimonials.title": "They trust\nus.",
      "testimonials.desc": "Satisfied clients, measurable results, long-lasting collaborations.",
      "testimonials.stats": "of clients recommend Conique",
      "testimonials.item1_name": "Sophie Marchand",
      "testimonials.item1_role": "Founder · Maison Léa",
      "testimonials.item1_category": "Visual Identity",
      "testimonials.item1_quote": "Conique captured the essence of our brand from the first brief. The identity delivered was clean, strong, memorable. We had customer feedback from day one.",
      "testimonials.item1_resultLabel": "brand recognition",
      "testimonials.item2_name": "Thomas Rey",
      "testimonials.item2_role": "CEO · Korner Studio",
      "testimonials.item2_category": "Web Redesign",
      "testimonials.item2_quote": "The redesign completely transformed our image. In two weeks, our contact rate had more than doubled. Deadlines met, results beyond our expectations.",
      "testimonials.item2_resultLabel": "contact rate",
      "testimonials.item3_name": "Kévin Diallo",
      "testimonials.item3_role": "Co-founder · FoodRush",
      "testimonials.item3_category": "Community Management",
      "testimonials.item3_quote": "In 4 months, we went from zero presence to 12k engaged followers. Conique doesn't just deliver content — they build a real audience.",
      "testimonials.item3_resultLabel": "followers in 4 months",

      // CTA
      "cta.badge": "We start whenever you want",
      "cta.title": "A project in mind?",
      "cta.title_highlight": "Let's talk.",
      "cta.stat1_label": "projects delivered",
      "cta.stat2_label": "average lead time",
      "cta.stat3_label": "satisfaction",
      "cta.stat2_value": "4 weeks",
      "cta.desc": "Whether it's for visual identity, web redesign, content strategy or automations — we're here.",
      "cta.btn_message": "Send us a message",
      "cta.btn_call": "Book a discovery call",
      "cta.dispo_prefix": "Available for new projects —",
      "cta.dispo_highlight": "24h response guaranteed",
      "cta.footer_rights": "© 2024 Conique. All rights reserved.",
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