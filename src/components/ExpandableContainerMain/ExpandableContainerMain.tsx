'use client'
import styles from './ExpandableContainerMain.module.css'
import { useState } from 'react'
// internal components
import HorizontalLineBreak from '@/components/HorizontalLineBreak/HorizontalLineBreak'
// external libraries
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

interface ExpandableContainerMainProps {
    title: string,
    children: any
}

function ExpandableContainerMain({title, children}: ExpandableContainerMainProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () =>{
    setIsExpanded((prev) => !prev)
  }
  return (
    <div className={styles.expandable_container_main}>
        <div onClick={toggleExpand}>
            <div className={styles.content_flex_wrapper}>
                <h2> {title}</h2>
                {isExpanded ? 
                    <div > <AiOutlineMinus className={styles.toggle_icon}/> </div> :
                    <div > <AiOutlinePlus className={styles.toggle_icon}/> </div>
                }
            </div>
        </div>
        
        { isExpanded &&
            <>
                {children}
            </>
        }

    </div>
  )
}

export default ExpandableContainerMain