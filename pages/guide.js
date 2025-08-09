// pages/guide.js
import Head from "next/head";
import Script from "next/script";

export default function Guide() {
  const gumroadUrl = "https://phoenixcreeksupply.gumroad.com/l/gzxqj";

  return (
    <>
      <Head>
        <title>The Modern Stoic Field Guide | Phoenix Creek Supply</title>
        <meta
          name="description"
          content="Your daily companion for clarity, discipline, and quiet power. Built for those who earn their legacy in silence — not noise."
        />
      </Head>

      {/* Load Gumroad buy button script */}
      <Script src="https://gumroad.com/js/gumroad.js" strategy="afterInteractive" />

      <main className="min-h-screen bg-white text-gray-900 p-8 font-sans max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">The Modern Stoic Field Guide</h1>
          <p className="text-lg text-gray-700">
            A compact, field-ready system for calm action and durable results. No fluff. No noise.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 rounded p-5 border">
            <h3 className="font-semibold mb-1">Daily Pages</h3>
            <p className="text-sm text-gray-700">AM/PM prompts that fit on one page. Stay consistent.</p>
          </div>
          <div className="bg-gray-50 rounded p-5 border">
            <h3 className="font-semibold mb-1">Decision OS</h3>
            <p className="text-sm text-gray-700">Simple matrices to de-clutter choices under pressure.</p>
          </div>
          <div className="bg-gray-50 rounded p-5 border">
            <h3 className="font-semibold mb-1">After-Action Notes</h3>
            <p className="text-sm text-gray-700">Tight debrief loop. Wins, frictions, and fixes.</p>
          </div>
        </section>

        <section className="bg-gray-100 rounded p-6 border mb-12">
          <h2 className="text-2xl font-semibold mb-3">Get the Guide</h2>
          <p className="text-gray-700 mb-5">
            Instant digital download (PDF). Lifetime updates included. 30-day, no-questions refund via Gumroad.
          </p>

          {/* Gumroad button */}
          <a
            className="gumroad-button inline-block px-6 py-3 bg-black text-white rounded text-center"
            href={gumroadUrl}
          >
            Buy Now on Gumroad
          </a>
        </section>

        <footer className="text-sm text-gray-500">
          © {new Date().getFullYear()} Phoenix Creek Supply · Educational content — not professional advice.
        </footer>
      </main>
    </>
  );
}
