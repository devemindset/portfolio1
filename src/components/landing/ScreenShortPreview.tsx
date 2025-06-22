"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ScreenShortPreview: FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-20 space-y-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Preview Screenshot */}
      <div className="w-full max-w-3xl">
        <Image
          src="/screenshot/preview_example.png"
          alt="Report preview"
          className="w-full h-auto rounded-xl shadow-xl"
          width={1200}
          height={1600}
          priority
        />
      </div>

      {/* PDF Screenshot */}
      <div className="w-full max-w-3xl">
        <Image
          src="/screenshot/pdf_example.png"
          alt="PDF export"
          className="w-full h-auto rounded-xl shadow-xl"
          width={1200}
          height={1600}
          priority
        />
      </div>
    </motion.section>
  );
};

export default ScreenShortPreview;
