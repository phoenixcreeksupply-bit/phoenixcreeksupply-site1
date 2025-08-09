// components/Header.js
export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" className="font-semibold tracking-tight">Phoenix Creek Supply</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:opacity-80">Home</a>
          <a href="/guide" className="hover:opacity-80">Field Guide</a>
          <a href="/gear" className="hover:opacity-80">Gear</a>
          <a href="/about" className="hover:opacity-80">About</a>
          <a href="/contact" className="hover:opacity-80">Contact</a>
        </nav>
      </div>
    </header>
  );
}
