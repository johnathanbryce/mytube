import styles from './VideoCard.module.css'

interface VideoCardProps {
    children: any,
    key: string
}

function VideoCard({children, key}: VideoCardProps) {
  return (
    <div className={styles.video_card} key={key}>
      <span className={styles.card}>{children}</span>
    </div>
  )
}

export default VideoCard