'use client'
import styles from './PlaylistContainer.module.css'
import { useState } from 'react'

// internal components
import HorizontalLineBreak from '@/components/HorizontalLineBreak/HorizontalLineBreak'
// external libraries
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

interface PlaylistContainerProps {
    title: string,
    children: any
}

function PlaylistContainer({title, children}: PlaylistContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () =>{
    setIsExpanded((prev) => !prev)
  }
  return (
    <div className={styles.playlist_container}>
        <div>
            <div className={styles.content_flex_wrapper}>
                <h2> {title}</h2>
                {isExpanded ? 
                    <div onClick={toggleExpand}> <AiOutlineMinus className={styles.toggle_icon}/> </div> :
                    <div onClick={toggleExpand}> <AiOutlinePlus className={styles.toggle_icon}/> </div>
                }
            </div>
            <HorizontalLineBreak />
        </div>
        
        { isExpanded &&
            <>
                {children}
            </>
        }

    </div>
  )
}

export default PlaylistContainer