import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/amnamuzzammil6-sketch" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:amnamuzzammil6@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/call_me_amna_" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <p>© 2025 Amna Muzzammil — All Rights Reserved</p>
      </div>
    </footer>
  );
}
