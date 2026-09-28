'use client';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

const team = [
  { n: 'Kristy-Marc Mafue Melo', rEn: 'Co-founder & President', rFr: 'Cofondatrice & Présidente', dEn: 'Leads overall direction and day-to-day running of WGC, including coordination and financial management across environmental, agricultural and community programmes.', dFr: 'Porte la direction générale et le quotidien de WGC : coordination et gestion financière des programmes environnementaux, agricoles et communautaires.', g: 'Leadership', e: '🌺' },
  { n: 'Cynthia Alanyuy Wrinkar', rEn: 'Co-founder & Project Lead', rFr: 'Cofondatrice & Cheffe de projets', dEn: 'Leads project development and implementation while supporting outreach, partnerships and programmes for sustainable agriculture and community empowerment.', dFr: 'Porte le développement et la mise en œuvre des projets : sensibilisation, partenariats et agriculture durable au service des communautés.', g: 'Leadership', e: '🌿' },
  { n: 'Taidouhim Djoda Misa Laure', rEn: 'Chief Operations Officer', rFr: 'Directrice des opérations', dEn: 'Supports operations and project coordination, drawing on experience in project management and organisational implementation.', dFr: 'Appuie les opérations et la coordination des projets, forte d’une expérience en gestion et mise en œuvre organisationnelle.', g: 'Core Team', e: '🌻' },
  { n: 'Jean Précise / Seka Jean Blaise Tarnyuy', rEn: 'Technical Advisor', rFr: 'Conseiller technique', dEn: 'Provides technical guidance drawing on experience in project development, climate justice, clean energy and community initiatives.', dFr: 'Apporte un appui technique : développement de projets, justice climatique, énergie propre et initiatives communautaires.', g: 'Advisors', e: '🌳' },
  { n: 'Cindy Melo Shimyui', rEn: 'Chief Technology Officer', rFr: 'Directrice technologie', dEn: 'Leads technological development of the WGC Farm App and supports digital tools advancing sustainable agriculture.', dFr: 'Porte le développement de WGC Farm App et l’usage du numérique pour une agriculture durable.', g: 'Core Team', e: '📱' },
];

export default function Team() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const groups = ['Leadership', 'Core Team', 'Advisors'];
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5"><SectionHeading kicker={fr ? 'Équipe' : 'Team'} title={fr ? 'Les mains qui plantent' : 'The hands that plant'} lead={fr ? 'Femmes, jeunes et conseillers : une équipe resserrée, enracinée dans les communautés.' : 'Women, youth and advisors: a tight team rooted in communities.'} />
        {groups.map((g) => (
          <div key={g} className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-forest dark:text-leafaccent">🌿 {g === 'Leadership' ? (fr ? 'Direction' : 'Leadership') : g === 'Core Team' ? (fr ? 'Équipe centrale' : 'Core Team') : (fr ? 'Conseillers' : 'Advisors')}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.filter((t) => t.g === g).map((t, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08}>
                  <article className="group relative h-full overflow-hidden rounded-[30px] border border-forest/15 bg-white p-7 text-center transition hover:-translate-y-2 hover:shadow-glow-lg dark:border-white/10 dark:bg-carddark">
                    <div className="absolute inset-x-8 top-4 h-24 rounded-full bg-fresh/15 blur-2xl opacity-0 transition group-hover:opacity-100" aria-hidden />
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sand to-fog text-5xl ring-4 ring-fresh/40 transition group-hover:ring-fresh dark:from-white/10 dark:to-white/5" aria-hidden>{t.e}</div>
                    <h3 className="mt-4 font-serif text-2xl font-bold">{t.n}</h3>
                    <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.2em] text-leaf">{fr ? t.rFr : t.rEn}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foresttext/70 dark:text-white/65">{fr ? t.dFr : t.dEn}</p>
                    <div className="mt-4 flex justify-center gap-2">{['in', '𝕏', '✉️'].map((s, k) => (<a key={k} href="#" aria-label={`${t.n} social ${s}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-fog text-sm font-bold transition hover:bg-fresh hover:text-forestblack dark:bg-white/10">{s}</a>))}</div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
        <Reveal><div className="mt-12 rounded-[32px] bg-gradient-to-r from-forest to-fresh p-8 text-center text-white"><h2 className="font-serif text-3xl font-bold">{fr ? 'Envie de rejoindre les volontaires ?' : 'Want to join the volunteers?'}</h2><a href="/get-involved" className="mt-4 inline-block rounded-full bg-white px-7 py-3 font-bold text-forest">🤝 {fr ? 'Devenir bénévole' : 'Become a volunteer'}</a></div></Reveal>
      </div>
      <div className="h-16" />
    </div>
  );
}
