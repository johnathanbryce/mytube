'use client'
import { useState, useEffect } from 'react';
import styles from './YTChannels.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
// external libraries
import {IoIosRemoveCircleOutline} from 'react-icons/io'
// utils
import { getRemovedVideos, addRemovedVideo, clearRemovedVideos } from '@/utils/removedVideos';

interface YoutubePlaylistProps {
  playlistData: any,
  error: boolean
}

function YTChannels({playlistData, error}: YoutubePlaylistProps) {
  const [playlist, setPlaylist] = useState(playlistData);
  const [removingVideoId, setRemovingVideoId] = useState<string | null>(null);

  // Filter out removed videos on mount and when playlistData changes
  useEffect(() => {
    const removedIds = getRemovedVideos();
    const filtered = playlistData.filter((item: any) =>
      !removedIds.has(item.id.videoId)
    );
    setPlaylist(filtered);
  }, [playlistData]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const removeVideo = (videoId: string) => {
    // Set removing state for animation
    setRemovingVideoId(videoId);

    // Wait for animation to complete before removing
    setTimeout(() => {
      addRemovedVideo(videoId);
      const updatedPlaylist = playlist.filter((item: any) => item.id.videoId !== videoId);
      setPlaylist(updatedPlaylist);
      setRemovingVideoId(null);
    }, 300);
  };

  const handleRestoreAll = () => {
    clearRemovedVideos();
    setPlaylist(playlistData);
  };

  return (
    <div className={styles.playlist_container}>
        {playlist.length === 0 ? (
          <div className={styles.empty_state}>
            <p className={styles.empty_message}>No videos to display</p>
            <button onClick={handleRestoreAll} className={styles.restore_button}>
              Restore All Videos
            </button>
          </div>
        ) : (
          playlist.map((item: any) => (
            <div
              key={item.id.videoId}
              id={`video-${item.id.videoId}`}
              className={`${styles.video_item} ${removingVideoId === item.id.videoId ? styles.removing : ''}`}
            >
              <VideoCard>
                <button
                  onClick={() => removeVideo(item.id.videoId)}
                  className={styles.remove_button}
                  aria-label={`Remove ${item.snippet.title} from list`}
                  title="Remove video"
                >
                  <IoIosRemoveCircleOutline className={styles.remove_icon} />
                </button>
                <div className={styles.video_main_content}>
                  <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} className={styles.thumbnail} />
                  </a>
                  <h6 className={styles.title}>{item.snippet.title}</h6>
                </div>
                <p className={styles.date}>{formatDate(item.snippet.publishedAt)}</p>
              </VideoCard>
            </div>
          ))
        )}
    </div>
  )
}

export default YTChannels