import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'

export default function Task(): JSX.Element {
    return (
        <div className={styles.container}>
            <Title text="Summoning" color="#4D8C52" />
            <div className={styles.explanation} >
                First, choose someone to summor here. Then, look at the cards and reflect what the summoned person may represent for you
            </div>
            <div>
                <div className={styles.title} >
                    Card title
                </div>
                <div className={styles.card} />
            </div>
            <Link href="/select">
                <button>
                    Change task
                </button>
            </Link>
        </div>
    )
}