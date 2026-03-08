"use client";

import { ArrowRight, Play, Palette, Megaphone, Repeat, PenTool, Zap, ChevronRight } from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

// Pattern adapté à la palette — points violet léger sur fond blanc cassé
// const DOT_PATTERN = {
//   backgroundColor: "#fafafa",
//   backgroundImage: `radial-gradient(${PURPLE}22 0.5px, transparent 0.5px), radial-gradient(${PURPLE}22 0.5px, #fafafa 0.5px)`,
//   backgroundSize: "20px 20px",
//   backgroundPosition: "0 0, 10px 10px",
// };

const services = [
  { name: "Identité Visuelle", icon: <Palette size={13} /> },
  // { name: "Logo & Affiches",   icon: <PenTool size={13} /> },
  { name: "Community Management",    icon: <Megaphone size={13} /> },
  { name: "Automatisations IA",   icon: <Repeat size={13} /> },
  { name: "Design UI/UX",      icon: <Zap size={13} /> },
];

export default function Hero() {
  return (
    <section
      className="relative z-10 min-h-screen overflow-hidden px-8 mt-6 md:px-16 lg:px-32"
      
    >
      <div className="relative max-w-7xl mx-auto">

        {/* ── TOP ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-14">

          {/* LEFT — headline */}
          <div className="flex-1 text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1.5 mb-6">
              <span
                className="text-[10px] font-black tracking-[0.2em] uppercase px-1.5 py-0.5 text-white"
                style={{ backgroundColor: PURPLE }}
              >
                Conique
              </span>
              <span className="text-black text-xs tracking-wide font-medium">
                Design & Growth Studio
              </span>
            </div>

            <h1
              className="text-black font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5.2vw, 5rem)" }}
            >
              On donne vie à
              <span className="block mt-2" style={{ color: PURPLE }}>
                votre marque.
              </span>
            </h1>

            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mt-6 font-medium">
              Identité visuelle, Design UI/UX, automatisations IA & Community Management.
            </p>
          </div>

          {/* RIGHT — tags + desc + CTA */}
          <div className="flex-1 lg:pt-[5.5rem] lg:pl-8 flex flex-col gap-6 text-left">

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-xs font-bold transition-colors duration-200 cursor-default"
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = PURPLE;
                    el.style.color = "#fff";
                    el.style.borderColor = PURPLE;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#fff";
                    el.style.color = "#000";
                    el.style.borderColor = "#000";
                  }}
                >
                  {s.icon}
                  {s.name}
                </div>
              ))}
            </div>

            <p className="text-zinc-600 text-base leading-relaxed max-w-sm">
              <span className="font-black text-black">48 projets livrés</span> —
              Des identités qui marquent, des systèmes qui automatisent,
              et des communautés qui grandissent.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="group flex items-center gap-2 font-bold px-5 py-2.5 border-2 text-white text-sm transition-all duration-200"
                style={{ backgroundColor: PURPLE, borderColor: PURPLE }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#fff";
                  el.style.color = "#000";
                  el.style.borderColor = "#000";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = PURPLE;
                  el.style.color = "#fff";
                  el.style.borderColor = PURPLE;
                }}
              >
                Démarrer un projet
                <ArrowRight size={14} />
              </button>
              <button className="flex items-center gap-2 border-2 border-black bg-white text-black font-bold px-5 py-2.5 text-sm hover:bg-black hover:text-white transition-all duration-200">
                <Play size={12} className="fill-current" />
                Voir le portfolio
              </button>
            </div>
          </div>
        </div>

        {/* ── CARDS SECTION ── */}
        <div
          className="relative w-[calc(100%+4rem)] -mx-8 md:w-[calc(100%+8rem)] md:-mx-16 lg:w-[calc(100%+16rem)] lg:-mx-32 px-8 md:px-16 lg:px-32 py-12 overflow-hidden"
          style={{
            backgroundColor: PURPLE,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
          }}
        >
          {/* gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(0,139,255,0.5) 0%, transparent 60%, rgba(189,245,34,0.12) 100%)`,
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">

            {/* CARD 1 — Design */}
            <div
              className="relative flex flex-col justify-between min-h-[320px] p-6 overflow-hidden"
              style={{
                backgroundColor: "rgba(0,10,30,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex justify-between items-start">
                <span
                  className="text-[72px] font-black leading-none text-white"
                  style={{ letterSpacing: "-4px" }}
                >
                  128
                </span>
                <span
                  className="text-[10px] font-mono tracking-widest uppercase mt-2"
                  style={{ color: LIME }}
                >
                  Projets v1.3
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-white font-bold text-lg mb-1">Design Graphique</p>
                <div className="flex items-end justify-between gap-3">
                  <p
                    className="text-sm leading-snug flex-1"
                    style={{ color: "rgba(189,245,34,0.75)" }}
                  >
                    Chartes graphiques, logos, affiches et supports print/digital.
                  </p>
                  <button
                    className="shrink-0 text-xs font-bold px-3 py-2 border-2 border-black text-black whitespace-nowrap hover:opacity-85 transition-opacity"
                    style={{ backgroundColor: LIME }}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 — Community */}
            <div
              className="relative flex flex-col justify-between min-h-[320px] p-6 overflow-hidden"
              style={{
                backgroundColor: "rgba(0,5,20,0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute bottom-4 right-4 opacity-[0.06]">
                <Megaphone size={110} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-3 tracking-wide">
                  Community Management
                </p>
                <span
                  className="font-black leading-none text-white block"
                  style={{ fontSize: "clamp(3rem,5vw,4rem)", letterSpacing: "-3px" }}
                >
                  3.2k
                  <span className="text-2xl" style={{ color: LIME }}>/mois</span>
                </span>
                <span className="text-sm font-medium" style={{ color: "rgba(189,245,34,0.6)" }}>
                  reach moyen · organique
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-zinc-400 text-sm leading-snug mb-4">
                  Stratégie de contenu, publications et animation de communauté.
                </p>
                <button
                  className="flex items-center gap-1.5 text-black text-xs font-bold px-3 py-2 border-2 border-black hover:opacity-85 transition-opacity"
                  style={{ backgroundColor: LIME }}
                >
                  Voir les résultats <ChevronRight size={13} />
                </button>
              </div>
            </div>

            {/* CARD 3 — Automatisations */}
            <div
              className="relative flex flex-col justify-between min-h-[320px] p-6 overflow-hidden bg-white"
              style={{ border: "2px solid #000" }}
            >
              <div className="flex justify-between items-start">
                <p className="text-black font-bold text-base tracking-wide">Automatisations</p>
                <div className="flex items-end gap-[3px] h-7">
                  {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="w-[5px]"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? PURPLE : `${PURPLE}33`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <span
                  className="font-black leading-none text-black block"
                  style={{ fontSize: "clamp(3.5rem,6vw,5rem)", letterSpacing: "-4px" }}
                >
                  91<span style={{ color: PURPLE }}>%</span>
                </span>
                <span className="text-zinc-500 text-sm font-medium">
                  tâches automatisées · gain de temps
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-zinc-600 text-sm leading-snug mb-4">
                  Workflows, intégrations et pipelines pensés pour scaler sans effort.
                </p>
                <button
                  className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-2 border-2 border-black hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: PURPLE }}
                >
                  Lancer un projet <ChevronRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}