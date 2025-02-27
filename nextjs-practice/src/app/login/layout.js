"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const Pathname = usePathname();  // route name/path.
    return (
        <div>
            {
                // conditional layout:->
                Pathname !== "/login/adminlogin" ?
                    <div>
                        <h2>Layout for login page</h2>
                        <Link className="text-teal-300 bg-gray-500" href="/login/employeelogin">employeelogin</Link>
                        <br />
                        <Link className="text-teal-300 bg-gray-500" href="/login/adminlogin">adminlogin</Link>
                    </div>
                    : null
            }
            {children}
        </div>
    )
}