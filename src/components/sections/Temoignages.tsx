"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const PURPLE = "#541ba6";
const BLUE   = "#1b89a6";
const GOLD   = "#a68b1b";

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
    color: GOLD,
    shadowColor: PURPLE,
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
    color: BLUE,
    shadowColor: GOLD,
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
    shadowColor: BLUE,
  },
];

export default function Temoignages() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* ── Lignes verticales ── */}
      <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />
      <div className="absolute right-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />

      {/* ── Lignes horizontales pleine largeur ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-10" />

      <div className="relative z-10 px-4 sm:px-[84px]">
        <div className="max-w-screen-2xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p
                className="text-[10px] font-black tracking-[0.3em] uppercase mb-4"
                style={{ color: BLUE }}
              >
                Ce qu'ils disent
              </p>
              <h2
                className="font-black text-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
              >
                Ils nous font<br />confiance.
              </h2>
            </div>
            <p className="text-zinc-500 text-base max-w-xs lg:text-right leading-relaxed">
              Des clients satisfaits, des résultats mesurables,
              des collaborations qui durent.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
            {testimonials.map((t, i) => {
              const isLast    = i === testimonials.length - 1;
              const isHovered = hovered === t.id;

              return (
                <div
                  key={t.id}
                  onMouseEnter={() => setHovered(t.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative flex flex-col p-7 transition-colors duration-200 cursor-default overflow-hidden
                    ${!isLast ? "border-b md:border-b-0 md:border-r border-black/10" : ""}
                    ${isHovered ? "bg-zinc-50" : "bg-white"}
                  `}
                >
                  {/* Icône brutalist */}
                  <div className="mb-7 relative w-fit">
                    <div
                      className="absolute top-1.5 left-1.5 w-10 h-10 border border-black/15 transition-colors duration-300"
                      style={{ backgroundColor: isHovered ? t.shadowColor : t.shadowColor, opacity: isHovered ? 1 : 0.3 }}
                    />
                    <div
                      className="relative w-10 h-10 border border-black/20 flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: isHovered ? t.color : "white",
                      }}
                    >
                      <MessageCircle
                        size={16}
                        strokeWidth={2.5}
                        style={{ color: isHovered ? "#fff" : t.color }}
                      />
                    </div>
                  </div>

                  {/* Catégorie badge */}
                  <span
                    className="self-start text-[9px] font-black tracking-widest uppercase border px-2 py-0.5 mb-5"
                    style={{ color: t.color, borderColor: t.color }}
                  >
                    {t.category}
                  </span>

                  {/* Citation */}
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-7">
                    « {t.quote} »
                  </p>

                  {/* Auteur + stat */}
                  <div className="flex items-end justify-between border-t border-black/10 pt-4 gap-3">
                    <div>
                      <p className="font-black text-black text-sm leading-tight">{t.name}</p>
                      <p className="text-zinc-400 text-[11px] font-medium mt-0.5">{t.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-black text-2xl leading-none" style={{ color: t.color }}>
                        {t.result}
                      </p>
                      <p className="text-zinc-400 text-[10px] font-medium mt-0.5 leading-tight max-w-[72px] text-right">
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
          <div className="border border-t-0 border-black/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
            <p className="text-sm font-medium text-zinc-500">
              <span className="font-black text-black text-xl mr-2">100%</span>
              des clients recommandent Conique
            </p>
            <button
              className="group flex items-center gap-2 font-bold border border-black/20 px-5 py-2 text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = PURPLE;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = GOLD;
              }}
            >
              Démarrer un projet
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}