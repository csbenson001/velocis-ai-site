import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Velocis AI — Ship AI Products 10x Faster | AI Development Studio',
  description: 'Velocis AI builds production-ready AI solutions in days, not months. 48-hour prototypes, 2-week MVP guarantee, zero technical debt. AI agent development, rapid prototyping, production scaling.',
  keywords: ['AI development', 'fast AI development', 'AI MVP', 'AI prototyping', 'AI agents', 'hire AI developers', 'AI development studio', 'rapid AI development', 'AI startup development'],
  openGraph: {
    title: 'Velocis AI — Ship AI Products 10x Faster',
    description: 'Production-ready AI solutions in days, not months. 48-hour prototypes. 2-week MVP guarantee.',
    type: 'website',
    url: 'https://velocisai.dev',
    siteName: 'Velocis AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocis AI — Ship AI Products 10x Faster',
    description: 'Production-ready AI solutions in days, not months. 48-hour prototypes. 2-week MVP guarantee.',
  },
  alternates: {
    canonical: 'https://velocisai.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://velocisai.dev/#organization",
      "name": "Velocis AI",
      "url": "https://velocisai.dev",
      "email": "hello@velocisai.com",
      "description": "AI development studio that ships production-ready AI products 10x faster than traditional development teams.",
      "slogan": "AI at Velocity",
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Agent Development",
        "Machine Learning",
        "Natural Language Processing",
        "Rapid Prototyping",
        "Production Scaling"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://velocisai.dev/#website",
      "url": "https://velocisai.dev",
      "name": "Velocis AI",
      "publisher": {
        "@id": "https://velocisai.dev/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "AI Agent Development",
      "provider": {
        "@id": "https://velocisai.dev/#organization"
      },
      "description": "Custom autonomous agents for conversational AI, multi-agent systems, and complex workflows — production-ready from day one.",
      "serviceType": "AI Development"
    },
    {
      "@type": "Service",
      "name": "Rapid Prototyping",
      "provider": {
        "@id": "https://velocisai.dev/#organization"
      },
      "description": "Working AI prototypes in 48 hours, enabling fast validation and iteration with real code, real AI, and real results.",
      "serviceType": "AI Prototyping"
    },
    {
      "@type": "Service",
      "name": "Production Scaling",
      "provider": {
        "@id": "https://velocisai.dev/#organization"
      },
      "description": "Infrastructure that handles millions of requests, from proof-of-concept to planet-scale, without breaking a sweat or the bank.",
      "serviceType": "AI Infrastructure"
    },
    {
      "@type": "Service",
      "name": "Continuous Optimization",
      "provider": {
        "@id": "https://velocisai.dev/#organization"
      },
      "description": "AI systems that learn and improve daily through monitoring, fine-tuning, and iterative refinement.",
      "serviceType": "AI Optimization"
    },
    {
      "@type": "FAQPage",
      "@id": "https://velocisai.dev/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Velocis AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Velocis AI is an AI development studio that builds production-ready AI solutions at unprecedented speed. We combine agent-powered development teams with deep AI expertise to deliver working AI products in days and weeks, not months."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can Velocis AI build an AI product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver a working prototype within 48 hours and a production-ready MVP within 2 weeks. This is 10x faster than traditional AI development timelines, which typically range from 3-6 months."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Velocis AI MVP guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If we can't deliver a working minimum viable product in 14 days, you pay nothing. No hedging, no padded timelines. That's the Velocis guarantee."
          }
        },
        {
          "@type": "Question",
          "name": "What types of AI solutions does Velocis AI build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build AI agents (conversational AI, multi-agent systems, autonomous workflows), rapid prototypes, production-scale AI infrastructure, and continuous optimization systems. Our expertise spans LLMs, NLP, computer vision, and more."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Velocis AI charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing varies based on project scope and complexity. Contact us at hello@velocisai.com for a custom quote. Given our 2-week delivery timeline, our total project costs are often significantly lower than traditional AI development engagements that stretch over months."
          }
        },
        {
          "@type": "Question",
          "name": "Is Velocis AI good for startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Startups are one of our primary clients. Our speed and MVP guarantee make us ideal for founders who need to validate AI product ideas quickly without burning through their runway."
          }
        },
        {
          "@type": "Question",
          "name": "How is Velocis AI different from other AI companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three things set us apart: speed (48-hour prototypes, 2-week MVPs), our guarantee (free if we miss the deadline), and our methodology (agent-powered development teams that produce zero technical debt). We ship production code, not slide decks."
          }
        },
        {
          "@type": "Question",
          "name": "What is Velocis AI's development process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our process has four phases: Brief (Day 1) where we understand your problem, Prototype (Day 2-3) where we deliver a working demo, Iterate (Week 1-2) where we refine based on your feedback with daily builds, and Launch (Week 2) where we deploy to production with full monitoring."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
