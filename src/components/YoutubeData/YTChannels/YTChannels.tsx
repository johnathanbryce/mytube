'use client'
import styles from './YTChannels.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
import YoutubePlayListContainer from '@/components/YoutubePlaylistContainer/YoutubePlayListContainer';

interface YoutubePlaylistProps {
  playlistData: any,
  loading: boolean,
  errorMessage: string
}

function YTChannels({playlistData, loading, errorMessage}: YoutubePlaylistProps) {

    if(loading){
      return <h3> Loading... </h3>
    }
    console.log(playlistData)
    return (
      <div>
        <h6 className={styles.error}>{errorMessage}</h6>
        <YoutubePlayListContainer>
          {playlistData.map((item: any) => (
                  <VideoCard key={item.id.videoId}>
                      <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
                        <img src={item.snippet.thumbnails.high.url} alt={''} className={styles.thumbnail} />
                      </a>
                      <h6>{item.snippet.title}</h6>
                      <p> {item.snippet.channelTitle}</p>
                  </VideoCard>
          ))}
      </YoutubePlayListContainer>
      </div>

    )
}

export default YTChannels