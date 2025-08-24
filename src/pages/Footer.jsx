// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">
            I’m a passionate{" "}
            <span className="text-cyan-400"> Full-Stack Web Developer </span>
            focused on building modern, responsive, and user-friendly web
            applications. This portfolio showcases my work creativity, and
            journey in tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-600 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#highlights" className="hover:text-cyan-400 transition">
                Highlights
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-600 mb-3">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/ankit-webtech"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-black transition hover:shadow-xl hover:shadow-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ankitnagar7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition hover:shadow-xl hover:shadow-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/ankiiitt____"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition hover:shadow-xl hover:shadow-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919617486475"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition hover:shadow-xl hover:shadow-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
