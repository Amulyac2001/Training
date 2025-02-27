import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/studentlist/Sam">Sam</Link>
                </li>
                <li>
                    <Link href="/studentlist/Peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/Ram">Ram</Link>
                </li>
                <li>
                    <Link href="/studentlist/Anil">Anil</Link>
                </li>
            </ul>
        </div>
    )
}