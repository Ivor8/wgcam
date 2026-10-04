'use client';
import { useState } from 'react';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

export default function News() {
  const { lang } = useLang();
  const fr = lang === 'fr';
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const posts = fr
    ? [
        { c: 'Restauration', t: 'Plus de 20 arbres plantés à Nkolbisson et à Minkoa-Meyos', d: 'Nos premières plantations en zones dégradées, menées avec les communautés.', img: '/images/programs/restoration.jpg' },
        { c: 'Jeunesse', t: '13 filles formées comme éco-leaders', d: 'Deux ateliers autour de l’environnement, de la durabilité et de la confiance en soi.', img: '/images/programs/youth.jpg' },
        { c: 'Agriculteurs', t: '18 à 23 agriculteurs sensibilisés', d: 'Trois sensibilisations sur les associations arbres-cultures et les sols vivants.', img: '/images/programs/farmer-education.jpg' },
        { c: 'Technologie', t: 'Prototype WGC Farm App présenté aux agriculteurs', d: 'Leurs retours nous aident à concevoir une plateforme adaptée à leurs besoins.', img: '/images/gallery/g13.jpg' },
        { c: 'Écoute', t: 'Des échanges réguliers avec les agriculteurs', d: 'Les agriculteurs partagent leurs retours sur des solutions durables adaptées à leurs parcelles.', img: '/images/gallery/g14.jpg' },
        { c: 'Agroforesterie', t: 'Arbres et cultures : la démonstration qui convainc', d: 'Voir pour comprendre : ombre, sols protégés et revenus diversifiés.', img: '/images/programs/agroforestry.jpg' },
      ]
    : [
        { c: 'Restoration', t: '20+ trees planted in Nkolbisson and Minkoa-Meyos', d: 'Our first plantings on degraded land, carried out with communities.', img: '/images/programs/restoration.jpg' },
        { c: 'Youth', t: '13 girls trained as eco-leaders', d: 'Two workshops on the environment, sustainability and self-confidence.', img: '/images/programs/youth.jpg' },
        { c: 'Farmers', t: '18–23 farmers engaged', d: 'Three outreaches on tree-crop combinations and living soils.', img: '/images/programs/farmer-education.jpg' },
        { c: 'Technology', t: 'WGC Farm App prototype shown to farmers', d: 'Their feedback helps us design a platform around their needs.', img: '/images/gallery/g13.jpg' },
        { c: 'Listening', t: 'Regular exchanges with farmers', d: 'Farmers share feedback on sustainable solutions suited to their farms.', img: '/images/gallery/g14.jpg' },
        { c: 'Agroforestry', t: 'Trees and crops: the demonstration that convinces', d: 'Seeing to understand: shade, protected soils and diverse income.', img: '/images/programs/agroforestry.jpg' },
      ];

  const cats = ['All', ...Array.from(new Set(posts.map((p) => p.c)))];
  const list = posts.filter((p) => (cat === 'All' || p.c === cat) && (p.t + p.d).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Actualités' : 'News'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Nouvelles du terrain' : 'News from the field'}</h1>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <div className="flex flex-wrap gap-2">
          <label className="flex min-w-52 flex-1 items-center gap-2 rounded-full border border-forest/20 bg-white px-5 py-3 text-sm dark:border-white/15 dark:bg-carddark">
            <FiSearch size={16} className="shrink-0 opacity-60" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={fr ? 'Rechercher un article' : 'Search articles'} aria-label="Search" className="w-full bg-transparent focus:outline-none" />
          </label>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2.5 text-sm font-semibold ${cat === c ? 'bg-forest text-white' : 'border border-forest/20 dark:border-white/15'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <article className="card-clean h-full overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-forest/60 dark:text-white/55">{p.c}</p>
                  <h2 className="mt-2 font-serif text-xl font-semibold leading-snug">{p.t}</h2>
                  <p className="mt-2 text-sm text-foresttext/65 dark:text-white/60">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-center text-sm">{fr ? 'Aucun article trouvé. Essayez un autre mot.' : 'No articles found. Try another word.'}</p>}
        <div className="mt-10">
          <a href="/contact" className="btn-secondary">{fr ? 'Nous contacter' : 'Contact us'} <FiArrowRight size={16} /></a>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
}
