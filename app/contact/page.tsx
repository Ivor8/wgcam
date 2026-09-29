'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-widest text-forest dark:text-leafaccent">{label}</span>
      <input {...rest} className="w-full rounded-2xl border border-forest/20 bg-white px-4 py-3 text-sm focus:border-fresh focus:outline-none dark:border-white/15 dark:bg-forestblack/60" />
    </label>
  );
}

function BloomForm({ id, fr, fields, submit }: { id: string; fr: boolean; fields: string[]; submit: string }) {
  const [ok, setOk] = useState(false); const [err, setErr] = useState(false);
  return ok ? (
    <div className="bloom rounded-3xl bg-fresh/15 p-8 text-center ring-1 ring-fresh/40" role="status">
      <div className="text-5xl">🌸</div>
      <p className="mt-2 font-serif text-2xl font-bold text-forest dark:text-leafaccent">{fr ? 'Merci ! Votre graine est plantée.' : 'Thank you! Your seed is planted.'}</p>
      <p className="text-sm">{fr ? 'Notre équipe vous répondra très vite.' : 'Our team will reply very soon.'}</p>
    </div>
  ) : (
    <form id={id} className={err ? 'leaf-shake space-y-4' : 'space-y-4'} onSubmit={(e) => { e.preventDefault(); const f = e.currentTarget; if (!(f as HTMLFormElement).checkValidity()) { setErr(true); setTimeout(() => setErr(false), 900); (f as HTMLFormElement).reportValidity(); return; } setOk(true); }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={fr ? 'Nom complet *' : 'Full name *'} required placeholder="Amina …" />
        <Field label="Email *" required type="email" placeholder="you@email.com" />
      </div>
      {fields.includes('phone') && <Field label={fr ? 'Téléphone' : 'Phone'} placeholder="+237 …" />}
      {fields.includes('interest') && (
        <label className="block"><span className="mb-1.5 block text-xs font-extrabold uppercase tracking-widest text-forest dark:text-leafaccent">{fr ? 'Je veux' : 'I want to'}</span>
          <select className="w-full rounded-2xl border border-forest/20 bg-white px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack/60" defaultValue="volunteer">
            <option value="volunteer">🤝 {fr ? 'Être bénévole' : 'Volunteer'}</option>
            <option value="partner">🌍 {fr ? 'Devenir partenaire' : 'Partner'}</option>
            <option value="donate">💚 {fr ? 'Faire un don' : 'Donate'}</option>
            <option value="community">🌱 {fr ? 'Inscrire ma communauté' : 'Register my community'}</option>
          </select></label>
      )}
      <label className="block"><span className="mb-1.5 block text-xs font-extrabold uppercase tracking-widest text-forest dark:text-leafaccent">Message *</span>
        <textarea required rows={4} placeholder={fr ? 'Dites-nous comment vous voulez aider…' : 'Tell us how you want to help…'} className="w-full rounded-2xl border border-forest/20 bg-white px-4 py-3 text-sm dark:border-white/15 dark:bg-forestblack/60" /></label>
      <button className="btn-shimmer w-full rounded-full bg-gradient-to-r from-forest to-fresh py-3.5 font-bold text-white shadow-glow">🌱 {submit} → ✈️🐦</button>
    </form>
  );
}

export default function Contact() {
  const { lang } = useLang(); const fr = lang === 'fr';
  return (
    <div className="pt-28"><div className="mx-auto max-w-7xl px-5">
      <SectionHeading kicker="Contact" title={fr ? 'Écrivons la suite ensemble' : 'Let’s write what’s next'} lead={fr ? 'Nkolbisson · Minkoa-Meyos · Cameroun. Écrivez-nous via le formulaire ci-dessous.' : 'Nkolbisson · Minkoa-Meyos · Cameroon. Write to us via the form below.'} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal><div className="rounded-[32px] border border-forest/15 bg-white p-7 dark:border-white/10 dark:bg-carddark sm:p-9">
          <h2 className="font-serif text-2xl font-bold">✉️ {fr ? 'Envoyez un message' : 'Send a message'}</h2>
          <p className="mb-5 text-sm text-foresttext/65 dark:text-white/60">{fr ? 'L’avion en papier devient oiseau après l’envoi.' : 'The paper plane becomes a bird after sending.'}</p>
          <BloomForm id="contact" fr={fr} fields={['phone']} submit={fr ? 'Envoyer' : 'Send'} />
        </div></Reveal>
        <div className="grid gap-6">
          <Reveal delay={0.1}><div className="rounded-[32px] bg-gradient-to-br from-forest to-leaf p-7 text-white">
            <h2 className="font-serif text-2xl font-bold">📍 {fr ? 'Où nous travaillons' : 'Where we work'}</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/90"><li>Nkolbisson · Minkoa-Meyos · Cameroon</li><li>☎️ <a href="tel:+237652595666" className="font-bold underline">+237 6 52 59 56 66</a></li><li><a href="https://wa.me/237652595666" className="underline">WhatsApp →</a> · {fr ? 'ou écrivez via le formulaire' : 'or write via the form'}</li></ul>
            <div className="mt-4 overflow-hidden rounded-2xl"><iframe title="WGC map Nkolbisson Cameroon" src="https://www.google.com/maps?q=Nkolbisson,Cameroon&output=embed" className="h-52 w-full border-0" loading="lazy" /></div>
          </div></Reveal>
          <Reveal delay={0.18}><div className="rounded-[32px] border border-forest/15 bg-sand p-7 dark:border-white/10 dark:bg-white/5"><h2 className="font-serif text-2xl font-bold text-forest dark:text-white">🤝 {fr ? 'Partenaires & chercheurs' : 'Partners & researchers'}</h2><p className="mt-2 text-sm">{fr ? 'ONG, climat, gouvernement, universités : construisons des projets agroforestiers mesurables (SDG 2 · 13 · 15).' : 'NGOs, climate orgs, government, universities: let’s build measurable agroforestry projects (SDG 2 · 13 · 15).'}</p><a href="/get-involved" className="mt-4 inline-block rounded-full bg-forest px-6 py-3 text-sm font-bold text-white">→ {fr ? 'Devenir partenaire' : 'Become a partner'}</a></div></Reveal>
        </div>
      </div>
    </div><div className="h-16" /></div>
  );
}
