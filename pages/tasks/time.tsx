import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'

export default function Task(): JSX.Element {
    return (
        <div className={styles.container}>
            <Title text="Line of Time" color="#4D8C52" />
            <div className={styles.explanation} >
                Look at the cards and reflect how they may represent your past, present and future
            </div>
            <div className={styles.card}>Past</div>
            <div className={styles.card}>Present</div>
            <div className={styles.card}>Future</div>
            <Link href="/select">
                <button>
                    Change task
                </button>
            </Link>
        </div>
    )
}