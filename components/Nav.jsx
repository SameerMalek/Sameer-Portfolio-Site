"use client";
import { navLinks } from "@/lib/content";

function Nav() {
  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className="font-medium text-white/70 hover:text-accent transition-all"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
