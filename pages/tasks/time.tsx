import ChangeTask from '../../components/ChangeTaskButton';
import Title from '../../components/Title'
import styles from '../../styles/Task.module.css'

export default function Task(): JSX.Element {
    const noOfCards = 3;
    var cardNumbers = [];
    while (cardNumbers.length < noOfCards) {
        var r = Math.floor(Math.random() * 59) + 1;
        if (cardNumbers.indexOf(r) === -1) cardNumbers.push(r);
    }
    const timeHeadings: { [key: number]: string } = {
        0: 'Past', 1: 'Present', 2: 'Future'
    }
    return (
        <div className={styles.container}>
            <Title text="Line of Time" color="#4D8C52" />
            <div className={styles.explanation} >
                Look at the cards and reflect how they may represent your past, present and future
            </div>
            <div className={styles.timeCards}>
                {cardNumbers.map((cardNumber: number, index: number) => {
                    return (
                        <div key={`object-${index}`} className={styles.cardAndTitle}>
                            {timeHeadings[index]}
                            <img
                                className={styles.card}
                                key={`image-${index}`}
                                src={`/imgs/cards/${cardNumber}.png`}
                            />
                        </div>
                    )
                })}
            </div>
            <ChangeTask />
        </div>
    )
}