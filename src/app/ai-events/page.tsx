import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Events | Akiraas',
  description:
    'Transform your event lifecycle with AI. Akiraas partners with event organisers to implement AI-powered marketing, matchmaking, and post-show automation — from first outreach to final rebook.',
  alternates: { canonical: 'https://akiraas.com/ai-events' },
  openGraph: {
    title: 'AI for Events | Akiraas',
    description:
      'Transform your event lifecycle with AI. Akiraas partners with event organisers to implement AI-powered marketing, matchmaking, and post-show automation.',
    url: 'https://akiraas.com/ai-events',
    images: [{ url: 'https://akiraas.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function AIEventsPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="aie-hero">
        <div className="aie-hero-inner">
          <p className="eyebrow">AI for Event Organisers</p>
          <h1 className="aie-hero-title">
            Your event deserves<br />
            <em>intelligence at every stage.</em>
          </h1>
          <p className="aie-hero-lead">
            AI isn't a feature — it's a competitive advantage. Akiraas works alongside event
            organisers to embed AI into marketing, operations, and post-show follow-up, so
            every show performs harder and every relationship lasts longer.
          </p>
          <div className="aie-hero-ctas">
            <Link href="/contact" className="btn-gold">Talk to Akiraas →</Link>
            <a href="#lifecycle" className="btn-ghost-light">See how it works ↓</a>
          </div>
        </div>
      </section>

      {/* ── WHY AI FOR EVENTS ───────────────────────────── */}
      <section className="aie-why">
        <div className="aie-why-inner">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>The Case for AI</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Why AI changes everything for trade fairs &amp; exhibitions
          </h2>
          <div className="aie-why-grid">
            {[
              {
                num: '01',
                title: 'Exhibitor ROI is measurable — finally',
                body: 'AI-powered intent scoring and pipeline tracking give exhibitors hard numbers. Organisers who offer ROI clarity win renewals.',
              },
              {
                num: '02',
                title: 'Audience intelligence replaces guesswork',
                body: 'AI maps buyer intent from registration and browsing signals. You target the right segment, not the widest list.',
              },
              {
                num: '03',
                title: 'Matchmaking drives floor value',
                body: 'Algorithmic meeting scheduling means exhibitors spend time with qualified buyers — not random walk-ins.',
              },
              {
                num: '04',
                title: 'Speed beats the forgetting curve',
                body: 'Automated follow-up within hours of a conversation keeps warm leads warm. Manual outreach days later loses them.',
              },
              {
                num: '05',
                title: 'Data compounds across editions',
                body: 'Every show builds a richer audience and exhibitor model. Your second show outperforms your first — automatically.',
              },
            ].map((item) => (
              <div key={item.num} className="aie-why-card">
                <span className="aie-why-num">{item.num}</span>
                <h3 className="aie-why-card-title">{item.title}</h3>
                <p className="aie-why-card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOW LIFECYCLE FLOW ─────────────────────────── */}
      <section className="aie-lifecycle" id="lifecycle">
        <div className="aie-lifecycle-inner">
          <p className="eyebrow">AI-Enabled Show Lifecycle</p>
          <h2 className="section-title">Every stage. Every touchpoint. Powered by AI.</h2>
          <p className="section-lead">
            From audience targeting before the invitations go out to rebooking conversations
            six months after pack-down — AI creates continuity where events used to have gaps.
          </p>
          <div className="aie-flow">
            {[
              { phase: 'Pre-show', label: 'ICP & Audience Targeting', icon: '🎯' },
              { phase: 'Pre-show', label: 'AI-Driven Outreach & Nurture', icon: '✉️' },
              { phase: 'On-site', label: 'Smart Matchmaking', icon: '🤝' },
              { phase: 'On-site', label: 'Intent Scoring & Alerts', icon: '📊' },
              { phase: 'Post-show', label: 'Automated Follow-Up', icon: '⚡' },
              { phase: 'Post-show', label: 'Pipeline & ROI Dashboard', icon: '📈' },
              { phase: 'Next show', label: 'Rebook & Retention Campaigns', icon: '🔁' },
              { phase: 'Next show', label: 'AI Model Refinement', icon: '🧠' },
            ].map((step, i) => (
              <div key={i} className="aie-flow-step">
                <div className="aie-flow-phase">{step.phase}</div>
                <div className="aie-flow-icon">{step.icon}</div>
                <div className="aie-flow-label">{step.label}</div>
                {i < 7 && <div className="aie-flow-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ───────────────────────────────────── */}
      <section className="aie-pillars">
        <div className="aie-pillars-inner">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>What We Implement</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Four pillars of AI-powered event performance
          </h2>
          <div className="aie-pillars-grid">
            <div className="aie-pillar">
              <div className="aie-pillar-tag">Pre-show · 6–8 weeks out</div>
              <h3 className="aie-pillar-title">
                AI-Powered Marketing &amp;<br />Audience Intelligence
              </h3>
              <ul className="aie-pillar-list">
                <li>ICP profiling and look-alike audience modelling</li>
                <li>AI-generated, personalised outreach sequences</li>
                <li>Registration intent scoring — who's truly committed</li>
                <li>Exhibitor-specific audience segment reports</li>
                <li>Dynamic campaign optimisation based on open and click signals</li>
              </ul>
            </div>
            <div className="aie-pillar">
              <div className="aie-pillar-tag">During show · On-site</div>
              <h3 className="aie-pillar-title">
                AI-Driven Operations &amp;<br />Smart Matchmaking
              </h3>
              <ul className="aie-pillar-list">
                <li>Algorithmic buyer–exhibitor meeting scheduling</li>
                <li>Real-time floor intent signals via app or badge data</li>
                <li>Live sentiment and engagement dashboards</li>
                <li>Session and booth traffic analytics</li>
                <li>Instant lead capture with context tagging</li>
              </ul>
            </div>
            <div className="aie-pillar">
              <div className="aie-pillar-tag">Post-show · 0–30 days</div>
              <h3 className="aie-pillar-title">
                AI-Accelerated Sales &amp;<br />Follow-Up Automation
              </h3>
              <ul className="aie-pillar-list">
                <li>Automated follow-up sequences within hours of show close</li>
                <li>Lead scoring by conversation depth and booth dwell time</li>
                <li>CRM sync with deal stage and next-action suggestions</li>
                <li>Exhibitor ROI report generation (auto-built from data)</li>
                <li>Hot-lead alerts to exhibitor sales teams in real time</li>
              </ul>
            </div>
            <div className="aie-pillar">
              <div className="aie-pillar-tag">Post-show · 30–180 days</div>
              <h3 className="aie-pillar-title">
                AI-Enabled Rebooking &amp;<br />Retention Campaigns
              </h3>
              <ul className="aie-pillar-list">
                <li>Propensity modelling — who will rebook and when</li>
                <li>Personalised rebook proposals at the right moment</li>
                <li>Audience retention nurture sequences between editions</li>
                <li>AI-trained model refinement for the next show</li>
                <li>Long-term exhibitor success tracking and benchmarking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINGOH SPOTLIGHT ────────────────────────────── */}
      <section className="aie-fingoh">
        <div className="aie-fingoh-inner">
          <div className="aie-fingoh-badge">Powered by</div>
          <div className="aie-fingoh-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Fingoh_Black.png" alt="Fingoh.ai" className="aie-fingoh-logo" />
          </div>
          <p className="aie-fingoh-tagline">
            Fingoh.ai is the AI platform purpose-built for events. Akiraas implements and
            configures Fingoh.ai for organisers and exhibitors — and supports with strategy,
            data, and ongoing optimisation.
          </p>
          <div className="aie-fingoh-platforms">
            <div className="aie-fingoh-platform">
              <h4>Organiser Platform</h4>
              <ul>
                <li>Full show lifecycle dashboard</li>
                <li>Audience intelligence &amp; ICP mapping</li>
                <li>Matchmaking engine configuration</li>
                <li>Post-show ROI and pipeline reporting</li>
                <li>Rebooking propensity model</li>
              </ul>
            </div>
            <div className="aie-fingoh-platform">
              <h4>Exhibitor Platform</h4>
              <ul>
                <li>Lead capture and context tagging</li>
                <li>Pre-show audience preview reports</li>
                <li>Personalised meeting recommendations</li>
                <li>Post-show lead scoring and CRM push</li>
                <li>ROI dashboards by booth and team member</li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="https://fingoh.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              Learn about Fingoh.ai →
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW AKIRAAS PARTNERS ─────────────────────────── */}
      <section className="aie-partner">
        <div className="aie-partner-inner">
          <p className="eyebrow">The Akiraas Difference</p>
          <h2 className="section-title">We don't just advise. We build.</h2>
          <p className="section-lead">
            Most consultants hand you a strategy deck and leave. Akiraas stays through
            implementation — configuring the tech, connecting the data, training the team,
            and optimising the model after every show.
          </p>
          <div className="aie-partner-modes">
            <div className="aie-partner-mode">
              <div className="aie-partner-mode-icon">🧭</div>
              <h3>Strategy &amp; Consulting</h3>
              <p>
                We audit your current event stack, map the gaps, and design an AI roadmap
                aligned to your show calendar and commercial targets.
              </p>
            </div>
            <div className="aie-partner-mode">
              <div className="aie-partner-mode-icon">⚙️</div>
              <h3>Platform Implementation</h3>
              <p>
                We configure and deploy Fingoh.ai (and your existing Martech stack) — from
                data integrations to workflow automation — so everything runs on show day.
              </p>
            </div>
            <div className="aie-partner-mode">
              <div className="aie-partner-mode-icon">📊</div>
              <h3>Data &amp; Analytics</h3>
              <p>
                We build the dashboards and reporting frameworks that let you walk into every
                exhibitor renewal conversation with hard numbers and a clear story.
              </p>
            </div>
            <div className="aie-partner-mode">
              <div className="aie-partner-mode-icon">🔄</div>
              <h3>Ongoing Optimisation</h3>
              <p>
                After each edition, we refine the AI models, update audience segments, and
                improve automation sequences — so your next show outperforms this one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="aie-cta">
        <div className="aie-cta-inner">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Ready to start?</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Let's talk about your next show.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-loose)', marginBottom: '2.5rem' }}>
            Whether you're planning your first AI-powered show or looking to scale what's
            already working — Akiraas brings the strategy and the hands that build it.
          </p>
          <Link href="/contact" className="btn-gold" style={{ fontSize: 'var(--text-base)', padding: '1rem 2.5rem' }}>
            Start the conversation →
          </Link>
        </div>
      </section>

      {/* ── PAGE STYLES ─────────────────────────────────── */}
      <style>{`
        /* ── HERO ── */
        .aie-hero {
          background: linear-gradient(135deg, var(--plum) 0%, #1a0f35 100%);
          padding: 7rem 4vw 6rem;
          position: relative;
          overflow: hidden;
        }
        .aie-hero::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,150,62,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .aie-hero-inner {
          max-width: var(--content-max);
          margin: 0 auto;
          max-width: 760px;
        }
        .aie-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.15;
          margin: 1rem 0 1.5rem;
        }
        .aie-hero-title em {
          color: var(--gold-light);
          font-style: italic;
        }
        .aie-hero-lead {
          font-family: var(--font-sans);
          font-size: var(--text-lg);
          color: rgba(255,255,255,0.78);
          line-height: var(--lh-loose);
          margin-bottom: 2.5rem;
          max-width: 640px;
        }
        .aie-hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── WHY ── */
        .aie-why {
          background: var(--plum);
          padding: 5rem 4vw;
        }
        .aie-why-inner {
          max-width: var(--content-max);
          margin: 0 auto;
        }
        .aie-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .aie-why-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(184,150,62,0.2);
          border-top: 3px solid var(--gold);
          padding: 2rem;
          border-radius: 2px;
        }
        .aie-why-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: rgba(184,150,62,0.35);
          display: block;
          margin-bottom: 0.75rem;
          line-height: 1;
        }
        .aie-why-card-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--white);
          margin-bottom: 0.6rem;
          font-weight: 600;
        }
        .aie-why-card-body {
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          color: rgba(255,255,255,0.65);
          line-height: var(--lh-loose);
        }

        /* ── LIFECYCLE ── */
        .aie-lifecycle {
          background: var(--cream);
          padding: 5rem 4vw;
        }
        .aie-lifecycle-inner {
          max-width: var(--content-max);
          margin: 0 auto;
        }
        .aie-flow {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin-top: 3rem;
          align-items: stretch;
        }
        .aie-flow-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1 1 140px;
          min-width: 120px;
          padding: 1.75rem 1rem;
          background: var(--white);
          border: 1px solid rgba(45,27,78,0.1);
          border-radius: 4px;
          margin: 0.3rem;
        }
        .aie-flow-phase {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }
        .aie-flow-icon {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .aie-flow-label {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--plum);
          line-height: 1.35;
        }
        .aie-flow-arrow {
          display: none;
        }

        /* ── PILLARS ── */
        .aie-pillars {
          background: var(--plum-dark, #1a0f35);
          padding: 5rem 4vw;
        }
        .aie-pillars-inner {
          max-width: var(--content-max);
          margin: 0 auto;
        }
        .aie-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .aie-pillar {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(184,150,62,0.18);
          border-radius: 3px;
          padding: 2rem;
        }
        .aie-pillar-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(184,150,62,0.35);
          padding: 0.3rem 0.7rem;
          border-radius: 2px;
          margin-bottom: 1.2rem;
        }
        .aie-pillar-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--white);
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1.2rem;
        }
        .aie-pillar-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .aie-pillar-list li {
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          color: rgba(255,255,255,0.68);
          line-height: var(--lh-normal);
          padding-left: 1.2rem;
          position: relative;
        }
        .aie-pillar-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-size: 0.75rem;
        }

        /* ── FINGOH ── */
        .aie-fingoh {
          background: var(--cream-dark, #f5f0ea);
          padding: 5rem 4vw;
        }
        .aie-fingoh-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .aie-fingoh-badge {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-light);
          margin-bottom: 1rem;
        }
        .aie-fingoh-logo-wrap {
          margin-bottom: 1.5rem;
        }
        .aie-fingoh-logo {
          height: 52px;
          width: auto;
          object-fit: contain;
        }
        .aie-fingoh-tagline {
          font-family: var(--font-sans);
          font-size: var(--text-base);
          color: var(--ink-light);
          line-height: var(--lh-loose);
          max-width: 640px;
          margin: 0 auto 3rem;
        }
        .aie-fingoh-platforms {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          text-align: left;
        }
        .aie-fingoh-platform {
          background: var(--white);
          border: 1px solid rgba(45,27,78,0.1);
          border-top: 3px solid var(--plum);
          border-radius: 2px;
          padding: 2rem;
        }
        .aie-fingoh-platform h4 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--plum);
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .aie-fingoh-platform ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .aie-fingoh-platform ul li {
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          color: var(--ink-light);
          padding-left: 1.1rem;
          position: relative;
          line-height: var(--lh-normal);
        }
        .aie-fingoh-platform ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-weight: 700;
          font-size: 0.75rem;
        }
        @media (max-width: 600px) {
          .aie-fingoh-platforms { grid-template-columns: 1fr; }
        }

        /* ── PARTNER MODES ── */
        .aie-partner {
          background: var(--white);
          padding: 5rem 4vw;
        }
        .aie-partner-inner {
          max-width: var(--content-max);
          margin: 0 auto;
        }
        .aie-partner-modes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .aie-partner-mode {
          border: 1px solid rgba(45,27,78,0.1);
          border-radius: 3px;
          padding: 2rem;
          transition: box-shadow 0.2s;
        }
        .aie-partner-mode:hover {
          box-shadow: 0 4px 24px rgba(45,27,78,0.1);
        }
        .aie-partner-mode-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .aie-partner-mode h3 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--plum);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .aie-partner-mode p {
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          color: var(--ink-light);
          line-height: var(--lh-loose);
        }

        /* ── CTA ── */
        .aie-cta {
          background: var(--plum);
          padding: 6rem 4vw;
          text-align: center;
        }
        .aie-cta-inner {
          max-width: 680px;
          margin: 0 auto;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .aie-hero { padding: 5rem 4vw 4rem; }
          .aie-hero-ctas { flex-direction: column; }
          .aie-why-grid { grid-template-columns: 1fr; }
          .aie-flow { justify-content: center; }
          .aie-pillars-grid { grid-template-columns: 1fr; }
          .aie-partner-modes { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
