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
      <main className="min-h-screen bg-gray-50">
        <div id="sticky-summary-sentinel" />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                💰 14-day money-back guarantee
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Choose Your <span className="text-blue-600">Digital Detox</span> Plan
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                7‑day rescue trial. Ethical commitment with emergency exits. No data sale. Minimal data by default.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">No root required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <PlanTable plans={plans} />
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Calculate Your Time Savings</h2>
              <p className="text-lg text-gray-600">See how much time and money you could save with Pure Detox</p>
            </div>
            <ROICalculator planPriceMonthly={8.99} />
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <ProofStrip />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">Everything you need to know about Pure Detox pricing</p>
              </div>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container px-4 sm:px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to reclaim your time?</h2>
              <p className="text-lg mb-8 opacity-90">
                Start your 7-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
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


