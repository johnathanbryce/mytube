'use client'
import styles from './Youtube.module.css'
import { useState, useEffect } from 'react'
// internal components
import YoutubeMyPlaylist from '@/components/YoutubeData/YTMyPlaylist/YoutubeMyPlaylist'
import YoutubeReactHooks from '@/components/YoutubeData/YTReactHooks/YoutubeReactHooks'
import ExpandableContainer from '@/components/ExpandableContainer/ExpandableContainer'
import SearchBar from '@/components/SearchBar/SearchBar'
import LoadingSpinner from '@/app/loading'
// custom function
import fetchYoutubePlaylistData from '@/utils/fetchYoutubePlaylistData'

function Youtube() {
  const [playlistData, setPlaylistData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&maxResults=50',
          'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUqrztT-IDeNLSgZ381IABdEXV-MFf8AM&maxResults=50',
        ];
        const data = await fetchYoutubePlaylistData({ urls }); // data = data returned from the custom function api call
        setPlaylistData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setErrorMessage('Failed to load video data...')
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // uses empty array if playlistData[0] and [1] doesn't exist / hasn't loaded in yet
  const playlistData0 = playlistData[0] ?? []; 
  const playlistData1 = playlistData[1] ?? []; 

  // combines the playlistData url arrays into one array for the search bar 
  const mergedPlaylistData = [...playlistData0, ...playlistData1];

  return (
    <section className={styles.youtube}>
      {error ? (
        <h4 className={styles.error}> Error: {errorMessage}</h4>
      ) : loading ? (
          <LoadingSpinner />  
      ) : (
        <>
          <SearchBar placeholder="Search videos..." data={mergedPlaylistData} />
          <ExpandableContainer title="Coding ">
            <YoutubeMyPlaylist playlistData={playlistData1} loading={loading} />
          </ExpandableContainer>
          <ExpandableContainer title="React Hooks ">
            <YoutubeReactHooks playlistData={playlistData0} loading={loading} />
          </ExpandableContainer>
        </>
      )}
    </section>
  )
}

export default Youtube

