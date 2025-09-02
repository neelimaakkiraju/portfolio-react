import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-400 mb-6">
        I’m a passionate Frontend Developer with 3 years of experience building interactive, responsive web applications using React, Tailwind, and modern JavaScript. I love creating user-friendly interfaces with attention to detail.
      </p>
      <div className="flex justify-center space-x-6">
        <span className="bg-gray-800 px-4 py-2 rounded-lg">React.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">Next.js</span>
      </div>
    </section>
  );
}
