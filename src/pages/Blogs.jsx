import React from "react";
import { motion } from "framer-motion";
import { 
  FaCloudSun, 
  FaCalculator, 
  FaCheckSquare, 
  FaShoppingBag, 
  FaLaptopCode, 
  FaSortNumericDown,
  FaUserGraduate,
  FaChartLine,
  FaPalette,   // For UI/UX
  FaChartPie,  // For Segmentation
  FaFire       // New for Spicy Koffiracha Project
} from "react-icons/fa";
import "./Blogs.css";

export default function Blogs() {
  
  const caseStudies = [
    // --- NEW PROJECT: KOFFIRACHA E-COMMERCE (AT THE TOP) ---
    {
      id: 11,
      title: "Koffiracha E-Commerce",
      icon: <FaFire />,
      desc: "A high-performance, neo-brutalist landing page featuring complex scroll physics, parallax animations, and fluid typography. Built to showcase advanced frontend capabilities.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      learning: "Mastering complex scroll animations, React component architecture, and modern neo-brutalist UI design principles."
    },
    // --- FLORA UI/UX ---
    {
      id: 10,
      title: "FLORA - UI/UX Case Study",
      icon: <FaPalette />,
      desc: "An end-to-end UX design project for a custom floral subscription service. I conducted user research to create personas, designed low-fidelity wireframes, and built a high-fidelity interactive prototype in Figma.",
      tech: ["Figma", "User Research", "Prototyping", "Wireframing"],
      learning: "User-Centered Design (UCD) principles, visual hierarchy, and creating interactive mockups."
    },
    // --- CUSTOMER SEGMENTATION ---
    {
      id: 9,
      title: "Strategic Customer Segmentation",
      icon: <FaChartPie />,
      desc: "Executed an RFM (Recency, Frequency, Monetary) analysis using SQL and R to segment a customer base. The goal was to identify VIP customers and 'at-risk' users to optimize marketing ROI.",
      tech: ["SQL", "R Programming", "K-Means Clustering", "Data Viz"],
      learning: "Business intelligence strategy, statistical clustering, and actionable data storytelling."
    },
    // --- EXISTING PROJECTS ---
    {
      id: 8,
      title: "Bellabeat Case Study",
      icon: <FaChartLine />,
      desc: "A Google Data Analytics Capstone project analyzing smart device usage trends. I utilized the complete data analysis lifecycle (Ask, Prepare, Process, Analyze, Share, Act) to provide data-driven marketing recommendations.",
      tech: ["R Programming", "Tableau", "Tidyverse", "Kaggle"],
      learning: "Data cleaning in R, visualization, and strategic business intelligence."
    },
    {
      id: 7,
      title: "Student Data Portal",
      icon: <FaUserGraduate />, 
      desc: "A professional data entry system with persistent storage. It features real-time validation to ensure data quality and a mobile-responsive layout.",
      tech: ["JavaScript", "LocalStorage", "CSS"],
      learning: "Mastering data integrity and persistent web storage."
    },
    {
      id: 1,
      title: "Weather App",
      icon: <FaCloudSun />,
      desc: "A React-based weather application that fetches real-time weather data using the OpenWeather API. It allows users to search any city and view temperature, humidity, and weather conditions with a clean, responsive UI.",
      tech: ["React", "CSS", "OpenWeather API"],
      learning: "API integration and state management in React"
    },
    {
      id: 6,
      title: "Portfolio Website",
      icon: <FaLaptopCode />,
      desc: "My personal portfolio built using React. It showcases my projects, skills, and contact details, focusing on elegant UI and smooth navigation.",
      tech: ["React", "Framer Motion", "React Router"],
      learning: "Routing, layout design, code optimization"
    },
    {
      id: 5,
      title: "E-Commerce Layout",
      icon: <FaShoppingBag />,
      desc: "A front-end e-commerce website layout built with HTML and CSS. It features a responsive grid system for product display and a clean, modern design.",
      tech: ["HTML", "CSS"],
      learning: "Advanced CSS layout techniques"
    },
    {
      id: 3,
      title: "To-Do App",
      icon: <FaCheckSquare />,
      desc: "A React task manager for adding, editing, and deleting daily tasks. Designed to demonstrate CRUD operations and component reusability.",
      tech: ["React", "CSS", "Local Storage"],
      learning: "Handling local state and user input"
    },
    {
      id: 2,
      title: "Calculator App",
      icon: <FaCalculator />,
      desc: "A simple React calculator designed for performing basic arithmetic operations. Focused on UI clarity and component-based logic.",
      tech: ["React", "CSS"],
      learning: "React state updates and input validation"
    },
    {
      id: 4,
      title: "Counter App",
      icon: <FaSortNumericDown />,
      desc: "My first study in React State Management. It allows users to increment, decrement, and reset a counter, demonstrating the fundamentals of the useState hook.",
      tech: ["React", "CSS", "Hooks (useState)"],
      learning: "Basics of State Management and Event Handling"
    }
  ];

  return (
    <motion.div
      className="blogs-page"
      initial={{ opacity: 0, y: 80 }}    
      animate={{ opacity: 1, y: 0 }}      
      exit={{ opacity: 0, y: -80 }}       
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="blogs-header">
        <h1>My Projects & Case Studies</h1>
        <p>
          Detailed overviews covering goals, tools,
          technologies, and key learning experiences.
        </p>
      </header>

      <div className="blogs-grid">
        {caseStudies.map((study, index) => (
          <motion.div 
            className="blog-card"
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="card-icon-header">
              {study.icon}
            </div>
            
            <h2>{study.title}</h2>
            <p className="card-desc">{study.desc}</p>
            
            <div className="card-section">
              <strong>Technologies:</strong>
              <div className="tech-tags">
                {study.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="card-section">
              <strong>Key Learning:</strong>
              <p className="learning-text">{study.learning}</p>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}