import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

// export default useDarkMode;

// Exemple d'utilisation

import React from 'react';
import useDarkMode from './useDarkMode';

const MyComponent = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
      </button>
      <p>{isDarkMode ? 'Mode sombre activé' : 'Mode clair activé'}</p>
    </div>
  );
};

export default MyComponent;

