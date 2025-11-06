import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-content">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="highlight">Amna Muzzammil</span>
        </motion.h1>

        <motion.h2
          className="home-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ReactTyped
            strings={[
              "IT Student | Future AI & Business IT Professional",
              "Building Modern Web Apps with React & CSS",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.h2>

        <motion.p
          className="home-about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I am an IT student at IBIT, University of the Punjab, pursuing
          technology with strong determination and professional growth. I am
          passionate about building modern web applications and continuously
          learning new technologies like React and JavaScript. My goal is to
          become a skilled IT professional and deliver impactful digital
          solutions that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/portfolio" className="home-btn">
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
