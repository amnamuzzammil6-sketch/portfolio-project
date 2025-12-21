import React, { useState, useEffect } from "react";
import "./Todo.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTrash, FaCheck } from "react-icons/fa";

export default function ToDo() {
  // Load initial tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [task, setTask] = useState("");

  // Save to Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="todo-page">
      <motion.div 
        className="todo-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="todo-title">Task Manager</h1>
        <p className="todo-desc">
          Persistent list using <strong>Local Storage</strong>.
        </p>

        {/* Input Area */}
        <div className="todo-input-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()} // Allow Enter key
            placeholder="What needs to be done?"
          />
          <button onClick={addTask} aria-label="Add Task">
            <FaPlus />
          </button>
        </div>

        {/* Task List */}
        <ul className="todo-list">
          <AnimatePresence>
            {tasks.length === 0 ? (
              <motion.li 
                className="no-task"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
              >
                No tasks yet. Add one above!
              </motion.li>
            ) : (
              tasks.map((t, i) => (
                <motion.li
                  key={i}
                  className={`todo-item ${t.completed ? "completed" : ""}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  layout
                >
                  <span onClick={() => toggleComplete(i)} className="task-text">
                    {t.completed && <FaCheck className="check-icon" />}
                    {t.text}
                  </span>
                  
                  <button 
                    className="delete-btn" 
                    onClick={() => deleteTask(i)}
                    aria-label="Delete Task"
                  >
                    <FaTrash />
                  </button>
                </motion.li>
              ))
            )}
          </AnimatePresence>
        </ul>

        {/* Navigation Back */}
        <Link to="/portfolio" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>
    </div>
  );
}