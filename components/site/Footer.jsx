import { profile } from "@/lib/content";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          Sameer Malek. Built forward-deployed, in Calgary.
        </p>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">Email</a>
          <a href="#top" className="hover:text-accent transition-colors">Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
