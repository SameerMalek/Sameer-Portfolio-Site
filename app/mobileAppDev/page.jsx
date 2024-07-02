"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import React from 'react'

function page() {
  return (
    <section className="container mx-auto p-8 bg-[#232329] shadow-md rounded-lg">
    <h1 className="text-5xl font-bold text-accent mb-4">Mobile App Development</h1>
    <p className="text-lg mb-6">
      I develop mobile applications using React Native. My expertise includes building cross-platform mobile apps that run smoothly on both iOS and Android devices. I focus on delivering high-performance and user-friendly mobile applications.
    </p>
    <p className="text-lg mb-6">
      Whether you need a mobile app for your business or a personal project, I can help you create an app that meets your requirements and exceeds your expectations.
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
