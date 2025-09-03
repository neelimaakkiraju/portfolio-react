import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Company",
      duration: "2022 - Present",
      details: "Developed responsive UIs with React, optimized performance, and improved SEO.",
    },
    {
      role: "Junior Developer",
      company: "Startup Inc.",
      duration: "2020 - 2022",
      details: "Worked on web applications, API integration, and state management.",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-yellow-400">{exp.company}</p>
            <p className="text-gray-400 mb-2">{exp.duration}</p>
            <p>{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
