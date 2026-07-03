"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiPlus, FiMinus } from "react-icons/fi";
import { caseStudies } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import CaseDiagram from "@/components/diagrams/CaseDiagram";
import InvoiceOrchestration from "@/components/diagrams/InvoiceOrchestration";
import AutomationDiagram from "@/components/diagrams/AutomationDiagram";
import MeridianDiagram from "@/components/diagrams/MeridianDiagram";

const COMPONENTS = {
  meridian: MeridianDiagram,
  orchestration: InvoiceOrchestration,
  automation: AutomationDiagram,
};

function Visual({ cs }) {
  if (cs.component && COMPONENTS[cs.component]) {
    const Cmp = COMPONENTS[cs.component];
    return <Cmp />;
  }
  if (cs.video) {
    return (
      <div className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-video">
        <video
          src={cs.video}
          poster={cs.poster}
          controls
          preload="none"
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  if (cs.image) {
    return (
      <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0b0f14]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.image}
          alt={`${cs.title} preview`}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="aspect-video">
      <CaseDiagram kind={cs.diagram} />
    </div>
  );
}

function CaseText({ cs }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-accent font-semibold text-sm tracking-widest">{cs.index}</span>
        <span className="h-px flex-1 bg-white/10" />
        {cs.link && (
          <a
            href={cs.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-accent transition-colors text-sm"
          >
            Visit <FiExternalLink />
          </a>
        )}
      </div>

      <h3 className="h3 mb-2">{cs.title}</h3>
      <p className="text-accent/80 text-sm mb-6">{cs.tagline}</p>

      <div className="space-y-4 text-[15px] leading-relaxed">
        <p className="text-white/70">
          <span className="text-white/40 uppercase text-[11px] tracking-widest mr-2">Problem</span>
          {cs.problem}
        </p>

        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium"
            aria-expanded={open}
          >
            {open ? <FiMinus /> : <FiPlus />}
            {open ? "Hide the approach" : "Read the approach"}
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-white/70 pt-4">
                  <span className="text-white/40 uppercase text-[11px] tracking-widest mr-2">Decision</span>
                  {cs.decision}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-white/70">
          <span className="text-white/40 uppercase text-[11px] tracking-widest mr-2">Outcome</span>
          {cs.outcome}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {cs.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/50 hover:border-accent/40 hover:text-white/70 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseRow({ cs, i }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-center">
        <div className={flip ? "lg:order-2" : ""}>
          <Visual cs={cs} />
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <CaseText cs={cs} />
        </div>
      </article>
    </Reveal>
  );
}

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Selected work"
          title="Five systems that made it to production, and stayed there."
          intro="Every claim carries its reason. Client names are anonymized by default."
        />
        <div className="space-y-24 xl:space-y-32">
          {caseStudies.map((cs, i) => (
            <CaseRow key={cs.id} cs={cs} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
