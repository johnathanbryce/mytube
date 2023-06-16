import React, { useRef, useEffect } from 'react';
import styles from './YoutubePlaylistContainer.module.css'
// external libraries
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'

interface YoutubeMyPlaylistContainerProps{
    children: any
}

function YoutubePlayListContainer({children}: YoutubeMyPlaylistContainerProps) {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  let animationFrameId: number | null = null;
  let scrollAmount: number = 20; // Adjust the scrolling speed as desired

  const handleMouseDownScrollLeft = () => {
    scrollAmount = -Math.abs(scrollAmount); // Make sure scroll amount is negative for left scrolling
    animationFrameId = requestAnimationFrame(scrollContainer);
  };

  const handleMouseDownScrollRight = () => {
    scrollAmount = Math.abs(scrollAmount); // Make sure scroll amount is positive for right scrolling
    animationFrameId = requestAnimationFrame(scrollContainer);
  };

  const handleMouseUp = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const scrollContainer = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft += scrollAmount;
      animationFrameId = requestAnimationFrame(scrollContainer);
    }
  };

  return (
    <section className={styles.yt_playlist_container}>
      <div
        onMouseDown={handleMouseDownScrollLeft}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <MdOutlineArrowBackIosNew className={styles.icon} />
      </div>
      <div className={styles.overflow_content_container} ref={scrollableContainerRef}>
        {children}
      </div>
      <div
        onMouseDown={handleMouseDownScrollRight}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <MdOutlineArrowForwardIos className={styles.icon} />
      </div>
    </section>
  );
}

export default YoutubePlayListContainer