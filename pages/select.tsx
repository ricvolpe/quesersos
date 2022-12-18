import Link from 'next/link'
import Title from '../components/Title'
import styles from '../styles/Select.module.css'

export default function Select() {
  return (
    <div className={styles.container}>
      <Title text='Select a task' color='#4D8C52' />
      <div className={styles.menu}>
        <Link href="tasks/Self-reflect">
          <div className={styles.menuItem}>Self-reflect</div>
        </Link>
        <Link href="tasks/Project">
          <div className={styles.menuItem}>Project</div>
        </Link>
        <Link href="tasks/Line of time">
          <div className={styles.menuItem}>Line of time</div>
        </Link>
        <Link href="tasks/Constellations">
          <div className={styles.menuItem}>Constellations</div>
        </Link>
        <Link href="tasks/Summoning">
          <div className={styles.menuItem}>Summoning</div>
        </Link>
      </div>
    </div>
  )
}