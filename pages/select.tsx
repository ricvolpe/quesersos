import Link from 'next/link'
import Title from '../components/Title'
import styles from '../styles/Select.module.css'

export default function Select() {
  return (
    <div className={styles.container}>
      <Title text='Select a task' color='#4D8C52' />
      <div className={styles.menu}>
        <div className={styles.menuItem}>Self-reflect</div>
        <div className={styles.menuItem}>Project</div>
        <div className={styles.menuItem}>Line of time</div>
        <div className={styles.menuItem}>Constellations</div>
        <div className={styles.menuItem}>Summoning</div>
      </div>
    </div>
  )
}