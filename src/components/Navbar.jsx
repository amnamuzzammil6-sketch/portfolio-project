import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaBriefcase, 
  FaBlog, 
  FaEnvelope, 
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
      {/* Container limits width and handles Flex alignment */}
      <div className="navbar-container">
        
        {/* Corrected Logo: Full Name */}
<NavLink to="/" className="logo" onClick={closeMobileMenu}>
  Amna <span className="logo-highlight"> Muzzammil</span>
</NavLink>

        <div className="mobile-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")}
              onClick={closeMobileMenu}
            >
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")}
              onClick={closeMobileMenu}
            >
              <FaBriefcase className="nav-icon" /> Portfolio
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/blogs"
              className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")}
              onClick={closeMobileMenu}
            >
              <FaBlog className="nav-icon" /> Blogs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => "nav-links" + (isActive ? " active-link" : "")}
              onClick={closeMobileMenu}
            >
              <FaEnvelope className="nav-icon" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}