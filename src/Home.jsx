// src/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedBackground from "./components/AnimatedBackground";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

const GlobalStyle = () => (
  <style>{`
   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

    :root {
      --crimson:    #4f0242;
      --crimson2:   #da20e3;
      --black:  #0a0a0a;
      --g1:     #141414;
      --g2:     #1c1c1c;
      --border: #222222;
      --white:  #888785;
      --muted:  #481919;
      --dim:    #444444;
    }

    *, *::before, *::after { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body {
      margin:0; background:var(--black);
      color:var(--white);
      font-family: 'Jost', sans-serif;              
      fontFamily: "'Cormorant Garamond', serif"             
    }
    ::selection { background:var(--crimson); color:#fff; }
    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:var(--black); }
    ::-webkit-scrollbar-thumb { background:var(--crimson); border-radius:2px; }

    body::before {
      content:''; position:fixed; inset:0;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events:none; z-index:9999; opacity:.3;
    }

    @keyframes fadeUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
    @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
    @keyframes pulse    { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.8);opacity:0} }
    @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @keyframes orbit    { to{transform:rotate(360deg)} }
    @keyframes counter  { to{transform:rotate(-360deg)} }

    .shimmer-text {
      background:linear-gradient(90deg,#f0eeeb 25%,#4f0242 50%,#f0eeeb 75%);
      background-size:200% auto;
      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      background-clip:text; animation:shimmer 4s linear infinite;
    }
    .cursor-dot {
      width:8px; height:8px; background:var(--red);
      border-radius:50%; position:fixed; pointer-events:none;
      z-index:10000; mix-blend-mode:difference;
    }
    .marquee-track { display:flex; width:max-content; animation:marquee 22s linear infinite; }
    .marquee-track:hover { animation-play-state:paused; }

    .nl {
      color:var(--muted); text-decoration:none; font-size:.82rem;
      font-weight:500; letter-spacing:.04em; padding:.35rem .9rem;
      border-radius:100px; transition:color .2s,background .2s;
    }
    .nl:hover,.nl.active { color:#fff; background:var(--crimson); }

    .btn-crimson {
      display:inline-flex; align-items:center; gap:8px;
      padding:.7rem 1.8rem; background:var(--crimson); color:#fff;
      border:none; border-radius:100px; font-family:inherit;
      font-size:.84rem; font-weight:600; letter-spacing:.04em;
      cursor:pointer; text-decoration:none;
      transition:transform .2s,box-shadow .2s;
    }
    .btn-crimson:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(230,57,70,.4); }

    .btn-ghost {
      display:inline-flex; align-items:center; gap:8px;
      padding:.7rem 1.8rem; background:transparent; color:var(--white);
      border:1px solid var(--border); border-radius:100px; font-family:inherit;
      font-size:.84rem; font-weight:500; letter-spacing:.04em;
      cursor:pointer; text-decoration:none; transition:border-color .2s,transform .2s;
    }
    .btn-ghost:hover { border-color:#666; transform:translateY(-2px); }

    .field {
      width:100%; padding:.9rem 1.2rem; background:#0d0d0d;
      border:1px solid var(--border); border-radius:12px;
      color:var(--white); font-family:inherit; font-size:.9rem;
      outline:none; resize:none; transition:border-color .2s;
    }
    .field::placeholder { color:var(--dim); }
    .field:focus { border-color:rgba(233, 4, 172, 0.55); }

    .soc {
      width:42px; height:42px; display:flex; align-items:center; justify-content:center;
      border:1px solid var(--border); border-radius:12px;
      color:var(--muted); text-decoration:none; font-size:1.1rem;
      transition:all .2s;
    }
    .soc:hover { border-color:var(--crimson); color:#fff; background:var(--crimson); transform:translateY(-3px); }

    .crimson-card {
      background:var(--g1); border:1px solid var(--border); border-radius:20px;
      transition:border-color .3s,transform .3s,box-shadow .3s;
    }
    .crimson-card:hover {
      border-color:rgba(230,57,70,.3); transform:translateY(-4px);
      box-shadow:0 20px 50px rgba(0,0,0,.6);
    }
  `}</style>
);

function CursorDot() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX - 4 + "px";
        ref.current.style.top = e.clientY - 4 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-dot" />;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.4 },
    );
    ["home", "aboutme", "highlights", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "aboutMe", label: "About" },
    { id: "highlights", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "10px 0" : "20px 0",
        transition: "padding .3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "6px 8px",
          background: "rgba(12,12,12,0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid #222",
          borderRadius: 100,
        }}
      >
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nl${active === l.id ? " active" : ""}`}
            onClick={() => setActive(l.id)}
          >
            {l.label}
          </a>
        ))}
        <Link
          to="/auth"
          className="btn-crimson"
          style={{ fontSize: ".75rem", padding: ".4rem 1rem", marginLeft: 8 }}
        >
          Demo Login
        </Link>
      </div>
    </nav>
  );
}

function MarqueeStrip() {
  const items = [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TailwindCSS",
    "Git",
    "Firebase",
    "Framer Motion",
  ];
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
        background: "#111",
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 60,
          background: "linear-gradient(to right,#111,transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 60,
          background: "linear-gradient(to left,#111,transparent)",
          zIndex: 2,
        }}
      />
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "0 28px",
              fontSize: ".76rem",
              fontWeight: 600,
              letterSpacing: ".12em",
              color: i % 3 === 0 ? "#4f0242" : "#555",
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "currentColor",
              }}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const roles = [
    "Full-Stack Developer",
    "React Enthusiast",
    "UI Craftsman",
    "MERN Builder",
  ];
  const rRef = useRef(0);
  const cRef = useRef(0);
  const dRef = useRef(false);

  useEffect(() => {
    let t;
    const tick = () => {
      const cur = roles[rRef.current];
      if (!dRef.current) {
        setTyped(cur.slice(0, cRef.current + 1));
        cRef.current++;
        if (cRef.current === cur.length) {
          dRef.current = true;
          t = setTimeout(tick, 1800);
          return;
        }
      } else {
        setTyped(cur.slice(0, cRef.current - 1));
        cRef.current--;
        if (cRef.current === 0) {
          dRef.current = false;
          rRef.current = (rRef.current + 1) % roles.length;
        }
      }
      t = setTimeout(tick, dRef.current ? 50 : 85);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 60px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(230,57,70,0.07) 0%,transparent 70%)",
          top: "5%",
          left: "-10%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(180,0,20,0.05) 0%,transparent 70%)",
          bottom: "15%",
          right: "-8%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ animation: "fadeUp .6s ease both" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            marginBottom: 32,
            background: "rgba(230,57,70,0.08)",
            border: "1px solid rgba(230,57,70,0.25)",
            borderRadius: 100,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4f0242",
              animation: "pulse 1.6s ease-out infinite",
            }}
          />
          <span
            style={{
              fontSize: ".72rem",
              color: "#4f0242",
              fontWeight: 600,
              letterSpacing: ".1em",
            }}
          >
            AVAILABLE FOR WORK
          </span>

          {/* Resume Button */}
          {/* <a
            href="/Ankit-Nagar-Resume-3-26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-2 text-crimson-500 text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-crimson hover:scale-105 hover:font-bold hover:border-crimson-500 hover:text-crimson hover:shadow-crimson-500/50 hover:shadow-lg focus:outline-none"
          >
            Resume
          </a> */}
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(1rem,5vw,4.5rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-.02em",
          maxWidth: 900,
          color: "gray",
        }}
      >
        Building{" "}
        <em style={{ fontStyle: "italic", color: "#4f0242" }}>Modern</em> Web
        <br />
        Experiences
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          marginTop: 24,
          fontSize: "clamp(1rem,2.5vw,1.2rem)",
          color: "#888",
          minHeight: "2rem",
        }}
      >
        {typed}
        <span
          style={{ animation: "blink 1s step-end infinite", color: "#4f0242" }}
        >
          |
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          display: "flex",
          gap: 12,
          marginTop: 40,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a href="#projects" className="btn-crimson">
          View Projects →
        </a>
        <a
          href="/Ankit-resume-2026(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Download CV ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        style={{
          display: "flex",
          gap: 48,
          marginTop: 72,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "28px 48px",
          background: "#111",
          border: "1px solid #222",
          borderRadius: 20,
        }}
      >
        {[
          { n: "10+", l: "Projects Built" },
          { n: "3+", l: "Years Learning" },
          { n: "5+", l: "Tech Stacks" },
          { n: "∞", l: "Coffee Cups" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div
              className="shimmer-text"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "2.8rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: ".73rem",
                color: "#888",
                marginTop: 4,
                letterSpacing: ".08em",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "#444",
          fontSize: ".62rem",
          letterSpacing: ".18em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(#444,transparent)",
          }}
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <GlobalStyle />
      <CursorDot />
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <Aboutme />
        <Highlights />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}










// // App.jsx
// import React from "react";
// import AnimatedBackground from "./components/AnimatedBackground";
// import { motion } from "framer-motion";
// import Aboutme from "./pages/Aboutme";
// import Highlights from "./components/Highlights";
// import Projects from "./pages/Projects";
// import Contact from "./components/Contact";
// import Footer from "./pages/Footer";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background Image */}
//       {/* <img
//         src="/img-p.jpg"
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
//       /> */}
//       <AnimatedBackground />

//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full flex justify-center py-4 z-50">
//         <ul className="flex space-x-8 bg-white backdrop-blur-md px-6 py-3 rounded-full text-crimson-500 text-lg shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-crimson-500 hover:text-white hover:shadow-crimson-500/50 hover:shadow-lg focus:outline-none">
//           <li>
//             <a
//               href="#home"
//               className="text-gray-600 font-medium hover:text-crimson-400 transition"
//             >
//               👤
//             </a>
//           </li>
//           <li>
//             <a
//               href="#highlights"
//               className="text-gray-600 font-medium hover:text-crimson-400 transition"
//             >
//               Highlights
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="text-gray-600 font-medium hover:text-crimson-400 transition"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="text-gray-600 font-medium hover:text-crimson-400 transition"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <div
//         id="home"
//         className="flex flex-col items-center justify-center h-screen text-center px-4 z-10 relative"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-bold tracking-wide"
//         >
//           FULL-STACK WEB DEVELOPER
//         </motion.h1>
//         <p className="text-xl md:text-2xl mt-4 ">
//           Code is my craft ,{" "}
//           <Link
//             to="/auth"
//             className="text-crimson-400 underline hover:text-crimson-600 text-sm"
//           >
//             Demo Login
//           </Link>
//         </p>
//         <p className="mt-2 text-gray-200">
//           — building bold, modern, and meaningful digital experiences.
//         </p>

//         <div className="mt-6 flex space-x-4">
//           {/* About Me Button */}
//           <a
//             href="#aboutme"
//             className="px-8 py-2 text-crimson-500 text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105
//             hover:font-bold
//             hover:border-crimson-500 hover:text-white hover:shadow-crimson-500/50 hover:shadow-lg focus:outline-none"
//           >
//             About Me
//           </a>

//           {/* Resume Button */}
//           <a
//             href="/Ankit-resume-2026(1).pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-10 py-2 text-crimson-500 text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105
//             hover:font-bold
//           hover:border-crimson-500 hover:text-white hover:shadow-crimson-500/50 hover:shadow-lg focus:outline-none"
//           >
//             Resume
//           </a>
//         </div>
//       </div>

//       {/* Sections */}
//       <Aboutme />
//       <Highlights />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
