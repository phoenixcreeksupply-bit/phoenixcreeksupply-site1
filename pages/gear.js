// pages/gear.js
import Head from "next/head";

const items = [
  {
    title: "Garrett Gold Pan Kit",
    href: "https://www.amazon.com/dp/B002LB7ZUM?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/81mKpZL2WlL._AC_SL1500_.jpg",
    alt: "Garrett Gold Pan Kit",
    blurb: "Everything you need to start panning.",
  },
  {
    title: "Minelab Vanquish 540",
    href: "https://www.amazon.com/dp/B07KPLR88J?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/71Vw5ogUSZL._AC_SL1500_.jpg",
    alt: "Minelab Vanquish 540 Metal Detector",
    blurb: "High performance for gold & relics.",
  },
  {
    title: "Husqvarna Hatchet",
    href: "https://www.amazon.com/dp/B00BMKLVHQ?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/71xVkLh3hJL._AC_SL1500_.jpg",
    alt: "Husqvarna Wooden Handle Hatchet",
    blurb: "Rugged, reliable, field-proven.",
  },
  {
    title: "KÜHL Renegade Pants",
    href: "https://www.amazon.com/dp/B0977K4KNQ?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/71Yb7Y+blzL._AC_SL1500_.jpg",
    alt: "KÜHL Renegade Pants",
    blurb: "Durable outdoor pants for all conditions.",
  },
  {
    title: "Fiskars Super Splitting Axe",
    href: "https://www.amazon.com/dp/B0002YTO7E?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/71kl7iG4tQL._AC_SL1500_.jpg",
    alt: "Fiskars Super Splitting Axe",
    blurb: "Power & precision for firewood.",
  },
  {
    title: "Morakniv Bushcraft Knife",
    href: "https://www.amazon.com/dp/B00BUZ2S1Q?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/81pYf0Ht3xL._AC_SL1500_.jpg",
    alt: "Morakniv Bushcraft Carbon Steel Knife",
    blurb: "Razor sharp. Outdoor ready.",
  },
  {
    title: "Bayite Ferro Rod Firestarter",
    href: "https://www.amazon.com/dp/B01I1FJ9LG?tag=phoenixcreekg-20",
    img: "https://m.media-amazon.com/images/I/71VxQ0x2XHL._AC_SL1500_.jpg",
    alt: "Bayite Survival Ferro Rod Firestarter",
    blurb: "Windproof, waterproof ignition.",
  },
];

export default function Gear() {
  return (
    <>
      <Head>
        <title>Gear | Phoenix Creek Supply</title>
        <meta name="description" content="Field-tested gear picks with affiliate links." />
      </Head>

      <main style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ margin: "0 0 16px", fontSize: 32 }}>Field-Tested Gear</h1>
        <p style={{ margin: "0 0 24px", color: "#555" }}>
          Curated picks we actually stand behind. Purchases may earn us a small commission.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                border: "1px solid #e3e3e3",
                borderRadius: 12,
                padding: 16,
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: 8,
                  marginBottom: 12,
                  background: "#f7f7f7",
                }}
              >
                <img
                  src={it.img}
                  alt={it.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{it.title}</h3>
              <p style={{ margin: 0, color: "#666" }}>{it.blurb}</p>
            </a>
          ))}
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "#777" }}>
          As an Amazon Associate we earn from qualifying purchases.
        </p>
      </main>
    </>
  );
    }
