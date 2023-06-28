'use client'
import { useState } from 'react';
import styles from './YTChannels.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
// external libraries
import {IoIosRemoveCircleOutline} from 'react-icons/io'

interface YoutubePlaylistProps {
  playlistData: any,
  error: boolean
}

function YTChannels({playlistData, error}: YoutubePlaylistProps) {
  const [playlist, setPlaylist] = useState(playlistData);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  const removeVideo = (videoId: string) => {
    const updatedPlaylist = playlist.filter((item: any) => item.id.videoId !== videoId);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className={styles.playlist_container}>
        {playlist.map((item: any) => (
                <VideoCard key={item.id.videoId}>
                   <IoIosRemoveCircleOutline 
                   onClick={() => removeVideo(item.id.videoId)}
                   className={styles.remove_icon} /> 
                  <div className={styles.video_main_content}>
                    <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
                      <img src={item.snippet.thumbnails.high.url} alt={''} className={styles.thumbnail} />
                    </a>
                    <h6 className={styles.title}>{item.snippet.title}</h6>
                  </div>
                  <p className={styles.date} >{formatDate(item.snippet.publishedAt)}</p>
                </VideoCard>
        ))}
    </div>

  )
}

export default YTChannels