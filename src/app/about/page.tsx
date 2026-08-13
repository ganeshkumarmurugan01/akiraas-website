import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The story behind Akiraas — why we exist, what we believe, and who we are.',
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .page-hero{background:var(--plum);padding:clamp(4rem,8vw,6rem) var(--section-h) clamp(3rem,5vw,4.5rem);position:relative;overflow:hidden}
        .page-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(184,150,62,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,62,0.06) 1px,transparent 1px);background-size:72px 72px;pointer-events:none}
        .ph-inner{max-width:var(--content-max);margin:0 auto;position:relative;z-index:1}
        .stats-bar{background:var(--cream-dark);border-bottom:1px solid rgba(45,27,78,0.08);padding:2rem var(--section-h)}
        .stats-bar-inner{max-width:var(--content-max);margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr)}
        .sb-item{text-align:center;border-right:1px solid rgba(45,27,78,0.1);padding:0 1.5rem}
        .sb-item:last-child{border-right:none}
        .sb-num{font-family:var(--font-serif);font-size:2.5rem;font-weight:700;color:var(--plum);display:block;line-height:1}
        .sb-lbl{font-size:var(--text-xs);color:var(--ink-muted);letter-spacing:.12em;text-transform:uppercase;margin-top:.4rem;display:block}
        .origin{padding:var(--section-v) var(--section-h);background:var(--white)}
        .origin-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:5rem;align-items:start;max-width:var(--content-max);margin:0 auto}
        .origin-img{aspect-ratio:3/4;overflow:hidden;position:relative;background:var(--plum)}
        .origin-img img{width:100%;height:100%;object-fit:cover;opacity:.82;mix-blend-mode:luminosity}
        .origin-quote{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.1rem,1.8vw,1.4rem);color:var(--plum);line-height:1.5;border-left:3px solid var(--gold);padding-left:1.5rem;margin-bottom:2rem}
        .timeline-sec{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .tl-inner{max-width:var(--content-max);margin:0 auto}
        .tl-wrap{position:relative;margin-top:3rem}
        .tl-wrap::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--gold),rgba(184,150,62,0.1));transform:translateX(-50%)}
        .tl-row{display:grid;grid-template-columns:1fr 40px 1fr;gap:2rem;margin-bottom:2.5rem;align-items:start}
        .tl-card{background:var(--white);padding:1.8rem;border:1px solid rgba(45,27,78,0.1)}
        .tl-spacer{grid-column:1}
        .tl-dot{width:12px;height:12px;background:var(--gold);border-radius:50%;margin:1.5rem auto 0;position:relative;z-index:1}
        .tl-yr{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem;display:block}
        .tl-card h3{font-family:var(--font-serif);font-size:1.1rem;color:var(--plum);margin-bottom:.5rem;font-weight:600}
        .tl-card p{font-size:var(--text-sm);color:var(--ink-muted);line-height:1.72}
        .wwd{padding:var(--section-v) var(--section-h);background:var(--cream)}
        .wwd-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .wwd-card{background:var(--white);padding:2.2rem;border:1px solid rgba(45,27,78,0.08);border-top:3px solid var(--gold)}
        .wwd-card h3{font-family:var(--font-serif);font-size:1.2rem;color:var(--plum);margin-bottom:.7rem;font-weight:600}
        .wwd-card p{font-size:var(--text-sm);color:var(--ink-muted);line-height:1.75}
        .vals{background:var(--plum);padding:var(--section-v) var(--section-h)}
        .vals-inner{max-width:var(--content-max);margin:0 auto}
        .vals-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2.5rem}
        .val-item{border-top:1px solid rgba(255,255,255,0.15);padding-top:2rem}
        .val-word{font-family:var(--font-serif);font-size:1.4rem;font-weight:600;color:var(--white);font-style:italic;margin-bottom:.7rem;display:block}
        .cta-bar{background:var(--gold);padding:3.5rem var(--section-h)}
        .cta-bar-inner{max-width:var(--content-max);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
        .cta-bar h3{font-family:var(--font-serif);font-size:clamp(1.4rem,2.5vw,2rem);color:var(--plum-dark);font-weight:700}
        @media(max-width:900px){
          .origin-grid{grid-template-columns:1fr}
          .origin-img{aspect-ratio:16/9}
          .tl-wrap::before{left:20px}
          .tl-row{grid-template-columns:20px 1fr;gap:1rem}
          .tl-spacer{display:none}
          .tl-card{grid-column:2!important;text-align:left!important}
          .tl-dot{grid-column:1;margin-top:1rem}
          .wwd-grid,.vals-grid,.stats-bar-inner{grid-template-columns:1fr}
          .sb-item{border-right:none;border-bottom:1px solid rgba(45,27,78,0.08);padding:1rem 0}
        }
      `}</style>

      <div className="page-hero">
        <div className="ph-inner fade-up">
          <div className="eyebrow" style={{color:'var(--gold)'}}>About Akiraas</div>
          <h1 style={{color:'var(--white)',marginBottom:'1rem'}}>We didn&apos;t build a company.<br /><em style={{color:'var(--gold-light)'}}>We built a belief.</em></h1>
          <p style={{fontSize:'var(--text-lg)',color:'rgba(255,255,255,0.65)',maxWidth:'52ch',lineHeight:'var(--lh-loose)'}}>The belief that human connection — real, intentional, face-to-face — is the most powerful force in professional life.</p>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-bar-inner">
          {[['4240+','Human Connections'],['20+','Communities Inspired'],['1420+','Hours of Shared Experience']].map(([n,l]) => (
            <div className="sb-item" key={l}><span className="sb-num">{n}</span><span className="sb-lbl">{l}</span></div>
          ))}
        </div>
      </div>

      <section className="origin">
        <div className="origin-grid">
          <div className="fade-up">
            <div className="origin-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Ganesh_Profile.jpg" alt="GaneshKumar Murugan" />
            </div>
          </div>
          <div className="fade-up reveal-d1">
            <div className="eyebrow">The Origin</div>
            <blockquote className="origin-quote">&quot; akiraas mean creating an expansive feel - like a community of bright minds guided by clarity and purpose.&quot;</blockquote>
            <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)',marginBottom:'1.2rem'}}>Akiraas was born from a simple but urgent observation: in a world more connected than ever, genuine professional connection had become increasingly rare. Events were getting bigger, but conversations were getting shallower.</p>
            <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)',marginBottom:'1.2rem'}}>GaneshKumar Murugan founded Akiraas with a clear mandate: to create communities that didn&apos;t just gather people in a room, but gave them genuine reasons to connect, grow, and return.</p>
            <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)'}}>Headquartered in Singapore, Akiraas operates across APAC and globally — building communities that reflect the full diversity of the world&apos;s professional landscape.</p>
            <p style={{fontSize:'var(--text-md)',color:'var(--ink-light)',lineHeight:'var(--lh-loose)'}}> <a href="https://www.linkedin.com/in/ganeshkumarmurugan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </section>

      <section className="timeline-sec">
        <div className="tl-inner">
          <div className="eyebrow">Our Journey</div>
          <h2 className="section-title">How Akiraas<br /><em>came to be</em></h2>
          <div className="tl-wrap">
            {[
              {side:'right',year:'The Observation',title:'Something Was Missing',desc:'Events were everywhere. But genuine human connection — the kind that changes your career, your thinking, your life — was increasingly rare.'},
              {side:'left', year:'The Belief',title:'Connection as a Practice',desc:'The insight: meaningful professional relationships don\'t happen by accident. They require intentional design, the right people, and the right environment.'},
              {side:'right',year:'Foundation',title:'Akiraas Pte Ltd Incorporated in Singapore',desc:'Akiraas was officially founded in Singapore with a clear purpose: to build curated communities and experiences that foster genuine human connections.'},
              {side:'left', year:'First Communities',title:'EVOLVE & Vantage X Launch',desc:'The inaugural communities — EVOLVE for Project Management professionals and Vantage X for CIOs — were established, defining Akiraas\'s community-first identity.'},
              {side:'right',year:'Today · 2025',title:'Building Worldwide',desc:'EVOLVE 2025 concluded as our first symposium in partnership with PMI Singapore. Vantage X is active. New communities are forming globally.'},
            ].map((item, i) => (
              <div className="tl-row" key={i}>
                {item.side === 'left' ? <div className="tl-card fade-up"><span className="tl-yr">{item.year}</span><h3>{item.title}</h3><p>{item.desc}</p></div> : <div className="tl-spacer"/>}
                <div className="tl-dot"/>
                {item.side === 'right' ? <div className="tl-card fade-up"><span className="tl-yr">{item.year}</span><h3>{item.title}</h3><p>{item.desc}</p></div> : <div className="tl-spacer"/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wwd">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">Four ways we build<br /><em>meaningful communities</em></h2>
          <div className="wwd-grid">
            {[
              ['Foster','We create environments where professionals feel safe to be curious, vulnerable, and genuinely present — not just performing.'],
              ['Curate','Every speaker, attendee, agenda item, and experience is chosen deliberately. Nothing is filler. Everything earns its place.'],
              ['Architect','We design the structure of connection — the agenda, the space, the format — so relationships can form naturally within it.'],
              ['Inspire','We chase moments that change how people think, not just what they know. Every community should leave people more than they were before.'],
            ].map(([t,d]) => (
              <div className="wwd-card fade-up" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="vals">
        <div className="vals-inner">
          <div className="eyebrow" style={{color:'var(--gold)'}}>Our Values</div>
          <h2 className="section-title" style={{color:'var(--white)'}}>What we stand for</h2>
          <div className="vals-grid">
            {[
              ['Curiosity','We approach every community, every person, and every engagement with genuine curiosity. We ask better questions. We listen longer.'],
              ['Integrity','We say what we mean and do what we say. Our communities trust us to keep the experience genuine, the spaces safe, and the relationships real.'],
              ['Empathy','Every design decision begins by asking: what does this person actually need? Not what do we want to deliver.'],
            ].map(([t,d]) => (
              <div className="val-item fade-up" key={t}><span className="val-word">{t}</span><p style={{fontSize:'var(--text-sm)',color:'rgba(255,255,255,0.6)',lineHeight:'var(--lh-loose)'}}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-inner">
          <div><h3>Let&apos;s build something together.</h3><p style={{fontSize:'var(--text-sm)',color:'rgba(26,13,51,.65)',marginTop:'.4rem'}}>Whether a community, a consulting engagement, or just a conversation.</p></div>
          <Link href="/contact" className="btn btn-plum">Start a Conversation →</Link>
        </div>
      </div>
    </>
  );
}
