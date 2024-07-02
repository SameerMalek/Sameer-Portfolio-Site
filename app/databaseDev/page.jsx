"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import React from 'react'

function page() {
  return (
    <section className="container mx-auto p-8 bg-[#232329] shadow-md rounded-lg">
      <h1 className="text-5xl font-bold text-accent mb-4">Database Development</h1>
      <p className="text-lg mb-6">
        I provide database development services in MySQL, PL/SQL, and MongoDB. I have studied these technologies in college and have hands-on experience working with them. My services include designing, implementing, and maintaining efficient database solutions.
      </p>
      <p className="text-lg mb-6">
        Whether you need a new database system or improvements to an existing one, I can help you achieve optimal performance and data management.
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
