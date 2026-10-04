'use client';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useLang } from '../../components/Providers';
import { Eyebrow, Reveal } from '../../components/ui';

export default function FAQ() {
  const { lang } = useLang();
  const fr = lang === 'fr';
  const [open, setOpen] = useState(0);

  const faqs = fr
    ? [
        ['Qu’est-ce que WGC ?', 'Women for a Greener Cameroon est une initiative environnementale dirigée par des jeunes. Nous travaillons sur l’agroforesterie, la formation des agriculteurs, l’éco-leadership des filles, la restauration et la technologie.'],
        ['Qu’est-ce que l’agroforesterie ?', 'C’est planter et entretenir des arbres avec les cultures sur la même parcelle, au lieu de tout défricher. Cela permet de protéger les sols, d’apporter de l’ombre, de soutenir la biodiversité et de diversifier les revenus.'],
        ['Où travaillez-vous ?', 'À Nkolbisson et à Minkoa-Meyos, au Cameroun, où nous avons planté plus de 20 arbres en zones dégradées. Nos objectifs à long terme sont 100 000+ arbres, 1 000+ agricultrices formées et 500+ jeunes formés.'],
        ['Comment rejoindre WGC ?', 'Rendez-vous sur la page « S’impliquer » et choisissez : bénévole, partenaire, don ou communauté. Il suffit de remplir le formulaire et notre équipe vous répondra.'],
        ['Qu’est-ce que l’application WGC Farm ?', 'C’est un prototype que nous avons présenté aux agriculteurs pour recueillir leurs retours, afin de concevoir une plateforme vraiment adaptée à leurs besoins.'],
        ['Quels ODD soutenez-vous ?', 'L’ODD 2 (Faim « zéro »), l’ODD 13 (Action climatique) et l’ODD 15 (Vie terrestre).'],
      ]
    : [
        ['What is WGC?', 'Women for a Greener Cameroon is a youth-led environmental initiative. We work on agroforestry, farmer education, girls’ eco-leadership, restoration and technology.'],
        ['What is agroforestry?', 'It means planting and keeping trees with crops on the same farm instead of clearing everything. It helps protect soils, provide shade, support biodiversity and diversify income.'],
        ['Where do you work?', 'In Nkolbisson and Minkoa-Meyos, Cameroon, where we have planted 20+ trees in degraded areas. Our long-term goals are 100,000+ trees, 1,000+ women farmers educated and 500+ youth trained.'],
        ['How can I join WGC?', 'Go to the “Get involved” page and choose: volunteer, partner, donate or community. Just fill in the form and our team will reply.'],
        ['What is the WGC Farm App?', 'It is a prototype we have presented to farmers to gather feedback, so the platform is designed around their needs.'],
        ['Which SDGs do you support?', 'SDG 2 (Zero Hunger), SDG 13 (Climate Action) and SDG 15 (Life on Land).'],
      ];

  return (
    <div className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{fr ? 'Questions fréquentes' : 'Frequently asked questions'}</h1>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-3 px-5">
        {faqs.map(([q, a], i) => (
          <Reveal key={i}>
            <div className={`overflow-hidden rounded-2xl border transition ${open === i ? 'border-forest/30 bg-white dark:bg-carddark' : 'border-forest/15 bg-white dark:border-white/10 dark:bg-carddark/60'}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-3 p-5 text-left font-serif text-lg font-semibold">
                <span>{q}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${open === i ? 'rotate-45 bg-forest text-white' : 'bg-fog dark:bg-white/10'}`} aria-hidden>
                  <FiPlus size={16} />
                </span>
              </button>
              {open === i && <p className="px-5 pb-5 text-[15px] leading-relaxed text-foresttext/70 dark:text-white/65">{a}</p>}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="h-16" />
    </div>
  );
}
