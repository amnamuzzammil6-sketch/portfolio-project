import React from "react";
import { motion } from "framer-motion";
import { 
  FaCloudSun, 
  FaCalculator, 
  FaCheckSquare, 
  FaShoppingBag, 
  FaLaptopCode, 
  FaSortNumericDown,
  FaUserGraduate 
} from "react-icons/fa";
import "./Blogs.css";

export default function Blogs() {
  
  const caseStudies = [
    {
      id: 1,
      title: "Weather App",
      icon: <FaCloudSun />,
      desc: "A React-based weather application that fetches real-time weather data using the OpenWeather API. It allows users to search any city and view temperature, humidity, and weather conditions with a clean, responsive UI.",
      tech: ["React", "CSS", "OpenWeather API"],
      learning: "API integration and state management in React"
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
      id: 3,
      title: "To-Do App",
      icon: <FaCheckSquare />,
      desc: "A React task manager for adding, editing, and deleting daily tasks. Designed to demonstrate CRUD operations and component reusability.",
      tech: ["React", "CSS", "Local Storage"],
      learning: "Handling local state and user input"
    },
    {
      id: 4,
      title: "Counter App",
      icon: <FaSortNumericDown />,
      desc: "My first study in React State Management. It allows users to increment, decrement, and reset a counter, demonstrating the fundamentals of the useState hook.",
      tech: ["React", "CSS", "Hooks (useState)"],
      learning: "Basics of State Management and Event Handling"
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
      id: 6,
      title: "Portfolio Website",
      icon: <FaLaptopCode />,
      desc: "My personal portfolio built using React. It showcases my projects, skills, and contact details, focusing on elegant UI and smooth navigation.",
      tech: ["React", "Framer Motion", "React Router"],
      learning: "Routing, layout design, code optimization"
    },
    {
      id: 7,
      title: "Student Data Portal",
      icon: <FaUserGraduate />, 
      desc: "A professional data entry system with persistent storage. It features real-time validation to ensure data quality and a mobile-responsive layout.",
      tech: ["JavaScript", "LocalStorage", "CSS"],
      learning: "Mastering data integrity and persistent web storage."
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