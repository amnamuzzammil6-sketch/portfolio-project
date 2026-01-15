import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaChartBar, FaLightbulb, FaTools, FaKaggle, FaTable } from "react-icons/fa"; 
import "./Bellabeat.css";

export default function CaseStudies() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div className="case-study-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="background-grid"></div>

      {/* HERO SECTION */}
      <header className="case-hero">
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="case-badge">
          Google Data Analytics Capstone
        </motion.div>
        <h1>Bellabeat Consumer Analysis</h1>
        <div className="subtitle-pill">Unlocking insights from smart device usage data to drive <strong>marketing strategy</strong>.</div>
      </header>

      {/* 1. OVERVIEW SECTION */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="case-grid-intro">
          <div className="glass-card overview-card">
            <h3><FaLightbulb className="icon-gold" /> The Business Task</h3>
            <p>
              Bellabeat wants to analyze smart device usage data to gain insight into how consumers use non-Bellabeat smart devices. 
              The goal is to unlock new growth opportunities for their Bellabeat app and membership.
            </p>
          </div>
          <div className="glass-card tools-card">
            <h3><FaTools className="icon-blue" /> Tech Stack</h3>
            <div className="tool-tags">
              <span>R Programming</span>
              <span>Tableau</span>
              <span>Kaggle</span>
              <span>Tidyverse</span>
              <span>ggplot2</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. PROCESS STEPS */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Analysis Lifecycle</h2>
        </div>
        <div className="process-grid">
          <div className="glass-card process-step">
            <div className="step-number">01</div>
            <h4>Ask & Prepare</h4>
            <p>Defined business task and utilized public FitBit data from Kaggle (30 users) to identify daily habits.</p>
          </div>
          <div className="glass-card process-step">
            <div className="step-number">02</div>
            <h4>Process & Analyze</h4>
            <p>Cleaned data in R using Tidyverse. Found key correlations between total steps and sleep quality.</p>
          </div>
          <div className="glass-card process-step">
            <div className="step-number">03</div>
            <h4>Share & Act</h4>
            <p>Created visualizations in Tableau. Recommended a "Rest & Recovery" marketing campaign.</p>
          </div>
        </div>
      </motion.section>

      {/* 3. FINAL DELIVERABLES (RESOURCE HUB) */}
      <motion.section className="case-container" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass-card result-card">
          <div className="result-content">
            <h3><FaChartBar className="icon-cyan" /> Project Resources</h3>
            <p>Explore the full analysis, code, and interactive dashboards using the links below:</p>
            
            <div className="resource-buttons">
              {/* GITHUB LINK */}
              <a 
                href="https://github.com/amnamuzzammil6-sketch/Bellabeat_Case_Study_Portfolio" 
                target="_blank" rel="noreferrer" className="resource-btn github"
              >
                <FaGithub /> View R Code (GitHub)
              </a>

              {/* KAGGLE LINK (Inserted) */}
              <a 
                href="https://www.kaggle.com/code/amnamuzzammil/bellabeat-case-study-final" 
                target="_blank" rel="noreferrer" className="resource-btn kaggle"
              >
                <FaKaggle /> View Notebook (Kaggle)
              </a>

              {/* TABLEAU LINK (Inserted) */}
              <a 
                href="https://public.tableau.com/views/BellabeatAnalysis_17684187104730/BellabeatCaseStudyActivityAnalysis?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" 
                target="_blank" rel="noreferrer" className="resource-btn tableau"
              >
                <FaTable /> Interactive Dashboard (Tableau)
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}