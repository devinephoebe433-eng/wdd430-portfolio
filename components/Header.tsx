import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="focus-ring group flex items-center gap-3" aria-label="Go to portfolio home">
          <span className="flex h-9 w-9 items-center justify-center bg-ink font-display text-lg text-paper transition-transform group-hover:-rotate-6">P</span>
          <span className="text-sm font-bold uppercase tracking-[0.2em]">Portfolio / 2026</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm font-bold uppercase tracking-wider sm:gap-8">
            <li><Link className="focus-ring border-b-2 border-transparent pb-1 transition-colors hover:border-signal hover:text-signal" href="/">Home</Link></li>
            <li><Link className="focus-ring border-b-2 border-transparent pb-1 transition-colors hover:border-signal hover:text-signal" href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
