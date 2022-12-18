import { useRouter } from 'next/router'
import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'

export default function Task(): JSX.Element {
    const router = useRouter()
    const { task } = router.query
    if (!task) { return <div>Sorry for the error</div> }
    return (
        <div className={styles.container}>
            <Title text={task.toString()} color='#4D8C52' />
            <div className={styles.explanation} >
                Task explanation
            </div>
            <div className={styles.title} >
                Card title
            </div>
            <div className={styles.card} />
            <Link href="/select">
                <button>
                    Change task
                </button>
            </Link>
        </div>
    )
}