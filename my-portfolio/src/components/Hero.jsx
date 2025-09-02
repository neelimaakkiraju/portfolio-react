import React from "react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-yellow-400">Neelima</span></h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">Frontend Developer | React.js | 3+ Years Experience</p>
      <a href="#projects" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
        View My Work
      </a>
    </section>
  );
}
