export default function CardsLoader(): JSX.Element {
    const noOfCards = 3;
    var cardNumbers = [];
    while (cardNumbers.length < noOfCards) {
        var r = Math.floor(Math.random() * 59) + 1;
        if (cardNumbers.indexOf(r) === -1) cardNumbers.push(r);
    }
    return (
        <div>
            {cardNumbers.map((cardNumber) => {
                return (
                    <img
                        style={{
                            border: "1px black solid",
                            borderRadius: "10px"
                        }}
                        src={`/imgs/cards/${cardNumber}.png`}
                    />
                )
            })}
        </div>

    )
}