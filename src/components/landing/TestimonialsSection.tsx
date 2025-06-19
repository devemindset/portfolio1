"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAuthState } from "@/context/AuthContext";

const testimonials = [
  {
    name: "Marion",
    role: "Freelance Designer",
    img: "/testimonials/mario.png",
    text: "Before, creating a report used to take me 2 hours… Now, I generate a professional PDF in 10 seconds. My client loves it, and so do I.",
  },
  {
    name: "Rose",
    role: "Remote Developer",
    img: "/testimonials/david.png",
    text: "I log my sessions as soon as I complete a task. At the end of the week, I hit 'generate' and it's ready to send.",
  },
  {
    name: "Claire",
    role: "Project Manager",
    img: "/testimonials/claire.png",
    text: "With TimeTally, I get a clear view of the time spent on each project. The reports are clean, professional, and super easy to share.",
  },
];


const TestimonialsSection: FC = () => {
  const { userAction } = useAuthState();

  const handleAction = () => {
    userAction("click", "testimonial");
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-xl font-semibold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          They saved time and looked more professional doing it.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow text-left hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={handleAction}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed italic">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
