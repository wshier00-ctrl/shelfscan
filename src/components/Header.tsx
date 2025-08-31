import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header(){
  const { data: session, status } = useSession();
  return (
    <header style={{display:"flex",gap:16,alignItems:"center",padding:12,borderBottom:"1px solid #ddd"}}>
      <Link href="/">Home</Link>
      <Link href="/protected">Protected</Link>
      <div style={{marginLeft:"auto"}}>
        {status === "loading" ? "…" :
          session ? (
            <>
              <span style={{marginRight:8}}>Hi, {session.user?.name ?? "you"}!</span>
              <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn("google", { callbackUrl: "/protected" })}>
              Sign in with Google
            </button>
          )
        }
      </div>
    </header>
  );
}
