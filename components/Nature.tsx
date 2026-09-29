'use client';
import { useEffect, useMemo, useState } from 'react';

// Floating leaves + pollen + fireflies + birds, respects reduced motion & dark mode
export default function NatureBackground({ density = 14 }: { density?: number }) {
  const leaves = useMemo(() => Array.from({ length: density }, (_, i) => ({
    left: (i * 73 + 11) % 100,
    delay: (i * 1.7) % 12,
    dur: 11 + ((i * 37) % 9),
    size: 14 + ((i * 29) % 18),
    rot: (i * 47) % 360,
    hue: i % 3 === 0 ? '#74B816' : i % 3 === 1 ? '#9CCC65' : '#2E7D32',
  })), [density]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty('--wind', `${Math.min(20, y / 200)}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* sun rays */}
      <div className="sun-rays absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 opacity-60 dark:opacity-20" />
      {/* birds */}
      <div className="absolute top-[14%] left-0 animate-fly opacity-70 dark:opacity-40">
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none"><path d="M4 14 Q 14 4 24 14 Q 34 4 44 14" stroke="currentColor" className="text-forest dark:text-leafaccent" strokeWidth="2.4" strokeLinecap="round"/><path d="M62 10 Q 70 3 78 10 Q 86 3 94 10" stroke="currentColor" className="text-forest dark:text-leafaccent" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
      {/* falling leaves */}
      {leaves.map((l, i) => (
        <span key={i} className="absolute -top-8 animate-fall" style={{ left: `${l.left}%`, animationDelay: `${l.delay}s`, animationDuration: `${l.dur}s` }}>
          <svg width={l.size} height={l.size} viewBox="0 0 24 24" style={{ transform: `rotate(${l.rot}deg)` }}>
            <path d="M12 2 C 18 7, 20 14, 12 22 C 4 14, 6 7, 12 2 Z" fill={l.hue} opacity=".75" />
            <path d="M12 3 L 12 21" stroke="#145A32" strokeWidth="1" opacity=".5" />
          </svg>
        </span>
      ))}
      {/* pollen / fireflies */}
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={`p${i}`} className="absolute rounded-full bg-fresh/60 animate-twinkle dark:bg-skyglow/80"
          style={{ left: `${(i * 61 + 7) % 100}%`, top: `${(i * 37 + 13) % 90}%`, width: i % 2 ? 5 : 3, height: i % 2 ? 5 : 3, animationDelay: `${(i % 7) * 0.5}s`, boxShadow: '0 0 12px 2px rgba(116,184,22,.5)' }} />
      ))}
    </div>
  );
}

export function Preloader() {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Primary dismiss + fail-safe so the loader can never trap the site
    const t1 = setTimeout(() => setFading(true), 2000);
    const t2 = setTimeout(() => setGone(true), 2800);
    const t3 = setTimeout(() => {
      const el = document.getElementById('wgc-loader');
      if (el) el.remove();
      setGone(true);
    }, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (gone) return null;
  return (
    <div id="wgc-loader" className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center bg-naturewhite dark:bg-forestblack transition-opacity duration-700 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex h-40 w-40 items-end justify-center">
        <svg viewBox="0 0 120 120" className="h-40 w-40">
          <ellipse cx="60" cy="104" rx="34" ry="8" fill="#5D4037" opacity=".25" />
          <path d="M60 104 C 60 80, 60 62, 60 44" stroke="#145A32" strokeWidth="4" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" from="0 80" to="80 0" dur="1.2s" fill="freeze" />
          </path>
          <g opacity="0"><animate attributeName="opacity" from="0" to="1" begin="1s" dur=".6s" fill="freeze" />
            <path d="M60 60 C 44 56, 34 44, 32 28 C 48 30, 58 42, 60 60 Z" fill="#74B816" />
            <path d="M60 50 C 76 46, 86 34, 88 18 C 72 20, 62 32, 60 50 Z" fill="#2E7D32" />
          </g>
          <circle cx="60" cy="106" r="6" fill="#5D4037"><animate attributeName="r" from="9" to="5" dur="1s" fill="freeze" /></circle>
        </svg>
      </div>
      <p className="mt-4 max-w-xs font-serif text-2xl leading-snug text-balance text-forest dark:text-leafaccent sm:max-w-none sm:text-3xl">Women for a Greener Cameroon</p>
      <p className="mt-2 max-w-xs text-[11px] font-bold uppercase tracking-[0.3em] text-forest/60 dark:text-white/50 sm:max-w-none">Restoring Nature · Empowering Communities</p>
    </div>
  );
}
