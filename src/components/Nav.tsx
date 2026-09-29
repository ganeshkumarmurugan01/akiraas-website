'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/ai-events', label: 'AI for Events' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/Akiraas_Purple.png"
              alt="Akiraas"
              width={140}
              height={40}
              priority
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'nav-link nav-link--active' : 'nav-link'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn-plum nav-cta">Connect</Link>

          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-overlay${menuOpen ? ' nav-overlay--open' : ''}`}>
        <button
          className="nav-overlay-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <nav className="nav-overlay-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'nav-overlay-link nav-overlay-link--active' : 'nav-overlay-link'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold nav-overlay-cta" onClick={() => setMenuOpen(false)}>
            Connect with Akiraas →
          </Link>
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--white);
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .nav--scrolled {
          border-bottom-color: rgba(45,27,78,0.1);
          box-shadow: 0 2px 16px rgba(45,27,78,0.07);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 4vw;
          height: 68px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.1rem;
          flex: 1;
        }
        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--ink);
          padding: 0.4rem 0.65rem;
          border-radius: 3px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--plum);
          background: rgba(45,27,78,0.05);
        }
        .nav-link--active {
          color: var(--plum);
          font-weight: 700;
        }
        .nav-cta {
          flex-shrink: 0;
          font-size: 0.8rem;
          padding: 0.5rem 1.1rem;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.4rem;
          color: var(--plum);
          cursor: pointer;
          padding: 0.3rem;
          line-height: 1;
        }

        /* Mobile overlay */
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--plum);
          display: flex;
          flex-direction: column;
          padding: 2rem 4vw;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-overlay--open {
          transform: translateX(0);
        }
        .nav-overlay-close {
          align-self: flex-end;
          background: none;
          border: none;
          font-size: 1.6rem;
          color: var(--white);
          cursor: pointer;
          padding: 0.3rem;
          margin-bottom: 2rem;
        }
        .nav-overlay-links {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex: 1;
        }
        .nav-overlay-link {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          font-weight: 500;
          color: rgba(255,255,255,0.82);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.15s;
        }
        .nav-overlay-link:hover,
        .nav-overlay-link--active {
          color: var(--white);
        }
        .nav-overlay-cta {
          margin-top: 2rem;
          text-align: center;
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-hamburger { display: block; margin-left: auto; }
        }
      `}</style>
    </>
  )
}
