import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("waiting");
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Google Form Submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setSuccess("loading");

    // YOUR GOOGLE FORM LINK
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScxggsRf0dxF8CmARx2URIsZrjNyUdrRYcMpaRYxh4ZJJGoog/formResponse";

    const formBody = new FormData();
    formBody.append("entry.435400630", formData.username);
    formBody.append("entry.1925474386", formData.email);
    formBody.append("entry.201201959", formData.message);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    })
      .then(() => {
        setSuccess("submitted");
        setFormData({ username: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess("waiting"), 5000);
      })
      .catch((error) => {
        setError("Something went wrong. Please try again.");
        setSuccess("waiting");
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header-section">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="title-underline"></div>
      </div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Contact Information (All Clickable) */}
        <div className="contact-info-section">
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <h4>Email</h4>
              <a href="mailto:amnamuzzammil6@gmail.com">amnamuzzammil6@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaInstagram />
            </div>
            <div className="info-text">
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/insightalabs" target="_blank" rel="noopener noreferrer">@insightalabs</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <h4>Location</h4>
              <a href="https://maps.google.com/?q=Lahore,+Pakistan" target="_blank" rel="noopener noreferrer">Lahore, Pakistan</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaLinkedin />
            </div>
            <div className="info-text">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/amna-muzzammil" target="_blank" rel="noopener noreferrer">in/amna-muzzammil</a>
            </div>
          </div>

        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-section">
          <form onSubmit={handleFormSubmission} className="contact-form">
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                rows={5}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-btn ${success === "submitted" ? "btn-success" : ""}`}
              disabled={success === "loading" || success === "submitted"}
            >
              {success === "loading"
                ? "Sending..."
                : success === "submitted"
                ? "Message Sent!"
                : "Send Message"}
            </button>

            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </motion.div>
    </div>
  );
}