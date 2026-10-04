'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

const team = [
  { n: 'Kristy-Marc Mafue Melo', rEn: 'Co-founder & President', rFr: 'Cofondatrice & Présidente', dEn: 'Leads the overall direction and day-to-day running of WGC, including organisational coordination and financial management. She works with the team to advance WGC’s environmental, agricultural and community programmes.', dFr: 'Porte la direction générale et le quotidien de WGC, y compris la coordination et la gestion financière. Elle travaille avec l’équipe pour faire avancer les programmes environnementaux, agricoles et communautaires.', img: '/images/team/kristy.jpg' },
  { n: 'Cynthia Alanyuy Wrinkar', rEn: 'Co-founder & Project Lead', rFr: 'Cofondatrice & Cheffe de projets', dEn: 'Leads project development and implementation while supporting community outreach, partnerships and programmes focused on sustainable agriculture and community empowerment.', dFr: 'Porte le développement et la mise en œuvre des projets, tout en soutenant la sensibilisation, les partenariats et les programmes pour une agriculture durable.', img: '/images/team/cynthia.jpg' },
  { n: 'Taidouhim Djoda Misa Laure', rEn: 'Chief Operations Officer', rFr: 'Directrice des opérations', dEn: 'Supports WGC’s operations and project coordination, drawing on experience in project management and organisational implementation.', dFr: 'Appuie les opérations et la coordination des projets, forte d’une expérience en gestion de projets et en mise en œuvre.', img: '/images/team/taidouhim.jpg' },
  { n: 'Seka Jean Blaise Tarnyuy', rEn: 'Technical Advisor', rFr: 'Conseiller technique', dEn: 'Provides technical guidance to WGC, drawing on experience in project development, climate justice, clean energy and community-focused initiatives.', dFr: 'Apporte un appui technique à WGC, fort d’une expérience en développement de projets, justice climatique, énergie propre et initiatives communautaires.', img: '/images/team/seka.jpg' },
  { n: 'Cindy Melo Shimyui', rEn: 'Chief Technology Officer', rFr: 'Directrice technologie', dEn: 'Leads the technological development of the WGC Farm App and supports WGC’s use of digital tools to advance sustainable agriculture.', dFr: 'Porte le développement technologique de l’application WGC Farm et soutient l’usage des outils numériques pour une agriculture durable.', img: '' },
];

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('');
}

export default function Team() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Notre équipe' : 'Our team'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Les personnes derrière WGC' : 'The people behind WGC'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr
            ? 'Une petite équipe resserrée, accompagnée de conseillers, qui travaille chaque jour avec les communautés au Cameroun.'
            : 'A small, close team, supported by advisors, working every day with communities in Cameroon.'}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl space-y-4 px-5">
        {team.map((t, i) => (
          <Reveal key={i}>
            <article className="card-clean grid gap-5 p-6 sm:grid-cols-[96px_1fr] sm:gap-7 sm:p-8">
              {t.img ? (
                <img src={t.img} alt={t.n} loading="lazy" className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <div aria-hidden className="flex h-24 w-24 items-center justify-center rounded-full bg-sage font-serif text-2xl text-forest dark:bg-white/10 dark:text-white">
                  {initials(t.n)}
                </div>
              )}
              <div>
                <h2 className="font-serif text-2xl font-semibold">{t.n}</h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-forest/60 dark:text-white/55">{fr ? t.rFr : t.rEn}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-foresttext/70 dark:text-white/65">{fr ? t.dFr : t.dEn}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-5 py-14 text-center">
        <p className="font-serif text-2xl">{fr ? 'Envie de travailler avec nous ?' : 'Want to work with us?'}</p>
        <Link href="/get-involved" className="btn-primary mt-5">
          {fr ? 'Devenir bénévole' : 'Become a volunteer'} <FiArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
