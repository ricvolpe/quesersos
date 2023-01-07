import Link from 'next/link'
import styles from '../../styles/Task.module.css'
import Title from '../../components/Title'

export default function Task(): JSX.Element {
    const cardNumber = Math.floor(Math.random() * 59) + 1;
    return (
        <div className={styles.container}>
            <Title text="Self-reflect" color="#4D8C52" />
            <div className={styles.explanation} >
                Look at the card and reflect how it may represent something about you
            </div>
            <img className={styles.card} src={`/imgs/cards/${cardNumber}.png`} />
            <Link href="/select">
                <button>
                    Change task
                </button>
            </Link>
        </div>
    )
}