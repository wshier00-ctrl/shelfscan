import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <main style={{padding:'2rem', fontFamily:'system-ui, sans-serif'}}>
      <h1>📦 ShelfScan — Starter</h1>
      <p>Status: <strong>{status}</strong></p>
      {session ? (
        <>
          <p>Signed in as <strong>{session.user?.email || session.user?.name}</strong></p>
          <button onClick={() => signOut()}>Sign out</button>
          <p style={{marginTop:16}}><a href="/protected">Go to protected page →</a></p>
        </>
      ) : (
        <>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      )}
    </main>
  );
}
