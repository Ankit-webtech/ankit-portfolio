// src/components/Highlights.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiPostman, SiCanva, SiTailwindcss } from "react-icons/si";

const icons = [
  { icon: FaReact,       color: "#61DAFB", name: "React"      },
  { icon: SiNextdotjs,   color: "#ffffff", name: "Next.js"    },
  { icon: SiJavascript,  color: "#F7DF1E", name: "JavaScript" },
  { icon: FaNodeJs,      color: "#68A063", name: "Node.js"    },
  { icon: SiExpress,     color: "#aaaaaa", name: "Express"    },
  { icon: SiMongodb,     color: "#4DB33D", name: "MongoDB"    },
  { icon: FaGitAlt,      color: "#F05032", name: "Git"        },
  { icon: FaGithub,      color: "#ffffff", name: "GitHub"     },
  { icon: SiPostman,     color: "#FF6C37", name: "Postman"    },
  { icon: SiCanva,       color: "#00C4CC", name: "Canva"      },
  { icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind"   },
  { icon: FaHtml5,       color: "#E44D26", name: "HTML5"      },
  { icon: FaCss3Alt,     color: "#1572B6", name: "CSS3"       },
];

export default function Highlights() {
  const R = 210;

  return (
    <section
      id="highlights"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "100px 24px", position: "relative", overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Red glow center blob */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(230,57,70,0.05) 0%,transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }}/>

      {/* Section label */}
      <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "#4f0242", marginBottom: 12 }}>
        Skills &amp; Tools
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,4rem)",
        fontWeight: 700, lineHeight: 1.1, color: "#f0eeeb",
        textAlign: "center", marginBottom: 60,
      }}>
        My <em style={{ fontStyle: "italic", color: "#4f0242" }}>Tech Stack</em>
      </h2>

      {/* Orbit wrapper */}
      <div style={{
        position: "relative", width: R*2+80, height: R*2+80,
        display: "flex", alignItems: "center", justifyContent: "center",
        maxWidth: "100%",
      }}>
        {/* Outer dashed ring */}
        <div style={{
          position: "absolute", width: R*2+60, height: R*2+60,
          border: "1px dashed rgba(230,57,70,0.12)",
          borderRadius: "50%", left: "50%", top: "50%",
          transform: "translate(-50%,-50%)", pointerEvents: "none",
        }}/>
        {/* Inner solid ring */}
        <div style={{
          position: "absolute", width: R*0.65*2, height: R*0.65*2,
          border: "1px solid rgba(230,57,70,0.08)",
          borderRadius: "50%", left: "50%", top: "50%",
          transform: "translate(-50%,-50%)", pointerEvents: "none",
        }}/>

        {/* Rotating container */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
            width: R*2, height: R*2,
          }}
        >
          {icons.map((item, i) => {
            const angle = (i * 360) / icons.length;
            const x = R * Math.cos((angle * Math.PI) / 180);
            const y = R * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`,
                  marginLeft: -24, marginTop: -24,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  whileHover={{ scale: 1.45 }}
                  title={item.name}
                  style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "#141414", border: "1px solid #222",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: item.color, fontSize: "1.4rem",
                    cursor: "default", transition: "box-shadow .2s",
                  }}
                  onHoverStart={(e) => { e.target.style.boxShadow = `0 0 18px ${item.color}44`; }}
                  onHoverEnd={(e)   => { e.target.style.boxShadow = "none"; }}
                >
                  <item.icon />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center badge */}
        <div style={{
          position: "absolute", zIndex: 10,
          width: 110, height: 110, borderRadius: "50%",
          background: "#141414", border: "1px solid #222",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center",
        }}>
          <span style={{ fontSize: "1.5rem" }}>⚡</span>
          <span style={{ fontSize: ".55rem", fontWeight: 700, letterSpacing: ".15em", color: "#666", marginTop: 4 }}>
            TECH STACK
          </span>
        </div>
      </div>

      {/* Tag chips */}
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: 10, marginTop: 48, maxWidth: 680,
      }}>
        {icons.map((ic) => (
          <div key={ic.name} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 100, fontSize: ".75rem", fontWeight: 500,
            background: "#141414", border: "1px solid #222", color: "#888",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: ic.color, flexShrink: 0 }}/>
            {ic.name}
          </div>
        ))}
      </div>
    </section>
  );
}





























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

















// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiJavascript,
//   SiExpress,
//   SiMongodb,
//   // SiVisualStudioCode,
//   SiPostman,
//   SiCanva,
//   SiTailwindcss,
// } from "react-icons/si";

// const icons = [
//   { icon: FaReact, color: "text-cyan-400" },
//   { icon: SiNextdotjs, color: "text-white" },
//   { icon: SiJavascript, color: "text-yellow-400" },
//   { icon: FaNodeJs, color: "text-green-500" },
//   { icon: SiExpress, color: "text-gray-300" },
//   { icon: SiMongodb, color: "text-green-600" },
//   { icon: FaGitAlt, color: "text-orange-500" },
//   { icon: FaGithub, color: "text-white" },
//   // { icon: SiVisualStudioCode, color: "text-blue-500" },
//   { icon: SiPostman, color: "text-orange-400" },
//   { icon: SiCanva, color: "text-sky-400" },
//   { icon: SiTailwindcss, color: "text-cyan-400" },
//   { icon: FaHtml5, color: "text-orange-500" },
//   { icon: FaCss3Alt, color: "text-blue-500" },
// ];

// export default function OrbitIcons() {
//   const radius = 220; // Radius thoda badhaya hai taaki icons overlap na karein

//   return (
//     <section 
//     id="highlights"
    
//     className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      
//       {/* Center Background Glow (Optional) */}
//       <div className="absolute w-40 h-40 bg-blue-500/20 blur-[100px] rounded-full" />

//       {/* Main Orbit Container */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 25, // Ek chakar kitne der mein katega (Speed control)
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="relative flex items-center justify-center"
//         style={{ width: radius * 2, height: radius * 2 }}
//       >
//         {icons.map((item, i) => {
//           const angle = (i * 360) / icons.length;
//           const x = radius * Math.cos((angle * Math.PI) / 180);
//           const y = radius * Math.sin((angle * Math.PI) / 180);

//           return (
//             <motion.div
//               key={i}
//               className="absolute cursor-pointer"
//               style={{
//                 left: `calc(50% + ${x}px)`,
//                 top: `calc(50% + ${y}px)`,
//                 marginLeft: "-24px", // Half of icon size (48px / 2)
//                 marginTop: "-24px",
//               }}
//             >
//               {/* Icon Counter-Rotation: Taaki ghumte waqt icons ulte na ho */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: 25,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 whileHover={{ 
//                     scale: 1.4, 
//                     filter: "drop-shadow(0 0 15px currentColor)" 
//                 }}
//               >
//                 <item.icon className={`text-5xl ${item.color} transition-colors`} />
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </motion.div>

//       {/* Center Text or Image (Optional) */}
//       <div className="absolute text-white font-bold text-2xl tracking-widest opacity-50">
//         TECH STACK
//       </div>
//     </section>
//   );
// }