"use client";
import NodeGraph from "./NodeGraph";

// Vertical rebuild of the Meridian architecture so it stays legible beside the
// write-up: request -> plan -> parallel provider fan-out -> claim graph ->
// grounded synth -> RAGAS eval gate -> report.

const SP = 260;
const PW = 196; // provider node width

const nodes = [
  { id: "req", x: SP, y: 42, cat: "trigger", badge: "RQ", title: "request", sub: "profile + inputs" },
  { id: "plan", x: SP, y: 122, cat: "switch", badge: "PL", title: "plan", sub: "decompose · route" },

  { id: "gemini", x: 150, y: 216, w: PW, cat: "provider", badge: "GE", title: "gemini 3.1 pro", sub: "deep research" },
  { id: "opus", x: 372, y: 216, w: PW, cat: "provider", badge: "OP", title: "claude opus 4.8", sub: "deep research" },
  { id: "sonnet", x: 150, y: 288, w: PW, cat: "provider", badge: "SO", title: "claude sonnet 4.6", sub: "deep research" },
  { id: "oai", x: 372, y: 288, w: PW, cat: "provider", badge: "OA", title: "openai research", sub: "deep research" },
  { id: "deepseek", x: 150, y: 360, w: PW, cat: "provider", badge: "DS", title: "deepseek v4", sub: "deep research" },
  { id: "pplx", x: 372, y: 360, w: PW, cat: "provider", badge: "PX", title: "perplexity", sub: "deep research" },

  { id: "graph", x: SP, y: 454, cat: "graph", badge: "CG", title: "claim graph", sub: "link · contradict" },
  { id: "synth", x: SP, y: 534, cat: "provider", badge: "SY", title: "synth", sub: "grounded condense", hot: true },
  { id: "eval", x: SP, y: 614, cat: "trigger", badge: "EV", title: "eval", sub: "RAGAS gate", hot: true },
  { id: "report", x: SP, y: 694, cat: "report", badge: "RP", title: "report", sub: "3 deliverables" },
];

const providers = ["gemini", "opus", "sonnet", "oai", "deepseek", "pplx"];
const edges = [
  ["req", "plan"],
  ...providers.map((p) => ["plan", p]),
  ...providers.map((p) => [p, "graph"]),
  ["graph", "synth"], ["synth", "eval"], ["eval", "report"],
];

const MeridianDiagram = () => (
  <NodeGraph
    title="multi-provider deep research"
    subtitle="claim graph · RAGAS gate"
    vb={{ w: 520, h: 742 }}
    nodes={nodes}
    edges={edges}
  />
);

export default MeridianDiagram;
