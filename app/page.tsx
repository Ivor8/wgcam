'use client';
import Link from 'next/link';
import { useLang } from '../components/Providers';
import { Counter, Reveal, RootDivider, SectionHeading } from '../components/ui';

const IMG = {
  hero: '/images/gallery/g05.jpg',
  women: '/images/gallery/g02.jpg',
  forest: '/images/gallery/g03.jpg',
  seedling: '/images/gallery/g07.jpg',
  farm: '/images/gallery/g12.jpg',
  girls: '/images/gallery/g01.jpg',
  hands: '/images/gallery/g11.jpg',
  canopy: '/images/gallery/g16.jpg',
};

export default function Home() {
  const { lang, t } = useLang();
  const fr = lang === 'fr';
  return (
    <div>
      {/* HERO */}
      <section className="hero-canopy grain relative overflow-hidden pb-16 pt-32 sm:pt-36" aria-label="Hero">
        <div className="absolute inset-0 -z-10">
          <img src={IMG.hero} alt="" className="h-full w-full object-cover opacity-40 dark:opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-naturewhite/60 via-naturewhite/80 to-naturewhite dark:from-forestblack/60 dark:via-forestblack/80 dark:to-forestblack" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Reveal><span className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white shadow-glow">🌍 {fr ? 'ONG environnementale dirigée par des jeunes · Cameroun' : 'Youth-led Environmental NGO · Cameroon'}</span></Reveal>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] text-foresttext dark:text-white sm:text-6xl lg:text-7xl">
              {(fr ? 'Restaurer la nature. Autonomiser les communautés.' : 'Restoring Nature. Empowering Communities.')}
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foresttext/75 dark:text-white/75 sm:text-lg">
                {fr ? 'Le Cameroun a perdu environ 1,2 million d’hectares de forêt primaire humide — près de 49 % de sa perte totale de couvert arboré. WGC encourage les agriculteurs à planter et entretenir des arbres aux côtés de leurs cultures, et forme les filles au leadership environnemental.' : 'Cameroon has lost approximately 1.2 million hectares of humid primary forest — nearly 49% of total tree-cover loss. WGC encourages farmers to plant and maintain trees alongside their crops, and trains girls in environmental leadership.'}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/get-involved" className="btn-shimmer rounded-full bg-gradient-to-r from-forest to-fresh px-7 py-3.5 font-bold text-white shadow-glow-lg transition hover:scale-[1.03]">🌱 {t('Join the Movement', 'Rejoindre le mouvement')}</Link>
                <Link href="/programmes" className="rounded-full border-2 border-forest/25 bg-white/70 px-7 py-3.5 font-bold text-forest backdrop-blur transition hover:border-fresh hover:bg-fresh/10 dark:border-white/20 dark:bg-white/5 dark:text-white">🔍 {t('Explore Our Work', 'Découvrir nos actions')}</Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-foresttext/60 dark:text-white/60">
                <span className="rounded-full bg-white/70 px-3 py-1.5 backdrop-blur dark:bg-white/10">📍 Nkolbisson</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5 backdrop-blur dark:bg-white/10">📍 Minkoa-Meyos</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5 backdrop-blur dark:bg-white/10">🌱 {fr ? 'Agroforesterie' : 'Agroforestry'}</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5 backdrop-blur dark:bg-white/10">👩🏾‍🌾 {fr ? 'Femmes agricultrices' : 'Women farmers'}</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="relative">
            <div className="leaf-mask relative overflow-hidden border-4 border-white/60 shadow-glow-lg dark:border-white/10">
              <img src={IMG.women} alt={fr ? 'Femmes plantant des arbres au Cameroun' : 'Women planting trees in Cameroon'} className="aspect-[4/5] w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 p-4 backdrop-blur dark:bg-forestblack/80">
                <p className="font-serif text-lg font-bold text-forest dark:text-leafaccent">{fr ? 'Agroforesterie : arbres aux côtés des cultures.' : 'Agroforestry: trees alongside crops.'}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-earth dark:text-white/60">{fr ? 'Philosophie agroforestière WGC' : 'WGC agroforestry philosophy'}</p>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 animate-floaty rounded-full bg-white p-3 text-2xl shadow-glow dark:bg-carddark">🦋</div>
            <div className="absolute -right-3 top-1/3 animate-sway text-6xl" aria-hidden>🍃</div>
          </Reveal>
        </div>

        {/* hero stats — achieved figures from WGC record; goals labelled as goals */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-5 pt-8 sm:grid-cols-3 lg:grid-cols-5">
          <Counter to={20} suffix="+" label={fr ? 'Arbres plantés' : 'Trees planted'} sub="Nkolbisson · Minkoa-Meyos" />
          <Counter to={13} label={fr ? 'Jeunes filles formées' : 'Young girls trained'} sub={fr ? '2 ateliers' : '2 workshops'} />
          <Counter to={23} suffix="" label={fr ? 'Agriculteurs engagés (18–23)' : 'Farmers engaged (18–23)'} sub={fr ? '3 sensibilisations' : '3 outreaches'} />
          <Counter to={100000} suffix="+" label={fr ? 'Objectif long terme : arbres' : 'Long-term goal: trees'} sub={fr ? 'Activités WGC + communautés' : 'WGC-led + community activities'} />
          <Counter to={500} suffix="+" label={fr ? 'Objectif : éco-leaders' : 'Goal: eco-leaders'} sub={fr ? 'Jeunes formés visés' : 'Youth to train'} />
        </div>
      </section>

      <RootDivider />

      {/* STORY: LOSS → RESTORATION → HOPE */}
      <section className="mx-auto max-w-7xl px-5 py-10" aria-label="Story">
        <SectionHeading kicker={fr ? 'Notre histoire vivante' : 'Our living story'} title={fr ? 'De la perte à l’espoir' : 'From loss to hope'} lead={fr ? 'Le Cameroun perd ses forêts à mesure que les terres agricoles s’étendent. WGC transforme cette pression en régénération — parcelle par parcelle.' : 'Cameroon is losing forests as farmland expands. WGC turns that pressure into regeneration — farm by farm.'} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { e: '🪵', t1: fr ? 'Le défi' : 'The loss', d: fr ? 'Environ 1,2 M ha de forêt primaire humide perdus — près de 49 % de la perte totale. Sols dégradés, érosion, biodiversité en recul.' : 'About 1.2M ha of humid primary forest lost — nearly 49% of total tree-cover loss. Degraded soils, erosion, biodiversity decline.', img: IMG.forest },
            { e: '🌾', t1: fr ? 'La restauration' : 'The restoration', d: fr ? 'Agroforesterie : planter et entretenir des arbres avec les cultures. Démonstrations arbres-cultures, éducation, sessions d’écoute avec les agriculteurs.' : 'Agroforestry: planting and keeping trees with cash crops. Tree-crop demos, education, listening sessions with farmers.', img: IMG.farm },
            { e: '🌳', t1: fr ? 'L’avenir visé (objectifs long terme)' : 'The future aimed for (long-term goals)', d: fr ? '100 000+ arbres plantés ou soutenus, 1 000+ agricultrices formées, 500+ jeunes formés comme leaders environnementaux.' : '100,000+ trees planted or supported, 1,000+ women farmers educated, 500+ young people trained as environmental leaders.', img: IMG.seedling },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className={`group relative overflow-hidden ${i === 1 ? 'leaf-mask-alt' : 'leaf-mask'} border border-forest/15 bg-white shadow-glow dark:border-white/10 dark:bg-carddark`}>
                <img src={c.img} alt="" loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="p-6">
                  <span className="text-3xl">{c.e}</span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-forest dark:text-leafaccent">{c.t1}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foresttext/70 dark:text-white/70">{c.d}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-fresh/25 to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-fog py-16 dark:bg-jungle/40" aria-label="Focus areas">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading kicker={fr ? '5 piliers interconnectés' : '5 interconnected pillars'} title={fr ? 'Nos domaines d’action' : 'Our focus areas'} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { i: '🌳', h: fr ? 'Restauration environnementale' : 'Environmental Restoration', p: fr ? 'Restaurer les paysages dégradés, protéger les arbres existants, accroître le couvert arboré.' : 'Restore degraded landscapes, protect standing trees, grow tree cover.' },
              { i: '🌾', h: fr ? 'Agroforesterie durable' : 'Agroforestry & Sustainable Agriculture', p: fr ? 'Arbres + cultures sur la même parcelle. Combinaisons adaptées, sols plus sains.' : 'Trees + crops on the same farm. Smart combinations, healthier soils.' },
              { i: '👩🏾‍🌾', h: fr ? 'Femmes agricultrices' : 'Women Farmers', p: fr ? '60 %+ de la main-d’œuvre agricole : éducation environnementale et autonomisation.' : '60%+ of the ag workforce: environmental education and empowerment.' },
              { i: '💚', h: fr ? 'Jeunesse & Éco-leadership' : 'Youth & Eco-Leadership', p: fr ? 'Former les filles à devenir la prochaine génération de leaders environnementaux.' : 'Training girls to become the next generation of environmental leaders.' },
              { i: '📱', h: fr ? 'Technologie & Innovation' : 'Technology & Innovation', p: fr ? 'WGC Farm App : savoirs agricoles accessibles, retours des agriculteurs au centre.' : 'WGC Farm App: accessible agri-knowledge, farmer feedback at the centre.' },
              { i: '🤝', h: fr ? 'Communautés' : 'Communities', p: fr ? 'Sensibilisation, discussions, co-création de solutions durables avec les villages.' : 'Outreach, discussion, co-creating sustainable solutions with villages.', cta: true },
            ].map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-[24px] border border-forest/15 bg-white/90 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-glow-lg dark:border-white/10 dark:bg-carddark">
                  <div className="flex h-14 w-14 items-center justify-center rounded-organic bg-gradient-to-br from-fresh/30 to-forest/20 text-3xl transition group-hover:scale-110 group-hover:rotate-6">{f.i}</div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-forest dark:text-white">{f.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foresttext/70 dark:text-white/65">{f.p}</p>
                  {f.cta ? <Link href="/programmes" className="mt-4 inline-block font-bold text-leaf hover:underline">→ {t('Explore programmes', 'Explorer les programmes')}</Link> : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAMEROON MAP */}
      <section className="mx-auto max-w-7xl px-5 py-16" aria-label="Cameroon">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" kicker={fr ? 'Cameroun interactif' : 'Interactive Cameroon'} title={fr ? 'Enracinées ici. En expansion demain.' : 'Rooted here. Expanding tomorrow.'} lead={fr ? 'Nos premières restaurations : Nkolbisson et Minkoa-Meyos. Touchez les marqueurs pour découvrir les activités.' : 'Our first restoration grounds: Nkolbisson and Minkoa-Meyos. Tap markers to discover activities.'} />
            <div className="mt-6 grid gap-3">
              {[['📍 Nkolbisson', fr ? 'Plantation d’arbres en zone dégradée + sensibilisation agroforestière.' : 'Tree planting on degraded land + agroforestry awareness.'], ['📍 Minkoa-Meyos', fr ? 'Restauration communautaire + démonstrations arbres-cultures.' : 'Community restoration + tree-crop demonstrations.'], ['🌱 ' + (fr ? 'Expansion future' : 'Future expansion'), fr ? '1 000+ agricultrices et 500+ jeunes leaders à travers le Cameroun.' : '1,000+ women farmers and 500+ youth leaders across Cameroon.']].map(([h, p], i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-3 rounded-2xl border border-forest/15 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-carddark">
                    <span className="font-bold text-forest dark:text-leafaccent">{h}</span><span className="text-sm text-foresttext/70 dark:text-white/65">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] border border-forest/15 bg-gradient-to-b from-skymist/50 to-sand p-6 dark:border-white/10 dark:from-jungle dark:to-forestblack">
              <svg viewBox="0 0 300 340" className="mx-auto w-full max-w-sm" role="img" aria-label="Stylised map of Cameroon">
                <path d="M150 10 L190 40 L205 110 L195 180 L210 250 L170 325 L120 300 L90 220 L80 140 L105 60 Z" fill="#E8F5E9" stroke="#145A32" strokeWidth="3" className="dark:fill-[#10261F]" />
                <g className="animate-twinkle"><circle cx="140" cy="250" r="10" fill="#74B816" opacity=".5" /><circle cx="140" cy="250" r="6" fill="#2E7D32" /><text x="140" y="278" textAnchor="middle" fontSize="11" fontWeight="800" fill="#145A32" className="dark:fill-[#74C69D]">Nkolbisson</text></g>
                <g><circle cx="165" cy="200" r="10" fill="#74B816" opacity=".5" /><circle cx="165" cy="200" r="6" fill="#2E7D32" /><text x="165" y="182" textAnchor="middle" fontSize="11" fontWeight="800" fill="#145A32" className="dark:fill-[#74C69D]">Minkoa-Meyos</text></g>
                {Array.from({ length: 8 }).map((_, i) => (<text key={i} x={110 + ((i * 37) % 90)} y={60 + ((i * 53) % 220)} fontSize="14">🌳</text>))}
              </svg>
              <img src={IMG.canopy} alt="" loading="lazy" className="mt-4 h-40 w-full rounded-3xl object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW COMMUNITIES TAKE PART — from the WGC record, no invented quotes */}
      <section className="bg-gradient-to-b from-sand to-naturewhite py-16 dark:from-jungle dark:to-forestblack" aria-label="Community activities">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading kicker={fr ? 'Avec les communautés' : 'With communities'} title={fr ? 'Comment les communautés participent' : 'How communities take part'} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { q: fr ? 'Sensibilisation et discussions avec les agriculteurs sur l’importance des arbres dans les exploitations.' : 'Outreach and discussions with farmers on the importance of trees on farms.', n: fr ? 'Sensibilisation · Nkolbisson · Minkoa-Meyos' : 'Outreach · Nkolbisson · Minkoa-Meyos' },
              { q: fr ? 'Démonstrations de combinaisons arbres-cultures et sessions de retours sur des solutions durables.' : 'Tree-crop combination demonstrations and feedback sessions on sustainable solutions.', n: fr ? 'Éducation · 3 sensibilisations' : 'Education · 3 outreaches' },
              { q: fr ? 'Ateliers pratiques pour les jeunes filles : comprendre les défis et agir dans leurs communautés.' : 'Hands-on workshops for girls: understanding challenges and acting in their communities.', n: fr ? 'Jeunes · 13 filles · 2 ateliers' : 'Youth · 13 girls · 2 workshops' },
            ].map((tt, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="relative h-full rounded-[30px_30px_60px_30px] border border-forest/15 bg-white p-6 shadow-glow dark:border-white/10 dark:bg-carddark">
                  <span className="font-serif text-5xl text-fresh" aria-hidden>🌿</span>
                  <blockquote className="font-serif text-xl leading-snug">{tt.q}</blockquote>
                  <figcaption className="mt-4 text-xs font-extrabold uppercase tracking-widest text-leaf">🌿 {tt.n}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-5 py-14" aria-label="Call to action">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[36px] bg-gradient-to-br from-forest via-leaf to-fresh p-8 text-center text-white shadow-glow-lg sm:p-14">
            <img src={IMG.hands} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-serif text-4xl font-semibold text-balance sm:text-5xl">{fr ? 'Faites pousser l’avenir avec nous' : 'Grow the future with us'}</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">{fr ? 'Devenez bénévole, partenaire ou donateur. Chaque graine compte.' : 'Volunteer, partner or donate. Every seed counts.'}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/get-involved" className="btn-shimmer rounded-full bg-white px-7 py-3.5 font-bold text-forest">🤝 {t('Volunteer', 'Devenir bénévole')}</Link>
                <Link href="/get-involved" className="rounded-full border-2 border-white/60 px-7 py-3.5 font-bold text-white hover:bg-white/10">💚 {t('Donate', 'Faire un don')}</Link>
                <Link href="/contact" className="rounded-full border-2 border-white/60 px-7 py-3.5 font-bold text-white hover:bg-white/10">✉️ Contact</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
