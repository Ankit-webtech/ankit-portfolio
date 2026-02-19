// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "919617486475";
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputStyle = {
    width: "100%", padding: ".9rem 1.2rem",
    background: "#0d0d0d", border: "1px solid #222",
    borderRadius: 12, color: "#f0eeeb",
    fontFamily: "inherit", fontSize: ".9rem",
    outline: "none", resize: "none",
    transition: "border-color .2s",
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "100px 24px", background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
        <div style={{
          position: "relative", overflow: "hidden",
          background: "#141414", border: "1px solid #222",
          borderRadius: 28, padding: "clamp(32px,6vw,72px)",
        }}>
          {/* Blobs */}
          <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(230,57,70,0.06) 0%,transparent 70%)", top: "-20%", right: "-8%", filter: "blur(50px)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,0,0,0.05) 0%,transparent 70%)", bottom: "-10%", left: "-5%", filter: "blur(50px)", pointerEvents: "none" }}/>

          {/* Grid */}
          <div style={{
            position: "relative",
            display: "grid", gap: 56,
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          }}>

            {/* Left — info */}
            <div>
              <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "#4f0242", marginBottom: 12 }}>
                Let's Talk
              </p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, color: "#f0eeeb", marginBottom: 20 }}>
                Start a{" "}
                <em style={{ fontStyle: "italic", color: "#4f0242" }}>conversation</em>
              </h2>
              <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#666", marginBottom: 40 }}>
                Have a project in mind, a question, or just want to say hi?
                I'm always open to new ideas and exciting opportunities.
              </p>

              {/* Details */}
              {[
                { icon: "📍", label: "Location",      value: "India"           },
                { icon: "⚡", label: "Response Time", value: "Within 24 hours" },
                { icon: "💬", label: "WhatsApp",      value: "+91 96174 86475" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: ".66rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "#444" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: ".88rem", color: "#f0eeeb", marginTop: 2 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <form onSubmit={handleWhatsApp} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                type="text" placeholder="Your Name" required
                value={name} onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                onFocus={(e)  => (e.target.style.borderColor = "rgba(230, 57, 184, 0.55)")}
                onBlur={(e)   => (e.target.style.borderColor = "#222")}
              />
              <input
                type="email" placeholder="Email Address" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={(e)  => (e.target.style.borderColor = "rgba(252, 18, 232, 0.55)")}
                onBlur={(e)   => (e.target.style.borderColor = "#222")}
              />
              <textarea
                placeholder="Tell me about your project…"
                rows={5} required
                value={message} onChange={(e) => setMessage(e.target.value)}
                style={inputStyle}
                onFocus={(e)  => (e.target.style.borderColor = "rgba(202, 6, 176, 0.55)")}
                onBlur={(e)   => (e.target.style.borderColor = "#222")}
              />
              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: ".7rem 1.8rem",
                  background: "#4f0242", color: "#fff",
                  border: "none", borderRadius: 100,
                  fontFamily: "inherit", fontSize: ".84rem", fontWeight: 600,
                  letterSpacing: ".04em", cursor: "pointer",
                  transition: "transform .2s,box-shadow .2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(230, 57, 164, 0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
              >
                Send via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}






















// // src/pages/Contact.jsx
// import React, { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleWhatsApp = (e) => {
//     e.preventDefault();
//     const phoneNumber = "919617486475"; 
//     const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6"
//     >
//       <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//       <form
//         onSubmit={handleWhatsApp}
//         className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg shadow-cyan-600 hover:shadow-green-700"
//       >
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
//         />
//         <textarea
//           placeholder="Your Message"
//           rows="4"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//           className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
//         ></textarea>

//         {/* WhatsApp Button */}
//         <button
//           type="submit"
//           className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-700 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 border border-white/40"
//         >
//           <span className="text-lg">Send via WhatsApp</span>
//           <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] -translate-x-full group-hover:translate-x-full group-hover:duration-1000">
//             <div className="relative h-full w-20 bg-white/20"></div>
//           </div>
//         </button>
//       </form>
//     </section>
//   );
// }

// ////////////////////