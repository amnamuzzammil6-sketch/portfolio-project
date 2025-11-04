import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("waiting");
  const [error, setError] = useState("");

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setSuccess("loading");

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
      })
      .catch((error) => setError(error.message));
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">I’d love to hear from you!</p>

      <form onSubmit={handleFormSubmission} className="contact-form">
        <div className="input-group">
          <User className="input-icon" />
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter Your Name"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <Mail className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <MessageSquare className="input-icon" />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Enter Your Message..."
            rows={5}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="contact-btn"
        >
          {success === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {success === "submitted" && (
          <p className="success-text">Your message was sent successfully!</p>
        )}
        {error && <p className="error-text">❌ {error}</p>}
      </form>
    </motion.div>
  );
}
