'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'fr';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (en: string, fr: string) => string }>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

const ThemeCtx = createContext<{ dark: boolean; toggle: () => void }>({ dark: false, toggle: () => {} });

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const l = localStorage.getItem('wgc-lang') as Lang | null;
      if (l === 'en' || l === 'fr') setLangState(l);
      const d = localStorage.getItem('wgc-theme');
      if (d === 'dark' || (!d && window.matchMedia('(prefers-color-scheme: dark)').matches && false)) {
        setDark(true);
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    try {
      localStorage.setItem('wgc-theme', dark ? 'dark' : 'light');
      localStorage.setItem('wgc-lang', lang);
    } catch {}
  }, [dark, lang]);

  // Lenis smooth scrolling
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let lenis: any = null;
    (async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
        const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
      } catch {}
    })();
    return () => { cancelAnimationFrame(raf); try { lenis?.destroy(); } catch {} };
  }, []);

  const setLang = (l: Lang) => setLangState(l);
  const t = (en: string, fr: string) => (lang === 'fr' ? fr : en);

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
        <a href="#main" className="skip-link">{lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
        {children}
      </ThemeCtx.Provider>
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
export const useTheme = () => useContext(ThemeCtx);
