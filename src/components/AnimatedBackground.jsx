// src/components/AnimatedBackground.jsx
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 140, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#8106a7", "#ff6b6b", "#888888", "#ffffff"] },
      links: {
        color: "#f8ed72",
        distance: 130, enable: true, opacity: 0.07, width: 1,
      },
      move: {
        direction: "none", enable: true,
        outModes: { default: "bounce" },
        random: true, speed: 0.5, straight: false,
      },
      number: { density: { enable: true, area: 900 }, value: 45 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}