'use client'
import { useState, useEffect } from 'react';
import styles from './Header.module.css'
// internal components
import ThemeToggle from '../ThemeToggle/ThemeToggle'
// utils
import { clearRemovedVideos, getRemovedVideos } from '@/utils/removedVideos'
// external libraries
import { MdRestore } from 'react-icons/md'

function Header() {
  const [hasRemovedVideos, setHasRemovedVideos] = useState(false);

  useEffect(() => {
    // Check if there are any removed videos
    const checkRemovedVideos = () => {
      const removedVideos = getRemovedVideos();
      setHasRemovedVideos(removedVideos.size > 0);
    };

    checkRemovedVideos();

    // Check periodically for changes (when user removes/restores videos)
    const interval = setInterval(checkRemovedVideos, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRestoreAll = () => {
    clearRemovedVideos();
    window.location.reload();
  };

  return (
    <header className={styles.header}>
        <h1> MyTube </h1>
        <div className={styles.header_controls}>
          {hasRemovedVideos && (
            <button
              onClick={handleRestoreAll}
              className={styles.restore_all_button}
              aria-label="Restore all removed videos"
              title="Restore all removed videos"
            >
              <MdRestore className={styles.restore_icon} />
              <span className={styles.restore_text}>Restore All</span>
            </button>
          )}
          <ThemeToggle />
        </div>
    </header>
  )
}

export default Header