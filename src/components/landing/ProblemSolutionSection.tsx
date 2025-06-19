"use client";


import { FC } from "react";
import { motion } from "framer-motion";

const bulletVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const ProblemSolutionSection: FC = () => {
  return (
    <>
    {/* Decorative top curve from HeroSection */}
      <div className="relative w-full overflow-hidden leading-none pointer-events-none rotate-180">
        <svg
          className="block w-full h-[80px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path
            d="M0,0V46.29c47.52,22,103.52,29.05,158,20.81,70.18-11.13,136-38.41,206-45.66C436.48,11.94,504,25.61,571.5,37.27c54.29,9.32,108.57,18.63,162.86,9.32C802.67,34.9,858.05,3.77,912,1.08c55.85-2.81,113,17.84,168,35.45V0Z"
            className="text-white"
          ></path>
        </svg>
      </div>
    
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

        {/* title  */}
        <motion.h3 className="text-xl font-semibold text-gray-900 mb-10 text-center italic"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Time tracking shouldn’t kill your flow… or your credibility.
        </motion.h3>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-10">
            ❌ The real struggles you’re facing:
          </h3>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            {[
              " Too many clicks just to log a simple session.",
              " Clunky tools built for teams — not for freelancers like you.",
              "Clients doubting your work: you spend hours justifying your time.",
              "Embarrassing reports: messy, unclear, or just plain ugly.",
              "Generating a decent report can take 2 hours… or a whole day.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <motion.span
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  ❌
                </motion.span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          {/* <p className="mt-6 text-sm text-red-600 font-semibold text-left">
            🔥 Result: wasted time, stress, and unclear decisions.
          </p> */}
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
          <h3 className="text-xl font-semibold text-gray-900 mb-10">
            ✅ What TimeTallyApp fixes for you:
          </h3>
         
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed text-left">
            {[
              " You focus on work. We handle clean, stylish reports.",
              "PDF reports that impress — no more client doubts.",
              "Fast, frictionless UX: track your time in seconds.",
              "Beautiful, minimal design that elevates your work.",
              "Share your report instantly with a public link or copy it for email",
              "Save time for what truly matters: creating, not reporting.",
              
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <motion.span
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-green-600 text-sm mt-1"
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
    </>
  );
};

export default ProblemSolutionSection;
