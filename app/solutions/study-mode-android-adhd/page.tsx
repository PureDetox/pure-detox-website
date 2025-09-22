import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Study Mode on Android (ADHD‑Aware): Lock Distractions | Pure Detox",
  description: "Lock your phone for studying with ADHD‑aware Study Mode. Timers, whitelists, and compassionate streak recovery.",
};

export default function StudyModePage() {
  const faqItems = [
    { question: "How to lock phone while studying?", answer: "Enable Study Mode, set 50/10 or 25/5 timers, whitelist research tools, start your session." },
    { question: "Best study app for ADHD Android?", answer: "Study Mode uses ADHD‑aware design with compassionate recovery and flexible presets." },
    { question: "Whitelist apps during focus?", answer: "Yes, keep research tools like Docs, Chrome, or note apps available while blocking distractions." },
    { question: "What if I need to exit early?", answer: "Compassionate recovery allows early exit with grace periods; streaks can be regained." },
  ];

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Study Mode on Android: Lock Distractions and Keep Momentum",
    totalTime: "PT2M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    tool: [{ "@type": "HowToTool", name: "Pure Detox app" }],
    supply: [{ "@type": "HowToSupply", name: "Android phone" }],
    step: [
      { "@type": "HowToStep", name: "Enable Study Mode", text: "Open Pure Detox and select Study Mode from presets." },
      { "@type": "HowToStep", name: "Set Timer (50/10 or 25/5)", text: "Choose 50‑minute focus with 10‑minute breaks, or 25/5 for ADHD‑friendly sessions." },
      { "@type": "HowToStep", name: "Build Research Whitelist", text: "Add research tools like Docs, Chrome, or note apps to stay accessible." },
      { "@type": "HowToStep", name: "Start Your Session", text: "Begin focus session; track progress and streaks with compassionate recovery." },
    ],
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
      { "@type": "ListItem", position: 1, name: "Solutions", item: "https://puredetox.app/solutions" },
      { "@type": "ListItem", position: 2, name: "Study Mode", item: "https://puredetox.app/solutions/study-mode-android-adhd" },
    ],
  };

  const snippetSteps = [
    "Enable Study Mode",
    "Set 50/10 timers",
    "Whitelist research tools",
    "Start your first session",
  ];

  return (
    <main className="container py-10 prose max-w-[760px]">
      <header className="not-prose mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Study Mode on Android: Lock Distractions and Keep Momentum</h1>
        <p className="opacity-80 mt-2">Studying fails when micro‑distractions break your momentum. Study Mode locks away distraction sources while keeping research tools available.</p>
        <div className="mt-4">
          <ClientCTAButton label="Use Study Mode" eventParams={{ cluster: "study", source: "guide-hero", route: "/solutions/study-mode-android-adhd" }} />
        </div>
      </header>

      <ol className="not-prose list-decimal list-inside p-4 rounded bg-black/5">
        {snippetSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <section className="mt-8">
        <h2>Why Study Sessions Fail (ADHD‑Aware Design)</h2>
        <p>
          Executive function challenges make traditional timers ineffective. Study Mode uses compassionate recovery, flexible presets, and clear progress tracking designed for ADHD brains.
        </p>
      </section>

      <section className="mt-8">
        <h2>Set Up Study Mode (10‑Second Preset)</h2>
        <h3>50/10 or 25/5 Timer Options</h3>
        <p>Choose 50‑minute focus blocks with 10‑minute breaks for deep work, or 25/5 for ADHD‑friendly shorter bursts.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Timer preset screenshot" />
      </section>

      <section className="mt-8">
        <h2>Whitelists for Research Tools + Notes</h2>
        <p>Keep essential research apps available: Google Docs, Chrome for research, note‑taking apps, while blocking social media and entertainment.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Whitelist configuration screenshot" />
      </section>

      <section className="mt-8">
        <h2>Progress &amp; Streaks (Compassionate Recovery)</h2>
        <p>Track study streaks with grace periods. Life happens—compassionate recovery lets you regain streaks without shame or reset anxiety.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Progress tracking screenshot" />
      </section>

      <section className="mt-8" id="faq">
        <h2>FAQ (ADHD/Students)</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <footer className="not-prose mt-10">
        <ClientCTAButton label="Download Routine" eventParams={{ cluster: "study", source: "guide-footer", route: "/solutions/study-mode-android-adhd" }} />
      </footer>

      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}
