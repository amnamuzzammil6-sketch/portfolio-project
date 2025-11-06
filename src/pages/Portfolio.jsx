import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React-based professional portfolio website.",
      link: "/portfolio",
      external: false,
    },
    {
      title: "Weather App",
      desc: "React app with live weather API integration.",
      link: "/weather",
      external: false,
    },
    {
      title: "Calculator",
      desc: "Basic functional calculator.",
      link: "/calculator",
      external: false,
    },
    {
      title: "To-Do App",
      desc: "Task manager with local storage.",
      link: "/todo",
      external: false,
    },
    {
      title: "E-commerce UI",
      desc: "Frontend shopping UI using HTML & CSS, deployed on Vercel.",
      link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
      external: true,
    },
  ];

  return (
    <motion.div
      className="portfolio-page"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <p className="portfolio-subtitle">
          A showcase of my technical skills and hands-on development work.
          <br />
          Below are some of the projects and tools I have worked with.
        </p>
      </div>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">
            <h3>Programming</h3>
            <p>C, C++, Java</p>
          </div>
          <div className="skill-box">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="skill-box">
            <h3>Tools</h3>
            <p>VS Code, GitHub, MsExcel, MsWord, MsPowerPoint</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {project.external ? (
                <a
                  className="project-btn"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Website
                </a>
              ) : (
                <Link className="project-btn" to={project.link}>
                  View Project
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
