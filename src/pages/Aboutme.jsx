// src/pages/Aboutme.jsx
import React from "react";

const socialLinks = [
  {
    href: "https://instagram.com/ankiiitt____",
    label: "Instagram",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm6.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/+919617486475",
    label: "WhatsApp",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16.027 2.002c-7.733 0-14 6.267-14 14 0 2.463.642 4.873 1.865 7.003l-1.954 7.134 7.32-1.927A13.938 13.938 0 0016.027 30c7.733 0 14-6.267 14-14s-6.267-14-14-14zm0 2c6.629 0 12 5.371 12 12s-5.371 12-12 12a11.92 11.92 0 01-6.101-1.67l-.431-.257-4.293 1.129 1.144-4.177-.277-.442A11.923 11.923 0 014.027 16c0-6.629 5.371-12 12-12zm5.773 6.238c-.295-.656-.605-.671-.885-.683-.229-.01-.49-.01-.75-.01s-.686.099-1.049.49c-.362.391-1.379 1.348-1.379 3.29s1.411 3.814 1.606 4.078c.196.265 2.71 4.345 6.694 5.914.936.404 1.667.645 2.236.827.938.298 1.791.256 2.463.154.752-.112 2.31-.944 2.637-1.857.325-.914.325-1.696.229-1.857-.098-.162-.363-.259-.752-.452s-2.31-1.142-2.667-1.269c-.356-.126-.615-.19-.875.191-.26.382-1.007 1.269-1.235 1.529-.229.26-.456.293-.844.107-.39-.186-1.644-.606-3.135-1.934-1.158-1.034-1.936-2.31-2.164-2.692-.229-.382-.024-.588.171-.773.176-.174.39-.455.586-.682.195-.227.26-.382.39-.636.13-.255.065-.49-.033-.682-.097-.191-.864-2.123-1.182-2.898z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Ankit-webtech",
    label: "GitHub",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.296-1.23 3.296-1.23.648 1.653.243 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ankitnagar7/",
    label: "LinkedIn",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452H16.89V14.8c0-1.345-.027-3.078-1.874-3.078-1.875 0-2.162 1.463-2.162 2.976v5.755H9.298V9h3.4v1.561h.048c.474-.9 1.637-1.847 3.37-1.847 3.6 0 4.268 2.37 4.268 5.455v6.283zM5.337 7.433c-1.088 0-1.972-.884-1.972-1.972 0-1.088.884-1.972 1.972-1.972 1.088 0 1.972.884 1.972 1.972 0 1.088-.884 1.972-1.972 1.972zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

export default function Aboutme() {
  return (
    <section
      id="aboutme"
      style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "100px 24px",
        background: "transparent",
      }}
    >
      {/* Label */}
      <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "#4f0242", marginBottom: 12 }}>
        About Me
      </p>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, color: "#42384a", textAlign: "center", marginBottom: 56 }}>
        The person behind{" "}
        <em style={{ fontStyle: "italic", color: "#4f0242" }}>the code</em>
      </h2>

      {/* Profile card */}
      <div style={{
        position: "relative",
        width: "20rem", minHeight: "32rem",
        background: "#141414", border: "1px solid #222",
        borderRadius: 24, overflow: "hidden",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "40px 32px",
        textAlign: "center",
      }}>
        {/* Red corner accents */}
        <div style={{ position:"absolute",top:0,left:0,width:56,height:56, borderTop:"2px solid #4f0242",borderLeft:"2px solid #4f0242",borderRadius:"24px 0 0 0" }}/>
        <div style={{ position:"absolute",bottom:0,right:0,width:56,height:56, borderBottom:"2px solid #4f0242",borderRight:"2px solid #4f0242",borderRadius:"0 0 24px 0" }}/>

<<<<<<< HEAD
  return (
//     <div className="group relative w-[20rem] h-[30rem] bg-gray-100 rounded-xl text-center transition-all duration-500 hover:shadow-2xl hover:bg-cyan-500">
//       <div className="h-2.5 w-4/5 mx-auto bg-cyan-500 rounded-b-3xl transition-all duration-300 group-hover:h-0"></div>

//       <div className="flex justify-center items-center w-[70px] h-[70px] bg-gray-500 rounded-full mx-auto my-[30px] transition-all duration-500 text-sm group-hover:w-full group-hover:h-2/6 group-hover:rounded-t-xl group-hover:rounded-b-none group-hover:my-0 group-hover:bg-gray-100 relative z-10">
//         <span className="font-bold text-gray-100 group-hover:text-gray-900 transition-all duration-500">
//           Ankit
//         </span>
//       </div>

//       <h2 className="p-4 text-2xl transition-all duration-100 group-hover:opacity-0 absolute inset-x-0 bottom-4 text-gray-900">
//         Ankit
//         <br />
//         <span className="text-lg">Passionate</span>
//       </h2>

//     <p className="absolute inset-0 flex items-center justify-center text-white text-center 
// opacity-0 translate-y-4 transition-all duration-700 
// group-hover:opacity-100 group-hover:translate-y-0 z-10 px-6 text-lg md:text-xl font-light tracking-wide">
//   Building modern, scalable, and interactive web experiences with the MERN stack.
// </p>


//       {/* Social Icons */}
//       <div className="absolute bottom-4 left-8 right-8 flex justify-center space-x-2 opacity-0 transition-all duration-700 group-hover:opacity-100 z-10">
//         {socialLinks.map((link, index) => (
//           <a
//             key={index}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="button flex-center"
//            >
//             {link.svg}
//           </a>
//         ))}
//       </div>
//     </div>
  // );
// }; 

    <div className="group relative w-[20rem] h-[30rem] bg-gray-100 rounded-xl text-center overflow-hidden transition-all duration-500 hover:shadow-2xl">

  {/* Top Bar */}
  <div className="h-2.5 w-4/5 mx-auto bg-cyan-500 rounded-b-3xl transition-all duration-300 group-hover:h-0"></div>

  {/* Profile Header */}
  <div className="flex flex-col items-center justify-center w-full h-2/6 bg-gray-200 transition-all duration-500 group-hover:h-1/3">
    <h2 className="text-2xl font-semibold text-gray-900">
      Ankit Nagar
    </h2>
    <p className="text-sm text-gray-500">
      Full-Stack Developer
    </p>
  </div>

  {/* Bottom Section */}
  <div className="absolute bottom-0 left-0 w-full h-4/6 bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center px-6 opacity-0 translate-y-6 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
    <p className="text-white text-center text-lg font-light leading-relaxed">
      Building modern, scalable, and interactive web experiences
      <span className="font-semibold"> with the MERN stack.</span>
    </p>
  </div>

  {/* Social Icons */}
  <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-3 opacity-0 transition-all duration-700 group-hover:opacity-100">
    {socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="button flex-center"
      >
        {link.svg}
      </a>
    ))}
  </div>
</div>
);
};

// Custom CSS
const customCSS = `
.button {
  cursor: pointer;
  text-decoration: none;
  color: #ffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2d2e32;
  border: 2px solid #2d2e32;
  transition: all 0.45s;
}

.button:hover {
  transform: rotate(360deg);
  background-color: #ffff;
  color: red;
}

.button:hover .btn-svg {
  filter: invert(100%);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

// Style Injector
const StyleInjector = () => {
  return <style dangerouslySetInnerHTML={{ __html: customCSS }} />;
};

export default App;


//////////////
=======
        {/* Avatar */}
        <div style={{
          width: 100, height: 100, borderRadius: "50%",
          background: "linear-gradient(135deg,#4f0242,#8b0000)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2rem", fontWeight: 900, fontFamily: "'Playfair Display',serif",
          color: "#fff", marginBottom: 24,
          boxShadow: "0 0 40px rgba(230,57,70,0.3)",
        }}>
          AN
        </div>

        {/* Name */}
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "#f0eeeb", marginBottom: 6 }}>
          Ankit Nagar
        </h3>
        <p style={{ fontSize: ".85rem", color: "#888", marginBottom: 16 }}>Full-Stack Web Developer</p>

        {/* Bio */}
        <p style={{ fontSize: ".85rem", lineHeight: 1.75, color: "#666", marginBottom: 24 }}>
          Passionate Full-Stack Developer who loves building modern, interactive,
          and user-friendly web applications using React, Node.js &amp; MongoDB.
        </p>

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", marginBottom: 28,
          background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.25)",
          borderRadius: 100, fontSize: ".72rem", color: "#4f0242", fontWeight: 600,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f0242" }}/>
          Open to Opportunities
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 10 }}>
          {socialLinks.map((l) => (
            <a
              key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              title={l.label}
              style={{
                width: 40, height: 40, borderRadius: 12,
                background: "#0e0e0e", border: "1px solid #222",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#666", textDecoration: "none", transition: "all .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background="#4f0242"; e.currentTarget.style.borderColor="#4f0242"; e.currentTarget.style.color="#fff"; e.currentTarget.style.transform="translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="#0e0e0e"; e.currentTarget.style.borderColor="#222"; e.currentTarget.style.color="#666"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              {l.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Skill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 40, maxWidth: 540 }}>
        {["React","Next.js","Node.js","MongoDB","Express","Firebase","Tailwind","JavaScript"].map((tag) => (
          <span key={tag} style={{
            padding: "5px 16px", borderRadius: 100, fontSize: ".75rem", fontWeight: 500,
            background: "#141414", border: "1px solid #222", color: "#888",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
>>>>>>> 1ef2546 (Initial commit)
