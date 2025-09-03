import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
  <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-white">Neelima</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer | React.js | 3+ Years Experience
        </motion.p>
        <motion.a 
          href="#projects" 
          className="bg-white text-fuchsia-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View My Work
        </motion.a>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
    </section>
  );
}
