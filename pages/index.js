// pages/index.js
import Head from "next/head";
// If your Amazon Associates tag ever changes, update once here:
const AMAZON_TAG = "phoenixcreekg-20";

export default function Home() {
  const featured = [
    {
      title: "Garrett Pro-Pointer AT",
      desc: "Industry-favorite pinpointer for fast target recovery. Waterproof and rugged for field use.",
      href: `https://www.amazon.com/s?k=garrett+pro+pointer+at&tag=${AMAZON_TAG}`,
      img: "https://images.unsplash.com/photo-1517953915334-ab3c02d2e6d6?q=80&w=1200&auto=format&fit=crop",
      alt: "Garrett Pro-Pointer AT on rocky ground",
    },
    {
      title: "Minelab Equinox 900",
      desc: "Pro-level detector with multi-frequency performance for coins, relics, and gold.",
      href: `https://www.amazon.com/s?k=minelab+equinox+900&tag=${AMAZON_TAG}`,
      img: "https://images.unsplash.com/photo-1520697222861-e369479f0d4b?q=80&w=1200&auto=format&fit=crop",
      alt: "Metal detector on forest floor",
    },
    {
      title: "Husqvarna Forest Hatchet",
      desc: "Compact, balanced hatchet for camp chores, kindling, and bushcraft.",
      href: `https://www.amazon.com/s?k=husqvarna+hatchet&tag=${AMAZON_TAG}`,
      img: "https://images.unsplash.com/photo-1518780537270-935e9aae2370?q=80&w=1200&auto=format&fit=crop",
      alt: "Hatchet embedded in a stump outdoors",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      {/* Hero */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Welcome to Phoenix Creek Supply
      </h1>
      <p className="text-lg md:text-xl mb-10 text-gray-700">
        Rugged Tools for the Modern Stoic.
      </p>

      {/* Kits (your original two cards) */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Prospector Essentials Kit</h2>
          <p className="text-gray-700">
            A fundamental gold panning kit that includes every prospector
            permitting and claim documentation tool.
          </p>
          <a
            href="/gear"
            className="inline-block mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            View Kit
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Navigation Bundle</h2>
          <p className="text-gray-700">
            Stay on course with our digital navigation guide and in-the-field GPS bundle.
          </p>
          <a
            href="/gear"
            className="inline-block mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* === Featured Gear (affiliate ready) === */}
      <section className="mb-6">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Gear</h2>
          <a href="/gear" className="text-sm underline text-gray-700 hover:text-gray-900">
            View All Gear →
          </a>
        </header>

        <p className="text-sm text-gray-600 mb-6">
          Curated tools we trust. Purchases via these links may earn us a small commission,
          at no extra cost to you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <article key={item.title} className="border rounded-lg overflow-hidden hover:shadow-md transition">
              <a
                href={item.href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="block"
                title={item.title}
              >
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium mt-3 text-black">
                    Check Price on Amazon →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA to your Gumroad guide */}
      <section className="mt-12 bg-gray-50 border rounded-xl p-6">
        <h2 className="text-xl md:text-2xl font-semibold">The Modern Stoic Field Guide</h2>
        <p className="text-gray-700 mt-1">
          Daily prompts, field wisdom, and practical mental models to keep you steady under pressure.
        </p>
        <a
          href="https://gumroad.com" // TODO: replace with your real Gumroad product URL
          target="_blank"
          rel="noopener"
          className="inline-block mt-4 px-5 py-2.5 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Get the Guide
        </a>
      </section>

      {/* Footer with legal links + tagline */}
      <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
        <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <span>· Field-tested by Monroe · Patience is a Virtue</span>
      </footer>
    </main>
  );
        }
