import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Reduce Screen Time on Android: The Product‑Led Plan | Pure Detox",
  description: "A product‑led plan to cut screen time on Android: blocks, schedules, commitment, and a 30‑day challenge.",
};

export default function ScreenTimePage() {
  const faqItems = [
    { question: "Best screen‑time app Android?", answer: "Pure Detox combines blocking, scheduling, and commitment with compassionate recovery for sustainable screen time reduction." },
    { question: "How to reduce screen time fast?", answer: "Follow the 4‑step plan: block, schedule, commit, measure. Join the 30‑day challenge for structure and support." },
    { question: "What is a digital detox?", answer: "A digital detox is intentionally reducing device usage to improve focus, mental health, and real‑world relationships." },
    { question: "What should I whitelist?", answer: "Keep essential apps: calls, messages, work tools, navigation. Block entertainment and social feeds that consume time unconsciously." },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Reduce Screen Time on Android: A 30‑Day Product‑Led Plan",
    author: { "@type": "Person", name: "Pure Detox Team" },
    publisher: { "@type": "Organization", name: "Pure Detox" },
    datePublished: "2025-08-13",
    dateModified: "2025-08-13",
    description: "A product‑led plan to cut screen time on Android: blocks, schedules, commitment, and a 30‑day challenge.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pillar", item: "https://puredetox.app/pillar" },
      { "@type": "ListItem", position: 2, name: "Reduce Screen Time", item: "https://puredetox.app/pillar/reduce-screen-time-android" },
    ],
  };

  const planSteps = [
    "Block: Target high‑dopamine apps",
    "Schedule: Create focus windows",
    "Commit: Add gentle friction",
    "Measure: Track and celebrate progress",
  ];

  return (
    <main className="container py-10 prose max-w-[760px]">
      <header className="not-prose mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Reduce Screen Time on Android: A 30‑Day Product‑Led Plan</h1>
        <p className="opacity-80 mt-2">Cutting screen time sticks when you pair motivation with systems. This 30‑day plan uses product‑led steps to break the novelty loop, backed by a simple tracker.</p>
        <div className="mt-4">
          <ClientCTAButton label="Join 30‑Day Challenge" eventParams={{ cluster: "screen", source: "guide-hero", route: "/pillar/reduce-screen-time-android" }} />
        </div>
      </header>

      <ol className="not-prose list-decimal list-inside p-4 rounded bg-black/5">
        {planSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <section className="mt-8">
        <h2>Root Causes: Why Screen Time Spirals</h2>
        <p>
          Variable reward schedules in social apps exploit dopamine pathways designed for survival. Understanding the attention economy helps you design counter‑strategies that work with your brain, not against it.
        </p>
      </section>

      <section className="mt-8">
        <h2>Product‑Led Plan (Blocks/Schedules/Commitment)</h2>
        <h3>Week 1: Block High‑Dopamine Apps</h3>
        <p>Start with TikTok, Instagram Reels, YouTube Shorts. Use category filters to catch new dopamine traps as they emerge.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="App blocking interface" />
        
        <h3>Week 2: Schedule Focus Windows</h3>
        <p>Create 2‑hour morning focus blocks, workday schedules, and evening wind‑down periods. Start small and expand gradually.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Schedule configuration" />
        
        <h3>Week 3: Add Gentle Commitment</h3>
        <p>Enable friction for early exits. Keep emergency exits visible and accessible—this builds trust, not frustration.</p>
        
        <h3>Week 4: Measure and Celebrate</h3>
        <p>Track hours reclaimed, focus sessions completed, and streaks maintained. Celebrate small wins to reinforce new habits.</p>
      </section>

      <section className="mt-8">
        <h2>30‑Day Challenge Structure</h2>
        <p>Join a supportive cohort working through the same plan. Daily check‑ins, progress tracking, and compassionate accountability when life happens.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Challenge tracker template" />
      </section>

      <section className="mt-8">
        <h2>Success Metrics &amp; Outcome Tracking</h2>
        <p>
          Track leading indicators (sessions completed, apps blocked) and lagging indicators (hours reclaimed, focus quality). 
          Expect a calm home screen, fewer pulls into short‑form, and more time for deep work or rest.
        </p>
      </section>

      <section className="mt-8" id="faq">
        <h2>FAQ</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <footer className="not-prose mt-10">
        <ClientCTAButton label="Start 7‑day rescue" eventParams={{ cluster: "screen", source: "guide-footer", route: "/pillar/reduce-screen-time-android" }} />
      </footer>

      <Script id="jsonld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}
