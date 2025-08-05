
export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <h1 className="text-4xl font-bold mb-2">Welcome to Phoenix Creek Supply</h1>
      <p className="text-xl mb-6">Rugged Tools for the Modern Stoic.</p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Kits</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border p-4">
            <h3 className="text-xl font-bold mb-2">Prospector Essentials Kit</h3>
            <p className="mb-2">Gold panning + claim documentation in one powerful starter bundle.</p>
            <button className="bg-black text-white px-4 py-2">View Kit</button>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-bold mb-2">Navigation Bundle</h3>
            <p className="mb-2">Stay on course with our digital GPS + guide combo.</p>
            <button className="bg-black text-white px-4 py-2">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl italic">Patience is a Virtue</h2>
        <p className="mt-2 text-sm text-gray-600">Field-tested by Monroe · Phoenix Creek Supply</p>
      </section>
    </main>
  );
}
