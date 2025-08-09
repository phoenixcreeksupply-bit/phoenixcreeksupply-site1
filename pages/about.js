// pages/about.js
export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">About Phoenix Creek Supply</h1>
      <p className="max-w-3xl text-gray-700">
        Built for the modern stoic. We test gear, write guides, and share what works in the field.
        No noise. No gimmicks. Just tools you can trust when conditions get real.
      </p>
      <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
        <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <span>· Field-tested by Monroe · Patience is a Virtue</span>
      </footer>
    </main>
  );
    }
