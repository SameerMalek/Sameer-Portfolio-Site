"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaMdb,
  FaCsharp
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiBootstrap } from "react-icons/si";
const about = {
  title: "About me",
  description:
    "I am Mohammad Sameer Malek, a Software Development enthusiast fluent in English, Hindi, Urdu, and Gujarati. Currently available for Software Developer or Fullstack developer related roles. I am based in Calgary, Alberta, Canada. Connect with me on LinkedIn (Mohammad Sameer Malek) and GitHub (SameerMalek).",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammad Sameer Malek",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 825 288 2786",
    },
    {
      fieldName: "Github",
      fieldValue: "SameerMalek",
    },
    {
      fieldName: "Email",
      fieldValue: "maleksameer715@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Urdu, Gujarati",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Mohammad Sameer Malek",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I am pursuing a Diploma in Software Development at the Southern Alberta Institute of Technology. Previously, I completed my Higher and Senior Secondary Education at Hanifa English Medium School in Gujarat, India.",
  items: [
    {
      institution: "Southern Alberta Institute of Technology, AB, Canada",
      degree: "Diploma - Software Development",
      duration: "April, 2023 - Present",
    },
    {
      institution: "Hanifa English Medium School, Guj , India",
      degree: "Higher Secondary Education - (CBSE)",
      duration: "April, 2020 - April, 2021",
    },
    {
      institution: "Hanifa English Medium School, Guj , India",
      degree: "Senior Secondary Education - (CBSE)",
      duration: "April, 2018 - April, 2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am proficient in HTML5, CSS3, JavaScript, Node.js, React.js, Next.js, Tailwind CSS, Java, Figma, MongoDB, Python, and Bootstrap. My skill set enables me to create dynamic and responsive digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaMdb />,
      name: "Mongo db",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiBootstrap/>,
      name: "Bootstrap",
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { delay, easeIn, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[329px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[329px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return (
                      <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:mb-[35px]">{about.description}
                </p>
              </div>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 ">
                {about.info.map((item,index)=>{
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;