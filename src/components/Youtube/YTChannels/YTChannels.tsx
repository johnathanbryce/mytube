'use client'
import styles from './YTChannels.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
import YoutubePlayListContainer from '@/components/YoutubePlaylistContainer/YoutubePlayListContainer';

interface YoutubePlaylistProps {
  playlistData: any,
  error: boolean
}

function YTChannels({playlistData, error}: YoutubePlaylistProps) {
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

    return (
      <div>
        <YoutubePlayListContainer error={error}>
          {playlistData.map((item: any) => (
                  <VideoCard key={item.id.videoId}>
                    <div>
                      <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
                        <img src={item.snippet.thumbnails.high.url} alt={''} className={styles.thumbnail} />
                      </a>
                      <h6 className={styles.title}>{item.snippet.title}</h6>
                    </div>
                    <h6 className={styles.date} >{formatDate(item.snippet.publishedAt)}</h6>
                  </VideoCard>
          ))}
      </YoutubePlayListContainer>
      </div>

    )
}

export default YTChannels