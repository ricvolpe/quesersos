import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Task(): JSX.Element {
    const [isSummoned, summon] = useState(false)
    const [person, setPerson] = useState("")
    const cardNumber = Math.floor(Math.random() * 59) + 1;
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className={styles.container}>
            <Title text="Summoning" color="#4D8C52" />
            {isSummoned ?
                <React.Fragment>
                    <div className={styles.explanation} >
                        Look at the card and reflect what {capitalizeFirstLetter(person)} may want to communicate to you
                    </div>
                    <img className={styles.card} src={`/imgs/cards/${cardNumber}.png`} />
                </React.Fragment>
                :
                <div className={styles.selector}>
                    Choose a person (alive or dead) to summon and write their name below
                    <div>
                        <input
                            onChange={(e) => setPerson(e.target.value)}
                            value={person}
                        />
                        <button onClick={() => summon(true)}>Summon</button>
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