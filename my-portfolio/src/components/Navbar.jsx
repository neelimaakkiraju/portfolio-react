import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-500">MyPortfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
