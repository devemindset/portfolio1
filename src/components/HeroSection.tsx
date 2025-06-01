"use client";
import Link from "next/link";
import type { FC } from 'react';


// interface HeroSectionProps {}

const HeroSection: FC= () => {
        return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white pt-24 px-6">
      <div className="max-w-3xl text-center">
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
            href="/start"
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
    </section>
  );
}
export default HeroSection;