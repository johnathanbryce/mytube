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


export default function Home() {
  const maxResults = 10;
  //TODO: move to an external list
  const codingURLS = [
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC29ju8bIPH5as8OGnQzwJyA&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFbNIlppjAuEX4znoulh0Cw&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UClb90NQQcskPUGDIXsQEz5Q&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJZv4d5rbIKd4QHMPkcABCw&maxResults=${maxResults}&order=date&type=video`
  ];

  // TODO: titles are likely located inside the URLS API so likely can take from there directly in child components 
  const codingTitles = [
    'Web Dev Simplified',
    'Kevin Powell',
    'Traversy Media',
    'Developed By Ed'
  ]

  const entertainmentURLS =[
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_AFyA9FqrZ57bb9QRH77wg&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCR1D15p_vdP3HkrH8wgjQRw&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqFMzb-4AUf6WAIbl132QKA&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDoJIpPvtEwFvfNXsZvCqKw&maxResults=${maxResults}&order=date&type=video`
  ]

  // TODO: titles are likely located inside the URLS API so likely can take from there directly in child components 
  const entertainmentTitles = [
    'Internet Historian', 
    'Zander Budnick', 
    'The Hockey Guy', 
    'NHL' 
  ]



  const [playlistData, setPlaylistData] = useState<{ codingData: any[]; entertainmentData: any[] }>({ codingData: [], entertainmentData: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [channelTitles, setChannelTitles] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const codingData = await fetchYoutubePlaylistData({ urls: codingURLS });
        const entertainmentData = await fetchYoutubePlaylistData({ urls: entertainmentURLS }); 
        setPlaylistData({ codingData: codingData.data, entertainmentData: entertainmentData.data });
        setChannelTitles([...codingData.data])
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
            <YoutubeCoding playlistData={playlistData.codingData} titles={codingTitles} error={error}/>
          </ExpandableContainerMain>
          <ExpandableContainerMain title="Entertainment">
            <YoutubeEntertainment playlistData={playlistData.entertainmentData} titles={entertainmentTitles} error={error} />
          </ExpandableContainerMain>
        </>
      )}

    </main>
  )
}
