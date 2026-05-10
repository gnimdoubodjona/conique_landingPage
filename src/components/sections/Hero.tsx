"use client";

import {
  ArrowRight,
  Play,
  Palette,
  Megaphone,
  PenTool,
  Repeat,
  Zap,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
  Smartphone,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LIME = "#bdf522";
const PURPLE = "#008BFF";

const services = [
  { name: "Identité Visuelle", icon: <Palette size={13} /> },
  { name: "Community Management", icon: <Megaphone size={13} /> },
  { name: "Automatisations IA", icon: <Repeat size={13} /> },
  { name: "Design UI/UX", icon: <Zap size={13} /> },
];

export default function Hero() {
  const { t } = useTranslation();
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const { theme, setTheme } = useTheme();
console.log("Thème actuel :", theme);

  useEffect(() => {
    // Animation simple pour les compteurs
    const counters = countersRef.current;
    const targets = [48, 95, 47, 12];

    counters.forEach((counter, index) => {
      if (!counter) return;

      let current = 0;
      const target = targets[index];
      const increment = target / 50;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-8 mt-3 md:px-16 lg:px-32">
      <div className="relative max-w-7xl mx-auto">
        {/* ── TOP ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-14">
          {/* LEFT — headline */}
          <div className="flex-1 text-left">
            {/* Badge avec animation subtile */}
            <div className="inline-flex items-center gap-2 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 px-3 py-1.5 mb-6 hover:scale-105 transition-transform duration-300">
              <span
                className="text-[10px] font-black tracking-[0.2em] uppercase px-1.5 py-0.5 text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {t("hero.badge", "Conique")}
              </span>
              <span className="text-black dark:text-white text-xs tracking-wide font-medium">
                {t("hero.badge_sub", "Design & Growth Studio")}
              </span>
            </div>

            <h1
              className="text-black dark:text-white font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5.2vw, 5rem)" }}
            >
              {t("hero.title_line1", "On transforme")}
              <span className="block mt-2" style={{ color: PURPLE }}>
                {t("hero.title_line2", "vos idées en impact.")}
              </span>
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mt-6 font-medium">
              {t("hero.subtitle", "Design UI/UX • Identité visuelle • Automatisations IA • Community Management")}
            </p>

            {/* Petite phrase d'accroche animée */}
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
              <Sparkles size={14} style={{ color: LIME }} />
              <span>
                {t("hero.stats_intro", "Déjà")}{" "}
                <span
                  className="font-bold text-black dark:text-white"
                  ref={(el) => (countersRef.current[0] = el)}
                >
                  0
                </span>{" "}
                {t("hero.stats_brands", "marques accompagnées")}
              </span>
            </div>
          </div>

          {/* RIGHT — tags + desc + CTA */}
          <div className="flex-1 lg:pt-[5.5rem] lg:pl-8 flex flex-col gap-6 text-left">
            {/* Service tags avec animation au hover */}
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-default hover:-translate-y-0.5"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = PURPLE;
                    el.style.color = "#fff";
                    el.style.borderColor = PURPLE;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "";
                    el.style.color = "";
                    el.style.borderColor = "";
                  }}
                >
                  {s.icon}
                  {s.name}
                </div>
              ))}
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed max-w-sm">
              <span className="font-black text-black dark:text-white">
                {t("hero.desc_highlight", "48 projets livrés")}
              </span>{" "}
              — {t("hero.desc", "Du concept à la croissance, on construit des expériences qui marquent et des systèmes qui scale.")}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="group flex items-center gap-2 font-bold px-5 py-2.5 border-2 text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: PURPLE, borderColor: PURPLE }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#fff";
                  el.style.color = PURPLE;
                  el.style.borderColor = PURPLE;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = PURPLE;
                  el.style.color = "#fff";
                  el.style.borderColor = PURPLE;
                }}
              >
                {t("hero.cta_start", "Démarrer un projet")}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="flex items-center gap-2 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white font-bold px-5 py-2.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 hover:-translate-y-0.5">
                <Play size={12} className="fill-current" />
                {t("hero.cta_portfolio", "Voir le portfolio")}
              </button>
            </div>
          </div>
        </div>

        {/* ── CARDS SECTION avec fond bleu qui commence plus bas ── */}
        <div className="relative">
          {/* Les cards (au-dessus) */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto mb-8">
            {/* CARD 1 — Design UI/UX & Identité */}
            <div className="md:col-span-5">
              <div
                className="relative flex flex-col p-6 bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 hover:-translate-y-1 transition-transform duration-300"
                style={{
                  boxShadow: "8px 8px 0 rgba(0,0,0,1)",
                  minHeight: "320px",
                }}
              >
                {/* Badge "Design" */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black tracking-wider px-2 py-1 bg-black text-white flex items-center gap-1">
                    <Palette size={10} />{" "}
                    {t("hero.card1_badge", "DESIGN")}
                  </span>
                  <span
                    className="text-[10px] font-mono dark:text-zinc-300"
                    style={{ color: PURPLE }}
                  >
                    UI/UX • Branding
                  </span>
                </div>

                {/* Main content */}
                <div className="mb-3">
                  <h3 className="text-sm font-bold mb-2 flex items-center gap-2 text-black dark:text-white">
                    <Sparkles size={16} style={{ color: LIME }} />
                    {t("hero.card1_title", "Identité visuelle & Design d'interface")}
                  </h3>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-3">
                  <div>
                    <span className="text-4xl font-black text-black dark:text-white">
                      48
                    </span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {t("hero.card1_stat1_label", "projets livrés")}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-2xl font-black"
                      style={{ color: PURPLE }}
                    >
                      +95%
                    </span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {t("hero.card1_stat2_label", "satisfaction client")}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                  {t(
                    "hero.card1_desc",
                    "Logos, chartes graphiques, applications web & mobile — on donne vie à votre vision."
                  )}
                </p>

                {/* Bottom row */}
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">
                      {t("hero.card1_project_label", "Dernière réalisation")}
                    </span>
                    <span
                      className="text-sm font-bold dark:text-zinc-200"
                      style={{ color: PURPLE }}
                    >
                      Brandstorm • 2024
                    </span>
                  </div>
                  <button
                    className="text-xs font-bold px-3 py-1.5 border-2 border-black dark:border-neutral-600 hover:opacity-85 transition-opacity flex items-center gap-1 text-black dark:text-white"
                    style={{ backgroundColor: LIME }}
                  >
                    {t("hero.card1_cta", "Voir")}{" "}
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 — Community Management */}
            <div className="md:col-span-4">
              <div
                className="relative flex flex-col p-5 bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 hover:-translate-y-1 transition-transform duration-300"
                style={{
                  boxShadow: "8px 8px 0 rgba(0,0,0,1)",
                  minHeight: "320px",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Megaphone
                      size={18}
                      className="text-black dark:text-white"
                    />
                    <span className="text-xs font-bold text-black dark:text-white">
                      {t("hero.card2_title", "Community")}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono dark:text-zinc-300"
                    style={{ color: PURPLE }}
                  >
                    {t("hero.card2_badge", "Croissance")}
                  </span>
                </div>

                {/* Stats communauté */}
                <div className="mb-4">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-1">
                    {t("hero.card2_stat_label", "Engagement mensuel")}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-black dark:text-white">
                      +158
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: LIME }}
                    >
                      %
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    {t("hero.card2_vs", "vs. moyenne secteur")}
                  </p>
                </div>

                {/* Taux de croissance */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {t("hero.card2_active", "Communautés actives")}
                    </span>
                    <span
                      className="text-sm font-bold dark:text-zinc-200"
                      style={{ color: PURPLE }}
                    >
                      12
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-200 dark:bg-neutral-700">
                    <div
                      className="h-full"
                      style={{ width: "75%", backgroundColor: PURPLE }}
                    />
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1">
                    <Users size={12} /> +3.2k{" "}
                    {t("hero.card2_members", "membres cumulés")}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 — Automatisations IA */}
            <div className="md:col-span-3">
              <div
                className="relative flex flex-col p-5 bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 hover:-translate-y-1 transition-transform duration-300"
                style={{
                  boxShadow: "8px 8px 0 rgba(0,0,0,1)",
                  minHeight: "320px",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Repeat
                    size={18}
                    className="text-black dark:text-white"
                  />
                  <div className="flex gap-[2px]">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-3 animate-pulse"
                        style={{
                          backgroundColor: i === 3 ? PURPLE : LIME,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Main metric */}
                <div className="mb-4">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">
                    {t("hero.card3_stat_label", "Temps économisé")}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-3xl font-black text-black dark:text-white"
                      ref={(el) => (countersRef.current[2] = el)}
                    >
                      0
                    </span>
                    <span className="text-base" style={{ color: PURPLE }}>
                      %
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-1">
                    {t("hero.card3_stat_desc", "sur les tâches répétitives")}
                  </p>
                </div>

                {/* Efficiency indicator */}
                <div className="mt-auto">
                  <div className="flex items-center gap-1.5 mb-3">
                    <TrendingUp size={12} style={{ color: LIME }} />
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                      ROI x
                      <span ref={(el) => (countersRef.current[3] = el)}>
                        0
                      </span>{" "}
                      {t("hero.card3_roi", "en moyenne")}
                    </span>
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 border-2 border-black dark:border-neutral-600 hover:opacity-80 transition-opacity hover:-translate-y-0.5"
                    style={{ backgroundColor: PURPLE }}
                  >
                    <Smartphone size={12} />
                    {t("hero.card3_cta", "Audit offert")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fond bleu qui commence APRÈS les cards */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-screen"
            style={{
              top: "40px",
              bottom: "-4rem",
              backgroundColor: PURPLE,
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)`,
              backgroundSize: "24px 24px",
              zIndex: -1,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, rgba(0,139,255,0.5) 0%, transparent 60%, rgba(189,245,34,0.12) 100%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}