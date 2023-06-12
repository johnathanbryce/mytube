 import styles from './Layout.module.css'
 interface LayoutContainerProps {
    children: any
}
 function Layout({children}: LayoutContainerProps) {
   return (
    <div className={styles.container}>
        {children}
    </div>
   )
 }
 
 export default Layout