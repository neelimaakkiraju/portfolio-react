import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      description: "Built with React, Tailwind & Redux.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive design using React & Tailwind.",
      link: "#",
    },
    {
      title: "Dashboard App",
      description: "Next.js app with API integration.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="text-yellow-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
