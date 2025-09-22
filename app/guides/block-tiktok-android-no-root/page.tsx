import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Block TikTok on Android (No Root) in 5 Minutes | Pure Detox",
  description:
    "Block TikTok and short-form loops on Android—without root. Step-by-step guide, screenshots, and blocking templates.",
  alternates: { canonical: "/guides/block-tiktok-android-no-root" },
};

export default function TikTokGuide() {
  const faqItems = [
    { question: "How do I block TikTok on Android?", answer: "Install Pure Detox, enable App Blocking permissions, add TikTok to blocked list, set schedules, and optionally lock commitment." },
    { question: "Can I block TikTok without root?", answer: "Yes. Pure Detox uses Android permissions—no root required." },
    { question: "How to stop bypassing my blocks?", answer: "Use clear friction on early exit and Family Mode when needed; emergency exits remain available ethically." },
    { question: "Can I whitelist apps for research?", answer: "Yes, keep research tools available while blocking short-form dopamine loops." },
  ];

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Block TikTok on Android (No Root)",
    totalTime: "PT5M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    tool: [{ "@type": "HowToTool", name: "Pure Detox app" }],
    supply: [{ "@type": "HowToSupply", name: "Android phone" }],
    step: [
      { "@type": "HowToStep", name: "Install Pure Detox", text: "Install from Play Store and open." },
      { "@type": "HowToStep", name: "Enable App & Site Blocking", text: "Grant accessibility and necessary permissions." },
      { "@type": "HowToStep", name: "Add TikTok/Shorts to Categories", text: "Choose short-form categories and add TikTok." },
      { "@type": "HowToStep", name: "Set Schedules", text: "Create focus windows (study, work, night)." },
      { "@type": "HowToStep", name: "Lock Commitment (Optional)", text: "Enable lock to prevent mid-session exits; emergency exits remain available." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I block TikTok on Android?", acceptedAnswer: { "@type": "Answer", text: faqItems[0].answer } },
      { "@type": "Question", name: "Can I block TikTok without root?", acceptedAnswer: { "@type": "Answer", text: faqItems[1].answer } },
      { "@type": "Question", name: "How to stop bypassing my blocks?", acceptedAnswer: { "@type": "Answer", text: faqItems[2].answer } },
      { "@type": "Question", name: "Can I whitelist apps for research?", acceptedAnswer: { "@type": "Answer", text: faqItems[3].answer } },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Guides", item: "https://puredetox.app/guides" },
      { "@type": "ListItem", position: 2, name: "Block TikTok", item: "https://puredetox.app/guides/block-tiktok-android-no-root" },
    ],
  };

  const snippetSteps = [
    "Install Pure Detox",
    "Enable App Blocking",
    "Add TikTok",
    "Schedule",
    "Lock commitment",
  ];

  return (
    <main className="container py-10 prose max-w-[760px]">
      <header className="not-prose mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Block TikTok on Android (No Root): The Cleanest Way in 5 Minutes</h1>
        <p className="opacity-80 mt-2">If you’re serious about reclaiming focus, blocking TikTok at the device level—without root—is the cleanest path. Follow the steps and finish in five minutes.</p>
        <div className="mt-4">
          <ClientCTAButton label="Start 7‑day rescue" eventParams={{ cluster: "tiktok", source: "guide-hero", route: "/guides/block-tiktok-android-no-root" }} />
        </div>
      </header>

      <ol className="not-prose list-decimal list-inside p-4 rounded bg-black/5">
        {snippetSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <section className="mt-8">
        <h2>What You’ll Achieve (and Why Short‑Form Hooks Your Brain)</h2>
        <p>
          Short‑form feeds exploit novelty and variable reward. Pure Detox pairs enforcement with ethical commitment so you can rebuild attention without relying on willpower alone.
        </p>
      </section>

      <section className="mt-8">
        <h2>Step‑by‑Step (Screenshots)</h2>
        <h3 id="install">Install Pure Detox</h3>
        <p>Install from Google Play and open the app.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Install screenshot" />
        <h3 id="blocking">Enable App &amp; Site Blocking</h3>
        <p>Grant accessibility and other required permissions to enable blocking.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Permissions screenshot" />
        <h3 id="categories">Add TikTok/Shorts to Categories + Schedules</h3>
        <p>Select short‑form category filters and add TikTok; create a schedule for study or work hours.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Category/schedule screenshot" />
        <h3 id="lock">Lock‑in Commitment (Optional)</h3>
        <p>Enable lock to prevent mid‑session exits. Emergency exit remains available and visible.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Commitment screenshot" />
      </section>

      <section className="mt-8">
        <h2>Troubleshooting (Bypass Attempts, Family Mode)</h2>
        <p>Turn on Family Mode to discourage bypass attempts. Keep emergency exits clear and documented. For research, use whitelists.</p>
      </section>

      <section className="mt-8" id="faq">
        <h2>FAQ</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <footer className="not-prose mt-10">
        <ClientCTAButton label="Start 7‑day rescue" eventParams={{ cluster: "tiktok", source: "guide-footer", route: "/guides/block-tiktok-android-no-root" }} />
      </footer>

      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}


