import Image from 'next/image'
import Link from 'next/link'

export default function ChangeTask(): JSX.Element {
    return (
        <div style={{ alignSelf: "flex-end" }}>
            <Link href="/select">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px"
                }}>
                    <Image src="/imgs/hand.png" alt="A pointing hand" width={40} height={40} />
                    <div>Change task</div>
                </div>
            </Link>
        </div>
    )
}