'use client';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

export default function SDGs() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const cards = fr ? [
    { n: 'ODD 2', t: 'Faim « zéro »', c: '#DDA63A', e: '🌾', d: 'Agriculture durable : aider les agriculteurs à renforcer productivité et résilience via l’agroforesterie et l’éducation.', pts: ['1 000+ agricultrices à former', 'Sols sains, meilleures récoltes', 'Arbres + cultures'] },
    { n: 'ODD 13', t: 'Action climatique', c: '#3F7E44', e: '🌍', d: 'Sensibilisation, agroforesterie, plantations et action communautaire face aux défis climatiques.', pts: ['20+ arbres → 100 000+', 'Éducation climatique', 'Leadership communautaire'] },
    { n: 'ODD 15', t: 'Vie terrestre', c: '#55C02E', e: '🌳', d: 'Restauration forestière, plantations, usage durable des sols et protection des écosystèmes terrestres.', pts: ['Restaurer zones dégradées', 'Protéger arbres existants', 'Biodiversité retrouvée'] },
  ] : [
    { n: 'SDG 2', t: 'Zero Hunger', c: '#DDA63A', e: '🌾', d: 'Sustainable agriculture: helping farmers strengthen productivity and resilience through agroforestry and education.', pts: ['1,000+ women farmers to train', 'Healthy soils, better harvests', 'Trees + crops'] },
    { n: 'SDG 13', t: 'Climate Action', c: '#3F7E44', e: '🌍', d: 'Awareness, agroforestry, tree planting and community-led action on climate challenges.', pts: ['20+ trees → 100,000+', 'Climate education', 'Community leadership'] },
    { n: 'SDG 15', t: 'Life on Land', c: '#55C02E', e: '🌳', d: 'Forest restoration, tree planting, sustainable land use and protection of terrestrial ecosystems.', pts: ['Restore degraded areas', 'Protect standing trees', 'Biodiversity regained'] },
  ];
  return (
    <div className="pt-28"><div className="mx-auto max-w-7xl px-5">
      <SectionHeading kicker={fr ? 'Objectifs mondiaux' : 'Global goals'} title={fr ? 'Nos ODD : 2 · 13 · 15' : 'Our SDGs: 2 · 13 · 15'} lead={fr ? 'Le travail de WGC contribue directement à trois objectifs de développement durable.' : 'WGC’s work directly contributes to three Sustainable Development Goals.'} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (<Reveal key={i} delay={i * 0.1}><article className="group h-full overflow-hidden rounded-[28px] border border-forest/15 bg-white transition hover:-translate-y-2 hover:shadow-glow-lg dark:border-white/10 dark:bg-carddark"><div className="p-6 text-white" style={{ background: c.c }}><div className="text-4xl">{c.e}</div><p className="mt-2 text-xs font-extrabold uppercase tracking-[0.25em] opacity-90">{c.n}</p><h2 className="font-serif text-3xl font-bold">{c.t}</h2></div><div className="p-6"><p className="text-sm leading-relaxed text-foresttext/75 dark:text-white/70">{c.d}</p><ul className="mt-4 space-y-2">{c.pts.map((p) => (<li key={p} className="flex gap-2 text-sm font-semibold"><span>🌿</span>{p}</li>))}</ul></div></article></Reveal>))}
      </div>
    </div><div className="h-16" /></div>
  );
}
