import React from "react";
import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        I’m a passionate Frontend Developer with 3 years of experience building interactive, responsive web applications using React, Tailwind, and modern JavaScript. I love creating user-friendly interfaces with attention to detail.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <span className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">React.js</span>
        <span className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">JavaScript</span>
        <span className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">Tailwind CSS</span>
        <span className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">Next.js</span>
      </motion.div>
    </motion.section>
  );
}
