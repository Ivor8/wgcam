'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal, SectionHeading } from '../../components/ui';

export default function About() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  return (
    <div className="pt-14 sm:pt-20">
      {/* Intro */}
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'À propos' : 'About WGC'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">
          {fr ? 'Qui est derrière Women for a Greener Cameroon ?' : 'Who is Women for a Greener Cameroon?'}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foresttext/70 dark:text-white/70">
          {fr
            ? 'Women for a Greener Cameroon (WGC) est une initiative environnementale dirigée par des jeunes qui travaille avec les communautés pour restaurer la nature, promouvoir une agriculture durable et aider les femmes et les jeunes à devenir des leaders environnementaux.'
            : 'Women for a Greener Cameroon (WGC) is a youth-led environmental initiative working with communities to restore nature, promote sustainable agriculture, and empower women and young people to become environmental leaders.'}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-5">
        <img src="/images/gallery/g11.jpg" alt={fr ? 'L’équipe WGC à la pépinière' : 'The WGC team at the nursery'} className="img-soft-lg aspect-[21/9] w-full object-cover" loading="lazy" />
      </div>

      {/* Mission / Vision */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:py-20 md:grid-cols-2">
        <Reveal>
          <div className="card-clean h-full p-8">
            <Eyebrow>{fr ? 'Notre mission' : 'Our mission'}</Eyebrow>
            <p className="mt-4 font-serif text-2xl leading-snug">
              {fr
                ? '« Autonomiser les femmes et les filles grâce à l’éducation environnementale, à l’agriculture durable et à des initiatives communautaires qui luttent contre la déforestation, restaurent les écosystèmes et promeuvent le développement durable au Cameroun. »'
                : '“To empower women and girls through environmental education, sustainable agriculture and community driven initiatives that combat deforestation, restore ecosystems and promote sustainable development across Cameroon.”'}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-[20px] bg-forest p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">{fr ? 'Notre vision' : 'Our vision'}</p>
            <p className="mt-4 font-serif text-2xl leading-snug">
              {fr
                ? '« Un Cameroun plus vert et plus durable, où les femmes et les communautés travaillent ensemble pour porter la conservation de l’environnement et la résilience climatique. »'
                : '“A greener and more sustainable Cameroon, where women and communities work together to drive environmental conservation and climate resilience.”'}
            </p>
            <p className="mt-6 text-sm text-white/70">{fr ? 'Devise : Restaurer la nature, autonomiser les communautés.' : 'Motto: Restoring nature, empowering communities.'}</p>
          </div>
        </Reveal>
      </section>

      {/* Why we exist */}
      <section className="bg-white py-16 dark:bg-jungle sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              kicker={fr ? 'Pourquoi nous existons' : 'Why we exist'}
              title={fr ? 'Les forêts du Cameroun sont sous pression' : 'Cameroon’s forests are under pressure'}
              lead={
                fr
                  ? 'Entre 2002 et 2025, le Cameroun a perdu environ 1,2 million d’hectares de forêt primaire humide, soit près de 49 % de sa perte totale de couvert arboré sur cette période. L’expansion agricole est l’un des principaux facteurs de cette pression.'
                  : 'Between 2002 and 2025, Cameroon lost approximately 1.2 million hectares of humid primary forest, representing nearly 49% of the country’s total tree-cover loss during that period. Agricultural expansion is an important driver of this pressure.'
              }
            />
            <div className="mt-8 border-l-2 border-forest/20 pl-5">
              <p className="font-serif text-5xl text-forest dark:text-white">1.2M ha</p>
              <p className="mt-2 text-[15px] text-foresttext/65 dark:text-white/60">
                {fr
                  ? 'C’est la surface estimée de forêt primaire humide perdue. Quand les arbres disparaissent des paysages agricoles, les communautés peuvent aussi faire face à la dégradation des sols, à l’érosion, à la perte de biodiversité et à une productivité agricole réduite.'
                  : 'That is the estimated area of humid primary forest lost. When trees disappear from farmland, communities can also face soil degradation, erosion, biodiversity loss and reduced farm productivity.'}
              </p>
            </div>
          </div>
          <Reveal>
            <img src="/images/gallery/g03.jpg" alt={fr ? 'Plantation au champ' : 'Field planting'} loading="lazy" className="img-soft aspect-[4/5] w-full object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeading
          kicker={fr ? 'Comment nous travaillons' : 'How we work'}
          title={fr ? 'Une approche simple, centrée sur les agriculteurs' : 'A simple approach, centred on farmers'}
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="prose-natural text-[17px] text-foresttext/75 dark:text-white/70">
              <p>
                {fr
                  ? 'Nous partons d’un constat simple : protéger les forêts et soutenir les agriculteurs ne devrait pas être deux objectifs séparés. Les agriculteurs dépendent de la terre pour vivre, et ils peuvent aussi contribuer à la protéger et à la restaurer.'
                  : 'We start from a simple idea: protecting forests and supporting farmers should not be treated as separate goals. Farmers depend on the land for their livelihoods, and they can also help protect and restore it.'}
              </p>
              <p>
                {fr
                  ? 'C’est pourquoi notre travail repose sur l’agroforesterie. Nous encourageons et formons les agriculteurs à planter et à entretenir des arbres aux côtés de leurs cultures, au lieu de défricher entièrement leurs parcelles.'
                  : 'That is why our work is centred on agroforestry. We encourage and educate farmers to plant and maintain trees alongside their crops, rather than completely clearing farmland of trees.'}
              </p>
              <p>
                {fr
                  ? 'Comme les femmes représentent plus de 60 % de la main-d’œuvre agricole au Cameroun, nous accordons une attention particulière à l’éducation et à l’autonomisation des agricultrices. Nous formons aussi les jeunes filles pour qu’elles deviennent la prochaine génération de leaders environnementaux.'
                  : 'Because women represent more than 60% of Cameroon’s agricultural workforce, we pay particular attention to educating and empowering women farmers. We also train young girls to become the next generation of environmental leaders.'}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <img src="/images/gallery/g14.jpg" alt={fr ? 'Échange avec une agricultrice' : 'Discussion with a woman farmer'} loading="lazy" className="img-soft aspect-[16/10] w-full object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <img src="/images/gallery/g07.jpg" alt={fr ? 'Jeunes plants en pépinière' : 'Young seedlings in the nursery'} loading="lazy" className="img-soft aspect-[16/10] w-full object-cover" />
            </Reveal>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/programmes" className="btn-primary">{fr ? 'Voir nos programmes' : 'See our programmes'} <FiArrowRight size={16} /></Link>
          <Link href="/team" className="btn-secondary">{fr ? 'Rencontrer l’équipe' : 'Meet the team'}</Link>
        </div>
      </section>
    </div>
  );
}
