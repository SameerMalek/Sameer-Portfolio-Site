"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

function page() {
  return (
    <section className="container mx-auto p-8 bg-[#232329] shadow-md rounded-lg">
      <h1 className="text-5xl text-accent font-bold mb-8">Web Development</h1>
      <p className="text-lg text-white mb-6">
        I specialize in web development using the MERN stack (MongoDB,
        Express.js, React, Node.js) and Next.Js. I also have experience with WebSocket IO
        for real-time applications. My services include building responsive and
        dynamic web applications tailored to your needs.
      </p>
      <p className="text-lg text-white mb-6">
        Whether you're looking to build a new web application from scratch or
        need enhancements to an existing one, I can help you achieve your goals
        with efficient and scalable solutions.
      </p>
      <Link
        href="/services"
        className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center"
      >
        <BsArrowLeft  className='text-primary text-3xl'/>
      </Link>
    </section>
  );
}

export default page;
