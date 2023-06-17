import React, { useState, useEffect } from 'react';
import './ThemeToggler.scss';
import ToggleButton from '../ToggleButton/ToggleButton';

const ThemeToggler = ({ className }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div id="theme" className={className}>
      <ToggleButton onClick={changeTheme} className="theme-btn">
        <i className={`fa-solid fa-${theme === 'light' ? 'sun' : 'moon'} fa-2x`}></i>
      </ToggleButton>
    </div>
  );
};

export default ThemeToggler;
