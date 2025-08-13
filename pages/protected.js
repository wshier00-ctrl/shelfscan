import { getSession, useSession } from "next-auth/react";
export default function Protected() {
  const { data: session } = useSession();
  return (
    <main style={{padding:'2rem', fontFamily:'system-ui, sans-serif'}}>
      <h1>🔒 Protected</h1>
      {session ? (
        <p>Welcome, {session.user?.name || session.user?.email}!</p>
      ) : (
        <p>You are not signed in.</p>
      )}
      <p style={{marginTop:16}}><a href="/">← Back home</a></p>
    </main>
  );
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: {} };
}
