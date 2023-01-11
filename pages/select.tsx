import Image from 'next/image'
import Link from 'next/link'
import Title from '../components/Title'
import styles from '../styles/Select.module.css'

export default function Select() {
  return (
    <div className={styles.container}>
      <Title text='Select a task' color='#4D8C52' />
      <div className={styles.menu}>
        <Link href="tasks/self">
          <div className={styles.menuItem}>
            <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
            <div>Self-reflect</div>
          </div>
        </Link>
        <Link href="tasks/project">
          <div className={styles.menuItem}>
            <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
            <div>Project</div>
          </div>
        </Link>
        <Link href="tasks/time">
          <div className={styles.menuItem}>
            <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
            <div>Line of time</div>
          </div>
        </Link>
        <Link href="tasks/constellations">
          <div className={styles.menuItem}>
            <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
            <div>Constellations</div>
          </div>
        </Link>
        <Link href="tasks/summoning">
          <div className={styles.menuItem}>
            <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
            <div>Summoning</div>
          </div>
        </Link>
      </div>
    </div>
  )
}