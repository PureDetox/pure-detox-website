import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import ProofStrip from "@/components/ProofStrip";
import StickyCTA from "@/components/StickyCTA";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  const faqItems = [
    { question: "Does it work without root?", answer: "Yes. Pure Detox blocks apps and sites on Android without root using permissions you control." },
    { question: "Can I whitelist research apps?", answer: "Yes. Keep tools like Docs or Chrome whitelisted while blocking short‑form traps." },
    { question: "What if I break my streak?", answer: "We use compassionate recovery: regain streaks with a grace window and clear progress." },
    { question: "Can I bypass the blocks?", answer: "Bypass attempts are discouraged with clear friction and policy; emergency exits are always available." },
  ];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexusEdge",
    alternateName: "Pure Detox",
    url: "https://puredetox.app/",
    logo: "https://puredetox.app/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "ridwan@puredetox.app",
      contactType: "customer service"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "711114",
      addressCountry: "IN"
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
    ],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pure Detox",
    url: "https://puredetox.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://puredetox.app/search?q={query}",
      "query-input": "required name=query",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ 
      "@type": "Question", 
      name: f.question, 
      acceptedAnswer: { "@type": "Answer", text: f.answer } 
    })),
  };

  return (
    <>
      <main className="container py-10">
        <div id="sticky-sentinel" />
        <section className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-semibold">Stop losing 10–15 hours/week to short‑form loops — Pure Detox for Android</h1>
            <p className="text-balance text-lg opacity-80">Block TikTok/Shorts, lock study sessions, and schedule deep work—without root. Ethical commitment with compassionate recovery.</p>
            <div className="flex gap-3">
              <ClientCTAButton label="Start 7‑day rescue" eventParams={{ variant: "loss", source: "hero", route: "/" }} />
              <ClientCTAButton label="See pricing" variant="secondary" eventParams={{ variant: "identity", source: "hero-secondary", route: "/" }} href="/pricing" />
            </div>
            <p className="text-sm opacity-70">Users reclaim a median of 11.4h/week</p>
          </div>
          <div className="hero-skeleton aspect-[16/10] bg-black/5 rounded-xl" aria-hidden />
        </section>

        <ProofStrip />

        <section aria-label="How it works" className="py-10">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-8 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Pick your focus goal</h3>
                <p className="opacity-80">Study, Work, or Night Hygiene—start in seconds.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Block dopamine traps</h3>
                <p className="opacity-80">Target TikTok/Shorts without root; keep research tools.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Commit your schedule</h3>
                <p className="opacity-80">Keep your streak with compassionate recovery.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Solutions" className="py-10">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/guides/block-tiktok-android-no-root" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">Block TikTok/Shorts</a>
            <a href="/solutions/study-mode-android-adhd" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">Study Mode (ADHD)</a>
            <a href="/templates/workday-focus-schedule-android" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">Workday Focus</a>
            <a href="/pillar/reduce-screen-time-android" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">Reduce Screen Time</a>
            <a href="/guides/block-youtube-shorts-android" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">Block YouTube Shorts</a>
            <a href="/guides" className="p-4 rounded-lg bg-black/5 hover:bg-black/10">All Guides</a>
          </div>
        </section>

        <section id="faq" aria-label="FAQ" className="py-10">
          <div className="container grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl font-semibold">Questions, answered</h2>
              <p className="opacity-80 text-sm">No dark patterns—commitment is transparent and optional; emergency exit always available.</p>
            </div>
            <FAQAccordion items={faqItems} />
        </div>
        </section>
      </main>

      <StickyCTA />

      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}


