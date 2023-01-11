export default function Title(props: { text: string, color: string }): JSX.Element {
    const { text, color } = props;
    return (
        <div style={{
            fontFamily: 'Frijole',
            fontSize: '34px',
            padding: '4px',
            color: 'white',
            WebkitTextStroke: `1.5px ${color}`
        }}>
            {text}
        </div>
    )
}