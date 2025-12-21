import React, { useState } from "react";
import "./Calculator.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaEraser } from "react-icons/fa";

export default function Calculator() {
  const [input, setInput] = useState("");

  const appendValue = (val) => setInput(input + val);
  const clearInput = () => setInput("");

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // Button layout configuration
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <div className="calculator-container">
      <motion.div
        className="calculator-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h1 className="calculator-title">Standard Calculator</h1>
        <p className="calculator-desc">
          Mathematical logic using React State.
        </p>

        {/* Screen */}
        <input
          className="calculator-screen"
          type="text"
          value={input}
          placeholder="0"
          readOnly
        />

        {/* Grid of Buttons */}
        <div className="calculator-grid">
          {/* Clear Button (Full Width) */}
          <button className="calc-btn calc-btn-clear" onClick={clearInput}>
            <FaEraser /> Clear Display
          </button>

          {/* Number & Operator Buttons */}
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn === "=" ? calculate : () => appendValue(btn)}
              className={`calc-btn ${
                btn === "="
                  ? "calc-btn-equal"
                  : ["/", "*", "-", "+"].includes(btn)
                  ? "calc-btn-operator"
                  : "calc-btn-num"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Back Link */}
        <Link to="/portfolio" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>
    </div>
  );
}