// pages/index.js
// Phoenix Creek Supply — One-and-done home (Monroe style)
// Amazon links include your tag: phoenixcreekg-20
// Only swap the GUMROAD_URL when you have it.

import Head from "next/head";

const AMAZON_PROSPECTOR =
  "https://www.amazon.com/s?k=gold+panning+kit&tag=phoenixcreekg-20";
const AMAZON_GPS =
  "https://www.amazon.com/s?k=handheld+gps+garmin&tag=phoenixcreekg-20";

// TODO: paste your real Gumroad product URL here once you have it
const GUMROAD_URL = "https://gumroad.com"; // temporary keeps button working

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoenix Creek Supply</title>
        <meta
          name="description"
          content="Rugged tools for the Modern Stoic—field-tested kits, navigation, and guides."
        />
      </Head>

      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="/" className="font-semibold tracking-tight">
            Phoenix Creek Supply
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#featured-gear" className="hover:opacity-80">
              Shop Gear
            </a>
            <a
              href={GUMROAD_URL}
              className="hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              Field Guide
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="min-h-screen bg-white text-gray-900">
        <section className="mx-auto max-w-6xl px-5 py-14">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Welcome to Phoenix Creek Supply
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Rugged tools for the Modern Stoic.
          </p>
        </section>

        {/* Featured Gear */}
        <section
          id="featured-gear"
          className="mx-auto max-w-6xl px-5 pb-16 sm:pb-20"
        >
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Gear</h2>
            <a
              href="#featured-gear"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              View All Gear
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Prospector Kit */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Prospector Essentials Kit</h3>
              <p className="mt-2 text-sm text-gray-700">
                A fundamental gold panning kit that includes permitting and
                claim documentation tools.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Pan, classifier, snuffer, vials</li>
                <li>Permit & claim quick-reference</li>
                <li>Field checklist</li>
              </ul>
              <a
                href={AMAZON_PROSPECTOR}
                target="_blank"
                rel="nofollow noreferrer"
                className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
              >
                View Kit →
              </a>
            </article>

            {/* Navigation Bundle */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Navigation Bundle</h3>
              <p className="mt-2 text-sm text-gray-700">
                Stay on course with our digital navigation guide and
                in-the-field GPS bundle.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Offline topo & satellite workflow</li>
                <li>Waypoint, track, and grid basics</li>
                <li>Recommended GPS/compass</li>
              </ul>
              <a
                href={AMAZON_GPS}
                target="_blank"
                rel="nofollow noreferrer"
                className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
              >
                Buy Now →
              </a>
            </article>

            {/* Field Guide (Gumroad) */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">The Modern Stoic Field Guide</h3>
              <p className="mt-2 text-sm text-gray-700">
                A no-noise daily carry: mental models, checklists, and prompts
                for clarity, discipline, and quiet power.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Daily prompts (3–5 minutes)</li>
                <li>Field checklists & gear notes</li>
                <li>Printable + mobile-friendly</li>
              </ul>
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
              >
                Get the Guide →
              </a>
            </article>
          </div>
        </section>
      </main>

      {/* Footer + legal */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-600">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>Field-tested by Monroe · Patience is a Virtue</p>
            <p className="text-xs text-gray-500">
              As an Amazon Associate, we earn from qualifying purchases.
              Availability and pricing may change without notice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
                  }
