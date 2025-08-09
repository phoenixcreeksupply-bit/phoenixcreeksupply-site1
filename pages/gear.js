// pages/gear.js
import GearCard from "@/components/GearCard";
import { sections } from "@/data/gear";

export default function Gear() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Gear</h1>
      <p className="text-gray-600 mb-8">
        Curated picks for field work. Some links are affiliate links—your purchase may
        earn us a small commission at no extra cost to you.
      </p>

      {sections.map((sec) => (
        <section key={sec.heading} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{sec.heading}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sec.items.map((item) => (
              <GearCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
        }
