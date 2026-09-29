'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

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
  const { lang } = useLang(); const fr = lang === 'fr';
  const [light, setLight] = useState<number | null>(null);
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5"><SectionHeading kicker={fr ? 'Galerie' : 'Gallery'} title={fr ? 'WGC en images réelles' : 'WGC in real pictures'} lead={fr ? 'Plantations, pépinière, agriculteurs, communautés : nos propres photos de terrain. Survolez pour la légende, cliquez pour le plein écran.' : 'Plantings, nursery, farmers, communities: our own field photos. Hover for the caption, click for fullscreen.'} />
        <div className="masonry mt-10">
          {shots.map((s, i) => {
            const cap = fr ? s.fr : s.en;
            return (
              <Reveal key={s.src}>
                <button onClick={() => setLight(i)} className={`group relative block w-full overflow-hidden text-left ${i % 2 ? 'rounded-[28px_80px_28px_80px]' : 'rounded-[80px_28px_80px_28px]'} border border-forest/15 dark:border-white/10`} aria-label={`Open photo: ${cap}`}>
                  <img src={s.src} alt={cap} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 right-4 translate-y-3 font-serif text-lg text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">🌿 {cap}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
      {light !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setLight(null)}>
          <figure className="max-w-3xl w-full overflow-hidden rounded-3xl bg-white dark:bg-carddark" onClick={(e) => e.stopPropagation()}>
            <img src={shots[light].src} alt={fr ? shots[light].fr : shots[light].en} className="max-h-[75vh] w-full object-contain bg-black" />
            <figcaption className="flex items-center justify-between p-4 text-sm font-bold">
              <span>🌿 {fr ? shots[light].fr : shots[light].en}</span>
              <span className="flex gap-2">
                <button className="rounded-full bg-fog px-4 py-2 dark:bg-white/10" onClick={() => setLight((light + shots.length - 1) % shots.length)} aria-label="Previous">←</button>
                <button className="rounded-full bg-fog px-4 py-2 dark:bg-white/10" onClick={() => setLight((light + 1) % shots.length)} aria-label="Next">→</button>
                <button className="rounded-full bg-forest px-4 py-2 text-white" onClick={() => setLight(null)}>✕</button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
      <div className="h-16" />
    </div>
  );
}
