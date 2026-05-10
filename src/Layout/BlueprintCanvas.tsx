"use client";

import type { ReactNode } from "react";

const PURPLE = "#008BFF";
const LIME   = "#bdf522";

const NODES = [
  { cx: "12%",  cy: "18%", r: 3 },
  { cx: "28%",  cy: "42%", r: 2 },
  { cx: "48%",  cy: "22%", r: 4 },
  { cx: "65%",  cy: "55%", r: 2.5 },
  { cx: "78%",  cy: "15%", r: 3 },
  { cx: "88%",  cy: "38%", r: 2 },
  { cx: "35%",  cy: "72%", r: 2 },
  { cx: "58%",  cy: "80%", r: 3 },
];

const EDGES = [
  [0,1],[1,2],[2,4],[4,5],[1,6],[6,7],[2,3],[3,5],
];

const p = (v: string) => parseFloat(v);

interface BlueprintCanvasProps {
  children: ReactNode;
  className?: string;
}

/**
 * BlueprintCanvas
 * Wrapper partagé qui injecte le fond animé blueprint derrière ses enfants.
 * À utiliser dans Layout autour de <Header> + <main> (ou juste le top-section).
 */
export default function BlueprintCanvas({ children, className = "" }: BlueprintCanvasProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes bp-grid-shift {
          0%   { transform: translate(0,0); }
          100% { transform: translate(40px,40px); }
        }
        @keyframes bp-scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes bp-scan-h {
          0%   { transform: translateX(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        @keyframes bp-pulse-ring {
          0%   { r: 18; opacity: 0.55; }
          100% { r: 56; opacity: 0; }
        }
        @keyframes bp-node-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        @keyframes bp-dash-march {
          to { stroke-dashoffset: -120; }
        }
        @keyframes bp-radar-sweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bp-fade-float {
          0%, 100% { opacity: 0.2;  transform: translateY(0px); }
          50%       { opacity: 0.35; transform: translateY(-8px); }
        }
        @keyframes bp-label-blink {
          0%, 80%, 100% { opacity: 1; }
          90%            { opacity: 0.1; }
        }
      `}</style>

      {/* ── Blueprint SVG layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="bp-minor" x="0" y="0" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
              <path d="M 2.5 0 L 0 0 0 2.5" fill="none" stroke={PURPLE} strokeWidth="0.04" strokeOpacity="0.18" />
            </pattern>
            <pattern id="bp-major" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#bp-minor)" />
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke={PURPLE} strokeWidth="0.12" strokeOpacity="0.28" />
            </pattern>
          </defs>

          {/* Grid */}
          <rect width="100" height="100" fill="url(#bp-major)" />

          {/* Diagonal axes */}
          <line x1="0" y1="0" x2="100" y2="100" stroke={PURPLE} strokeWidth="0.06" strokeOpacity="0.08" strokeDasharray="1 3" />
          <line x1="100" y1="0" x2="0" y2="100" stroke={PURPLE} strokeWidth="0.06" strokeOpacity="0.07" strokeDasharray="1 3" />

          {/* ── Radar top-right ── */}
          <g transform="translate(88, 14)">
            <circle cx="0" cy="0" r="10" fill="none" stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.18" />
            <circle cx="0" cy="0" r="6.5" fill="none" stroke={PURPLE} strokeWidth="0.08" strokeOpacity="0.13" />
            <circle cx="0" cy="0" r="3"   fill="none" stroke={PURPLE} strokeWidth="0.08" strokeOpacity="0.18" />
            <line x1="-11" y1="0" x2="11" y2="0" stroke={PURPLE} strokeWidth="0.07" strokeOpacity="0.18" />
            <line x1="0" y1="-11" x2="0" y2="11" stroke={PURPLE} strokeWidth="0.07" strokeOpacity="0.18" />
            <g style={{ transformOrigin: "0px 0px", animation: "bp-radar-sweep 3.5s linear infinite" }}>
              <line x1="0" y1="0" x2="10" y2="0" stroke={PURPLE} strokeWidth="0.2" strokeOpacity="0.6" />
              <circle cx="0" cy="0" r="0.5" fill={PURPLE} fillOpacity="0.8" />
            </g>
            <circle cx="4" cy="-6" r="0.45" fill={LIME} fillOpacity="0.9"
              style={{ animation: "bp-node-blink 2.3s ease-in-out infinite" }} />
          </g>

          {/* ── Radar bottom-left ── */}
          <g transform="translate(8, 88)">
            <circle cx="0" cy="0" r="7" fill="none" stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.14" />
            <circle cx="0" cy="0" r="4" fill="none" stroke={PURPLE} strokeWidth="0.08" strokeOpacity="0.1" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke={PURPLE} strokeWidth="0.07" strokeOpacity="0.15" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke={PURPLE} strokeWidth="0.07" strokeOpacity="0.15" />
            <g style={{ transformOrigin: "0px 0px", animation: "bp-radar-sweep 5s linear infinite reverse" }}>
              <line x1="0" y1="0" x2="7" y2="0" stroke={PURPLE} strokeWidth="0.18" strokeOpacity="0.5" />
              <circle cx="0" cy="0" r="0.4" fill={PURPLE} fillOpacity="0.7" />
            </g>
            <circle cx="-3" cy="4" r="0.35" fill={LIME} fillOpacity="0.85"
              style={{ animation: "bp-node-blink 3.1s ease-in-out infinite", animationDelay: "1s" }} />
          </g>

          {/* ── Edges ── */}
          {EDGES.map(([a, b], i) => (
            <line key={i}
              x1={p(NODES[a].cx)} y1={p(NODES[a].cy)}
              x2={p(NODES[b].cx)} y2={p(NODES[b].cy)}
              stroke={PURPLE} strokeWidth="0.14" strokeOpacity="0.2"
              strokeDasharray="1.2 1.8"
              style={{ animation: `bp-dash-march ${2.5 + i * 0.3}s linear infinite` }}
            />
          ))}

          {/* ── Nodes ── */}
          {NODES.map((n, i) => (
            <g key={i} style={{ animation: `bp-fade-float ${3 + i * 0.35}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
              <circle cx={p(n.cx)} cy={p(n.cy)} r={n.r + 1}
                fill="none" stroke={PURPLE} strokeWidth="0.1"
                style={{ animation: `bp-pulse-ring ${2 + i * 0.4}s ease-out infinite`, animationDelay: `${i * 0.35}s` }}
              />
              <circle cx={p(n.cx)} cy={p(n.cy)} r={n.r * 0.45}
                fill={PURPLE} fillOpacity="0.5"
                style={{ animation: `bp-node-blink ${1.6 + i * 0.25}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
              />
              <rect
                x={p(n.cx) - n.r * 0.5} y={p(n.cy) - n.r * 0.5}
                width={n.r} height={n.r}
                fill="none" stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.38"
                transform={`rotate(45, ${p(n.cx)}, ${p(n.cy)})`}
              />
            </g>
          ))}

          {/* ── Corner crosshairs ── */}
          {[[6,6],[94,6],[6,94],[94,94]].map(([x,y],i) => (
            <g key={i} style={{ animation: `bp-fade-float ${3+i*0.5}s ease-in-out infinite`, animationDelay:`${i*0.4}s` }}>
              <line x1={x-2.5} y1={y} x2={x+2.5} y2={y} stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.28" />
              <line x1={x} y1={y-2.5} x2={x} y2={y+2.5} stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.28" />
              <circle cx={x} cy={y} r="0.4" fill="none" stroke={PURPLE} strokeWidth="0.1" strokeOpacity="0.3" />
            </g>
          ))}

          {/* ── Measurement brackets ── */}
          <g stroke={PURPLE} strokeWidth="0.08" strokeOpacity="0.16" fill="none">
            <line x1="18" y1="3" x2="82" y2="3" />
            <line x1="18" y1="1.5" x2="18" y2="4.5" />
            <line x1="82" y1="1.5" x2="82" y2="4.5" />
          </g>
          <g stroke={PURPLE} strokeWidth="0.08" strokeOpacity="0.13" fill="none">
            <line x1="3" y1="18" x2="3" y2="82" />
            <line x1="1.5" y1="18" x2="4.5" y2="18" />
            <line x1="1.5" y1="82" x2="4.5" y2="82" />
          </g>

          {/* ── Blueprint labels ── */}
          <text x="19" y="2.2" fontSize="1.1" fill={PURPLE} fillOpacity="0.25"
            fontFamily="monospace" letterSpacing="0.4"
            style={{ animation: "bp-label-blink 4s ease-in-out infinite" }}>
            1440px
          </text>
          <text x="4.5" y="52" fontSize="1.1" fill={PURPLE} fillOpacity="0.22"
            fontFamily="monospace"
            transform="rotate(-90,4.5,52)"
            style={{ animation: "bp-label-blink 5s ease-in-out infinite", animationDelay: "1.5s" }}>
            900px
          </text>
          <text x="2" y="98" fontSize="1.5" fill={PURPLE} fillOpacity="0.18"
            fontFamily="monospace" letterSpacing="0.3"
            style={{ animation: "bp-label-blink 6s ease-in-out infinite", animationDelay: "2s" }}>
            CONIQUE / §layout
          </text>
        </svg>

        {/* ── Vertical scan line ── */}
        <div className="absolute top-0 bottom-0 w-px" style={{
          background: `linear-gradient(180deg, transparent 0%, ${PURPLE}55 20%, ${PURPLE}99 50%, ${PURPLE}55 80%, transparent 100%)`,
          animation: "bp-scan 10s ease-in-out infinite",
          animationDelay: "1s",
        }} />

        {/* ── Horizontal scan line ── */}
        <div className="absolute left-0 right-0 h-px" style={{
          background: `linear-gradient(90deg, transparent 0%, ${PURPLE}44 30%, ${PURPLE}88 50%, ${PURPLE}44 70%, transparent 100%)`,
          animation: "bp-scan-h 13s ease-in-out infinite",
          animationDelay: "4s",
        }} />

        {/* ── Vignette (readability) ── */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0) 25%, rgba(255,255,255,0.6) 100%)",
        }} />
      </div>

      {/* ── Children (Header + Hero) au-dessus du canvas ── */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}