import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://izikomissions.org'),
  title: 'Iziko Missions | Christ Proclaimed. Churches Planted.',
  description: 'Equipping local leaders, planting gospel-centered churches, and serving vulnerable communities across Southern Africa.',
  openGraph: {
    title: 'Iziko Missions',
    description: 'Christ proclaimed. Leaders equipped. Churches planted.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Iziko Missions — Christ proclaimed. Leaders equipped. Churches planted.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iziko Missions',
    description: 'Christ proclaimed. Leaders equipped. Churches planted.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
