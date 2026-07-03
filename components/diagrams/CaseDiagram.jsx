"use client";
import { useMemo } from "react";

// Original, abstracted diagrams. No client data, no real node labels, no screenshots.
// Teal accent #33b3ae, bg #0d1117.

const ACCENT = "#33b3ae";
const GREEN = "#00e187";

function Frame({ children, label }) {
  return (
    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#0b0f14] overflow-hidden">
      <div className="absolute top-3 left-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
        {label}
      </div>
      {children}
    </div>
  );
}

// 01 -Meridian: request fans out to providers, into a synthesizer behind an eval gate.
function Meridian() {
  const providers = [0, 1, 2, 3, 4];
  return (
    <Frame label="Parallel fan-out / claim graph">
      <svg viewBox="0 0 400 220" className="h-full w-full">
        <line x1="40" y1="110" x2="150" y2="110" stroke={ACCENT} strokeOpacity="0.4" />
        {providers.map((p) => {
          const y = 30 + p * 40;
          return (
            <g key={p}>
              <line x1="150" y1="110" x2="230" y2={y} stroke={ACCENT} strokeOpacity="0.25" />
              <line x1="230" y1={y} x2="310" y2="110" stroke={ACCENT} strokeOpacity="0.25" />
              <rect x="200" y={y - 9} width="60" height="18" rx="4" fill="#0f151c" stroke={ACCENT} strokeOpacity="0.45" />
              <circle cx="212" cy={y} r="2.5" fill={ACCENT} />
            </g>
          );
        })}
        {/* request */}
        <circle cx="40" cy="110" r="8" fill="none" stroke={GREEN} strokeWidth="1.5" />
        <text x="40" y="140" fill="#ffffff55" fontSize="9" textAnchor="middle">request</text>
        {/* synthesizer */}
        <rect x="305" y="98" width="26" height="26" rx="6" fill="#0f151c" stroke={GREEN} />
        <text x="318" y="140" fill="#ffffff55" fontSize="9" textAnchor="middle">synth</text>
        {/* eval gate */}
        <line x1="352" y1="70" x2="352" y2="150" stroke={GREEN} strokeDasharray="3 3" strokeOpacity="0.7" />
        <text x="372" y="114" fill={GREEN} fontSize="9" textAnchor="middle">eval</text>
        <line x1="331" y1="111" x2="352" y2="111" stroke={GREEN} strokeOpacity="0.5" />
      </svg>
    </Frame>
  );
}

// 02 -Invoice: seven-phase linear pipeline.
function Invoice() {
  const phases = ["Intake", "OCR", "Extract", "Match", "Stage", "Post", "Reconcile"];
  return (
    <Frame label="Seven-phase pipeline">
      <div className="h-full w-full flex items-center justify-center px-5">
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {phases.map((p, i) => (
            <div key={p} className="flex items-center gap-1.5">
              <div className="px-2.5 py-1.5 rounded-md border border-accent/40 bg-[#0f151c] text-[10px] text-white/70">
                {p}
              </div>
              {i < phases.length - 1 && <span className="text-accent/50 text-xs">›</span>}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

// 04 -Automation: dense node field conveying 200+ node scale.
function Automation() {
  const nodes = useMemo(() => {
    const arr = [];
    const cols = 18;
    const rows = 9;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // deterministic pseudo-random so SSR and client match
        const seed = (i * 928371 + j * 12345) % 1000;
        arr.push({ x: 16 + i * 20.5, y: 20 + j * 20, on: seed % 5 === 0 });
      }
    }
    return arr;
  }, []);
  return (
    <Frame label="200+ node graph">
      <svg viewBox="0 0 400 210" className="h-full w-full">
        {nodes.map((n, idx) => (
          <g key={idx}>
            {idx % 7 === 0 && idx + 1 < nodes.length && (
              <line
                x1={n.x}
                y1={n.y}
                x2={nodes[idx + 1].x}
                y2={nodes[idx + 1].y}
                stroke={ACCENT}
                strokeOpacity="0.12"
              />
            )}
            <circle cx={n.x} cy={n.y} r={n.on ? 2.4 : 1.4} fill={n.on ? ACCENT : "#ffffff"} fillOpacity={n.on ? 0.9 : 0.18} />
          </g>
        ))}
      </svg>
    </Frame>
  );
}

// 05 -EstimAgent: synthetic floorplan with detection boxes (fallback when no video).
function Estimagent() {
  return (
    <Frame label="Synthetic detection">
      <svg viewBox="0 0 400 220" className="h-full w-full">
        {/* generic floorplan walls */}
        <g stroke="#ffffff" strokeOpacity="0.22" fill="none" strokeWidth="1.5">
          <rect x="40" y="30" width="320" height="160" />
          <line x1="180" y1="30" x2="180" y2="120" />
          <line x1="180" y1="120" x2="360" y2="120" />
          <line x1="40" y1="120" x2="180" y2="120" />
          <line x1="270" y1="120" x2="270" y2="190" />
        </g>
        {/* detection boxes */}
        {[
          { x: 70, y: 60, l: "fixture" },
          { x: 220, y: 55, l: "hose bib" },
          { x: 95, y: 145, l: "door" },
          { x: 300, y: 150, l: "window" },
        ].map((b) => (
          <g key={b.l}>
            <rect x={b.x} y={b.y} width="46" height="30" rx="2" fill={ACCENT} fillOpacity="0.08" stroke={ACCENT} />
            <text x={b.x} y={b.y - 4} fill={ACCENT} fontSize="8">{b.l}</text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

// 03 -FabricLab: themed browser-frame mock (no screenshot, no client data).
function Fabriclab() {
  return (
    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#0b0f14] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/10 bg-[#0d1218]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-[10px] text-white/40">fabriclab.ai</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[11px] uppercase tracking-widest text-accent/80">Professional Workroom Software</span>
        </div>
        <p className="text-white font-semibold text-lg leading-snug mb-1">The unified workroom platform</p>
        <p className="text-white/45 text-[13px] mb-5">
          Drapery calculations, job costing, and work orders in one platform.
        </p>
        <div className="grid grid-cols-4 gap-2">
          {["Ripple Fold", "Pinch Pleat", "Deco Panel", "Roman Shade"].map((e) => (
            <div key={e} className="rounded-md border border-white/10 bg-[#0f151c] px-2 py-2 text-center">
              <div className="mx-auto mb-1 h-1.5 w-1.5 rounded-full bg-accent/70" />
              <span className="text-[9px] text-white/50 leading-tight block">{e}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded bg-white/10" />
          <div className="h-1.5 w-10 rounded bg-accent/50" />
        </div>
      </div>
    </div>
  );
}

const map = { meridian: Meridian, invoice: Invoice, automation: Automation, estimagent: Estimagent, fabriclab: Fabriclab };

const CaseDiagram = ({ kind }) => {
  const Cmp = map[kind];
  if (!Cmp) return null;
  return <Cmp />;
};

export default CaseDiagram;
