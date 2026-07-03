import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Method from "@/components/sections/Method";
import Shipped from "@/components/sections/Shipped";
import Capabilities from "@/components/sections/Capabilities";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Method />
      <Shipped />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
