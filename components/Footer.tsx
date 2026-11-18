export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-bold uppercase tracking-[0.16em]">Built with intention.</p>
        <p className="text-paper/65">Copyright © {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
