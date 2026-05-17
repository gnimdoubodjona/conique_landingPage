"use client";

import {
  ArrowRight,
  Play,
  Palette,
  Zap,
  ChevronRight,
  Bot,
  Code2,
  Workflow,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PURPLE = "#541ba6";
const BLUE = "#1b89a6";
const GOLD = "#a68b1b";
const HERO_BG = "#0e6d87";

interface Service {
  name: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  { name: "Identité Visuelle", icon: <Palette size={13} /> },
  { name: "Dev Web & Mobile", icon: <Code2 size={13} /> },
  { name: "Automatisations IA", icon: <Bot size={13} /> },
  { name: "Design UI/UX", icon: <Zap size={13} /> },
];

export default function Hero() {
  const { t } = useTranslation();
  const [ctaHovered, setCtaHovered] = useState<boolean>(false);
  const [secondaryHovered, setSecondaryHovered] = useState<boolean>(false);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<{ el: HTMLSpanElement; target: number; suffix?: string }[]>([]);

  const registerStat = (el: HTMLSpanElement | null, target: number, suffix?: string) => {
    if (el && !statRefs.current.find((s) => s.el === el)) {
      statRefs.current.push({ el, target, suffix });
    }
  };

  useEffect(() => {
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    statRefs.current.forEach(({ el, target, suffix }) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = Math.ceil(obj.val) + (suffix ?? "");
        },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-4 sm:px-[84px]">

      {/* ── Fond + coins arrondis ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-screen overflow-hidden"
        style={{ top: 0, bottom: "-4rem", backgroundColor: HERO_BG, zIndex: -1 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(84,27,166,0.25) 0%, transparent 55%, rgba(166,139,27,0.08) 100%)`,
          }}
        />
        <div className="hidden sm:block absolute top-9 left-0 w-[68px] h-full bg-[#f3f1eb] rounded-tr-[85px] z-20 border-r border-b border-black/5" />
        <div className="hidden sm:block absolute left-[68px] top-0 bottom-0 w-px bg-white/10 z-10" />
        <div className="hidden sm:block absolute top-9 right-0 w-[68px] h-full bg-[#f3f1eb] rounded-tl-[90px] z-20 border-l border-t border-black/5" />
        <div className="hidden sm:block absolute right-[68px] top-0 bottom-0 w-px bg-white/10 z-10" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto">

        {/* ── TOP ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-14">

          {/* LEFT */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 px-3 py-1.5 mt-8 mb-2 hover:scale-105 transition-transform duration-300">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase px-1.5 py-0.5 bg-white" style={{ color: PURPLE }}>
                {t("hero.badge", "Conique")}
              </span>
              <span className="text-white text-xs tracking-wide font-medium">
                {t("hero.badge_sub", "Design & Growth Studio")}
              </span>
            </div>

            <h1
              className="text-white font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5.2vw, 5rem)" }}
            >
              {t("hero.title_line1", "On transforme")}
              <span className="block mt-2" style={{ color: GOLD }}>
                {t("hero.title_line2", "vos idées en impact.")}
              </span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mt-6 font-medium">
              {t("hero.subtitle", "Design UI/UX • Identité visuelle • Automatisations IA • Dev Web & Mobile")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex-1 lg:pt-[5.5rem] lg:pl-8 flex flex-col gap-6 text-left">
            <div className="flex flex-wrap gap-2">
              {services.map((s: Service, i: number) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 border-2 border-white/30 bg-white/10 text-white px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-default hover:-translate-y-0.5"
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = GOLD;
                    el.style.color = "#fff";
                    el.style.borderColor = GOLD;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    const el = e.currentTarget;
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

            <p className="text-white/70 text-base leading-relaxed max-w-sm">
              <span className="font-black text-white">
                {t("hero.desc_highlight", "48 projets livrés")}
              </span>{" "}
              — {t("hero.desc", "Du concept à la croissance, on construit des expériences qui marquent et des systèmes qui scale.")}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="flex items-center gap-2 font-bold px-5 py-2.5 border-2 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: ctaHovered ? GOLD : BLUE,
                  color: "#fff",
                  borderColor: ctaHovered ? GOLD : BLUE,
                }}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
              >
                {t("hero.cta_start", "Démarrer un projet")}
                <ArrowRight size={14} />
              </button>

              <button
                className="flex items-center gap-2 border-2 font-bold px-5 py-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: secondaryHovered ? "#fff" : "rgba(255,255,255,0.1)",
                  color: secondaryHovered ? "#000" : "#fff",
                  borderColor: secondaryHovered ? "#fff" : "rgba(255,255,255,0.3)",
                }}
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
              >
                <Play size={12} className="fill-current" />
                {t("hero.cta_portfolio", "Voir le portfolio")}
              </button>
            </div>
          </div>
        </div>

        {/* ── CARDS — items-stretch pour alignement parfait ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 items-stretch">

          {/* ── CARD 1 — Identité Visuelle ── */}
          <div className="md:col-span-5 flex">
            <div
              ref={(el) => { cardsRef.current[0] = el; }}
              className="relative flex flex-col p-7 bg-white border-2 border-black overflow-hidden w-full"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px", opacity: 0 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: GOLD }} />
              <div
                className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.04] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
              />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center border-2 border-black flex-shrink-0"
                  style={{ backgroundColor: GOLD }}
                >
                  <Palette size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400">Service 01</p>
                  <p className="text-sm font-black text-black">Identité Visuelle</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 max-w-xs">
                Une marque forte commence par un design qui
                <span className="font-black text-black"> marque les esprits</span>. Logo, charte, UI — tout est pensé pour durer.
              </p>

              <div className="flex gap-6 mt-auto">
                <div>
                  <span
                    className="text-4xl font-black text-black tabular-nums"
                    ref={(el) => registerStat(el, 48)}
                  >0</span>
                  <p className="text-[10px] text-zinc-400 font-semibold mt-1">projets livrés</p>
                </div>
                <div className="w-px bg-zinc-100" />
                <div>
                  <span
                    className="text-4xl font-black tabular-nums"
                    style={{ color: PURPLE }}
                    ref={(el) => registerStat(el, 95, "%")}
                  >0</span>
                  <p className="text-[10px] text-zinc-400 font-semibold mt-1">satisfaction</p>
                </div>
              </div>

              <button
                className="mt-5 self-start flex items-center gap-1.5 text-xs font-black border-b-2 pb-0.5 transition-all duration-200 hover:gap-2.5"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                Voir les réalisations <ChevronRight size={12} />
              </button>
            </div>
          </div>

          {/* ── CARD 2 — Dev Web & Mobile ── */}
          <div className="md:col-span-4 flex">
            <div
              ref={(el) => { cardsRef.current[1] = el; }}
              className="relative flex flex-col p-6 bg-white border-2 border-black overflow-hidden w-full"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px", opacity: 0 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />
              <div
                className="absolute bottom-0 right-0 w-36 h-36 opacity-[0.04] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)` }}
              />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center border-2 border-black flex-shrink-0"
                  style={{ backgroundColor: BLUE }}
                >
                  <Code2 size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400">Service 02</p>
                  <p className="text-sm font-black text-black">Dev Web & Mobile</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Apps, sites, APIs —
                <span className="font-black text-black"> du code propre qui scale</span>. Du MVP au produit final, on livre vite et bien.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["React", "Next.js", "Node", "API", "Mobile"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-black px-2 py-0.5 text-white"
                    style={{ backgroundColor: i % 2 === 0 ? BLUE : PURPLE }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-zinc-400 font-semibold">Livraison dans les délais</span>
                  <span className="text-xs font-black" style={{ color: BLUE }}>92%</span>
                </div>
                <div className="flex gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      ref={(el) => {
                        if (el) {
                          gsap.fromTo(el,
                            { scaleX: 0 },
                            {
                              scaleX: 1,
                              duration: 0.35,
                              delay: 0.1 + i * 0.07,
                              ease: "power2.out",
                              transformOrigin: "left",
                              scrollTrigger: { trigger: el, start: "top 90%", once: true },
                            }
                          );
                        }
                      }}
                      className="h-1.5 flex-1 rounded-full"
                      style={{ backgroundColor: i < 9 ? BLUE : "#e4e4e7" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 3 — Automatisations IA ── */}
          <div className="md:col-span-3 flex">
            <div
              ref={(el) => { cardsRef.current[2] = el; }}
              className="relative flex flex-col p-5 bg-white border-2 border-black overflow-hidden w-full"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px", opacity: 0 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: PURPLE }} />
              <div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.04] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${PURPLE} 0%, transparent 70%)` }}
              />

              <div className="flex justify-between items-start mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center border-2 border-black flex-shrink-0"
                  style={{ backgroundColor: PURPLE }}
                >
                  <Bot size={16} className="text-white" />
                </div>
                <div className="flex items-end gap-[3px] h-8">
                  {[4, 7, 5, 9, 6, 8, 5].map((h, i) => (
                    <div
                      key={i}
                      ref={(el) => {
                        if (el) {
                          gsap.fromTo(el,
                            { scaleY: 0 },
                            {
                              scaleY: 1,
                              duration: 0.5,
                              delay: i * 0.08,
                              ease: "elastic.out(1, 0.5)",
                              transformOrigin: "bottom",
                              scrollTrigger: { trigger: el, start: "top 90%", once: true },
                            }
                          );
                          gsap.to(el, {
                            scaleY: 0.4 + Math.random() * 0.6,
                            duration: 0.6 + Math.random() * 0.4,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut",
                            delay: i * 0.1,
                            transformOrigin: "bottom",
                          });
                        }
                      }}
                      className="w-1.5 rounded-sm"
                      style={{
                        height: `${h * 3}px`,
                        backgroundColor: i % 2 === 0 ? PURPLE : GOLD,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-1">
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-0.5">Service 03</p>
                <p className="text-sm font-black text-black mb-3">Automatisations IA</p>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                Vos tâches répétitives,
                <span className="font-black text-black"> automatisées en quelques jours</span>. Workflows, bots, agents IA — on vous libère du temps.
              </p>

              <div className="mt-auto flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} style={{ color: GOLD }} />
                    <span className="text-[10px] text-zinc-400 font-semibold">Temps économisé</span>
                  </div>
                  <span
                    className="text-sm font-black tabular-nums"
                    style={{ color: BLUE }}
                    ref={(el) => registerStat(el, 47, "%")}
                  >0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={11} style={{ color: GOLD }} />
                    <span className="text-[10px] text-zinc-400 font-semibold">ROI moyen</span>
                  </div>
                  <span
                    className="text-sm font-black tabular-nums"
                    style={{ color: PURPLE }}
                    ref={(el) => registerStat(el, 12, "x")}
                  >0x</span>
                </div>

                <button
                  className="mt-1 w-full flex items-center justify-center gap-1.5 text-white text-xs font-black px-3 py-2 border-2 border-black hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: PURPLE }}
                >
                  <Workflow size={12} />
                  Audit gratuit
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}