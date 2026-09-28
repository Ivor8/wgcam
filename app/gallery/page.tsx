'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

const shots = [
  ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=900&auto=format&fit=crop', 'Canopy · Cameroon rainforest'],
  ['https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=900&auto=format&fit=crop', 'Women farmers · field learning'],
  ['https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=900&auto=format&fit=crop', 'Seedlings · restoration'],
  ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop', 'Agroforestry · trees + crops'],
  ['https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop', 'Girls · eco-leadership'],
  ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=900&auto=format&fit=crop', 'Hands in soil · planting'],
  ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop', 'Forest path · Nkolbisson'],
  ['https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=900&auto=format&fit=crop', 'Canopy light · hope'],
  ['https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=900&auto=format&fit=crop', 'Green farm · future'],
];

export default function Gallery() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const [light, setLight] = useState<number | null>(null);
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5"><SectionHeading kicker={fr ? 'Galerie' : 'Gallery'} title={fr ? 'National Geographic rencontre Pinterest' : 'National Geographic meets Pinterest'} lead={fr ? 'Plantations, agricultrices, filles, communautés. Survolez pour l’histoire, cliquez pour le plein écran.' : 'Plantings, farmers, girls, communities. Hover for the story, click for fullscreen.'} />
        <div className="masonry mt-10">
          {shots.map(([src, cap], i) => (
            <Reveal key={i}>
              <button onClick={() => setLight(i)} className={`group relative block w-full overflow-hidden text-left ${i % 2 ? 'rounded-[28px_80px_28px_80px]' : 'rounded-[80px_28px_80px_28px]'} border border-forest/15 dark:border-white/10`} aria-label={`Open photo: ${cap}`}>
                <img src={src} alt={cap} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-108 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 translate-y-3 font-serif text-lg text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">🌿 {cap}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {light !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setLight(null)}>
          <figure className="max-w-3xl w-full overflow-hidden rounded-3xl bg-white dark:bg-carddark" onClick={(e) => e.stopPropagation()}>
            <img src={shots[light][0].replace('w=900', 'w=1600')} alt={shots[light][1]} className="max-h-[75vh] w-full object-contain bg-black" />
            <figcaption className="flex items-center justify-between p-4 text-sm font-bold">
              <span>🌿 {shots[light][1]}</span>
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
