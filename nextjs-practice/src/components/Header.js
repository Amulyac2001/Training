import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-red-400 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between font-bold text-gray-900">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/studentlist">User</Link>
          </div>
        </header>
      );
}