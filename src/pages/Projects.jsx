import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Added icons for pro look
import "./Projects.css";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Built from scratch using React.js and Framer Motion.", link: "/", external: false },
    { title: "Student Data Portal", desc: "Professional data entry system with LocalStorage persistence.", link: "https://student-data-portal.vercel.app/", external: true },
    { title: "Weather Dashboard", desc: "Fetches live climate data via OpenWeather API.", link: "/weather", external: false },
    { title: "E-commerce Interface", desc: "Responsive HTML/CSS layout deployed on Vercel.", link: "https://e-commerce-website-lemon-iota-85.vercel.app/", external: true },
    { title: "Task Manager", desc: "CRUD application using Local Storage for data persistence.", link: "/todo", external: false },
    { title: "React Calculator", desc: "A logic-heavy component focused on state updates.", link: "/calculator", external: false },
    { title: "Counter App", desc: "Foundational study in React Hooks and Event Handling.", link: "/counter", external: false }
  ];

  return (
    <motion.div className="projects-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      <header className="projects-hero">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>Selected Projects</motion.h1>
        {/* UPDATED HEADING AS REQUESTED */}
        <div className="subtitle-pill">A showcase of my <strong>Web Development</strong> and <strong>React Engineering</strong> applications.</div>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
                Detailed View <FaExternalLinkAlt />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}