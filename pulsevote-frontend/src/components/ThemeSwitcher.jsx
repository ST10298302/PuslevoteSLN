import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = [
    { name: 'light', label: 'Light' },
    { name: 'dark', label: 'Dark' },
    { name: 'cupcake', label: 'Cupcake' },
    { name: 'bumblebee', label: 'Bumblebee' },
    { name: 'emerald', label: 'Emerald' },
    { name: 'corporate', label: 'Corporate' },
    { name: 'synthwave', label: 'Synthwave' },
    { name: 'retro', label: 'Retro' },
    { name: 'cyberpunk', label: 'Cyberpunk' },
    { name: 'valentine', label: 'Valentine' },
    { name: 'halloween', label: 'Halloween' },
    { name: 'garden', label: 'Garden' },
    { name: 'forest', label: 'Forest' },
    { name: 'aqua', label: 'Aqua' },
    { name: 'lofi', label: 'Lofi' },
    { name: 'pastel', label: 'Pastel' },
    { name: 'fantasy', label: 'Fantasy' },
    { name: 'wireframe', label: 'Wireframe' },
    { name: 'black', label: 'Black' },
    { name: 'luxury', label: 'Luxury' },
    { name: 'dracula', label: 'Dracula' },
    { name: 'cmyk', label: 'CMYK' },
    { name: 'autumn', label: 'Autumn' },
    { name: 'business', label: 'Business' },
    { name: 'acid', label: 'Acid' },
    { name: 'lemonade', label: 'Lemonade' },
    { name: 'night', label: 'Night' },
    { name: 'coffee', label: 'Coffee' },
    { name: 'winter', label: 'Winter' }
  ];

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg max-h-96 overflow-y-auto"
      >
        <li className="menu-title">
          <span>Choose Theme</span>
        </li>
        {themes.map((theme) => (
          <li key={theme.name}>
            <button
              onClick={() => handleThemeChange(theme.name)}
              className={`flex items-center justify-between ${
                currentTheme === theme.name ? 'active' : ''
              }`}
            >
              <span>{theme.label}</span>
              {currentTheme === theme.name && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
