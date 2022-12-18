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