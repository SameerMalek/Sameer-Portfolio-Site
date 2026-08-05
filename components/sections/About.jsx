"use client";
import { FiDownload } from "react-icons/fi";
import { about, profile, experience, education, certifications, skills } from "@/lib/content";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

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
                className="relative rounded-2xl w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-10 max-w-[280px] mx-auto lg:mx-0">
              <p className="text-white/40 uppercase text-[11px] tracking-widest mb-3">Education</p>
              <p className="text-white font-medium text-sm">{education.school}</p>
              <p className="text-white/55 text-sm mt-0.5">{education.program}</p>
              <p className="text-white/40 text-xs mt-1">
                {education.detail} · {education.period}
              </p>

              <p className="text-white/40 uppercase text-[11px] tracking-widest mb-3 mt-8">Certifications</p>
              <ul className="space-y-1.5">
                {certifications.map((c) => (
                  <li key={c} className="text-white/55 text-sm flex gap-2">
                    <span className="text-accent/70">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <p className="text-white/70 text-lg leading-relaxed">{about}</p>

            <div className="mt-10 space-y-6">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-white/40 uppercase text-[11px] tracking-widest mb-3">{group.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
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

            {/* Experience timeline */}
            <div className="mt-12">
              <p className="text-white/40 uppercase text-[11px] tracking-widest mb-6">Experience</p>
              <div className="relative border-l border-white/10 pl-6 space-y-8">
                {experience.map((e) => (
                  <div key={e.role} className="relative">
                    <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-primary" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="text-white font-semibold">{e.role}</h3>
                      <span className="text-white/40 text-xs whitespace-nowrap">{e.period}</span>
                    </div>
                    <p className="text-accent/80 text-sm mt-0.5">{e.org}</p>
                    <p className="text-white/55 text-[15px] leading-relaxed mt-3">{e.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
