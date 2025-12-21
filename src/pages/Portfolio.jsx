import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGoogle, FaAward , FaGraduationCap} from "react-icons/fa";
import "./Portfolio.css";

// --- IMPORTS ---
// Ensure these match your actual filenames in 'src/assets'
import googleDataImg from "../assets/google-data-analytics.jpg";
import googleAIImg from "../assets/google-ai.png";
import googlePromptingImg from "../assets/google-prompting-essential.jpg";
//import banoQabilImg from "../assets/bano-qabil.jpg"; 

export default function Portfolio() {
  
  // 1. DATA: Your Projects
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Built from scratch using React.js and Framer Motion.",
      link: "/",
      external: false,
    },
    {
      title: "Weather Dashboard",
      desc: "Fetches live climate data via API.",
      link: "/weather",
      external: false,
    },
    {
      title: "E-commerce Interface",
      desc: "A pure HTML/CSS responsive layout deployed on Vercel.",
      link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
      external: true, 
    },
    {
      title: "Task Manager (To-Do)",
      desc: "Uses Local Storage to persist data.",
      link: "/todo",
      external: false,
    },
    {
      title: "React Calculator",
      desc: "A logic-heavy react component.",
      link: "/calculator",
      external: false,
    },
    {
      title: "Counter App", 
      desc: "My first study in React State Management.",
      link: "/counter",
      external: false,
    },
  ];
  const education = [
    {
      degree: "Bachelor of Business and Information Technology (Hons)",
      school: "IBIT, University of the Punjab",
      year: "2024 - 2028 (Expected)",
      grade: "CGPA: 3.24 / 4.00",
      desc: "Specializing in Data Analytics and Web Engineering.",
    },
    {
      degree: "FSc Pre-Medical", // <--- UPDATED
      school: "Superior College",
      year: "2023 - 2024",
      grade: "Grade: A+",
      desc: "Built a strong foundation in Biology and Physics before pivoting to Technology.", // <--- UPDATED STORY
    }
  ];

  // 2. DATA: Certifications
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      status: "Completed",
      desc: "Mastered data cleaning, analysis with R, SQL queries, and Tableau visualization.",
      link: "https://coursera.org/share/d5c7f9f8f625f3b52f7dbeb4e6f87eb8",
      image: googleDataImg // Clicking this image opens google-data.jpg
    },
    {
      title: "Frontend Web Development",
      issuer: "Bano Qabil 2.0",
      status: "Completed",
      desc: "Comprehensive training in HTML5, CSS3, JavaScript, and responsive web design.",
      link: "#", 
      //image: banoQabilImg // Clicking this image opens bano-qabil.jpg
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google / Coursera",
      status: "In Progress", 
      desc: "Currently mastering wireframing, prototyping in Figma, and user research.",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      image: "https://images.credly.com/size/340x340/images/116de714-256d-4763-952f-87d46b86584c/GCC_badge_UX_1000x1000.png" // Clicking this opens the Badge URL
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      status: "Completed",
      desc: "Foundational knowledge of Artificial Intelligence principles and ethics.",
      link: "https://coursera.org/share/9f83e6b2b64e99377b2cbd6f63c5b3c3",
      image: googleAIImg // Clicking this image opens google-ai.png
    },
    {
      title: "Generative AI: Prompt Engineering",
      issuer: "Coursera",
      status: "Completed",
      desc: "Advanced techniques for prompting LLMs to generate high-quality outputs.",
      link: "https://coursera.org/share/c6a6ca2fc3c6ee4436171078b0262af2",
      image: googlePromptingImg // Clicking this image opens google-prompting.jpg
    }
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
        <h1>My Work & Toolset</h1>
        <p className="portfolio-subtitle">
          I am building a skillset that covers the entire data lifecycle.
          <br />
          From <strong>querying databases with SQL</strong> and <strong>analyzing trends in R</strong>, 
          to building interactive interfaces with <strong>React.js</strong>.
        </p>
      </div>

      {/* SECTION 1: SKILLS */}
      <section className="skills-section">
        <h2>The Tech Stack</h2>
        <div className="skills-grid">
          <div className="skill-box">
            <h3>Data Analysis & Viz</h3>
            <p><strong>R Programming</strong>, <strong>Tableau</strong>, <strong>SQL</strong>, Google Data Analytics Certified</p>
          </div>
          <div className="skill-box">
            <h3>Web Engineering</h3>
            <p><strong>React.js</strong>, <strong>Google UX Design</strong>, JavaScript ES6, HTML5, CSS3</p>
          </div>
          <div className="skill-box">
            <h3>AI & Optimization</h3>
            <p><strong>Prompt Engineering</strong>, <strong>Google AI Essentials</strong>, Business Intelligence</p>
          </div>
          <div className="skill-box">
            <h3>University Coursework</h3>
            <p><strong>C / C++ / Java</strong>, <strong>Digital Logic Design</strong>, Accounting & Economics</p>
          </div>
        </div>
      </section>
      {/* 2. EDUCATION (Grid Layout) */}
      <section className="education-section">
        <h2>Education History</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              className="education-card"
              key={index}
              initial={{ opacity: 0, y: 20 }} // Changed to y axis animation to match others
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon on Top */}
              <div className="edu-icon-box">
                <FaGraduationCap />
              </div>

              <div className="edu-content">
                <div className="edu-top-row">
                  <span className="edu-year">{edu.year}</span>
                  {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                </div>
                <h3>{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-desc">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CERTIFICATIONS */}
      <section className="cert-section">
        <h2>Professional Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              className="cert-card"
              key={index}
              whileHover={{ scale: 1.02 }}
            >
              {/* --- MASTER IMAGE LINK --- */}
              {/* This 'a' tag wraps the image. href is set to {cert.image}. */}
              {/* This forces EVERY image to open in a new tab when clicked. */}
              <a href={cert.image} target="_blank" rel="noreferrer" className="cert-img-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-img" />
              </a>

              <div className="cert-content">
                <div className="cert-header">
                  {cert.issuer.includes("Google") ? <FaGoogle className="google-icon" /> : <FaAward className="google-icon" />}
                  <span>{cert.issuer}</span>

                  {/* "In Progress" Badge */}
                  {cert.status === "In Progress" && (
                    <span style={{ 
                      marginLeft: "auto", 
                      fontSize: "0.7rem", 
                      background: "#eab308", 
                      color: "#000", 
                      padding: "2px 8px", 
                      borderRadius: "10px", 
                      fontWeight: "bold" 
                    }}>
                      IN PROGRESS
                    </span>
                  )}
                </div>

                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
                
                {/* --- MASTER TEXT LINK --- */}
                {/* If In Progress -> Link to Curriculum. If Completed -> Link to Verify. */}
                {cert.status === "In Progress" ? (
                   <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link" style={{color: "#eab308"}}>
                     View Curriculum <FaExternalLinkAlt />
                   </a>
                ) : cert.link !== "#" ? (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                    Verify Credential <FaExternalLinkAlt />
                  </a>
                ) : (
                  <span className="cert-link" style={{ cursor: "default", opacity: 0.6 }}>
                    Credential Verified
                  </span>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section className="projects-section">
        <h2>Project Library</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {project.external ? (
                <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live Site
                </a>
              ) : (
                <Link className="project-btn" to={project.link}>View Project</Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}