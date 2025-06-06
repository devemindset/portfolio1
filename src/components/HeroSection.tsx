"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-scroll-parallax";

const HeroSection: FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white pt-24 px-6 gap-12 md:gap-6 overflow-hidden">
      {/* LEFT: Text section */}
      <motion.div
        className="flex-1 max-w-3xl text-center md:text-left pl-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          <TypeAnimation
            sequence={[
              "Validate anything in one click.",
              3000,
              "One link. One answer. One audit trail.",
              3000,
              "Validate in seconds, no login.",
              3000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="inline"
          />
          
        </h1>

        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          Get clear, trackable approvals in one click. no account, no friction.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center md:justify-start items-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
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

      {/* RIGHT: Images with Parallax */}
      <motion.div
        className="flex-1 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
      >
        <div className="flex justify-center gap-6">
          <Parallax speed={-10}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image src="/illustrate_1.png" width={250} height={250} alt="illustrate 1" />
            </motion.div>
          </Parallax>
          <Parallax speed={-20}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image src="/illustrate_2.png" width={150} height={150} alt="illustrate 2" />
            </motion.div>
          </Parallax>
        </div>

        <div className="flex justify-center gap-6">
          <Parallax speed={10}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image src="/illustrate_3.png" width={150} height={150} alt="illustrate 3" />
            </motion.div>
          </Parallax>
          <Parallax speed={20}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image src="/illustrate_4.png" width={150} height={150} alt="illustrate 4" />
            </motion.div>
          </Parallax>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
