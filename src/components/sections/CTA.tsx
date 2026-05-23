"use client";

import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const PURPLE = "#541ba6";
const BLUE   = "#1b89a6";
const GOLD   = "#a68b1b";

export default function CTA() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* ── Lignes verticales ── */}
      <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />
      <div className="absolute right-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />

      {/* ── Ligne horizontale haut pleine largeur ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 z-10" />

      {/* ── Vague géométrique blueprint en bas ── */}
      <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden">
        {/* Couche 1 — plus sombre */}
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <polygon
            points="0,180 0,120 120,80 240,110 360,60 480,90 600,40 720,75 840,30 960,65 1080,20 1200,55 1320,15 1440,50 1440,180"
            fill={BLUE}
            opacity="0.12"
          />
          <polygon
            points="0,180 0,140 180,100 360,130 540,85 720,115 900,70 1080,100 1260,60 1440,90 1440,180"
            fill={BLUE}
            opacity="0.08"
          />
          <polygon
            points="0,180 0,160 240,130 480,155 720,125 960,148 1200,118 1440,140 1440,180"
            fill={BLUE}
            opacity="0.06"
          />
        </svg>

        {/* Grille blueprint par dessus */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(27,137,166,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,137,166,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Lignes diagonales blueprint */}
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Lignes de contour angulaires */}
          <polyline
            points="0,120 120,80 240,110 360,60 480,90 600,40 720,75 840,30 960,65 1080,20 1200,55 1320,15 1440,50"
            fill="none"
            stroke={BLUE}
            strokeWidth="1.5"
            opacity="0.3"
          />
          <polyline
            points="0,140 180,100 360,130 540,85 720,115 900,70 1080,100 1260,60 1440,90"
            fill="none"
            stroke={BLUE}
            strokeWidth="1"
            opacity="0.15"
          />
          {/* Points aux intersections */}
          {[
            [120,80],[240,110],[360,60],[480,90],[600,40],
            [720,75],[840,30],[960,65],[1080,20],[1200,55],[1320,15],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={BLUE} opacity="0.4" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 px-4 sm:px-[84px]">
        <div className="max-w-screen-2xl mx-auto">

          {/* ── BLOC PRINCIPAL ── */}
          <div className="border border-black/10">

            {/* Bande couleur haute */}
            <div className="w-full h-1" style={{ backgroundColor: BLUE }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT — accroche */}
              <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between gap-10">

                <div>
                  <p
                    className="text-[10px] font-black tracking-[0.3em] uppercase mb-5"
                    style={{ color: BLUE }}
                  >
                    On démarre quand vous voulez
                  </p>
                  <h2
                    className="font-black text-black leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
                  >
                    Un projet en tête ?<br />
                    <span style={{ color: PURPLE }}>Parlons-en.</span>
                  </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 border border-black/10">
                  {[
                    { value: "3", label: "projets livrés" },
                    { value: "4 sem.", label: "délai moyen" },
                    { value: "100%", label: "satisfaction" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className={`p-4 flex flex-col gap-1 ${i < 2 ? "border-r border-black/10" : ""}`}
                    >
                      <span
                        className="font-black text-2xl leading-none"
                        style={{ color: i === 0 ? PURPLE : i === 1 ? BLUE : GOLD }}
                      >
                        {s.value}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* RIGHT — actions */}
              <div className="p-10 lg:p-14 flex flex-col justify-between gap-8">

                <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
                  Que ce soit pour une identité visuelle, un redesign web, une stratégie de contenu ou des automatisations — on est là.
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <button
                    className="group w-full flex items-center justify-between px-6 py-4 border border-black/15 text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: BLUE }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = PURPLE;
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = BLUE;
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Mail size={16} />
                      Nous envoyer un message
                    </span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    className="group w-full flex items-center justify-between px-6 py-4 border border-black/15 text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: GOLD }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = PURPLE;
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.backgroundColor = GOLD;
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <MessageSquare size={16} />
                      Réserver un appel découverte
                    </span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Disponibilité */}
                <div className="flex items-center gap-3 border-t border-black/10 pt-6">
                  <div
                    className="w-2.5 h-2.5 border border-black/20 shrink-0"
                    style={{ backgroundColor: GOLD }}
                  />
                  <p className="text-zinc-500 text-xs font-medium">
                    Disponible pour de nouveaux projets —{" "}
                    <span className="font-black text-black">réponse sous 24h garantie</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ── FOOTER STRIP ── */}
          <div className="border border-t-0 border-black/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 border border-black/20 flex items-center justify-center"
                style={{ backgroundColor: PURPLE }}
              >
                <span className="text-white font-black text-xs">C</span>
              </div>
              <span className="font-black text-black text-sm tracking-tight">Conique</span>
              <span className="text-zinc-300 text-sm">·</span>
              <span className="text-zinc-400 text-xs font-medium">Design & Growth Studio</span>
            </div>
            <p className="text-zinc-400 text-xs font-medium">© 2024 Conique. Tous droits réservés.</p>
          </div>

        </div>
      </div>
    </section>
  );
}