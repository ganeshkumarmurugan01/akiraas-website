import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const SITE_URL = 'https://akiraas.com';
const GA_ID    = 'G-CTQQF6HQ3H';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  'Akiraas — Building Human Connections',
    template: '%s | Akiraas',
  },
  description:
    'Akiraas builds focused communities, curated experiences, and technology products that foster meaningful human connections. Headquartered in Singapore, operating worldwide.',
  keywords: [
    'Akiraas', 'human connections', 'professional communities', 'EVOLVE',
    'Vantage X', 'CIO Forum', 'Fingoh.ai', 'martech consulting',
    'Singapore', 'community building', 'B2B events',
  ],
  authors: [{ name: 'Akiraas Pte Ltd', url: SITE_URL }],
  creator: 'Akiraas Pte Ltd',
  publisher: 'Akiraas Pte Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon:  '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type:        'website',
    siteName:    'Akiraas',
    locale:      'en_SG',
    url:         SITE_URL,
    title:       'Akiraas — Building Human Connections',
    description: 'We build focused communities with engaging content and curated experiences — because meaningful relationships aren\'t made in moments, they\'re crafted through shared experiences.',
    images: [{
      url:    '/og-image.png',
      width:  1200,
      height: 630,
      alt:    'Akiraas — Building Human Connections',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Akiraas — Building Human Connections',
    description: 'We build focused communities with engaging content and curated experiences.',
    images:      ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: '2312660c1e2b9a63',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 'var(--nav-h)' }}>
          {children}
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var els = document.querySelectorAll('.reveal');
            if(!els.length) return;
            var obs = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
              });
            },{ threshold:0.1 });
            els.forEach(function(el){ obs.observe(el); });
          })();
        `}} />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
