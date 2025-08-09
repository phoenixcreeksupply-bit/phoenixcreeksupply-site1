// pages/gear.js
import { sections } from "@/data/gear";

export default function Gear() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Gear</h1>
        <p className="text-gray-700 mt-2">
          Curated, field-ready picks. Some links are affiliate links — your purchase may
          earn us a small commission at no extra cost to you. We recommend what we’d carry.
        </p>
      </header>

      {sections.map((sec) => (
        <section key={sec.heading} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{sec.heading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sec.items.map((item) => (
              <article key={item.title} className="border rounded-lg overflow-hidden hover:shadow-md transition">
                <a
                  href={item.href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="block"
                  title={item.title}
                >
                  <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                    {/* using <img> avoids Next image config; remote URLs OK */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{item.blurb}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium mt-3 text-black">
                      Check on Amazon →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
                        }
