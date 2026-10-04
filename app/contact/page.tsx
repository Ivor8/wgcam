'use client';
import { useState } from 'react';
import { FiCheck, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal, openWhatsApp, whatsappLink } from '../../components/ui';

export default function Contact() {
  const { lang } = useLang();
  const fr = lang === 'fr';
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Parlons-nous' : 'Get in touch'}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foresttext/70 dark:text-white/70">
          {fr
            ? 'Que vous soyez agriculteur, bénévole, partenaire ou simplement curieux, nous serons heureux de vous lire.'
            : 'Whether you are a farmer, a volunteer, a partner or simply curious, we would be glad to hear from you.'}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="card-clean p-7 sm:p-9">
            <h2 className="font-serif text-2xl font-semibold">{fr ? 'Envoyez-nous un message' : 'Send us a message'}</h2>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-sage p-6 text-center dark:bg-white/10" role="status">
                <FiCheck className="mx-auto text-forest dark:text-white" size={28} />
                <p className="mt-2 font-serif text-xl font-semibold">{fr ? 'Merci ! Votre message s’ouvre dans WhatsApp.' : 'Thank you! Your message is opening in WhatsApp.'}</p>
                <p className="mt-1 text-sm text-foresttext/65 dark:text-white/60">{fr ? 'Appuyez sur Envoyer dans WhatsApp pour nous le faire parvenir.' : 'Press Send in WhatsApp to deliver it to us.'}</p>
                {waUrl && (
                  <a href={waUrl} target="_blank" rel="noopener" className="btn-primary mt-5">
                    <FiMessageCircle size={16} /> {fr ? 'Ouvrir WhatsApp' : 'Open WhatsApp'}
                  </a>
                )}
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                  }
                  const data = new FormData(form);
                  const name = String(data.get('name') || '');
                  const email = String(data.get('email') || '');
                  const phone = String(data.get('phone') || '');
                  const message = String(data.get('message') || '');
                  const text = fr
                    ? `Nouveau message — site WGC (Contact)\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone || '—'}\nMessage: ${message}`
                    : `New message — WGC website (Contact)\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nMessage: ${message}`;
                  setWaUrl(whatsappLink(text));
                  openWhatsApp(text);
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider">{fr ? 'Nom complet' : 'Full name'} *</span>
                    <input name="name" required placeholder={fr ? 'Votre nom' : 'Your name'} className="w-full rounded-xl border border-forest/20 bg-cream px-4 py-3 text-sm focus:border-forest focus:outline-none dark:border-white/15 dark:bg-forestblack" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider">Email *</span>
                    <input name="email" required type="email" placeholder="you@email.com" className="w-full rounded-xl border border-forest/20 bg-cream px-4 py-3 text-sm focus:border-forest focus:outline-none dark:border-white/15 dark:bg-forestblack" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider">{fr ? 'Téléphone' : 'Phone'}</span>
                  <input name="phone" placeholder="+237 ..." className="w-full rounded-xl border border-forest/20 bg-cream px-4 py-3 text-sm focus:border-forest focus:outline-none dark:border-white/15 dark:bg-forestblack" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider">Message *</span>
                  <textarea name="message" required rows={5} placeholder={fr ? 'Dites-nous comment vous souhaitez aider ou collaborer.' : 'Tell us how you would like to help or collaborate.'} className="w-full rounded-xl border border-forest/20 bg-cream px-4 py-3 text-sm focus:border-forest focus:outline-none dark:border-white/15 dark:bg-forestblack" />
                </label>
                <button className="btn-primary w-full justify-center">
                  <FiMessageCircle size={16} /> {fr ? 'Envoyer via WhatsApp' : 'Send via WhatsApp'}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.06}>
            <div className="rounded-[20px] bg-forest p-7 text-white sm:p-8">
              <h2 className="font-serif text-2xl font-semibold">{fr ? 'Où nous trouver' : 'Where to find us'}</h2>
              <ul className="mt-5 space-y-3 text-[15px] text-white/90">
                <li className="flex items-start gap-2"><FiMapPin className="mt-1 shrink-0" size={17} /> Nkolbisson · Minkoa-Meyos · Cameroon</li>
                <li><a href="tel:+237652595666" className="flex items-center gap-2 font-semibold underline underline-offset-4"><FiPhone size={16} /> +237 6 52 59 56 66</a></li>
                <li><a href="https://wa.me/237652595666" className="flex items-center gap-2 underline underline-offset-4"><FiMessageCircle size={16} /> WhatsApp</a></li>
              </ul>
              <div className="mt-5 overflow-hidden rounded-xl">
                <iframe title="WGC map Nkolbisson Cameroon" src="https://www.google.com/maps?q=Nkolbisson,Cameroon&output=embed" className="h-52 w-full border-0" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-clean p-7">
              <h2 className="font-serif text-xl font-semibold">{fr ? 'Partenariats' : 'Partnerships'}</h2>
              <p className="mt-2 text-[15px] text-foresttext/70 dark:text-white/65">
                {fr
                  ? 'ONG, organisations climatiques, partenaires publics, chercheurs : écrivons ensemble des projets agroforestiers utiles et mesurables.'
                  : 'NGOs, climate organisations, public partners, researchers: let’s build useful, measurable agroforestry projects together.'}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
}
