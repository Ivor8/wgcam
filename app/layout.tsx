import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../components/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NatureBackground, { Preloader } from '../components/Nature';
import Script from 'next/script';

export const metadata: Metadata = {
  title: { default: 'Women for a Greener Cameroon — Restoring Nature, Empowering Communities', template: '%s | WGC Cameroon' },
  description: 'WGC is a youth-led environmental NGO in Cameroon advancing agroforestry, women farmers, youth eco-leadership, restoration and the WGC Farm App. Nkolbisson · Minkoa-Meyos.',
  keywords: ['Women for a Greener Cameroon', 'WGC Cameroon', 'agroforestry Cameroon', 'women farmers', 'youth eco leadership', 'reforestation', 'Nkolbisson', 'Minkoa-Meyos', 'SDG 2 13 15'],
  openGraph: { title: 'Women for a Greener Cameroon', description: 'Restoring Nature. Empowering Communities. Agroforestry + women + youth + technology.', type: 'website', locale: 'en_US', alternateLocale: 'fr_FR' },
  alternates: { canonical: 'https://wgc-cameroon.org' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Women for a Greener Cameroon',
    alternateName: 'WGC',
    slogan: 'Restoring Nature. Empowering Communities.',
    areaServed: 'Cameroon',
    foundingDate: '2025-11',
    knowsAbout: ['Agroforestry', 'Environmental Restoration', 'Women Farmers', 'Youth Leadership'],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body id="top" className="bg-naturewhite text-foresttext dark:bg-forestblack dark:text-white">
        <Providers>
          <Script id="org-schema" type="application/ld+json">{JSON.stringify(orgSchema)}</Script>
          <Preloader />
          <NatureBackground />
          <Navbar />
          <main id="main" className="relative z-[2]">{children}</main>
          <div className="relative z-[2]"><Footer /></div>
        </Providers>
      </body>
    </html>
  );
}
