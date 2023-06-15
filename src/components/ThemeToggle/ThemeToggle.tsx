'use client'
import { useState } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
// internal assets
import Moon from '../../../public/Moon.svg'
import Sun from '../../../public/Sun.svg'

const setDarkMode = () =>{
    console.log('toggle')
    document.querySelector("body")?.setAttribute("data-theme", 'dark')
  }
  
  const setLightMode = () =>{
    console.log('toggle')
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
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
           {/*      <Image src={Moon} alt='a moon'/>
                <Image src={Sun} alt='a moon'/> */}
            </label>
        </div>
    );
};

export default ThemeToggle;
