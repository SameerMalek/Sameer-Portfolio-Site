"use client";
import NodeGraph from "./NodeGraph";

// Vertical n8n orchestration of the invoice automation. Structure only:
// real node TYPES, generic labels. No client/vendor names, no credentials.

const SP = 260; // spine center x

const nodes = [
  { id: "gmail", x: SP, y: 42, cat: "trigger", badge: "GM", title: "Gmail Trigger", sub: "invoice intake" },
  { id: "switch", x: SP, y: 122, cat: "switch", badge: "SW", title: "Switch", sub: "vendor type" },
  { id: "gl", x: 82, y: 214, w: 148, cat: "subflow", badge: "WF", title: "GL Vendor", sub: "sub-workflow" },
  { id: "job", x: SP, y: 214, w: 148, cat: "subflow", badge: "WF", title: "Job Vendor", sub: "sub-workflow" },
  { id: "spc", x: 438, y: 214, w: 152, cat: "subflow", badge: "WF", title: "Special Vendor", sub: "sub-workflow" },
  { id: "ocr", x: SP, y: 306, cat: "ocr", badge: "OC", title: "LlamaParse", sub: "OCR / parse" },
  { id: "ai", x: SP, y: 386, cat: "ai", badge: "AI", title: "AI Agent", sub: "extract + parser", hot: true },
  { id: "sheets", x: SP, y: 466, cat: "store", badge: "GS", title: "Google Sheets", sub: "staging review" },
  { id: "qbo", x: SP, y: 546, cat: "qbo", badge: "QB", title: "QuickBooks", sub: "post" },
  // secondary bands
  { id: "sched", x: 82, y: 636, w: 148, cat: "schedule", badge: "SC", title: "Schedule", sub: "recon sweep" },
  { id: "recon", x: SP, y: 636, w: 148, cat: "ai", badge: "AI", title: "Recon Agent", sub: "find missing" },
  { id: "drive", x: 438, y: 636, w: 152, cat: "store", badge: "GD", title: "Drive", sub: "upload" },
  { id: "err", x: 82, y: 714, w: 148, cat: "error", badge: "ER", title: "Error Trigger", sub: "catch + route" },
  { id: "notify", x: SP, y: 714, w: 148, cat: "notify", badge: "NT", title: "Notify", sub: "alert" },
];

const edges = [
  ["gmail", "switch"],
  ["switch", "gl"], ["switch", "job"], ["switch", "spc"],
  ["gl", "ocr"], ["job", "ocr"], ["spc", "ocr"],
  ["ocr", "ai"], ["ai", "sheets"], ["sheets", "qbo"],
  ["sched", "recon"], ["recon", "drive"], ["err", "notify"],
];

const InvoiceOrchestration = () => (
  <NodeGraph
    title="n8n orchestration"
    subtitle="15 workflows · AI agents"
    vb={{ w: 520, h: 758 }}
    nodes={nodes}
    edges={edges}
  />
);

export default InvoiceOrchestration;
