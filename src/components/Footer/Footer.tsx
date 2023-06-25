import styles from './Footer.module.css'
// external libraries
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <footer className={styles.footer}>
    <p> designed & developed by <a href="https://johnbrycewebdevelopment.com/" target="_blank">johnathan bryce</a></p>
    <div>
        <a href="https://www.linkedin.com/in/johnathanbryce/" target="_blank">
            <AiOutlineGithub className={styles.icon} />
        </a>
        <a href="https://github.com/johnathanbryce" target="_blank">
            <AiOutlineLinkedin className={styles.icon}/>
        </a>
    </div>

</footer>
  )
}

export default Footer