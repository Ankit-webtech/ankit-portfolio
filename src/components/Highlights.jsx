import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

export default function Highlights() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "HTML/CSS", icon: (
        <div className="flex space-x-2">
          <FaHtml5 className="text-orange-500 text-3xl" />
          <FaCss3Alt className="text-blue-500 text-3xl" />
        </div>
      ) 
    },
  ];

  return (
    <section
      id="highlights"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Highlights</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-700 flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-xl border boder  hover:border-cyan-500 hover:text-cyan-400 shadow-lg hover:shadow-cyan-500/50 transition"
          >
            {skill.icon}
            <span className="text-lg font-semibold">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
