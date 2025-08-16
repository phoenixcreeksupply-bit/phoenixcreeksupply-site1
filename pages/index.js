// pages/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 bg-black text-white text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Rugged Tools for the Modern Stoic
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Digital kits. Bushcraft gear. Earn your legacy.
        </p>

        <div className="mt-8">
          <Link
            href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Buy the Field Guide
          </Link>
        </div>

        <div className="mt-12">
          <Image
            src="/images/modern-stoic-cover.png"
            alt="Modern Stoic Field Guide"
            width={600}
            height={800}
            className="rounded-xl border border-gray-700 shadow-lg mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
