import styles from './messagebox.module.css'

const MessageBox = () => {
  return (
    <div className={styles.backOverlay}>
        <div className={styles.title}>
        Title
        <button className={styles.button} >X</button>
        </div>
        <div className={styles.message}>
        Message is good
sdjgdkgd
sgds
        </div>
    </div>
  )
}

export default MessageBox