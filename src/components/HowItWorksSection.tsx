"use client";
import Link from "next/link";
import Image from "next/image";
import type { FC } from 'react';

// interface HowItWorksSectionProps {}

const HowItWorksSection: FC = () => {
        return (
    <section className="bg-white py-24 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          How it works
        </h2>

        {/* Étapes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Étape 1 */}
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-md text-left">
            <h3 className="text-lg text-center font-semibold text-blue-600 mb-2">1. Create your validation link</h3>
            <p className="text-gray-700">
              Add a title and a description for context.
            </p>
          </div>

          {/* Flèche 1 (desktop only) */}
          <div className="hidden md:block">
            <Image src="/arrow.png" alt="Arrow" width={40} height={40} />
          </div>

          {/* Étape 2 */}
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-md text-left">
            <h3 className="text-lg font-semibold text-center text-blue-600 mb-2">2. Share it wherever you want</h3>
            <p className="text-gray-700">
              Email, Slack, WhatsApp – it’s up to you.
            </p>
          </div>

          {/* Flèche 2 (desktop only) */}
          <div className="hidden md:block">
            <Image src="/arrow.png" alt="Arrow" width={40} height={40} />
          </div>

          {/* Étape 3 */}
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-md text-left">
            <h3 className="text-lg font-semibold text-center text-blue-600 mb-2">3. Collect clear feedback</h3>
            <p className="text-gray-700">
              Get yes/no/comments with timestamp – all in one place.
            </p>
          </div>
        </div>

        {/* Description finale */}
        <p className="mt-12 text-gray-600 text-base">
          That’s it. No noise. Clear traceability.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href="/start"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium text-sm md:text-base"
          >
            Try it now. {"It's"} free.
          </Link>
        </div>
      </div>
    </section>
  );
}
export default HowItWorksSection;