"use client";

import type { FC } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const FinalCTASection: FC = () => {
  return (
    <motion.section
      className=" py-24 px-6 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Tired of messy time reports? <br /> Let’s change that in 10 seconds.
        </h2>

        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <Link
            href="/register"
            className="bg-[var(--btn-bg)] text-white px-6 py-3 rounded-md hover:bg-[var(--btn-hover)] transition font-medium text-sm md:text-base"
          >
            Create my first report
          </Link>
          <Link
            href="#demo"
            className="text-blue-600 hover:underline text-sm md:text-base font-medium"
          >
            See an example
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalCTASection;
