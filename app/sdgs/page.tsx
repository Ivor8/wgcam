'use client';
import { FiCheck } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

export default function SDGs() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  const cards = fr
    ? [
        { n: 'ODD 2', t: 'Faim « zéro »', c: '#DDA63A', d: 'Promouvoir une agriculture durable et aider les agriculteurs à renforcer la productivité et la résilience de leurs exploitations.', pts: ['1 000+ agricultrices à former', 'Des sols sains et de meilleures récoltes', 'Des arbres associés aux cultures'] },
        { n: 'ODD 13', t: 'Action climatique', c: '#3F7E44', d: 'Promouvoir la sensibilisation environnementale, l’agroforesterie, la plantation d’arbres et l’action communautaire face aux défis environnementaux et climatiques.', pts: ['De 20+ arbres vers 100 000+', 'Éducation climatique', 'Leadership des communautés'] },
        { n: 'ODD 15', t: 'Vie terrestre', c: '#55C02E', d: 'Contribuer à la restauration des forêts, à la plantation d’arbres, à l’utilisation durable des sols et à la protection des écosystèmes terrestres.', pts: ['Restaurer les zones dégradées', 'Protéger les arbres existants', 'Retrouver la biodiversité'] },
      ]
    : [
        { n: 'SDG 2', t: 'Zero Hunger', c: '#DDA63A', d: 'Promoting sustainable agriculture and supporting farmers to strengthen productivity and resilience on their farms.', pts: ['1,000+ women farmers to train', 'Healthy soils and better harvests', 'Trees combined with crops'] },
        { n: 'SDG 13', t: 'Climate Action', c: '#3F7E44', d: 'Promoting environmental awareness, agroforestry, tree planting and community-led action in response to environmental and climate challenges.', pts: ['From 20+ trees toward 100,000+', 'Climate education', 'Community leadership'] },
        { n: 'SDG 15', t: 'Life on Land', c: '#55C02E', d: 'Contributing to forest restoration, tree planting, sustainable land use and the protection of terrestrial ecosystems.', pts: ['Restore degraded areas', 'Protect standing trees', 'Regain biodiversity'] },
      ];

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Objectifs mondiaux' : 'Global goals'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Nos ODD : 2, 13 et 15' : 'Our SDGs: 2, 13 and 15'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr ? 'Le travail de WGC contribue directement à trois objectifs de développement durable.' : 'WGC’s work directly contributes to three Sustainable Development Goals.'}
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <article className="card-clean h-full overflow-hidden">
              <div className="p-6 text-white" style={{ background: c.c }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-90">{c.n}</p>
                <h2 className="mt-1 font-serif text-2xl font-semibold">{c.t}</h2>
              </div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed text-foresttext/70 dark:text-white/65">{c.d}</p>
                <ul className="mt-4 space-y-2">
                  {c.pts.map((p) => (
                    <li key={p} className="flex gap-2 text-sm font-medium"><FiCheck className="mt-1 shrink-0 text-forest dark:text-white" size={15} />{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="h-16" />
    </div>
  );
}
