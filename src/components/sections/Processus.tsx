"use client";

import {
  MessageSquare,
  Compass,
  PenTool,
  Rocket,
} from "lucide-react";

const PURPLE = "#541ba6";
const BLUE = "#1b89a6";
const GOLD = "#a68b1b";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Brief & Discovery",
    description:
      "On prend le temps de comprendre votre activité, vos objectifs et votre cible. Chaque projet commence par une écoute attentive.",
    color: BLUE,
  },
  {
    number: "02",
    icon: Compass,
    title: "Stratégie & Concept",
    description:
      "On définit la direction créative, le positionnement et les livrables. Rien n'est lancé sans une vision claire et validée ensemble.",
    color: PURPLE,
  },
  {
    number: "03",
    icon: PenTool,
    title: "Création & Itération",
    description:
      "On conçoit, on affine, on itère. Vous validez à chaque étape. Le résultat final est exactement ce que vous aviez imaginé — en mieux.",
    color: GOLD,
  },
  {
    number: "04",
    icon: Rocket,
    title: "Livraison & Suivi",
    description:
      "Livraison des fichiers, mise en ligne ou déploiement. On reste disponibles après pour assurer la continuité et le suivi.",
    color: PURPLE,
  },
];

export default function Processus() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* ── Lignes verticales — alignées avec hero, nav et portfolio ── */}
      <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />
      <div className="absolute right-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />

      {/* ── Ligne horizontale haut — pleine largeur ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 z-10" />

      {/* ── Ligne horizontale bas — pleine largeur ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-10" />

      <div className="relative z-10 px-4 sm:px-[84px]">
        <div className="max-w-screen-2xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <div className="flex-1">
              <h2
                className="font-black text-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
              >
                Un process qui délivre.
              </h2>
            </div>
            <div className="flex-1 lg:pt-4 flex flex-col items-start lg:items-end gap-5">
              <p className="text-zinc-500 text-base leading-relaxed max-w-xs lg:text-right">
                Brief · Stratégie · Création · Livraison —
                chaque étape est pensée pour que votre projet arrive exactement où il doit être.
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full border-2 border-black"
                  style={{ backgroundColor: GOLD }}
                />
                <span className="text-zinc-500 text-sm font-medium">
                  Disponible pour de nouveaux projets
                </span>
              </div>
            </div>
          </div>

          {/* ── STEPS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col p-8 bg-white group cursor-default transition-colors duration-200 hover:bg-zinc-50
                    ${!isLast ? "border-b lg:border-b-0 lg:border-r border-black/10" : ""}
                  `}
                >
                  {/* Icône brutalist */}
                  <div className="mb-8 relative w-fit">
                    <div
                      className="absolute top-1.5 left-1.5 w-12 h-12 border border-black/15"
                      style={{ backgroundColor: step.color, opacity: 0.15 }}
                    />
                    <div
                      className="relative w-12 h-12 border border-black/20 bg-white flex items-center justify-center"
                    >
                      <Icon size={20} strokeWidth={2} style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Numéro */}
                  <p
                    className="text-[11px] font-black tracking-[0.2em] uppercase mb-3"
                    style={{ color: step.color }}
                  >
                    Étape {step.number}
                  </p>

                  {/* Titre */}
                  <h3 className="font-black text-black text-lg leading-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Accent bottom — hover */}
                  <div
                    className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="border border-t-0 border-black/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
            <p className="font-black text-black text-xl leading-tight max-w-sm">
              De l'idée au résultat —{" "}
              <span style={{ color: BLUE }}>en moyenne 2 à 4 semaines.</span>
            </p>
            <button
              className="group flex items-center gap-2 font-bold border border-black/20 px-5 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 text-white"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = PURPLE;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = BLUE;
              }}
            >
              Démarrer un projet
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}