import styles from './VideoCard.module.css'

interface VideoCardProps {
    children: any,
}

function VideoCard({children}: VideoCardProps) {
  return (
    <div className={styles.video_card}>
      <div className={styles.card}>{children}</div>
    </div>
  )
}

export default VideoCard