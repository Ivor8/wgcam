'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Counter, Eyebrow, Reveal } from '../../components/ui';

export default function Impact() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'Notre impact' : 'Our impact'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Ce que nous avons fait jusqu’ici' : 'What we have done so far'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr
            ? 'WGC est encore jeune, mais notre travail a déjà commencé avec des agriculteurs, des communautés et des jeunes. Voici ce que nous avons accompli, sans exagération.'
            : 'WGC is still growing, but our work has already begun with farmers, communities and young people. Here is what we have done so far, plainly stated.'}
        </p>
      </div>

      {/* Numbers */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <Counter to={20} suffix="+" label={fr ? 'Arbres plantés' : 'Trees planted'} sub={fr ? 'À Nkolbisson et à Minkoa-Meyos, dans des zones dégradées.' : 'In Nkolbisson and Minkoa-Meyos, in degraded areas.'} />
          <Counter to={13} label={fr ? 'Jeunes filles formées' : 'Young girls trained'} sub={fr ? 'Lors de deux ateliers sur les pratiques environnementales.' : 'Across two workshops on environmental practices.'} />
          <Counter to={23} label={fr ? 'Agriculteurs rencontrés' : 'Farmers engaged'} sub={fr ? 'Lors de trois sensibilisations sur les associations arbres-cultures.' : 'Through three outreaches on tree-crop combinations.'} />
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-16 dark:bg-jungle">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <Reveal>
            <img src="/images/gallery/g07.jpg" alt={fr ? 'Jeunes plants en pépinière' : 'Young seedlings in the nursery'} loading="lazy" className="img-soft-lg aspect-[4/3] w-full object-cover" />
          </Reveal>
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold">{fr ? 'Sensibilisation des communautés' : 'Community outreach'}</h2>
              <p className="mt-3 text-foresttext/70 dark:text-white/65">
                {fr
                  ? 'Nous avons mené des échanges avec des agriculteurs et des communautés sur la sensibilisation environnementale, l’agroforesterie et l’importance d’intégrer les arbres aux cultures.'
                  : 'We have conducted farmer and community engagements focused on environmental awareness, agroforestry and the importance of integrating trees with crops.'}
              </p>
            </div>
            <div className="border-t border-forest/10 pt-8 dark:border-white/10">
              <h2 className="font-serif text-2xl font-semibold">WGC Farm App — prototype</h2>
              <p className="mt-3 text-foresttext/70 dark:text-white/65">
                {fr
                  ? 'Nous avons développé un prototype de l’application WGC Farm et nous avons commencé à le présenter aux agriculteurs pour recueillir leurs retours et nous assurer que la plateforme est conçue autour de leurs besoins.'
                  : 'We have developed a prototype of the WGC Farm App and begun presenting it to farmers to gather feedback and make sure the platform is designed around their needs.'}
              </p>
            </div>
            <img src="/images/gallery/g14.jpg" alt={fr ? 'Échange avec une agricultrice' : 'Outreach with a woman farmer'} loading="lazy" className="img-soft aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Eyebrow>{fr ? 'Nos objectifs à long terme' : 'Our long-term goals'}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium sm:text-4xl">
          {fr ? 'Le travail actuel n’est que le début' : 'Our current work is only the beginning'}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: '01', v: '100,000+', t: fr ? 'Restaurer la nature et augmenter le couvert arboré' : 'Restore nature and increase tree cover', d: fr ? 'Arbres plantés ou accompagnés grâce aux activités de WGC et des communautés.' : 'Trees planted or supported through WGC-led and community activities.' },
            { n: '02', v: '1,000+', t: fr ? 'Des sols plus sains et de meilleures récoltes' : 'Healthier soils and better harvests', d: fr ? 'Agricultrices formées à l’agroforesterie et aux pratiques agricoles durables.' : 'Women farmers educated on agroforestry and sustainable practices.' },
            { n: '03', v: '500+', t: fr ? 'Former la prochaine génération d’éco-leaders' : 'Build the next generation of eco-leaders', d: fr ? 'Jeunes formés comme leaders environnementaux.' : 'Young people trained as environmental leaders.' },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-clean h-full p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest/50">{g.n}</p>
                <p className="mt-2 font-serif text-4xl text-forest dark:text-white">{g.v}</p>
                <h3 className="mt-2 font-semibold">{g.t}</h3>
                <p className="mt-2 text-sm text-foresttext/65 dark:text-white/60">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/get-involved" className="btn-primary">{fr ? 'Soutenir notre travail' : 'Support our work'} <FiArrowRight size={16} /></Link>
          <Link href="/gallery" className="btn-secondary">{fr ? 'Voir nos photos de terrain' : 'See our field photos'}</Link>
        </div>
      </section>
    </div>
  );
}
