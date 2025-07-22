import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {
   
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      return 'dark';
    } else if (htmlElement.classList.contains('light')) {
      return 'light';
    }
    return localStorage.getItem('theme') || 'light'; // light is default...problem set a mode based on system preference too as an option
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const htmlElement = document.documentElement;
    
    htmlElement.classList.remove('dark', 'light');
    

    htmlElement.classList.add(theme);
    
    // set data-theme attribute for CSS variables, not needed currently
    htmlElement.setAttribute('data-theme', theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}