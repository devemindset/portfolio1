"use client";


import { FC } from "react";
import { motion } from "framer-motion";


const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background/hero_image.png')", // <-- ton image ici
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-snug text-white">
   Log Time. Stay Pro. <br className="hidden md:block" /> Avoid Toxic Clients.
</h1>
        <p className="text-base md:text-lg text-gray-400 mb-8 italic">
  TimeTallyApp helps you log every session, generate clean reports, and detect problematic clients. before they drain your time and energy.
</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--btn-bg)] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[var(--btn-hover)] transition "
          >
            Get Started for Free
          </motion.a>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-700 px-6 py-3 rounded-lg font-semibold text-white hover:bg-gray-100 hover:text-black transition"
          >
            See demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
