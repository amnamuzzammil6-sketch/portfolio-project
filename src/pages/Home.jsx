import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top Tag */}
        <span className="hero-intro">
           GOOGLE CERTIFIED &bull; AI ESSENTIALS &bull; DATA ANALYTICS
        </span>

        {/* HEADLINE */}
        <h1 className="hero-name">
          Bridging the Gap Between <br />
          <span className="highlight">Business & Code</span>
        </h1>

        {/* Typed Text */}
        <h2 className="hero-role">
          <ReactTyped
            strings={[
              "Google Certified Data Analyst",
              "Certified in AI & Prompting Essentials",
              "IBIT Merit Scholar (Punjab University)",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </h2>

        {/* Summary (EXACTLY AS YOU WROTE IT) */}
        <p className="hero-desc">
          I am currently a <strong>Merit Scholar</strong> at the <strong>Institute of Business & Information Technology (University of the Punjab)</strong>.
          <br /><br />
          My focus goes beyond the classroom. I combine my academic foundation with 
          <strong> Google-certified expertise in Data Analytics, AI Essentials, and Prompting Essentials</strong> to 
          build React.js applications that are smart, scalable, and future-ready.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <Link to="/portfolio" className="btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>

      </motion.section>
    </div>
  );
};

export default Home;