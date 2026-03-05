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
  const [activeTab, setActiveTab] = useState("web");

  /* ---------------- DATA PROJECTS ---------------- */
  const caseStudies = [
    {
      title: "Strategic Customer Segmentation",
      desc: "Used RFM analysis with SQL and R to identify high-value customers and reduce churn risk.",
      link: "/case-studies/customer-segmentation",
      tags: ["SQL", "R", "Business Intelligence"]
    },
    {
      title: "Bellabeat Consumer Analysis",
      desc: "Analyzed smart-device usage patterns to generate data-backed product recommendations.",
      link: "/case-studies/bellabeat",
      tags: ["R", "Tableau", "Data Visualization"]
    }
  ];

  /* ---------------- FRONTEND PROJECTS ---------------- */
  const webProjects = [
    // 🔥 LATEST & MOST ADVANCED PROJECT AT #1
    {
      title: "Website Auditor Pro",
      desc: "Full-stack enterprise application. Integrates a React frontend with a Python/Flask REST API to fetch live Google PageSpeed metrics and generate automated UX/UI PDF reports.",
      link: "https://website-auditor-pro.vercel.app", 
      external: true,
      tags: ["React", "Python/Flask", "REST API", "Full-Stack"]
    },
    {
      title: "Koffiracha E-Commerce",
      desc: "High-performance, neo-brutalist landing page featuring complex scroll physics, parallax animations, and fluid typography.",
      link: "https://spicy-sauce.vercel.app", 
      external: true
    },
    {
      title: "Student Data Portal",
      desc: "Product-style data entry system with persistent state using LocalStorage.",
      link: "https://student-data-portal.vercel.app/",
      external: true
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather dashboard using OpenWeather API and async data handling.",
      link: "/weather",
      external: false
    },
    {
      title: "E-commerce Interface",
      desc: "Responsive frontend layout optimized for usability and SEO best practices.",
      link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
      external: true
    },
    {
      title: "Task Manager",
      desc: "CRUD-based productivity app focusing on clean state management.",
      link: "/todo",
      external: false
    },
    {
      title: "React Calculator",
      desc: "Logic-heavy component demonstrating controlled inputs and state updates.",
      link: "/calculator",
      external: false
    },
    {
      title: "Simple Counter",
      desc: "Interactive counter application demonstrating React state management and event handling.",
      link: "/counter",
      external: false
    }
  ];

  /* ---------------- UX PROJECTS ---------------- */
  const uxProjects = [
    {
      title: "FLORA – Custom Floral App",
      desc: "End-to-end UX case study covering research, user flows, wireframes, and high-fidelity UI.",
      link: "/case-studies/flora",
      tags: ["Figma", "UX Research", "Prototyping", "User Flows"],
      image: "https://placehold.co/600x400/png?text=Flora+App+Preview"
    }
  ];

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="background-grid"></div>

      {/* ---------------- HERO ---------------- */}
      <header className="projects-hero">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>
          Technical Portfolio
        </motion.h1>
        <div className="subtitle-pill">
          Product-focused frontend work supported by <strong>data insights</strong> and
          <strong> user-centered design</strong>.
        </div>
      </header>

      {/* ---------------- TABS ---------------- */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === "web" ? "active" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          <FaLaptopCode /> Product Engineering
        </button>

        <button
          className={`tab-btn ${activeTab === "data" ? "active" : ""}`}
          onClick={() => setActiveTab("data")}
        >
          <FaChartLine /> Data-Informed Decisions
        </button>

        <button
          className={`tab-btn ${activeTab === "uiux" ? "active" : ""}`}
          onClick={() => setActiveTab("uiux")}
        >
          <FaPalette /> UX & Interface Design
        </button>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="projects-content">
        <AnimatePresence mode="wait">

          {/* FRONTEND */}
          {activeTab === "web" && (
            <motion.div
              key="web"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="section-header-simple">
                <h2>Product-Focused Frontend Development</h2>
                <p>Building scalable, usable interfaces with React and modern web practices.</p>
              </div>

              <div className="projects-grid">
                {webProjects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="card-header">
                      <FaCode className="project-icon" />
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.desc}</p>
                    
                    {/* 🔥 ADDED: Tech Stack Tags for Frontend Projects! */}
                    {project.tags && (
                      <div className="mini-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}

                    {project.external ? (
                      <a
                        className="project-btn"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <Link className="project-btn" to={project.link}>
                        View Project <FaExternalLinkAlt />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* DATA */}
          {activeTab === "data" && (
            <motion.div
              key="data"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="section-header-simple">
                <h2>Data-Informed Product Thinking</h2>
                <p>Using analytics to support better business and design decisions.</p>
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
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link className="project-btn full-width" to={project.link}>
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* UX */}
          {activeTab === "uiux" && (
            <motion.div
              key="uiux"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="section-header-simple">
                <h2>UX & Interface Design</h2>
                <p>Designing intuitive, research-driven user experiences.</p>
              </div>

              <div className="projects-grid case-study-grid">
                {uxProjects.map((project, index) => (
                  <div key={index} className="project-card case-card">
                    <div className="image-wrapper" style={{ width: '100%', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>

                    <div className="card-header" style={{ marginTop: '1rem' }}>
                      <FaPalette className="project-icon icon-gold" />
                      <h3>{project.title}</h3>
                    </div>

                    <p>{project.desc}</p>
                    <div className="mini-tags">
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <Link className="project-btn full-width" to={project.link}>
                      View Case Study <FaArrowRight />
                    </Link>
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