'use client';
import Link from 'next/link';
import { useLang } from './Providers';

export default function Footer() {
  const { lang, setLang } = useLang();
  const fr = lang === 'fr';
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-b from-forest via-[#0d3d22] to-forestblack text-white" aria-label="Footer">
      <svg viewBox="0 0 1440 90" className="block w-full text-naturewhite dark:text-forestblack" aria-hidden preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0 90 L0 55 C 240 10, 420 85, 720 40 S 1180 5, 1440 55 L1440 90 Z" fill="currentColor" opacity="0" />
        <path d="M0 0 L0 0 M0 90 L0 55 C 240 10, 420 85, 720 40 S 1180 5, 1440 55 L1440 90 Z" fill="#F9FFF9" className="dark:fill-[#081C15]" />
      </svg>
      {/* roots */}
      <svg viewBox="0 0 1440 70" className="mx-auto w-full max-w-6xl opacity-40" aria-hidden>
        <path d="M720 0 C 700 25, 640 30, 600 55 M720 0 C 740 25, 800 30, 840 55 M720 0 C 720 28, 720 40, 720 62 M720 0 C 680 22, 560 28, 480 50 M720 0 C 760 22, 880 28, 960 50" stroke="#74B816" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="WGC logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-fresh" />
            <p className="font-serif text-xl font-bold">Women for a Greener Cameroon</p>
          </div>
          <p className="mt-3 text-sm text-white/75">{fr ? 'Restaurer la nature. Autonomiser les communautés. Agroforesterie, éducation des agriculteurs, leadership éco des jeunes et restauration.' : 'Restoring nature, empowering communities. Agroforestry, farmer education, youth eco-leadership and restoration across Cameroon.'}</p>
          <div className="mt-4 flex gap-2" aria-label="Social links">
            {['𝕏', 'f', 'in', '◉', '▶'].map((s, i) => (
              <a key={i} href="#" aria-label={`Social link ${i + 1}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition hover:scale-110 hover:bg-fresh hover:text-forestblack">{s}</a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer quick links">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-leafaccent">{fr ? 'Liens rapides' : 'Quick links'}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[['/about', fr ? 'À propos' : 'About'], ['/programmes', 'Programmes'], ['/impact', 'Impact'], ['/team', fr ? 'Équipe' : 'Team'], ['/gallery', fr ? 'Galerie' : 'Gallery'], ['/news', fr ? 'Actualités' : 'News'], ['/sdgs', fr ? 'ODD' : 'SDGs'], ['/faq', 'FAQ']].map(([h, l]) => (
              <li key={h}><Link href={h} className="text-white/80 hover:text-fresh hover:underline">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-leafaccent">{fr ? 'Contact' : 'Contact'}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>📍 Yaoundé, Cameroon — Nkolbisson · Minkoa-Meyos</li>
            <li>✉️ hello@wgc-cameroon.org</li>
            <li>☎️ +237 6 XX XX XX XX</li>
            <li>💬 WhatsApp {fr ? 'disponible' : 'available'}</li>
          </ul>
          <form className="mt-4" onSubmit={(e) => { e.preventDefault(); const f = e.currentTarget; f.innerHTML = `<p class='bloom rounded-2xl bg-fresh/20 p-3 text-sm font-bold text-fresh'>🌸 ${fr ? 'Merci ! Bienvenue dans la forêt.' : 'Thank you! Welcome to the forest.'}</p>`; }}>
            <label htmlFor="nl" className="text-xs font-bold uppercase tracking-widest text-white/60">{fr ? 'Infolettre' : 'Newsletter'}</label>
            <div className="mt-2 flex overflow-hidden rounded-full bg-white/10 p-1 backdrop-blur">
              <input id="nl" type="email" required placeholder={fr ? 'votre@email.com' : 'you@email.com'} className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/40 focus:outline-none" />
              <button className="rounded-full bg-fresh px-4 py-2 text-sm font-bold text-forestblack" aria-label="Subscribe">🌱</button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-leafaccent">{fr ? 'Langue & Thème' : 'Language & Theme'}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setLang('en')} className={`rounded-full px-4 py-2 text-sm font-bold ${!fr ? 'bg-fresh text-forestblack' : 'bg-white/10'}`}>EN</button>
            <button onClick={() => setLang('fr')} className={`rounded-full px-4 py-2 text-sm font-bold ${fr ? 'bg-fresh text-forestblack' : 'bg-white/10'}`}>FR</button>
          </div>
          <div className="mt-4 flex gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1.5">🌱 SDG 2</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">🌍 SDG 13</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">🌳 SDG 15</span>
          </div>
          <a href="#top" className="mt-6 inline-flex items-center gap-2 rounded-full border border-fresh/50 px-4 py-2 text-sm font-bold text-fresh hover:bg-fresh hover:text-forestblack">🌳 {fr ? 'Retour au sommet' : 'Back to top — grows a tree'}</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">© 2026 Women for a Greener Cameroon (WGC) · {fr ? 'Organisation environnementale dirigée par des jeunes — Cameroun' : 'Youth-led environmental NGO — Cameroon'} · Nkolbisson · Minkoa-Meyos</div>
      <a href="https://wa.me/237600000000" aria-label="WhatsApp chat" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-glow-lg transition hover:scale-110">💬</a>
    </footer>
  );
}
