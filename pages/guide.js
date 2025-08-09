// pages/guide.js
import Head from "next/head";

export default function Guide() {
  const PRODUCT_URL = "https://gumroad.com/l/YOUR_PRODUCT_ID"; // ← REPLACE with your real Gumroad URL

  return (
    <>
      <Head>
        <title>The Modern Stoic Field Guide | Phoenix Creek Supply</title>
        <meta
          name="description"
          content="Daily prompts and practical models to stay steady under pressure. The Modern Stoic Field Guide by Phoenix Creek Supply."
        />
        {/* Gumroad embed script (loads the buy overlay/button styles) */}
        <script src="https://gumroad.com/js/gumroad.js" defer />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The Modern Stoic Field Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2">
            Daily prompts, field wisdom, and practical mental models to steady your mind and sharpen your edge.
          </p>
        </header>

        {/* Cover + CTA */}
        <section className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            {/* Swap this placeholder with your final cover image if you want a local asset */}
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Modern Stoic Field Guide cover"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">What you get</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>90+ days of focused prompts and reflections</li>
              <li>Field-ready mental models for pressure and uncertainty</li>
              <li>Minimalist, printable PDF (phone & tablet friendly)</li>
            </ul>

            {/* Primary Buy Button (Gumroad overlay) */}
            <a
              href={PRODUCT_URL}
              className="inline-block mt-5 px-5 py-3 bg-black text-white rounded hover:bg-gray-800 transition gumroad-button"
              data-gumroad-overlay="true"
              rel="noopener"
              target="_blank"
            >
              Buy on Gumroad
            </a>

            {/* Fallback link if script is blocked */}
            <noscript>
              <p className="mt-3">
                JavaScript is off. Buy directly here:{" "}
                <a href={PRODUCT_URL} className="underline">
                  Gumroad product link
                </a>
              </p>
            </noscript>

            <p className="text-xs text-gray-600 mt-3">
              Secure checkout on Gumroad. Instant download after purchase.
            </p>
          </div>
        </section>

        {/* Teaser / sample excerpt */}
        <section className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-2">Sample Prompt</h3>
          <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-800">
            When pressure hits, what’s inside you spills out. Today, define the behavior you want to spill. Then practice it when no
            one’s watching.
          </blockquote>
          <p className="text-sm text-gray-600 mt-2">
            Includes daily prompts + space to journal your responses.
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>· Field-tested by Monroe · Patience is a Virtue</span>
        </footer>
      </main>
    </>
  );
            }
