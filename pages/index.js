import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoenix Creek Supply</title>
        <meta name="description" content="Rugged Tools for the Modern Stoic" />
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Phoenix Creek Supply</h1>
        <p className="text-xl mb-6 max-w-xl">
          Rugged tools for the modern stoic. Digital kits. Bushcraft gear. Earn your legacy.
        </p>
        <Link
          href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300"
        >
          Buy the Modern Stoic Field Guide
        </Link>
      </main>
    </>
  );
}
