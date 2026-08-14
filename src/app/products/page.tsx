import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Fingoh.ai — Intent Intelligence for B2B Trade Fairs',
  description: 'Fingoh.ai helps exhibitors identify, engage and convert the right prospects before, during and after every trade fair. Built by Akiraas.',
  alternates: { canonical: 'https://akiraas.com/products' },
  openGraph: {
    title: 'Fingoh.ai — Intent Intelligence for B2B Trade Fairs',
    description: 'Fingoh.ai helps exhibitors identify, engage and convert the right prospects before, during and after every trade fair. Built by Akiraas.',
    url: 'https://akiraas.com/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <style>{`
        .p-hero{background:var(--plum);padding:clamp(4rem,8vw,6rem) var(--section-h) clamp(3rem,5vw,4.5rem);position:relative;overflow:hidden}
        .p-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(184,150,62,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,150,62,0.06) 1px,transparent 1px);background-size:72px 72px}
        .p-hero-inner{max-width:var(--content-max);margin:0 auto;position:relative;z-index:1}
        .spotlight{padding:var(--section-v) var(--section-h);background:var(--cream)}
        .spotlight-inner{max-width:var(--content-max);margin:0 auto}
        .fingoh-card{background:var(--white);border:1px solid rgba(45,27,78,0.1);border-top:4px solid var(--plum);display:grid;grid-template-columns:1fr 1fr;margin-top:2.5rem}
        .fc-left{padding:3.5rem;border-right:1px solid rgba(45,27,78,0.08);display:flex;flex-direction:column;gap:1.8rem}
        .fingoh-logo-wrap{display:flex;flex-direction:column;gap:.4rem}
        .fingoh-logo-img{height:52px;width:auto;object-fit:contain;object-position:left center}
        .fingoh-by{font-size:var(--text-xs);color:var(--ink-muted);letter-spacing:.1em;text-transform:uppercase}
        .prod-badge{display:inline-flex;align-items:center;gap:.4rem;font-size:var(--text-xs);font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);background:var(--gold-pale);border:1px solid rgba(184,150,62,0.3);padding:.3rem .8rem;width:fit-content}
        .fc-tagline{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.05rem,1.8vw,1.3rem);color:var(--plum);line-height:1.5;border-left:3px solid var(--gold);padding-left:1.2rem}
        .fc-desc{font-size:var(--text-md);color:var(--ink-light);line-height:var(--lh-loose)}
        .fc-features{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
        .fc-feat{display:flex;align-items:flex-start;gap:.6rem;font-size:var(--text-sm);color:var(--ink-light);line-height:1.5}
        .fc-feat::before{content:'';width:6px;height:6px;flex-shrink:0;background:var(--gold);border-radius:50%;margin-top:.4rem}
        .fc-actions{display:flex;gap:1rem;flex-wrap:wrap}
        .fc-right{background:var(--plum-dark);padding:2.2rem;display:flex;flex-direction:column;gap:.8rem}
        .dash-title-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:.3rem}
        .dash-title{font-size:var(--text-xs);font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
        .dash-live{display:flex;align-items:center;gap:.35rem;font-size:var(--text-xs);font-weight:600;color:#4ade80}
        .dash-live::before{content:'';width:6px;height:6px;background:#4ade80;border-radius:50%;animation:livepulse 1.8s infinite}
        @keyframes livepulse{0%,100%{opacity:1}50%{opacity:.35}}
        .dash-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem}
        .dash-tile{background:rgba(255,255,255,0.05);border:1px solid rgba(184,150,62,0.15);padding:.8rem;border-radius:3px}
        .dash-tile-val{font-family:var(--font-serif);font-size:1.4rem;font-weight:700;color:var(--gold-light);line-height:1;display:block}
        .dash-tile-lbl{font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:.25rem;display:block}
        .dash-head{display:grid;grid-template-columns:1fr 70px 65px 54px;gap:.4rem;padding:.35rem .6rem;font-size:var(--text-xs);letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);border-bottom:1px solid rgba(255,255,255,0.07)}
        .dash-row{display:grid;grid-template-columns:1fr 70px 65px 54px;gap:.4rem;padding:.5rem .6rem;align-items:center;border-bottom:1px solid rgba(255,255,255,0.04);transition:background .15s}
        .dash-row:hover{background:rgba(184,150,62,0.05)}
        .dash-row:last-child{border-bottom:none}
        .dtr-co{font-size:var(--text-sm);color:rgba(255,255,255,0.82);font-weight:500}
        .dtr-ind{font-size:var(--text-xs);color:rgba(255,255,255,0.38)}
        .dtr-score{display:flex;align-items:center;gap:.3rem}
        .score-bar{flex:1;height:3px;background:rgba(255,255,255,0.08);border-radius:2px}
        .score-fill{height:100%;border-radius:2px;background:var(--gold)}
        .score-n{font-size:var(--text-xs);color:var(--gold-light)}
        .dtr-st{font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:.15rem .4rem;border-radius:8px;text-align:center;white-space:nowrap}
        .s-hot{color:#fb923c;background:rgba(251,146,60,.12);border:1px solid rgba(251,146,60,.25)}
        .s-warm{color:var(--gold-light);background:rgba(184,150,62,.12);border:1px solid rgba(184,150,62,.25)}
        .s-new{color:#a78bfa;background:rgba(167,139,250,.12);border:1px solid rgba(167,139,250,.25)}
        .stats-band{background:var(--plum);padding:4rem var(--section-h)}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(184,150,62,.2);border:1px solid rgba(184,150,62,.2);max-width:var(--content-max);margin:1.5rem auto 0}
        .stat-blk{background:var(--plum);padding:2rem 1.5rem;text-align:center}
        .stat-n{font-family:var(--font-serif);font-size:clamp(2rem,3.5vw,3rem);font-weight:700;color:var(--gold);line-height:1;display:block;margin-bottom:.5rem}
        .stat-d{font-size:var(--text-sm);color:rgba(255,255,255,0.5);line-height:1.6}
        .lifecycle{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .lc-inner{max-width:var(--content-max);margin:0 auto}
        .lc-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5px;background:rgba(45,27,78,.1);border:1px solid rgba(45,27,78,.1);margin-top:2.5rem}
        .lc-card{background:var(--white);padding:2.5rem;position:relative;overflow:hidden;transition:background .2s}
        .lc-card::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--gold);transition:width .35s}
        .lc-card:hover{background:var(--gold-pale)}
        .lc-card:hover::after{width:100%}
        .lc-phase{font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:.2rem}
        .lc-num{font-family:var(--font-serif);font-size:var(--text-sm);font-weight:700;color:rgba(45,27,78,.12);display:block;margin-bottom:.7rem}
        .lc-card h3{font-family:var(--font-serif);font-size:1.15rem;font-weight:700;color:var(--plum);margin-bottom:.5rem}
        .lc-card p{font-size:var(--text-sm);color:var(--ink-light);line-height:var(--lh-loose)}
        .lc-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:1rem}
        .lc-tag{font-size:var(--text-xs);font-weight:500;letter-spacing:.07em;color:var(--ink-muted);background:var(--cream-dark);border:1px solid rgba(45,27,78,.1);padding:.2rem .6rem}
        .how-sec{padding:var(--section-v) var(--section-h);background:var(--cream)}
        .how-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2.5rem;margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .how-step{display:flex;flex-direction:column;gap:1rem}
        .how-n{font-family:var(--font-serif);font-size:3.5rem;font-weight:700;color:rgba(45,27,78,.07);line-height:1}
        .how-step h3{font-family:var(--font-serif);font-size:1.15rem;font-weight:700;color:var(--plum)}
        .how-step p{font-size:var(--text-sm);color:var(--ink-light);line-height:var(--lh-loose)}
        .rule-box{background:var(--gold-pale);border:1px solid rgba(184,150,62,.25);border-left:3px solid var(--gold);padding:1.4rem 1.8rem;margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .rule-box strong{font-size:var(--text-sm);font-weight:600;color:var(--plum);display:block;margin-bottom:.3rem}
        .rule-box p{font-size:var(--text-sm);color:var(--ink-light);line-height:var(--lh-loose);margin:0}
        .pricing-sec{padding:var(--section-v) var(--section-h);background:var(--cream-dark)}
        .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:rgba(45,27,78,.1);border:1px solid rgba(45,27,78,.1);margin-top:2.5rem;max-width:var(--content-max);margin-left:auto;margin-right:auto}
        .plan{background:var(--white);padding:2.5rem 2rem;display:flex;flex-direction:column;position:relative}
        .plan.feat{background:var(--plum)}
        .plan-badge{position:absolute;top:-1px;left:50%;transform:translateX(-50%);font-size:var(--text-xs);font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:var(--gold);color:var(--plum-dark);padding:.25rem 1rem;white-space:nowrap}
        .plan-tier{font-size:var(--text-xs);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem}
        .plan.feat .plan-tier{color:var(--gold-light)}
        .plan-price{font-family:var(--font-serif);font-size:1.5rem;font-weight:700;color:var(--plum);line-height:1;margin-bottom:.5rem}
        .plan.feat .plan-price{color:var(--white)}
        .plan-desc{font-size:var(--text-xs);color:var(--ink-muted);line-height:1.6;padding-bottom:1.5rem;border-bottom:1px solid rgba(45,27,78,.08);margin-bottom:1.5rem;flex-shrink:0}
        .plan.feat .plan-desc{color:rgba(255,255,255,.5);border-bottom-color:rgba(255,255,255,.1)}
        .plan ul{list-style:none;display:flex;flex-direction:column;gap:.55rem;flex:1}
        .plan li{font-size:var(--text-sm);color:var(--ink-light);display:flex;align-items:flex-start;gap:.6rem;line-height:1.5}
        .plan.feat li{color:rgba(255,255,255,.75)}
        .plan li::before{content:'✓';color:var(--gold);font-size:var(--text-xs);flex-shrink:0;margin-top:.1rem;font-weight:700}
        .plan.feat li::before{color:var(--gold-light)}
        .plan-cta{display:block;text-align:center;margin-top:2rem;font-size:var(--text-sm);font-weight:600;padding:.8rem 1rem;border-radius:2px;text-decoration:none;transition:all .2s}
        .cta-dark{background:var(--plum);color:var(--white)}
        .cta-dark:hover{background:var(--plum-mid);transform:translateY(-1px)}
        .cta-light{background:var(--gold);color:var(--plum-dark)}
        .cta-light:hover{background:var(--gold-light);transform:translateY(-1px)}
        .cta-outline{border:1px solid rgba(45,27,78,.2);color:var(--plum)}
        .cta-outline:hover{border-color:var(--plum);background:var(--gold-pale)}
        .bridge-bar{background:var(--cream);padding:3.5rem var(--section-h);border-top:1px solid rgba(45,27,78,.08)}
        .bridge-inner{max-width:var(--content-max);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
        .bridge-inner h3{font-family:var(--font-serif);font-size:clamp(1.3rem,2.2vw,1.8rem);color:var(--plum);font-weight:700;max-width:44ch}
        @media(max-width:900px){
          .fingoh-card{grid-template-columns:1fr}
          .fc-right{display:none}
          .stats-grid{grid-template-columns:1fr 1fr}
          .lc-grid{grid-template-columns:1fr}
          .how-grid,.pricing-grid{grid-template-columns:1fr}
          .bridge-inner{flex-direction:column;align-items:flex-start}
        }
        @media(max-width:540px){.fc-features{grid-template-columns:1fr}}
      `}</style>

      <div className="p-hero">
        <div className="p-hero-inner fade-up">
          <div className="eyebrow" style={{color:'var(--gold)'}}>Our Products</div>
          <h1 style={{color:'var(--white)',marginBottom:'1rem'}}>Built from the ground up.<br /><em style={{color:'var(--gold-light)'}}>For the events industry.</em></h1>
          <p style={{fontSize:'var(--text-lg)',color:'rgba(255,255,255,0.65)',maxWidth:'48ch',lineHeight:'var(--lh-loose)'}}>Alongside building communities and consulting, Akiraas builds technology products that solve real, lived problems in the B2B trade fair world.</p>
        </div>
      </div>

      <section className="spotlight">
        <div className="spotlight-inner">
          <div className="eyebrow">Flagship Product</div>
          <h2 className="section-title">Intent Intelligence for<br /><em>B2B Trade Fairs</em></h2>
          <div className="fingoh-card">
            <div className="fc-left">
              <div className="fingoh-logo-wrap">
                <Image src="/Fingoh_Black.png" alt="Fingoh.ai" width={220} height={52} className="fingoh-logo-img" style={{height:52,width:'auto'}} />
                <span className="fingoh-by">by Akiraas Pte Ltd</span>
              </div>
              <div className="prod-badge">✦ Intent Intelligence Platform</div>
              <p className="fc-tagline">&quot;Stop waiting for the right visitors to walk in. Start nurturing them yourself.&quot;</p>
              <p className="fc-desc">Fingoh.ai is the Intent Intelligence Platform built specifically for B2B Trade Fairs. It helps exhibitors identify, engage and convert the right prospects before, during and after every event — turning a chaotic lead spreadsheet into a structured, scored, automated pipeline.</p>
              <div className="fc-features">
                {['Pre-show prospect intelligence','ICP matching & scoring','Multi-channel outreach automation','Live booth intent signals','Post-show follow-up engine','CRM sync (HubSpot, Salesforce, Zoho)'].map(f => (
                  <div className="fc-feat" key={f}>{f}</div>
                ))}
              </div>
              <div className="fc-actions">
                <a href="https://fingoh.ai" target="_blank" rel="noopener noreferrer" className="btn btn-plum">Visit Fingoh.ai ↗</a>
                <a href="https://fingoh.ai/#how" target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">See How It Works →</a>
              </div>
            </div>
            <div className="fc-right">
              <div className="dash-title-row"><span className="dash-title">Intent Dashboard</span><span className="dash-live">Live</span></div>
              <div className="dash-tiles">
                {[['214','ICP Matches'],['68%','Outreach Rate'],['6×','Conv. Lift']].map(([v,l]) => (
                  <div className="dash-tile" key={l}><span className="dash-tile-val">{v}</span><span className="dash-tile-lbl">{l}</span></div>
                ))}
              </div>
              <div>
                <div className="dash-head"><span>Company</span><span>Industry</span><span>IEI Score</span><span>Status</span></div>
                {[['TechVentures SG','SaaS',92,'hot'],['Meridian Logistics','Supply Chain',78,'warm'],['Apex Manufacturing','Industrial',65,'warm'],['Helion Capital','Finance',54,'new'],['OrbitTech APAC','Hardware',88,'hot']].map(([co,ind,score,st]) => (
                  <div className="dash-row" key={String(co)}>
                    <span className="dtr-co">{co}</span>
                    <span className="dtr-ind">{ind}</span>
                    <div className="dtr-score"><div className="score-bar"><div className="score-fill" style={{width:`${score}%`}}/></div><span className="score-n">{score}</span></div>
                    <span className={`dtr-st s-${st}`}>{String(st).charAt(0).toUpperCase()+String(st).slice(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow" style={{color:'var(--gold)'}}>The Problem Fingoh Solves</div>
        </div>
        <div className="stats-grid">
          {[['73%','of exhibitors say poor lead quality is their #1 problem'],['48h','average delay before first post-show follow-up'],['6×','higher conversion when outreach happens before the show'],['91%','of booth visitors are never contacted again']].map(([n,d]) => (
            <div className="stat-blk" key={n}><span className="stat-n">{n}</span><span className="stat-d">{d}</span></div>
          ))}
        </div>
      </section>

      <section className="lifecycle">
        <div className="lc-inner">
          <div className="eyebrow">The Platform</div>
          <h2 className="section-title">One platform. The entire<br /><em>trade fair lifecycle.</em></h2>
          <div className="lc-grid">
            {[
              {phase:'Pre-Show',num:'01',title:'Prospect Intelligence',desc:'Fingoh scans the exhibitor directory, cross-references your ICP, and surfaces the prospects most likely to convert — weeks before the event.',tags:['Company size match','Industry fit','Past event attendance','LinkedIn signals']},
              {phase:'Pre-Show',num:'02',title:'Outreach Automation',desc:'Personalised outreach sequences sent on your behalf — email and LinkedIn — so your calendar is full before you even land.',tags:['Personalised templates','Multi-touch sequences','Meeting scheduler','CRM sync']},
              {phase:'During Show',num:'03',title:'Live Booth Intelligence',desc:'Real-time intent signals from booth scans, badge data and engagement patterns. Know who to prioritise before the day ends.',tags:['Badge scan scoring','Dwell time signals','Conversation notes','Hot lead alerts']},
              {phase:'Post-Show',num:'04',title:'Follow-up Engine',desc:'Automated, personalised follow-up sequences triggered the moment the show closes — tiered by intent score so your best leads hear from you first.',tags:['Intent-ranked leads','Auto-sequences','Slack alerts','Pipeline reporting']},
            ].map(lc => (
              <div className="lc-card fade-up" key={lc.num}>
                <span className="lc-phase">{lc.phase}</span>
                <span className="lc-num">{lc.num}</span>
                <h3>{lc.title}</h3>
                <p>{lc.desc}</p>
                <div className="lc-tags">{lc.tags.map(t => <span className="lc-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-sec">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">Setup</div>
          <h2 className="section-title">Up and running in <em>under 30 minutes.</em></h2>
        </div>
        <div className="how-grid">
          {[['01','Connect your show','Tell Fingoh which trade fair you\'re exhibiting at. We pull the exhibitor directory, floor plan and session data automatically.'],['02','Define your ICP','Set your ideal customer profile — industry, company size, seniority, geography. Fingoh scores every attendee against it instantly.'],['03','Fingoh does the rest','Pre-show outreach goes out. Live signals come in during the show. Post-show follow-up fires the moment it ends. You close deals.']].map(([n,t,d]) => (
            <div className="how-step fade-up" key={n}><div className="how-n">{n}</div><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <div className="rule-box fade-up">
          <strong>The 48-hour rule</strong>
          <p>Intent decays fast. A prospect who visited your booth on Tuesday has forgotten you by Friday. Fingoh ensures your follow-up lands within hours of show close — before your competitors have even landed back home.</p>
        </div>
      </section>

      <section className="pricing-sec">
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title">Simple, show-based pricing.<br /><em>Pay per show, not per seat.</em></h2>
        </div>
        <div className="pricing-grid">
          <div className="plan fade-up">
            <div className="plan-tier">Starter</div>
            <div className="plan-price">Contact Sales</div>
            <div className="plan-desc">Solo exhibitors and small teams attending 1–2 shows per year</div>
            <ul>
              {['Up to 500 ICP-matched prospects','Up to 50 Deep IEI analysis reports','Live badge scan scoring','Post-show follow-up (1 sequence)','CSV export'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="https://fingoh.ai/signup" target="_blank" rel="noopener noreferrer" className="plan-cta cta-outline">Start Free Trial</a>
          </div>
          <div className="plan feat fade-up reveal-d1">
            <div className="plan-badge">Most Popular</div>
            <div className="plan-tier">Growth</div>
            <div className="plan-price">Contact Sales</div>
            <div className="plan-desc">Teams attending 3–6 shows per year who want full automation</div>
            <ul>
              {['Up to 2,000 ICP-matched prospects','Up to 200 Deep IEI analysis reports','Multi-channel outreach — email & LinkedIn','Live intent scoring dashboard','Post-show follow-up (3 sequences)','CRM integration (Zoho, HubSpot, Salesforce)','Show ROI reporting'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="https://fingoh.ai/signup" target="_blank" rel="noopener noreferrer" className="plan-cta cta-light">Start Free Trial</a>
          </div>
          <div className="plan fade-up reveal-d2">
            <div className="plan-tier">Scale</div>
            <div className="plan-price">Custom Pricing</div>
            <div className="plan-desc">Enterprise teams with multiple shows, regions and products</div>
            <ul>
              {['Unlimited prospects','Dedicated account manager','Custom outreach templates','Multi-show dashboard','API access','White-glove onboarding'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="https://fingoh.ai/signup" target="_blank" rel="noopener noreferrer" className="plan-cta cta-dark">Talk to Sales</a>
          </div>
        </div>
      </section>

      <div className="bridge-bar">
        <div className="bridge-inner">
          <h3>Fingoh.ai is built by Akiraas — a company that has stood in every exhibitor&apos;s shoes.</h3>
          <a href="https://fingoh.ai" target="_blank" rel="noopener noreferrer" className="btn btn-plum">Visit Fingoh.ai →</a>
        </div>
      </div>
    </>
  );
}
