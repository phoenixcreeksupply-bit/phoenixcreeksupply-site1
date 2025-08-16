import { GearCard } from "@/components/gearcard"; import { gear } from "@/data/gear"; import Link from "next/link";

export default function HomePage() { return ( <main className="mx-auto max-w-4xl px-4 py-12"> <h1 className="text-3xl font-bold mb-4"> Rugged Tools for the Modern Stoic </h1> <p className="mb-8"> Digital kits. Bushcraft gear. Earn your legacy. </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
    {gear.map((item, index) => (
      <GearCard key={index} item={item} />
    ))}
  </div>

  <div className="bg-white rounded-xl shadow p-6 mt-8">
    <h2 className="text-xl font-bold mb-2">
      The Modern Stoic Field Guide
    </h2>
    <p className="mb-4">
      Daily prompts, field wisdom, and practical mental models to keep you
      steady under pressure.
    </p>
    <Link href="https://monroe.gumroad.com/l/modernstoic">
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Get the Guide
      </button>
    </Link>
  </div>

  <footer className="mt-12 text-sm text-gray-500 text-center">
    <p>
      Disclaimer · Terms · Privacy · Field-tested by Monroe · Phoenix Creek
      Supply
    </p>
  </footer>
</main>

); }


