'use client';

// No ambient animation — the site is intentionally calm and static.
// NatureBackground is kept as a no-op for compatibility with layout.
export default function NatureBackground() {
  return null;
}

export function Preloader() {
  return (
    <div
      id="wgc-loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream px-6 text-center dark:bg-forestblack"
      aria-hidden
    >
      <style>{`#wgc-loader{animation:wgcLoaderHide .6s ease 1.8s forwards}@keyframes wgcLoaderHide{to{opacity:0;visibility:hidden;pointer-events:none}}`}</style>
      <img src="/logo.jpg" alt="" className="h-14 w-14 rounded-full object-cover" />
      <p className="mt-4 font-serif text-xl text-forest dark:text-white">Women for a Greener Cameroon</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest/60 dark:text-white/50">
        Restoring nature · Empowering communities
      </p>
    </div>
  );
}
