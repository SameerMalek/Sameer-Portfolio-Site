"use client";
import { useForm, ValidationError } from "@formspree/react";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contact, profile } from "@/lib/content";
import Reveal from "@/components/site/Reveal";

const channels = [
  { icon: <HiOutlineMail />, label: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaLinkedinIn />, label: "mohammad-sameer-malek", href: profile.linkedin },
  { icon: <FaGithub />, label: "SameerMalek", href: profile.github },
];

const Contact = () => {
  const [state, handleSubmit] = useForm(profile.formspree);

  return (
    <section id="contact" className="py-24 xl:py-32 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent/70" />
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-medium">Contact</span>
            </div>
            <h2 className="h21 max-w-xl">{contact.heading}</h2>

            <div className="mt-10 space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white/60 hover:text-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                    {c.icon}
                  </span>
                  <span className="text-[15px]">{c.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {state.succeeded ? (
              <div className="h-full flex flex-col justify-center rounded-xl border border-accent/30 bg-[#0b0f14] p-8">
                <h3 className="text-accent text-xl font-semibold mb-2">Message sent.</h3>
                <p className="text-white/60">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-[#0b0f14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-[#0b0f14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
                <textarea
                  name="message"
                  placeholder="What are you building, and where is it stuck?"
                  required
                  rows={5}
                  className="w-full bg-[#0b0f14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex items-center gap-2 bg-accent text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
