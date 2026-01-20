import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-grid"></div>
      <div className="glow-orb"></div>

      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-intro">
           GOOGLE CERTIFIED • UI/UX DESIGN • DATA ANALYTICS
        </span>

        <h1 className="hero-name">
          Bridging the Gap Between <br />
          <span className="highlight">Business & Code</span>
        </h1>

        <div className="role-wrapper">
            <h2 className="hero-role">
              <ReactTyped
                strings={[
                  "Google Certified Data Analyst",
                  "Google Certified UI/UX Designer",
                  "IBIT Merit Scholar (Punjab University)",
                  "AI & Prompting Essentials Specialist",
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </h2>
        </div>

        
        <p className="hero-desc">
          Specializing in <strong>Data-Driven Design</strong>. I combine 
          <strong> Google-certified Analytics & UI/UX</strong> with <strong>React.js</strong> to 
          transform complex data into intuitive, high-performance web experiences.
        </p>

        <div className="hero-buttons">
          {/* PRIMARY: Go to your new "Technical Portfolio" page */}
          <Link to="/portfolio" className="btn-primary">
            View Projects
          </Link>

          {/* SECONDARY: Changed from "View Case Study" to "Contact Me" */}
          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>

      </motion.section>
    </div>
  );
};

export default Home;