'use client'
import styles from './YoutubeMyPlaylist.module.css'
// internal components
import VideoCard from '@/components/VideoCard/VideoCard';
import YoutubePlayListContainer from '@/components/YoutubePlaylistContainer/YoutubePlayListContainer';
// custom hooks
import useFetchYoutubePlaylistData from '@/hooks/useFetchYoutubePlaylistData';

function YoutubeMyPlaylist() {
  const url ='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUqrztT-IDeNLSgZ381IABdEXV-MFf8AM&&maxResults=50';
  const {playlistData, loading} = useFetchYoutubePlaylistData({url});

  if (loading) {
    return <h3> Loading ... </h3>
  }

  return (
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
  )
}

export default YoutubeMyPlaylist