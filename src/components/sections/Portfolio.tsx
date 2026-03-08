"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Paintbrush,
  MonitorSmartphone,
  Users,
} from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

const projects = [
  {
    id: "01",
    client: "Maison Léa",
    category: "Identité Visuelle",
    year: "2024",
    description: "Refonte complète de l'identité d'une marque de cosmétiques naturels. Palette, typographie et supports print/digital.",
    stat: "+3",
    statLabel: "supports livrés",
    bgImage: null as string | null,
    icon: Paintbrush,
    bubble: "Charte livrée ✓",
    color: PURPLE,
    colorLight: "#F5E6FE",
  },
  {
    id: "02",
    client: "Korner Studio",
    category: "Redesign Web",
    year: "2024",
    description: "Refonte du site vitrine d'un studio d'architecture. Focus sur la conversion et la mise en valeur des projets.",
    stat: "×2.4",
    statLabel: "taux de contact",
    bgImage: null as string | null,
    icon: MonitorSmartphone,
    bubble: "Score Perf. 97 / 100",
    color: LIME,
    colorLight: "#F7FEE0",
  },
  {
    id: "03",
    client: "FoodRush",
    category: "Community Mgmt",
    year: "2023",
    description: "Stratégie de contenu et animation de communauté pour une marque food. +12k abonnés en 4 mois.",
    stat: "+12k",
    statLabel: "abonnés en 4 mois",
    bgImage: null as string | null,
    icon: Users,
    bubble: "Engagement +6.8%",
    color: PURPLE,
    colorLight: "#F5E6FE",
  },
];

function ProjectCard({
  project,
  isLast,
}: {
  project: (typeof projects)[0];
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;
  const onColor = project.color === LIME ? "#000000" : "#ffffff";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col cursor-pointer transition-colors duration-200
        ${!isLast ? "border-b-2 md:border-b-0 md:border-r-2 border-black" : ""}
        ${hovered ? "bg-zinc-50" : "bg-white"}
      `}
    >
      {/* ── VISUAL BLOCK ── */}
      <div
        className="relative h-52 w-full border-b-2 border-black overflow-hidden transition-colors duration-300"
        style={
          project.bgImage
            ? { backgroundImage: `url(${project.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
            : { backgroundColor: hovered ? project.color : project.colorLight }
        }
      >
        {project.bgImage && <div className="absolute inset-0 bg-black/30" />}

        {/* Watermark ID */}
        {!project.bgImage && (
          <span
            className="absolute inset-0 flex items-center justify-center font-black select-none pointer-events-none transition-opacity duration-300"
            style={{ fontSize: "8rem", lineHeight: 1, color: project.color, opacity: hovered ? 0.15 : 0.08 }}
          >
            {project.id}
          </span>
        )}

        {/* Bubble hover */}
        <div
          className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 border-2 border-black px-4 py-2 min-w-max transition-all duration-300"
          style={{
            backgroundColor: "#fff",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(10px)",
          }}
        >
          <p className="text-xs font-bold text-black">{project.bubble}</p>
        </div>

        {/* ── Icône avec offset shadow brutalist ── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="relative w-fit">
            {/* Ombre décalée */}
            <div
              className="absolute top-1.5 left-1.5 w-10 h-10 border-2 border-black transition-colors duration-300"
              style={{ backgroundColor: hovered ? "#000" : project.color === LIME ? PURPLE : LIME }}
            />
            {/* Icône principale */}
            <div
              className="relative w-10 h-10 border-2 border-black flex items-center justify-center transition-colors duration-300"
              style={{
                backgroundColor: hovered ? "#fff" : project.color,
                color: hovered ? project.color : onColor,
              }}
            >
              <Icon size={17} strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Flèche top-right */}
        <div
          className="absolute top-3 right-3 w-8 h-8 border-2 border-black flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: hovered ? "#000" : "#fff" }}
        >
          <ArrowUpRight size={13} style={{ color: hovered ? "#fff" : "#000" }} />
        </div>

        {/* Année top-left */}
        <span className="absolute top-3 left-3 font-mono text-[10px] font-semibold px-2 py-0.5 border border-black bg-white text-zinc-500">
          {project.year}
        </span>
      </div>

      {/* ── CONTENT ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Catégorie */}
        <span
          className="self-start text-[9px] font-black tracking-widest uppercase border-2 px-2 py-0.5"
          style={{ color: project.color, borderColor: project.color }}
        >
          {project.category}
        </span>

        {/* Client */}
        <h3 className="font-black text-xl text-black leading-tight">{project.client}</h3>

        {/* Description */}
        <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>

        {/* Stat */}
        <div className="flex items-baseline gap-2 border-t-2 border-black pt-3 mt-auto">
          <span className="font-black text-3xl leading-none" style={{ color: project.color }}>
            {project.stat}
          </span>
          <span className="text-[11px] text-zinc-400 font-medium">{project.statLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className=" border-black px-8 md:px-16 lg:px-32 py-20" style={{ backgroundColor: "#f8ffe6" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
          <div className="flex-1">
            <h2 className="font-black leading-none tracking-tight text-black text-5xl lg:text-6xl">
              Nos Réalisations
            </h2>
          </div>
          <div className="flex-1 lg:pt-4 flex flex-col items-start lg:items-end gap-5">
            <p className="text-zinc-500 text-base leading-relaxed max-w-xs lg:text-right">
              Identité visuelle · Community management · Logo & Affiches ·
              Design d'application · Automatisation.
            </p>
            <button
              className="group flex items-center gap-2 font-bold px-5 py-2.5 border-2 border-black text-sm transition-colors duration-200 hover:opacity-80"
              style={{ backgroundColor: PURPLE, color: "#fff" }}
            >
              Voir tous les projets
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-black">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLast={i === projects.length - 1}
            />
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-2 border-t-0 border-black flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
          <p className="text-sm font-medium text-zinc-500">
            <span className="font-black text-black text-xl mr-2">48</span>
            projets livrés · clients satisfaits
          </p>
          <button
            className="group flex items-center gap-2 font-bold border-2 border-black px-5 py-2 text-sm transition-colors duration-200 hover:opacity-80"
            style={{ backgroundColor: LIME, color: "#000" }}
          >
            Démarrer un projet
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}