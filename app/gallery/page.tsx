'use client';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

type Shot = { src: string; en: string; fr: string };

const shots: Shot[] = [
  { src: '/images/gallery/g01.jpg', en: 'Nursery seedlings in recycled containers', fr: 'Pépinière : jeunes plants en contenants recyclés' },
  { src: '/images/gallery/g02.jpg', en: 'Team holding seedlings at the nursery', fr: 'L’équipe et ses jeunes plants à la pépinière' },
  { src: '/images/gallery/g03.jpg', en: 'Planting a seedling in the field', fr: 'Plantation d’un jeune arbre au champ' },
  { src: '/images/gallery/g04.jpg', en: 'Carrying a seedling out to the field', fr: 'Transport d’un jeune plant vers le champ' },
  { src: '/images/gallery/g05.jpg', en: 'Planting together', fr: 'Plantation collective' },
  { src: '/images/gallery/g06.jpg', en: 'Visit to IRAD, agricultural research institute', fr: 'Visite à l’IRAD, institut de recherche agricole' },
  { src: '/images/gallery/g07.jpg', en: 'Rows of nursery seedlings', fr: 'Rangées de jeunes plants en pépinière' },
  { src: '/images/gallery/g08.jpg', en: 'At the IRAD head office', fr: 'Devant la direction générale de l’IRAD' },
  { src: '/images/gallery/g09.jpg', en: 'Tending nursery seedlings', fr: 'Soin des jeunes plants en pépinière' },
  { src: '/images/gallery/g10.jpg', en: 'At the nursery', fr: 'À la pépinière' },
  { src: '/images/gallery/g11.jpg', en: 'Team at the nursery', fr: 'L’équipe à la pépinière' },
  { src: '/images/gallery/g12.jpg', en: 'With a farmer at the nursery', fr: 'Avec un agriculteur à la pépinière' },
  { src: '/images/gallery/g13.jpg', en: 'Showing digital tools to a farmer in the field', fr: 'Démonstration d’outils numériques à un agriculteur' },
  { src: '/images/gallery/g14.jpg', en: 'Outreach discussion with a woman farmer', fr: 'Échange de sensibilisation avec une agricultrice' },
  { src: '/images/gallery/g15.jpg', en: 'Recycled-container nursery, close up', fr: 'Pépinière en contenants recyclés, en détail' },
  { src: '/images/gallery/g16.jpg', en: 'Community outreach visit', fr: 'Visite de sensibilisation communautaire' },
  { src: '/images/gallery/g17.jpg', en: 'Field outreach', fr: 'Sensibilisation sur le terrain' },
  { src: '/images/gallery/g18.jpg', en: 'Recycled-container nursery wall', fr: 'Mur de pépinière en contenants recyclés' },
];

export default function Gallery() {
  const { lang } = useLang();
  const fr = lang === 'fr';
  const [light, setLight] = useState<number | null>(null);

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Galerie' : 'Gallery'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'WGC en images' : 'WGC in pictures'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr ? 'Nos plantations, notre pépinière et nos échanges avec les agriculteurs et les communautés.' : 'Our plantings, our nursery and our exchanges with farmers and communities.'}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((s, i) => {
          const cap = fr ? s.fr : s.en;
          return (
            <Reveal key={s.src}>
              <button onClick={() => setLight(i)} className="group block w-full overflow-hidden rounded-2xl border border-forest/10 text-left dark:border-white/10" aria-label={`Open photo: ${cap}`}>
                <img src={s.src} alt={cap} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span className="block bg-white p-4 text-sm font-medium dark:bg-carddark">{cap}</span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {light !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setLight(null)}>
          <figure className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white dark:bg-carddark" onClick={(e) => e.stopPropagation()}>
            <img src={shots[light].src} alt={fr ? shots[light].fr : shots[light].en} className="max-h-[75vh] w-full bg-black object-contain" />
            <figcaption className="flex items-center justify-between gap-3 p-4 text-sm font-medium">
              <span>{fr ? shots[light].fr : shots[light].en}</span>
              <span className="flex gap-2">
                <button className="rounded-full border border-forest/20 p-2" onClick={() => setLight((light + shots.length - 1) % shots.length)} aria-label="Previous photo"><FiChevronLeft size={18} /></button>
                <button className="rounded-full border border-forest/20 p-2" onClick={() => setLight((light + 1) % shots.length)} aria-label="Next photo"><FiChevronRight size={18} /></button>
                <button className="rounded-full bg-forest p-2 text-white" onClick={() => setLight(null)} aria-label="Close"><FiX size={18} /></button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
      <div className="h-16" />
    </div>
  );
}
