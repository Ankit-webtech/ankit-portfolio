// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "919617486475"; 
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form
        onSubmit={handleWhatsApp}
        className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg shadow-cyan-600 hover:shadow-green-700"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
        ></textarea>

        {/* WhatsApp Button */}
        <button
          type="submit"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-700 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 border border-white/40"
        >
          <span className="text-lg">Send via WhatsApp</span>
          <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] -translate-x-full group-hover:translate-x-full group-hover:duration-1000">
            <div className="relative h-full w-20 bg-white/20"></div>
          </div>
        </button>
      </form>
    </section>
  );
}
