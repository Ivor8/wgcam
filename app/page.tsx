'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { TreePine, Sprout, Users, GraduationCap, Cpu } from 'lucide-react';
import { useLang } from '../components/Providers';
import { Counter, Eyebrow, Reveal, SectionHeading } from '../components/ui';

const HERO_SLIDES = [
  { src: '/images/gallery/g02.jpg', en: 'Young seedlings at the nursery', fr: 'Jeunes plants à la pépinière' },
  { src: '/images/gallery/g05.jpg', en: 'Planting together in the field', fr: 'Plantation collective au champ' },
  { src: '/images/gallery/g11.jpg', en: 'The team at the nursery', fr: 'L’équipe à la pépinière' },
  { src: '/images/gallery/g03.jpg', en: 'Planting a seedling', fr: 'Plantation d’un jeune arbre' },
  { src: '/images/gallery/g16.jpg', en: 'With communities', fr: 'Avec les communautés' },
];

const HERO_DURATION = 6000;

function Hero({ fr }: { fr: boolean }) {
  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState(0);

  // Autoplay — restarts on every slide change so dots, caption and
  // progress bar stay in sync. Skipped only for reduced motion.
  useEffect(() => {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch {}
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), HERO_DURATION);
    return () => window.clearInterval(id);
  }, [index]);

  // Very subtle parallax on scroll (disabled with reduced motion)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        try {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          setParallax(Math.min(70, window.scrollY * 0.12));
        } catch {}
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (i: number) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section
      className="relative overflow-hidden bg-pine text-white"
      aria-label="Introduction"
    >
      {/* Background slideshow — soft crossfade + slow Ken Burns zoom */}
      <div className="absolute inset-0" aria-hidden style={{ transform: `translateY(${parallax}px)` }}>
        {HERO_SLIDES.map((s, i) => {
          const active = index === i;
          return (
            <div
              key={s.src}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-out"
              style={{ opacity: active ? 1 : 0 }}
            >
              <img
                src={s.src}
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover"
                style={active ? { animation: `heroKenBurns ${HERO_DURATION + 2000}ms ease-out forwards` } : undefined}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:pb-32 sm:pt-32">
        <div className="max-w-2xl">
          <p className="hero-rise hero-rise-1 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            {fr ? 'Initiative environnementale dirigée par des jeunes · Cameroun' : 'Youth-led environmental initiative · Cameroon'}
          </p>
          <h1 className="hero-rise hero-rise-2 mt-6 text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            {fr ? 'Restaurer la nature, autonomiser les communautés.' : 'Restoring nature, empowering communities.'}
          </h1>
          <p className="hero-rise hero-rise-3 mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {fr
              ? 'Women for a Greener Cameroon (WGC) est une initiative environnementale dirigée par des jeunes qui travaille avec les communautés pour restaurer la nature, promouvoir une agriculture durable et aider les femmes et les jeunes à devenir des leaders environnementaux.'
              : 'Women for a Greener Cameroon (WGC) is a youth-led environmental initiative working with communities to restore nature, promote sustainable agriculture, and support women and young people to become environmental leaders.'}
          </p>
          <div className="hero-rise hero-rise-4 mt-8 flex flex-wrap gap-3">
            <Link href="/get-involved" className="btn-primary !bg-white !text-pine hover:!bg-sage">
              {fr ? 'S’impliquer' : 'Get involved'} <FiArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {fr ? 'Découvrir nos programmes' : 'Explore our programmes'}
            </Link>
          </div>
          <p className="hero-rise hero-rise-4 mt-6 flex items-center gap-2 text-sm text-white/70">
            <FiMapPin size={14} /> Nkolbisson · Minkoa-Meyos · Cameroon
          </p>
        </div>

        {/* Slideshow controls — dots + caption + progress */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label={fr ? 'Images' : 'Slides'}>
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.src}
                role="tab"
                aria-selected={index === i}
                aria-label={`${i + 1} — ${fr ? s.fr : s.en}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
          <p key={index} className="hero-rise text-sm text-white/75" style={{ animationDuration: '.6s' }}>
            {fr ? HERO_SLIDES[index].fr : HERO_SLIDES[index].en}
          </p>
          {/* thin progress bar for the active slide */}
          <div className="hidden h-[3px] w-24 overflow-hidden rounded-full bg-white/20 sm:block" aria-hidden>
            <div key={index} className="h-full w-full origin-left bg-white/90" style={{ animation: `heroProgress ${HERO_DURATION}ms linear both` }} />
          </div>
        </div>
      </div>

      {/* Floating photo card — subtle, human touch */}
      <div className="absolute bottom-8 right-6 hidden lg:block" aria-hidden style={{ animation: 'heroFloat 6s ease-in-out infinite' }}>
        <div className="w-60 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-card backdrop-blur">
          <img src="/images/gallery/g07.jpg" alt="" loading="lazy" className="h-32 w-full object-cover" />
          <p className="p-3 text-xs leading-relaxed text-white/85">
            {fr ? 'Nos jeunes plants, prêts pour les prochaines plantations.' : 'Our young seedlings, ready for the next plantings.'}
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex" aria-hidden>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{fr ? 'Défiler' : 'Scroll'}</span>
        <span className="block h-8 w-[2px] rounded-full bg-white/40" style={{ animation: 'heroScrollHint 2.2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

export default function Home() {
  const { lang } = useLang();
  const fr = lang === 'fr';

  const focus = [
    {
      icon: TreePine,
      title: fr ? 'Restauration environnementale' : 'Environmental Restoration',
      text: fr
        ? 'Nous restaurons les paysages dégradés et encourageons les communautés à protéger et à augmenter le couvert arboré.'
        : 'We restore degraded landscapes and encourage communities to protect and increase tree cover.',
    },
    {
      icon: Sprout,
      title: fr ? 'Agroforesterie et agriculture durable' : 'Agroforestry & Sustainable Agriculture',
      text: fr
        ? 'Nous aidons les agriculteurs à intégrer les arbres à leurs cultures et à adopter des pratiques plus durables.'
        : 'We help farmers integrate trees alongside their crops and adopt more sustainable practices.',
    },
    {
      icon: Users,
      title: fr ? 'Femmes agricultrices' : 'Women Farmers',
      text: fr
        ? 'Nous formons et soutenons les agricultrices, actrices essentielles d’une agriculture durable au Cameroun.'
        : 'We educate and support women farmers, who play a central role in sustainable farming in Cameroon.',
    },
    {
      icon: GraduationCap,
      title: fr ? 'Jeunesse et éco-leadership' : 'Youth & Eco-Leadership',
      text: fr
        ? 'Nous formons les filles et les jeunes pour qu’ils deviennent la prochaine génération de leaders environnementaux.'
        : 'We train girls and young people to become the next generation of environmental leaders.',
    },
    {
      icon: Cpu,
      title: fr ? 'Technologie et innovation' : 'Technology & Innovation',
      text: fr
        ? 'Nous utilisons la technologie pour rendre les connaissances agricoles et environnementales plus accessibles aux communautés.'
        : 'We use technology to make agricultural and environmental knowledge more accessible to communities.',
    },
  ];

  return (
    <div>
      <Hero fr={fr} />

      {/* Early impact — plain numbers, no exaggeration */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20" aria-label={fr ? 'Nos premiers pas' : 'Our early work'}>
        <SectionHeading
          kicker={fr ? 'Nos premiers pas' : 'Our early work'}
          title={fr ? 'Le travail a déjà commencé sur le terrain' : 'The work has already started in the field'}
          lead={
            fr
              ? 'WGC est encore jeune, mais nous travaillons déjà avec des agriculteurs, des communautés et des jeunes filles à Nkolbisson et à Minkoa-Meyos.'
              : 'WGC is still growing, but we are already working with farmers, communities and young girls in Nkolbisson and Minkoa-Meyos.'
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Counter to={20} suffix="+" label={fr ? 'Arbres plantés dans des zones dégradées' : 'Trees planted in degraded areas'} sub="Nkolbisson · Minkoa-Meyos" />
          <Counter to={13} label={fr ? 'Jeunes filles formées en deux ateliers' : 'Young girls trained across two workshops'} sub={fr ? 'Pratiques environnementales' : 'Environmental practices'} />
          <Counter to={23} suffix="" label={fr ? 'Agriculteurs rencontrés lors de sensibilisations' : 'Farmers engaged through outreaches'} sub={fr ? 'Trois sensibilisations' : 'Three outreaches'} />
        </div>
      </section>

      {/* Who we are — editorial split */}
      <section className="bg-white py-16 dark:bg-jungle sm:py-24" aria-label={fr ? 'Qui sommes-nous' : 'Who we are'}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{fr ? 'Qui sommes-nous' : 'Who we are'}</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              {fr ? 'Protéger les forêts et soutenir les agriculteurs vont de pair.' : 'Protecting forests and supporting farmers go together.'}
            </h2>
            <div className="prose-natural mt-6 text-[17px] text-foresttext/75 dark:text-white/70">
              <p>
                {fr
                  ? 'WGC a été fondée en novembre 2025 face à la perte croissante des forêts à mesure que les terres agricoles s’étendent. Nous pensons que les agriculteurs, qui dépendent de la terre pour vivre, peuvent aussi jouer un rôle important dans sa protection.'
                  : 'WGC was founded in November 2025 in response to the growing loss of forests as farmland expands. We believe farmers, who depend on the land for their livelihoods, can also play an important role in protecting it.'}
              </p>
              <p>
                {fr
                  ? 'Notre approche repose sur l’agroforesterie : encourager et former les agriculteurs à planter et à entretenir des arbres aux côtés de leurs cultures, plutôt que de tout défricher.'
                  : 'Our approach is centred on agroforestry: encouraging and educating farmers to plant and maintain trees alongside their crops, rather than clearing farmland of trees entirely.'}
              </p>
            </div>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-forest hover:underline dark:text-white">
              {fr ? 'Lire notre histoire' : 'Read our story'} <FiArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img src="/images/gallery/g03.jpg" alt={fr ? 'Plantation d’un jeune arbre au champ' : 'Planting a young tree in the field'} loading="lazy" className="img-soft-lg aspect-[4/3] w-full object-cover shadow-card" />
            <p className="mt-3 text-sm text-foresttext/55 dark:text-white/55">
              {fr ? 'Plantation au champ avec les communautés.' : 'Planting in the field with communities.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Focus areas — simple list, not a wall of cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24" aria-label={fr ? 'Nos axes de travail' : 'Our focus areas'}>
        <SectionHeading
          kicker={fr ? 'Ce que nous faisons' : 'What we do'}
          title={fr ? 'Cinq axes de travail liés entre eux' : 'Five connected areas of work'}
          lead={
            fr
              ? 'Chaque action de WGC s’inscrit dans l’un de ces cinq domaines, de la restauration des terres à la formation des jeunes.'
              : 'Everything WGC does fits into one of these five areas, from restoring land to training young people.'
          }
        />
        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10 dark:divide-white/10 dark:border-white/10">
          {focus.map((f, i) => (
            <Reveal key={i}>
              <div className="group grid gap-3 rounded-2xl py-7 transition-colors duration-300 hover:bg-white dark:hover:bg-white/5 sm:grid-cols-[48px_1fr_2fr] sm:items-start sm:gap-6 sm:px-4 sm:[margin-inline:-1rem]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-forest transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 dark:bg-white/10 dark:text-white">
                  <f.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="font-serif text-xl font-semibold sm:text-2xl">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-foresttext/70 dark:text-white/65">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link href="/programmes" className="btn-secondary mt-10">
          {fr ? 'Voir nos programmes en détail' : 'See our programmes in detail'} <FiArrowRight size={16} />
        </Link>
      </section>

      {/* Where we work — calm split */}
      <section className="bg-sage/60 py-16 dark:bg-jungle/60 sm:py-24" aria-label={fr ? 'Où nous travaillons' : 'Where we work'}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>{fr ? 'Où nous travaillons' : 'Where we work'}</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">{fr ? 'Enracinées à Nkolbisson et à Minkoa-Meyos.' : 'Rooted in Nkolbisson and Minkoa-Meyos.'}</h2>
            <p className="mt-5 max-w-lg text-[17px] text-foresttext/70 dark:text-white/65">
              {fr
                ? 'C’est là que nous avons planté nos premiers arbres, organisé des sensibilisations avec les agriculteurs et présenté le prototype de l’application WGC Farm pour recueillir leurs retours.'
                : 'This is where we planted our first trees, held outreach sessions with farmers, and presented the WGC Farm App prototype to gather their feedback.'}
            </p>
            <ul className="mt-7 space-y-3 text-[15px]">
              <li className="flex gap-3"><FiMapPin className="mt-1 shrink-0 text-forest dark:text-white" size={17} /><span><strong>Nkolbisson</strong> — {fr ? 'plantations et sensibilisation à l’agroforesterie.' : 'tree planting and agroforestry awareness.'}</span></li>
              <li className="flex gap-3"><FiMapPin className="mt-1 shrink-0 text-forest dark:text-white" size={17} /><span><strong>Minkoa-Meyos</strong> — {fr ? 'restauration communautaire et démonstrations arbres-cultures.' : 'community restoration and tree-crop demonstrations.'}</span></li>
            </ul>
          </div>
          <Reveal>
            <img src="/images/gallery/g16.jpg" alt={fr ? 'Visite de sensibilisation dans une communauté' : 'Community outreach visit'} loading="lazy" className="img-soft-lg aspect-[4/3] w-full object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24" aria-label={fr ? 'Nos objectifs' : 'Our goals'}>
        <SectionHeading
          kicker={fr ? 'Où nous allons' : 'Where we are going'}
          title={fr ? 'Trois objectifs pour les années à venir' : 'Three goals for the years ahead'}
          lead={fr ? 'Notre travail actuel n’est qu’un début. Voici ce que nous construisons avec les communautés.' : 'Our current work is only the beginning. Here is what we are building toward with communities.'}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: '01', v: '100,000+', t: fr ? 'Arbres plantés ou accompagnés' : 'Trees planted or supported', d: fr ? 'Grâce aux activités portées par WGC et par les communautés.' : 'Through WGC-led and community activities.' },
            { n: '02', v: '1,000+', t: fr ? 'Agricultrices formées' : 'Women farmers educated', d: fr ? 'À l’agroforesterie et aux pratiques agricoles durables.' : 'On agroforestry and sustainable farming practices.' },
            { n: '03', v: '500+', t: fr ? 'Jeunes formés comme éco-leaders' : 'Young people trained as eco-leaders', d: fr ? 'Des jeunes capables d’agir dans leurs communautés.' : 'Young people able to take action in their communities.' },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-clean h-full p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest/50 dark:text-white/50">{g.n}</p>
                <p className="mt-2 font-serif text-4xl text-forest dark:text-white">{g.v}</p>
                <h3 className="mt-2 font-semibold">{g.t}</h3>
                <p className="mt-2 text-sm text-foresttext/65 dark:text-white/60">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/impact" className="btn-primary">{fr ? 'Voir notre impact' : 'See our impact'} <FiArrowRight size={16} /></Link>
          <Link href="/contact" className="btn-secondary">{fr ? 'Nous contacter' : 'Contact us'}</Link>
        </div>
      </section>
    </div>
  );
}
