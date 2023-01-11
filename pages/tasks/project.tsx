import React, { useState } from 'react'
import ChangeTask from '../../components/ChangeTaskButton'
import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'

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
                    <div className={styles.singleCardWrapper}>
                        <img className={styles.card} src={`/imgs/cards/${cardNumber}.png`} />
                    </div>
                    <ChangeTask />
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
        </div>
    )
}