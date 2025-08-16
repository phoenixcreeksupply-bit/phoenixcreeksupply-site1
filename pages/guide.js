import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Modern Stoic Field Guide</h1>
      <p className="max-w-xl text-center mb-6">
        A daily tool for discipline, grit, and clarity. This guide helps you track habits, embody stoic principles, and earn your edge.
      </p>
      <Link
        href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
        target="_blank"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
        Buy on Gumroad
      </Link>
    </main>
  );
}
