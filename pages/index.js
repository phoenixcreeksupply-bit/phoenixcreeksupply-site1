// pages/index.js
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Welcome to Phoenix Creek Supply</h1>
      <p className="text-lg mb-6">Rugged Tools for the Modern Stoic.</p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Prospector Essentials Kit</h2>
          <p>A fundamental gold panning kit that includes every prospector permitting and claim documentation tool.</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">View Kit</button>
        </div>

        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Navigation Bundle</h2>
          <p>Stay on course with our digital navigation guide and in-the-field GPS bundle.</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">Buy Now</button>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Field-tested by Monroe · Patience is a Virtue
      </footer>
    </main>
  );
    }
