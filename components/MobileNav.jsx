"use client";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/content";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary border-white/10">
        <div className="mt-24 mb-16 text-center text-2xl">
          <a href="#top" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Sameer<span className="text-accent">.</span>
            </h1>
          </a>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              href={link.path}
              key={link.name}
              onClick={() => setOpen(false)}
              className="text-xl text-white/80 hover:text-accent transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-accent text-primary font-semibold px-6 py-2.5 rounded-full"
          >
            Hire me
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
