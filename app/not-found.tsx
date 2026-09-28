import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <div className="text-7xl" aria-hidden>🌲🦜🌲</div>
      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.3em] text-leaf">404 · Lost in the forest</p>
      <h1 className="mt-2 font-serif text-5xl font-bold sm:text-6xl">Perdu dans la forêt ?</h1>
      <p className="mt-3 max-w-md text-foresttext/70 dark:text-white/65">This path is overgrown. A bird will guide you home — follow the leaves back to the clearing.</p>
      <div className="animate-fly mt-6 text-4xl" aria-hidden>🐦</div>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full bg-gradient-to-r from-forest to-fresh px-7 py-3.5 font-bold text-white shadow-glow">🌱 Back home</Link>
        <Link href="/contact" className="rounded-full border-2 border-forest/25 px-7 py-3.5 font-bold">Contact</Link>
      </div>
    </div>
  );
}
