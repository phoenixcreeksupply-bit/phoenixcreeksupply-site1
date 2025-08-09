// components/Header.js
export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" className="text-xl font-bold">Phoenix Creek Supply</a>
      <nav className="flex items-center gap-5 text-sm">
        <a href="/gear" className="hover:underline">Gear</a>
        <a href="/guide" className="hover:underline">Guide</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
    }
