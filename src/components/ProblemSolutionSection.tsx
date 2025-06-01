"use client";
import Image from 'next/image';
import type { FC } from 'react';

// interface ProblemSolutionSectionProps {}

const ProblemSolutionSection: FC = () => {
        return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Problem Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
            {/* Titre */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ❌ Why validation sucks today:
          </h3>
          {/* Image */}
          <div className="mb-6">
            <Image
              src="/tst.jpg"
              alt="Problem illustration"
              width={160}
              height={160}
              className="mx-auto"
            />
          </div>
          
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            <li>– Approvals happen over email, Slack, WhatsApp… and get lost.</li>
            <li>– Nobody knows who said what, or when.</li>
            <li>– You have to manually follow up. Everyone forgets.</li>
          </ul>
          <p className="mt-6 text-sm text-red-600 font-semibold text-left">
            🔥 Result: wasted time, stress, and unclear decisions.
          </p>
        </div>

        {/* Solution Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-blue-100">
            {/* Titre */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
             What SnapValidate solves for you:
          </h3>
          {/* Image */}
          <div className="mb-6">
            <Image
              src="/tst.jpg"
              alt="Solution illustration"
              width={160}
              height={160}
              className="mx-auto"
            />
          </div>
          
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            <li>✅ Create a link in 10 seconds</li>
            <li>✅ Add the emails of people to approve (or not)</li>
            <li>✅ Share the link wherever you want</li>
            <li>✅ Track who approved, when, and from where</li>
            <li>✅ Automatic reminders if needed</li>
            <li>📦 No account required</li>
            <li>🔐 Secure token-based link</li>
          </ul>
        </div>
      </div>
    </section>
  );

}
export default ProblemSolutionSection;