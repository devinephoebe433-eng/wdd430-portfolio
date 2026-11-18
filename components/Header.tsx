import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-line/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="focus-ring group flex items-center gap-3" aria-label="Go to portfolio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum font-display text-xl text-white shadow-soft transition-transform group-hover:rotate-6">P</span>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-plum">Phoebe / Portfolio</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-2 rounded-full border border-line bg-white/70 p-1 text-sm font-bold text-plum sm:gap-3">
            <li><Link className="focus-ring block rounded-full px-4 py-2 transition-colors hover:bg-blush hover:text-ink" href="/">Home</Link></li>
            <li><Link className="focus-ring block rounded-full px-4 py-2 transition-colors hover:bg-blush hover:text-ink" href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
