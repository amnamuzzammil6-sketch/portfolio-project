import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaCode, 
  FaChartBar, 
  FaUser, 
  FaEnvelope, 
  FaBlog, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO - Solid White */}
        <NavLink to="/" className="logo" onClick={closeMobileMenu}>
          Amna Muzzammil
        </NavLink>

        {/* MOBILE MENU ICON */}
        <div className="mobile-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVIGATION MENU */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaUser className="nav-icon" /> About
            </NavLink>
          </li>

          {/* IMPROVED: WEB DEV -> PROJECTS */}
          <li className="nav-item">
            <NavLink to="/portfolio" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaCode className="nav-icon" /> Projects
            </NavLink>
          </li>

          {/* IMPROVED: DATA ANALYTICS -> CASE STUDIES */}
          <li className="nav-item">
            <NavLink to="/case-studies/bellabeat" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaChartBar className="nav-icon" /> Case Studies
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/blogs" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaBlog className="nav-icon" /> Blogs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")} onClick={closeMobileMenu}>
              <FaEnvelope className="nav-icon" /> Contact
            </NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}