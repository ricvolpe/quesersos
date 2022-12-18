import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Task(): JSX.Element {
    const [isChosen, choose] = useState(false)
    const [person, setPerson] = useState("")
    return (
        <div className={styles.container}>
            <Title text="Constellations" color="#4D8C52" />
            {isChosen ?
                <React.Fragment>
                    <div className={styles.explanation} >
                        Look at the cards and reflect what they may represent about each person or they may want to communicate with you
                    </div>
                    <div className={styles.card}>{person}</div>
                    <div className={styles.card}>Your mother</div>
                    <div className={styles.card}>Your father</div>
                </React.Fragment>
                :
                <div className={styles.selector}>
                    Choose a person of your family (alive or dead) that isn't your mather or father
                    <div>
                        <input
                            onChange={(e) => setPerson(e.target.value)}
                            value={person}
                        />
                        <button onClick={() => choose(true)}>Choose</button>
                    </div>
                </div>
            }

            <Link href="/select">
                <button>
                    Change task
                </button>
            </Link>
        </div>
    )
}