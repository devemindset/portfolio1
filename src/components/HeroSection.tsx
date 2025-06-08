"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-scroll-parallax";

const HeroSection: FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white pt-24 px-6 md:px-10 gap-16 md:gap-6 overflow-hidden">
      
      {/* LEFT SIDE */}
      <motion.div
        className="flex-1 w-full max-w-3xl text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Fixed Height Container for Typing Effect */}
        <div className="min-h-[110px] sm:min-h-[130px] md:min-h-[150px] flex items-center justify-center md:justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            <TypeAnimation
              sequence={[
                "Share a link. Get feedback. Move fast.",
                3000,
                "Validate anything in one click.",
                3000,
                "One link. One answer. One audit trail.",
                3000,
                
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="inline-block"
            />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Get clear, trackable approvals in one click. No account, no friction.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center md:justify-start items-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
          >
            <Link
              href="/register"
              className="bg-blue-600 text-white px-6 py-3 text-sm md:text-base rounded-md hover:bg-blue-700 transition font-medium shadow"
            >
              Create your first validation
            </Link>
          </motion.div>

          <Link
            href="#how-it-works"
            className="text-blue-600 hover:underline text-sm md:text-base font-medium"
          >
            See how it works
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: Illustration */}
      <motion.div
        className="flex-1 flex flex-col items-center gap-10 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="flex justify-center gap-6 flex-wrap">
          <Parallax speed={-10}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src="/illustrate/illustrate_1.png"
                width={250}
                height={250}
                alt="illustrate 1"
                priority
                className="object-contain"
              />
            </motion.div>
          </Parallax>
          <Parallax speed={-15}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src="/illustrate/illustrate_2.png"
                width={150}
                height={150}
                alt="illustrate 2"
                className="object-contain"
              />
            </motion.div>
          </Parallax>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <Parallax speed={10}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src="/illustrate/illustrate_3.png"
                width={150}
                height={150}
                alt="illustrate 3"
                className="object-contain"
              />
            </motion.div>
          </Parallax>
          <Parallax speed={15}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src="/illustrate/illustrate_4.png"
                width={150}
                height={150}
                alt="illustrate 4"
                className="object-contain"
              />
            </motion.div>
          </Parallax>
        </div>
      </motion.div>
      {/* Decorative SVG curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-[80px] rotate-180 md:h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            fill="currentColor"
          >
            <path
              d="M0,0V46.29c47.52,22,103.52,29.05,158,20.81,70.18-11.13,136-38.41,206-45.66C436.48,11.94,504,25.61,571.5,37.27c54.29,9.32,108.57,18.63,162.86,9.32C802.67,34.9,858.05,3.77,912,1.08c55.85-2.81,113,17.84,168,35.45V0Z"
              className="text-gray-100"
            ></path>
          </svg>
        </div>
    </section>
  );
};

export default HeroSection;
