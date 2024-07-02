"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive and dynamic web applications using the MERN stack and WebSocket IO for real-time features.",
    href:"/webDevelopment",
  },
  {
    num: "02",
    title: "UI/UX Development",
    description:
      "I create user-friendly, visually appealing designs with Figma, React JS, HTML, CSS, Tailwind, and Bootstrap.",
    href:"/uiUxDev",
  },
  {
    num: "03",
    title: "Mobile-App Development",
    description:
      "I develop high-performance, cross-platform mobile apps with React Native for both iOS and Android.",
    href:"/mobileAppDev",
  },
  {
    num: "04",
    title: "Database Development",
    description:
      "I design and maintain efficient databases with MySQL, PL/SQL, and MongoDB for optimal performance.",
    href:"/databaseDev",
  },
];

function Services() {
  return (
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mr-[63px] ml-[63px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
