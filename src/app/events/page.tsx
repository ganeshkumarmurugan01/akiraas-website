import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events & Communities',
  description: 'EVOLVE — Project Management Community and Vantage X — CIO Community Forum. Built by Akiraas for professionals who want more than networking.',
};

export default function EventsPage() {
  return (
    <>
      <style>{`
        .ev-hero{background:var(--plum);padding:clamp(4rem,8vw,6rem) var(--section-h) clamp(3rem,5vw,4rem);position:relative;overflow:hidden}
        .ev-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(184,150,62,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,62,0.06) 1px,transparent 1px);background-size:72px 72px}
        .ev-hero-inner{max-width:var(--content-max);margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end}
        .ev-hero-preview{background:rgba(255,255,255,0.06);border:1px solid rgba(184,150,62,0.2);padding:2rem;border-top:3px solid var(--gold)}
        .ev-hero-preview .evt-badge{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);background:rgba(13,122,107,0.15);border:1px solid rgba(13,122,107,0.3);padding:.3rem .8rem;display:inline-block;margin-bottom:1rem}
        .ev-hero-preview h3{font-family:var(--font-serif);font-size:1.35rem;color:var(--white);margin-bottom:.7rem;font-weight:600}
        .ev-hero-preview p{font-size:var(--text-sm);color:rgba(255,255,255,0.6);line-height:1.75;margin-bottom:1.2rem}
        .ev-meta{display:flex;flex-wrap:wrap;gap:.8rem;margin-bottom:1.5rem}
        .ev-meta-tag{font-family:var(--font-sans);font-size:var(--text-xs);color:rgba(255,255,255,0.5);display:flex;align-items:center;gap:.35rem}
        .evolve-section{padding:var(--section-v) var(--section-h);background:var(--white)}
        .evolve-inner{max-width:var(--content-max);margin:0 auto}
        .community-panel{background:var(--plum);display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:2.5rem}
        .cp-left{padding:3rem;border-right:1px solid rgba(255,255,255,0.1)}
        .cp-left p{font-size:var(--text-md);color:rgba(255,255,255,0.7);line-height:var(--lh-loose);margin-bottom:1.2rem}
        .cp-right{padding:3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem;align-content:start}
        .cp-pillar{background:rgba(255,255,255,0.06);border:1px solid rgba(184,150,62,0.15);padding:1.3rem}
        .cp-pillar h4{font-family:var(--font-serif);font-size:1rem;color:var(--white);margin-bottom:.4rem;font-weight:600}
        .cp-pillar p{font-size:var(--text-sm);color:rgba(255,255,255,0.55);line-height:1.65}
        .symposium-divider{display:flex;align-items:center;gap:1.5rem;margin:3rem 0;padding:1.2rem 1.5rem;background:var(--cream-dark);border-left:3px solid var(--teal)}
        .symp-concluded{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--teal)}
        .symp-title{font-family:var(--font-serif);font-size:1.1rem;color:var(--plum);font-weight:600}
        .symposium-split{display:grid;grid-template-columns:1fr 1.2fr;gap:4rem;align-items:start}
        .symp-poster{background:var(--plum);overflow:hidden;aspect-ratio:3/4}
        .symp-poster img{width:100%;height:100%;object-fit:cover;opacity:.9}
        .symp-meta{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem}
        .symp-meta-row{font-size:var(--text-sm);color:var(--ink-muted);display:flex;align-items:center;gap:.5rem}
        .prog-grid{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin:1.5rem 0}
        .prog-item{background:var(--cream);padding:1rem;border-left:2px solid var(--gold)}
        .prog-item-time{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;color:var(--gold);letter-spacing:.08em;display:block;margin-bottom:.2rem}
        .prog-item-title{font-size:var(--text-sm);color:var(--plum);font-weight:500}
        .upcoming{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .upcoming-inner{max-width:var(--content-max);margin:0 auto}
        .upcoming-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:2.5rem}
        .uc-card{background:var(--white);padding:2.5rem;border:1px solid rgba(45,27,78,0.08);border-top:3px solid var(--plum)}
        .uc-tag{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.8rem;display:block}
        .uc-card h3{font-family:var(--font-serif);font-size:1.2rem;color:var(--plum);margin-bottom:.7rem;font-weight:600}
        .uc-card p{font-size:var(--text-sm);color:var(--ink-muted);line-height:1.75;margin-bottom:1.5rem}
        .uc-status{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);padding:.3rem .8rem;border:1px solid rgba(184,150,62,0.3);display:inline-block}
        .cta-bar{background:var(--gold);padding:3.5rem var(--section-h)}
        .cta-bar-inner{max-width:var(--content-max);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
        .cta-bar h3{font-family:var(--font-serif);font-size:clamp(1.4rem,2.5vw,2rem);color:var(--plum-dark);font-weight:700}
        @media(max-width:900px){
          .ev-hero-inner{grid-template-columns:1fr}
          .community-panel{grid-template-columns:1fr}
          .cp-left{border-right:none;border-bottom:1px solid rgba(255,255,255,0.1)}
          .cp-right{grid-template-columns:1fr 1fr}
          .symposium-split{grid-template-columns:1fr}
          .upcoming-grid{grid-template-columns:1fr}
          .prog-grid{grid-template-columns:1fr}
        }
      `}</style>

      {/* HERO */}
      <div className="ev-hero">
        <div className="ev-hero-inner">
          <div className="fade-up">
            <div className="eyebrow" style={{color:'var(--gold)'}}>Events & Communities</div>
            <h1 style={{color:'var(--white)',marginBottom:'1rem'}}>Communities built<br /><em style={{color:'var(--gold-light)'}}>with intention.</em></h1>
            <p style={{fontSize:'var(--text-lg)',color:'rgba(255,255,255,0.65)',maxWidth:'46ch',lineHeight:'var(--lh-loose)'}}>Every Akiraas community exists for a reason — to bring the right professionals together in spaces designed for genuine connection.</p>
          </div>
          <div className="ev-hero-preview fade-up reveal-d1">
            <span className="evt-badge">Concluded · Nov 2025</span>
            <h3>EVOLVE 2025 — Inaugural Symposium</h3>
            <p>The first symposium of the EVOLVE Project Management Community, held in partnership with PMI Singapore Chapter at Grand Copthorne Hotel.</p>
            <div className="ev-meta">
              <span className="ev-meta-tag">📍 Singapore</span>
              <span className="ev-meta-tag">📅 Nov 20–21, 2025</span>
              <span className="ev-meta-tag">🤝 PMI Singapore</span>
            </div>
            <a href="#evolve" className="btn btn-ghost-light" style={{fontSize:'var(--text-sm)'}}>View EVOLVE 2025 ↓</a>
          </div>
        </div>
      </div>

      {/* EVOLVE */}
      <section className="evolve-section" id="evolve">
        <div className="evolve-inner">
          <div className="eyebrow">Our Communities</div>
          <h2 className="section-title">Meet <em>EVOLVE</em></h2>
          <p className="section-lead">EVOLVE is a living professional community for Project Management practitioners — built for ongoing peer exchange, curated content, and shared growth. EVOLVE 2025 was our inaugural symposium; the community continues.</p>

          <div className="community-panel">
            <div className="cp-left">
              <h3 style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',color:'var(--white)',marginBottom:'1.2rem',fontWeight:600}}>More than an event. A community.</h3>
              <p>EVOLVE was founded on the belief that project management professionals deserve a space that goes deeper than certification workshops and annual conferences. A space for honest peer exchange, emerging practices, and genuine professional growth.</p>
              <p>Built in partnership with PMI Singapore Chapter, EVOLVE brings together practitioners from across industries — all united by a commitment to the craft of project management and the discipline of delivery.</p>
              <p>The community is ongoing. EVOLVE 2025 was the first of many annual symposia.</p>
            </div>
            <div className="cp-right">
              {[
                ['Peer Community','A curated network of project management professionals who actually talk to each other.'],
                ['Curated Content','Sessions, speakers, and workshops chosen for depth and relevance — not just familiarity.'],
                ['Annual Symposium','A flagship in-person event that anchors the year and deepens community bonds.'],
                ['Career Growth','Connections, insights, and opportunities that extend well beyond the event itself.'],
              ].map(([t,d]) => (
                <div className="cp-pillar" key={t}><h4>{t}</h4><p>{d}</p></div>
              ))}
            </div>
          </div>

          {/* Symposium divider */}
          <div className="symposium-divider">
            <span className="symp-concluded">Concluded</span>
            <span className="symp-title">First Symposium of the Community · EVOLVE 2025</span>
          </div>

          {/* Symposium detail */}
          <div className="symposium-split">
            <div className="symp-poster">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://akiraas.zohosites.com/Poster_SG.jpeg" alt="EVOLVE 2025 Poster" />
            </div>
            <div>
              <div className="eyebrow">EVOLVE 2025</div>
              <h3 style={{fontFamily:'var(--font-serif)',fontSize:'1.6rem',color:'var(--plum)',marginBottom:'1.2rem',fontWeight:700}}>The Inaugural Symposium</h3>
              <div className="symp-meta">
                <div className="symp-meta-row">📅 November 20–21, 2025</div>
                <div className="symp-meta-row">📍 Grand Copthorne Hotel, Singapore</div>
                <div className="symp-meta-row">🤝 In partnership with PMI Singapore Chapter</div>
              </div>
              <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)',marginBottom:'1.5rem'}}>EVOLVE 2025 brought together project management professionals from across Singapore and the region for two days of curated dialogue, peer learning, and genuine community building. It was the inaugural event of the EVOLVE community.</p>
              <div className="prog-grid">
                {[['Day 1 AM','Opening Keynote & Community Welcome'],['Day 1 PM','Practitioner Roundtables & Workshops'],['Day 2 AM','Industry Panel: Future of PM'],['Day 2 PM','Closing Session & Community Commitments']].map(([t,d]) => (
                  <div className="prog-item" key={t}><span className="prog-item-time">{t}</span><span className="prog-item-title">{d}</span></div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-plum" style={{marginTop:'1rem'}}>Get Involved in EVOLVE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="upcoming">
        <div className="upcoming-inner">
          <div className="eyebrow">Upcoming Engagements</div>
          <h2 className="section-title">What&apos;s <em>next</em></h2>
          <div className="upcoming-grid">
            <div className="uc-card fade-up">
              <span className="uc-tag">CIO Forum</span>
              <h3>Vantage X — CIO Community Forum</h3>
              <p>An exclusive, invitation-only leadership forum for Chief Information Officers. A curated space for strategic dialogue, peer exchange, and genuine connection at the highest level of technology leadership.</p>
              <span className="uc-status">Upcoming · Invitation Only</span>
            </div>
            <div className="uc-card fade-up reveal-d1">
              <span className="uc-tag">Worldwide</span>
              <h3>More Communities Forming</h3>
              <p>Headquartered in Singapore and operating globally, Akiraas is building new communities across industries and geographies. If you believe in the power of curated human connection, we&apos;d love to connect.</p>
              <Link href="/contact" className="btn btn-ghost-dark" style={{fontSize:'var(--text-sm)'}}>Express Interest →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-inner">
          <div><h3>Want to be part of what we&apos;re building?</h3><p style={{fontSize:'var(--text-sm)',color:'rgba(26,13,51,.65)',marginTop:'.4rem'}}>Tell us which community speaks to you.</p></div>
          <Link href="/contact" className="btn btn-plum">Start a Conversation →</Link>
        </div>
      </div>
    </>
  );
}
