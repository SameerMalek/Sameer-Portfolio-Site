"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiArrowDownRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { hero, profile } from "@/lib/content";
import DotGrid from "@/components/site/DotGrid";

const socials = [
  { icon: <FaLinkedinIn />, href: profile.linkedin, label: "LinkedIn" },
  { icon: <FaGithub />, href: profile.github, label: "GitHub" },
  { icon: <HiOutlineMail />, href: `mailto:${profile.email}`, label: "Email" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DotGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary" />
      </div>

      <div className="container mx-auto">
        <div className="pt-40 xl:pt-48 pb-24 xl:pb-28">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-white/60 text-sm tracking-wide">
                {profile.role}, {profile.location}
              </span>
            </motion.div>

            <motion.h1 variants={item} className="h1 max-w-4xl">
              I build <span className="text-accent">production-grade</span>,{" "}
              <span className="text-accent">secure</span> AI systems.
            </motion.h1>

            <motion.div variants={item} className="mt-3 xl:mt-4 min-h-[1.4em]">
              <TypeAnimation
                sequence={[500, hero.typed]}
                wrapper="p"
                speed={60}
                cursor
                className="text-xl sm:text-2xl xl:text-3xl font-semibold text-white/90"
              />
            </motion.div>

            <motion.p variants={item} className="mt-8 max-w-2xl text-white/70 text-base xl:text-lg leading-relaxed">
              {hero.sub}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 bg-accent text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300"
              >
                {hero.primaryCta.label}
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 border border-white/15 text-white px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                {hero.secondaryCta.label}
                <FiArrowDownRight className="text-lg group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-3 sm:ml-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
