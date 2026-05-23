"use client";

import {
  ArrowRight,
  Palette,
  Bot,
  Code2,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
  { name: "Développement d'applications", icon: <Code2 size={13} /> },
  { name: "Automatisations IA", icon: <Bot size={13} /> },
  { name: "Design UI/UX", icon: <Zap size={13} /> },
];

// ── Données des graphes ──
const brandGrowthData = [
  { month: "Jan", score: 20 },
  { month: "Fév", score: 35 },
  { month: "Mar", score: 28 },
  { month: "Avr", score: 52 },
  { month: "Mai", score: 61 },
  { month: "Jun", score: 78 },
  { month: "Jul", score: 95 },
];

const devDeliveryData = [
  { label: "React", val: 98 },
  { label: "Next", val: 95 },
  { label: "Node", val: 90 },
  { label: "API", val: 100 },
  { label: "Mobile", val: 88 },
];

const automationROIData = [
  { week: "S1", avant: 40, après: 40 },
  { week: "S2", avant: 40, après: 28 },
  { week: "S3", avant: 40, après: 18 },
  { week: "S4", avant: 40, après: 10 },
  { week: "S5", avant: 40, après: 6 },
  { week: "S6", avant: 40, après: 4 },
];

// Tooltip custom minimaliste
const CustomTooltip = ({
  active,
  payload,
  label,
  color,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  color: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="border border-black/10 bg-white px-2.5 py-1.5 shadow-sm">
        <p className="text-[10px] text-zinc-400 font-semibold">{label}</p>
        <p className="text-sm font-black" style={{ color }}>
          {payload[0].value}
          {color === GOLD ? "%" : ""}
        </p>
      </div>
    );
  }
  return null;
};

export default function Hero() {
  const { t } = useTranslation();
  const [ctaHovered, setCtaHovered] = useState<boolean>(false);

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
        <div className="hidden sm:block absolute top-9 left-0 w-[68px] h-full bg-white rounded-tr-[85px] z-20 border-r border-b border-black/5" />
        <div className="hidden sm:block absolute left-[68px] top-0 bottom-0 w-px bg-white/10 z-10" />
        <div className="hidden sm:block absolute top-9 right-0 w-[68px] h-full bg-white rounded-tl-[90px] z-20 border-l border-t border-black/5" />
        <div className="hidden sm:block absolute right-[68px] top-0 bottom-0 w-px bg-white/10 z-10" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto">

        {/* ── TOP ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-14">

          {/* LEFT */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 px-3 py-1.5 mt-8 mb-2 hover:scale-105 transition-transform duration-300">
              <span
                className="text-[12px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5 text-white"
                style={{ backgroundColor: GOLD }}
              >
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
              {t(
                "hero.subtitle",
                "Design UI/UX • Identité visuelle • Automatisations IA • Développement d'applications web et mobile"
              )}
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
                    el.style.borderColor = GOLD;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "";
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
                {t("hero.desc_highlight", "Notre méthodologie?")}
              </span>{" "}
              —{" "}
              {t(
                "hero.desc",
                "Du concept à la croissance, nous construisons et vous accompagnons pour créer des expériences uniques et qui durent de part notre AUTHENTICITÉ et notre SAVOIR-FAIRE."
              )}
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
                {t("hero.cta_start", "Démarrons ensemble votre projet")}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ── CARDS ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 items-stretch">

          {/* ── CARD 1 — Identité Visuelle ── */}
          <div className="md:col-span-5 flex">
            <div
              className="relative flex flex-col p-7 bg-white border-2 border-black overflow-hidden w-full transition-transform duration-300 hover:-translate-y-1"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px" }}
            >
              {/* Bande couleur */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: GOLD }} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black"
                  style={{ backgroundColor: GOLD }}
                >
                  <Palette size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400">Service 01</p>
                  <p className="text-lg font-black text-black">Identité Visuelle</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Une marque forte commence par un design qui
                <span className="font-black text-black"> marque les esprits</span>. Logo, charte, UI — tout est pensé pour durer.
              </p>

              {/* ── Graphe Recharts — croissance de marque ── */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-zinc-400 font-semibold">Impact marque après refonte</span>
                  <span className="text-xs font-black" style={{ color: GOLD }}>+95%</span>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <AreaChart data={brandGrowthData} margin={{ top: 4, right: 0, left: -32, bottom: 0 }}>
                    <defs>
                      <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                        <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip color={GOLD} />} />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke={GOLD}
                      strokeWidth={2}
                      fill="url(#goldGrad)"
                      dot={{ fill: GOLD, r: 2, strokeWidth: 0 }}
                      activeDot={{ r: 4, fill: GOLD, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ── CARD 2 — Dev Web & Mobile ── */}
          <div className="md:col-span-4 flex">
            <div
              className="relative flex flex-col p-6 bg-white border-2 border-black overflow-hidden w-full transition-transform duration-300 hover:-translate-y-1"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black"
                  style={{ backgroundColor: BLUE }}
                >
                  <Code2 size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400">Service 02</p>
                  <p className="text-lg font-black text-black">Dev Web & Mobile</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Apps, sites, APIs —
                <span className="font-black text-black"> du code propre qui scale</span>. Du MVP au produit final, on livre vite et bien.
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1 mb-4">
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

              {/* ── Graphe Recharts — fiabilité par technologie ── */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-zinc-400 font-semibold">Fiabilité & qualité</span>
                  <span className="text-xs font-black" style={{ color: BLUE }}>100%</span>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={devDeliveryData} margin={{ top: 4, right: 0, left: -32, bottom: 0 }} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="label" tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <YAxis domain={[80, 100]} tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip color={BLUE} />} />
                    <Bar dataKey="val" fill={BLUE} radius={[3, 3, 0, 0]} maxBarSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ── CARD 3 — Automatisations IA ── */}
          <div className="md:col-span-3 flex">
            <div
              className="relative flex flex-col p-5 bg-white border-2 border-black overflow-hidden w-full transition-transform duration-300 hover:-translate-y-1"
              style={{ boxShadow: "8px 8px 0 rgba(0,0,0,1)", minHeight: "300px" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: PURPLE }} />

              <div className="flex justify-between items-start mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black"
                  style={{ backgroundColor: PURPLE }}
                >
                  <Bot size={16} className="text-white" />
                </div>
                {/* Barres animées décoratives */}
                <div className="flex items-end gap-[3px] h-8">
                  {[4, 7, 5, 9, 6, 8, 5].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-sm animate-pulse"
                      style={{
                        height: `${h * 3}px`,
                        backgroundColor: i % 2 === 0 ? PURPLE : GOLD,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-1">
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-0.5">Service 03</p>
                <p className="text-lg font-black text-black mb-3">Automatisations IA</p>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                Vos tâches répétitives,
                <span className="font-black text-black"> automatisées en quelques jours</span>. Workflows, bots, agents IA — on vous libère du temps.
              </p>

              {/* ── Graphe Recharts — réduction de charge avant/après ── */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-zinc-400 font-semibold">Charge avant → après</span>
                  <span className="text-xs font-black" style={{ color: PURPLE }}>-47%</span>
                </div>
                <ResponsiveContainer width="100%" height={70}>
                  <LineChart data={automationROIData} margin={{ top: 4, right: 0, left: -32, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 9, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip color={PURPLE} />} />
                    <Line
                      type="monotone"
                      dataKey="avant"
                      stroke="#e4e4e7"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="après"
                      stroke={PURPLE}
                      strokeWidth={2}
                      dot={{ fill: PURPLE, r: 2, strokeWidth: 0 }}
                      activeDot={{ r: 4, fill: PURPLE, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <button
                className="mt-3 w-full flex items-center justify-center gap-1.5 text-white text-xs font-black px-3 py-2 border-2 border-black hover:opacity-80 transition-opacity"
                style={{ backgroundColor: PURPLE }}
              >
                <Workflow size={12} />
                Audit gratuit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}