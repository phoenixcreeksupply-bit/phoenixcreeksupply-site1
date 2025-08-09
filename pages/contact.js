// pages/contact.js
export default function Contact() {
  const EMAIL = "monroehall0911@gmail.com"; // update if you prefer another inbox
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact</h1>
      <p className="text-gray-700 mb-6">Questions, partnerships, or field stories — send it our way.</p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-block px-5 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Email Us
      </a>
      <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
        <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <span>· Field-tested by Monroe · Patience is a Virtue</span>
      </footer>
    </main>
  );
          }
