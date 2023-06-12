import styles from './Youtube.module.css'
// internal components
import YoutubeMyPlaylist from '@/components/YoutubeData/YTMyPlaylist/YoutubeMyPlaylist'
import YoutubeReactHooks from '@/components/YoutubeData/YTReactHooks/YoutubeReactHooks'
import PlaylistContainer from '@/components/PlaylistContainer/PlaylistContainer'



function Youtube() {
  return (
    <section className={styles.youtube}>
        <PlaylistContainer title={"John's Coding Playlist"}>
            <YoutubeMyPlaylist />
        </PlaylistContainer>
        <PlaylistContainer title={"React Hooks Playlist"}>
            <YoutubeReactHooks />
        </PlaylistContainer>
    </section>
  )
}

export default Youtube