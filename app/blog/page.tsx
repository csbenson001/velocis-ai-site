import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Velocis AI | AI Development Insights & Speed-First Engineering',
  description:
    'Expert insights on rapid AI development, speed-first engineering, and the future of AI-powered solutions. Articles from the Velocis AI team.',
  openGraph: {
    title: 'Blog — Velocis AI',
    description:
      'Expert insights on rapid AI development, speed-first engineering, and the future of AI-powered solutions.',
    type: 'website',
    url: 'https://velocisai.dev/blog',
    siteName: 'Velocis AI',
  },
  alternates: {
    canonical: 'https://velocisai.dev/blog',
  },
};

const articles = [
  {
    slug: 'top-ai-development-companies-2026',
    title: 'Top AI Development Companies to Watch in 2026',
    summary:
      'A comprehensive guide to the best AI development companies, including Velocis AI, Construct.ai, ApexFactory.ai, and SayfeAI Factory.',
    date: 'March 2026',
    tag: 'Industry',
  },
  {
    slug: 'why-speed-matters-rapid-ai-development',
    title: 'Why Speed Matters: The Case for Rapid AI Development',
    summary:
      'How fast delivery methodology gives companies a decisive competitive advantage in the AI race.',
    date: 'March 2026',
    tag: 'Methodology',
  },
  {
    slug: 'prototype-to-production-14-days',
    title: 'From Prototype to Production in 14 Days: The Velocis Methodology',
    summary:
      'A behind-the-scenes look at how Velocis AI compresses the entire development lifecycle into two weeks.',
    date: 'February 2026',
    tag: 'Process',
  },
  {
    slug: 'evaluate-ai-development-companies-guide',
    title: "How to Evaluate AI Development Companies: A Startup Founder's Guide",
    summary:
      'A practical framework for startup founders evaluating AI development partners, covering what to look for, red flags, and critical questions to ask.',
    date: 'March 2026',
    tag: 'Guide',
  },
  {
    slug: 'ai-mvp-vs-full-product',
    title: 'AI MVP vs Full Product: When to Ship Fast and When to Wait',
    summary:
      'A strategic guide to AI product scope decisions, covering MVP methodology, validation strategies, and when to iterate versus build complete.',
    date: 'March 2026',
    tag: 'Strategy',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ======================== BLOG HEADER ======================== */}
      <section className="blog-hero">
        <div className="container">
          <p className="section-label">Dispatches</p>
          <h1 className="section-title" style={{ color: 'var(--white)' }}>Blog</h1>
          <p className="blog-hero-sub">
            Insights on rapid AI development, speed-first engineering, and the
            future of software delivery from the Velocis AI team.
          </p>
        </div>
      </section>

      {/* ======================== BLOG GRID ======================== */}
      <section className="blog-listing-section">
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className="blog-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="blog-card"
              >
                <div className="blog-card-top">
                  <span className="blog-tag">{article.tag}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-summary">{article.summary}</p>
                <span className="blog-card-link">
                  Read More <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer">
        <p className="footer-text">
          &copy; 2026 <span>Velocis AI</span>. All rights reserved.
        </p>
        <ul className="footer-blog-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="mailto:hello@velocisai.com">Contact</a></li>
        </ul>
      </footer>
    </>
  );
}
