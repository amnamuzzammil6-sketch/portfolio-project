import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaChartBar, FaLightbulb, FaTools, FaDatabase, FaLayerGroup } from "react-icons/fa"; 
// reusing the same CSS for consistent branding
import "./Bellabeat.css"; 
// Import your chart image (Ensure RFM_Chart.png is in src/assets)
import rfmChart from "../../assets/RFM_Chart.png"; 

export default function CustomerSegmentation() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div className="case-study-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      {/* --- HERO SECTION --- */}
      <header className="case-hero">
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="case-badge">
          SQL & R Business Analytics
        </motion.div>
        <h1>Strategic Customer Segmentation</h1>
        <div className="subtitle-pill">
          Using <strong>RFM Analysis</strong> to identify high-value customers and reduce churn for an online retailer.
        </div>
      </header>

      {/* --- 1. OVERVIEW SECTION --- */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="case-grid-intro">
          <div className="glass-card overview-card">
            <h3><FaLightbulb className="icon-gold" /> The Business Task</h3>
            <p>
              A UK-based retailer with 500,000+ transactions lacked visibility into their customer base. 
              The goal was to segment customers based on purchasing behavior to optimize marketing budget and improve retention.
            </p>
          </div>
          <div className="glass-card tools-card">
            <h3><FaTools className="icon-blue" /> Tech Stack</h3>
            <div className="tool-tags">
              <span>R (Tidyverse)</span>
              <span>SQL (Aggregation)</span>
              <span>RFM Modeling</span>
              <span>ggplot2</span>
              <span>Data Cleaning</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- 2. KEY VISUALIZATION (New Section for your Chart) --- */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
            <div className="accent-line"></div>
            <h2>Key Insight</h2>
        </div>
        <div className="glass-card result-card" style={{ textAlign: "center", padding: "2rem" }}>
            {/* Displaying the Chart */}
            <img 
              src={rfmChart} 
              alt="RFM Customer Segmentation Chart" 
              style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }} 
            />
            <p style={{ marginTop: "1.5rem", color: "#cbd5e1", maxWidth: "800px", marginInline: "auto" }}>
              <strong>The "Champions" Segment (Orange):</strong> This group represents only 15% of users but drives 40% of total revenue. 
              Identifying them allows for a targeted VIP loyalty program.
            </p>
        </div>
      </motion.section>

      {/* --- 3. ANALYSIS LIFECYCLE --- */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Process Workflow</h2>
        </div>
        <div className="process-grid">
          <div className="glass-card process-step">
            <div className="step-number">01</div>
            <h4>Data Cleaning</h4>
            <p>Processed 540k+ rows using R. Removed cancelled orders, handled missing Customer IDs, and parsed date formats.</p>
          </div>
          <div className="glass-card process-step">
            <div className="step-number">02</div>
            <h4>RFM Scoring</h4>
            <p>Calculated Recency, Frequency, and Monetary values for every customer. Scored them on a 1-5 scale.</p>
          </div>
          <div className="glass-card process-step">
            <div className="step-number">03</div>
            <h4>Strategy</h4>
            <p>Recommended a "Win-Back" email campaign for the "At Risk" segment and a Rewards Program for "Champions".</p>
          </div>
        </div>
      </motion.section>

      {/* --- 4. FINAL DELIVERABLES (RESOURCE HUB) --- */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass-card result-card">
          <div className="result-content">
            <h3><FaChartBar className="icon-cyan" /> Project Resources</h3>
            <p>Access the full codebase, SQL queries, and documentation below:</p>
            
            <div className="resource-buttons">
              {/* GITHUB LINK */}
              <a 
                href="https://github.com/amnamuzzammil6-sketch/Retail-Customer-Segmentation-Analysis" 
                target="_blank" rel="noreferrer" className="resource-btn github"
              >
                <FaGithub /> View Project on GitHub
              </a>

              {/* SQL FILE LINK (Just links to the repo file for professional look) */}
              <a 
                href="https://github.com/amnamuzzammil6-sketch/Retail-Customer-Segmentation-Analysis/blob/main/RFM_Query.sql" 
                target="_blank" rel="noreferrer" className="resource-btn tableau" // Reusing tableau class for styling
              >
                <FaDatabase /> View SQL Query
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}