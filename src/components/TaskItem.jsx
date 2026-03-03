import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>      
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="text">{task.text}</span>
      </label>
      <button className="delete" onClick={() => onDelete(task.id)}>
        ×
      </button>
    </li>
  );
}
