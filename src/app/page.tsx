'use client'
import { useState, useEffect } from 'react';
import styles from '../styles/page.module.css'
// internal pages
import YoutubeCoding from '@/components/Youtube/YTCoding/YTCoding';
import YoutubeEntertainment from '@/components/Youtube/YTEntertainment/YTEntertainment';
// internal components
import ExpandableContainerMain from "@/components/ExpandableContainerMain/ExpandableContainerMain"
import LoadingSpinner from '@/app/loading'
// custom hooks
import fetchYoutubePlaylistData from '@/utils/fetchYoutubePlaylistData';
// internal lists
import youtubeURLS from '@/lists/youtubeURLS';


export default function Home() {
  const [playlistData, setPlaylistData] = useState<{ codingData: any[]; entertainmentData: any[] }>({ codingData: [], entertainmentData: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const codingData = await fetchYoutubePlaylistData({ urls: youtubeURLS[0].urls });
        const entertainmentData = await fetchYoutubePlaylistData({ urls: youtubeURLS[1].urls }); 
        setPlaylistData({ codingData: codingData.data, entertainmentData: entertainmentData.data });
        setError(codingData.error)
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {error && <h5 className={styles.error_msg}> Unable to fetch Youtube API Data. Check your daily quota. </h5>}
      {loading ? ( 
        <LoadingSpinner />
      ) : (
        <>
          <ExpandableContainerMain title="Coding">
            <YoutubeCoding playlistData={playlistData.codingData} error={error}/>
          </ExpandableContainerMain>
          <ExpandableContainerMain title="Entertainment">
            <YoutubeEntertainment playlistData={playlistData.entertainmentData} error={error} />
          </ExpandableContainerMain>
        </>
      )}

    </main>
  )
}
