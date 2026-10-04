'use client';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

export default function Programmes() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  const items = [
    {
      n: '01',
      title: fr ? 'Agroforesterie : aider les arbres et les cultures à pousser ensemble' : 'Agroforestry: helping trees and crops grow together',
      text: fr
        ? 'WGC encourage et forme les agriculteurs à pratiquer l’agroforesterie, c’est-à-dire à planter et à entretenir des arbres aux côtés de leurs cultures sur la même parcelle. Au lieu de tout défricher avant de planter, les agriculteurs peuvent intégrer des arbres adaptés à leur système agricole. Grâce à nos sensibilisations et à nos formations, nous les aidons à comprendre l’importance des arbres dans les exploitations et à découvrir des combinaisons arbres-cultures qui soutiennent à la fois la production agricole et la restauration de l’environnement.'
        : 'WGC encourages and educates farmers to practise agroforestry — planting and maintaining trees alongside their cash crops on the same farmland. Instead of completely clearing farmland of trees before planting crops, farmers can integrate suitable trees into their farming systems. Through outreach and education, we help farmers understand the importance of trees on farms and explore tree-crop combinations that support both agricultural production and environmental restoration.',
      img: '/images/programs/agroforestry.jpg',
      alt: fr ? 'Parcelle agroforestière' : 'Agroforestry plot',
      points: fr
        ? ['Démonstrations de combinaisons arbres-cultures', 'Des arbres adaptés aux parcelles', 'Des sols protégés et une production soutenue']
        : ['Tree-crop combination demonstrations', 'Trees suited to the farmland', 'Protected soils and supported production'],
    },
    {
      n: '02',
      title: fr ? 'Formation des agriculteurs : mettre les agriculteurs au centre' : 'Farmer education: putting farmers at the centre',
      text: fr
        ? 'Parce que les femmes représentent plus de 60 % de la main-d’œuvre agricole au Cameroun, former et soutenir les agriculteurs est au cœur de notre approche. Nous travaillons avec eux à travers des sensibilisations communautaires, des discussions, de l’éducation environnementale et des sessions de retours sur des solutions agricoles durables. Notre objectif est simple : aider les agriculteurs à comprendre que les arbres et les cultures peuvent coexister, et que protéger la terre fait partie d’une agriculture productive.'
        : 'Because women represent more than 60% of Cameroon’s agricultural workforce, educating and empowering farmers is central to our approach. We engage farmers through community outreach, farmer discussions, environmental education, agroforestry education and feedback sessions on sustainable farming solutions. Our goal is simple: help farmers understand that trees and crops can coexist, and that protecting the land is part of productive farming.',
      img: '/images/programs/farmer-education.jpg',
      alt: fr ? 'Échange avec des agriculteurs' : 'Exchange with farmers',
      points: fr
        ? ['Sensibilisation communautaire', 'Discussions avec les agriculteurs', 'Éducation à l’agroforesterie']
        : ['Community outreach', 'Farmer discussions', 'Agroforestry education'],
    },
    {
      n: '03',
      title: fr ? 'Éco-leadership des jeunes : former la prochaine génération' : 'Youth eco-leadership: building the next generation',
      text: fr
        ? 'WGC forme les jeunes filles pour qu’elles deviennent la prochaine génération de leaders environnementaux. Grâce à l’éducation environnementale, à des activités pratiques et à des expériences de terrain, nous les aidons à comprendre les défis environnementaux et à développer les connaissances et la confiance nécessaires pour agir dans leurs communautés. Nous pensons que les jeunes ne devraient pas seulement apprendre les problèmes environnementaux, mais aussi avoir l’occasion de faire partie de la solution.'
        : 'WGC trains young girls to become the next generation of environmental leaders. Through environmental education, practical activities and hands-on experiences, we help girls understand environmental challenges and develop the knowledge and confidence to take action in their communities. We believe young people should not only learn about environmental problems — they should also have the opportunity to become part of the solution.',
      img: '/images/programs/youth.jpg',
      alt: fr ? 'Atelier avec des jeunes' : 'Workshop with young people',
      points: fr
        ? ['Éducation environnementale', 'Activités pratiques', 'Confiance et passage à l’action']
        : ['Environmental education', 'Practical activities', 'Confidence to take action'],
    },
    {
      n: '04',
      title: fr ? 'Restauration environnementale : restaurer et protéger' : 'Environmental restoration: restoring and protecting',
      text: fr
        ? 'Nous participons à des activités de plantation d’arbres et de restauration de l’environnement, tout en encourageant les communautés à protéger les arbres existants et à restaurer les zones dégradées. Nos activités de restauration sont liées à notre objectif plus large : promouvoir des paysages où l’agriculture et les arbres peuvent coexister.'
        : 'We participate in tree-planting and environmental restoration activities while encouraging communities to protect existing trees and restore degraded areas. Our restoration work is connected to our broader goal of promoting landscapes where agriculture and trees can coexist.',
      img: '/images/programs/restoration.jpg',
      alt: fr ? 'Zone en cours de restauration' : 'Area under restoration',
      points: fr
        ? ['Plantations communautaires', 'Protection des arbres existants', 'Restauration des zones dégradées']
        : ['Community plantings', 'Protecting standing trees', 'Restoring degraded areas'],
    },
  ];

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Nos programmes' : 'Our programmes'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Quatre façons d’agir, un même objectif' : 'Four ways we act, one shared goal'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr
            ? 'Chaque programme répond à une partie du même défi : permettre une agriculture productive et des forêts en bonne santé au Cameroun.'
            : 'Each programme answers part of the same challenge: making productive farming and healthy forests possible together in Cameroon.'}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl space-y-20 px-5 pb-4">
        {items.map((p, k) => (
          <Reveal key={p.n}>
            <article className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${k % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <img src={p.img} alt={p.alt} loading="lazy" className="img-soft-lg aspect-[4/3] w-full object-cover shadow-card" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest/50 dark:text-white/50">{p.n}</p>
                <h2 className="mt-3 text-2xl font-medium sm:text-3xl">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-foresttext/70 dark:text-white/65">{p.text}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-[15px] font-medium">
                      <FiCheck className="mt-1 shrink-0 text-forest dark:text-white" size={16} /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="card-clean grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <Eyebrow>{fr ? 'Technologie' : 'Technology'}</Eyebrow>
              <h2 className="mt-3 text-2xl font-medium">WGC Farm App</h2>
              <p className="mt-3 text-foresttext/70 dark:text-white/65">
                {fr
                  ? 'Nous avons développé un prototype de l’application WGC Farm et nous avons commencé à le présenter aux agriculteurs pour recueillir leurs retours. L’objectif est simple : concevoir une plateforme vraiment adaptée à leurs besoins, qui rend les connaissances agricoles et environnementales plus accessibles et utiles aux communautés.'
                  : 'We have developed a prototype of the WGC Farm App and begun presenting it to farmers to gather feedback. The aim is simple: design a platform around their needs, making agricultural and environmental knowledge more accessible and useful to communities.'}
              </p>
            </div>
            <img src="/images/gallery/g13.jpg" alt={fr ? 'Présentation d’outils numériques à un agriculteur' : 'Showing digital tools to a farmer'} loading="lazy" className="img-soft aspect-[16/10] w-full object-cover" />
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-3 pb-10">
          <Link href="/get-involved" className="btn-primary">{fr ? 'Participer à un programme' : 'Join a programme'} <FiArrowRight size={16} /></Link>
          <Link href="/impact" className="btn-secondary">{fr ? 'Voir notre impact' : 'See our impact'}</Link>
        </div>
      </div>
    </div>
  );
}
