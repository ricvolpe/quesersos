import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Task(): JSX.Element {
    const [direction, setDirection] = useState("")
    const cardNumber = Math.floor(Math.random() * 59) + 1;
    return (
        <div className={styles.container}>
            <Title text="Project" color="#4D8C52" />
            {direction ? (
                <React.Fragment>
                    <div className={styles.explanation} >
                        Look at the card and reflect how it may represent something about the person to your {direction}
                    </div>
                    <img className={styles.card} src={`/imgs/cards/${cardNumber}.png`} />
                </React.Fragment>
            ) :
                <div className={styles.selector}>
                    As a group, choose a direction
                    <div>
                        <button
                            onClick={() => setDirection("left")}
                            style={{ marginRight: '10px', marginTop: '10px' }}>
                            left
                        </button>
                        <button onClick={() => setDirection("rigth")}>rigth</button>
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