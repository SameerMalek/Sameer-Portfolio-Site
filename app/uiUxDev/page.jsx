"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import React from 'react'

function page() {
  return (
    <section className="container mx-auto p-8 bg-[#232329] shadow-md rounded-lg">
      <h1 className="text-5xl font-bold text-accent mb-4">UI/UX Development</h1>
      <p className="text-lg mb-6">
        I offer UI/UX development services using tools like Figma and React JS. My skills include HTML, CSS, SCSS, Tailwind, Bootstrap, and JavaScript. I have completed a comprehensive UI/UX course in college, which has equipped me with the knowledge to design and develop user-friendly interfaces.
      </p>
      <p className="text-lg mb-6">
        My services include creating visually appealing and user-centric designs, prototyping, and front-end development. I try my best to deliver high-quality UI/UX solutions that enhance user experience.
      </p>
      <Link
        href="/services"
        className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center"
      >
        <BsArrowLeft  className='text-primary text-3xl'/>
      </Link>
    </section>
  )
}

export default page

