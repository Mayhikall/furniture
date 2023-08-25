import React, { useState, useEffect } from 'react';

const DarkLightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const mode = isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', mode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="btn btn-primary btn-sm rounded-4" onClick={toggleMode}>
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkLightToggle;
