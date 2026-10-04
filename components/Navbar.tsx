'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiArrowRight } from 'react-icons/fi';
import { Leaf } from 'lucide-react';
import { useLang, useTheme } from './Providers';

const links = [
  { href: '/', en: 'Home', fr: 'Accueil' },
  { href: '/about', en: 'About', fr: 'À propos' },
  { href: '/programmes', en: 'Programmes', fr: 'Programmes' },
  { href: '/impact', en: 'Impact', fr: 'Impact' },
  { href: '/team', en: 'Team', fr: 'Équipe' },
  { href: '/gallery', en: 'Gallery', fr: 'Galerie' },
  { href: '/news', en: 'News', fr: 'Actualités' },
  { href: '/sdgs', en: 'SDGs', fr: 'ODD' },
  { href: '/contact', en: 'Contact', fr: 'Contact' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <nav aria-label="Primary" className="glass mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-[22px] border border-forest/15 bg-white/70 px-3 py-2.5 shadow-glow dark:border-white/10 dark:bg-jungle/70 dark:shadow-night sm:px-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="WGC home">
            <img src="/logo.jpg" alt="WGC logo" className="h-10 w-10 rounded-full object-cover ring-2 ring-fresh/60" width={40} height={40} />
            <span className="leading-tight">
              <span className="block font-serif text-base font-bold text-forest dark:text-white sm:text-lg">Women for a Greener Cameroon</span>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-leaf sm:block">Restoring Nature · Empowering Communities</span>
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {links.slice(0, 7).map((l) => (
              <Link key={l.href} href={l.href} className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-fresh/15 ${path === l.href ? 'bg-forest text-white dark:bg-leafaccent dark:text-forestblack' : 'text-foresttext dark:text-white/85'}`}>
                {lang === 'fr' ? l.fr : l.en}
              </Link>
            ))}
            <Link href="/get-involved" className="btn-shimmer ml-1 rounded-full bg-gradient-to-r from-forest to-fresh px-4 py-2 text-sm font-bold text-white shadow-glow">{t('Join Us', 'Rejoignez-nous')}</Link>
          </div>
          <div className="flex items-center gap-1.5">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label="Toggle language" className="rounded-full border border-forest/20 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-forest hover:bg-fresh/15 dark:border-white/15 dark:text-leafaccent">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="rounded-full border border-forest/20 p-2 text-base hover:bg-fresh/15 dark:border-white/15">
              <span aria-hidden className="block">{dark ? <FiSun size={16} /> : <FiMoon size={16} />}</span>
            </button>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-full bg-forest p-2.5 text-white lg:hidden dark:bg-leafaccent dark:text-forestblack">
              <span aria-hidden className="block">{open ? <FiX size={18} /> : <FiMenu size={18} />}</span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }} animate={{ opacity: 1, clipPath: 'circle(150% at 92% 6%)' }} exit={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-gradient-to-b from-forest via-jungle to-forestblack px-6 pb-10 pt-24 text-white lg:hidden">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-leafaccent"><Leaf size={14} aria-hidden /> {lang === 'fr' ? 'Menu de la forêt' : 'Forest menu'}</p>
            <div className="mt-4 grid gap-1 overflow-y-auto">
              {[...links, { href: '/get-involved', en: 'Get Involved', fr: 'S’impliquer' }, { href: '/faq', en: 'FAQ', fr: 'FAQ' }].map((l, i) => (
                <motion.div key={l.href} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-2xl px-4 py-3 font-serif text-2xl ${path === l.href ? 'bg-white/15' : ''}`}>
                    {lang === 'fr' ? l.fr : l.en} <FiArrowRight size={20} className="text-leafaccent" aria-hidden />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-fresh py-3 text-center font-bold text-forestblack">{t('Contact Us', 'Contactez-nous')}</Link>
              <Link href="/get-involved" onClick={() => setOpen(false)} className="flex-1 rounded-full border border-white/30 py-3 text-center font-bold">{t('Donate', 'Faire un don')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
