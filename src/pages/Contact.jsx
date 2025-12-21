import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa"; // Switched to react-icons for consistency
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
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <form onSubmit={handleFormSubmission} className="contact-form">
          {/* Name Input */}
          <div className="input-group">
            <div className="icon-wrapper">
              <FaUser />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Your Name"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <div className="icon-wrapper">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className="input-group textarea-group">
            <textarea
              name="message"
              value={formData.message}
              placeholder="How can I help you?"
              rows={5}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`contact-btn ${success === "submitted" ? "btn-success" : ""}`}
            disabled={success === "loading" || success === "submitted"}
          >
            {success === "loading" ? (
              "Sending..."
            ) : success === "submitted" ? (
              <>
                Message Sent <FaCheckCircle style={{ marginLeft: "8px" }} />
              </>
            ) : (
              <>
                Send Message <FaPaperPlane style={{ marginLeft: "8px" }} />
              </>
            )}
          </motion.button>

          {error && <p className="error-text">{error}</p>}
        </form>
      </motion.div>
    </div>
  );
}