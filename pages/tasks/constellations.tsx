import React, { useState } from 'react'
import Link from 'next/link'
import ChangeTask from '../../components/ChangeTaskButton'
import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'



export default function Task(): JSX.Element {
    const [isChosen, choose] = useState(false)
    const [person, setPerson] = useState("")
    const noOfCards = 3;
    var cardNumbers = [];
    while (cardNumbers.length < noOfCards) {
        var r = Math.floor(Math.random() * 59) + 1;
        if (cardNumbers.indexOf(r) === -1) cardNumbers.push(r);
    }
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className={styles.container}>
            <Title text="Constellations" color="#4D8C52" />
            {isChosen ?
                <React.Fragment>
                    <div className={styles.explanation} >
                        Look at the cards and reflect what they may represent about each person or they may want to communicate with you
                    </div>
                    <div className={styles.cardAndTitle}>
                        {capitalizeFirstLetter(person)}
                        <img
                            className={styles.card}
                            src={`/imgs/cards/${cardNumbers[0]}.png`}
                        />
                    </div>
                    <div>
                        <div className={styles.constellationCards} >
                            <div className={styles.cardAndTitle}>
                                Your mother
                                <img
                                    className={styles.card}
                                    src={`/imgs/cards/${cardNumbers[1]}.png`}
                                />
                            </div>
                            <div className={styles.cardAndTitle}>
                                Your father
                                <img
                                    className={styles.card}
                                    src={`/imgs/cards/${cardNumbers[2]}.png`}
                                />
                            </div>
                        </div>
                    </div>
                    <ChangeTask />
                </React.Fragment>
                :
                <div className={styles.selector}>
                    Choose a person of your family, alive or dead, that isn't your mather or father
                    <hr />
                    <div>
                        <input
                            onChange={(e) => setPerson(e.target.value)}
                            value={person}
                        />
                        <button onClick={() => choose(true)}>Choose</button>
                    </div>
                </div>
            }
        </div >
    )
}