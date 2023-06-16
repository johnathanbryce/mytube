import styles from '../styles/page.module.css'
// internal pages
import YoutubeCoding from '@/components/Youtube/YTCoding/YTCoding';
import YoutubeEntertainment from '@/components/Youtube/YTEntertainment/YTEntertainment';
// internal components
import ExpandableContainerMain from "@/components/ExpandableContainerMain/ExpandableContainerMain"

export default function Home() {
  const maxResults = 20;

  const codingURLS = [
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC29ju8bIPH5as8OGnQzwJyA&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFbNIlppjAuEX4znoulh0Cw&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UClb90NQQcskPUGDIXsQEz5Q&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJZv4d5rbIKd4QHMPkcABCw&maxResults=${maxResults}&order=date&type=video`
  ];

  // TODO: titles are likely located inside the URLS API so likely can take from there directly in child components 
  const codingTitles = [
    "Web Dev Simplified",
    "Kevin Powell",
    "Traversy Media",
    "Developed By Ed"
  ]

  const entertainmentURLS =[
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_AFyA9FqrZ57bb9QRH77wg&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCR1D15p_vdP3HkrH8wgjQRw&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqFMzb-4AUf6WAIbl132QKA&maxResults=${maxResults}&order=date&type=video`,
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDoJIpPvtEwFvfNXsZvCqKw&maxResults=${maxResults}&order=date&type=video`
  ]

  // TODO: titles are likely located inside the URLS API so likely can take from there directly in child components 
  const entertainmentTitles = [
    'The Hockey Guy', 
    'Internet Historian', 
    'NHL', 
    'Xander Budnick' 
  ]

  return (
    <main className={styles.main}>
      <ExpandableContainerMain title="Coding">
        <YoutubeCoding urls={codingURLS} titles={codingTitles}/>
      </ExpandableContainerMain>
      <ExpandableContainerMain title="Entertainment">
       <YoutubeEntertainment urls={entertainmentURLS} titles={entertainmentTitles}/>
      </ExpandableContainerMain>
    </main>
  )
}
