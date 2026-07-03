"use client";

// Generic n8n-canvas-style node graph. Data-driven so it works for both the
// invoice orchestration and the automation layer. Portrait-friendly: vertical
// flows read well beside body copy. Structure only, no client data.

export const CAT = {
  trigger: "#33b3ae",
  schedule: "#33b3ae",
  error: "#ff5a5a",
  switch: "#f5a623",
  subflow: "#8a94a6",
  util: "#8a94a6",
  ocr: "#4c8dff",
  ai: "#a366ff",
  store: "#34a853",
  crm: "#4c8dff",
  qbo: "#2ca01c",
  notify: "#8a94a6",
  report: "#33b3ae",
  provider: "#34d399",
  graph: "#33b3ae",
};

const DW = 156; // default node width
const H = 42;

function nodeW(n) {
  return n.w || DW;
}

function edgePath(a, b) {
  const aw = nodeW(a);
  const bw = nodeW(b);
  const vertical = Math.abs(b.y - a.y) > 12;
  if (vertical) {
    const x1 = a.x;
    const y1 = a.y + H / 2;
    const x2 = b.x;
    const y2 = b.y - H / 2;
    const k = Math.max(18, (y2 - y1) * 0.5);
    return { d: `M ${x1} ${y1} C ${x1} ${y1 + k}, ${x2} ${y2 - k}, ${x2} ${y2}`, ex: x2, ey: y2 };
  }
  const x1 = a.x + aw / 2;
  const y1 = a.y;
  const x2 = b.x - bw / 2;
  const y2 = b.y;
  const k = Math.max(16, (x2 - x1) * 0.5);
  return { d: `M ${x1} ${y1} C ${x1 + k} ${y1}, ${x2 - k} ${y2}, ${x2} ${y2}`, ex: x2, ey: y2 };
}

const NodeGraph = ({ title, subtitle, vb, nodes, edges }) => {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0a0e13]">
      <div className="flex items-center justify-between px-4 h-9 border-b border-white/10 bg-[#0d1218]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">{title}</span>
        {subtitle && <span className="text-[10px] text-white/25">{subtitle}</span>}
      </div>
      <div className="p-2">
        <svg viewBox={`0 0 ${vb.w} ${vb.h}`} className="w-full h-auto">
          <defs>
            <pattern id="ngdots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#ffffff" fillOpacity="0.05" />
            </pattern>
          </defs>
          <rect x="0" y="0" width={vb.w} height={vb.h} fill="url(#ngdots)" />

          {edges.map(([f, t], i) => {
            const p = edgePath(map[f], map[t]);
            return (
              <g key={i}>
                <path d={p.d} fill="none" stroke="#5b6470" strokeOpacity="0.5" strokeWidth="1.5" />
                <circle cx={p.ex} cy={p.ey} r="2.4" fill="#5b6470" />
              </g>
            );
          })}

          {nodes.map((n) => {
            const c = CAT[n.cat] || "#8a94a6";
            const w = nodeW(n);
            return (
              <g key={n.id}>
                <rect
                  x={n.x - w / 2}
                  y={n.y - H / 2}
                  width={w}
                  height={H}
                  rx="9"
                  fill="#111820"
                  stroke={c}
                  strokeOpacity={n.hot ? 0.9 : 0.45}
                  strokeWidth={n.hot ? 1.8 : 1.2}
                />
                <rect x={n.x - w / 2 + 9} y={n.y - 9} width="18" height="18" rx="4.5" fill={c} fillOpacity="0.16" stroke={c} strokeOpacity="0.5" />
                <text x={n.x - w / 2 + 18} y={n.y + 2.5} textAnchor="middle" fontSize="7.5" fontWeight="700" fill={c}>
                  {n.badge}
                </text>
                <text x={n.x - w / 2 + 33} y={n.y - 2} fontSize="9" fontWeight="600" fill="#ffffff" fillOpacity="0.88">
                  {n.title}
                </text>
                <text x={n.x - w / 2 + 33} y={n.y + 8.5} fontSize="7" fill="#ffffff" fillOpacity="0.4">
                  {n.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default NodeGraph;
