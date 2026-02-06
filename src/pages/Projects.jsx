import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaExternalLinkAlt, 
  FaCode, 
  FaChartLine, 
  FaDatabase, 
  FaArrowRight, 
  FaLaptopCode,
  FaPalette 
} from "react-icons/fa"; 
import "./Projects.css";

export default function Projects() {
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
    { title: "Counter App", desc: "Foundational study in React Hooks and Event Handling.", link: "/counter", external: false }
  ];

  // UI/UX DESIGN PROJECTS
  const uxProjects = [
    {
      title: "FLORA - Custom Floral App",
      desc: "End-to-end UX case study for a floral subscription service. Includes persona research, wireframing, and high-fidelity prototyping.",
      link: "/case-studies/flora",
      tags: ["Figma", "UX Research", "Prototyping", "User Flow"],
      image: "/assets/flora/cover.png" // Ensure this matches your file name exactly
    }
  ];

  return (
    <motion.div className="projects-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      <header className="projects-hero">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>Technical Portfolio</motion.h1>
        <div className="subtitle-pill">
          A showcase of my work in <strong>Data Strategy</strong>, <strong>Web Development</strong>, and <strong>UI/UX Design</strong>.
        </div>
      </header>

      {/* --- TAB NAVIGATION --- */}
      <div className="tabs-container">
        <button className={`tab-btn ${activeTab === "data" ? "active" : ""}`} onClick={() => setActiveTab("data")}>
          <FaChartLine /> Data Strategy
        </button>
        <button className={`tab-btn ${activeTab === "web" ? "active" : ""}`} onClick={() => setActiveTab("web")}>
          <FaLaptopCode /> Web Dev
        </button>
        <button className={`tab-btn ${activeTab === "uiux" ? "active" : ""}`} onClick={() => setActiveTab("uiux")}>
          <FaPalette /> UI/UX Design
        </button>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="projects-content">
        <AnimatePresence mode="wait">
          
          {/* DATA TAB */}
          {activeTab === "data" && (
            <motion.div key="data" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
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
                    <div className="mini-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <Link className="project-btn full-width" to={project.link}>View Case Study <FaArrowRight /></Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* WEB TAB */}
          {activeTab === "web" && (
            <motion.div key="web" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
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
                      <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">Live Access <FaExternalLinkAlt /></a>
                    ) : (
                      <Link className="project-btn" to={project.link}>View App <FaExternalLinkAlt /></Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* UI/UX TAB (FIXED IMAGE SCALING) */}
          {activeTab === "uiux" && (
            <motion.div key="uiux" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="section-header-simple">
                <h2>User Experience Design</h2>
                <p>Prototyping, Wireframing, and High-Fidelity UI Design.</p>
              </div>

              <div className="projects-grid case-study-grid">
                {uxProjects.map((project, index) => (
                  <div key={index} className="project-card case-card">
                    
                    {/* --- FIXED IMAGE SECTION --- */}
                    {project.image && (
                      <div style={{ 
                        height: '250px',   /* Keeps consistent height */
                        overflow: 'hidden', 
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        border: '1px solid #eee',
                        backgroundColor: '#f9f9f9', /* Nice background for empty space */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          style={{ 
                            maxWidth: '100%', 
                            maxHeight: '100%', 
                            objectFit: 'contain', /* <--- THIS PREVENTS CROPPING */
                            display: 'block' 
                          }} 
                        />
                      </div>
                    )}
                    {/* --------------------------- */}

                    <div className="card-header">
                      <FaPalette className="project-icon icon-gold" />
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.desc}</p>
                    <div className="mini-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <Link className="project-btn full-width" to={project.link}>View Case Study <FaArrowRight /></Link>
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