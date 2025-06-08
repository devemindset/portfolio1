"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const WhyValidationMatters: FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Validation Matters
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Decisions should never be vague. <br className="hidden sm:inline" />
          <span className="text-blue-600 font-medium">ValidationFlow</span> helps teams, creators, and solo makers gain quick, traceable approvals with zero friction. <br className="hidden sm:inline" />
          Clarity, speed, and confidence. all in one link.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyValidationMatters;
