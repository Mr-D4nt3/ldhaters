import React, { useState, useEffect } from "react";
import {
  Zap,
  ShieldOff,
  Radio,
  Globe,
  Lock,
  Flame,
  ArrowRight,
  Eye,
} from "lucide-react";

/* ── Noise / grain overlay (suavizado para fondo claro) ── */
const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")`;

/* ── Discord Logo ── */
const DiscordLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.04.03.05a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function LockdownHaters() {
  const [scrolled, setScrolled] = useState(false);

  // Lista de características (Azul claro: #0ea5e9)
const FEATURES = [
  { 
    icon: <ShieldOff size={28} />, 
    title: "Invisible Bypass", 
    desc: "Total camouflage technology. Our software integrates seamlessly with your system without being detected by security scans." 
  },
  { 
    icon: <Flame size={28} />, 
    title: "24/7 AI Assistant", 
    desc: "A smart agent appears over your exam to solve complex questions and logic puzzles in real-time." 
  },
  { 
    icon: <Zap size={28} />, 
    title: "One-Click Setup", 
    desc: "Forget about difficult configurations. A single click activates the bypass, leaving you ready for your test." 
  },
  { 
    icon: <Radio size={28} />, 
    title: "Stealth Activation", 
    desc: "Control the help panel with quick hotkeys. It appears when you need it and vanishes when you don't." 
  },
  { 
    icon: <Globe size={28} />, 
    title: "Zero-Risk Design", 
    desc: "Specifically engineered to prevent window closures or lockouts. Your exam flows normally while you get help." 
  },
  { 
    icon: <Eye size={28} />, 
    title: "Full Precision", 
    desc: "The AI analyzes the full context of every question to provide exact answers, not just approximations." 
  },
];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "#f8fafc", color: "#1e293b", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* ── Sticky Nav ── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all 0.3s", background: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent" }}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.12em", color: "#0ea5e9" }}>
            LOCKDOWN HATERS
          </span>
          <a href="#buy" style={{ border: "2px solid #0ea5e9", color: "#0ea5e9", padding: "6px 18px", fontSize: "0.75rem", fontWeight: "bold", textDecoration: "none", borderRadius: "4px" }}>
            UNIRSE
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative" }}>
        {/* Glow Azul Claro */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: noiseBg, backgroundSize: "256px 256px", pointerEvents: "none" }} />

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #e2e8f0", background: "#fff", padding: "4px 14px", marginBottom: "32px", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#64748b", borderRadius: "20px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9", display: "inline-block", boxShadow: "0 0 8px #0ea5e9", animation: "pulse 2s infinite" }} />
          Active Comunnity
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 0.9, letterSpacing: "0.04em", margin: "0 0 24px" }}>
          <span style={{ display: "block", color: "#0f172a" }}>Pass</span>
          <span style={{ display: "block", color: "#0ea5e9", textShadow: "0 0 40px rgba(14, 165, 233, 0.2)" }}>
            all your exams
          </span>
        </h1>

        <p style={{ maxWidth: "520px", fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, color: "#475569", margin: "0 auto 48px" }}>
          Get top ratings with our services
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          <a href="#buy" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0ea5e9", color: "#fff", padding: "14px 32px", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", transition: "all 0.2s", borderRadius: "4px", boxShadow: "0 10px 15px -3px rgba(14, 165, 233, 0.3)" }}>
            Explore now <ArrowRight size={16} />
          </a>
          <a href="#features" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #cbd5e1", background: "#fff", color: "#64748b", padding: "14px 32px", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", borderRadius: "4px" }}>
            Features
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px", textAlign: "center" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", color: "#0ea5e9", marginBottom: "12px", fontWeight: "bold" }}>¿Why us?</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#0f172a" }}>Feautres</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* ── Buy / Discord ── */}
      <section id="buy" style={{ padding: "100px 24px 120px", textAlign: "center", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0f172a", marginBottom: "16px" }}>
          Join our Discord server
        </h2>
        <p style={{ color: "#64748b", marginBottom: "48px", maxWidth: "460px", margin: "0 auto 48px" }}>
          The cheapest prices on the market
        </p>
        <DiscordButton />
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "32px 24px", textAlign: "center", color: "#94a3b8", fontSize: "0.75rem", borderTop: "1px solid #f1f5f9" }}>
        <strong style={{ color: "#0ea5e9" }}>RESPONDUS LOCKDOWN BYPASS</strong> &nbsp;·&nbsp; {new Date().getFullYear()}
      </footer>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes discordGlow { 0%, 100% { box-shadow: 0 4px 14px rgba(88,101,242,0.3); } 50% { box-shadow: 0 4px 25px rgba(88,101,242,0.5); } }
        html { scroll-behavior: smooth; }
        body { margin: 0; background-color: #f8fafc; }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} 
         style={{ background: "#fff", padding: "36px 28px", borderRadius: "8px", border: "1px solid #e2e8f0", transition: "all 0.3s", transform: hovered ? "translateY(-5px)" : "none", boxShadow: hovered ? "0 20px 25px -5px rgba(0,0,0,0.05)" : "none" }}>
      <div style={{ color: "#0ea5e9", marginBottom: "16px" }}>{icon}</div>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#1e293b", marginBottom: "12px" }}>{title}</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function DiscordButton() {
  return (
    <a href="https://discord.gg/jDPTZB9h" target="_blank" rel="noopener noreferrer"
       style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#5865F2", color: "#fff", padding: "16px 40px", fontWeight: 700, textDecoration: "none", borderRadius: "8px", animation: "discordGlow 3s infinite", transition: "transform 0.2s" }}>
      <DiscordLogo /> UNIRSE AL DISCORD
    </a>
  );
}