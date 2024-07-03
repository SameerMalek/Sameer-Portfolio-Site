"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Photo.css";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className=" w-[73%] h-[73%] ml-[46px] mt-[20px] xl:w-[78%] xl:h-[78%] remove-background mix-blend-remove absolute transform transition-transform duration-500 hover:scale-105"
        >
          <Image
            src="/assets/profile3.png"
            priority
            quality={100}
            fill
            alt="Profile-Image"
            className="object-contain cursor-pointer boxshadow"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
          cx="253" 
          cy="253" 
          r="250" 
          stroke="#33b3ae"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray:"24 10 0 0"}}
          animate={{
            strokeDasharray:["15 120 25 25","16 25 92 72", "4 250 22 22"],
            rotate:[120, 360],
          }} 
          transition={{
            duration:20,
            repeat:Infinity,
            repeatType:"reverse",
          }}/>
        </motion.svg>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center hidden xl:block">
        <p className="text-white text-xl mb-[25px] font-semibold ">Mohammad Sameer Malek</p>
      </div>
      </motion.div>
      
    </div>
  );
};
export default Photo;
