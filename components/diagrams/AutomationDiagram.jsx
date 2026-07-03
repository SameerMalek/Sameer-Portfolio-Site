"use client";
import NodeGraph from "./NodeGraph";

// The automation layer, drawn as the flagship purchase-order pipeline.
// Structure only, generic labels. No client/vendor names, no credentials.

const SP = 260;

const nodes = [
  { id: "trig", x: SP, y: 42, cat: "trigger", badge: "TR", title: "Triggers", sub: "schedule · webhook · mail" },
  { id: "dedup", x: SP, y: 120, cat: "util", badge: "HS", title: "Dedup", sub: "SHA256" },
  { id: "batch", x: SP, y: 198, cat: "subflow", badge: "SB", title: "Split Batches", sub: "5 to 20 per doc" },
  { id: "extract", x: SP, y: 276, cat: "ai", badge: "AI", title: "Extract", sub: "OpenAI · Gemini", hot: true },
  { id: "route", x: SP, y: 354, cat: "switch", badge: "SW", title: "Switch", sub: "route by type" },
  { id: "sheets", x: 82, y: 448, w: 148, cat: "store", badge: "GS", title: "Sheets", sub: "stage" },
  { id: "qbo", x: SP, y: 448, w: 148, cat: "qbo", badge: "QB", title: "QuickBooks", sub: "post" },
  { id: "crm", x: 438, y: 448, w: 152, cat: "crm", badge: "MX", title: "Maximizer", sub: "CRM sync" },
  { id: "err", x: 82, y: 540, w: 148, cat: "error", badge: "ER", title: "Error Handler", sub: "catch + log" },
  { id: "logs", x: SP, y: 540, w: 148, cat: "util", badge: "LG", title: "Logs", sub: "execution-linked" },
  { id: "report", x: 438, y: 540, w: 152, cat: "report", badge: "RP", title: "Report", sub: "weekly" },
];

const edges = [
  ["trig", "dedup"], ["dedup", "batch"], ["batch", "extract"], ["extract", "route"],
  ["route", "sheets"], ["route", "qbo"], ["route", "crm"],
  ["qbo", "logs"],
  ["err", "logs"], ["logs", "report"],
];

const AutomationDiagram = () => (
  <NodeGraph
    title="n8n automation layer"
    subtitle="58 workflows · 78k runs/mo"
    vb={{ w: 520, h: 590 }}
    nodes={nodes}
    edges={edges}
  />
);

export default AutomationDiagram;
