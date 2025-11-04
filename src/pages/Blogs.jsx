import React from "react";
import { motion } from "framer-motion";
import "./Blogs.css";

export default function Blogs() {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 80 }}     
      animate={{ opacity: 1, y: 0 }}      
      exit={{ opacity: 0, y: -80 }}       
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="blogs-page">
        <header className="blogs-header">
          <h1>My Projects & Case Studies</h1>
          <p>
            Here are detailed overviews of my projects — covering goals, tools,
            technologies, and key learning experiences.
          </p>
        </header>

        <div className="blogs-container">
          <div className="blog-card">
            <h2>🌦 Weather App</h2>
            <p>
              A React-based weather application that fetches real-time weather data
              using the OpenWeather API. It allows users to search any city and view
              temperature, humidity, and weather conditions with a clean, responsive UI.
            </p>
            <ul>
              <li><strong>Technologies:</strong> React, CSS, OpenWeather API</li>
              <li><strong>Features:</strong> City search, live API data, error handling</li>
              <li><strong>Learning:</strong> API integration and state management in React</li>
            </ul>
          </div>

          <div className="blog-card">
            <h2>🧮 Calculator App</h2>
            <p>
              A simple React calculator designed for performing basic arithmetic
              operations. Focused on UI clarity and component-based logic.
            </p>
            <ul>
              <li><strong>Technologies:</strong> React, CSS</li>
              <li><strong>Features:</strong> Add, subtract, multiply, divide, clear</li>
              <li><strong>Learning:</strong> React state updates and input validation</li>
            </ul>
          </div>

          <div className="blog-card">
            <h2>📝 To-Do App</h2>
            <p>
              A React task manager for adding, editing, and deleting daily tasks.
              Designed to demonstrate CRUD operations and component reusability.
            </p>
            <ul>
              <li><strong>Technologies:</strong> React, CSS</li>
              <li><strong>Features:</strong> Add, edit, delete, and complete tasks</li>
              <li><strong>Learning:</strong> Handling local state and user input</li>
            </ul>
          </div>

          <div className="blog-card">
            <h2>🛍 E-Commerce Layout</h2>
            <p>
              A front-end e-commerce website layout built with HTML and CSS. It features
              a responsive grid system for product display and a clean, modern design.
            </p>
            <ul>
              <li><strong>Technologies:</strong> HTML, CSS</li>
              <li><strong>Features:</strong> Responsive design, product grid</li>
              <li><strong>Learning:</strong> Advanced CSS layout techniques</li>
            </ul>
          </div>

          <div className="blog-card">
            <h2>💻 Portfolio Website</h2>
            <p>
              My personal portfolio built using React. It showcases my projects, skills,
              and contact details, focusing on elegant UI and smooth navigation.
            </p>
            <ul>
              <li><strong>Technologies:</strong> React, React Router, CSS</li>
              <li><strong>Features:</strong> Multi-page layout, responsive design</li>
              <li><strong>Learning:</strong> Routing, layout design, code optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
