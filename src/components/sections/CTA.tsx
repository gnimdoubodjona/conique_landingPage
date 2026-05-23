"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const PURPLE = "#541ba6";
const BLUE   = "#1b89a6";
const GOLD   = "#a68b1b";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative bg-white py-24 overflow-hidden">

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
                    {t("cta.badge")}
                  </p>
                  <h2
                    className="font-black text-black leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
                  >
                    {t("cta.title")}<br />
                    <span style={{ color: PURPLE }}>{t("cta.title_highlight")}</span>
                  </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 border border-black/10">
                  {[
                    { value: "48", label: t("cta.stat1_label") },
                    { value: t("cta.stat2_value"), label: t("cta.stat2_label") },
                    { value: "100%", label: t("cta.stat3_label") },
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
                  {t("cta.desc")}
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
                      {t("cta.btn_message")}
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
                      {t("cta.btn_call")}
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
                    {t("cta.dispo_prefix")}{" "}
                    <span className="font-black text-black">{t("cta.dispo_highlight")}</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ── FOOTER STRIP ── */}
          <div className="border border-t-0 border-black/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
            <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <img
              src="/images/coniqueLogo1.png"
              alt={t('logo.alt')}
              className="h-10 w-auto object-contain"
            />
          </div>
            </div>
            <p className="text-zinc-400 text-xs font-medium">{t("cta.footer_rights")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}