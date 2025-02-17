import React from 'react';
import useThemeStore from './store/themeStore';

function ThemeToggler() {
  const {theme,toggleTheme }=useThemeStore();

  return (
    <button onClick={toggleTheme}>Switch</button>
  );
}

export default ThemeToggler;
