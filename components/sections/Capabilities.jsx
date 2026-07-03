"use client";
import { capabilities } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Capabilities"
          title="Five pillars, each with the work that proves it."
          intro="No skill bars, no percentage circles, because self-assigned percentages are noise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="h-full rounded-xl border border-white/10 bg-[#0b0f14] p-6 hover:border-accent/40 hover:bg-[#0d1218] transition-all duration-300">
                <h3 className="text-white font-semibold text-lg mb-3">{c.title}</h3>
                <p className="text-accent/80 text-sm mb-4 leading-relaxed">{c.def}</p>
                <p className="text-white/50 text-[14px] leading-relaxed">
                  <span className="text-white/35 uppercase text-[10px] tracking-widest block mb-1.5">
                    Proof
                  </span>
                  {c.proof}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
