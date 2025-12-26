import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>Marketplace MVP</h1>
      <p>
        Welcome to the AI-driven carbon credit marketplace MVP scaffold.
      </p>
      <Link href="/marketplace">Go to Marketplace</Link>
    </main>
  );
}
