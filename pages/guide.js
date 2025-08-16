import Link from "next/link";
import Head from "next/head";

export default function Guide() {
  return (
    <>
      <Head>
        <title>Modern Stoic Field Guide</title>
        <meta name="description" content="Buy the Modern Stoic Field Guide – rugged philosophy and practical tools for daily discipline" />
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Modern Stoic Field Guide</h1>
        <p className="text-lg mb-6 max-w-xl">
          A rugged, no-BS guide built to help men navigate modern chaos with discipline, clarity, and self-reliance. Comes packed with daily trackers, mindset tools, and stoic reflections.
        </p>
        <Link
          href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-300"
        >
          Buy Now on Gumroad
        </Link>
      </main>
    </>
  );
}
