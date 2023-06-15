'use client'
import styles from './YoutubeReactHooks.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
import YoutubePlayListContainer from '@/components/YoutubePlaylistContainer/YoutubePlayListContainer';
import SearchBar from '@/components/SearchBar/SearchBar';
// custom hooks
import useFetchYoutubePlaylistData from '@/hooks/useFetchYoutubePlaylistData';

interface YoutubePlaylistProps {
  playlistData: any,
  loading: boolean
}

function YoutubeReactHooks({playlistData, loading}: YoutubePlaylistProps) {

    if(loading){
      return <h3> Loading... </h3>
    }

    return (
      <div>
        <YoutubePlayListContainer>
          {playlistData.map((item: any) => (
                  <VideoCard key={item.id}>
                      <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank">
                        <img src={item.snippet.thumbnails.standard.url} alt={''} className={styles.thumbnail} />
                      </a>
                      <h6>{item.snippet.title}</h6>
                      <p> {item.snippet.videoOwnerChannelTitle}</p>
                  </VideoCard>
          ))}
      </YoutubePlayListContainer>
      </div>

    )
}

export default YoutubeReactHooks