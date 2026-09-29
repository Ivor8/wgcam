'use client';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

export default function Programmes() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const items = fr ? [
    { i: '🌾', h: 'Agroforesterie — arbres + cultures', d: 'Planter et entretenir des arbres avec les cultures de rente au lieu de tout défricher. Comprendre l’importance des arbres, tester des combinaisons arbres-cultures qui soutiennent production et restauration.', img: '/images/programs/agroforestry.jpg', points: ['Démos arbres-cultures', 'Arbres adaptés au terroir', 'Sols protégés, ombre utile'] },
    { i: '👩🏾‍🌾', h: 'Éducation des agriculteurs', d: 'Les femmes = 60 %+ de la main-d’œuvre agricole. Sensibilisation communautaire, discussions, éducation environnementale, sessions de retours sur des solutions durables.', img: '/images/programs/farmer-education.jpg', points: ['Sensibilisation villageoise', 'Éducation agroforestière', 'Co-création de solutions'] },
    { i: '💚', h: 'Éco-leadership des jeunes', d: 'Former les filles à devenir éco-leaders : comprendre les défis, gagner confiance, agir dans leurs communautés. 13 filles déjà formées en 2 ateliers.', img: '/images/programs/youth.jpg', points: ['Éducation pratique', 'Activités de terrain', 'Confiance + action'] },
    { i: '🌳', h: 'Restauration environnementale', d: 'Plantations communautaires, protection des arbres existants, restauration des zones dégradées — Nkolbisson, Minkoa-Meyos. Paysages où agriculture et arbres coexistent.', img: '/images/programs/restoration.jpg', points: ['20+ arbres plantés', 'Zones dégradées restaurées', 'Suivi communautaire'] },
    { i: '📱', h: 'Technologie — WGC Farm App', d: 'Prototype présenté aux agriculteurs pour recueillir leurs retours, afin que la plateforme soit conçue autour de leurs besoins.', img: '/images/gallery/g13.jpg', points: ['Prototype présenté aux agriculteurs', 'Conçue autour de leurs besoins', 'Savoirs agricoles et environnementaux'] },
  ] : [
    { i: '🌾', h: 'Agroforestry — trees + crops', d: 'Planting and keeping trees with cash crops instead of clearing everything. Understanding the value of on-farm trees and testing tree-crop combos that support production and restoration.', img: '/images/programs/agroforestry.jpg', points: ['Tree-crop demos', 'Site-suited trees', 'Protected soils, useful shade'] },
    { i: '👩🏾‍🌾', h: 'Farmer education', d: 'Women are 60%+ of the ag workforce. Community outreach, discussions, environmental education and feedback sessions on sustainable solutions.', img: '/images/programs/farmer-education.jpg', points: ['Village outreach', 'Agroforestry education', 'Co-created solutions'] },
    { i: '💚', h: 'Youth eco-leadership', d: 'Training girls to become eco-leaders: understanding challenges, building confidence, acting in their communities. 13 girls trained across 2 workshops.', img: '/images/programs/youth.jpg', points: ['Hands-on learning', 'Field activities', 'Confidence + action'] },
    { i: '🌳', h: 'Environmental restoration', d: 'Community plantings, protecting standing trees, restoring degraded areas — Nkolbisson, Minkoa-Meyos. Landscapes where farms and trees coexist.', img: '/images/programs/restoration.jpg', points: ['20+ trees planted', 'Degraded areas restored', 'Community follow-up'] },
    { i: '📱', h: 'Technology — WGC Farm App', d: 'A prototype presented to farmers to gather feedback, so the platform is designed around their needs.', img: '/images/gallery/g13.jpg', points: ['Prototype shown to farmers', 'Designed around their needs', 'Agricultural and environmental knowledge'] },
  ];
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5"><SectionHeading kicker={fr ? 'Programmes' : 'Programmes'} title={fr ? 'Cinq façons de faire reverdir' : 'Five ways we re-green'} lead={fr ? 'Chaque programme est une porte d’entrée vers un Cameroun où agriculture productive et forêts saines coexistent.' : 'Each programme is a doorway into a Cameroon where productive farms and healthy forests coexist.'} /></div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-5 pb-16">
        {items.map((p, k) => (
          <Reveal key={k}>
            <article className={`grid overflow-hidden rounded-[32px] border border-forest/15 bg-white shadow-glow dark:border-white/10 dark:bg-carddark lg:grid-cols-2 ${k % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative min-h-64"><img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" /><span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-2xl shadow dark:bg-forestblack/80">{p.i}</span></div>
              <div className="p-7 sm:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-leaf">0{k + 1}</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-forest dark:text-white sm:text-4xl">{p.h}</h2>
                <p className="mt-3 leading-relaxed text-foresttext/75 dark:text-white/70">{p.d}</p>
                <ul className="mt-4 space-y-2">{p.points.map((x) => (<li key={x} className="flex items-center gap-2 text-sm font-semibold"><span className="text-fresh">🌿</span>{x}</li>))}</ul>
                <a href="/get-involved" className="mt-6 inline-block rounded-full bg-gradient-to-r from-forest to-fresh px-6 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition">→ {fr ? 'Participer à ce programme' : 'Join this programme'}</a>
              </div>
            </article>
          </Reveal>
        ))}
        {/* Before / after */}
        <Reveal>
          <div className="rounded-[32px] bg-gradient-to-br from-earth to-forest p-8 text-white sm:p-10">
            <h2 className="font-serif text-3xl font-bold">🔄 {fr ? 'Avant / Après : la parcelle agroforestière' : 'Before / After: the agroforestry plot'}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-black/25 p-6"><p className="font-extrabold uppercase tracking-widest text-amber">🪵 {fr ? 'Avant' : 'Before'}</p><p className="mt-2 text-sm text-white/85">{fr ? 'Champ entièrement défriché : sol nu, érosion, chaleur, rendements fragiles.' : 'Fully cleared field: bare soil, erosion, heat, fragile yields.'}</p></div>
              <div className="rounded-3xl bg-fresh/20 p-6 ring-1 ring-fresh/50"><p className="font-extrabold uppercase tracking-widest text-fresh">🌳 {fr ? 'Après WGC' : 'After WGC'}</p><p className="mt-2 text-sm text-white/90">{fr ? 'Arbres + cultures : ombre, sols vivants, biodiversité, revenus diversifiés.' : 'Trees + crops: shade, living soils, biodiversity, diversified income.'}</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
