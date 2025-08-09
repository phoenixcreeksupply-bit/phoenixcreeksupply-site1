// pages/newsletter.js
export default function Newsletter() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Join the Phoenix Creek List</h1>
      <p className="text-gray-700 mb-6">No fluff. Just field-tested gear drops, guides, and mission updates.</p>

      {/* Paste your ConvertKit embed below (after you create a form) */}
      <div className="bg-gray-100 p-6 rounded-xl">
        {/* Example placeholder: */}
        <p className="text-sm text-gray-600">
          (Paste your ConvertKit Form JavaScript embed here once you have it.)
        </p>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
        <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <span>· Field-tested by Monroe · Patience is a Virtue</span>
      </footer>
    </main>
  );
        }
