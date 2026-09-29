'use client';
import { useLang } from '../../components/Providers';
import { Counter, Reveal, SectionHeading } from '../../components/ui';

export default function Impact() {
  const { lang } = useLang(); const fr = lang === 'fr';
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5"><SectionHeading kicker={fr ? 'Impact' : 'Impact'} title={fr ? 'Petites graines, grandes forêts' : 'Small seeds, big forests'} lead={fr ? 'WGC grandit — mais le travail a déjà commencé avec agriculteurs, communautés et jeunes.' : 'WGC is still growing — but work has already begun with farmers, communities and youth.'} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <Counter to={20} suffix="+" label={fr ? 'Arbres plantés' : 'Trees planted'} sub="Nkolbisson · Minkoa-Meyos" />
          <Counter to={13} label={fr ? 'Jeunes filles formées' : 'Young girls trained'} sub={fr ? '2 ateliers' : '2 workshops'} />
          <Counter to={23} suffix="" label={fr ? 'Agriculteurs (18–23)' : 'Farmers (18–23)'} sub={fr ? '3 sensibilisations' : '3 outreaches'} />
          <Counter to={3} label={fr ? 'Sensibilisations' : 'Outreaches'} sub={fr ? 'Arbres-cultures' : 'Tree-crop'} />
          <Counter to={2} label={fr ? 'Ateliers filles' : 'Girls’ workshops'} sub="WGC Farm App" />
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal><div className="rounded-[32px] border border-forest/15 bg-white p-8 dark:border-white/10 dark:bg-carddark">
            <h3 className="font-serif text-2xl font-bold text-forest dark:text-leafaccent">🌱 {fr ? 'Croissance des arbres (visualisation)' : 'Tree growth (visualisation)'}</h3>
            <div className="mt-6 flex items-end justify-around gap-2" aria-hidden>
              {[22, 40, 62, 88, 120].map((h, i) => (<div key={i} className="flex flex-col items-center gap-2"><div className="w-10 rounded-t-full bg-gradient-to-t from-forest to-fresh sm:w-14" style={{ height: h }} /><span className="text-xl">{['🌱', '🌿', '🪴', '🌳', '🌲'][i]}</span></div>))}
            </div>
            <p className="mt-4 text-sm text-foresttext/65 dark:text-white/60">{fr ? 'Du semis au mature : chaque sensibilisation fait grandir la canopée.' : 'From seedling to mature: every outreach grows the canopy.'}</p>
          </div></Reveal>
          <Reveal delay={0.1}><div className="rounded-[32px] bg-gradient-to-br from-forest to-jungle p-8 text-white">
            <h3 className="font-serif text-2xl font-bold">🎯 {fr ? 'Objectifs long terme (document WGC)' : 'Long-term goals (WGC record)'}</h3>
            <ul className="mt-5 space-y-4">
              <li className="rounded-2xl bg-white/10 p-4"><p className="font-bold">🌳 {fr ? '100 000+ arbres plantés ou soutenus via activités WGC et communautaires' : '100,000+ trees planted or supported through WGC-led and community activities'}</p></li>
              <li className="rounded-2xl bg-white/10 p-4"><p className="font-bold">👩🏾‍🌾 {fr ? '1 000+ agricultrices formées à l’agroforesterie et aux pratiques durables' : '1,000+ women farmers educated on agroforestry and sustainable practices'}</p></li>
              <li className="rounded-2xl bg-white/10 p-4"><p className="font-bold">💚 {fr ? '500+ jeunes formés comme leaders environnementaux' : '500+ young people trained as environmental leaders'}</p></li>
            </ul>
            <p className="mt-5 text-sm text-white/70">{fr ? 'Le prototype WGC Farm App a été présenté aux agriculteurs pour recueillir leurs retours.' : 'The WGC Farm App prototype has been presented to farmers to gather feedback.'}</p>
          </div></Reveal>
        </div>
        <Reveal><div className="mt-8 overflow-hidden rounded-[32px] border border-forest/15 dark:border-white/10">
          <div className="grid sm:grid-cols-2">
            <div className="relative"><img src="/images/gallery/g03.jpg" alt="" loading="lazy" className="h-64 w-full object-cover sm:h-full" /><span className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-1.5 text-xs font-bold text-white">🪵 {fr ? 'Avant' : 'Before'}</span></div>
            <div className="relative"><img src="/images/gallery/g07.jpg" alt="" loading="lazy" className="h-64 w-full object-cover sm:h-full" /><span className="absolute left-4 top-4 rounded-full bg-fresh px-4 py-1.5 text-xs font-bold text-forestblack">🌳 {fr ? 'Après restauration' : 'After restoration'}</span></div>
          </div>
          <p className="bg-white p-5 text-sm text-foresttext/70 dark:bg-carddark dark:text-white/65">📸 {fr ? 'Illustration : terres agricoles et forêt — Nkolbisson & Minkoa-Meyos sont les zones de restauration documentées.' : 'Illustration: farmland and forest — Nkolbisson & Minkoa-Meyos are the documented restoration areas.'}</p>
        </div></Reveal>
      </div>
      <div className="h-16" />
    </div>
  );
}
