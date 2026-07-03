"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { shipped, shippedCoda } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const Shipped = () => {
  return (
    <section id="shipped" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Things I've shipped"
          title="Products, tools, and platforms in daily use."
          intro="One line each, linked where public. No client login URLs."
        />

        <div className="divide-y divide-white/10 border-y border-white/10">
          {shipped.map((s, i) => {
            const Wrapper = s.url ? "a" : "div";
            const props = s.url
              ? { href: s.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={s.name} delay={Math.min(i * 0.03, 0.2)}>
                <Wrapper
                  {...props}
                  className={`group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 items-baseline ${
                    s.url ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="md:col-span-3 flex items-center gap-2">
                    <span className="text-white font-semibold group-hover:text-accent transition-colors">
                      {s.name}
                    </span>
                    {s.url && (
                      <FiArrowUpRight className="text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>
                  <p className="md:col-span-6 text-white/60 text-[15px] leading-relaxed">{s.what}</p>
                  <p className="md:col-span-3 text-white/35 text-sm leading-relaxed">{s.why}</p>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-white/50 leading-relaxed">{shippedCoda}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Shipped;
