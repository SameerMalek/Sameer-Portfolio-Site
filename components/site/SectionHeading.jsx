"use client";
import Reveal from "./Reveal";

// Consistent section label + title used across the single page.
const SectionHeading = ({ id, kicker, title, intro }) => {
  return (
    <div className="mb-12 xl:mb-16">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-accent/70" />
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-medium">
            {kicker}
          </span>
        </div>
        <h2 className="h21 max-w-3xl">{title}</h2>
        {intro ? (
          <p className="mt-5 max-w-2xl text-white/60 leading-relaxed text-base xl:text-lg">
            {intro}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
};

export default SectionHeading;
