// src/pages/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#home",       label: "Home"     },
    { href: "#aboutMe",    label: "About"    },
    { href: "#highlights", label: "Stack"    },
    { href: "#projects",   label: "Projects" },
    { href: "#contact",    label: "Contact"  },
  ];

  const socials = [
    { href: "https://github.com/Ankit-webtech",      icon: <FaGithub />,    label: "GitHub"    },
    { href: "https://linkedin.com/in/ankitnagar7",   icon: <FaLinkedin />,  label: "LinkedIn"  },
    { href: "https://instagram.com/ankiiitt____",    icon: <FaInstagram />, label: "Instagram" },
    { href: "https://wa.me/919617486475",             icon: <FaWhatsapp />,  label: "WhatsApp"  },
  ];

  const socStyle = {
    width: 42, height: 42, borderRadius: 12,
    background: "#0e0e0e", border: "1px solid #222",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#666", fontSize: "1.1rem", textDecoration: "none",
    transition: "all .2s",
  };

  return (
    <footer style={{ borderTop: "1px solid #222", padding: "48px 24px", background: "#111" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top grid */}
        <div style={{
          display: "grid", gap: 40, marginBottom: 40,
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#f0eeeb", marginBottom: 12 }}>
              Ankit<span style={{ color: "#4f0242" }}>.</span>
            </div>
            <p style={{ fontSize: ".85rem", lineHeight: 1.7, color: "#666" }}>
              Full-Stack Web Developer crafting modern, responsive &amp;
              interactive web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#4f0242", marginBottom: 18 }}>
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <a
                  key={l.href} href={l.href}
                  style={{ fontSize: ".88rem", color: "#666", textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#f0eeeb")}
                  onMouseLeave={(e) => (e.target.style.color = "#666")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#4f0242", marginBottom: 18 }}>
              Connect
            </h4>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socials.map((s) => (
                <a
                  key={s.label} href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  title={s.label} style={socStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#4f0242";
                    e.currentTarget.style.borderColor = "#4f0242";
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
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #222", marginBottom: 20 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: ".78rem", color: "#444" }}>
            © {year} Ankit Nagar. All rights reserved.
          </p>
          <p style={{ fontSize: ".78rem", color: "#444" }}>
            Crafted with{" "}
            <span style={{ color: "#4f0242" }}>♥</span>{" "}in India
          </p>
        </div>
      </div>
    </footer>
  );
}