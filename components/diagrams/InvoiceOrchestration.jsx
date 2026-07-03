"use client";

// n8n-canvas-style diagram of the invoice-automation orchestration.
// Structure only: real node TYPES, generic labels. No client names, no
// vendor names, no credentials, no live data. Abstracted from the workflows.

const CAT = {
  trigger: "#33b3ae",
  schedule: "#33b3ae",
  error: "#ff5a5a",
  switch: "#f5a623",
  subflow: "#8a94a6",
  ocr: "#4c8dff",
  ai: "#a366ff",
  store: "#34a853",
  qbo: "#2ca01c",
  notify: "#8a94a6",
};

// x = left edge, y = vertical CENTER
const NODES = [
  { id: "gmail", x: 16, y: 150, cat: "trigger", badge: "GM", title: "Gmail Trigger", sub: "invoice intake" },
  { id: "switch", x: 180, y: 150, cat: "switch", badge: "SW", title: "Switch", sub: "vendor type" },
  { id: "gl", x: 344, y: 66, cat: "subflow", badge: "WF", title: "GL Vendor", sub: "sub-workflow" },
  { id: "job", x: 344, y: 150, cat: "subflow", badge: "WF", title: "Job Vendor", sub: "sub-workflow" },
  { id: "spc", x: 344, y: 234, cat: "subflow", badge: "WF", title: "Special Vendor", sub: "sub-workflow" },
  { id: "ocr", x: 508, y: 150, cat: "ocr", badge: "OC", title: "LlamaParse", sub: "OCR / parse" },
  { id: "ai", x: 672, y: 150, cat: "ai", badge: "AI", title: "AI Agent", sub: "extract + parser", hot: true },
  { id: "sheets", x: 836, y: 92, cat: "store", badge: "GS", title: "Google Sheets", sub: "staging review" },
  { id: "qbo", x: 836, y: 214, cat: "qbo", badge: "QB", title: "QuickBooks", sub: "post" },
  // secondary band
  { id: "sched", x: 16, y: 320, cat: "schedule", badge: "SC", title: "Schedule", sub: "recon sweep" },
  { id: "recon", x: 180, y: 320, cat: "ai", badge: "AI", title: "Recon Agent", sub: "find missing" },
  { id: "drive", x: 344, y: 320, cat: "store", badge: "GD", title: "Google Drive", sub: "upload" },
  { id: "err", x: 672, y: 320, cat: "error", badge: "ER", title: "Error Trigger", sub: "catch + route" },
  { id: "notify", x: 836, y: 320, cat: "notify", badge: "NT", title: "Notify", sub: "alert" },
];

const EDGES = [
  ["gmail", "switch"],
  ["switch", "gl"], ["switch", "job"], ["switch", "spc"],
  ["gl", "ocr"], ["job", "ocr"], ["spc", "ocr"],
  ["ocr", "ai"], ["ai", "sheets"], ["sheets", "qbo"],
  ["sched", "recon"], ["recon", "drive"], ["err", "notify"],
];

const W = 118;
const H = 40;
const map = Object.fromEntries(NODES.map((n) => [n.id, n]));

function edgePath(a, b) {
  const x1 = a.x + W;
  const y1 = a.y;
  const x2 = b.x;
  const y2 = b.y;
  const dx = Math.max(30, (x2 - x1) * 0.5);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

const InvoiceOrchestration = () => {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0a0e13]">
      <div className="flex items-center justify-between px-4 h-9 border-b border-white/10 bg-[#0d1218]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          n8n orchestration
        </span>
        <span className="text-[10px] text-white/25">15 workflows · AI agents</span>
      </div>
      <div className="p-2">
        <svg viewBox="0 0 960 372" className="w-full h-auto">
          <defs>
            <pattern id="n8ndots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#ffffff" fillOpacity="0.05" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="960" height="372" fill="url(#n8ndots)" />

          {/* connectors */}
          {EDGES.map(([f, t], i) => (
            <g key={i}>
              <path d={edgePath(map[f], map[t])} fill="none" stroke="#5b6470" strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx={map[t].x} cy={map[t].y} r="2.5" fill="#5b6470" />
            </g>
          ))}

          {/* nodes */}
          {NODES.map((n) => {
            const c = CAT[n.cat];
            return (
              <g key={n.id}>
                <rect
                  x={n.x}
                  y={n.y - H / 2}
                  width={W}
                  height={H}
                  rx="9"
                  fill="#111820"
                  stroke={c}
                  strokeOpacity={n.hot ? 0.9 : 0.45}
                  strokeWidth={n.hot ? 1.8 : 1.2}
                />
                {/* icon badge */}
                <rect x={n.x + 7} y={n.y - 9} width="18" height="18" rx="4.5" fill={c} fillOpacity="0.16" stroke={c} strokeOpacity="0.5" />
                <text x={n.x + 16} y={n.y + 2.5} textAnchor="middle" fontSize="7.5" fontWeight="700" fill={c}>
                  {n.badge}
                </text>
                {/* labels */}
                <text x={n.x + 31} y={n.y - 2} fontSize="9" fontWeight="600" fill="#ffffff" fillOpacity="0.88">
                  {n.title}
                </text>
                <text x={n.x + 31} y={n.y + 8.5} fontSize="7" fill="#ffffff" fillOpacity="0.4">
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

export default InvoiceOrchestration;
