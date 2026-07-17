import MagneticCluster from "../components/MagneticCluster";
import TiltCard from "../components/TiltCard";
import WorkStepper from "../components/WorkStepper";
import Photography from "../components/Photography";

const PROJECTS = [
  {
    name: "Aether",
    tag: "AI Precision Farming Platform",
    lead: "Turns four ML pipelines into one decision a farmer can act on in seconds.",
    body: "Aether unifies soil-moisture forecasting, crop-disease diagnosis, crop recommendations, and live market prices into a single interface — no data-science background required. I designed the district- and crop-level query flows and built the frontend end-to-end, running live against a real backend with zero mock data.",
  },
  {
    name: "CampusPreps",
    tag: "Multi-University Academic Platform",
    lead: "Replaced scattered WhatsApp groups and Drive links with one hub for 20+ universities to reuse.",
    body: "Sole designer and developer on a centralized platform for notes, PYQs, and curated resources. Built on a white-label architecture with 20+ modular components, so any university can deploy it with minimal setup — designed for scale from day one, not just for one campus.",
  },
  {
    name: "Aletheia",
    tag: "AI Misinformation Detection",
    lead: "Real-time credibility scoring for news, with a UI that makes AI bias-detection legible to anyone.",
    body: "An AI platform scoring credibility and flagging bias across 5 articles at once, with distinct experiences for general readers versus journalists. I designed the UI/UX layer that translates raw AI outputs — manipulative-technique tags, bias signals — into something a non-technical reader can actually trust and use.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="section hero">
        <header className="site-head wrap">
          <span className="logo">
            SK<span>.</span>
          </span>
          <div className="head-right">
            <a className="head-mail" href="mailto:shreyashkhare.work@gmail.com">
              shreyashkhare.work@gmail.com
            </a>
            <a
              className="resume-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume
              <span className="resume-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </header>

        <div className="hero-body wrap">
          <div className="hero-stage">
            {/* Rolling title */}
            <div className="roll-window rise-05">
              <div className="roll-track">
                <span>Product Designer</span>
                <span>Frontend Dev</span>
                <span>UI/UX Designer</span>
                <span>Product Designer</span>
              </div>
            </div>

            <div className="hero-locale">Based in Chennai, India</div>

            <MagneticCluster />
          </div>

          <div className="hero-intro rise-3">
            <p className="hero-lede">
              Designing thoughtful digital products with a focus on usability,
              simplicity, and meaningful user experiences.
            </p>
            <div className="cta-row">
              <div className="badge">
                <span className="dot"></span>
                <span>Open to work</span>
              </div>
              <a
                className="btn"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyashkhare.work@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section stats-section">
        {/* Orbit decoration — sits behind the stats */}
        <div className="orbit-wrap" aria-hidden="true">
          <svg className="orbit-svg" width="620" height="620" viewBox="0 0 620 620">
            <circle cx="310" cy="310" r="90" fill="none" stroke="var(--color-border-strong)" strokeWidth="1" />
            <circle cx="310" cy="310" r="160" fill="none" stroke="var(--color-border-strong)" strokeWidth="1" />
            <circle cx="310" cy="310" r="230" fill="none" stroke="var(--color-border)" strokeWidth="1" />
            <circle cx="310" cy="310" r="300" fill="none" stroke="var(--color-border)" strokeWidth="1" />
            <g className="orbit-spin">
              <circle cx="400" cy="310" r="3.5" fill="var(--color-fg-tertiary)" />
              <circle cx="310" cy="400" r="3.5" fill="var(--color-fg-tertiary)" />
              <circle cx="220" cy="310" r="3.5" fill="var(--color-fg-tertiary)" />
              <circle cx="310" cy="220" r="3.5" fill="var(--color-fg-tertiary)" />
              <circle cx="423.1" cy="423.1" r="4" fill="var(--color-fg-tertiary)" />
              <circle cx="196.9" cy="423.1" r="4" fill="var(--color-fg-tertiary)" />
              <circle cx="196.9" cy="196.9" r="4" fill="var(--color-fg-tertiary)" />
              <circle cx="423.1" cy="196.9" r="4" fill="var(--color-fg-tertiary)" />
              <circle cx="540" cy="310" r="4.5" fill="var(--color-fg-tertiary)" />
              <circle cx="310" cy="540" r="4.5" fill="var(--color-accent)" />
              <circle cx="80" cy="310" r="4.5" fill="var(--color-fg-tertiary)" />
              <circle cx="310" cy="80" r="4.5" fill="var(--color-fg-tertiary)" />
              <circle cx="522.1" cy="522.1" r="5" fill="var(--color-fg-tertiary)" />
              <circle cx="97.9" cy="522.1" r="5" fill="var(--color-accent)" />
              <circle cx="97.9" cy="97.9" r="5" fill="var(--color-fg-tertiary)" />
              <circle cx="522.1" cy="97.9" r="5" fill="var(--color-fg-tertiary)" />
            </g>
          </svg>
        </div>

        <div className="wrap">
          <div className="stats-strip">
            <div className="stat">
              <div className="stat-num">3+</div>
              <div className="stat-label">Years experience</div>
            </div>
            <div className="stat">
              <div className="stat-num accent">10+</div>
              <div className="stat-label">Projects shipped</div>
            </div>
            <div className="stat">
              <div className="stat-num">3</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">Leadership position</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section className="section section-pad">
        <div className="wrap stack-7">
          <div className="section-head">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="section-title">Projects</h2>
            </div>
            <p>A few things I&rsquo;ve designed and shipped end-to-end.</p>
          </div>

          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <TiltCard key={p.name}>
                <div className="proj-cover">
                  <div className="slot placeholder">{p.name} cover</div>
                </div>
                <div className="proj-meta">
                  <div className="proj-top">
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <div className="proj-name">{p.name}</div>
                      <div className="proj-tag">{p.tag}</div>
                    </div>
                    <span className="proj-arrow">&rarr;</span>
                  </div>
                  <div className="proj-desc">
                    <p className="lead">{p.lead}</p>
                    <p className="body">{p.body}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Personal ===== */}
      <section className="section section-pad">
        <div className="wrap stack-7">
          <div>
            <div className="eyebrow">Off the clock</div>
            <h2 className="section-title">Personal</h2>
          </div>

          <div className="personal-grid">
            {/* Map tile */}
            <div className="map-tile">
              <div className="slot placeholder">Map screenshot</div>
              <span className="map-tag">Map</span>
              <div className="map-caption">
                <div className="city">Chennai</div>
                <div className="coord">13.0827&deg; N, 80.2707&deg; E</div>
              </div>
            </div>

            {/* Middle column */}
            <div className="mid-col">
              <WorkStepper />

              <div className="panel">
                <div className="mistake-head">
                  <span className="panel-label">Design mistake I made</span>
                  <span className="panel-label lesson">Lesson #18</span>
                </div>
                <div className="mistake-quote">
                  &ldquo;I once spent 8 hours perfecting an animation nobody
                  noticed.&rdquo;
                </div>
                <p className="mistake-note">Now I start with usability.</p>
              </div>
            </div>

            {/* Photography tile + gallery */}
            <Photography />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <nav className="footer-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </nav>
          <p className="footer-note">
            Made with <span className="footer-heart">&hearts;</span> by Shreyash Khare
          </p>
        </div>
      </footer>
    </>
  );
}
