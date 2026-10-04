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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream dark:bg-forestblack"
      aria-hidden
    >
      <style>{`#wgc-loader{animation:wgcLoaderHide .6s ease 1.8s forwards}@keyframes wgcLoaderHide{to{opacity:0;visibility:hidden;pointer-events:none}}`}</style>
      <div className="relative flex h-28 w-28 items-center justify-center">
        {/* soft rotating ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 8%, #5A9E3F 55%, transparent 92%)',
            animation: 'wgcSpin 1.4s linear infinite',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))',
            opacity: 0.85,
          }}
        />
        {/* faint static track */}
        <span className="absolute inset-0 rounded-full border-[3px] border-forest/10 dark:border-white/10" />
        <img src="/logo.jpg" alt="" className="h-20 w-20 rounded-full object-cover" />
      </div>
      <style>{`@keyframes wgcSpin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
