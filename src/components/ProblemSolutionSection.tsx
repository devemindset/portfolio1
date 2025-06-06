"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const bulletVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const ProblemSolutionSection: FC = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="#3b82f6" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 text-center"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ❌ Why validation sucks today:
          </h3>
          <div className="mb-6">
            <Image src="/unhappy.png" alt="Problem" width={160} height={160} className="mx-auto" />
          </div>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            {[
              "Approvals happen over email, Slack, WhatsApp… and get lost.",
              "Nobody knows who said what, or when.",
              "You have to manually follow up. Everyone forgets.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <motion.span
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-red-500 text-xl"
                >
                  ✘
                </motion.span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-red-600 font-semibold text-left">
            🔥 Result: wasted time, stress, and unclear decisions.
          </p>
        </motion.div>

        {/* Solution Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 text-center border border-blue-100"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ✅ What ValidationFlow solves for you:
          </h3>
          <div className="mb-6">
            <Image src="/happy.png" alt="Solution" width={160} height={160} className="mx-auto" />
          </div>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            {[
              "Create a link in 10 seconds",
              "Add the emails of people to approve (or not)",
              "Share the link wherever you want",
              "Track who approved, when, and from where",
              "Automatic reminders if needed",
              "No account required",
              "Secure token-based link",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <motion.span
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-green-600 text-xl"
                >
                  ✅
                </motion.span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
