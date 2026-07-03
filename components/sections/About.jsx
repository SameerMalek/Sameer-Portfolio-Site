"use client";
import { FiDownload } from "react-icons/fi";
import { about, profile } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const tech = ["TypeScript", "Python", "React", "Next.js", "FastAPI", "Postgres", "GCP"];

const About = () => {
  return (
    <section id="about" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <SectionHeading kicker="About" title="Forward-deployed, because the hard part is never the model." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 items-start">
          <Reveal className="lg:col-span-1">
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl border border-accent/20" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/profile3.png"
                alt="Sameer Malek"
                className="relative rounded-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <p className="text-white/70 text-lg leading-relaxed">{about}</p>

            <div className="flex flex-wrap gap-2 mt-8">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 mt-8 border border-white/15 text-white px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              Download resume
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
