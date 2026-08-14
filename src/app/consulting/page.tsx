import type { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Martech Consulting for Event Organisers',
  description: 'Akiraas helps event organisers build their marketing and technology ecosystems — from strategy and stack architecture to Zoho Backstage implementation and automation.',
  alternates: { canonical: 'https://akiraas.com/consulting' },
  openGraph: {
    title: 'Martech Consulting for Event Organisers',
    description: 'Akiraas helps event organisers build their marketing and technology ecosystems — from strategy and stack architecture to Zoho Backstage implementation and automation.',
    url: 'https://akiraas.com/consulting',
  },
};

export default function ConsultingPage() {
  return (
    <>
      <style>{`
        .c-hero{background:var(--plum-dark);padding:clamp(4rem,8vw,6rem) var(--section-h);position:relative;overflow:hidden}
        .c-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(184,150,62,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,62,0.07) 1px,transparent 1px);background-size:60px 60px}
        .c-hero-inner{max-width:var(--content-max);margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
        .c-hero-cards{display:flex;flex-direction:column;gap:1rem}
        .c-hero-card{background:rgba(255,255,255,0.05);border:1px solid rgba(184,150,62,0.15);border-left:3px solid var(--gold);padding:1.2rem 1.5rem}
        .c-hero-card .lbl{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:.3rem;display:block}
        .c-hero-card p{font-size:var(--text-sm);color:rgba(255,255,255,0.7);line-height:1.7}
        .philosophy-strip{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .ps-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;max-width:var(--content-max);margin:0 auto}
        .ps-body p{font-size:var(--text-md);color:var(--ink-light);line-height:var(--lh-loose);margin-bottom:1.2rem}
        .process-steps{display:flex;flex-direction:column;gap:0}
        .ps-step{display:flex;gap:1.2rem;padding-bottom:1.8rem;position:relative}
        .ps-step:last-child{padding-bottom:0}
        .ps-step::before{content:'';position:absolute;left:17px;top:36px;bottom:0;width:1px;background:linear-gradient(to bottom,var(--gold),transparent)}
        .ps-step:last-child::before{display:none}
        .ps-num{width:36px;height:36px;flex-shrink:0;border-radius:50%;background:var(--plum);display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:var(--text-xs);font-weight:700;color:var(--gold-light);position:relative;z-index:1}
        .ps-content{padding-top:.4rem}
        .ps-content strong{display:block;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--plum);margin-bottom:.2rem}
        .ps-content span{font-size:var(--text-sm);color:var(--ink-muted);line-height:1.65}
        .services-sec{padding:var(--section-v) var(--section-h);background:var(--cream)}
        .svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5px;background:rgba(45,27,78,0.12);border:1px solid rgba(45,27,78,0.12);margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .svc-card{background:var(--white);padding:2.4rem 2.2rem;position:relative;overflow:hidden;transition:background .25s}
        .svc-card::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--gold);transition:width .35s}
        .svc-card:hover{background:var(--gold-pale)}
        .svc-card:hover::after{width:100%}
        .svc-icon{width:44px;height:44px;background:var(--plum);border-radius:4px;display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;font-size:1.2rem}
        .svc-card h3{font-family:var(--font-serif);font-size:1.25rem;font-weight:700;color:var(--plum);margin-bottom:.7rem}
        .svc-card p{font-size:var(--text-sm);color:var(--ink-light);line-height:var(--lh-loose);margin-bottom:1.2rem}
        .svc-tags{display:flex;flex-wrap:wrap;gap:.4rem}
        .svc-tag{font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(184,150,62,0.35);padding:.2rem .6rem;border-radius:2px}
        .platform-sec{background:var(--plum);padding:var(--section-v) var(--section-h)}
        .plat-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;max-width:var(--content-max);margin:0 auto}
        .plat-caps{display:flex;flex-direction:column;gap:.6rem;margin-bottom:2rem}
        .plat-cap{display:flex;align-items:flex-start;gap:.8rem;font-size:var(--text-sm);color:rgba(255,255,255,0.8)}
        .plat-cap::before{content:'';width:6px;height:6px;flex-shrink:0;background:var(--gold);border-radius:50%;margin-top:.45rem}
        .plat-card{background:var(--plum-dark);border:1px solid rgba(184,150,62,0.2);border-radius:4px;overflow:hidden}
        .plat-card-header{background:rgba(184,150,62,0.1);border-bottom:1px solid rgba(184,150,62,0.2);padding:.9rem 1.4rem;display:flex;align-items:center;gap:.6rem}
        .plat-card-header span{font-size:var(--text-xs);font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
        .plat-metric{border-bottom:1px solid rgba(255,255,255,0.07);padding:.9rem 1.4rem;display:flex;justify-content:space-between;align-items:center}
        .plat-metric:last-child{border-bottom:none}
        .plat-key{font-size:var(--text-xs);color:rgba(255,255,255,0.45);letter-spacing:.05em}
        .plat-val{font-family:var(--font-serif);font-size:var(--text-sm);color:var(--gold-light);font-weight:600}
        .engagement-sec{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .eng-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .eng-card{background:var(--white);padding:2rem 1.8rem;border:1px solid rgba(45,27,78,0.1)}
        .eng-n{font-family:var(--font-serif);font-size:2.8rem;font-weight:700;color:rgba(45,27,78,0.08);line-height:1;margin-bottom:.6rem;display:block}
        .eng-card h3{font-family:var(--font-serif);font-size:1.15rem;font-weight:700;color:var(--plum);margin-bottom:.6rem}
        .eng-card p{font-size:var(--text-sm);color:var(--ink-light);line-height:1.8}
        .eng-tag{display:inline-block;margin-top:1rem;font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)}
        .cta-bar{background:var(--gold);padding:3.5rem var(--section-h)}
        .cta-bar-inner{max-width:var(--content-max);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
        .cta-bar h3{font-family:var(--font-serif);font-size:clamp(1.4rem,2.5vw,2rem);color:var(--plum-dark);font-weight:700}
        @media(max-width:900px){
          .c-hero-inner,.ps-grid,.plat-grid{grid-template-columns:1fr;gap:2.5rem}
          .c-hero-cards{display:none}
          .svc-grid,.eng-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="c-hero">
        <div className="c-hero-inner">
          <div className="fade-up">
            <div className="eyebrow" style={{color:'var(--gold)'}}>Martech Consulting</div>
            <h1 style={{color:'var(--white)',marginBottom:'1.4rem'}}>Build the ecosystem your <em style={{color:'var(--gold-light)'}}>events deserve.</em></h1>
            <p style={{fontSize:'var(--text-lg)',color:'rgba(255,255,255,0.65)',lineHeight:'var(--lh-loose)',maxWidth:'48ch',marginBottom:'2rem'}}>Strategy, technology, and implementation — brought together so that every touchpoint of your event communicates with precision.</p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <Link href="/contact" className="btn btn-gold">Discuss Your Project</Link>
              <a href="#services" className="btn btn-ghost-light">View Services ↓</a>
            </div>
          </div>
          <div className="c-hero-cards fade-up reveal-d1">
            {[
              ['The Challenge','Event organisers invest heavily in experiences — but without the right martech backbone, engagement data disappears the moment the lights go out.'],
              ['Our Approach','We architect marketing and technology ecosystems that capture, activate, and extend the value of every event — before, during, and after.'],
              ['Who We Work With','Event organisers, association chapters, and marketing leaders who want technology that serves their strategy — not the other way around.'],
            ].map(([l,d]) => (
              <div className="c-hero-card" key={l}><span className="lbl">{l}</span><p>{d}</p></div>
            ))}
          </div>
        </div>
      </div>

      <section className="philosophy-strip">
        <div className="ps-grid">
          <div className="ps-body fade-up">
            <div className="eyebrow">Why It Matters</div>
            <h2 className="section-title">Technology should amplify the human — <em>not replace it.</em></h2>
            <p>Most event organisations run on fragmented tools — a registration platform here, an email system there, spreadsheets bridging the gaps. The result is lost leads, broken journeys, and a marketing team working harder than the technology ever should require.</p>
            <p>At Akiraas, we bring our experience building real human communities into every consulting engagement. We understand what an attendee actually needs to feel seen and engaged — and we build the technology ecosystem that makes that possible at scale.</p>
            <p>We are practitioner-led, not vendor-led. Our recommendations begin with your goals, not a product catalogue.</p>
          </div>
          <div className="fade-up reveal-d2">
            <div className="process-steps">
              {[['01','Diagnose','Map your current tools, data flows, and gaps against where you need to be.'],['02','Architect','Design the right stack — purpose-built for events, not adapted from generic templates.'],['03','Implement','Deploy and configure the tools. We work hands-on, not just in slide decks.'],['04','Activate','Train your team and embed best practices so the ecosystem outlives the engagement.']].map(([n,t,d]) => (
                <div className="ps-step" key={n}>
                  <div className="ps-num">{n}</div>
                  <div className="ps-content"><strong>{t}</strong><span>{d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-sec" id="services">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">Four disciplines.<br /><em>One coherent ecosystem.</em></h2>
        </div>
        <div className="svc-grid">
          {[
            {icon:'📈',title:'Marketing Strategy & Planning',desc:'We translate your event objectives into a concrete marketing plan — audience segmentation, messaging architecture, channel strategy, and campaign timelines.',tags:['Audience Strategy','Campaign Planning','Messaging','Channel Mix']},
            {icon:'🖥',title:'Martech Stack Consulting',desc:'We audit your existing tools and architect a stack that is fit for purpose — eliminating redundancy, closing gaps, and ensuring your platforms talk to each other.',tags:['Stack Audit','Tool Selection','Integration Design','Vendor Evaluation']},
            {icon:'⚙️',title:'Platform Implementation',desc:'From Zoho Backstage to registration platforms and CRM integrations — we configure, test, and deploy. We are implementation partners, not just advisors.',tags:['Zoho Backstage','CRM Setup','Integrations','Training']},
            {icon:'✉️',title:'Marketing Automation Setup',desc:'Pre-event nurture sequences, on-site engagement triggers, post-event follow-up flows — we design and build automation that works while your team delivers the experience.',tags:['Nurture Flows','Segmentation','Post-event Follow-up','Reporting']},
          ].map(s => (
            <div className="svc-card fade-up" key={s.title}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-tags">{s.tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="platform-sec">
        <div className="plat-grid">
          <div className="fade-up">
            <div className="eyebrow" style={{color:'var(--gold)'}}>Platform Spotlight</div>
            <h2 className="section-title" style={{color:'var(--white)'}}>Zoho Backstage — built for events, <em>backed by expertise.</em></h2>
            <p style={{fontSize:'var(--text-md)',color:'rgba(255,255,255,0.7)',lineHeight:'var(--lh-loose)',marginBottom:'1rem'}}>Of the many platforms we work with, Zoho Backstage stands out for event-driven organisations that need a purpose-built solution without enterprise complexity.</p>
            <p style={{fontSize:'var(--text-md)',color:'rgba(255,255,255,0.7)',lineHeight:'var(--lh-loose)',marginBottom:'1.5rem'}}>We go beyond implementation. We help you get the most out of the platform from day one — with configuration that reflects how your team actually works.</p>
            <div className="plat-caps">
              {['End-to-end event website and registration management','Attendee engagement and session management','Sponsor and exhibitor portal configuration','CRM and marketing automation integration','Post-event analytics and engagement reporting','Hybrid and virtual event delivery setup'].map(c => (
                <div className="plat-cap" key={c}>{c}</div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-ghost-light">Talk to Us About Zoho Backstage →</Link>
          </div>
          <div className="plat-card fade-up reveal-d2">
            <div className="plat-card-header"><div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)'}}></div><span>Implementation Overview</span></div>
            {[['Platform','Zoho Backstage'],['Typical Setup Timeline','3 – 6 weeks'],['Engagement','Strategy → Config → Training'],['Approach','Phased consulting model'],['Best Suited For','Associations, Chapters, Corporate conferences'],['Ongoing Support','Available post-implementation']].map(([k,v]) => (
              <div className="plat-metric" key={k}><span className="plat-key">{k}</span><span className="plat-val">{v}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-sec">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">How We Engage</div>
          <h2 className="section-title">Flexible by design.<br /><em>Rigorous in execution.</em></h2>
        </div>
        <div className="eng-grid">
          {[
            ['01','Diagnostic Sprint','A focused 2–3 week assessment of your current marketing and technology setup. Deliverable: a clear-eyed gap analysis and a prioritised roadmap.','Best for: Getting started'],
            ['02','Project Engagement','Scoped around a specific outcome — a platform implementation, an automation build, or a campaign architecture. Fixed scope, defined deliverables.','Best for: Specific needs'],
            ['03','Advisory Retainer','Ongoing strategic guidance for teams that want a senior marketing and technology perspective without a full-time hire. Flexible monthly model.','Best for: Continuous growth'],
          ].map(([n,t,d,tag]) => (
            <div className="eng-card fade-up" key={n}><span className="eng-n">{n}</span><h3>{t}</h3><p>{d}</p><span className="eng-tag">{tag} →</span></div>
          ))}
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-inner">
          <div><h3>Ready to build your marketing ecosystem?</h3><p style={{fontSize:'var(--text-sm)',color:'rgba(26,13,51,.65)',marginTop:'.4rem'}}>Tell us where you are and where you need to be.</p></div>
          <Link href="/contact" className="btn btn-plum">Start a Conversation →</Link>
        </div>
      </div>
    </>
  );
}
