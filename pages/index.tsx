export default function Home(){
  return (
    <main style={{fontFamily:"system-ui, sans-serif", padding: 24}}>
      <h1>📦 ShelfScan — Starter</h1>
      <p><a href="/protected">Go to protected page</a></p>
      <p><a href="/api/auth/signin?callbackUrl=/protected">Sign in with Google</a></p>
      <p><a href="/api/auth/signout?callbackUrl=/">Sign out</a></p>
    </main>
  );
}
