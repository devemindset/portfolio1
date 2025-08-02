"use client"
import Image from 'next/image';
import type { FC } from 'react';
import List from './List';
import { motion } from "framer-motion";

const skills = [
  "React", "Typescript", "Java", "Django", "SEO", "Docker"
];

const About: FC = () => {
  return (
    <section className="bg-[var(--background)] my-5 sm:my-20 flex justify-center" id="about">
      <div className="w-full sm:w-[80%]">
        <motion.h2
          className="text-center py-5 my-5 text-3xl sm:py-10 font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>

        <div className="flex flex-col items-center 2xl:flex-row gap-10 px-4 sm:px-10">
          {/* Colonne gauche */}
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/profile-img.jpg"
                  alt="About picture"
                  width={350}
                  height={350}
                  priority
                  className="mx-auto"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              <div className="ml-0 sm:ml-5 space-y-2 mt-5 sm:mt-0">
                {[
                  { label: "Name", value: "Morgan Freeman" },
                  { label: "Profile", value: "Full stack developer" },
                  { label: "Email", value: "contact@example.com" },
                  { label: "Phone", value: "(617) 557-0089" }
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.label}: </strong>
                    <p className="text-[var(--text-element-small-black)] text-sm">{item.value}</p>
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-col items-center">
              <motion.h3
                className="text-center font-bold text-2xl mb-5"
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                Skills
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 w-full bg-[var(--background-element-3)] py-5 px-7 shadow-xl text-center"
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <p
                    key={index}
                    className="text-[var(--text-element-small-black)] text-xs sm:text-sm py-2 px-3 border-b border-[var(--background-element)] bg-[var(--text-element-small)]/20"
                  >
                    {skill}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="px-1 sm:px-10 py-3 text-sm sm:text-xl">
            <motion.div
              className="font-bold mb-5 text-sm"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at, expedita minus voluptatum tempore corporis ratione aut ea nulla animi ex quod autem quaerat tempora asperiores.
            </motion.div>

            <motion.p
              className="text-[var(--text-element-small-black)] text-sm"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, enim maxime laboriosam corrupti esse architecto?
            </motion.p>

            <div className="my-5">
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
