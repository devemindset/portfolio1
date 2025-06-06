"use client";
import type { FC } from 'react';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

// interface FAQSectionProps {}
const faqs = [
  {
    question: "Do validators need an account?",
    answer: "No. Anyone can validate without signing up.",
  },
  {
    question: "Can I see who validated?",
    answer: "Yes. We log the name/email and timestamp of every response.",
  },
  {
    question: "Is it secure?",
    answer: "Yes. Each link is protected by a unique, non-guessable token.",
  },
  {
    question: "Who can use SnapValidate?",
    answer: "Freelancers, product teams, agencies — anyone who needs quick validation.",
  },
  {
    question: "Can I see validation history?",
    answer: "Yes. You get full traceability per link.",
  },
  {
    question: "Can I delete a link after sending it?",
    answer: "Yes. You can disable a link at any time from your dashboard.",
  },
];

const FAQSection: FC = () => {
        const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQSection;