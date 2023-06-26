'use client'
import { useState } from 'react'
import styles from './ThemeToggle.module.css'

const setDarkMode = () =>{
    document.querySelector("body")?.setAttribute("data-theme", 'dark')
  }
  
  const setLightMode = () =>{
    document.querySelector("body")?.setAttribute("data-theme", 'light')
  }
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        setDarkMode();
      } else {
        setLightMode();
      }
    };

    return (
        <div className={styles.theme_toggle}>
            <input
                className={styles.theme_toggle_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className={styles.theme_toggle_label} htmlFor='darkmode-toggle'>

            </label>
        </div>
    );
};

export default ThemeToggle;
