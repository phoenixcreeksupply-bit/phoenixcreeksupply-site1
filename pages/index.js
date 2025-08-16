// pages/index.js

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-black text-white">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Rugged Tools for the Modern Stoic
        </h1>
        <p className="text-lg text-gray-300">
          Digital kits. Bushcraft gear. Earn your legacy.
        </p>
        <Link
          href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200">
            Get the Field Guide
          </Button>
        </Link>
      </div>
    </main>
  );
}
