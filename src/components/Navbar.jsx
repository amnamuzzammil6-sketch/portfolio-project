import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">Amna Muzzammil</h1>
      </div>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBriefcase /> Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBlog /> Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}  