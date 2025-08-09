// pages/gear.js

// Update once if your Amazon Associates tag changes:
const AMAZON_TAG = "phoenixcreekg-20";

export default function Gear() {
  const categories = [
    {
      name: "Prospecting Basics",
      items: [
        {
          title: "14\" Gold Pan",
          desc: "Wide riffles for effective capture. A solid starter pan.",
          href: `https://www.amazon.com/s?k=gold+pan+14+inch&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1578926374373-bfb02bfe8b08?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Classifier Set",
          desc: "Mesh screens speed up sorting and recovery.",
          href: `https://www.amazon.com/s?k=gold+classifier+set&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1545254814-8f94d67482bd?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Digital Pocket Scale",
          desc: "Quick, accurate weight checks in the field.",
          href: `https://www.amazon.com/s?k=digital+pocket+scale+0.01g&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    {
      name: "Navigation",
      items: [
        {
          title: "Garmin eTrex / GPS",
          desc: "Reliable handheld GPS for off-grid navigation.",
          href: `https://www.amazon.com/s?k=garmin+etrex+gps&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Suunto Compass",
          desc: "Durable baseplate compass—trustworthy and simple.",
          href: `https://www.amazon.com/s?k=suunto+compass&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1502920764203-b859c2384716?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Topo Maps (Atlas/State)",
          desc: "Paper never runs out of battery. Keep one in the kit.",
          href: `https://www.amazon.com/s?k=topographic+map+atlas&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    {
      name: "Tools & Camp",
      items: [
        {
          title: "Husqvarna Hatchet",
          desc: "Compact, balanced hatchet for camp chores and kindling.",
          href: `https://www.amazon.com/s?k=husqvarna+hatchet&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1518780537270-935e9aae2370?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Work Gloves",
          desc: "Leather or synthetic—protect your hands in the wash.",
          href: `https://www.amazon.com/s?k=work+gloves+leather&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1554907984-15263bfd63fe?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Headlamp (Rechargeable)",
          desc: "Hands-free light for pre-dawn starts and late wraps.",
          href: `https://www.amazon.com/s?k=rechargeable+headlamp&tag=${AMAZON_TAG}`,
          img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Gear</h1>
        <p className="text-gray-700 mt-2">
          Curated picks for field work. Some links are affiliate links—your purchase may earn us a small commission at no extra cost to you.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{cat.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((item) => (
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
                      alt={item.title}
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
      ))}

      <footer className="mt-12 text-center text-sm text-gray-500">
        Field-tested by Monroe · Patience is a Virtue
      </footer>
    </main>
  );
}
