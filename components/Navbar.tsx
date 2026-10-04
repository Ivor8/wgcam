'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { useLang, useTheme } from './Providers';

const links = [
  { href: '/', en: 'Home', fr: 'Accueil' },
  { href: '/about', en: 'About', fr: 'À propos' },
  { href: '/programmes', en: 'Programmes', fr: 'Programmes' },
  { href: '/impact', en: 'Impact', fr: 'Impact' },
  { href: '/team', en: 'Team', fr: 'Équipe' },
  { href: '/contact', en: 'Contact', fr: 'Contact' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const fr = lang === 'fr';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* ============ TOP BAR — white information area ============ */}
        <div className="bg-white dark:bg-forestblack">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="WGC home">
              <img
                src="/logo.jpg"
                alt="Women for a Greener Cameroon logo"
                className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-forest/15"
                width={44}
                height={44}
              />
              <span className="leading-tight">
                <span className="block font-serif text-[19px] font-semibold text-forest dark:text-white sm:hidden">
                  WGCam
                </span>
                <span className="hidden font-serif text-[17px] font-semibold text-forest dark:text-white sm:block sm:text-lg">
                  Women for a Greener Cameroon
                </span>
                <span className="hidden text-[11px] font-medium tracking-wide text-forest/60 dark:text-white/55 sm:block">
                  {fr ? 'Restaurer la nature, autonomiser les communautés' : 'Restoring nature, empowering communities'}
                </span>
              </span>
            </Link>

            {/* Contact blocks — desktop */}
            <div className="hidden items-stretch gap-5 lg:flex" aria-label={fr ? 'Informations de contact' : 'Contact information'}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-forest dark:bg-white/10 dark:text-white">
                  <FiMapPin size={17} />
                </span>
                <span className="leading-snug">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-forest/50 dark:text-white/50">
                    {fr ? 'Où nous sommes' : 'Find us'}
                  </span>
                  <span className="block text-sm font-semibold text-foresttext dark:text-white">
                    Nkolbisson · Minkoa-Meyos
                  </span>
                </span>
              </div>

              <span aria-hidden className="w-px bg-forest/10 dark:bg-white/10" />

              <a href="tel:+237652595666" className="flex items-center gap-3 transition hover:opacity-80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-forest dark:bg-white/10 dark:text-white">
                  <FiPhone size={17} />
                </span>
                <span className="leading-snug">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-forest/50 dark:text-white/50">
                    {fr ? 'Appelez-nous' : 'Call us'}
                  </span>
                  <span className="block text-sm font-semibold text-foresttext dark:text-white">+237 6 52 59 56 66</span>
                </span>
              </a>

              <span aria-hidden className="w-px bg-forest/10 dark:bg-white/10" />

              {/* Controls: WhatsApp + language + theme */}
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/237652595666"
                  aria-label="Chat on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white transition hover:bg-pine"
                >
                  <FiMessageCircle size={17} />
                </a>
                <button
                  onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                  aria-label="Switch language"
                  className="h-10 rounded-full border border-forest/20 px-4 text-xs font-bold tracking-widest text-forest transition hover:bg-sage dark:border-white/20 dark:text-white"
                >
                  {lang === 'en' ? 'FR' : 'EN'}
                </button>
                <button
                  onClick={toggle}
                  aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-sage dark:border-white/20 dark:text-white"
                >
                  {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
                </button>
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                aria-label="Switch language"
                className="rounded-full border border-forest/20 px-3 py-1.5 text-xs font-bold tracking-widest text-forest dark:border-white/20 dark:text-white"
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <button
                onClick={toggle}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="rounded-full border border-forest/20 p-2 text-forest dark:border-white/20 dark:text-white"
              >
                {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="rounded-full bg-forest p-2.5 text-white dark:bg-white dark:text-forestblack"
              >
                {open ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM BAR — cream navigation area ============ */}
        <div className="relative bg-cream dark:bg-jungle">
          {/* desktop links */}
          <nav aria-label="Primary" className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:flex">
            <div className="flex items-center gap-7">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`link-underline text-[15px] font-semibold transition ${
                    path === l.href
                      ? 'active text-forest dark:text-white'
                      : 'text-foresttext/65 hover:text-forest dark:text-white/70 dark:hover:text-white'
                  }`}
                >
                  {fr ? l.fr : l.en}
                </Link>
              ))}
            </div>
            <Link href="/get-involved" className="btn-primary !px-6 !py-2.5 text-sm">
              {t('Get involved', 'S’impliquer')}
            </Link>
          </nav>
          {/* slim cream band on mobile so the torn edge still reads */}
          <div aria-hidden className="h-2.5 lg:hidden" />

          {/* Mobile dropdown */}
          {open && (
            <div className="border-t border-forest/10 bg-cream px-5 pb-6 pt-3 lg:hidden dark:border-white/10 dark:bg-jungle">
              <div className="grid gap-1">
                {[...links, { href: '/get-involved', en: 'Get involved', fr: 'S’impliquer' }].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-3 text-[17px] font-medium ${
                      path === l.href
                        ? 'bg-forest/10 text-forest dark:bg-white/10 dark:text-white'
                        : 'text-foresttext/80 dark:text-white/80'
                    }`}
                  >
                    {fr ? l.fr : l.en}
                  </Link>
                ))}
                <a
                  href="tel:+237652595666"
                  className="mt-2 flex items-center gap-2 rounded-xl bg-forest/5 px-3 py-3 text-[15px] font-semibold text-forest dark:bg-white/5 dark:text-white"
                >
                  <FiPhone size={16} /> +237 6 52 59 56 66
                </a>
              </div>
            </div>
          )}

          {/* ===== Organic torn / painted bottom edge ===== */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-[24px] left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="block h-[26px] w-full">
              {/* soft shadow wash so the cream lifts off the photo */}
              <path
                d="M0,0 H1440 V10 C1390,13 1365,9 1320,14 C1275,19 1245,12 1200,15 C1155,18 1125,22 1080,17 C1035,12 1005,8 960,13 C915,18 885,23 840,18 C795,13 765,9 720,14 C675,19 645,23 600,17 C555,11 525,7 480,12 C435,17 405,22 360,17 C315,12 285,8 240,13 C195,18 165,21 120,15 C80,10 40,8 0,12 Z"
                className="fill-forest/10 dark:fill-black/40"
                transform="translate(0,3)"
              />
              {/* main cream paint stroke — deliberately irregular, non-repeating */}
              <path
                d="M0,0 H1440 V9 C1405,11 1380,7 1345,12 C1310,17 1280,10 1240,14 C1200,18 1170,21 1130,16 C1090,11 1060,7 1020,12 C980,17 950,22 910,17 C870,12 845,8 805,12 C765,16 735,21 695,17 C655,13 625,8 585,12 C545,16 515,21 475,17 C435,13 405,8 365,12 C325,16 295,20 255,15 C215,10 185,7 145,11 C105,15 65,12 0,10 Z"
                className="fill-cream dark:fill-jungle"
              />
              {/* small dry-brush flecks for a hand-painted feel */}
              <g className="fill-cream dark:fill-jungle" opacity="0.9">
                <ellipse cx="210" cy="16" rx="26" ry="3.2" />
                <ellipse cx="660" cy="19" rx="34" ry="3.6" />
                <ellipse cx="1080" cy="18" rx="28" ry="3.2" />
                <ellipse cx="1330" cy="15" rx="20" ry="2.6" />
              </g>
            </svg>
          </div>
        </div>
      </header>

      {/* spacer for fixed header: mobile top-bar only / desktop two tiers */}
      <div aria-hidden className="h-[76px] lg:h-[140px]" />
    </>
  );
}
