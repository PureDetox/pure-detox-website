import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Block YouTube Shorts on Android (No Root) | Pure Detox",
  description: "Disable Shorts with category filters, site rules, and schedules. Guide with screenshots and templates.",
};

export default function YouTubeShortsPage() {
  const faqItems = [
    { question: "How do I disable YouTube Shorts?", answer: "Enable category filters, add YouTube to blocked list, set schedules, and lock commitment." },
    { question: "Block recommendations on Android?", answer: "Use site rules to block the Shorts feed while keeping regular YouTube videos accessible for research." },
    { question: "Stop Shorts on mobile?", answer: "Category filters target short‑form content specifically, including m.youtube.com Shorts." },
    { question: "Can I allow YouTube for research?", answer: "Yes, create exceptions for educational channels while blocking the addictive Shorts feed." },
  ];

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Block YouTube Shorts on Android (No Root)",
    totalTime: "PT3M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    tool: [{ "@type": "HowToTool", name: "Pure Detox app" }],
    supply: [{ "@type": "HowToSupply", name: "Android phone" }],
    step: [
      { "@type": "HowToStep", name: "Enable Category Filters", text: "Open Pure Detox and enable short‑form content category filters." },
      { "@type": "HowToStep", name: "Add YouTube to Blocked List", text: "Select YouTube app and m.youtube.com in site rules." },
      { "@type": "HowToStep", name: "Set Schedules", text: "Create focus windows when Shorts should be blocked." },
      { "@type": "HowToStep", name: "Lock Commitment", text: "Enable commitment mode to prevent mid‑session bypassing." },
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
      { "@type": "ListItem", position: 1, name: "Guides", item: "https://puredetox.app/guides" },
      { "@type": "ListItem", position: 2, name: "Block YouTube Shorts", item: "https://puredetox.app/guides/block-youtube-shorts-android" },
    ],
  };

  const snippetSteps = [
    "Enable category filters",
    "Add YouTube to blocked list",
    "Set schedules",
    "Lock commitment",
  ];

  return (
    <main className="container py-10 prose max-w-[760px]">
      <header className="not-prose mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Block YouTube Shorts on Android (No Root)</h1>
        <p className="opacity-80 mt-2">YouTube Shorts are optimized for instant hits of novelty. This guide walks you through disabling Shorts while keeping legitimate YouTube research accessible.</p>
        <div className="mt-4">
          <ClientCTAButton label="Get Blocking Templates" eventParams={{ cluster: "shorts", source: "guide-hero", route: "/guides/block-youtube-shorts-android" }} />
        </div>
      </header>

      <ol className="not-prose list-decimal list-inside p-4 rounded bg-black/5">
        {snippetSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <section className="mt-8">
        <h2>Problem Framing</h2>
        <p>
          YouTube Shorts exploit the same dopamine mechanisms as TikTok but are harder to block because they&apos;re embedded in a platform you may need for research or learning.
        </p>
      </section>

      <section className="mt-8">
        <h2>Category Filter Setup</h2>
        <p>Enable short‑form content filters that target Shorts specifically while preserving access to regular YouTube videos and educational content.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Category filter screenshot" />
      </section>

      <section className="mt-8">
        <h2>App/Site Rule Configuration</h2>
        <p>Configure rules for both the YouTube app and m.youtube.com to ensure comprehensive blocking across mobile browsers and the native app.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Site rules screenshot" />
      </section>

      <section className="mt-8">
        <h2>Schedule &amp; Exceptions</h2>
        <p>Set focus windows when Shorts should be blocked. Create exceptions for research sessions or educational channels when needed.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Schedule configuration screenshot" />
      </section>

      <section className="mt-8" id="faq">
        <h2>FAQ</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <footer className="not-prose mt-10">
        <ClientCTAButton label="Enable Category Filters" eventParams={{ cluster: "shorts", source: "guide-footer", route: "/guides/block-youtube-shorts-android" }} />
      </footer>

      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}
