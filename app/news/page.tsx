'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

export default function News() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const [q, setQ] = useState(''); const [cat, setCat] = useState('All');
  const posts = fr ? [
    { c: 'Restauration', t: '20+ arbres à Nkolbisson et Minkoa-Meyos', d: 'Premières plantations en zones dégradées avec les communautés.', img: '/images/programs/restoration.jpg' },
    { c: 'Jeunesse', t: '13 filles deviennent éco-leaders', d: 'Deux ateliers : environnement, durabilité, confiance.', img: '/images/programs/youth.jpg' },
    { c: 'Agriculteurs', t: '18–23 agriculteurs sensibilisés', d: 'Trois outreaches : arbres-cultures et sols vivants.', img: '/images/programs/farmer-education.jpg' },
    { c: 'Technologie', t: 'Prototype WGC Farm App testé', d: 'Présenté aux agriculteurs : leurs retours dessinent l’app.', img: '/images/gallery/g13.jpg' },
    { c: 'Écoute', t: 'Sessions de retours avec les agriculteurs', d: 'Les agriculteurs partagent leurs retours sur des solutions durables adaptées à leurs exploitations.', img: '/images/gallery/g14.jpg' },
    { c: 'Agroforesterie', t: 'Arbres + cultures : la démo qui convainc', d: 'Voir pour croire : ombre, sols frais, revenus diversifiés.', img: '/images/programs/agroforestry.jpg' },
  ] : [
    { c: 'Restoration', t: '20+ trees in Nkolbisson & Minkoa-Meyos', d: 'First plantings on degraded land with communities.', img: '/images/programs/restoration.jpg' },
    { c: 'Youth', t: '13 girls become eco-leaders', d: 'Two workshops: environment, sustainability, confidence.', img: '/images/programs/youth.jpg' },
    { c: 'Farmers', t: '18–23 farmers engaged', d: 'Three outreaches: tree-crops and living soils.', img: '/images/programs/farmer-education.jpg' },
    { c: 'Technology', t: 'WGC Farm App prototype tested', d: 'Shown to farmers: their feedback shapes the app.', img: '/images/gallery/g13.jpg' },
    { c: 'Listening', t: 'Feedback sessions with farmers', d: 'Farmers share feedback on sustainable solutions suited to their farms.', img: '/images/gallery/g14.jpg' },
    { c: 'Agroforestry', t: 'Trees + crops: the demo that convinces', d: 'Seeing is believing: shade, cool soils, diverse income.', img: '/images/programs/agroforestry.jpg' },
  ];
  const cats = ['All', ...Array.from(new Set(posts.map((p) => p.c)))];
  const list = posts.filter((p) => (cat === 'All' || p.c === cat) && (p.t + p.d).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="pt-28"><div className="mx-auto max-w-7xl px-5">
      <SectionHeading kicker={fr ? 'Actualités' : 'News'} title={fr ? 'Nouvelles de la forêt' : 'News from the forest'} />
      <div className="mt-8 flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={fr ? '🔍 Rechercher…' : '🔍 Search…'} aria-label="Search" className="min-w-52 flex-1 rounded-full border border-forest/20 bg-white px-5 py-3 text-sm dark:border-white/15 dark:bg-carddark" />
        {cats.map((c) => (<button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2.5 text-sm font-bold ${cat === c ? 'bg-forest text-white' : 'bg-fog text-forest dark:bg-white/10 dark:text-white'}`}>{c}</button>))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (<Reveal key={i} delay={(i % 3) * 0.07}><article className="h-full overflow-hidden rounded-3xl border border-forest/15 bg-white dark:border-white/10 dark:bg-carddark"><img src={p.img} alt="" loading="lazy" className="h-48 w-full object-cover" /><div className="p-6"><span className="rounded-full bg-fresh/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-leaf">{p.c}</span><h2 className="mt-2 font-serif text-2xl font-bold">{p.t}</h2><p className="mt-1 text-sm text-foresttext/70 dark:text-white/65">{p.d}</p><span className="mt-3 inline-block text-sm font-bold text-leaf">→ {fr ? 'Lire' : 'Read'}</span></div></article></Reveal>))}
      </div>
      {list.length === 0 && <p className="mt-10 text-center text-sm">🌱 {fr ? 'Aucun article — essayez un autre mot.' : 'No articles — try another word.'}</p>}
    </div><div className="h-16" /></div>
  );
}
