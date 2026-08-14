import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Akiraas — Building Human Connections',
  description: 'We build focused communities with engaging content and curated experiences — because meaningful relationships aren\'t made in moments, they\'re crafted through shared experiences.',
};

export default function HomePage() {
  return (
    <>
      <style>{`
        /* HERO */
        .hero { display:grid; grid-template-columns:1fr 1fr; min-height:90vh; }
        .hero-left { background:var(--cream); padding:clamp(3rem,8vw,6rem) var(--section-h); display:flex; flex-direction:column; justify-content:center; gap:2rem; }
        .hero-tag { font-family:var(--font-sans); font-size:var(--text-xs); font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold); display:flex; align-items:center; gap:.6rem; }
        .hero-tag::before { content:''; width:24px; height:1px; background:var(--gold); display:block; }
        .hero-h1 { font-family:var(--font-serif); font-size:clamp(2.8rem,5vw,4.4rem); font-weight:700; line-height:1.08; color:var(--plum); }
        .hero-h1 em { font-style:italic; color:var(--ink); }
        .hero-sub { font-family:var(--font-sans); font-size:var(--text-lg); line-height:var(--lh-loose); color:var(--ink-light); max-width:50ch; }
        .hero-actions { display:flex; gap:1rem; flex-wrap:wrap; }
        .hero-right { background:var(--plum); position:relative; overflow:hidden; min-height:400px; }
        .hero-nodes { position:absolute; inset:0; width:100%; height:100%; }
        .hero-quote { position:absolute; bottom:3rem; left:3rem; right:3rem; font-family:var(--font-serif); font-style:italic; font-size:clamp(1rem,1.8vw,1.3rem); color:var(--gold-light); line-height:1.5; }
        .hero-quote em { font-style:italic; }
        .hero-stats { position:absolute; top:3rem; left:3rem; display:flex; flex-direction:column; gap:1.5rem; }
        .hero-stat-num { font-family:var(--font-serif); font-size:2.2rem; font-weight:700; color:var(--gold); line-height:1; display:block; }
        .hero-stat-label { font-family:var(--font-sans); font-size:var(--text-xs); color:rgba(255,255,255,0.5); letter-spacing:0.1em; text-transform:uppercase; display:block; }
        /* MARQUEE */
        .marquee-strip { background:var(--plum); padding:1.1rem 0; overflow:hidden; border-top:1px solid rgba(184,150,62,0.2); border-bottom:1px solid rgba(184,150,62,0.2); }
        .marquee-inner { display:flex; gap:2.5rem; white-space:nowrap; animation:marquee 28s linear infinite; }
        .marquee-inner span { font-family:var(--font-sans); font-size:var(--text-sm); color:rgba(255,255,255,0.7); letter-spacing:0.08em; text-transform:uppercase; flex-shrink:0; }
        .marquee-dot { color:var(--gold) !important; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        /* PHILOSOPHY */
        .philosophy { padding:var(--section-v) var(--section-h); background:var(--white); }
        .philosophy-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start; margin-top:2rem; }
        .philosophy-text { font-size:var(--text-md); color:var(--ink-light); line-height:var(--lh-loose); margin-bottom:1.2rem; }
        .phil-cards { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--cream-dark); border:1px solid var(--cream-dark); margin-top:1.5rem; }
        .phil-card { background:var(--white); padding:1.4rem; display:flex; gap:1rem; align-items:flex-start; }
        .phil-card-icon { width:32px; height:32px; background:var(--gold-pale); border-radius:4px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .phil-card h3 { font-family:var(--font-serif); font-size:1rem; color:var(--plum); margin-bottom:.25rem; font-weight:600; }
        .phil-card p { font-size:var(--text-sm); color:var(--ink-muted); line-height:1.65; }
        /* PILLARS */
        .pillars { padding:var(--section-v) var(--section-h); background:var(--cream-dark); }
        .pillars-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:3rem; }
        .pillar { background:var(--white); padding:2.5rem 2rem; border:1px solid rgba(45,27,78,0.08); position:relative; overflow:hidden; transition:transform .3s,box-shadow .3s; }
        .pillar:hover { transform:translateY(-4px); box-shadow:0 12px 32px rgba(45,27,78,0.1); }
        .pillar-num { font-family:var(--font-serif); font-size:3rem; font-weight:700; color:rgba(45,27,78,0.07); line-height:1; margin-bottom:.5rem; }
        .pillar h3 { font-family:var(--font-serif); font-size:1.2rem; font-weight:600; color:var(--plum); margin-bottom:.7rem; }
        .pillar p { font-size:var(--text-sm); color:var(--ink-muted); line-height:1.75; }
        /* COMMUNITIES */
        .communities { padding:var(--section-v) var(--section-h); background:var(--cream); }
        .comm-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:2.5rem; }
        .comm-card { background:var(--white); overflow:hidden; border:1px solid rgba(45,27,78,0.08); transition:transform .3s,box-shadow .3s; }
        .comm-card:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(45,27,78,0.1); }
        .comm-card-img { height:200px; background:var(--plum); position:relative; overflow:hidden; }
        .comm-card-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.5; transition:opacity .4s,transform .5s; }
        .comm-card:hover .comm-card-img img { opacity:.7; transform:scale(1.04); }
        .comm-tag { position:absolute; bottom:1rem; left:1rem; background:var(--gold); color:var(--white); font-family:var(--font-sans); font-size:var(--text-xs); letter-spacing:.12em; text-transform:uppercase; padding:.3rem .8rem; font-weight:500; }
        .comm-card-body { padding:1.8rem; }
        .comm-card-body h3 { font-family:var(--font-serif); font-size:1.1rem; color:var(--plum); margin-bottom:.6rem; font-weight:600; }
        .comm-card-body p { font-size:var(--text-sm); color:var(--ink-muted); line-height:1.72; }
        /* CONSULTING TEASER */
        .ct { background:var(--plum); padding:var(--section-v) var(--section-h); }
        .ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; max-width:var(--content-max); margin:0 auto; }
        .ct-title { font-family:var(--font-serif); font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:var(--white); margin-bottom:1rem; line-height:1.15; }
        .ct-desc { font-size:var(--text-md); color:rgba(255,255,255,0.65); line-height:var(--lh-loose); margin-bottom:2rem; }
        .ct-pills { display:flex; flex-direction:column; gap:.8rem; }
        .ct-pill { display:flex; align-items:center; gap:1rem; background:rgba(255,255,255,0.05); border:1px solid rgba(184,150,62,0.15); border-left:3px solid var(--gold); padding:1rem 1.2rem; }
        .ct-pill strong { font-size:var(--text-sm); font-weight:600; color:var(--white); display:block; }
        .ct-pill span { font-size:var(--text-sm); color:rgba(255,255,255,0.45); }
        /* IMPACT */
        .impact { background:var(--ink); padding:var(--section-v) var(--section-h); }
        .impact-inner { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; max-width:var(--content-max); margin:0 auto; }
        .impact-stats { display:flex; flex-direction:column; gap:2px; }
        .impact-stat { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:2rem 2.5rem; display:flex; align-items:center; gap:2.5rem; transition:background .3s; }
        .impact-stat:hover { background:rgba(184,150,62,0.08); border-color:rgba(184,150,62,0.3); }
        .impact-num { font-family:var(--font-serif); font-size:3rem; font-weight:700; color:var(--gold); line-height:1; flex-shrink:0; }
        .impact-label { font-family:var(--font-sans); font-size:var(--text-base); font-weight:500; color:var(--white); }
        .impact-sub { font-size:var(--text-sm); color:rgba(255,255,255,0.4); margin-top:.2rem; }
        /* FOUNDER */
        .founder { padding:var(--section-v) var(--section-h); background:var(--white); }
        .founder-inner { display:grid; grid-template-columns:1fr 1.5fr; gap:6rem; align-items:start; max-width:var(--content-max); margin:0 auto; }
        .founder-img { width:100%; aspect-ratio:3/4; background:var(--plum); overflow:hidden; position:relative; }
        .founder-img img { width:100%; height:100%; object-fit:cover; opacity:.82; mix-blend-mode:luminosity; }
        .founder-quote { font-family:var(--font-serif); font-size:clamp(1.1rem,2vw,1.5rem); font-style:italic; line-height:1.55; color:var(--ink); margin-bottom:2rem; border-left:3px solid var(--gold); padding-left:1.8rem; }
        .founder-bio { font-size:var(--text-md); line-height:var(--lh-loose); color:var(--ink-light); margin-bottom:1rem; }
        .founder-name { font-family:var(--font-serif); font-size:1.2rem; font-weight:600; color:var(--plum); margin-top:1.5rem; }
        .founder-role { font-size:var(--text-sm); color:var(--ink-muted); letter-spacing:.1em; text-transform:uppercase; margin-top:.25rem; }
        /* CTA */
        .cta-gold { background:var(--gold); padding:3.5rem var(--section-h); }
        .cta-gold-inner { max-width:var(--content-max); margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:2rem; flex-wrap:wrap; }
        .cta-gold h3 { font-family:var(--font-serif); font-size:clamp(1.4rem,2.5vw,2rem); font-weight:700; color:var(--plum-dark); line-height:1.2; }
        .cta-gold p { font-size:var(--text-sm); color:rgba(26,13,51,.65); margin-top:.4rem; }
        /* RESPONSIVE */
        @media(max-width:900px){
          .hero{grid-template-columns:1fr}
          .hero-right{min-height:300px}
          .hero-stats{flex-direction:row; top:auto; bottom:7rem; gap:2rem}
          .philosophy-grid,.pillars-grid,.comm-grid,.impact-inner,.founder-inner,.ct-grid{grid-template-columns:1fr; gap:2.5rem}
          .pillars-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:540px){.pillars-grid,.comm-grid{grid-template-columns:1fr}}
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left fade-up">
          <span className="hero-tag">Headquartered in Singapore · Operating Worldwide</span>
          <h1 className="hero-h1">Making human<br />connections <em>real,</em><br />meaningful &amp;<br />inspirational.</h1>
          <p className="hero-sub">We build focused communities with engaging content and curated experiences — because meaningful relationships aren&apos;t made in moments, they&apos;re crafted through shared experiences.</p>
          <div className="hero-actions">
            <Link href="/about" className="btn btn-plum">Discover Our Story →</Link>
            <Link href="/events" className="btn btn-ghost-dark">See Our Work ↗</Link>
          </div>
        </div>
        <div className="hero-right">
          <svg className="hero-nodes" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.55">
              <line x1="300" y1="400" x2="180" y2="260" stroke="#E8D5A0" strokeWidth="0.8" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/></line>
              <line x1="300" y1="400" x2="460" y2="290" stroke="#E8D5A0" strokeWidth="0.8" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/></line>
              <line x1="300" y1="400" x2="390" y2="560" stroke="#E8D5A0" strokeWidth="0.8" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/></line>
              <line x1="300" y1="400" x2="140" y2="530" stroke="#E8D5A0" strokeWidth="0.8" opacity="0.4"><animate attributeName="opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite"/></line>
              <circle cx="300" cy="400" r="10" fill="#B8963E" opacity="0.9"><animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"/></circle>
              <circle cx="300" cy="400" r="22" fill="none" stroke="#B8963E" strokeWidth="1" opacity="0.4"><animate attributeName="r" values="22;32;22" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/></circle>
              <circle cx="180" cy="260" r="7" fill="#E8D5A0" opacity="0.8"><animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite"/></circle>
              <circle cx="460" cy="290" r="7" fill="#E8D5A0" opacity="0.8"><animate attributeName="r" values="7;10;7" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="390" cy="560" r="6" fill="#E8D5A0" opacity="0.7"><animate attributeName="r" values="6;8;6" dur="3.5s" repeatCount="indefinite"/></circle>
              <circle cx="140" cy="530" r="5" fill="#E8D5A0" opacity="0.6"/>
              <circle cx="500" cy="480" r="5" fill="#E8D5A0" opacity="0.6"/>
            </g>
          </svg>
          <div className="hero-stats">
            <div><span className="hero-stat-num">4240+</span><span className="hero-stat-label">Human Connections</span></div>
            <div><span className="hero-stat-num">20+</span><span className="hero-stat-label">Communities</span></div>
            <div><span className="hero-stat-num">1000+</span><span className="hero-stat-label">Meaningful Exchanges</span></div>
          </div>
          <blockquote className="hero-quote">&quot;People don&apos;t just want to attend something — they want to <em>belong</em> to something.&quot;</blockquote>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {['Human Connections','Community Building','Curated Experiences','Meaningful Impact','Singapore','Global Reach','Exclusive Engagements','Inspirational Communities',
            'Human Connections','Community Building','Curated Experiences','Meaningful Impact','Singapore','Global Reach','Exclusive Engagements','Inspirational Communities'].map((t,i) => (
            <><span key={i}>{t}</span><span className="marquee-dot">◆</span></>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="content-max">
          <div className="eyebrow">Our Philosophy</div>
          <div className="philosophy-grid">
            <div className="fade-up">
              <h2 className="section-title">We believe in engagements that are<br /><em>exclusively human.</em></h2>
              <p className="philosophy-text" style={{marginTop:'1.5rem'}}>In an age where digital noise often replaces dialogue, we believe in the power of human connection. We create experiences that help professionals connect with purpose, share ideas that matter, and build communities that last beyond the event.</p>
              <p className="philosophy-text">Attendees were showing up, but not lighting up. Conversations were happening, but not sticking. <strong>Events weren&apos;t enough anymore.</strong> People wanted something more meaningful, more human, more lasting.</p>
            </div>
            <div className="fade-up reveal-d2">
              <div className="phil-cards">
                {[
                  ['Exclusive','Not about size — about intention. The right people, for the right reason.'],
                  ['Inspirational','We curate moments that move people — intellectually and emotionally.'],
                  ['Imaginative','We defy the predictable — thoughtfully, purposefully, memorably.'],
                  ['Immersive','Multi-sensory, multi-format. Participants are co-creators, not spectators.'],
                ].map(([t,d]) => (
                  <div className="phil-card" key={t}>
                    <div className="phil-card-icon"><span style={{color:'var(--gold)',fontSize:'1.1rem'}}>✦</span></div>
                    <div><h3>{t}</h3><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars">
        <div className="content-max">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">Three pillars that shape<br /><em>every community we build</em></h2>
          <div className="pillars-grid">
            {[
              ['01','Build Intimate Business Relationships','We go beyond networking. We design purposeful spaces where professionals meet, connect, and collaborate — not just exchange cards. Every relationship built on trust, authenticity, and shared intent.'],
              ['02','Create Signature Experiences','From content design to sensory details, every element is intentional. We create events that people don\'t just attend — they remember, reference, and return to.'],
              ['03','Nurture Lasting Communities','The event is the spark. The community is the fire. We build structures that keep people engaged long after the last session ends — through content, conversation, and connection.'],
            ].map(([n,t,d]) => (
              <div className="pillar fade-up" key={n}>
                <div className="pillar-num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITIES */}
      <section className="communities">
        <div className="content-max">
          <div className="eyebrow">Our Communities</div>
          <h2 className="section-title">Built with intention.<br /><em>Designed to last.</em></h2>
          <div className="comm-grid">
            {[
              { tag:'Project Management', title:'EVOLVE — Project Management Community', desc:'A curated professional community for Project Management practitioners. EVOLVE 2025, our inaugural symposium, was held in partnership with PMI Singapore Chapter.', img:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', href:'/events' },
              { tag:'CIO Forum', title:'Vantage X — CIO Community Forum', desc:'An exclusive, invitation-only leadership forum for Chief Information Officers — a space for strategic dialogue, peer learning, and genuine connection at the highest level.', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80', href:'/events' },
              { tag:'Coming Soon', title:'More Communities Worldwide', desc:'New communities are forming. Headquartered in Singapore, operating globally — we are expanding into new industries and geographies. Stay connected.', img:'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80', href:'/contact' },
            ].map(c => (
              <Link href={c.href} className="comm-card" key={c.tag} style={{display:'block', textDecoration:'none'}}>
                <div className="comm-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} />
                  <span className="comm-tag">{c.tag}</span>
                </div>
                <div className="comm-card-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING TEASER */}
      <div className="ct">
        <div className="ct-grid">
          <div className="fade-up">
            <div className="eyebrow" style={{color:'var(--gold)'}}>Also Offering</div>
            <h2 className="ct-title">Martech Consulting for Event Organisers</h2>
            <p className="ct-desc">Beyond our communities, we help event organisers and marketing leaders build the technology and strategy ecosystems their events deserve — from stack architecture to platform implementation.</p>
            <Link href="/consulting" className="btn btn-ghost-light">Explore Consulting →</Link>
          </div>
          <div className="ct-pills fade-up reveal-d2">
            {[
              ['Marketing Strategy & Planning','Audience, messaging, and channel architecture'],
              ['Martech Stack Consulting','Tool selection, audit, and integration design'],
              ['Platform Implementation','Zoho Backstage & CRM setup, end-to-end'],
              ['Marketing Automation','Pre, during & post-event nurture flows'],
            ].map(([t,d]) => (
              <div className="ct-pill" key={t}>
                <div><strong>{t}</strong><span>{d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPACT */}
      <section className="impact">
        <div className="impact-inner">
          <div className="fade-up">
            <div className="eyebrow" style={{color:'var(--gold)'}}>Our Impact</div>
            <h2 className="section-title" style={{color:'var(--white)'}}>Numbers that tell<br /><em style={{color:'var(--gold-light)'}}>a human story.</em></h2>
            <p style={{color:'rgba(255,255,255,0.55)',marginTop:'1.2rem',fontSize:'var(--text-md)'}}>Every number is a person. A conversation. A relationship that wouldn&apos;t have existed without a deliberate act of community building.</p>
          </div>
          <div className="impact-stats fade-up reveal-d1">
            {[['4240+','Human Connections Made','Professionals connected through our communities'],['20+','Communities Inspired','Across industries, geographies, and verticals'],['1000+','Meaningful Exchanges','Conversations that changed perspectives']].map(([n,l,s]) => (
              <div className="impact-stat" key={l}>
                <span className="impact-num">{n}</span>
                <div><div className="impact-label">{l}</div><div className="impact-sub">{s}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder">
        <div className="founder-inner">
          <div className="founder-img fade-up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Ganesh_Profile.jpg" alt="GaneshKumar Murugan" />
          </div>
          <div className="fade-up reveal-d1">
            <div className="eyebrow">The Founder</div>
            <blockquote className="founder-quote">&quot;I didn&apos;t just want to build events. I wanted to build belonging — spaces where people don&apos;t just network, but genuinely connect.&quot;</blockquote>
            <p className="founder-bio">GaneshKumar Murugan is the founder of Akiraas Pte Ltd, a Singapore-headquartered company dedicated to building human connections through curated communities and experiences. With a background spanning marketing, technology, and community leadership, Ganesh brings both strategic depth and genuine warmth to every engagement Akiraas creates.</p>
            <p className="founder-bio">His belief: that the most transformative professional relationships are built not in boardrooms, but in spaces designed with intention, care, and a deep respect for the human beings in the room.</p>
            <div className="founder-name">GaneshKumar Murugan</div>
            <div className="founder-role">Founder, Akiraas Pte Ltd</div>
            <a href="https://www.linkedin.com/in/ganeshkumarmurugan/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'.5rem',marginTop:'.8rem',fontSize:'var(--text-sm)',color:'var(--ink-muted)',transition:'color .2s'}}>LinkedIn Profile →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-gold">
        <div className="cta-gold-inner">
          <div>
            <h3>Ready to build something meaningful?</h3>
            <p>Start a conversation. Tell us what you&apos;re building.</p>
          </div>
          <Link href="/contact" className="btn btn-plum">Start a Conversation →</Link>
        </div>
      </div>
    </>
  );
}
