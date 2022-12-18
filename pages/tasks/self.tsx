import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'

export default function Task(): JSX.Element {
    return (
        <div className={styles.container}>
            <Title text="Self-reflect" color="#4D8C52" />
            <div className={styles.explanation} >
                Look at the card and reflect how it may represent something about you
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