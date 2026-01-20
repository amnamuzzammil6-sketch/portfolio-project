import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaCode, FaChartLine, FaDatabase, FaArrowRight, FaLaptopCode } from "react-icons/fa"; 
import "./Projects.css";

export default function Projects() {
  // State to handle the active tab (Default is 'data' because that's your priority)
  const [activeTab, setActiveTab] = useState("data");

  // DATA ANALYTICS PROJECTS
  const caseStudies = [
    { 
      title: "Strategic Customer Segmentation", 
      desc: "RFM Analysis using SQL & R to identify VIP customers and reduce churn.", 
      link: "/case-studies/customer-segmentation", 
      tags: ["SQL", "R", "Business Intel"]
    },
    { 
      title: "Bellabeat Consumer Analysis", 
      desc: "Analyzing smart device usage data to unlock new growth opportunities.", 
      link: "/case-studies/bellabeat", 
      tags: ["R", "Tableau", "Data Viz"]
    }
  ];

  // WEB DEVELOPMENT PROJECTS
  const webProjects = [
    { title: "Student Data Portal", desc: "Professional data entry system with LocalStorage persistence.", link: "https://student-data-portal.vercel.app/", external: true },
    { title: "Weather Dashboard", desc: "Fetches live climate data via OpenWeather API.", link: "/weather", external: false },
    { title: "E-commerce Interface", desc: "Responsive HTML/CSS layout deployed on Vercel.", link: "https://e-commerce-website-lemon-iota-85.vercel.app/", external: true },
    { title: "Task Manager", desc: "CRUD application using Local Storage for data persistence.", link: "/todo", external: false },
    { title: "React Calculator", desc: "A logic-heavy component focused on state updates.", link: "/calculator", external: false },
  ];

  return (
    <motion.div className="projects-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      <header className="projects-hero">
        {/* UPDATED TITLE */}
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>Technical Portfolio</motion.h1>
        
        {/* UPDATED SUBTITLE (Removed Software Engineering) */}
        <div className="subtitle-pill">
          A showcase of my work in <strong>Data Strategy</strong> and <strong>Web Development</strong>.
        </div>
      </header>

      {/* --- TAB NAVIGATION --- */}
      <div className="tabs-container">
        <button 
          className={`tab-btn ${activeTab === "data" ? "active" : ""}`} 
          onClick={() => setActiveTab("data")}
        >
          <FaChartLine /> Data Strategy
        </button>
        <button 
          className={`tab-btn ${activeTab === "web" ? "active" : ""}`} 
          onClick={() => setActiveTab("web")}
        >
          <FaLaptopCode /> Web Development
        </button>
      </div>

      {/* --- CONTENT AREA (Switches based on Tab) --- */}
      <div className="projects-content">
        <AnimatePresence mode="wait">
          
          {/* DATA TAB CONTENT */}
          {activeTab === "data" && (
            <motion.div 
              key="data"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header-simple">
                <h2>Business Intelligence Case Studies</h2>
                <p>Deep-dive analyses using SQL, R, and Visualization tools.</p>
              </div>

              <div className="projects-grid case-study-grid">
                {caseStudies.map((project, index) => (
                  <div key={index} className="project-card case-card">
                    <div className="card-header">
                      <FaDatabase className="project-icon icon-gold" />
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.desc}</p>
                    <div className="mini-tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                    <Link className="project-btn full-width" to={project.link}>
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* WEB TAB CONTENT */}
          {activeTab === "web" && (
            <motion.div 
              key="web"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header-simple">
                <h2>Front-End Engineering</h2>
                <p>Responsive applications built with React.js, HTML, and CSS.</p>
              </div>

              <div className="projects-grid">
                {webProjects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="card-header">
                      <FaCode className="project-icon" />
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.desc}</p>
                    {project.external ? (
                      <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Access <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <Link className="project-btn" to={project.link}>
                        View App <FaExternalLinkAlt />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}