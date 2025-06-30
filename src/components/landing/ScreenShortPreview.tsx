"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ScreenShortPreview: FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24 space-y-20 bg-slate-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Ugly Report Section */}
      <div className="text-center max-w-2xl">
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ❌ How not to deliver a report
        </motion.h2>
        <motion.p className="text-gray-600 text-base sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Looks unprofessional. Confuses clients. Hurts your credibility.
        </motion.p>
      </div>

      <div className="w-full max-w-3xl space-y-12">
        <Image
          src="/screenshot/ugly1.png"
          alt="Ugly report preview"
          className="w-full h-auto rounded-xl border-4 border-red-200 shadow-xl"
          width={1200}
          height={1600}
          priority
        />
        <Image
          src="/screenshot/ugly2.png"
          alt="Ugly report preview"
          className="w-full h-auto rounded-xl border-4 border-red-200 shadow-xl"
          width={1200}
          height={1600}
          priority
        />
      </div>

      {/* Beautiful Report Section */}
      <div className="text-center max-w-2xl">
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ✅ The kind of report that wins trust
        </motion.h2>
        <motion.p className="text-gray-700 text-base sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Clean, clear and client-ready. Automatically generated with <strong className="text-primary">TimeTally</strong>.
        </motion.p>
      </div>

      <div className="w-full max-w-3xl space-y-12">
        <Image
          src="/screenshot/preview_example.png"
          alt="Beautiful report preview"
          className="w-full h-auto rounded-xl border-4 border-green-200 shadow-xl"
          width={1200}
          height={1600}
          priority
        />

        <Image
          src="/screenshot/pdf_example.png"
          alt="PDF report preview"
          className="w-full h-auto rounded-xl border-4 border-green-200 shadow-xl"
          width={1200}
          height={1600}
          priority
        />
      </div>
    </motion.section>
  );
};

export default ScreenShortPreview;
