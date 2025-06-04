"use client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from 'react';


// interface HeroSectionProps {}

const HeroSection: FC= () => {
        return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white pt-24 px-6">

        <div className="max-w-3xl text-center  w-1/2">
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Validate anything in <span className="text-blue-600">one click</span>.
        </h1>

        {/* Sous-titre */}
        <p className="mt-4 text-lg text-gray-600">
          Get clear, trackable approvals in one click – no account, no friction.
        </p>

        {/* Boutons */}
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 text-sm md:text-base rounded-md hover:bg-blue-700 transition font-medium shadow"
          >
            Create your first validation
          </Link>
          <Link
            href="#how-it-works"
            className="text-blue-600 hover:underline text-sm md:text-base font-medium"
          >
            See how it works
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col w-1/2">
      <div className="flex justify-between gap-7">
          <div className="">
          <Image 
        src="/illustrate_1.png"
        width={150}
        height={150}
        alt="illustrate 1"
      />
      </div>
      <div className="">
          <Image 
        src="/illustrate_2.png"
        width={150}
        height={150}
        alt="illustrate 2"
      />
      </div>

      </div>
        
        <div className="flex justify-between gap-7">
            <div className="">
          <Image 
        src="/illustrate_3.png"
        width={150}
        height={150}
        alt="illustrate 3"
      />
      </div>
      <div className="">
          <Image 
        src="/illustrate_4.png"
        width={150}
        height={150}
        alt="illustrate 4"
      />
      </div>
        </div>
      
      </div>
      
      {/* <div className="">
           <Image 
        src="/illustrate_1.png"
        width={150}
        height={150}
        alt="illustrate 1"
      />
      </div> */}
      
      
      
      
     
      
    </section>
  );
}
export default HeroSection;