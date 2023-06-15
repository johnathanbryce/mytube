'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/page.module.css'
// internal pages
import Youtube from "./home/Youtube/Youtube"
// internal components
import ExpandableContainerMain from "@/components/ExpandableContainerMain/ExpandableContainerMain"

export default function Home() {


  return (
    <main className={styles.main}>

      <ExpandableContainerMain title="Videos">
        <Youtube />
      </ExpandableContainerMain>
      <ExpandableContainerMain title="Music">
        <Youtube />
      </ExpandableContainerMain>

    </main>
  )
}
