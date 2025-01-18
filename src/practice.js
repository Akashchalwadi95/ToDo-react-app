import { useState } from "react";
import "./practice.css";  // Import the external CSS file

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleCompleted = (index) => {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <input
                className="input"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
            />
            <button className="button" onClick={addTask}>Add Task</button>

            <ul className="task-list">
                {tasks.map((t, index) => (
                    <li className="task-item" key={index}>
                        {/* Wrap task text in a rectangular box */}
                        <div 
                            className={`task-text-box ${t.completed ? "completed" : ""}`}
                            onClick={() => toggleCompleted(index)}
                        >
                            {t.text}
                        </div>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
