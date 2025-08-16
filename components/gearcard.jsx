// components/GearCard.jsx
import Image from "next/image";

export default function GearCard({ item }) {
  const { title, blurb, img, href } = item;
  return (
    <article className="bg-gray-100 rounded overflow-hidden shadow mb-8">
      <div className="relative w-full h-56">
        <Image
          src={img}              // e.g. "/gear/husqvarna-hatchet.jpg"
          alt={title}
          fill
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{blurb}</p>
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="underline font-medium"
        >
          Check Price on Amazon →
        </a><Link
  href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
  target="_blank"
  className="mt-2 inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
>
  View Product
</Link><Link
  href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
  target="_blank"
  className="mt-2 inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200" 
         
      </div>
    </article>
  );
}
