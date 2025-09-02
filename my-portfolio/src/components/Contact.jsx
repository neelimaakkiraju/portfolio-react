import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-400 mb-6">Let’s work together on your next project!</p>
      <a href="mailto:youremail@example.com" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
        Say Hello
      </a>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="hover:text-yellow-400">LinkedIn</a>
        <a href="#" className="hover:text-yellow-400">GitHub</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
      </div>
    </section>
  );
}
