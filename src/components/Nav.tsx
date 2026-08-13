'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/events',     label: 'Events' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/products',   label: 'Products' },
  { href: '/contact',    label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'var(--white)',
        borderBottom: scrolled ? '1px solid rgba(45,27,78,0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(45,27,78,0.06)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: 'var(--content-max)', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          padding: '0 var(--section-h)', height: 'var(--nav-h)', gap: '0.5rem',
        }}>
          <Link href="/" style={{ marginRight: 'auto', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Image
              src="/Akiraas_Purple.png"
              alt="Akiraas"
              height={36}
              width={160}
              style={{ height: 36, width: 'auto', display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 0, listStyle: 'none', alignItems: 'center' }}
              className="nav-desktop-links">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link href={href} style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    fontWeight: active ? 600 : 400,
                    color: active ? 'var(--plum)' : 'var(--ink-light)',
                    padding: '0.4rem 0.9rem', borderRadius: '3px', display: 'block',
                    transition: 'color 0.18s, background 0.18s',
                    background: active ? 'var(--cream-dark)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--cream-dark)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--plum)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = active ? 'var(--cream-dark)' : 'transparent';
                    (e.currentTarget as HTMLElement).style.color = active ? 'var(--plum)' : 'var(--ink-light)';
                  }}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" style={{
            flexShrink: 0, marginLeft: '0.75rem',
            fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600,
            color: 'var(--white)', background: 'var(--plum)',
            padding: '0.55rem 1.35rem', borderRadius: '4px',
            transition: 'background 0.18s',
          }}
          className="nav-cta-btn"
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--plum-mid)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--plum)'}>
            Connect
          </Link>

          {/* Burger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="nav-burger-btn"
            style={{
              display: 'none', flexDirection: 'column', gap: '5px',
              cursor: 'pointer', background: 'none', border: 'none',
              padding: '6px', marginLeft: '0.5rem', flexShrink: 0,
            }}>
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--plum)', borderRadius:'2px',
              transform: open ? 'rotate(45deg) translate(4px,5px)' : 'none', transition:'all 0.28s' }} />
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--plum)', borderRadius:'2px',
              opacity: open ? 0 : 1, transition:'all 0.28s' }} />
            <span style={{ display:'block', width:'22px', height:'2px', background:'var(--plum)', borderRadius:'2px',
              transform: open ? 'rotate(-45deg) translate(4px,-5px)' : 'none', transition:'all 0.28s' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        display: open ? 'flex' : 'none',
        position: 'fixed', inset: 0, zIndex: 199,
        background: 'var(--white)',
        flexDirection: 'column', padding: '5.5rem var(--section-h) 3rem',
        gap: 0,
      }}>
        {/* Mobile header with logo + close */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'var(--nav-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--section-h)', borderBottom: '1px solid var(--cream-dark)' }}>
          <Image src="/Akiraas_Purple.png" alt="Akiraas" height={32} width={140} style={{ height: 32, width: 'auto' }} />
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: 'var(--plum)', cursor: 'pointer', lineHeight: 1 }}>✕</button>
        </div>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontFamily: 'var(--font-sans)', fontSize: '1.15rem',
            fontWeight: pathname === href ? 600 : 400,
            color: pathname === href ? 'var(--plum)' : 'var(--ink)',
            padding: '1.1rem 0', borderBottom: '1px solid var(--cream-dark)',
            display: 'block',
          }}>
            {label}
          </Link>
        ))}
        <Link href="/contact" style={{
          marginTop: '2rem', background: 'var(--plum)', color: 'var(--white)',
          textAlign: 'center', borderRadius: '4px', fontWeight: 600,
          padding: '1rem 0', display: 'block', fontFamily: 'var(--font-sans)',
        }}>
          Connect →
        </Link>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
