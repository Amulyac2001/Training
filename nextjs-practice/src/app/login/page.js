"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Component() {
    const router=useRouter();
    const { data: session } = useSession()
    console.log(session);
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
        <div>
            <button className="border-r-indigo-100" onClick={() => router.push("/login/employeelogin")}>EmployeeLogin</button>
            <br />
            <button onClick={() => router.push("/login/adminlogin")}>AdminLogin</button>
        </div>
    </>
}