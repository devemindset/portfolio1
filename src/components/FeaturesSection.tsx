"use client";

import type { FC } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  "No account required",
  "Secure link with optional expiration",
  "Email notifications",
  "Validation history",
  "Customizable message",
  "Multiple validators",
  "Real-time dashboard",
  "Branded validation link",
  "Mobile-friendly",
  "Quick setup (under 30 seconds)",
  "Comments supported with each response",
];

const FeaturesSection: FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6" id="features">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CheckCircle className="text-blue-600 w-6 h-6 shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
