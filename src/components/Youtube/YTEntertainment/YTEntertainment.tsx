import styles from './YTEntertainment.module.css'
// internal components
import YTChannels from '@/components/Youtube/YTChannels/YTChannels'
import ExpandableContainer from '@/components/ExpandableContainer/ExpandableContainer'
import SearchBar from '@/components/SearchBar/SearchBar'
import LoadingSpinner from '@/app/loading'

interface YoutubeProps {
  playlistData: any[],
  error: boolean,
  titles: string[]
}

function YoutubeEntertainment({titles, playlistData, error}: YoutubeProps) {
  let entertainmentPlaylistData = playlistData;

  // uses empty array if playlistData[0] and [1] doesn't exist / hasn't loaded in yet
  const internetHistorian  = entertainmentPlaylistData[0] ?? []; 
  const zanderBudnick = entertainmentPlaylistData[1] ?? []; 
  const theHockeyGuy = entertainmentPlaylistData[2] ?? []; 
  const NHL = entertainmentPlaylistData[3] ?? []; 

  // combines the playlistData url arrays into one array for the search bar 
  const mergedPlaylistData = [...internetHistorian, ...zanderBudnick, ...theHockeyGuy, ...NHL];

  return (
    <section className={styles.youtube}>
        <>
          <SearchBar placeholder="Search videos..." data={mergedPlaylistData} />
          <ExpandableContainer title={titles[0]}>
            <YTChannels playlistData={zanderBudnick} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[1]}>
            <YTChannels playlistData={NHL} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[2]}>
            <YTChannels playlistData={internetHistorian} error={error} />
          </ExpandableContainer>
          <ExpandableContainer title={titles[3]}>
            <YTChannels playlistData={theHockeyGuy} error={error} />
          </ExpandableContainer>
        </>

    </section>
  )
}

export default YoutubeEntertainment