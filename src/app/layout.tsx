import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: { default: 'Akiraas — Building Human Connections', template: '%s | Akiraas' },
  description: 'Akiraas builds focused communities, curated experiences, and technology products that foster meaningful human connections. Headquartered in Singapore, operating worldwide.',
  keywords: ['Akiraas', 'communities', 'EVOLVE', 'Vantage X', 'Fingoh.ai', 'martech consulting', 'Singapore'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'Akiraas',
    locale: 'en_SG',
    type: 'website',
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
    </html>
  );
}
