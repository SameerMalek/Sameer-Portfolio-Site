import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-5 text-white bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#top">
          <h1 className="text-3xl font-semibold">
            Sameer
            <span className="text-accent">.</span>
          </h1>
        </a>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a
            href="#contact"
            className="bg-accent text-primary font-semibold px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all duration-300"
          >
            Hire me
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
