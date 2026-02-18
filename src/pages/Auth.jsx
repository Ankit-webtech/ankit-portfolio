// src/pages/Auth.jsx
import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [isLogin,  setIsLogin]  = useState(true);
  const [loading,  setLoading]  = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { alert("Please enter your email first."); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Check your inbox.");
    } catch (error) {
      alert(error.message);
    }
  };

  const inputStyle = {
    width: "100%", padding: ".85rem 1.1rem",
    background: "#0d0d0d", border: "1px solid #222",
    borderRadius: 12, color: "#f0eeeb",
    fontFamily: "inherit", fontSize: ".9rem",
    outline: "none", transition: "border-color .2s",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "#0a0a0a" }}>

      {/* Grain */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: .3,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}/>

      {/* Red glow blob */}
      <div style={{ position:"fixed",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(230,57,70,0.07) 0%,transparent 70%)",top:"-10%",right:"-10%",filter:"blur(60px)",pointerEvents:"none",zIndex:0 }}/>

      <div style={{ position: "relative", width: "100%", maxWidth: 420, zIndex: 10 }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <a href="/" style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#f0eeeb", textDecoration: "none" }}>
            Ankit<span style={{ color: "#4f0242" }}>.</span>
          </a>
          <p style={{ fontSize: ".85rem", color: "#666", marginTop: 6 }}>
            {isLogin ? "Sign in to your demo account" : "Create a demo account"}
          </p>
        </div>

        {/* Card */}
        <div style={{
          position: "relative", overflow: "hidden",
          background: "#141414", border: "1px solid #222",
          borderRadius: 24, padding: "36px 32px",
        }}>
          {/* Top red bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#4f0242,transparent)" }}/>

          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 700, color: "#f0eeeb", marginBottom: 24 }}>
            {isLogin ? "Welcome back" : "Create account"}
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: ".68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "#444", marginBottom: 8 }}>
                Email Address
              </label>
              <input
                type="email" placeholder="you@example.com" required
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={(e)  => (e.target.style.borderColor = "rgba(57, 0, 132, 0.55)")}
                onBlur={(e)   => (e.target.style.borderColor = "#222")}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{ display: "block", fontSize: ".68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "#444", marginBottom: 8 }}>
                Password
              </label>
              <input
                type="password" placeholder="••••••••" required
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                onFocus={(e)  => (e.target.style.borderColor = "rgba(57, 0, 132, 0.55)")}
                onBlur={(e)   => (e.target.style.borderColor = "#222")}
              />
            </div>

            {/* Forgot */}
            {isLogin && (
              <p
                onClick={handleForgotPassword}
                style={{ textAlign: "right", fontSize: ".8rem", color: "#4f0242", cursor: "pointer", transition: "opacity .2s" }}
                onMouseEnter={(e) => (e.target.style.opacity = ".7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Forgot password?
              </p>
            )}

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              style={{
                width: "100%", padding: ".85rem",
                background: loading ? "#b200f9" : "#4f0242", color: "#fff",
                border: "none", borderRadius: 100,
                fontFamily: "inherit", fontSize: ".88rem", fontWeight: 600,
                letterSpacing: ".04em", cursor: loading ? "not-allowed" : "pointer",
                transition: "box-shadow .2s", marginTop: 4,
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.boxShadow = "0 8px 30px rgba(230,57,70,.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              {loading ? "Please wait…" : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", color: "#333" }}>
            <div style={{ flex: 1, height: 1, background: "#222" }}/>
            <span style={{ fontSize: ".75rem" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "#222" }}/>
          </div>

          {/* Toggle */}
          <p
            onClick={() => setIsLogin(!isLogin)}
            style={{ textAlign: "center", fontSize: ".85rem", color: "#666", cursor: "pointer", transition: "color .2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#4f0242")}
            onMouseLeave={(e) => (e.target.style.color = "#666")}
          >
            {isLogin ? "New user? Create a demo account" : "Already have an account? Sign in"}
          </p>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a
            href="/"
            style={{ fontSize: ".84rem", color: "#444", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#888")}
            onMouseLeave={(e) => (e.target.style.color = "#444")}
          >
            ← Back to portfolio
          </a>
        </div>
      </div>
    </div>
  );
}