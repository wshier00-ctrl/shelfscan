import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      <Head>
        <title>SmartSaver</title>
      </Head>

      <main style={{ maxWidth: 720, margin: "2rem auto", padding: "1.5rem" }}>
        <h1>SmartSaver</h1>
        <p>Welcome! You can browse publicly. Sign in to access your dashboard.</p>

        {loading && <p>Checking your session…</p>}

        {!loading && !session && (
          <>
            <p>You’re not signed in.</p>
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              style={{ padding: "0.6rem 1rem", cursor: "pointer" }}
            >
              Sign in with Google
            </button>
          </>
        )}

        {!loading && session && (
          <>
            <p>Signed in as <strong>{session.user?.name ?? session.user?.email}</strong></p>
            <p>
              <Link href="/dashboard">Go to your dashboard →</Link>
            </p>
            <button onClick={() => signOut()} style={{ padding: "0.6rem 1rem", cursor: "pointer" }}>
              Sign out
            </button>
          </>
        )}

        <hr style={{ margin: "2rem 0" }} />
        <section>
          <h2>Public area</h2>
          <p>This content is visible to everyone without logging in.</p>
        </section>
      </main>
    </>
  );
}
