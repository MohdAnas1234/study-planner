import React from 'react';

export default function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
