import React from "react";
import { Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/ankiiitt____", icon: <Instagram size={20} /> },
  { label: "Github", href:"https://github.com/Ankit-webtech", icon: <Github size={20} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankitnagar7/", icon: <Linkedin size={20} /> },
  { label: "WhatsApp", href:"https://wa.me/+919617486475", icon: <MessageCircle size={20} /> },
];


export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
      }}
    >
      {/* Section Heading */}
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
        About Me
      </p>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem,5vw,4rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "gray",
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        The person behind{" "}
        <em style={{ fontStyle: "italic", color: "#4f0242" }}>
          the code
        </em>
      </h2>

      {/* Profile Card */}
      <div
        style={{
          width: "22rem",
          background: "#141414",
          border: "1px solid #222",
          borderRadius: 24,
          padding: "50px 35px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#4f0242,#8b0000)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.2rem",
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            margin: "0 auto 25px",
            boxShadow: "0 0 40px rgba(230,57,70,0.3)",
          }}
        >
          AN
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#f0eeeb",
            marginBottom: 6,
          }}
        >
          Ankit Nagar
        </h3>

        <p
          style={{
            fontSize: ".9rem",
            color: "#888",
            marginBottom: 20,
          }}
        >
          Full-Stack Web Developer
        </p>

        {/* Bio */}
        <p
          style={{
            fontSize: ".9rem",
            lineHeight: 1.7,
            color: "#666",
            marginBottom: 25,
          }}
        >
          Passionate MERN Stack Developer focused on building modern,
          scalable and interactive web applications using React,
          Node.js and MongoDB.
        </p>

        {/* Status Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            marginBottom: 30,
            background: "rgba(79,2,66,0.1)",
            border: "1px solid rgba(79,2,66,0.3)",
            borderRadius: 100,
            fontSize: ".75rem",
            color: "#4f0242",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4f0242",
            }}
          />
          Open to Opportunities
        </div>

        {/* Social Links Container */}
<div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
  {socialLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      title={link.label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 42,
        height: 42,
        borderRadius: 12,
        background: "#0e0e0e",
        border: "1px solid #222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#666",
        textDecoration: "none",
        transition: "all .2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#4f0242"; // Your custom purple
        e.currentTarget.style.borderColor = "#f128d0";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#0e0e0e";
        e.currentTarget.style.borderColor = "#222";
        e.currentTarget.style.color = "#666";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {link.icon}
    </a>
  ))}
</div>
      </div>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginTop: 45,
          maxWidth: 600,
        }}
      >
        {[
         "Frontend Development",
         "Backend Develop",
         "MERN Stack Development",
         "FullStack Web Development",
         "Web Development"
        ].map((tag) => (
          <span
            key={tag}
            style={{
              padding: "6px 18px",
              borderRadius: 100,
              fontSize: ".75rem",
              background: "#141414",
              border: "1px solid #222",
              color: "#888",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
