import React, { useState } from "react";
import "./Counter.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaRedo, FaMinus, FaPlus } from "react-icons/fa";

const Counter = () => {
  // The React Hook that tracks the number
  const [count, setCount] = useState(0);

  // Logic functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <motion.div 
        className="counter-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h1 className="counter-title">React Counter</h1>
        <p className="counter-desc">
          A demonstration of <strong>useState</strong> hook logic.
        </p>

        {/* The Big Number Display */}
        <div className="number-display">
          <span className={count < 0 ? "negative" : "positive"}>
            {count}
          </span>
        </div>

        {/* Control Buttons */}
        <div className="button-group">
          <button onClick={decrement} className="btn-control dec">
            <FaMinus />
          </button>
          
          <button onClick={reset} className="btn-control reset">
            <FaRedo />
          </button>

          <button onClick={increment} className="btn-control inc">
            <FaPlus />
          </button>
        </div>

        {/* Navigation Back */}
        <Link to="/portfolio" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>
    </div>
  );
};

export default Counter;