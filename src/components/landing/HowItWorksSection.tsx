"use client";


import { FC } from "react";
import { motion } from "framer-motion";
import { PencilLine, FolderKanban, FileText, Link2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "1. Log your sessions",
    icon: <PencilLine className="w-8 h-8 text-[var(--text-hover)]" />,
    text: "Each time you finish a task or a work session, log the date, time spent, and an optional note. It takes seconds.",
  },
  {
    title: "2. Build up your project history",
    icon: < FolderKanban className="w-8 h-8 text-[var(--text-hover)]" />,
    text: "Your sessions are grouped under each project — no clutter, no confusion.",
  },
  {
    title: "3. Generate a beautiful report",
    icon: <FileText className="w-8 h-8 text-[var(--text-hover)]" />,
    text: "Once ready, choose a date range and we’ll create a polished PDF or shareable link for your client.",
  },
  {
    title: "4. Send it or copy the link",
    icon: <Link2 className="w-8 h-8 text-[var(--text-hover)]" />,
    text: "Share the report by email or simply copy the public link — fast and professional.",
  },
];

const HowItWorksSection: FC = () => {
  return (
    <section className="bg-white py-24 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 bg-gray-50 rounded-xl p-6 shadow-md text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                {step.icon}
                <h3 className="text-lg font-semibold text-[var(--text-hover)] mt-2">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">{step.text}</p>
            </motion.div>
          ))}

          {/* Arrows (desktop only) */}
          <div className="hidden md:flex absolute left-1/3 top-1/2 -translate-y-1/2 -z-10">
            <div className="w-full h-1 bg-blue-100" />
          </div>
        </div>

        {/* Footer Text */}
        <motion.p
          className="mt-12 text-gray-600 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We handle tracking and formatting. You focus on doing the work.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/register"
            className="bg-[var(--btn-bg)] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[var(--btn-hover)] transition"
          >
            Try it now.{" It's"} free.
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
