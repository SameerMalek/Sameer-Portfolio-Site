"use client";
import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSlider from '@/components/WorkSlider.jsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "React.Js",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est!",
    stack: [{ name: "React.js" },{ name: "Html" }, { name: "Bootstrap" },{ name: "CSS" }, { name: "Javascript" }],
    video: "/assets/project/project-1.mp4",
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7183473840423940096/",
    github: "https://github.com/SameerMalek/Taza-Khabar-NewsSite",
  },
  {
    num: "02",
    category: "MERN-stack", 
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est!",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "WebSocket.io" },
    ],
    video: "/assets/project/project-2.mp4",
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7202656339985063936/",
    github: "https://github.com/SameerMalek/Estate-Ease-FullStack",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est!",
    stack: [
      { name: "Html 5" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "React.js" },
    ],
    video: "/assets/project/project-1.mp4",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "backend",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est!",
    stack: [
      { name: "Html 5" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Node.js" },
    ],
    video: "/assets/project/project-1.mp4",
    live: "",
    github: "",
  },
];

function Project() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center pt-[2rem] pb-[1rem] xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:h-[475px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="xl:flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link  target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slideperview ={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" relative group flex justify-center items-center bg-pink-50/20 pointer-events-none">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <video
                          src={project.video}
                          className="xl:h-[329px] relative 
                          group flex justify-center items-center bg-pink-50/20 pointer-events-auto"
                          controls
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlider containerStyles ="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[75px] z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Project;
