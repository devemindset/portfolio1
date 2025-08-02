"use client";
import type { FC } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero: FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen w-full lg:w-[80%]"
      id="hero"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          backgroundImage: "url('./template_4/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-4 z-50 flex flex-col gap-4 text-xl sm:text-2xl lg:text-3xl text-[var(--text-element-small)]"
        initial={{ opacity: 0, y: 70, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="#"><i className="bi bi-twitter-x" /></a>
        <a href="#"><i className="bi bi-facebook" /></a>
        <a href="#"><i className="bi bi-instagram" /></a>
        <a href="#"><i className="bi bi-linkedin" /></a>
      </motion.div>

      {/* Name + Type Animation */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 text-[var(--text-element)] z-50">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-bold"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          James Smith
        </motion.h1>

        <motion.h3
          className="mt-4 text-sm sm:text-xl md:text-2xl 2xl:text-5xl text-[var(--text-element-small)]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {"I'm"}{" "}
          <TypeAnimation
            sequence={[
              "freelancer", 2000,
              "photographer", 2000,
              "designer", 2000
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.h3>
      </div>
    </section>
  );
};

export default Hero;
