import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <main style={{ maxWidth: 720, margin: "2rem auto", padding: "1.5rem" }}>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.name ?? session?.user?.email}, welcome to your dashboard.</p>

      <p style={{ marginTop: "1rem" }}>
        This page is protected. If you’re seeing it, you’re signed in.
      </p>
    </main>
  );
}
