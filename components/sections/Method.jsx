"use client";
import { method } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const Method = () => {
  return (
    <section id="method" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <SectionHeading
          kicker="How I work"
          title="The forward-deployed method."
          intro={method.intro}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {method.moves.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.05}>
              <div className="group border-t border-white/10 pt-6 hover:border-accent/50 transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="text-accent/70 font-semibold text-lg tabular-nums group-hover:text-accent transition-colors">
                    0{m.n}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{m.title}</h3>
                    <p className="text-white/60 leading-relaxed text-[15px]">{m.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-white/50 italic border-l-2 border-accent/40 pl-5 leading-relaxed">
            {method.coda}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Method;
