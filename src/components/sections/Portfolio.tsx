"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Paintbrush,
  MonitorSmartphone,
  Users,
} from "lucide-react";

const PURPLE = "#541ba6";
const BLUE = "#1b89a6";
const GOLD = "#a68b1b";

type Project = {
  id: string;
  clientKey: string;
  categoryKey: string;
  year: string;
  descriptionKey: string;
  stat: string;
  statLabelKey: string;
  icon: any;
  bubbleKey: string;
  color: string;
  colorLight: string;
};

const projects: Project[] = [
  {
    id: "01",
    clientKey: "portfolio.project1_client",
    categoryKey: "portfolio.project1_category",
    year: "2024",
    descriptionKey: "portfolio.project1_desc",
    stat: "+3",
    statLabelKey: "portfolio.project1_statLabel",
    icon: Paintbrush,
    bubbleKey: "portfolio.project1_bubble",
    color: GOLD,
    colorLight: "rgba(166,139,27,0.10)",
  },
  {
    id: "02",
    clientKey: "portfolio.project2_client",
    categoryKey: "portfolio.project2_category",
    year: "2024",
    descriptionKey: "portfolio.project2_desc",
    stat: "×2.4",
    statLabelKey: "portfolio.project2_statLabel",
    icon: MonitorSmartphone,
    bubbleKey: "portfolio.project2_bubble",
    color: BLUE,
    colorLight: "rgba(27,137,166,0.10)",
  },
  {
    id: "03",
    clientKey: "portfolio.project3_client",
    categoryKey: "portfolio.project3_category",
    year: "2023",
    descriptionKey: "portfolio.project3_desc",
    stat: "+12k",
    statLabelKey: "portfolio.project3_statLabel",
    icon: Users,
    bubbleKey: "portfolio.project3_bubble",
    color: PURPLE,
    colorLight: "rgba(84,27,166,0.10)",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<boolean>(false);
  const Icon = project.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col cursor-pointer transition-all duration-300 bg-white border-r border-black/10 last:border-r-0"
    >
      {/* ── VISUAL BLOCK ── */}
      <div
        className="relative h-52 w-full border-b border-black/10 overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: hovered ? project.color : project.colorLight }}
      >
        {/* Watermark ID */}
        <span
          className="absolute inset-0 flex items-center justify-center font-black select-none pointer-events-none transition-opacity duration-300"
          style={{
            fontSize: "8rem",
            lineHeight: 1,
            color: project.color,
            opacity: hovered ? 0.2 : 0.08,
          }}
        >
          {project.id}
        </span>

        {/* Bubble hover */}
        <div
          className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 border border-black/15 bg-white px-4 py-2 min-w-max transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translateX(-50%) translateY(0)"
              : "translateX(-50%) translateY(10px)",
          }}
        >
          <p className="text-xs font-bold text-black">{t(project.bubbleKey)}</p>
        </div>

        {/* Icône brutalist */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="relative w-fit">
            <div
              className="absolute top-1.5 left-1.5 w-10 h-10 border border-black/20 transition-colors duration-300"
              style={{ backgroundColor: hovered ? "rgba(0,0,0,0.1)" : "transparent" }}
            />
            <div
              className="relative w-10 h-10 border border-black/20 flex items-center justify-center transition-colors duration-300"
              style={{ backgroundColor: hovered ? project.color : "rgba(0,0,0,0.05)" }}
            >
              <Icon
                size={17}
                strokeWidth={2}
                style={{ color: hovered ? "#fff" : project.color }}
              />
            </div>
          </div>
        </div>

        {/* Flèche top-right */}
        <div
          className="absolute top-3 right-3 w-8 h-8 border border-black/15 flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: hovered ? project.color : "rgba(0,0,0,0.04)" }}
        >
          <ArrowUpRight size={13} style={{ color: hovered ? "#fff" : "#000" }} />
        </div>

        {/* Année top-left */}
        <span className="absolute top-3 left-3 font-mono text-[10px] font-semibold px-2 py-0.5 border border-black/10 bg-white/80 text-zinc-400">
          {project.year}
        </span>
      </div>

      {/* ── CONTENT ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <span
          className="self-start text-[9px] font-black tracking-widest uppercase border px-2 py-0.5"
          style={{ color: project.color, borderColor: project.color }}
        >
          {t(project.categoryKey)}
        </span>

        <h3 className="font-black text-xl text-black leading-tight">{t(project.clientKey)}</h3>

        <p className="text-zinc-500 text-sm leading-relaxed">{t(project.descriptionKey)}</p>

        <div className="flex items-baseline gap-2 border-t border-black/10 pt-3 mt-auto">
          <span className="font-black text-3xl leading-none" style={{ color: project.color }}>
            {project.stat}
          </span>
          <span className="text-[11px] text-zinc-400 font-medium">{t(project.statLabelKey)}</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="projets" className="relative bg-white py-20 overflow-hidden">

      {/* ── Lignes verticales — alignées avec hero et nav ── */}
      <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />
      <div className="absolute right-[60px] top-0 bottom-0 w-px bg-gray-200 z-10" />

      <div className="absolute top-0 left-0 w-[60px] h-px bg-gray-200 z-10" />
      {/* ── Ligne horizontale côté droit ── */}
      <div className="absolute top-0 right-0 w-[60px] h-px bg-gray-200 z-10" />


      <div className="relative z-10 px-4 sm:px-[84px]">
        <div className="max-w-screen-2xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <div className="flex-1">
              <h2 className="font-black leading-none tracking-tight text-black text-5xl lg:text-6xl">
                {t("portfolio.title")}
              </h2>
            </div>

            <div className="flex-1 lg:pt-4 flex flex-col items-start lg:items-end gap-5">
              <p className="text-zinc-500 text-base leading-relaxed max-w-xs lg:text-right">
                {t("portfolio.desc")}
              </p>
              <button
                className="group flex items-center gap-2 font-bold px-5 py-2.5 border border-black/20 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: BLUE, color: "#fff" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = PURPLE;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = BLUE;
                }}
              >
                {t("portfolio.cta_all")}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="border border-t-0 border-black/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
            <p className="text-sm font-medium text-zinc-500">
              <span className="font-black text-black text-xl mr-2">3</span>
              {t("portfolio.stats")}
            </p>
            <button
              className="group flex items-center gap-2 font-bold border border-black/20 px-5 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD, color: "#fff" }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = PURPLE;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = GOLD;
              }}
            >
              {t("portfolio.cta_start")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}