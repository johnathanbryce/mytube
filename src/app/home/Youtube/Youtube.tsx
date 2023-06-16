'use client'
import styles from './Youtube.module.css'
import { useState, useEffect } from 'react'
// internal components
import YTChannels from '@/components/YoutubeData/YTChannels/YTChannels'
import ExpandableContainer from '@/components/ExpandableContainer/ExpandableContainer'
import SearchBar from '@/components/SearchBar/SearchBar'
import LoadingSpinner from '@/app/loading'
// custom function
import fetchYoutubePlaylistData from '@/utils/fetchYoutubePlaylistData'

function Youtube() {
  const [playlistData, setPlaylistData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Unable to fetch data from the YouTube API. Please check your daily quota limit.')
  /* const [maxResults, setMaxResults] = useState(50) */ // Number of videos to retrieve

  // UCJZv4d5rbIKd4QHMPkcABCw

  const YOUTUBE_CHANNELS = []
  const maxResults = 20;

  /* TODO: TRY THIS USEEFFECT OUT INSTEAD -- it checks if the data exists in localStorage first so it limits API calls

    useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the data is already cached
        const cachedData = localStorage.getItem('youtubePlaylistData');
        if (cachedData) {
          setPlaylistData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const urls = [
            // URLs for API requests
          ];
          const data = await fetchYoutubePlaylistData({ urls });
          setPlaylistData(data);
          setLoading(false);
  
          // Cache the fetched data
          localStorage.setItem('youtubePlaylistData', JSON.stringify(data));
        }
      } catch (err) {
        setError(true);
        setErrorMessage('Failed to load video data...');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC29ju8bIPH5as8OGnQzwJyA&maxResults=${maxResults}&order=date&type=video`,
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFbNIlppjAuEX4znoulh0Cw&maxResults=${maxResults}&order=date&type=video`,
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UClb90NQQcskPUGDIXsQEz5Q&maxResults=${maxResults}&order=date&type=video`,
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJZv4d5rbIKd4QHMPkcABCw&maxResults=${maxResults}&order=date&type=video`
        ];
        const data = await fetchYoutubePlaylistData({ urls }); // data = data returned from the custom function api call
        setPlaylistData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // uses empty array if playlistData[0] and [1] doesn't exist / hasn't loaded in yet
  const traversyMedia  = playlistData[0] ?? []; 
  const webDevSimplified = playlistData[1] ?? []; 
  const devByEd = playlistData[2] ?? []; 
  const kevinPowell = playlistData[3] ?? []; 

  // combines the playlistData url arrays into one array for the search bar 
  const mergedPlaylistData = [...traversyMedia, ...webDevSimplified, ...devByEd, ...kevinPowell];

  return (
    <section className={styles.youtube}>
      {error ? (
        <h4 className={styles.error}> Error: {errorMessage}</h4>
      ) : loading ? (
          <LoadingSpinner />  
      ) : (
        <>
          <SearchBar placeholder="Search videos..." data={mergedPlaylistData} />
          <ExpandableContainer title="Web Dev Simplified ">
            <YTChannels playlistData={webDevSimplified} loading={loading} errorMessage={errorMessage}  />
          </ExpandableContainer>
          <ExpandableContainer title="Kevin Powell ">
            <YTChannels playlistData={kevinPowell} loading={loading} errorMessage={errorMessage}  />
          </ExpandableContainer>
          <ExpandableContainer title="Traversy Media ">
            <YTChannels playlistData={traversyMedia} loading={loading} errorMessage={errorMessage} />
          </ExpandableContainer>
          <ExpandableContainer title="Developed By Ed ">
            <YTChannels playlistData={devByEd} loading={loading} errorMessage={errorMessage}  />
          </ExpandableContainer>
        </>
      )}
    </section>
  )
}

export default Youtube

