'use client';
import { useState } from 'react';
import { useLang } from '../../components/Providers';
import { Reveal, SectionHeading } from '../../components/ui';

export default function FAQ() {
  const { lang } = useLang(); const fr = lang === 'fr';
  const [open, setOpen] = useState(0);
  const faqs = fr ? [
    ['Qu’est-ce que WGC ?', 'Women for a Greener Cameroon : initiative environnementale dirigée par des jeunes. Agroforesterie, éducation des agriculteurs, éco-leadership des filles, restauration et technologie.'],
    ['Qu’est-ce que l’agroforesterie ?', 'Planter et entretenir des arbres avec les cultures sur la même parcelle, au lieu de tout défricher. Sols protégés, ombre, biodiversité et revenus diversifiés.'],
    ['Où travaillez-vous ?', 'Nkolbisson et Minkoa-Meyos, au Cameroun : 20+ arbres plantés en zones dégradées. Objectifs long terme : 100 000+ arbres, 1 000+ agricultrices formées, 500+ jeunes formés.'],
    ['Comment rejoindre ?', 'Page « S’impliquer » : bénévole, partenaire, don ou communauté — via les formulaires du site.'],
    ['Qu’est-ce que WGC Farm App ?', 'Un prototype présenté aux agriculteurs pour recueillir leurs retours, afin que la plateforme soit conçue autour de leurs besoins.'],
    ['Quels ODD soutenez-vous ?', 'ODD 2 (Faim zéro), ODD 13 (Climat), ODD 15 (Vie terrestre).'],
  ] : [
    ['What is WGC?', 'Women for a Greener Cameroon: a youth-led environmental initiative. Agroforestry, farmer education, girls’ eco-leadership, restoration and technology.'],
    ['What is agroforestry?', 'Planting and keeping trees with crops on the same farm instead of clearing everything. Protected soils, shade, biodiversity and diverse income.'],
    ['Where do you work?', 'Nkolbisson and Minkoa-Meyos, Cameroon: 20+ trees planted in degraded areas. Long-term goals: 100,000+ trees, 1,000+ women farmers educated, 500+ youth trained.'],
    ['How can I join?', '“Get Involved” page: volunteer, partner, donate or community — via the site forms.'],
    ['What is the WGC Farm App?', 'A prototype presented to farmers to gather feedback, so the platform is designed around their needs.'],
    ['Which SDGs do you support?', 'SDG 2 (Zero Hunger), SDG 13 (Climate Action), SDG 15 (Life on Land).'],
  ];
  return (
    <div className="pt-28"><div className="mx-auto max-w-3xl px-5">
      <SectionHeading kicker="FAQ" title={fr ? 'Questions de la clairière' : 'Questions from the clearing'} />
      <div className="mt-8 space-y-3">
        {faqs.map(([q, a], i) => (
          <Reveal key={i}><div className={`overflow-hidden rounded-3xl border transition ${open === i ? 'border-fresh/60 bg-white shadow-glow dark:bg-carddark' : 'border-forest/15 bg-white/70 dark:border-white/10 dark:bg-carddark/60'}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-3 p-5 text-left font-serif text-xl font-bold">
              <span>🌿 {q}</span><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${open === i ? 'rotate-45 bg-fresh text-forestblack' : 'bg-fog dark:bg-white/10'}`} aria-hidden>+</span>
            </button>
            {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-foresttext/75 dark:text-white/70">{a}</p>}
          </div></Reveal>
        ))}
      </div>
    </div><div className="h-16" /></div>
  );
}
