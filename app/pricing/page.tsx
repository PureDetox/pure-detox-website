import Script from "next/script";
import PlanTable, { Plan } from "@/components/PlanTable";
import ROICalculator from "@/components/ROICalculator";
import ProofStrip from "@/components/ProofStrip";
import FAQAccordion from "@/components/FAQAccordion";
import StickySummary from "@/components/StickySummary";

export const metadata = {
  title: "Pricing — Pure Detox (Android)",
  description: "Choose a plan. 7‑day rescue trial, ethical commitment, privacy first. Android‑first focus app.",
};

export default function PricingPage() {
  const plans: Plan[] = [
    { id: "basic", name: "Basic", monthly: 9.99, annual: 7.99, features: ["Blocks + schedules", "Community support" ] },
    { id: "focus", name: "Focus (Best Value)", monthly: 12.99, annual: 8.99, features: ["Study Mode presets", "Category filters", "Streak protection"], isBestValue: true },
    { id: "pro", name: "Pro", monthly: 19.99, annual: 14.99, features: ["Teams", "Admin policy push", "Priority support"] },
  ];

  const faqs = [
    { question: "Do you offer a money‑back guarantee?", answer: "Yes. 14‑day money‑back—no questions asked." },
    { question: "Which Android versions are supported?", answer: "Recent Android versions with accessibility and device permissions—most devices are supported." },
    { question: "Can users bypass the blocks?", answer: "Bypass attempts are discouraged with friction; commitment features require explicit consent; emergency exit is always visible." },
    { question: "How do you handle my data?", answer: "No data sale. Minimal data by default. Contact ridwan@puredetox.app or see our <a href='/privacy' class='text-blue-600 hover:underline'>privacy policy</a> for details." },
  ];

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pure Detox — Android Focus & Digital Detox",
    operatingSystem: "Android",
    applicationCategory: "ProductivityApplication",
    description: "Block TikTok/Shorts, lock study sessions, and schedule deep work on Android.",
    offers: {
      "@type": "Offer",
      price: 8.99,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://puredetox.app/pricing",
      priceValidUntil: "2026-12-31",
    },
    // Note: AggregateRating removed per Section 7.6 - only show if reviews are visible on page
    applicationSubCategory: "App blocker, Focus timer",
    url: "https://puredetox.app/",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pricing", item: "https://puredetox.app/pricing" },
    ],
  };

  return (
    <>
      <main className="container py-10">
        <div id="sticky-summary-sentinel" />
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Pricing</h1>
          <p className="opacity-80">7‑day rescue trial. Ethical commitment with emergency exits. No data sale. Minimal data by default.</p>
        </header>

        <PlanTable plans={plans} />
        <ROICalculator planPriceMonthly={8.99} />
        <ProofStrip />

        <section aria-label="FAQ" className="py-8">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </main>

      <StickySummary selected={null} />

      <Script id="jsonld-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}


