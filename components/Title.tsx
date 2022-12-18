import { ReactNode } from "react";

export default function Title(props: { text: string, color: string }): JSX.Element {
    const { text, color } = props;
    return (
        <div style={{
            fontFamily: 'Frijole',
            fontSize: '42px',
            padding: '4px',
            color: 'white',
            WebkitTextStroke: `2px ${color}`
        }}>
            {text}
        </div>
    )
}