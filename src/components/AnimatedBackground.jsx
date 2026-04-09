// // src/components/AnimatedBackground.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// export default function AnimatedBackground() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => setInit(true));
//   }, []);

//   const options = useMemo(() => ({
//     background: { color: { value: "transparent" } },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onClick: { enable: true, mode: "push" },
//         onHover: { enable: true, mode: "repulse" },
//       },
//       modes: {
//         push: { quantity: 2 },
//         repulse: { distance: 140, duration: 0.4 },
//       },
//     },
//     particles: {
//       color: { value: ["#8106a7", "#ff6b6b", "#888888", "#ffffff"] },
//       links: {
//         color: "#f8ed72",
//         distance: 130, enable: true, opacity: 0.07, width: 1,
//       },
//       move: {
//         direction: "none", enable: true,
//         outModes: { default: "bounce" },
//         random: true, speed: 0.5, straight: false,
//       },
//       number: { density: { enable: true, area: 900 }, value: 45 },
//       opacity: { value: 0.2 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     detectRetina: true,
//   }), []);

//   if (!init) return <></>;

//   return (
//     <Particles
//       id="tsparticles"
//       options={options}
//       className="absolute inset-0 -z-10"
//     />
//   );
// }








// src/components/AnimatedBackground.jsx
import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const auroras = [
      { color1: "rgba(124, 58, 237, 0.55)", color2: "rgba(99, 102, 241, 0)", y: 0.25, amp: 120, freq: 0.0012, speed: 0.0004, width: 0.85 },
      { color1: "rgba(168, 85, 247, 0.45)", color2: "rgba(139, 92, 246, 0)", y: 0.38, amp: 90,  freq: 0.0018, speed: 0.0006, width: 0.7  },
      { color1: "rgba(79,  70, 229, 0.35)", color2: "rgba(67,  56, 202, 0)", y: 0.55, amp: 110, freq: 0.0014, speed: 0.0003, width: 0.9  },
      { color1: "rgba(196,181,253, 0.25)", color2: "rgba(167,139,250, 0)", y: 0.18, amp: 70,  freq: 0.0022, speed: 0.0007, width: 0.6  },
      { color1: "rgba(109, 40, 217, 0.3)",  color2: "rgba(91,  33, 182, 0)", y: 0.65, amp: 95,  freq: 0.0016, speed: 0.0005, width: 0.75 },
    ];

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      auroras.forEach((a, i) => {
        const W = canvas.width;
        const H = canvas.height;
        const baseY = H * a.y;
        const bandH = H * 0.12;

        ctx.save();

        // Build wavy path
        const path = new Path2D();
        path.moveTo(0, H);
        for (let x = 0; x <= W; x += 4) {
          const wave =
            Math.sin(x * a.freq + t * a.speed * 200 + i * 1.3) * a.amp +
            Math.sin(x * a.freq * 2.3 + t * a.speed * 50 + i) * (a.amp * 0.4) +
            Math.sin(x * a.freq * 0.7 + t * a.speed * 700 + i * 2.1) * (a.amp * 0.25);
          path.lineTo(x, baseY + wave);
        }
        path.lineTo(W, H);
        path.closePath();

        // Vertical gradient for the band
        const grad = ctx.createLinearGradient(0, baseY - bandH, 0, baseY + bandH);
        grad.addColorStop(0,   a.color2);
        grad.addColorStop(0.4, a.color1);
        grad.addColorStop(1,   a.color2);

        ctx.fillStyle = grad;
        ctx.globalCompositeOperation = "screen";
        ctx.fill(path);

        // Second pass — glow shimmer
        const shimmerPath = new Path2D();
        shimmerPath.moveTo(0, H);
        for (let x = 0; x <= W; x += 4) {
          const wave =
            Math.sin(x * a.freq + t * a.speed * 600 + i * 1.3) * a.amp +
            Math.sin(x * a.freq * 2.3 + t * a.speed * 400+ i) * (a.amp * 0.4) +
            Math.sin(x * a.freq * 0.7 + t * a.speed * 1000 + i * 2.1) * (a.amp * 0.25);
          shimmerPath.lineTo(x, baseY + wave - 6);
        }
        shimmerPath.lineTo(W, H);
        shimmerPath.closePath();

        const shimmer = ctx.createLinearGradient(0, baseY - 30, 0, baseY + 30);
        shimmer.addColorStop(0, "rgba(255,255,255,0)");
        shimmer.addColorStop(0.5, `rgba(200,180,255,${0.08 + 0.04 * Math.sin(t * 0.01 + i)})`);
        shimmer.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = shimmer;
        ctx.fill(shimmerPath);

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.85,
      }}
    />
  );
}

















// // src/components/AnimatedBackground.jsx
// import React, { useMemo } from "react";

// function Orb({ style, delay, duration, size, x, y, color1, color2 }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         left: `${x}%`,
//         top: `${y}%`,
//         width: size,
//         height: size,
//         borderRadius: "50%",
//         background: `radial-gradient(circle at 35% 35%, ${color1}, ${color2}, transparent 70%)`,
//         filter: "blur(60px)",
//         opacity: 0,
//         animation: `orbFloat ${duration}s ease-in-out ${delay}s infinite`,
//         willChange: "transform, opacity",
//         ...style,
//       }}
//     />
//   );
// }

// const orbs = [
//   { x: 10,  y: 15,  size: 420, duration: 14, delay: 0,   color1: "#7c3aed", color2: "#4f0242" },
//   { x: 65,  y: 5,   size: 320, duration: 18, delay: 2,   color1: "#6366f1", color2: "#312e81" },
//   { x: 80,  y: 55,  size: 500, duration: 20, delay: 1,   color1: "#a855f7", color2: "#581c87" },
//   { x: 5,   y: 65,  size: 360, duration: 16, delay: 3,   color1: "#8b5cf6", color2: "#3b0764" },
//   { x: 45,  y: 40,  size: 280, duration: 22, delay: 0.5, color1: "#c084fc", color2: "#7e22ce" },
//   { x: 30,  y: 80,  size: 400, duration: 17, delay: 4,   color1: "#6d28d9", color2: "#1e1b4b" },
//   { x: 70,  y: 75,  size: 260, duration: 13, delay: 2.5, color1: "#818cf8", color2: "#4338ca" },
//   { x: 50,  y: 10,  size: 200, duration: 19, delay: 6,   color1: "#e879f9", color2: "#86198f" },
// ];

// export default function AnimatedBackground() {
//   return (
//     <>
//       <style>{`
//         @keyframes orbFloat {
//           0%   { opacity: 0;    transform: translate(0px, 0px)    scale(1); }
//           15%  { opacity: 0.18; }
//           40%  { opacity: 0.25; transform: translate(-30px, -50px) scale(1.08); }
//           65%  { opacity: 0.2;  transform: translate(25px, -30px)  scale(0.95); }
//           85%  { opacity: 0.22; transform: translate(-15px, 20px)  scale(1.05); }
//           100% { opacity: 0;    transform: translate(0px, 0px)    scale(1); }
//         }
//       `}</style>
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//           overflow: "hidden",
//           pointerEvents: "none",
//         }}
//       >
//         {orbs.map((orb, i) => (
//           <Orb key={i} {...orb} />
//         ))}
//       </div>
//     </>
//   );
// }








