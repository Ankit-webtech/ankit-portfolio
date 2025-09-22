// src/pages/Projects.jsx
import React from "react";
import portfolioImg from "../assets/img-p.jpg"; // your portfolio image
import landing from "../assets/landing-page.png";
import guesthouse from "../assets/innobyte.png";
import prernaF from "../assets/Prerna.png";
import reviewx from "../assets/reviewx.png";

export default function Projects() {
  const projects = [
    {
      title:"ReviewX",
      desc:"AI-powered Code Review Tool",
      link: "https://reviewx.vercel.app/",
      image:reviewx,
    },
    { 
      title: "Prerna Foundation", 
      desc: "NGO Website built with React + Tailwind.", 
      link: "https://prernafoundation.netlify.app/",
      image: prernaF,   // from public/images
    },
    { 
      title: "Innobyte Guesthouse", 
      desc: "Hotel booking website hosted on Vercel.", 
      link: "https://geusthouse-innobyte.vercel.app/",
      image: guesthouse,
    },
    { 
      title: "Landing Page", 
      desc: "Coca-Cola styled landing page using HTML, CSS, JS.", 
      link: "https://ankit-webtech.github.io/OCTANET_OCTOBER/",
      image: landing,
    },
    { 
      title: "Portfolio", 
      desc: "My Personal Portfolio Website built with React + Tailwind.", 
      link: "#home",
      image: portfolioImg,  // imported image
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-64 h-80 bg-gray-800 rounded-3xl overflow-hidden shadow-lg border-2 border-gray-700 hover:border-cyan-400 transition group hover:shadow-cyan-700"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>

              {/* Hover Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-300 ease-in-out bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
