"use client";
import Socials from "@/components/Socials";
import { Button } from "../components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
const Home = () => {
  const cvUrl = "/M_Sameer_Resume.pdf";
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h21 mb-6">Hi, I am</h1>
            <TypeAnimation
              sequence={[
                "Frontend",
                2000,
                "Backend",
                2000,
                "MERN-Stack",
                2000,
              ]}
              speed={50}
              className="h1 text-accent"
              wrapper="span"
              repeat={Infinity}
            />{" "}
            <br />
            <h1 className="h21 mt-6 mb-8">Developer!</h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            As a passionate and knowledgeable developer, I specialize in crafting seamless digital experiences using full-stack web development technologies, ensuring high standards in every project.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
                href={cvUrl}
                download
                className="uppercase flex items-center gap-2 hover:transition-all duration-500"
              >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
