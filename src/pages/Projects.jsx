import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChartLine, FaArrowRight, FaLaptopCode,
  FaPalette, FaChevronLeft, FaChevronRight,
  FaThLarge, FaArrowLeft,
} from "react-icons/fa";
import "./Projects.css";

/* ═══════════════════════════════════════
   NOTE: Replace every `image` URL below
   with your real screenshot URL once you
   have it. The placeholder URL format is:
   https://placehold.co/{W}x{H}/{bg}/{text-color}/png?text={Label}
   bg = 101929 (navy card bg), text = 0ea5e9 (sky accent)
═══════════════════════════════════════ */

const webProjects = [
  {
    title: "Website Auditor Pro",
    desc: "Full-stack enterprise app — React + Python/Flask REST API pulling live Google PageSpeed metrics and generating automated UX/UI PDF reports.",
    link: "https://website-auditor-pro.vercel.app",
    external: true,
    // swap this src for your real screenshot
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Website+Auditor+Pro",
  },
  {
    title: "Koffiracha E-Commerce",
    desc: "High-performance neo-brutalist landing page with complex scroll physics, parallax animations, and fluid typography.",
    link: "https://spicy-sauce.vercel.app",
    external: true,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Koffiracha+E-Commerce",
  },
  {
    title: "Student Data Portal",
    desc: "Product-style data-entry system with persistent state via LocalStorage.",
    link: "https://student-data-portal.vercel.app/",
    external: true,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Student+Data+Portal",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather dashboard built on the OpenWeather API with async data handling.",
    link: "/weather",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Weather+Dashboard",
  },
  {
    title: "E-commerce Interface",
    desc: "Responsive frontend layout optimised for usability and SEO best practices.",
    link: "https://e-commerce-website-lemon-iota-85.vercel.app/",
    external: true,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=E-commerce+Interface",
  },
  {
    title: "Task Manager",
    desc: "CRUD productivity app focused on clean, predictable state management.",
    link: "/todo",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Task+Manager",
  },
  {
    title: "React Calculator",
    desc: "Logic-heavy component showcasing controlled inputs and complex state updates.",
    link: "/calculator",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=React+Calculator",
  },
  {
    title: "Simple Counter",
    desc: "Interactive counter demonstrating React state management and event handling.",
    link: "/counter",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Simple+Counter",
  },
];

const caseStudies = [
  {
    title: "Strategic Customer Segmentation",
    desc: "RFM analysis using SQL & R to pinpoint high-value customers and reduce churn risk.",
    link: "/case-studies/customer-segmentation",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Customer+Segmentation",
  },
  {
    title: "Bellabeat Consumer Analysis",
    desc: "Smart-device usage patterns analysed to produce data-backed product recommendations.",
    link: "/case-studies/bellabeat",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Bellabeat+Analysis",
  },
];

const uxProjects = [
  {
    title: "FLORA – Custom Floral App",
    desc: "End-to-end UX case study: research, user flows, wireframes, and high-fidelity UI.",
    link: "/case-studies/flora",
    external: false,
    image: "https://placehold.co/520x310/101929/0ea5e9/png?text=Flora+App",
  },
];

const TAB_DATA = { web: webProjects, data: caseStudies, uiux: uxProjects };
const TABS = [
  { id: "web",  label: "Product Engineering",     icon: <FaLaptopCode /> },
  { id: "data", label: "Data-Informed Decisions",  icon: <FaChartLine  /> },
  { id: "uiux", label: "UX & Interface Design",    icon: <FaPalette    /> },
];

/* ─── single card (used in both carousel & grid) ─── */
function ProjectCard({ project, className = "project-card" }) {
  const link = project.external ? (
    <a className="text-link" href={project.link}
       target="_blank" rel="noopener noreferrer"
       onClick={e => e.stopPropagation()}>
      Live Demo <FaArrowRight />
    </a>
  ) : (
    <Link className="text-link" to={project.link}
          onClick={e => e.stopPropagation()}>
      Read More <FaArrowRight />
    </Link>
  );

  return (
    <div className={className}>
      <div className="image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="card-footer">{link}</div>
      </div>
    </div>
  );
}

/* ─── main component ─── */
export default function Projects() {
  const [activeTab, setActiveTab] = useState("web");
  const [showGrid,  setShowGrid]  = useState(false);
  const carouselRef = useRef(null);

  /* scroll one card-width at a time */
  const scroll = dir => {
    if (!carouselRef.current) return;
    const w = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--card-w") || "360"
    );
    carouselRef.current.scrollBy({ left: dir === "left" ? -(w + 20) : w + 20, behavior: "smooth" });
  };

  const handleTab = id => { setActiveTab(id); setShowGrid(false); };

  const projects = TAB_DATA[activeTab];
  const activeLabel = TABS.find(t => t.id === activeTab)?.label ?? "";

  return (
    <motion.div className="projects-page"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>

      <div className="background-grid" />

      {/* ── hero ── */}
      <header className="projects-hero">
        <motion.h1
          initial={{ y: -22, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          Explore My Case{" "}<span>Studies</span>
        </motion.h1>
      </header>

      {/* ── tabs ── */}
      <div className="tabs-container">
        {TABS.map(({ id, label, icon }) => (
          <motion.button key={id}
            className={`tab-btn ${activeTab === id ? "active" : ""}`}
            onClick={() => handleTab(id)}
            whileTap={{ scale: 0.95 }}>
            {icon} {label}
          </motion.button>
        ))}
      </div>

      {/* ── animated content ── */}
      <AnimatePresence mode="wait">

        {/* ════ CAROUSEL ════ */}
        {!showGrid && (
          <motion.div key={`c-${activeTab}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0  }}
            exit   ={{ opacity: 0, y:-16 }}
            transition={{ duration: 0.28 }}>

            <div className="carousel-wrapper">
              <button className="carousel-btn left"  onClick={() => scroll("left")}  aria-label="Previous">
                <FaChevronLeft />
              </button>

              <div className="tunnel-overlay left-overlay"  />
              <div className="tunnel-overlay right-overlay" />

              <div className="projects-carousel" ref={carouselRef}>
                {projects.map((p, i) => (
                  <ProjectCard key={i} project={p} className="project-card" />
                ))}
              </div>

              <button className="carousel-btn right" onClick={() => scroll("right")} aria-label="Next">
                <FaChevronRight />
              </button>
            </div>

            {/* view all */}
            <div className="view-all-wrapper">
              <button className="view-all-btn" onClick={() => setShowGrid(true)}>
                <FaThLarge /> View All
              </button>
            </div>
          </motion.div>
        )}

        {/* ════ GRID ════ */}
        {showGrid && (
          <motion.div key={`g-${activeTab}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0  }}
            exit   ={{ opacity: 0, y:-16 }}
            transition={{ duration: 0.28 }}>

            <div className="grid-view">
              <div className="grid-header">
                <h2>{activeLabel} — <span>{projects.length} Projects</span></h2>
                <button className="back-btn" onClick={() => setShowGrid(false)}>
                  <FaArrowLeft /> Back to Featured
                </button>
              </div>

              <div className="projects-grid">
                {projects.map((p, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}>
                    <ProjectCard project={p} className="grid-card" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}
