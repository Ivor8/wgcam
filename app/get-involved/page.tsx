'use client';
import { useState } from 'react';
import { FiCheck, FiSend } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

export default function GetInvolved() {
  const { lang } = useLang();
  const fr = lang === 'fr';
  const [tab, setTab] = useState('volunteer');
  const [done, setDone] = useState(false);

  const tabs = [
    { k: 'volunteer', en: 'Volunteer', fr: 'Bénévole' },
    { k: 'partner', en: 'Partner', fr: 'Partenaire' },
    { k: 'donate', en: 'Donate', fr: 'Faire un don' },
    { k: 'community', en: 'Community', fr: 'Communauté' },
  ];

  const copy: Record<string, string> = fr
    ? {
        volunteer: 'Rejoignez nos plantations d’arbres, nos ateliers pour les filles et nos sensibilisations auprès des agriculteurs.',
        partner: 'ONG, organisations climatiques, partenaires publics et chercheurs : écrivez-nous via le formulaire pour construire un projet ensemble.',
        donate: 'Vos dons soutiennent les arbres, les ateliers pour les filles, la sensibilisation des agriculteurs et l’application WGC Farm. Les modalités pratiques sont confirmées directement avec notre équipe.',
        community: 'Parlez-nous de votre communauté : sensibilisation, formation à l’agroforesterie, démonstrations d’associations arbres-cultures.',
      }
    : {
        volunteer: 'Join our tree plantings, girls’ workshops and farmer outreach sessions.',
        partner: 'NGOs, climate organisations, public partners and researchers: write to us through the form so we can build a project together.',
        donate: 'Your gifts support trees, girls’ workshops, farmer outreach and the WGC Farm App. Practical arrangements are confirmed directly with our team.',
        community: 'Tell us about your community: outreach, agroforestry training, tree-crop demonstrations.',
      };

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>{fr ? 'S’impliquer' : 'Get involved'}</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Quatre façons de contribuer' : 'Four ways to contribute'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr ? 'Bénévole, partenaire, donateur ou communauté : choisissez la façon de participer qui vous correspond.' : 'Volunteer, partner, donor or community: choose the way to take part that suits you.'}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-5">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Involvement">
          {tabs.map((tb) => (
            <button
              key={tb.k}
              role="tab"
              aria-selected={tab === tb.k}
              onClick={() => {
                setTab(tb.k);
                setDone(false);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${tab === tb.k ? 'bg-forest text-white' : 'border border-forest/20 text-forest dark:border-white/20 dark:text-white'}`}
            >
              {fr ? tb.fr : tb.en}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[20px] bg-forest p-8 text-white">
              <h2 className="font-serif text-2xl font-semibold">{tabs.find((x) => x.k === tab) ? (fr ? tabs.find((x) => x.k === tab)!.fr : tabs.find((x) => x.k === tab)!.en) : ''}</h2>
              <p className="mt-3 leading-relaxed text-white/85">{copy[tab]}</p>
              <p className="mt-6 text-sm text-white/70">Nkolbisson · Minkoa-Meyos · Cameroon</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="card-clean p-7">
              {done ? (
                <div className="p-6 text-center" role="status">
                  <FiCheck className="mx-auto text-forest" size={32} />
                  <p className="mt-3 font-serif text-2xl font-semibold">{fr ? 'Merci, votre message est bien envoyé.' : 'Thank you, your message has been sent.'}</p>
                  <p className="mt-1 text-sm text-foresttext/60">{fr ? 'Nous vous répondrons très vite.' : 'We will reply very soon.'}</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!(e.currentTarget as HTMLFormElement).checkValidity()) {
                      (e.currentTarget as HTMLFormElement).reportValidity();
                      return;
                    }
                    setDone(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider">{fr ? 'Nom' : 'Name'} *</span>
                      <input required className="w-full rounded-xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack" placeholder={fr ? 'Votre nom' : 'Your name'} />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider">Email *</span>
                      <input required type="email" className="w-full rounded-xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack" placeholder="you@email.com" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider">Message *</span>
                    <textarea required rows={4} className="w-full rounded-xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack" placeholder={fr ? 'Parlez-nous de vous et de votre envie de contribuer.' : 'Tell us about yourself and how you would like to contribute.'} />
                  </label>
                  <button className="btn-primary w-full justify-center">
                    <FiSend size={16} /> {fr ? 'Envoyer' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
}
