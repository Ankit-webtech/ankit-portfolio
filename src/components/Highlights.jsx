// import React from "react";
// import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

// export default function Highlights() {
//   const skills = [
//     { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
//     { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
//     { name: "HTML/CSS", icon: (
//         <div className="flex space-x-2">
//           <FaHtml5 className="text-orange-500 text-3xl" />
//           <FaCss3Alt className="text-blue-500 text-3xl" />
//         </div>
//       ) 
//     },
//   ];

//   return (
//     <section
//       id="highlights"
//       className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6"
//     >
//       <h2 className="text-4xl font-bold mb-6">Highlights</h2>
//       <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {skills.map((skill, index) => (
//           <li
//             key={index}
//             className="bg-gray-700 flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-xl border boder  hover:border-cyan-500 hover:text-cyan-400 shadow-lg hover:shadow-cyan-500/50 transition"
//           >
//             {skill.icon}
//             <span className="text-lg font-semibold">{skill.name}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }


// ///////////////

















"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiMongodb,
  // SiVisualStudioCode,
  SiPostman,
  SiCanva,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  { icon: FaReact, color: "text-cyan-400" },
  { icon: SiNextdotjs, color: "text-white" },
  { icon: SiJavascript, color: "text-yellow-400" },
  { icon: FaNodeJs, color: "text-green-500" },
  { icon: SiExpress, color: "text-gray-300" },
  { icon: SiMongodb, color: "text-green-600" },
  { icon: FaGitAlt, color: "text-orange-500" },
  { icon: FaGithub, color: "text-white" },
  // { icon: SiVisualStudioCode, color: "text-blue-500" },
  { icon: SiPostman, color: "text-orange-400" },
  { icon: SiCanva, color: "text-sky-400" },
  { icon: SiTailwindcss, color: "text-cyan-400" },
  { icon: FaHtml5, color: "text-orange-500" },
  { icon: FaCss3Alt, color: "text-blue-500" },
];

export default function OrbitIcons() {
  const radius = 220; // Radius thoda badhaya hai taaki icons overlap na karein

  return (
    <section 
    id="highlights"
    
    className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      
      {/* Center Background Glow (Optional) */}
      <div className="absolute w-40 h-40 bg-blue-500/20 blur-[100px] rounded-full" />

      {/* Main Orbit Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25, // Ek chakar kitne der mein katega (Speed control)
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={i}
              className="absolute cursor-pointer"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                marginLeft: "-24px", // Half of icon size (48px / 2)
                marginTop: "-24px",
              }}
            >
              {/* Icon Counter-Rotation: Taaki ghumte waqt icons ulte na ho */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ 
                    scale: 1.4, 
                    filter: "drop-shadow(0 0 15px currentColor)" 
                }}
              >
                <item.icon className={`text-5xl ${item.color} transition-colors`} />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center Text or Image (Optional) */}
      <div className="absolute text-white font-bold text-2xl tracking-widest opacity-50">
        TECH STACK
      </div>
    </section>
  );
}