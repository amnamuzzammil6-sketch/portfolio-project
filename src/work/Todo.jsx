import React, { useState } from "react";
import "./Todo.css";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if(task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="page-wrapper page-dark">
      <div className="page-container">
        <div className="todo-container">
          <h1>To-Do List</h1>
          <div className="todo-input">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Add a task" />
            <button onClick={addTask}>Add</button>
          </div>
          <ul className="todo-list">
            {tasks.length === 0 ? <li className="no-task">No tasks added</li> :
              tasks.map((t,i) => (
                <li key={i} className="todo-item">
                  {t} <button className="delete-btn" onClick={()=>deleteTask(i)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
