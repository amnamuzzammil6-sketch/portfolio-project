import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Home.css";
import techVideo from "../assets/tech-bg.mp4";

/* ── stagger helper ── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/* ── particles canvas ── */
function Particles() {
  const count = 18;
  return (
    <div className="particles">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top:  `${20 + Math.random() * 60}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay:    `${Math.random() * 6}s`,
            width:  `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
    </div>
  );
}

const Home = () => (
  <div className="home-container">
    {/* ── video background ── */}
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-content">
        <source src={techVideo} type="video/mp4" />
      </video>
      <div className="video-overlay" />
    </div>
    <div className="bg-grid" />

    {/* ════════════════════════════════
        HERO — two-column grid
    ════════════════════════════════ */}
    <section className="hero-section">

      {/* ── LEFT: text ── */}
      <div className="hero-left">

        {/* badge */}
        <motion.div className="hero-badge" {...fadeUp(0.1)}>
          <span className="badge-dot" />
          Google Certified &nbsp;·&nbsp; UI/UX Design &nbsp;·&nbsp; Data Analytics
        </motion.div>

        {/* headline */}
        <motion.h1 className="hero-name" {...fadeUp(0.2)}>
          Bridging the Gap Between<br />
          <span className="highlight">Business &amp; Code</span>
        </motion.h1>

        {/* typed role */}
        <motion.div className="role-wrapper" {...fadeUp(0.3)}>
          <span className="role-prefix">I am a</span>
          <h2 className="hero-role">
            <ReactTyped
              strings={[
                "Google Certified Data Analyst",
                "Google Certified UI/UX Designer",
                "IBIT Merit Scholar",
                "AI &amp; Prompting Specialist",
              ]}
              typeSpeed={42}
              backSpeed={28}
              loop
            />
          </h2>
        </motion.div>

        {/* description */}
        <motion.p className="hero-desc" {...fadeUp(0.4)}>
          Specializing in <strong>Data-Driven Design</strong>. I combine{" "}
          <strong>Google-certified Analytics &amp; UI/UX</strong> with{" "}
          <strong>React.js</strong> to transform complex data into intuitive,
          high-performance web experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero-buttons" {...fadeUp(0.5)}>
          <Link to="/portfolio" className="btn-primary">
            View Projects →
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
        </motion.div>

      </div>

      {/* ── RIGHT: orb visual ── */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1   }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        {/* rings */}
        <div className="orb-ring orb-ring-1" />
        <div className="orb-ring orb-ring-2" />
        <div className="orb-ring orb-ring-3" />

        {/* glowing core */}
        <div className="orb-core" />

        {/* floating skill chips */}
        <div className="float-chip chip-1">
          <span className="chip-icon">📊</span> Data Analytics
        </div>
        <div className="float-chip chip-2">
          <span className="chip-icon">🎨</span> UI/UX Design
        </div>
        <div className="float-chip chip-3">
          <span className="chip-icon">⚛️</span> React.js
        </div>
        <div className="float-chip chip-4">
          <span className="chip-icon">🤖</span> AI Prompting
        </div>

        {/* particles */}
        <Particles />
      </motion.div>

    </section>

  </div>
);

export default Home;