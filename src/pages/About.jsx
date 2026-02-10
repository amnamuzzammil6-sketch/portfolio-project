import React from "react";
import { motion } from "framer-motion";
import { 
  FaExternalLinkAlt, FaGoogle, FaAward, FaGraduationCap, 
  FaPython, FaCode, FaCogs 
} from "react-icons/fa";
import "./About.css";

// Asset Imports
import googleDataImg from "../assets/google-data-analytics.jpg";
import googleAIImg from "../assets/google-ai.png";
import googleUxImg from "../assets/google-ux-design.png";
import pythonImg from "../assets/python.png";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const education = [
    {
      degree: "Bachelor of Business & IT (Hons)",
      school: "IBIT, University of the Punjab",
      year: "2024 - 2028 (Expected)",
      grade: "CGPA: 3.32 / 4.00",
      desc: "Specializing in Information Technology with focus on Data Analytics and Web Engineering."
    },
    {
      degree: "FSc Pre-Medical",
      school: "Superior College",
      year: "2021 - 2023",
      grade: "Grade: A+",
      desc: "Developed strong analytical and problem-solving skills before switching to Information Technology."
    }
  ];

  // CHANGED: Reordered - Frontend Engineering is now FIRST
  const certifications = [
    {
      category: "Frontend Engineering",
      items: [
        { title: "Google UX Design Professional", issuer: "Google", link: "https://coursera.org/share/d053f0b8c2c230b110384f1f99553ca2", image: googleUxImg },
        { title: "Frontend Web Development", issuer: "Bano Qabil 4.0", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vI2YvXy8Z8YjC6Z8U8x7e2Q6vI2YvXy8Z8YjC6Z8U8x7e2Q&s" }
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        { title: "Google Data Analytics Professional", issuer: "Google", link: "https://coursera.org/share/d5c7f9f8f625f3b52f7dbeb4e6f87eb8", image: googleDataImg },
        { title: "Google AI Essentials", issuer: "Google", link: "https://coursera.org/share/9f83e6b2b64e99377b2cbd6f63c5b3c3", image: googleAIImg },
        { title: "Crash Course on Python", issuer: "Google", link: "https://coursera.org/share/5d42467ab815c9af43c5c54cdc1bf6c6", image: pythonImg }
      ]
    }
  ];

  return (
    <motion.div className="about-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      <header className="about-hero">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>About My Journey</motion.h1>
        <div className="subtitle-pill">Bridging <strong>Business Intelligence</strong> and <strong>Information Technology</strong></div>
      </header>

      {/* BIO SECTION */}
      <motion.section className="about-section-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass-card bio-card">
          <p>
            I am <strong>Amna Muzzammil</strong>, a Merit Scholar at the <strong>Institute of Business & Information Technology, University of the Punjab</strong>.
            I began my academic journey with <strong>FSc Pre-Medical</strong>, which helped me develop strong analytical and problem-solving skills.
          </p>
          <p style={{ marginTop: '15px' }}>
            Currently, I am learning <strong>Information Technology</strong>, focusing on <strong>Data Analytics, Web Development, and UI/UX Design</strong>.
            I enjoy building projects with <strong>React.js</strong> aiming to create practical, efficient, and user-friendly solutions.
          </p>
        </div>
      </motion.section>

      {/* COMPETENCIES SECTION - CHANGED: Web Development is now FIRST */}
      <motion.section className="about-section-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Core Competencies</h2>
        </div>
        <div className="competency-grid">
          
          {/* 1. Web Development (Moved to Top) */}
          <div className="glass-card skill-box">
            <FaCode className="card-icon" />
            <h3>Web Development</h3>
            <div className="skill-badges">
              <span>React.js</span><span>JavaScript</span><span>UI/UX</span><span>HTML/CSS</span>
            </div>
          </div>

          {/* 2. Data Analytics */}
          <div className="glass-card skill-box">
            <FaPython className="card-icon" />
            <h3>Data Analytics</h3>
            <div className="skill-badges">
              <span>Python</span><span>SQL</span><span>Tableau</span><span>Excel</span>
            </div>
          </div>

          {/* 3. IT Foundations */}
          <div className="glass-card skill-box">
            <FaCogs className="card-icon" />
            <h3>IT Foundations</h3>
            <div className="skill-badges">
              <span>C++</span><span>C programming</span><span>DLD</span><span>Economics</span>
            </div>
          </div>

        </div>
      </motion.section>

      {/* EDUCATION SECTION */}
      <motion.section className="about-section-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Education History</h2>
        </div>
        <div className="education-column">
          {education.map((edu, index) => (
            <div className="glass-card edu-row" key={index}>
              <div className="edu-icon"><FaGraduationCap /></div>
              <div className="edu-text">
                <div className="edu-header">
                  <h3>{edu.degree}</h3>
                  <span className="badge-year">{edu.year}</span>
                </div>
                <p className="school-highlight">{edu.school} &bull; <strong>{edu.grade}</strong></p>
                <p className="muted-text">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS SECTION - CHANGED: Frontend Engineering will render first */}
      <motion.section className="about-section-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Selected Certifications</h2>
        </div>
        <p className="muted-text" style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          Industry-recognized credentials that directly support my project work.
        </p>

        <div className="cert-categories-wrapper">
          {certifications.map((group, groupIndex) => (
            <div key={groupIndex} className="cert-group" style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.4rem', borderLeft: '3px solid #FFD700', paddingLeft: '10px' }}>
                {group.category}
              </h3>
              
              <div className="cert-dashboard">
                {group.items.map((cert, index) => (
                  <div className="glass-card cert-item" key={index}>
                    <div className="cert-thumb"><img src={cert.image} alt={cert.title} /></div>
                    <div className="cert-info">
                      <div className="issuer-tag">
                        {cert.issuer.includes("Google") ? <FaGoogle /> : <FaAward />} 
                        <span>{cert.issuer}</span>
                      </div>
                      <h4>{cert.title}</h4>
                      {cert.link !== "#" && (
                        <a href={cert.link} target="_blank" rel="noreferrer" className="verify-btn">
                          Verify Credential <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}