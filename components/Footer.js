import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/red-heart-icon.svg" alt="Red Heart" className={styles.logo} /> for you with Shatabdi and Swapnoneel. 
      </footer>
    </>
  )
}
