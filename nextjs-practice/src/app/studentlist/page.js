import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function StudentList() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

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
