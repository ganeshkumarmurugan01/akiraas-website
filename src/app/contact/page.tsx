'use client';
import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile: {
      render: (el: HTMLElement, opts: object) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

export default function ContactPage() {
  const [chips, setChips]   = useState<string[]>([]);
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm]     = useState({ firstName:'', lastName:'', email:'', org:'', message:'' });
  const [tsToken, setTsToken] = useState('');
  const tsRef  = useRef<HTMLDivElement>(null);
  const tsId   = useRef<string>('');

  const interests = [
    'Community Partnership','EVOLVE — Project Management','Vantage X — CIO Forum',
    'Martech Consulting','Fingoh.ai — Intent Platform','Event Collaboration',
    'Sponsorship','General Enquiry',
  ];

  // Load Turnstile script and render widget
  useEffect(() => {
    const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAEXRXkCb_VZDACcI';
    if (!SITE_KEY || !tsRef.current) return;

    const renderWidget = () => {
      if (!tsRef.current || !window.turnstile) return;
      tsId.current = window.turnstile.render(tsRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => setTsToken(token),
        'expired-callback': () => setTsToken(''),
        'error-callback':   () => setTsToken(''),
        theme: 'light',
        size: 'normal',
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }

    return () => {
      if (tsId.current && window.turnstile) {
        try { window.turnstile.remove(tsId.current); } catch {}
      }
    };
  }, []);

  const toggleChip = (c: string) =>
    setChips(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tsToken) {
      setStatus('error');
      setErrorMsg('Please complete the security check before submitting.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interests: chips, tsToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      // Reset Turnstile on error so user can retry
      if (tsId.current && window.turnstile) {
        window.turnstile.reset(tsId.current);
        setTsToken('');
      }
    }
  };

  return (
    <>
      <style>{`
        .ct-hero{background:var(--plum);padding:clamp(4rem,8vw,6rem) var(--section-h) clamp(3rem,5vw,4rem);position:relative;overflow:hidden}
        .ct-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(184,150,62,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,62,.06) 1px,transparent 1px);background-size:72px 72px}
        .ct-hero-inner{max-width:var(--content-max);margin:0 auto;position:relative;z-index:1}
        .contact-main{padding:var(--section-v) var(--section-h);background:var(--cream)}
        .contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;max-width:var(--content-max);margin:0 auto;align-items:start}
        .contact-details{display:flex;flex-direction:column;gap:1.2rem;margin-top:2rem}
        .detail-row{display:flex;align-items:flex-start;gap:1rem;padding:1.2rem;background:var(--white);border:1px solid rgba(45,27,78,.08);border-left:3px solid var(--gold)}
        .detail-icon{width:36px;height:36px;background:var(--gold-pale);border-radius:3px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem}
        .detail-label{font-size:var(--text-xs);font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:.2rem}
        .detail-val{font-size:var(--text-sm);color:var(--ink-light);line-height:1.6}
        .contact-form{background:var(--white);padding:3rem;border:1px solid rgba(45,27,78,.1)}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem}
        .field{display:flex;flex-direction:column;gap:.4rem;margin-bottom:1rem}
        .field label{font-size:var(--text-xs);font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted)}
        .field input,.field textarea{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--ink);background:var(--cream);border:1px solid rgba(45,27,78,.15);padding:.75rem 1rem;outline:none;transition:border-color .2s;width:100%}
        .field input:focus,.field textarea:focus{border-color:var(--plum)}
        .field textarea{resize:vertical;min-height:120px}
        .chips-label{font-size:var(--text-xs);font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);display:block;margin-bottom:.7rem}
        .chips-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem}
        .chip{font-size:var(--text-sm);padding:.4rem 1rem;border:1px solid var(--cream-dark);background:var(--cream);cursor:pointer;transition:all .2s;color:var(--ink-muted);user-select:none}
        .chip:hover{border-color:var(--gold-light);color:var(--ink)}
        .chip.active{background:var(--plum);color:var(--white);border-color:var(--plum)}
        /* honeypot — visually hidden but not display:none so it renders */
        .hp-field{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;tab-index:-1}
        .turnstile-wrap{margin-bottom:1.2rem;min-height:65px}
        .submit-btn{width:100%;background:var(--plum);color:var(--white);border:none;cursor:pointer;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;padding:1rem;letter-spacing:.05em;transition:background .2s;display:flex;align-items:center;justify-content:center;gap:.5rem}
        .submit-btn:hover:not(:disabled){background:var(--plum-mid)}
        .submit-btn:disabled{opacity:.6;cursor:not-allowed}
        .error-msg{background:#fef2f2;border:1px solid #fecaca;border-left:3px solid #ef4444;padding:.9rem 1rem;margin-bottom:1rem;font-size:var(--text-sm);color:#b91c1c;border-radius:2px}
        .success-state{text-align:center;padding:4rem 2rem;display:flex;flex-direction:column;align-items:center;gap:1.5rem}
        .success-icon{width:64px;height:64px;background:var(--gold-pale);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;border:2px solid rgba(184,150,62,.3)}
        .success-state h3{font-family:var(--font-serif);font-size:1.6rem;color:var(--plum);margin:0}
        .success-state p{font-size:var(--text-md);color:var(--ink-muted);max-width:32ch;margin:0}
        .success-note{font-size:var(--text-xs);color:var(--ink-muted);background:var(--cream);border:1px solid var(--cream-dark);padding:.7rem 1rem;border-radius:2px}
        .why-section{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .why-card{background:var(--white);padding:2rem;border:1px solid rgba(45,27,78,.08);border-top:3px solid var(--gold)}
        .why-card h3{font-family:var(--font-serif);font-size:1.1rem;color:var(--plum);margin-bottom:.7rem;font-weight:600}
        .why-card p{font-size:var(--text-sm);color:var(--ink-muted);line-height:1.75}
        @media(max-width:900px){
          .contact-grid{grid-template-columns:1fr;gap:2.5rem}
          .form-row{grid-template-columns:1fr}
          .why-grid{grid-template-columns:1fr}
          .contact-form{padding:2rem 1.5rem}
        }
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      `}</style>

      {/* HERO */}
      <div className="ct-hero">
        <div className="ct-hero-inner fade-up">
          <div className="eyebrow" style={{color:'var(--gold)'}}>Contact Us</div>
          <h1 style={{color:'var(--white)',marginBottom:'1rem'}}>
            Let&apos;s start<br /><em style={{color:'var(--gold-light)'}}>a conversation.</em>
          </h1>
          <p style={{fontSize:'var(--text-lg)',color:'rgba(255,255,255,0.65)',maxWidth:'46ch',lineHeight:'var(--lh-loose)'}}>
            Whether you&apos;re interested in our communities, consulting, or just want to connect — we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <section className="contact-main">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="fade-up">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="section-title">We&apos;re based in<br /><em>Singapore</em></h2>
            <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)',marginBottom:'1.5rem'}}>
              Reach out through any of the channels below. We typically respond within one business day.
            </p>
            <div className="contact-details">
              {([
                ['📍','Office','#09-62, 403 Admiralty Link, Singapore 750403'],
                ['📞','Phone','+65 8979 3235'],
                ['✉️','Email','admin@akiraas.com'],
                ['💼','LinkedIn','linkedin.com/in/ganeshkumarmurugan'],
              ] as [string,string,string][]).map(([icon,label,val]) => (
                <div className="detail-row" key={label}>
                  <div className="detail-icon">{icon}</div>
                  <div><span className="detail-label">{label}</span><span className="detail-val">{val}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="contact-form fade-up reveal-d1">
            {status === 'success' ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. We&apos;ll be in touch within one business day.</p>
                <p className="success-note">A confirmation has been sent to your email address.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="eyebrow">Send a Message</div>
                <h3 style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',color:'var(--plum)',margin:'.5rem 0 1.8rem',fontWeight:600}}>
                  Tell us what&apos;s on your mind
                </h3>

                {status === 'error' && (
                  <div className="error-msg">⚠️ {errorMsg}</div>
                )}

                {/* Honeypot — bots fill this, humans don't */}
                <div className="hp-field" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    id="hp-website"
                  />
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" required value={form.firstName}
                      onChange={e => setForm(f=>({...f,firstName:e.target.value}))} placeholder="GaneshKumar" />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" value={form.lastName}
                      onChange={e => setForm(f=>({...f,lastName:e.target.value}))} placeholder="Murugan" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" required type="email" value={form.email}
                    onChange={e => setForm(f=>({...f,email:e.target.value}))} placeholder="you@company.com" />
                </div>

                <div className="field">
                  <label htmlFor="org">Organisation</label>
                  <input id="org" value={form.org}
                    onChange={e => setForm(f=>({...f,org:e.target.value}))} placeholder="Your company or organisation" />
                </div>

                <div>
                  <span className="chips-label">I&apos;m Interested In</span>
                  <div className="chips-row">
                    {interests.map(c => (
                      <div key={c} className={`chip${chips.includes(c)?' active':''}`}
                        onClick={()=>toggleChip(c)} role="button" tabIndex={0}
                        onKeyDown={e=>e.key==='Enter'&&toggleChip(c)}>{c}</div>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" required value={form.message}
                    onChange={e => setForm(f=>({...f,message:e.target.value}))}
                    placeholder="Tell us about your interest, your community, or your event." />
                </div>

                {/* Cloudflare Turnstile */}
                <div className="turnstile-wrap">
                  <div ref={tsRef} />
                </div>

                <button type="submit" className="submit-btn" disabled={status==='sending'}>
                  {status === 'sending'
                    ? <><span style={{animation:'spin 1s linear infinite',display:'inline-block'}}>◌</span> Sending…</>
                    : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WHY CONNECT */}
      <section className="why-section">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">Why Connect</div>
          <h2 className="section-title">What you can<br /><em>expect from us</em></h2>
          <div className="why-grid">
            {[
              ['Curated Network','We don\'t introduce everyone to everyone. We make thoughtful, purposeful connections — because quality of connection matters more than quantity.'],
              ['Real Impact','Whether you join a community, commission a consulting engagement, or explore Fingoh.ai — we measure success by the tangible difference it makes.'],
              ['A Partner Who Cares','We are a small, intentional team. You will always deal directly with people who care about the outcome — not account managers reading from a script.'],
            ].map(([t,d]) => (
              <div className="why-card fade-up" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
