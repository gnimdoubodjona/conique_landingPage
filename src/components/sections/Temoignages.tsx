"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

const testimonials = [
  {
    id: "01",
    name: "Sophie Marchand",
    role: "Fondatrice · Maison Léa",
    category: "Identité Visuelle",
    quote:
      "Conique a capturé l'essence de notre marque dès le premier brief. L'identité livrée était épurée, forte, mémorable. On a eu des retours clients dès le premier jour.",
    result: "+40%",
    resultLabel: "reconnaissance marque",
    color: PURPLE,
    shadowColor: LIME,
  },
  {
    id: "02",
    name: "Thomas Rey",
    role: "CEO · Korner Studio",
    category: "Redesign Web",
    quote:
      "Le redesign a complètement transformé notre image. En deux semaines, notre taux de contact avait plus que doublé. Les délais tenus, le résultat au-delà de nos attentes.",
    result: "×2.4",
    resultLabel: "taux de contact",
    color: LIME,
    shadowColor: PURPLE,
  },
  {
    id: "03",
    name: "Kévin Diallo",
    role: "Co-fondateur · FoodRush",
    category: "Community Management",
    quote:
      "En 4 mois, on est passé de zéro présence à 12k abonnés engagés. Conique ne livre pas juste du contenu — ils construisent une vraie audience.",
    result: "+12k",
    resultLabel: "abonnés en 4 mois",
    color: PURPLE,
    shadowColor: LIME,
  },
];

export default function Temoignages() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="border-black px-8 md:px-16 lg:px-32 py-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p
              className="text-[10px] font-black tracking-[0.3em] uppercase mb-4"
              style={{ color: PURPLE }}
            >
              Ce qu'ils disent
            </p>
            <h2
              className="font-black text-black dark:text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              Ils nous font<br />confiance.
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-xs lg:text-right leading-relaxed">
            Des clients satisfaits, des résultats mesurables,
            des collaborations qui durent.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-black dark:border-neutral-700">
          {testimonials.map((t, i) => {
            const isLast    = i === testimonials.length - 1;
            const isHovered = hovered === t.id;
            const onColor   = t.color === LIME ? "#000" : "#fff";

            return (
              <div
                key={t.id}
                onMouseEnter={() => setHovered(t.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex flex-col p-7 transition-colors duration-200 cursor-default overflow-hidden
                  ${!isLast ? "border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-neutral-700" : ""}
                  ${isHovered ? "bg-zinc-50 dark:bg-neutral-800" : "bg-white dark:bg-neutral-900"}
                `}
              >

                {/* ── ICÔNE avec offset shadow brutalist ── */}
                <div className="mb-7 relative w-fit">
                  {/* Ombre décalée */}
                  <div
                    className="absolute top-1.5 left-1.5 w-10 h-10 border-2 border-black transition-colors duration-300"
                    style={{ backgroundColor: isHovered ? "#000" : t.shadowColor }}
                  />
                  {/* Boîte icône */}
                  <div
                    className="relative w-10 h-10 border-2 border-black flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: isHovered ? "#fff" : t.color,
                      color: isHovered ? t.color : onColor,
                    }}
                  >
                    <MessageCircle size={16} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Catégorie badge */}
                <span
                  className="self-start text-[9px] font-black tracking-widest uppercase border-2 px-2 py-0.5 mb-5"
                  style={{ color: t.color, borderColor: t.color }}
                >
                  {t.category}
                </span>

                {/* Citation */}
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1 mb-7">
                  « {t.quote} »
                </p>

                {/* Auteur + stat */}
                <div className="flex items-end justify-between border-t-2 border-black dark:border-neutral-700 pt-4 gap-3">
                  <div>
                    <p className="font-black text-black dark:text-white text-sm leading-tight">{t.name}</p>
                    <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-medium mt-0.5">{t.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-black text-2xl leading-none" style={{ color: t.color }}>
                      {t.result}
                    </p>
                    <p className="text-zinc-400 dark:text-zinc-500 text-[10px] font-medium mt-0.5 leading-tight max-w-[72px] text-right">
                      {t.resultLabel}
                    </p>
                  </div>
                </div>

                {/* Barre bottom hover */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] transition-all duration-300"
                  style={{ width: isHovered ? "100%" : "0%", backgroundColor: t.color }}
                />
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-2 border-t-0 border-black dark:border-neutral-700 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-black text-black dark:text-white text-xl mr-2">100%</span>
            des clients recommandent Conique
          </p>
          <button
            className="group flex items-center gap-2 font-bold border-2 border-black px-5 py-2 text-sm text-black transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: LIME }}
          >
            Démarrer un projet
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}