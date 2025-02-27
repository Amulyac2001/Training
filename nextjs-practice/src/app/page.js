"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <main>
      <h1>Nextjs Practice</h1>
      <Link href="/login" className="text-violet-400">Login</Link>
      <br />
      <br />
      <button className="text-violet-400" onClick={()=>router.push("/about")}>About page</button>
    </main>
  );
}
