import Image from "next/image";
import Footer from "@/components/Footer";

export default function Guide() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Modern Stoic Field Guide</h1>
        <p className="text-lg mb-8">
          A battle-tested blueprint for men who lead with discipline, not emotion.
          Tools, trackers, and philosophy for those who live on mission.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src="/guide-cover.jpg"
            alt="Modern Stoic Field Guide Cover"
            width={400}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <a
          href="https://monroe.gumroad.com/l/modernstoic"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Buy on Gumroad
        </a>
      </main>
      <Footer />
    </div>
  );
}
