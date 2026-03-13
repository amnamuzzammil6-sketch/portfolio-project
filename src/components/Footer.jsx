import React from "react";
// Added FaInstagram to the import list
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa"; 
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-balanced">
      <div className="footer-content">
        
        {/* 1. The Call to Action */}
        <h3>Let's Connect</h3>
        <p>Open to opportunities in Data Analytics & Web Development.</p>

        {/* 2. Social Icons (Centered & Prominent) */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/amna-muzzammil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          
          <a href="https://github.com/amnamuzzammil6-sketch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          
          <a href="mailto:amnamuzzammil6@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>

          {/* New InsightaLabs Instagram Link */}
          <a href="https://www.instagram.com/insightalabs" target="_blank" rel="noopener noreferrer" aria-label="InsightaLabs Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* 3. The Copyright Line */}
        <div className="footer-bottom">
          <span>&copy; {currentYear} <strong>Amna Muzzammil</strong>. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;