import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaExternalLinkAlt, FaGoogle, FaAward, FaGraduationCap, 
  FaPython, FaCode, FaLightbulb, FaDatabase 
} from "react-icons/fa";
import "./Portfolio.css";

// --- ASSET IMPORTS ---
import googleDataImg from "../assets/google-data-analytics.jpg";
import googleAIImg from "../assets/google-ai.png";
import googlePromptingImg from "../assets/google-prompting-essential.jpg";
import googleUxImg from "../assets/google-ux-design.png";
import buildUiImg from "../assets/build-user-interfaces.png";
import jobImg from "../assets/job.png";
import pythonImg from "../assets/python.png";

export default function Portfolio() {
  
  // --- 1. PROJECTS DATA ---
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Built from scratch using React.js and Framer Motion.",
      link: "/",
      external: false,
    },
    {
      title: "Student Data Portal",
      desc: "Professional data entry system with LocalStorage persistence.",
      link: "https://student-data-portal.vercel.app/",
      external: true, 
    },
    {
      title: "Weather Dashboard",
      desc: "Fetches live climate data via OpenWeather API.",
      link: "/weather",
      external: false,
    },
    {
      title: "E-commerce Interface",
      desc: "Responsive HTML/CSS layout deployed on Vercel.",
      link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
      external: true, 
    },
    {
      title: "Task Manager (To-Do)",
      desc: "CRUD application using Local Storage for data persistence.",
      link: "/todo",
      external: false,
    },
    {
      title: "React Calculator",
      desc: "A logic-heavy component focused on state updates.",
      link: "/calculator",
      external: false,
    },
    {
      title: "Counter App", 
      desc: "Foundational study in React Hooks and Event Handling.",
      link: "/counter",
      external: false,
    },
  ];

  // --- 2. EDUCATION DATA ---
  const education = [
    {
      degree: "Bachelor of Business & IT (Hons)",
      school: "IBIT, University of the Punjab",
      year: "2024 - 2028 (Expected)",
      grade: "CGPA: 3.24 / 4.00",
      desc: "Specializing in Data Analytics and Web Engineering.",
    },
    {
      degree: "FSc Pre-Medical",
      school: "Superior College",
      year: "2023 - 2024",
      grade: "Grade: A+",
      desc: "Built a strong foundation in Biology and Physics before pivoting to Technology.",
    }
  ];

  // --- 3. CERTIFICATIONS DATA ---
  const certifications = [
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      link: "https://coursera.org/share/d5c7f9f8f625f3b52f7dbeb4e6f87eb8",
      image: googleDataImg 
    },
    {
      title: "Google UX Design Professional",
      issuer: "Google",
      link: "https://coursera.org/share/d053f0b8c2c230b110384f1f99553ca2",
      image: googleUxImg 
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      link: "https://coursera.org/share/5d42467ab815c9af43c5c54cdc1bf6c6",
      image: pythonImg 
    },
    {
      title: "Accelerate Your Job Search with AI",
      issuer: "Google",
      link: "https://coursera.org/share/d011f3a9deb54dd086f3edcbd31903a0",
      image: jobImg 
    },
    {
      title: "Build Dynamic User Interfaces",
      issuer: "Google",
      link: "https://coursera.org/share/4036bd241efcb80dd2bcb0ea0a296f52",
      image: buildUiImg 
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      link: "https://coursera.org/share/9f83e6b2b64e99377b2cbd6f63c5b3c3",
      image: googleAIImg 
    },
    {
      title: "Generative AI: Prompt Engineering",
      issuer: "Google", 
      link: "https://coursera.org/share/c6a6ca2fc3c6ee4436171078b0262af2",
      image: googlePromptingImg 
    },
    {
      title: "Frontend Web Development",
      issuer: "Bano Qabil 4.0",
      link: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vI2YvXy8Z8YjC6Z8U8x7e2Q6vI2YvXy8Z8YjC6Z8U8x7e2Q&s"
    }
  ];

  return (
    <motion.div className="portfolio-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      {/* HEADER: Updated to be simple and specific */}
      <div className="portfolio-header">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>Projects & Professional Skills</motion.h1>
      </div>

      {/* --- SECTION 1: SKILLS BENTO GRID --- */}
      <section className="skills-section">
        <div className="section-title-area">
          <h2>Core Competencies</h2>
        </div>
        
        <div className="skills-bento-grid">
          <div className="skill-card main-skill">
            <FaPython className="skill-icon" />
            <h3>Data & Python</h3>
            <p>Basic Python, R Programming, SQL Querying, Excel and Tableau.</p>
          </div>
          
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Web Development</h3>
            <p>React.js, JavaScript, HTML5/CSS.</p>
          </div>

          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>Academic Foundation</h3>
            <p>C, C++, Java, Digital Logic Design, Accounting & Economics.</p>
          </div>

          <div className="skill-card">
            <FaLightbulb className="skill-icon" />
            <h3>Soft Skills</h3>
            <p>Professional Communication, Problem Solving, and Adaptability.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: EDUCATION HISTORY --- */}
      <section className="education-section">
        <div className="section-title-area">
          <h2>Education History</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              className="education-card"
              key={index}
              whileHover={{ y: -5 }}
            >
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

      {/* --- SECTION 3: CERTIFICATIONS --- */}
      <section className="cert-section">
        <div className="section-title-area">
          <h2>Professional Certifications</h2>
        </div>

        <div className="cert-list">
          {certifications.map((cert, index) => (
            <motion.div className="cert-badge-card" key={index} whileHover={{ x: 5 }}>
              
              {/* Image Container */}
              <a href={cert.image} target="_blank" rel="noreferrer" className="cert-img-wrapper">
                 <img src={cert.image} alt={cert.title} />
              </a>
              
              <div className="cert-content">
                <div className="cert-meta">
                  {cert.issuer.includes("Google") ? <FaGoogle /> : <FaAward />}
                  <span>{cert.issuer}</span>
                </div>
                <h4>{cert.title}</h4>
                 {/* Link Logic */}
                 {cert.link !== "#" ? (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-verify-link">
                      Verify Credential <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="cert-verified">Verified</span>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: PROJECTS GRID --- */}
      <section className="projects-section">
        <div className="section-title-area">
          <h2>Selected Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {project.external ? (
                <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">Live Access</a>
              ) : (
                <Link className="project-btn" to={project.link}>Detailed View</Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}