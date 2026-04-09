// src/pages/Projects.jsx
import React from "react";

// ── SVG Icon Components ──────────────────────────────────────────────────────

const IconCircuit = ({ color = "#4f0242" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="8" y="8" width="8" height="8" rx="2" stroke={color} strokeWidth="1.5" />
    <line x1="12" y1="2"  x2="12" y2="8"  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="16" x2="12" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2"  y1="12" x2="8"  y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="2"  r="1.5" fill={color} />
    <circle cx="12" cy="22" r="1.5" fill={color} />
    <circle cx="2"  cy="12" r="1.5" fill={color} />
    <circle cx="22" cy="12" r="1.5" fill={color} />
  </svg>
);

const IconLeaf = ({ color = "#888888" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 21V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M12 12C12 12 7 10 5 5c4 0 7 3 7 7z"
      fill={color + "44"} stroke={color} strokeWidth="1.3" strokeLinejoin="round"
    />
    <path
      d="M12 12C12 12 17 10 19 5c-4 0-7 3-7 7z"
      fill={color + "44"} stroke={color} strokeWidth="1.3" strokeLinejoin="round"
    />
  </svg>
);

const IconBuilding = ({ color = "#4f0242" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="6" width="16" height="15" rx="1.5" stroke={color} strokeWidth="1.5" />
    <line x1="4" y1="10" x2="20" y2="10" stroke={color} strokeWidth="1.2" />
    <rect x="9"    y="14" width="6"   height="7"   rx="1"   stroke={color} strokeWidth="1.2" />
    <rect x="7"    y="12" width="2.5" height="2.5" rx="0.5" fill={color + "44"} />
    <rect x="14.5" y="12" width="2.5" height="2.5" rx="0.5" fill={color + "44"} />
    <path d="M9 6V4a3 3 0 016 0v2" stroke={color} strokeWidth="1.3" />
  </svg>
);

const IconPenNib = ({ color = "#888888" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 19l-7-7 9-9 7 7-9 9z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5 12l-2 9 9-2" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14.5" cy="9.5" r="1.5" fill={color + "66"} />
  </svg>
);

const IconLayers = ({ color = "#4f0242" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 17l9 4 9-4"      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12l9 4 9-4"      stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <path d="M3 7l9-4 9 4-9 4-9-4z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP = {
  circuit:  IconCircuit,
  leaf:     IconLeaf,
  building: IconBuilding,
  pennib:   IconPenNib,
  layers:   IconLayers,
};

// ── Projects data ─────────────────────────────────────────────────────────────

const projects = [
  {
    title:  "ReviewX",
    desc:   "AI-powered Code Review Tool that analyses your code and gives intelligent feedback in real time.",
    link:   "https://reviewx.vercel.app/",
    tag:    "AI · Full Stack",
    year:   "2024",
    accent: "#4f0242",
    icon:   "circuit",
  },
  {
    title:  "Prerna Foundation",
    desc:   "NGO website built with React + Tailwind. Clean, accessible, and modern.",
    link:   "https://prernafoundation.netlify.app/",
    tag:    "React · NGO",
    year:   "2023",
    accent: "#888888",
    icon:   "leaf",
  },
  {
    title:  "Innobyte Guesthouse",
    desc:   "Hotel booking website with room browsing and inquiry flow, hosted on Vercel.",
    link:   "https://geusthouse-innobyte.vercel.app/",
    tag:    "MERN · Booking",
    year:   "2025",
    accent: "#4f0242",
    icon:   "building",
  },
  {
    title:  "Coca-Cola Landing",
    desc:   "Styled landing page inspired by Coca-Cola branding, built with pure HTML, CSS & JS.",
    link:   "https://ankit-webtech.github.io/OCTANET_OCTOBER/",
    tag:    "HTML · CSS · JS",
    year:   "2024",
    accent: "#888888",
    icon:   "pennib",
  },
  {
    title:  "This Portfolio",
    desc:   "My personal portfolio — dark editorial aesthetic, animated tech orbit, and smooth UX.",
    link:   "#home",
    tag:    "React · Framer",
    year:   "2025",
    accent: "#4f0242",
    icon:   "layers",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontSize: ".7rem",
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#4f0242",
                marginBottom: 12,
              }}
            >
              Portfolio
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#f0eeeb",
              }}
            >
              Selected{" "}
              <em style={{ fontStyle: "italic", color: "#4f0242" }}>Projects</em>
            </h2>
          </div>

          <a
            href="https://github.com/Ankit-webtech"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: ".65rem 1.4rem",
              borderRadius: 100,
              fontSize: ".82rem",
              fontWeight: 500,
              background: "transparent",
              border: "1px solid #222",
              color: "#888",
              textDecoration: "none",
              transition: "border-color .2s, color .2s",
              alignSelf: "flex-end",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#666";
              e.currentTarget.style.color = "#f0eeeb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#222";
              e.currentTarget.style.color = "#888";
            }}
          >
            All on GitHub ↗
          </a>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {projects.map((p, i) => {
            const IconComponent = ICON_MAP[p.icon];

            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "#141414",
                  border: "1px solid #222",
                  padding: 24,
                  transition: "border-color .3s, transform .3s, box-shadow .3s",
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
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                  }}
                />

                {/* Icon box */}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    marginBottom: 20,
                    background: `${p.accent}11`,
                    border: `1px solid ${p.accent}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {IconComponent && <IconComponent color={p.accent} />}
                </div>

                {/* Tag row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: ".68rem",
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid #1e1e1e",
                      color: "#666",
                      fontWeight: 500,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontSize: ".72rem", color: "#444" }}>{p.year}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#f0eeeb",
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: ".84rem",
                    lineHeight: 1.7,
                    color: "#666",
                    marginBottom: 22,
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                {/* CTA */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: ".78rem",
                    fontWeight: 600,
                    color: p.accent,
                    textDecoration: "none",
                    transition: "gap .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
                >
                  Visit Site →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}









































// // src/pages/Projects.jsx
// import React from "react";

// const projects = [
//   {
//     title: "ReviewX",
//     desc:  "AI-powered Code Review Tool that analyses your code and gives intelligent feedback in real time.",
//     link:  "https://reviewx.vercel.app/",
//     tag:   "AI · Full Stack",
//     year:  "2024",
//     accent:"#4f0242",
//     emoji: "🤖",
//   },
//   {
//     title: "Prerna Foundation",
//     desc:  "NGO website built with React + Tailwind. Clean, accessible, and modern.",
//     link:  "https://prernafoundation.netlify.app/",
//     tag:   "React · NGO",
//     year:  "2023",
//     accent:"#888888",
//     emoji: "🌱",
//   },
//   {
//     title: "Innobyte Guesthouse",
//     desc:  "Hotel booking website with room browsing and inquiry flow, hosted on Vercel.",
//     link:  "https://geusthouse-innobyte.vercel.app/",
//     tag:   "MERN · Booking",
//     year:  "2025",
//     accent:"#4f0242",
//     emoji: "🏨",
//   },
//   {
//     title: "Coca-Cola Landing",
//     desc:  "Styled landing page inspired by Coca-Cola branding, built with pure HTML, CSS & JS.",
//     link:  "https://ankit-webtech.github.io/OCTANET_OCTOBER/",
//     tag:   "HTML · CSS · JS",
//     year:  "2024",
//     accent:"#888888",
//     emoji: "🥤",
//   },
//   {
//     title: "This Portfolio",
//     desc:  "My personal portfolio — dark editorial aesthetic, animated tech orbit, and smooth UX.",
//     link:  "#home",
//     tag:   "React · Framer",
//     year:  "2025",
//     accent:"#4f0242",
//     emoji: "✨",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       style={{
//         minHeight: "100vh", display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center",
//         padding: "100px 24px", background: "transparent",
//       }}
//     >
//       <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>

//         {/* Header */}
//         <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
//           <div>
//             <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "#4f0242", marginBottom: 12 }}>
//               Portfolio
//             </p>
//             <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, color: "#f0eeeb" }}>
//               Selected{" "}
//               <em style={{ fontStyle: "italic", color: "#4f0242" }}>Projects</em>
//             </h2>
//           </div>
//           <a
//             href="https://github.com/Ankit-webtech"
//             target="_blank" rel="noopener noreferrer"
//             style={{
//               display: "inline-flex", alignItems: "center", gap: 6,
//               padding: ".65rem 1.4rem", borderRadius: 100, fontSize: ".82rem", fontWeight: 500,
//               background: "transparent", border: "1px solid #222", color: "#888",
//               textDecoration: "none", transition: "border-color .2s,color .2s",
//               alignSelf: "flex-end",
//             }}
//             onMouseEnter={(e) => { e.currentTarget.style.borderColor="#666"; e.currentTarget.style.color="#f0eeeb"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.borderColor="#222"; e.currentTarget.style.color="#888"; }}
//           >
//             All on GitHub ↗
//           </a>
//         </div>

//         {/* Grid */}
//         <div style={{
//           display: "grid", gap: 18,
//           gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
//         }}>
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               style={{
//                 position: "relative", borderRadius: 20, overflow: "hidden",
//                 display: "flex", flexDirection: "column",
//                 background: "#141414", border: "1px solid #222",
//                 padding: 24, transition: "border-color .3s,transform .3s,box-shadow .3s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = `${p.accent}44`;
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,.6)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = "#222";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               {/* Top accent bar */}
//               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.accent},transparent)` }}/>

//               {/* Emoji */}
//               <div style={{
//                 width: 54, height: 54, borderRadius: 14, marginBottom: 20,
//                 background: `${p.accent}11`, border: `1px solid ${p.accent}22`,
//                 display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
//               }}>
//                 {p.emoji}
//               </div>

//               {/* Tag row */}
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
//                 <span style={{ fontSize: ".68rem", padding: "3px 10px", borderRadius: 100, background: "rgba(255,255,255,0.04)", border: "1px solid #1e1e1e", color: "#666", fontWeight: 500 }}>
//                   {p.tag}
//                 </span>
//                 <span style={{ fontSize: ".72rem", color: "#444" }}>{p.year}</span>
//               </div>

//               {/* Title */}
//               <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", fontWeight: 700, color: "#f0eeeb", marginBottom: 10 }}>
//                 {p.title}
//               </h3>

//               {/* Desc */}
//               <p style={{ fontSize: ".84rem", lineHeight: 1.7, color: "#666", marginBottom: 22, flex: 1 }}>
//                 {p.desc}
//               </p>

//               {/* CTA */}
//               <a
//                 href={p.link} target="_blank" rel="noopener noreferrer"
//                 style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".78rem", fontWeight: 600, color: p.accent, textDecoration: "none", transition: "gap .2s" }}
//                 onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
//                 onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
//               >
//                 Visit Site →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





















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
