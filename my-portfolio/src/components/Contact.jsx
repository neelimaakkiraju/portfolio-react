import React from "react";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Let’s work together on your next project!
      </motion.p>
      <motion.a
        href="mailto:youremail@example.com"
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Say Hello
      </motion.a>
      <motion.div
        className="mt-6 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <a href="#" className="hover:text-yellow-400">LinkedIn</a>
        <a href="#" className="hover:text-yellow-400">GitHub</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
      </motion.div>
    </motion.section>
  );
}
