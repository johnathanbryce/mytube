import styles from './Header.module.css'
// internal components
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Header() {
  return (
    <header className={styles.header}>
        <h1> MediaBlend</h1>
        <ThemeToggle />
    </header>
  )
}

export default Header