"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-logo">VELOCIS AI</div>
        <div className="nav-links">
          <a href="#services" aria-label="Services">Services</a>
          <a href="#process" aria-label="How It Works">How It Works</a>
          <a href="#guarantee" aria-label="Guarantee">Guarantee</a>
          <a href="#faq" aria-label="FAQ">FAQ</a>
        </div>
        <a href="mailto:hello@velocisai.com" className="nav-cta" aria-label="Get Started">Get Started</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-streak hero-streak-1" />
        <div className="hero-streak hero-streak-2" />
        <div className="hero-streak hero-streak-3" />
        <div className="hero-streak hero-streak-4" />
        <div className="hero-streak hero-streak-5" />

        <p className="hero-tag">AI Development Studio</p>

        <h1 className="hero-headline">
          <span className="hero-headline-top">AI AT</span>
          <span className="hero-headline-bottom">VELOCITY</span>
        </h1>

        <p className="hero-sub">
          Ship AI products 10x faster. Our agent-powered teams deliver
          production-ready solutions before your competitors finish their RFPs.
        </p>

        <a href="mailto:hello@velocisai.com" className="hero-cta" aria-label="Accelerate Now">
          Accelerate Now
          <span className="hero-cta-arrow">&rarr;</span>
        </a>
      </section>

      {/* ── SPEED METRICS ── */}
      <section className="metrics">
        <div className="metrics-bg-lines" />
        <div className="metrics-grid">
          <div className="metric-card reveal stagger-1">
            <div className="metric-value">48hr</div>
            <div className="metric-label">First Prototype</div>
          </div>
          <div className="metric-card reveal stagger-2">
            <div className="metric-value">2 wks</div>
            <div className="metric-label">To Production</div>
          </div>
          <div className="metric-card reveal stagger-3">
            <div className="metric-value">10x</div>
            <div className="metric-label">Faster Than Traditional</div>
          </div>
          <div className="metric-card reveal stagger-4">
            <div className="metric-value">Zero</div>
            <div className="metric-label">Technical Debt</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label reveal">What We Build</div>
          <h2 className="section-title reveal">
            Four gears. One machine.
            <br />
            Relentless velocity.
          </h2>
          <div className="services-grid">
            <div className="service-card reveal stagger-1">
              <span className="service-number">01</span>
              <h3 className="service-title">AI Agent Development</h3>
              <p className="service-desc">
                Custom autonomous agents that think, act, and deliver. From
                conversational AI to complex multi-agent systems — architected
                for production from day one.
              </p>
            </div>
            <div className="service-card reveal stagger-2">
              <span className="service-number">02</span>
              <h3 className="service-title">Rapid Prototyping</h3>
              <p className="service-desc">
                Working prototypes in 48 hours, not 48 days. We compress
                discovery into delivery so you can validate fast and pivot
                faster.
              </p>
            </div>
            <div className="service-card reveal stagger-3">
              <span className="service-number">03</span>
              <h3 className="service-title">Production Scaling</h3>
              <p className="service-desc">
                From proof-of-concept to planet-scale. Infrastructure that
                handles millions of requests without breaking a sweat — or the
                bank.
              </p>
            </div>
            <div className="service-card reveal stagger-4">
              <span className="service-number">04</span>
              <h3 className="service-title">Continuous Optimization</h3>
              <p className="service-desc">
                AI that gets smarter every day. Monitoring, fine-tuning, and
                iterating so your systems evolve as fast as your market does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="process" id="process">
        <div className="container">
          <div className="process-header">
            <div className="section-label reveal">How It Works</div>
            <h2 className="section-title reveal">
              From brief to launch.
              <br />
              At speed.
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-step reveal stagger-1">
              <div className="timeline-label">Day 1</div>
              <div className="timeline-dot" />
              <h3 className="timeline-title">Brief</h3>
              <p className="timeline-desc">
                You tell us the problem. We map the fastest route to a solution.
              </p>
              <svg
                className="timeline-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="timeline-step reveal stagger-2">
              <div className="timeline-label">Day 2–3</div>
              <div className="timeline-dot" />
              <h3 className="timeline-title">Prototype</h3>
              <p className="timeline-desc">
                A working prototype lands in your hands. Real code, real AI,
                real results.
              </p>
              <svg
                className="timeline-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="timeline-step reveal stagger-3">
              <div className="timeline-label">Week 1–2</div>
              <div className="timeline-dot" />
              <h3 className="timeline-title">Iterate</h3>
              <p className="timeline-desc">
                Rapid feedback loops. Daily builds. Your vision, refined at
                velocity.
              </p>
              <svg
                className="timeline-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="timeline-step reveal stagger-4">
              <div className="timeline-label">Week 2</div>
              <div className="timeline-dot" />
              <h3 className="timeline-title">Launch</h3>
              <p className="timeline-desc">
                Production-ready. Battle-tested. Deployed and monitored. Go
                live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VELOCITY GUARANTEE ── */}
      <section className="guarantee" id="guarantee">
        <div className="container">
          <div className="guarantee-badge reveal">Our Promise</div>
          <h2 className="guarantee-headline reveal">
            MVP in 2 weeks
            <br />
            or <em>it&apos;s free.</em>
          </h2>
          <p className="guarantee-sub reveal">
            We don&apos;t hedge. We don&apos;t pad timelines. If we can&apos;t
            deliver a working minimum viable product in 14 days, you pay
            nothing. That&apos;s the Velocis guarantee.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-label reveal">Common Questions</div>
          <h2 className="section-title reveal">
            Straight answers.
            <br />
            No friction.
          </h2>
          <div className="faq-grid">
            <div className="faq-item reveal stagger-1">
              <h3 className="faq-question">What is Velocis AI?</h3>
              <p className="faq-answer">
                Velocis AI is an AI development studio that builds
                production-ready AI solutions at unprecedented speed. We combine
                agent-powered development teams with deep AI expertise to deliver
                working AI products in days and weeks, not months.
              </p>
            </div>
            <div className="faq-item reveal stagger-2">
              <h3 className="faq-question">
                How fast can Velocis AI build an AI product?
              </h3>
              <p className="faq-answer">
                We deliver a working prototype within 48 hours and a
                production-ready MVP within 2 weeks. That&apos;s 10x faster than
                traditional AI development timelines of 3&ndash;6 months.
              </p>
            </div>
            <div className="faq-item reveal stagger-3">
              <h3 className="faq-question">
                What is the Velocis AI MVP guarantee?
              </h3>
              <p className="faq-answer">
                If we can&apos;t deliver a working minimum viable product in 14
                days, you pay nothing. No hedging, no padded timelines.
                That&apos;s the Velocis guarantee.
              </p>
            </div>
            <div className="faq-item reveal stagger-4">
              <h3 className="faq-question">
                What types of AI solutions does Velocis AI build?
              </h3>
              <p className="faq-answer">
                We build AI agents (conversational AI, multi-agent systems,
                autonomous workflows), rapid prototypes, production-scale AI
                infrastructure, and continuous optimization systems. Our expertise
                spans LLMs, NLP, computer vision, and more.
              </p>
            </div>
            <div className="faq-item reveal stagger-1">
              <h3 className="faq-question">
                How much does Velocis AI charge?
              </h3>
              <p className="faq-answer">
                Pricing varies based on project scope and complexity. Given our
                2-week delivery timeline, total project costs are often
                significantly lower than traditional engagements that stretch over
                months. Contact us for a custom quote.
              </p>
            </div>
            <div className="faq-item reveal stagger-2">
              <h3 className="faq-question">
                Is Velocis AI good for startups?
              </h3>
              <p className="faq-answer">
                Absolutely. Our speed and MVP guarantee make us ideal for founders
                who need to validate AI product ideas quickly without burning
                through their runway. We get you to market before better-funded
                competitors.
              </p>
            </div>
            <div className="faq-item reveal stagger-3">
              <h3 className="faq-question">
                How is Velocis AI different from other AI companies?
              </h3>
              <p className="faq-answer">
                Three things set us apart: speed (48-hour prototypes, 2-week
                MVPs), our guarantee (free if we miss the deadline), and our
                methodology (agent-powered teams that produce zero technical
                debt). We ship production code, not slide decks.
              </p>
            </div>
            <div className="faq-item reveal stagger-4">
              <h3 className="faq-question">
                What is Velocis AI&apos;s development process?
              </h3>
              <p className="faq-answer">
                Four phases: Brief (Day 1) to understand your problem, Prototype
                (Day 2&ndash;3) to deliver a working demo, Iterate (Week
                1&ndash;2) to refine with daily builds, and Launch (Week 2) to
                deploy to production with full monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="cta-footer">
        <div className="container">
          <h2 className="cta-headline reveal">
            Stop waiting.
            <span className="cta-headline-accent">Start shipping.</span>
          </h2>
          <p className="cta-sub reveal">
            Your competitors are already building with AI. Let&apos;s make sure
            you get there first.
          </p>
          <a href="mailto:hello@velocisai.com" className="cta-button reveal" aria-label="Let's Talk">
            Let&apos;s Talk
            <span className="cta-button-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p className="footer-text">
          &copy; 2026 <span>Velocis AI</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
}
