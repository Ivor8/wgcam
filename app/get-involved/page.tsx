'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

export default function GetInvolved() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const [tab, setTab] = useState('volunteer');
  const [done, setDone] = useState(false);
  const tabs = fr ? [['volunteer', '🤝 Bénévole'], ['partner', '🌍 Partenaire'], ['donate', '💚 Don'], ['community', '🌱 Communauté']] : [['volunteer', '🤝 Volunteer'], ['partner', '🌍 Partner'], ['donate', '💚 Donate'], ['community', '🌱 Community']];
  const copy: Record<string, string> = fr ? {
    volunteer: 'Rejoignez plantations d’arbres, ateliers pour les filles et sensibilisation.',
    partner: 'ONG, organisations climatiques, partenaires gouvernementaux, chercheurs : écrivez à WGC via le formulaire.',
    donate: 'Les dons soutiennent arbres, ateliers pour les filles, sensibilisation et Farm App. Les modalités seront précisées par l’équipe.',
    community: 'Parlez-nous de votre communauté : sensibilisation, éducation à l’agroforesterie, démonstrations arbres-cultures.',
  } : {
    volunteer: 'Join tree-planting, girls’ workshops and outreach.',
    partner: 'NGOs, climate organisations, government partners and researchers: work with WGC via the form.',
    donate: 'Gifts support trees, girls’ workshops, farmer outreach and the Farm App. Arrangements will be confirmed by the team.',
    community: 'Tell us about your community: outreach, agroforestry education, tree-crop demonstrations.',
  };
  return (
    <div className="pt-28"><div className="mx-auto max-w-6xl px-5">
      <SectionHeading kicker={fr ? 'S’impliquer' : 'Get involved'} title={fr ? 'Quatre graines, un même arbre' : 'Four seeds, one tree'} lead={fr ? 'Bénévole · Partenaire · Don · Communauté. Choisissez votre façon de faire pousser.' : 'Volunteer · Partner · Donate · Community. Choose your way to grow.'} />
      <Reveal><div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Involvement">
        {tabs.map(([k, l]) => (<button key={k} role="tab" aria-selected={tab === k} onClick={() => { setTab(k); setDone(false); }} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${tab === k ? 'bg-forest text-white shadow-glow' : 'bg-fog text-forest dark:bg-white/10 dark:text-white'}`}>{l}</button>))}
      </div></Reveal>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal><div className="h-full rounded-[32px] bg-gradient-to-br from-forest via-leaf to-fresh p-8 text-white"><p className="text-5xl">{tabs.find((t) => t[0] === tab)?.[1].split(' ')[0]}</p><h2 className="mt-2 font-serif text-3xl font-bold">{tabs.find((t) => t[0] === tab)?.[1].slice(2)}</h2><p className="mt-3 text-white/90">{copy[tab]}</p>
          {tab === 'donate' && <div className="mt-5 rounded-2xl bg-white/15 p-4 text-sm text-white/90">{fr ? 'Dons : arbres, ateliers pour les filles, sensibilisation des agriculteurs, Farm App. Les modalités seront précisées par l’équipe.' : 'Gifts: trees, girls’ workshops, farmer outreach, Farm App. Arrangements will be confirmed by the team.'}</div>}
          <ul className="mt-5 space-y-2 text-sm text-white/85"><li>🌿 {fr ? 'Activités : plantations, ateliers, sensibilisation' : 'Activities: plantings, workshops, outreach'}</li><li>📍 Nkolbisson · Minkoa-Meyos · Cameroun</li></ul>
        </div></Reveal>
        <Reveal delay={0.1}><div className="rounded-[32px] border border-forest/15 bg-white p-7 dark:border-white/10 dark:bg-carddark">
          {done ? (<div className="bloom p-6 text-center" role="status"><div className="text-6xl">🌸</div><p className="mt-2 font-serif text-2xl font-bold text-forest dark:text-leafaccent">{fr ? 'Bienvenue dans la forêt !' : 'Welcome to the forest!'}</p></div>)
          : (<form className="space-y-4" onSubmit={(e) => { e.preventDefault(); if (!(e.currentTarget as HTMLFormElement).checkValidity()) { (e.currentTarget as HTMLFormElement).reportValidity(); return; } setDone(true); }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className="mb-1 block text-xs font-extrabold uppercase tracking-widest">{fr ? 'Nom *' : 'Name *'}</span><input required className="w-full rounded-2xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack/60" placeholder="Amina" /></label>
              <label className="block"><span className="mb-1 block text-xs font-extrabold uppercase tracking-widest">Email *</span><input required type="email" className="w-full rounded-2xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack/60" placeholder="you@email.com" /></label>
            </div>
            <label className="block"><span className="mb-1 block text-xs font-extrabold uppercase tracking-widest">{fr ? 'Message *' : 'Message *'}</span><textarea required rows={4} className="w-full rounded-2xl border border-forest/20 px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack/60" placeholder={fr ? 'Parlez-nous de vous…' : 'Tell us about you…'} /></label>
            <button className="btn-shimmer w-full rounded-full bg-gradient-to-r from-forest to-fresh py-3.5 font-bold text-white">🌱 {fr ? 'Envoyer ma candidature' : 'Send my application'}</button>
            <label className="flex items-start gap-2 text-xs opacity-70"><input type="checkbox" required className="mt-0.5" />{fr ? 'J’accepte d’être recontacté(e) par WGC (infolettre possible).' : 'I agree to be contacted by WGC (newsletter possible).'}</label>
          </form>)}
        </div></Reveal>
      </div>
      <Reveal><div className="mt-8 rounded-[32px] border border-forest/15 bg-sand p-7 text-center dark:border-white/10 dark:bg-white/5"><p className="font-serif text-2xl font-bold text-forest dark:text-white">✉️ {fr ? 'Infolettre — laissez votre email.' : 'Newsletter — leave your email.'}</p><form className="mx-auto mt-4 flex max-w-md overflow-hidden rounded-full bg-white p-1.5 shadow dark:bg-carddark" onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).innerHTML = `<p class='w-full p-2 text-sm font-bold'>🌸 ${fr ? 'Merci !' : 'Thank you!'}</p>`; }}><input required type="email" placeholder="you@email.com" aria-label="Email" className="w-full bg-transparent px-4 text-sm focus:outline-none" /><button className="rounded-full bg-forest px-6 py-2.5 text-sm font-bold text-white">🌱 OK</button></form></div></Reveal>
    </div><div className="h-16" /></div>
  );
}
