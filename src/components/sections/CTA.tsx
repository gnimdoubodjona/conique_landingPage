"use client";

import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

export default function CTA() {
  return (
    <section className=" border-black px-8 md:px-16 lg:px-32 py-24" >
      <div className="max-w-7xl mx-auto">

        {/* ── BLOC PRINCIPAL ── */}
        <div className="border-2 border-black">

          {/* Top bar colorée */}
          <div
            className="w-full h-2 border-b-2 border-black"
            style={{ backgroundColor: LIME }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — accroche */}
            <div className="p-10 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between gap-10">

              <div>
                <p
                  className="text-[10px] font-black tracking-[0.3em] uppercase mb-5"
                  style={{ color: PURPLE }}
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

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-0 border-2 border-black">
                {[
                  { value: "48", label: "projets livrés" },
                  { value: "4 sem.", label: "délai moyen" },
                  { value: "100%", label: "satisfaction" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`p-4 flex flex-col gap-1 ${i < 2 ? "border-r-2 border-black" : ""}`}
                  >
                    <span className="font-black text-2xl leading-none text-black">{s.value}</span>
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
                  className="group w-full flex items-center justify-between px-6 py-4 border-2 border-black text-white font-bold text-sm transition-all duration-200 hover:opacity-85"
                  style={{ backgroundColor: PURPLE }}
                >
                  <span className="flex items-center gap-3">
                    <Mail size={16} />
                    Nous envoyer un message
                  </span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="group w-full flex items-center justify-between px-6 py-4 border-2 border-black text-black font-bold text-sm transition-all duration-200 hover:opacity-85"
                  style={{ backgroundColor: LIME }}
                >
                  <span className="flex items-center gap-3">
                    <MessageSquare size={16} />
                    Réserver un appel découverte
                  </span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Disponibilité */}
              <div className="flex items-center gap-3 border-t-2 border-black pt-6">
                <div
                  className="w-2.5 h-2.5 border-2 border-black shrink-0"
                  style={{ backgroundColor: LIME }}
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
        <div className="border-2 border-t-0 border-black flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 border-2 border-black flex items-center justify-center"
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
    </section>
  );
}