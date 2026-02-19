// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    title: "ReviewX",
    desc:  "AI-powered Code Review Tool that analyses your code and gives intelligent feedback in real time.",
    link:  "https://reviewx.vercel.app/",
    tag:   "AI · Full Stack",
    year:  "2024",
    accent:"#4f0242",
    emoji: "🤖",
  },
  {
    title: "Prerna Foundation",
    desc:  "NGO website built with React + Tailwind. Clean, accessible, and modern.",
    link:  "https://prernafoundation.netlify.app/",
    tag:   "React · NGO",
    year:  "2023",
    accent:"#888888",
    emoji: "🌱",
  },
  {
    title: "Innobyte Guesthouse",
    desc:  "Hotel booking website with room browsing and inquiry flow, hosted on Vercel.",
    link:  "https://geusthouse-innobyte.vercel.app/",
    tag:   "MERN · Booking",
    year:  "2025",
    accent:"#4f0242",
    emoji: "🏨",
  },
  {
    title: "Coca-Cola Landing",
    desc:  "Styled landing page inspired by Coca-Cola branding, built with pure HTML, CSS & JS.",
    link:  "https://ankit-webtech.github.io/OCTANET_OCTOBER/",
    tag:   "HTML · CSS · JS",
    year:  "2024",
    accent:"#888888",
    emoji: "🥤",
  },
  {
    title: "This Portfolio",
    desc:  "My personal portfolio — dark editorial aesthetic, animated tech orbit, and smooth UX.",
    link:  "#home",
    tag:   "React · Framer",
    year:  "2025",
    accent:"#4f0242",
    emoji: "✨",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "100px 24px", background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "#4f0242", marginBottom: 12 }}>
              Portfolio
            </p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, color: "#f0eeeb" }}>
              Selected{" "}
              <em style={{ fontStyle: "italic", color: "#4f0242" }}>Projects</em>
            </h2>
          </div>
          <a
            href="https://github.com/Ankit-webtech"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: ".65rem 1.4rem", borderRadius: 100, fontSize: ".82rem", fontWeight: 500,
              background: "transparent", border: "1px solid #222", color: "#888",
              textDecoration: "none", transition: "border-color .2s,color .2s",
              alignSelf: "flex-end",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor="#666"; e.currentTarget.style.color="#f0eeeb"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor="#222"; e.currentTarget.style.color="#888"; }}
          >
            All on GitHub ↗
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid", gap: 18,
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
        }}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                position: "relative", borderRadius: 20, overflow: "hidden",
                display: "flex", flexDirection: "column",
                background: "#141414", border: "1px solid #222",
                padding: 24, transition: "border-color .3s,transform .3s,box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.accent}44`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#222";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.accent},transparent)` }}/>

              {/* Emoji */}
              <div style={{
                width: 54, height: 54, borderRadius: 14, marginBottom: 20,
                background: `${p.accent}11`, border: `1px solid ${p.accent}22`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
              }}>
                {p.emoji}
              </div>

              {/* Tag row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: ".68rem", padding: "3px 10px", borderRadius: 100, background: "rgba(255,255,255,0.04)", border: "1px solid #1e1e1e", color: "#666", fontWeight: 500 }}>
                  {p.tag}
                </span>
                <span style={{ fontSize: ".72rem", color: "#444" }}>{p.year}</span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", fontWeight: 700, color: "#f0eeeb", marginBottom: 10 }}>
                {p.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: ".84rem", lineHeight: 1.7, color: "#666", marginBottom: 22, flex: 1 }}>
                {p.desc}
              </p>

              {/* CTA */}
              <a
                href={p.link} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".78rem", fontWeight: 600, color: p.accent, textDecoration: "none", transition: "gap .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
              >
                Visit Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





















// // src/pages/Projects.jsx
// import React from "react";
// import portfolioImg from "../assets/img-p.jpg"; // your portfolio image
// import landing from "../assets/landing-page.png";
// import guesthouse from "../assets/innobyte.png";
// import prernaF from "../assets/Prerna.png";
// import reviewx from "../assets/reviewx.png";

// export default function Projects() {
//   const projects = [
//     {
//       title:"ReviewX",
//       desc:"AI-powered Code Review Tool",
//       link: "https://reviewx.vercel.app/",
//       image:reviewx,
//     },
//     { 
//       title: "Prerna Foundation", 
//       desc: "NGO Website built with React + Tailwind.", 
//       link: "https://prernafoundation.netlify.app/",
//       image: prernaF,   // from public/images
//     },
//     { 
//       title: "Innobyte Guesthouse", 
//       desc: "Hotel booking website hosted on Vercel.", 
//       link: "https://geusthouse-innobyte.vercel.app/",
//       image: guesthouse,
//     },
//     { 
//       title: "Landing Page", 
//       desc: "Coca-Cola styled landing page using HTML, CSS, JS.", 
//       link: "https://ankit-webtech.github.io/OCTANET_OCTOBER/",
//       image: landing,
//     },
//     { 
//       title: "Portfolio", 
//       desc: "My Personal Portfolio Website built with React + Tailwind.", 
//       link: "#home",
//       image: portfolioImg,  // imported image
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12"
//     >
//       <h2 className="text-4xl font-bold mb-10">Projects</h2>

//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative w-64 h-80 bg-gray-800 rounded-3xl overflow-hidden shadow-lg border-2 border-gray-700 hover:border-cyan-400 transition group hover:shadow-cyan-700"
//           >
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-40 object-cover"
//             />

//             {/* Details */}
//             <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
//                 <p className="text-gray-300 text-sm">{project.desc}</p>
//               </div>

//               {/* Hover Button */}
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-300 ease-in-out bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg text-center"
//               >
//                 Visit Site
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
