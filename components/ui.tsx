'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Reveal({ children, delay = 0, y = 36, className = '' }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Fail-safe: never leave content hidden (e.g. broken HMR / observer never fires)
    const failsafe = setTimeout(() => setVisible(true), 2500 + delay * 1000);
    if (!ref) return () => clearTimeout(failsafe);
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return () => clearTimeout(failsafe);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          io.disconnect();
          clearTimeout(failsafe);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(ref);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, [ref, delay]);

  // SSR / no-JS: always visible. Only hide after mount until revealed.
  const hidden = mounted && !visible;
  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${reduce ? 0 : y}px)` : 'translateY(0)',
        filter: hidden ? 'blur(6px)' : 'blur(0px)',
        transition: 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1), filter .8s',
        willChange: hidden ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ kicker, title, lead, align = 'center' }: { kicker: string; title: React.ReactNode; lead?: string; align?: 'center' | 'left' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-forest dark:border-white/10 dark:bg-white/5 dark:text-leafaccent">
          <span className="inline-block h-2 w-2 rounded-full bg-fresh animate-pulse" aria-hidden /> {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-4xl leading-[1.05] font-serif font-semibold text-balance text-foresttext dark:text-white sm:text-5xl">
          <span className="vine-underline">{title}
            <svg viewBox="0 0 300 18" aria-hidden="true" preserveAspectRatio="none"><path d="M4 12 C 60 4, 120 16, 180 9 S 270 6, 296 10" fill="none" stroke="#74B816" strokeWidth="3" strokeLinecap="round" /><circle cx="252" cy="7" r="5" fill="#74B816" opacity=".7" /></svg>
          </span>
        </h2>
      </Reveal>
      {lead && <Reveal delay={0.16}><p className="mt-5 text-base sm:text-lg leading-relaxed text-foresttext/70 dark:text-white/70">{lead}</p></Reveal>}
    </div>
  );
}

export function Counter({ to, suffix = '', label, sub }: { to: number; suffix?: string; label: string; sub?: string }) {
  const [n, setN] = useState(0);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now(); const dur = 1800;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        setN(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, to]);
  return (
    <div ref={setRef} className="group relative rounded-[28px_80px_28px_80px] border border-forest/15 bg-white/80 p-6 text-center shadow-glow backdrop-blur transition-transform duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-carddark/80 dark:shadow-night">
      <div className="mx-auto -mt-11 mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fresh to-forest text-xl shadow-glow" aria-hidden>🌱</div>
      <div className="font-serif text-4xl font-bold text-forest dark:text-leafaccent sm:text-5xl" aria-live="polite">{n.toLocaleString()}{suffix}</div>
      <div className="mt-1 text-sm font-bold uppercase tracking-widest text-earth dark:text-white/70">{label}</div>
      {sub && <div className="mt-1 text-xs text-foresttext/60 dark:text-white/50">{sub}</div>}
    </div>
  );
}

export function RootDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className={`pointer-events-none relative h-16 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 64" className="h-full w-full" preserveAspectRatio="none">
        <path d="M0 32 C 180 8, 320 56, 520 30 S 860 8, 1080 34 S 1300 52, 1440 26" fill="none" stroke="#74B816" strokeWidth="3" strokeLinecap="round" opacity=".6" />
        <path d="M0 44 C 220 20, 420 62, 640 40 S 1020 18, 1240 44 S 1380 56, 1440 40" fill="none" stroke="#145A32" strokeWidth="2" strokeLinecap="round" opacity=".45" />
        <circle cx="240" cy="26" r="7" fill="#9CCC65" opacity=".8" /><circle cx="890" cy="30" r="5" fill="#74B816" opacity=".8" /><circle cx="1180" cy="38" r="6" fill="#2E7D32" opacity=".6" />
      </svg>
    </div>
  );
}

// Ripple-on-click wrapper
export function RippleButton({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={(e) => {
        const el = e.currentTarget; const r = el.getBoundingClientRect();
        const s = document.createElement('span');
        s.className = 'ripple-ring';
        const size = Math.max(r.width, r.height);
        s.style.width = s.style.height = size + 'px';
        s.style.left = e.clientX - r.left - size / 2 + 'px';
        s.style.top = e.clientY - r.top - size / 2 + 'px';
        el.appendChild(s); setTimeout(() => s.remove(), 850);
        rest.onClick?.(e as any);
      }}
      {...rest}
    >{children}</button>
  );
}
