import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Task(): JSX.Element {
    const [isChosen, choose] = useState(false)
    const [person, setPerson] = useState("")
    const noOfCards = 3;
    var cardNumbers = [];
    while (cardNumbers.length < noOfCards) {
        var r = Math.floor(Math.random() * 59) + 1;
        if (cardNumbers.indexOf(r) === -1) cardNumbers.push(r);
    }
    const personHeadings: { [key: number]: string } = {
        0: person, 1: 'Your mother', 2: 'Your father'
    }
    return (
        <div className={styles.container}>
            <Title text="Constellations" color="#4D8C52" />
            {isChosen ?
                <React.Fragment>
                    <div className={styles.explanation} >
                        Look at the cards and reflect what they may represent about each person or they may want to communicate with you
                    </div>
                    {cardNumbers.map((cardNumber: number, index: number) => {
                        return (
                            <div key={`object-${index}`}>
                                {personHeadings[index]}
                                <img
                                    className={styles.card}
                                    key={`image-${index}`}
                                    src={`/imgs/cards/${cardNumber}.png`}
                                />
                            </div>
                        )
                    })}
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