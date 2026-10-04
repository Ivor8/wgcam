'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { useLang } from './Providers';
import { openWhatsApp, whatsappLink } from './ui';

export default function Footer() {
  const { lang, setLang } = useLang();
  const fr = lang === 'fr';
  const [nlDone, setNlDone] = useState(false);
  const [nlUrl, setNlUrl] = useState('');

  return (
    <footer className="mt-24 border-t border-forest/10 bg-white dark:border-white/10 dark:bg-jungle" aria-label="Footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="WGC logo" className="h-11 w-11 rounded-full object-cover" />
            <p className="font-serif text-lg font-semibold leading-snug text-forest dark:text-white">
              Women for a<br />Greener Cameroon
            </p>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-foresttext/65 dark:text-white/65">
            {fr
              ? 'Une initiative environnementale dirigée par des jeunes qui travaille avec les communautés pour restaurer la nature et soutenir les agriculteurs au Cameroun.'
              : 'A youth-led environmental initiative working with communities to restore nature and support farmers in Cameroon.'}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-forest/60 dark:text-white/50">
            {fr ? 'Naviguer' : 'Explore'}
          </p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {[
              ['/', fr ? 'Accueil' : 'Home'],
              ['/about', fr ? 'À propos' : 'About'],
              ['/programmes', 'Programmes'],
              ['/impact', 'Impact'],
              ['/team', fr ? 'Équipe' : 'Team'],
              ['/gallery', fr ? 'Galerie' : 'Gallery'],
              ['/news', fr ? 'Actualités' : 'News'],
              ['/faq', 'FAQ'],
            ].map(([h, l]) => (
              <li key={h}>
                <Link href={h} className="text-foresttext/75 hover:text-forest hover:underline dark:text-white/70 dark:hover:text-white">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-forest/60 dark:text-white/50">Contact</p>
          <ul className="mt-4 space-y-3 text-[15px] text-foresttext/75 dark:text-white/70">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 shrink-0" size={16} />
              <span>Nkolbisson · Minkoa-Meyos · Cameroon</span>
            </li>
            <li>
              <a href="tel:+237652595666" className="flex items-center gap-2 hover:underline">
                <FiPhone size={16} /> +237 6 52 59 56 66
              </a>
            </li>
            <li>
              <a href="https://wa.me/237652595666" className="flex items-center gap-2 hover:underline">
                <FiMessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>
          {nlDone ? (
            <p className="mt-5 rounded-xl bg-sage p-3 text-sm font-medium dark:bg-white/10">
              {fr ? 'Merci ! Touchez ci-dessous pour confirmer dans WhatsApp.' : 'Thank you! Tap below to confirm in WhatsApp.'}{' '}
              {nlUrl && (
                <a href={nlUrl} target="_blank" rel="noopener" className="font-bold underline">
                  WhatsApp
                </a>
              )}
            </p>
          ) : (
          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }
              const email = String(new FormData(form).get('newsletter-email') || '');
              const text = fr
                ? `Inscription infolettre — site WGC\nEmail: ${email}`
                : `Newsletter signup — WGC website\nEmail: ${email}`;
              setNlUrl(whatsappLink(text));
              openWhatsApp(text);
              setNlDone(true);
            }}
          >
            <label htmlFor="nl" className="text-sm font-medium">
              {fr ? 'Recevoir nos nouvelles' : 'Get our updates'}
            </label>
            <div className="mt-2 flex overflow-hidden rounded-full border border-forest/15 bg-cream p-1 dark:border-white/15 dark:bg-forestblack">
              <input id="nl" name="newsletter-email" type="email" required placeholder="you@email.com" className="w-full bg-transparent px-4 text-sm focus:outline-none" />
              <button className="flex shrink-0 items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white" aria-label="Subscribe via WhatsApp">
                <FiMessageCircle size={15} /> OK
              </button>
            </div>
          </form>
          )}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-forest/60 dark:text-white/50">
            {fr ? 'Langue' : 'Language'}
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setLang('en')}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${!fr ? 'bg-forest text-white' : 'border border-forest/20 dark:border-white/20'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${fr ? 'bg-forest text-white' : 'border border-forest/20 dark:border-white/20'}`}
            >
              FR
            </button>
          </div>
          <p className="mt-6 text-sm text-foresttext/60 dark:text-white/55">SDG 2 · SDG 13 · SDG 15</p>
        </div>
      </div>
      <div className="border-t border-forest/10 py-6 text-center text-sm text-foresttext/55 dark:border-white/10 dark:text-white/50">
        © Women for a Greener Cameroon (WGC) · Nkolbisson · Minkoa-Meyos
      </div>
      <a
        href="https://wa.me/237652595666"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-card transition hover:scale-105"
      >
        <FiMessageCircle size={20} />
      </a>
    </footer>
  );
}
