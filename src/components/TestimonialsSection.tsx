"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Julie",
    role: "Product Manager",
    img: "/july.png",
    text: "We used to approve our designs over email. Now we use ValidationFlow for every key step.",
  },
  {
    name: "Freelancer",
    role: "UI Designer",
    img: "/freelancer.png",
    text: "I use ValidationFlow to get my mockups approved by clients. It’s fast and clean. No more chasing people: one link, one approval, done.",
  },
  {
    name: "Alex",
    role: "Indie Hacker",
    img: "/indihacker.png",
    text: "As a solo founder, speed and clarity are everything. ValidationFlow helps me get user feedback and approvals without wasting time. It keeps my workflow clean and focused. Just a single link and I'm moving forward.",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testimonials
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
