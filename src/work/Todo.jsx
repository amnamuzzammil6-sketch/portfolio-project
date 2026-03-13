import React, { useState, useEffect } from "react";
import "./Todo.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTrash, FaPen, FaRegCircle, FaCheckCircle, FaCheck } from "react-icons/fa";

export default function ToDo() {
  // Load initial tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");
  
  // Edit State
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

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
    if (editingIndex === index) setEditingIndex(null); // Close edit mode if deleted
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Edit Functions
  const startEditing = (index, currentText) => {
    setEditingIndex(index);
    setEditingText(currentText);
  };

  const saveEdit = (index) => {
    if (editingText.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[index].text = editingText;
      setTasks(newTasks);
    }
    setEditingIndex(null);
    setEditingText("");
  };

  // Filter Logic
  const filteredTasks = tasks.filter(t => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="todo-page">
      <motion.div 
        className="todo-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="todo-title">To Do App</h1>
        
        {/* Progress Section */}
        <div className="progress-section">
          <p className="progress-text">You're Crushing It!</p>
          <div className="progress-circle">
            {completedCount} / {tasks.length}
          </div>
        </div>

        {/* Input Area */}
        <div className="todo-input-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Add New Task..."
          />
          <button onClick={addTask} aria-label="Add Task" className="add-btn">
            <FaPlus />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="todo-filters">
          {["All", "Active", "Completed"].map(f => (
            <button 
              key={f} 
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <ul className="todo-list">
          <AnimatePresence>
            {filteredTasks.length === 0 ? (
              <motion.li 
                className="no-task"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
              >
                No tasks found.
              </motion.li>
            ) : (
              filteredTasks.map((t, i) => {
                // Find original index for deleting/toggling correct item when filtered
                const originalIndex = tasks.findIndex(orig => orig === t);
                
                return (
                  <motion.li
                    key={originalIndex}
                    className={`todo-item ${t.completed ? "completed" : ""}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    layout
                  >
                    {/* Check if we are editing this specific task */}
                    {editingIndex === originalIndex ? (
                      <div className="edit-mode">
                        <input 
                          type="text" 
                          value={editingText} 
                          onChange={(e) => setEditingText(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && saveEdit(originalIndex)}
                          className="edit-input"
                          autoFocus
                        />
                        <button className="save-btn" onClick={() => saveEdit(originalIndex)}>
                          <FaCheck />
                        </button>
                      </div>
                    ) : (
                      <>
                        <span onClick={() => toggleComplete(originalIndex)} className="task-text">
                          {t.completed ? <FaCheckCircle className="check-icon" /> : <FaRegCircle className="check-icon uncheck-icon" />}
                          {t.text}
                        </span>
                        
                        <div className="action-buttons">
                          <button 
                            className="edit-btn" 
                            onClick={() => startEditing(originalIndex, t.text)}
                            aria-label="Edit Task"
                          >
                            <FaPen />
                          </button>
                          <button 
                            className="delete-btn" 
                            onClick={() => deleteTask(originalIndex)}
                            aria-label="Delete Task"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </>
                    )}
                  </motion.li>
                );
              })
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