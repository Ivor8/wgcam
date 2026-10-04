'use client';
import { useEffect, useRef, useState } from 'react';

/* Gentle, once-only reveal. Visible by default (SSR / no-JS safe).
   Only hides after mount until revealed, with unconditional failsafe. */
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    // If anything is off (no element, reduced motion, no observer) — show immediately
    if (!el) {
      setVisible(true);
      return;
    }
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setVisible(true);
        return;
      }
    } catch {}
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    // Unconditional failsafe: never leave content hidden
    const failsafe = window.setTimeout(() => setVisible(true), 1800 + delay * 1000);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay * 1000);
          io.disconnect();
          window.clearTimeout(failsafe);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  const hidden = mounted && !visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'translateY(16px)' : 'translateY(0)',
        transition: 'opacity .7s ease, transform .7s ease',
        willChange: hidden ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({
  kicker,
  title,
  lead,
  align = 'left',
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="mt-4 text-3xl font-medium text-foresttext dark:text-white sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-foresttext/70 dark:text-white/70">{lead}</p>}
    </div>
  );
}

export function Counter({ to, suffix = '', label, sub }: { to: number; suffix?: string; label: string; sub?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(to); // start at final value — SSR / no-JS safe, then animate from 0 on view
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch {
      return;
    }
    if (typeof IntersectionObserver === 'undefined') return;
    if (typeof window === 'undefined') return;

    let done = false;
    let raf = 0;
    const run = () => {
      if (done) return;
      done = true;
      setStarted(true);
      setN(0);
      const start = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(to * eased));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setN(to); // settle exactly on the target
        }
      };
      raf = requestAnimationFrame(tick);
    };
    // Failsafe: never leave the number stuck below its target
    const failsafe = window.setTimeout(() => {
      if (!done) {
        done = true;
        setN(to);
      }
    }, 5000);
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        run();
        io.disconnect();
        window.clearTimeout(failsafe);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      cancelAnimationFrame(raf);
    };
  }, [to]);

  void started;

  return (
    <div ref={ref} className="border-l-2 border-forest/20 pl-5 dark:border-white/15">
      <div className="font-serif text-4xl text-forest dark:text-white sm:text-5xl" aria-live="polite">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-foresttext dark:text-white">{label}</div>
      {sub && <div className="mt-1 text-sm text-foresttext/60 dark:text-white/60">{sub}</div>}
    </div>
  );
}

/* Thin, quiet divider — replaces the old vine divider */
export function RootDivider() {
  return <div aria-hidden className="mx-auto my-0 h-px max-w-7xl bg-forest/10 dark:bg-white/10" />;
}
