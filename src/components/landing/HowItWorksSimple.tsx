"use client";

import { InSimple } from '@/types';
import type { FC } from 'react';
import { motion } from "framer-motion";


interface HowItWorksSimpleProps {
    InSimples : InSimple[]
    title : string;
}

const HowItWorksSimple: FC<HowItWorksSimpleProps> = ({ InSimples,title }) => {
        return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
           {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {InSimples.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm p-6 border-l-4 border-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-600 font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowItWorksSimple;