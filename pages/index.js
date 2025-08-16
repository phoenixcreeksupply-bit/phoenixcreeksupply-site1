import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-6">Phoenix Creek Supply</h1>
        <p className="mb-4 text-lg">Rugged Tools for the Modern Stoic</p>
        <Link
          href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Buy the Field Guide
        </Link>
      </div>
    </main>
  );
}
