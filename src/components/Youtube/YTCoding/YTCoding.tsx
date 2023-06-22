import styles from './YTCoding.module.css'
// internal components
import YTChannels from '@/components/Youtube/YTChannels/YTChannels'
import ExpandableContainer from '@/components/ExpandableContainer/ExpandableContainer'
import SearchBar from '@/components/SearchBar/SearchBar'
import LoadingSpinner from '@/app/loading'

interface YoutubeProps {
  playlistData: any[],
  error: boolean
  titles?: string[],
}

function YoutubeCoding({titles, playlistData, error}: YoutubeProps) {
  let codingPlaylistData = playlistData;

  // uses empty array if codingPlaylistData[0] and [1] doesn't exist / hasn't loaded in yet
  const traversyMedia  = codingPlaylistData[0] ?? []; 
  const webDevSimplified = codingPlaylistData[1] ?? []; 
  const devByEd = codingPlaylistData[2] ?? []; 
  const kevinPowell = codingPlaylistData[3] ?? []; 

  // combines the playlistData url arrays into one array for the search bar 
  const mergedPlaylistData = [...traversyMedia, ...webDevSimplified, ...devByEd, ...kevinPowell];

  return (
    <section className={styles.youtube}>
          <>
          <SearchBar placeholder="Search videos..." data={mergedPlaylistData} />
          
          {/*TODO: this should all be mapped out: */}
          <ExpandableContainer title={titles[0]}>
            <YTChannels playlistData={webDevSimplified} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[1]}>
            <YTChannels playlistData={kevinPowell} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[2]}>
            <YTChannels playlistData={traversyMedia} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[3]}>
            <YTChannels playlistData={devByEd} error={error} />
          </ExpandableContainer>
        </>
    </section>
  )
}

export default YoutubeCoding
