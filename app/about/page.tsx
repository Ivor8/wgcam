'use client';
import { useLang } from '../../components/Providers';
import { Reveal, RootDivider, SectionHeading } from '../../components/ui';

export default function About() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const values = fr
    ? [['🌱', 'Régénération', 'Chaque action restaure sols, forêts et moyens de subsistance.'], ['👩🏾‍🤝‍👩🏽', 'Communauté', 'Les agriculteurs co-créent les solutions, pas seulement les reçoivent.'], ['💡', 'Savoir', 'Éducation pratique, démos arbres-cultures, retours du terrain.'], ['🌍', 'Justice climatique', 'Les femmes et les filles mènent la résilience climatique.'], ['🔬', 'Preuves', 'FAO, données forestières et écoute des agriculteurs guident nos choix.'], ['📱', 'Innovation', 'La technologie rend le savoir accessible à tous.']]
    : [['🌱', 'Regeneration', 'Every action restores soils, forests and livelihoods.'], ['👩🏾‍🤝‍👩🏽', 'Community', 'Farmers co-create solutions, not just receive them.'], ['💡', 'Knowledge', 'Practical education, tree-crop demos, field feedback.'], ['🌍', 'Climate justice', 'Women and girls lead climate resilience.'], ['🔬', 'Evidence', 'FAO data, forest data and farmer listening guide us.'], ['📱', 'Innovation', 'Technology makes knowledge accessible to all.']];
  const timeline = fr
    ? [['Nov 2025', 'Naissance de WGC', 'Créée face à la perte des forêts et à l’expansion agricole.'], ['Début', 'Nkolbisson & Minkoa-Meyos', 'Premiers 20+ arbres plantés en zones dégradées.'], ['Ateliers 1–2', '13 filles formées', 'Pratiques environnementales et durables.'], ['Outreaches 1–3', '18–23 agriculteurs', 'Sensibilisation + combinaisons arbres-cultures.'], ['Prototype', 'WGC Farm App', 'Présentée aux agriculteurs pour retours terrain.'], ['Demain', '100K arbres · 1000 agricultrices · 500 leaders', 'Objectifs long terme à travers le Cameroun.']]
    : [['Nov 2025', 'WGC is born', 'Founded in response to forest loss and farmland expansion.'], ['Start', 'Nkolbisson & Minkoa-Meyos', 'First 20+ trees planted on degraded land.'], ['Workshops 1–2', '13 girls trained', 'Environmental and sustainable practices.'], ['Outreaches 1–3', '18–23 farmers', 'Awareness + tree-crop combinations.'], ['Prototype', 'WGC Farm App', 'Shown to farmers for field feedback.'], ['Tomorrow', '100K trees · 1,000 women · 500 leaders', 'Long-term goals across Cameroon.']];
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading kicker={fr ? 'À propos' : 'About WGC'} title={fr ? 'Qui restaure le Cameroun ?' : 'Who is restoring Cameroon?'} lead={fr ? 'Women for a Greener Cameroon (WGC) est une initiative environnementale dirigée par des jeunes : agroforesterie, éducation des agriculteurs, leadership des filles et restauration.' : 'Women for a Greener Cameroon (WGC) is a youth-led environmental initiative: agroforestry, farmer education, girls’ leadership and restoration.'} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal><div className="h-full rounded-[28px_90px_28px_90px] border border-forest/15 bg-gradient-to-br from-forest to-leaf p-8 text-white shadow-glow"><h3 className="font-serif text-3xl font-bold">🎯 Mission</h3><p className="mt-3 leading-relaxed text-white/90">{fr ? 'Autonomiser les femmes et les filles par l’éducation environnementale, l’agriculture durable et des initiatives communautaires qui luttent contre la déforestation, restaurent les écosystèmes et promeuvent le développement durable au Cameroun.' : 'To empower women and girls through environmental education, sustainable agriculture and community-driven initiatives that combat deforestation, restore ecosystems and promote sustainable development across Cameroon.'}</p></div></Reveal>
          <Reveal delay={0.1}><div className="h-full rounded-[90px_28px_90px_28px] border border-forest/15 bg-white p-8 shadow-glow dark:border-white/10 dark:bg-carddark"><h3 className="font-serif text-3xl font-bold text-forest dark:text-leafaccent">🔭 Vision</h3><p className="mt-3 leading-relaxed text-foresttext/75 dark:text-white/70">{fr ? 'Un Cameroun plus vert et durable, où femmes et communautés portent ensemble la conservation et la résilience climatique.' : 'A greener, more sustainable Cameroon, where women and communities work together to drive conservation and climate resilience.'}</p><div className="mt-4 rounded-2xl bg-sand p-4 text-sm dark:bg-white/5"><strong>🗨️ {fr ? 'Devise' : 'Motto'}:</strong> {fr ? 'Restaurer la nature, autonomiser les communautés.' : 'Restoring nature, empowering communities.'}</div></div></Reveal>
        </div>
      </div>
      <RootDivider />
      <section className="bg-fog py-14 dark:bg-jungle/40"><div className="mx-auto max-w-7xl px-5">
        <SectionHeading kicker={fr ? 'Pourquoi nous existons' : 'Why we exist'} title={fr ? 'Le problème' : 'The problem we address'} lead={fr ? 'Entre 2002 et 2025, le Cameroun a perdu ~1,2 million d’hectares de forêt primaire humide — près de 49 % de sa perte totale. L’agriculture commerciale et de subsistance exerce une pression directe (FAO). Sans arbres : sols dégradés, érosion, biodiversité perdue, récoltes fragiles.' : 'Between 2002 and 2025, Cameroon lost ~1.2M hectares of humid primary forest — nearly 49% of total tree-cover loss. Commercial and subsistence farming drive pressure (FAO). Without trees: degraded soils, erosion, biodiversity loss, fragile harvests.'} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[['🪵', '1.2M ha', fr ? 'forêt primaire perdue' : 'primary forest lost'], ['📉', '49%', fr ? 'de la perte totale' : 'of total tree-cover loss'], ['👩🏾‍🌾', '60%+', fr ? 'main-d’œuvre agricole = femmes' : 'of ag workforce are women'], ['🌾', 'FAO', fr ? 'l’agroforesterie comme solution' : 'agroforestry as a solution']].map(([i, h, p], k) => (
            <Reveal key={k} delay={k * 0.07}><div className="rounded-3xl border border-forest/15 bg-white p-6 text-center dark:border-white/10 dark:bg-carddark"><div className="text-3xl">{i}</div><div className="font-serif text-3xl font-bold text-forest dark:text-leafaccent">{h}</div><div className="text-sm text-foresttext/65 dark:text-white/60">{p}</div></div></Reveal>
          ))}
        </div>
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-14"><SectionHeading kicker={fr ? 'Nos valeurs' : 'Values'} title={fr ? 'Ce qui guide nos racines' : 'What guides our roots'} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(([i, h, p], k) => (<Reveal key={k} delay={(k % 3) * 0.07}><div className="h-full rounded-3xl border border-forest/15 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-carddark"><div className="text-3xl">{i}</div><h3 className="mt-2 font-serif text-xl font-bold text-forest dark:text-white">{h}</h3><p className="mt-1 text-sm text-foresttext/70 dark:text-white/65">{p}</p></div></Reveal>))}</div>
      </section>
      <section className="bg-gradient-to-b from-sand to-naturewhite py-14 dark:from-jungle dark:to-forestblack">
        <div className="mx-auto max-w-4xl px-5"><SectionHeading kicker={fr ? 'Chronologie — cernes de l’arbre' : 'Timeline — tree rings'} title={fr ? 'L’histoire de WGC grandit' : 'The WGC story grows'} />
          <ol className="relative mt-10 border-l-4 border-fresh/60 pl-6" aria-label="Timeline">
            {timeline.map(([d, h, p], k) => (<Reveal key={k}><li className="relative pb-8"><span className="absolute -left-[38px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fresh to-forest text-sm shadow-glow" aria-hidden>🌱</span><p className="text-xs font-extrabold uppercase tracking-widest text-leaf">{d}</p><h3 className="font-serif text-2xl font-bold">{h}</h3><p className="text-sm text-foresttext/70 dark:text-white/65">{p}</p></li></Reveal>))}
          </ol>
        </div>
      </section>
    </div>
  );
}
