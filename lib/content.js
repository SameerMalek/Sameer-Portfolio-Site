// Single source of truth for all portfolio copy.
// Hard rule: no em dashes anywhere in this file. Use commas, periods, or "because".
// No client login URLs, no private repo links, client names anonymized.

export const profile = {
  name: "Sameer Malek",
  role: "Forward-Deployed AI Engineer",
  location: "Calgary, AB",
  resume: "/Resume-SAMEER-FDE-2026.pdf",
  email: "maleksameer715@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-sameer-malek/",
  github: "https://github.com/SameerMalek",
  formspree: "mgvwewva",
};

export const hero = {
  h1: "Most AI projects die between the demo and the deployment.",
  sub: "I live in that gap. I'm Sameer Malek, Co-Founder and CIO of Orchestrator AI Systems in Calgary. I work forward-deployed: embedded inside client businesses, shipping production AI, agent, and vision systems end to end, and staying until they run the business.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

// Anchor navigation for the single page.
export const navLinks = [
  { name: "Work", path: "#work" },
  { name: "Method", path: "#method" },
  { name: "Shipped", path: "#shipped" },
  { name: "Capabilities", path: "#capabilities" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

// Every claim carries its reason. Client names anonymized by default.
export const caseStudies = [
  {
    id: "meridian",
    index: "01",
    title: "Meridian, a deep-research engine that refuses to hallucinate",
    tagline: "Multi-provider research fan-out into an evidence-linked claim graph.",
    problem:
      "LLM research reports read confidently and cite things that do not exist. For a business decision, an untraceable claim is worse than no claim.",
    decision:
      "A standalone research engine (Python, FastAPI) that fans a request out across providers in parallel, normalizes everything into an evidence-linked claim graph, and only then synthesizes. The synthesis step is grounded strictly in cited claims, modeled financial values are kept distinct from sourced facts, and a RAGAS-style evaluation gate sits in front of delivery, because a deliverable that cannot survive its own eval should not ship. Confidential runs hard-exclude external providers, because tenant isolation is a property, not a setting.",
    outcome:
      "Powers BIOP, a broker-intelligence web application whose model council runs five parallel research agents plus a synthesizer, generating branded intelligence deliverables for commercial insurance renewal conversations.",
    stack: ["Python", "FastAPI", "SQLAlchemy async", "asyncio DAG", "Multi-provider LLM fan-out", "Eval gates"],
    diagram: "meridian",
  },
  {
    id: "invoice",
    index: "02",
    title: "Invoice automation that survives vendor drift",
    tagline: "A seven-phase pipeline reading 700 to 1,000 invoices a month into QuickBooks.",
    problem:
      "700 to 1,000 invoices a month were being read and retyped by hand into QuickBooks. Vendor formats drift constantly, and a pipeline that cannot adapt becomes shelfware within a quarter.",
    decision:
      "A seven-phase pipeline: Gmail intake, OCR with tiered fallback, schema-driven LLM extraction, fuzzy vendor matching, staging review, QuickBooks Online posting, and reconciliation. SHA256 de-duplication because the same invoice arrives three ways. Vendor-specific handling, including multi-invoice PDFs carrying 5 to 20 invoices per document, normalized through per-vendor schemas so onboarding a new vendor is configuration, not code. A self-learning layer records every human correction, because a correction that only fixes one invoice is a wasted correction.",
    outcome:
      "Runs monthly at production volume, scalable past 100 vendors, and eliminated the data-entry function it replaced.",
    stack: ["n8n", "tRPC service", "LlamaParse OCR", "Claude extraction", "Supabase", "QuickBooks Online API", "Google Workspace"],
    diagram: "invoice",
  },
  {
    id: "fabriclab",
    index: "03",
    title: "FabricLab, from platform to forward-deployed instances",
    tagline: "Multi-tenant quoting SaaS, then dedicated instances rolled out client by client.",
    problem:
      "Drapery quoting ran on tribal knowledge. Every style prices differently, deductions depend on mount, hardware, and flooring, and errors surfaced only after fabric was cut.",
    decision:
      "A multi-tenant SaaS quoting and work-order platform with four calculation engines (ripple fold, pinch pleat, deco panel, roman shade), a deductions system, and BOM generation, because the math should live in one tested place instead of many heads. Then the forward-deployed part: dedicated instances rolled out client by client, with hands-on onboarding, workroom-specific pricing configuration, and on-site iteration until the client's estimators quoted through it daily, because a platform only counts once a client runs their business on it.",
    outcome:
      "Live at fabriclab.ai, serving over 34 users across 4 organizations, with Stripe billing, four-tier RBAC, and Datadog RUM in production.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Stripe", "Gemini visualization", "Datadog"],
    link: "https://fabriclab.ai",
    image: "/assets/fabriclab.jpg",
  },
  {
    id: "automation",
    index: "04",
    title: "An automation layer instead of a hiring plan",
    tagline: "58 production workflows treated like evaluated agents, not scripts.",
    problem:
      "A growing back office was scaling by headcount: purchase orders, CRM sync, lead intake, weekly reporting, all manual.",
    decision:
      "58 production n8n workflows treated like evaluated agents, not scripts: centralized failure categorization, execution-linked logs and alerting, parser changes validated against more than 40 documented real-message test cases before shipping, and regressions root-caused from execution transcripts, including a runaway loop that silently reprocessed a single purchase order until the wiring fault was isolated, because guess-and-check debugging does not scale.",
    outcome:
      "More than 78,000 executions a month at a success rate above 98 percent, eliminating over 320 hours of monthly manual work. The largest workflow, a 200-plus-node purchase-order pipeline, automated roughly 90 percent of one department's intake.",
    stack: ["n8n", "OpenAI extraction", "Gemini extraction", "Supabase", "QuickBooks Online", "Maximizer CRM", "Google Workspace"],
    diagram: "automation",
  },
  {
    id: "estimagent",
    index: "05",
    title: "Teaching models to read floorplans",
    tagline: "A multi-stage vision pipeline for construction takeoffs.",
    problem:
      "Construction takeoffs were the slowest, most error-prone step in estimating: a human counting fixtures and measuring rooms off PDF drawings.",
    decision:
      "A multi-stage extraction pipeline where each stage does what it is best at: vector PDF geometry where drawings are digital, OCR (PaddleOCR, Tesseract) where they are not, flood-fill room segmentation, and scikit-learn page classification to route drawing types. On top, YOLOv11, RF-DETR, and DINOv3 detection and segmentation models trained on over 4,200 annotated floorplan images, because generic vision models do not know what a hose bib looks like.",
    outcome:
      "An AI construction cost estimator with a React front end and a Python ML service, plus adjacent vision delivery: a drone surveillance console for an energy-sector client and self-hosted image-to-3D generation on GCP GPU VMs benchmarked across L4 and A100 instances, because compute cost is a design constraint, not an afterthought.",
    stack: ["YOLOv11", "RF-DETR", "DINOv3", "Roboflow", "PaddleOCR", "scikit-learn", "React", "FastAPI", "GCP GPU VMs"],
    video: "/assets/estimagent/demo.mp4",
    poster: "/assets/estimagent/poster.jpg",
    diagram: "estimagent",
  },
];

export const method = {
  intro:
    "The same five moves, engagement after engagement, across construction, manufacturing, insurance, and design. This section exists because the method is the product; the apps are what it leaves behind.",
  moves: [
    {
      n: "1",
      title: "Discovery before code",
      body: "Sit with the people who own the problem and read every document they have before writing anything. On a construction estimating engagement, discovery surfaced errors in the client's own PRD (the takeoff tool actually in use, the real number of cost divisions) and produced a 68-item prioritized backlog before the first commit, because scope errors are far cheaper to catch before build than after.",
    },
    {
      n: "2",
      title: "Audit before build",
      body: "Entering an existing codebase or process starts read-only: map what exists with file-level citations and an honest done, partial, or not-started status for every feature, because you cannot safely change what you have not mapped.",
    },
    {
      n: "3",
      title: "Ship the trust layer first",
      body: "SSO, RBAC, audit logging, PII and PHI redaction, per-tenant encryption with customer-managed keys. Boring in a demo, decisive in production, because adoption dies at the first extra password and enterprise clients buy trust before features.",
    },
    {
      n: "4",
      title: "Treat workflows like evaluated agents",
      body: "Parser changes validated against more than 40 documented real-message test cases before shipping, centralized failure categorization, execution-linked logs, and regressions root-caused from transcripts rather than guesswork, because a workflow without evaluation is just a demo that has not failed yet.",
    },
    {
      n: "5",
      title: "Stay until it runs the business",
      body: "Onboarding, training, on-site iteration, and department-by-department rollout. At a design and manufacturing group, that meant automating accounts payable, sales and CRM sync, lead intake, commissions, and weekly reporting: 58 production workflows executing more than 78,000 times a month, the largest automating roughly 90 percent of one department's intake and taking it from two full-time staff to one. And the systems run around the clock, because software does not clock out at five.",
    },
  ],
  coda: "The same method, different shape, for a modular-home builder: an interactive 3D house viewer, a measured performance program that cut largest contentful paint from 10.5 seconds to under 2.5, a self-learning site chatbot, and social publishing automation, because embedded means owning whatever the business needs next, not just the original scope.",
};

export const shipped = [
  { name: "FabricLab", url: "https://fabriclab.ai", what: "Multi-tenant SaaS quoting and work-order platform, 4 calculation engines, BOM generation, Stripe billing.", why: "Drapery quoting ran on tribal knowledge and hand-applied formulas." },
  { name: "ProQuote", url: "https://pro-quote.ai", what: "Quote-to-e-signature web application normalizing supplier quotes from 7 vendor formats through a single parser registry, with a Gemini and Vertex AI measure-sheet OCR extractor, Maximizer CRM and CompanyCam integrations, and an audit-trailed approval-token signature flow.", why: "Sales retyped supplier quotes line by line, and per-vendor parsers broke every time a template changed." },
  { name: "Keystone", url: null, what: "Construction estimating platform (React, Node, Prisma, PostgreSQL, Microsoft 365 SSO) delivered forward-deployed to a construction client.", why: "Estimating lived in spreadsheets that could not scale or be audited." },
  { name: "Cadence", url: "https://heycadence.ai", what: "Meeting transcription on self-hosted Whisper inside a VPC, with diarized Gemini summaries.", why: "Meeting audio should never transit a third party." },
  { name: "Maximizer MCP Server", url: null, what: "More than 45 CRM tools over Model Context Protocol (TypeScript, OAuth2, stdio and HTTP transports).", why: "A chatbot that cannot act is a toy." },
  { name: "Vistalyze", url: null, what: "Internal KPI and operations dashboard on Cloud Run with live Maximizer CRM integration.", why: "Leadership was flying blind between month-end reports." },
  { name: "Sonata Design", url: "https://sonatadesign.ca", what: "Marketing site with an embedded RAG assistant, Pinecone and OpenAI retrieval grounded in product galleries and guides, streamed with the Vercel AI SDK, sessions in Postgres, leads routed into n8n.", why: "Buyers ask the same product questions after hours, and the site should answer them and capture the lead." },
  { name: "Empower Projects", url: "https://empowerprojects.ca", what: "Marketing site for a hurricane-resistant modular-home builder, with an interactive photorealistic 3D house (React Three Fiber, GLB models), scroll-driven motion (GSAP, Lenis), and GCS-backed model galleries.", why: "Modular homes are hard to picture from a floor plan, so let buyers walk the model in 3D." },
  { name: "Orchestrator", url: "https://orchestrator.ca", what: "The consultancy's own site (Next.js, React Three Fiber, Gemini API).", why: "The shop window should be built like the client work." },
  { name: "AutoPilot", url: null, what: "Browser automation on Claude vision and Playwright, human-in-the-loop below 40 percent confidence.", why: "Unattended agents need trust boundaries and a human path when unsure." },
];

export const shippedCoda =
  "Plus 58 production n8n workflows executing more than 78,000 times a month across AP, CRM, lead capture, and reporting, because the alternative was hiring people to do data entry.";

export const capabilities = [
  { title: "Agentic and LLM systems", def: "Multi-agent research pipelines, MCP tool design, RAG, eval-gated synthesis.", proof: "Meridian, BIOP's model council, Mozart (org-wide RAG assistant over Google Drive), a production MCP server exposing more than 45 CRM tools, AutoPilot browser automation with human-in-the-loop escalation below 40 percent confidence." },
  { title: "Document intelligence", def: "OCR to LLM extraction with tiered fallbacks and self-learning correction.", proof: "The invoice pipeline, ProQuote's parser registry normalizing 7 vendor quote formats, the Measure Sheet Extractor." },
  { title: "Computer vision and 3D", def: "Model training, detection, segmentation, and 3D generation in production.", proof: "EstimAgent's trained YOLOv11, RF-DETR, and DINOv3 models, the drone surveillance console, TRELLIS image-to-3D on cost-benchmarked GPU VMs, react-three-fiber 3D on the web." },
  { title: "Production automation", def: "Workflows treated like evaluated agents.", proof: "58 workflows, more than 78,000 monthly executions, test-case-validated parser changes, transcript-based root-causing." },
  { title: "Security and trust", def: "SOC 2 Type II program ownership, OWASP audits, VPC-isolated RAG with PII and PHI redaction, per-tenant encrypted credentials.", proof: "Enterprise clients buy trust before they buy features." },
];

export const about =
  "Sameer Malek. Co-Founder and CIO of Orchestrator AI Systems in Calgary, and the embedded AI and automation lead for a multi-brand design and manufacturing group. I work forward-deployed because the hard part of AI is never the model. It is the workflow, the data, the permissions, and the people, and you only see those from the inside. SAIT software development, CGPA 3.72. Day to day: TypeScript, Python, React, Next.js, FastAPI, Postgres, GCP.";

export const contact = {
  heading: "If you're wrestling with your own demo-to-production gap, that is a conversation I'll always make time for.",
};
