import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer { background: var(--plum-dark); padding: clamp(3rem,6vw,5rem) var(--section-h) 2.5rem; }
        .footer-grid { max-width: var(--content-max); margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2rem; }
        .footer-brand-logo { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--gold-light); margin-bottom: 1rem; display: block; }
        .footer-brand p { font-size: var(--text-sm); color: rgba(255,255,255,0.5); line-height: var(--lh-loose); max-width: 30ch; margin-bottom: 1.5rem; }
        .footer-brand address { font-style: normal; font-size: var(--text-sm); color: rgba(255,255,255,0.35); line-height: var(--lh-loose); }
        .footer-col h5 { font-family: var(--font-sans); font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
        .footer-col a { font-size: var(--text-sm); color: rgba(255,255,255,0.5); transition: color 0.2s; }
        .footer-col a:hover { color: var(--gold-light); }
        .footer-bottom { max-width: var(--content-max); margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-bottom p { font-size: var(--text-xs); color: rgba(255,255,255,0.3); margin: 0; }
        .footer-bottom a { font-size: var(--text-xs); color: rgba(255,255,255,0.4); transition: color 0.2s; }
        .footer-bottom a:hover { color: var(--gold-light); }
        @media(max-width:860px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; } }
        @media(max-width:540px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; align-items: flex-start; } }
      `}</style>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-logo">Akiraas</span>
            <p>Building focused communities and curated experiences to foster human connections. Headquartered in Singapore, operating worldwide.</p>
            <address>Akiraas Pte Ltd · #09-62, 403 Admiralty Link<br />Singapore 750403 · admin@akiraas.com · +65 8979 3235</address>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about">Our Values</Link></li>
              <li><Link href="/about">The Founder</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Offerings</h5>
            <ul>
              <li><Link href="/events">EVOLVE 2025</Link></li>
              <li><Link href="/events">Vantage X</Link></li>
              <li><Link href="/consulting">Consulting</Link></li>
              <li><Link href="/products">Fingoh.ai</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="https://fingoh.ai" target="_blank" rel="noopener noreferrer">Fingoh.ai ↗</a></li>
              <li><a href="https://www.linkedin.com/in/ganeshkumarmurugan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Akiraas Pte Ltd. All Rights Reserved. Headquartered in Singapore.</p>
          <a href="https://www.linkedin.com/in/ganeshkumarmurugan/" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
        </div>
      </footer>
    </>
  );
}
