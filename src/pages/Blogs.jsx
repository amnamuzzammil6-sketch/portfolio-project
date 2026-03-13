import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Added for internal routing
import { 
  FaCloudSun, 
  FaCalculator, 
  FaCheckSquare, 
  FaShoppingBag, 
  FaLaptopCode, 
  FaSortNumericDown,
  FaUserGraduate,
  FaChartLine,
  FaPalette,   
  FaChartPie,  
  FaFire,      
  FaSearch,
  FaExternalLinkAlt,
  FaArrowRight // <-- Added for internal link icons
} from "react-icons/fa";
import "./Blogs.css";

export default function Blogs() {
  
  const caseStudies = [
    {
      id: 12,
      category: "Full-Stack / SEO",
      title: "Website Auditor Pro",
      icon: <FaSearch />,
      desc: "A full-stack React and Python application designed to perform deep UX/UI, SEO, and performance audits. Integrates with the Google PageSpeed Insights API to generate actionable, real-time PDF reports.",
      tech: ["React.js", "Python/Flask", "REST APIs", "Vercel"],
      learning: "Architecting a full-stack REST API, managing Cross-Origin Resource Sharing (CORS), and deploying serverless applications.",
      link: "https://website-auditor-pro.vercel.app", // Added Link
      external: true // Flag for external vs internal
    },
    {
      id: 11,
      category: "Frontend Engineering",
      title: "Koffiracha E-Commerce",
      icon: <FaFire />,
      desc: "A high-performance, neo-brutalist landing page featuring complex scroll physics, parallax animations, and fluid typography. Built to showcase advanced frontend capabilities.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      learning: "Mastering complex scroll animations, React component architecture, and modern neo-brutalist UI design principles.",
      link: "https://spicy-sauce.vercel.app",
      external: true
    },
    {
      id: 10,
      category: "UI/UX Design",
      title: "FLORA - UI/UX Case Study",
      icon: <FaPalette />,
      desc: "An end-to-end UX design project for a custom floral subscription service. I conducted user research to create personas, designed low-fidelity wireframes, and built a high-fidelity interactive prototype in Figma.",
      tech: ["Figma", "User Research", "Prototyping", "Wireframing"],
      learning: "User-Centered Design (UCD) principles, visual hierarchy, and creating interactive mockups.",
      link: "/case-studies/flora",
      external: false
    },
    {
      id: 9,
      category: "Data Analytics",
      title: "Strategic Customer Segmentation",
      icon: <FaChartPie />,
      desc: "Executed an RFM (Recency, Frequency, Monetary) analysis using SQL and R to segment a customer base. The goal was to identify VIP customers and 'at-risk' users to optimize marketing ROI.",
      tech: ["SQL", "R Programming", "K-Means Clustering", "Data Viz"],
      learning: "Business intelligence strategy, statistical clustering, and actionable data storytelling.",
      link: "/case-studies/customer-segmentation",
      external: false
    },
    {
      id: 8,
      category: "Data Analytics",
      title: "Bellabeat Case Study",
      icon: <FaChartLine />,
      desc: "A Google Data Analytics Capstone project analyzing smart device usage trends. I utilized the complete data analysis lifecycle to provide data-driven marketing recommendations.",
      tech: ["R Programming", "Tableau", "Tidyverse", "Kaggle"],
      learning: "Data cleaning in R, visualization, and strategic business intelligence.",
      link: "/case-studies/bellabeat",
      external: false
    },
    {
      id: 7,
      category: "JavaScript / Storage",
      title: "Student Data Portal",
      icon: <FaUserGraduate />, 
      desc: "A professional data entry system with persistent storage. It features real-time validation to ensure data quality and a mobile-responsive layout.",
      tech: ["JavaScript", "LocalStorage", "CSS"],
      learning: "Mastering data integrity and persistent web storage.",
      link: "https://student-data-portal.vercel.app/",
      external: true
    },
    {
      id: 1,
      category: "React / API",
      title: "Weather App",
      icon: <FaCloudSun />,
      desc: "A React-based weather application that fetches real-time weather data using the OpenWeather API. It allows users to search any city and view temperature, humidity, and weather conditions.",
      tech: ["React", "CSS", "OpenWeather API"],
      learning: "API integration and state management in React",
      link: "/weather",
      external: false
    },
    {
      id: 6,
      category: "React / Framer Motion",
      title: "Portfolio Website",
      icon: <FaLaptopCode />,
      desc: "My personal portfolio built using React. It showcases my projects, skills, and contact details, focusing on elegant UI and smooth navigation.",
      tech: ["React", "Framer Motion", "React Router"],
      learning: "Routing, layout design, code optimization",
      link: "/",
      external: false
    },
    {
      id: 5,
      category: "HTML / CSS",
      title: "E-Commerce Layout",
      icon: <FaShoppingBag />,
      desc: "A front-end e-commerce website layout built with HTML and CSS. It features a responsive grid system for product display and a clean, modern design.",
      tech: ["HTML", "CSS"],
      learning: "Advanced CSS layout techniques",
      link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
      external: true
    },
    {
      id: 3,
      category: "React / Local Storage",
      title: "To-Do App",
      icon: <FaCheckSquare />,
      desc: "A React task manager for adding, editing, and deleting daily tasks. Designed to demonstrate CRUD operations and component reusability.",
      tech: ["React", "CSS", "Local Storage"],
      learning: "Handling local state and user input",
      link: "/todo",
      external: false
    },
    {
      id: 2,
      category: "React Logic",
      title: "Calculator App",
      icon: <FaCalculator />,
      desc: "A simple React calculator designed for performing basic arithmetic operations. Focused on UI clarity and component-based logic.",
      tech: ["React", "CSS"],
      learning: "React state updates and input validation",
      link: "/calculator",
      external: false
    },
    {
      id: 4,
      category: "React Basics",
      title: "Counter App",
      icon: <FaSortNumericDown />,
      desc: "My first study in React State Management. It allows users to increment, decrement, and reset a counter, demonstrating the fundamentals of the useState hook.",
      tech: ["React", "CSS", "Hooks (useState)"],
      learning: "Basics of State Management and Event Handling",
      link: "/counter",
      external: false
    }
  ];

  return (
    <motion.div
      className="blogs-page"
      initial={{ opacity: 0 }}    
      animate={{ opacity: 1 }}      
      exit={{ opacity: 0 }}       
      transition={{ duration: 0.6 }}
    >
      <header className="blogs-header">
        <h1>My Experience & Projects</h1>
        <p>A timeline of my technical projects, case studies, and continuous learning journey.</p>
        <div className="header-underline"></div>
      </header>

      <div className="timeline-container">
        {/* The central vertical line */}
        <div className="timeline-line"></div>

        {caseStudies.map((study, index) => {
          // Determine if the card should be on the left or right
          const isLeft = index % 2 === 0;

          return (
            <motion.div 
              className={`timeline-item ${isLeft ? "left" : "right"}`}
              key={study.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* The glowing dot on the line */}
              <div className="timeline-dot"></div>

              {/* The actual project card */}
              <div className="timeline-card">
                <div className="card-top-row">
                  <span className="timeline-category">{study.category}</span>
                  <span className="card-icon">{study.icon}</span>
                </div>
                
                <h2>{study.title}</h2>
                <p className="timeline-desc">{study.desc}</p>
                
                <div className="timeline-tech">
                  {study.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="timeline-learning">
                  <strong>Key Learning:</strong> {study.learning}
                </div>

                <div className="card-link-container">
                  {/* Dynamic Linking Logic */}
                  {study.external ? (
                    <a 
                      href={study.link} 
                      className="card-external-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Live Project <FaExternalLinkAlt style={{ marginLeft: "5px", fontSize: "0.8rem" }} />
                    </a>
                  ) : (
                    <Link to={study.link} className="card-external-link">
                      View Project <FaArrowRight style={{ marginLeft: "5px", fontSize: "0.8rem" }} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}