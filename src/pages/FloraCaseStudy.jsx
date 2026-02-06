import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaFigma, FaPalette, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

export default function FloraCaseStudy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.article 
      className="case-study-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* --- NAVIGATION --- */}
      <nav className="study-nav">
        <Link to="/portfolio" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="study-hero">
        <div className="hero-content">
          <h1>FLORA: Custom Floral Subscription App</h1>
          <p className="subtitle">UX/UI Design Capstone • 2026</p>
          
          <div className="hero-tags">
            <span><FaFigma /> Figma</span>
            <span><FaPalette /> UI Design</span>
            <span><FaMobileAlt /> Prototyping</span>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/assets/flora/hifi-home.png" 
            alt="Final High Fidelity UI Design of Flora App Home Screen" 
            className="hero-img"
          />
        </div>
      </header>

      {/* --- OVERVIEW --- */}
      <section className="study-section">
        <div className="content-block">
          <h2>The Challenge</h2>
          <p>
            Busy studio owners and creative professionals often struggle to find reliable, 
            aesthetic-focused floral services. Standard delivery apps are too generic, 
            making it difficult to find curated arrangements that match a specific interior design vibe.
          </p>
          <div className="role-box">
            <h3>My Role</h3>
            <p>UX Research, Wireframing, High-Fidelity UI, Prototyping</p>
          </div>
        </div>
      </section>

      {/* --- STEP 1: RESEARCH (Persona) --- */}
      <section className="study-section alt-bg">
        <div className="content-block">
          <h2>Step 1: User Research</h2>
          <p>
            I created a persona, <strong>Sophia</strong>, to represent the target audience: 
            busy creatives who value aesthetics but lack time.
          </p>
          
          {/* UPDATED: Added maxWidth so the image doesn't look "ugly" and huge */}
          <div className="image-wrapper" style={{ margin: "2rem auto", maxWidth: "600px", textAlign: "center" }}>
            <img 
              src="/assets/flora/persona.png" 
              alt="User Persona Card for Sophia" 
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
          
          <ul className="insights-list">
            <li><strong>Pain Point:</strong> Overwhelmed by "cheap-looking" options on standard apps.</li>
            <li><strong>Goal:</strong> A streamlined flow to re-order favorite styles in under 2 minutes.</li>
          </ul>
        </div>
      </section>

      {/* --- STEP 2: WIREFRAMING --- */}
      <section className="study-section">
        <div className="content-block">
          <h2>Step 2: Low-Fidelity Wireframes</h2>
          <p>
            Before adding color, I focused on layout and hierarchy. The goal was to prioritize 
            imagery over text to suit the visual-first audience.
          </p>
          
          <div className="image-grid-2">
            <div className="img-wrapper">
              <img src="/assets/flora/wireframe-home.png" alt="Wireframe of Home Screen showing layout structure" />
              <span className="caption">Home Screen Sketch</span>
            </div>
            <div className="img-wrapper">
              <img src="/assets/flora/wireframe-details.png" alt="Wireframe of Product Details page" />
              <span className="caption">Product Details Sketch</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- STEP 3: HIGH FIDELITY --- */}
      <section className="study-section alt-bg">
        <div className="content-block">
          <h2>Step 3: High-Fidelity UI</h2>
          <p>
            I developed a visual identity using <strong>Golden Yellow (#FFD700)</strong> for energy 
            and <strong>Charcoal (#121212)</strong> for premium contrast.
          </p>

          <div className="image-grid-2">
            <div className="img-wrapper">
              <img src="/assets/flora/hifi-home.png" alt="Final colored UI of Home Screen with Gold Header" />
              <span className="caption">Final Home Screen</span>
            </div>
            <div className="img-wrapper">
              <img src="/assets/flora/hifi-details.png" alt="Final colored UI of Product Details with Add to Cart" />
              <span className="caption">Final Product Page</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL PROTOTYPE LINK --- */}
      <section className="study-section cta-section">
        <h2>Experience the Prototype</h2>
        <p>Try the fully interactive app in Figma.</p>
        <a 
          href="https://www.figma.com/proto/JadvWm5cqbwAqT7e0gaWik/Flora---Google-UX-Capstone?node-id=12-191&p=f&t=ST3FzH0a3u0uCLnc-1&scaling=min-zoom&content-scaling=fixed&page-id=3%3A5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          View Live Prototype <FaFigma />
        </a>
      </section>

    </motion.article>
  );
}