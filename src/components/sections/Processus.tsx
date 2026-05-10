"use client";

import {
  MessageSquare,
  Compass,
  PenTool,
  Rocket,
} from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Brief & Discovery",
    description:
      "On prend le temps de comprendre votre activité, vos objectifs et votre cible. Chaque projet commence par une écoute attentive.",
    color: PURPLE,
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
    color: PURPLE,
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
    <section className="bg-white dark:bg-neutral-950 px-8 md:px-16 lg:px-32 py-24">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-20 max-w-2xl">
          {/* <p
            className="text-xs font-black tracking-[0.3em] uppercase mb-4"
            style={{ color: PURPLE }}
          >
            Comment on travaille
          </p> */}
          <h2 className="font-black text-black dark:text-white leading-none tracking-tight" style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}>
            Un process qui délivre.
          </h2>
        </div>

        {/* ── STEPS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black dark:border-neutral-700">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.number}
                className={`relative flex flex-col p-8 bg-white dark:bg-neutral-900 group cursor-default transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-neutral-800
                  ${!isLast ? "border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-neutral-700" : ""}
                `}
              >
                {/* ── Icône style "bordered box" comme dans l'image ── */}
                <div className="mb-8 relative w-fit">
                  {/* Décalage d'ombre brutalist */}
                  <div
                    className="absolute top-1.5 left-1.5 w-12 h-12 border-2 border-black"
                    style={{ backgroundColor: LIME }}
                  />
                  <div className="relative w-12 h-12 border-2 border-black bg-white flex items-center justify-center">
                    <Icon size={20} strokeWidth={2} style={{ color: PURPLE }} />
                  </div>
                </div>

                {/* Numéro */}
                <p
                  className="text-[11px] font-black tracking-[0.2em] uppercase mb-3"
                  style={{ color: PURPLE, WebkitTextStroke: `1px ${PURPLE}`,}}
                >
                  Étape {step.number}
                </p>

                {/* Titre */}
                <h3 className="font-black text-black dark:text-white text-lg leading-tight mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Accent bottom bar — apparaît au hover */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: LIME }}
                />
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM STATEMENT ── */}
        <div className="border-2 border-t-0 border-black dark:border-neutral-700 flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4">
          <p className="font-black text-black dark:text-white text-xl leading-tight max-w-sm">
            De l'idée au résultat —<br />
            <span style={{ color: PURPLE }}>en moyenne 2 à 4 semaines.</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: LIME, outline: `2px solid #000` }} />
            <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Disponible pour de nouveaux projets</span>
          </div>
        </div>

      </div>
    </section>
  );
}