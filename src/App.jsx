// App.jsx
import React from "react";
import Aboutme from "./pages/Aboutme";
import Highlights from "./components/Highlights";
import Projects from "./pages/Projects";
import Contact from "./components/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <img
        src="/img-p.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-center py-4 z-50">
        <ul className="flex space-x-8 bg-white backdrop-blur-md px-6 py-3 rounded-full text-cyan-500 text-lg shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-cyan-500 hover:text-white hover:shadow-cyan-500/50 hover:shadow-lg focus:outline-none">
          <li>
            <a
              href="#home"
              className="text-gray-600 font-medium hover:text-cyan-400 transition"
            >
              👤
            </a>
          </li>
          <li>
            <a
              href="#highlights"
              className="text-gray-600 font-medium hover:text-cyan-400 transition"
            >
              Highlights
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 font-medium hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-600 font-medium hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          FULL-STACK WEB DEVELOPER
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-cyan-400">
          Code is my craft
        </p>
        <p className="mt-2 text-gray-200">
          — building bold, modern, and meaningful digital experiences.
        </p>

        <div className="mt-6 flex space-x-4">
          {/* About Me Button */}
          <a
            href="#aboutme" 
            className="px-8 py-2 text-cyan-500 text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 
            hover:font-bold
            hover:border-cyan-500 hover:text-white hover:shadow-cyan-500/50 hover:shadow-lg focus:outline-none"
          >
            About Me
          </a>

          {/* Resume Button */}
          <a
            href="/Ankit-resume-july25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-2 text-cyan-500 text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105
            hover:font-bold  
          hover:border-cyan-500 hover:text-white hover:shadow-cyan-500/50 hover:shadow-lg focus:outline-none"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Sections */}
      <Aboutme />
      <Highlights />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
