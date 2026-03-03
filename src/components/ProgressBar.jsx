import React from 'react';

export default function ProgressBar({ completed, total }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
      <span className="progress-label">{percent}%</span>
    </div>
  );
}
