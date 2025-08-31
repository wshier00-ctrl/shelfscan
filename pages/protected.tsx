import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Protected() {
  return (
    <main style={{fontFamily:"system-ui, sans-serif", padding: 24}}>
      <h1>🔒 Protected</h1>
      <p>You are signed in. Welcome!</p>
      <p><a href="/">Back home</a></p>
    </main>
  );
}

export async function getServerSideProps(ctx:any) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: { destination: "/api/auth/signin?callbackUrl=/protected", permanent: false },
    };
  }
  return { props: {} };
}
