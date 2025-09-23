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
      <main className="overflow-hidden">
        <div id="sticky-sentinel" />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    🚀 Trusted by 50,000+ users worldwide
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Stop losing <span className="text-blue-600">10–15 hours/week</span> to short‑form loops
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Block TikTok/Shorts, lock study sessions, and schedule deep work—without root. Ethical commitment with compassionate recovery.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ClientCTAButton 
                    label="Start 7‑day rescue" 
                    eventParams={{ variant: "loss", source: "hero", route: "/" }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  />
                  <ClientCTAButton 
                    label="See pricing" 
                    variant="secondary" 
                    eventParams={{ variant: "identity", source: "hero-secondary", route: "/" }} 
                    href="/pricing"
                    className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                  />
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-600">Users reclaim a median of <strong>11.4h/week</strong></span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hero-skeleton aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto flex items-center justify-center">
                      <span className="text-2xl text-white">📱</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-gray-800">Pure Detox</div>
                      <div className="text-sm text-gray-600">Android Digital Detox</div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProofStrip />

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Pure Detox Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three simple steps to reclaim your focus and productivity</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pick your focus goal</h3>
                <p className="text-gray-600 leading-relaxed">Study, Work, or Night Hygiene—start in seconds with pre-configured blocking templates.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Block dopamine traps</h3>
                <p className="text-gray-600 leading-relaxed">Target TikTok/Shorts without root permissions; keep research tools whitelisted.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Commit your schedule</h3>
                <p className="text-gray-600 leading-relaxed">Keep your streak with compassionate recovery and transparent commitment features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Digital Detox Path</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Specialized solutions for different focus needs and lifestyles</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/guides/block-tiktok-android-no-root" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">🚫</span>
                  </div>
                  <h3 className="font-semibold text-lg">Block TikTok/Shorts</h3>
                </div>
                <p className="text-gray-600 text-sm">Stop infinite scroll addiction with smart blocking that preserves productivity apps.</p>
              </a>
              
              <a href="/solutions/study-mode-android-adhd" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">📚</span>
                  </div>
                  <h3 className="font-semibold text-lg">Study Mode (ADHD)</h3>
                </div>
                <p className="text-gray-600 text-sm">ADHD-friendly focus sessions with customizable blocking and break schedules.</p>
              </a>
              
              <a href="/templates/workday-focus-schedule-android" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">💼</span>
                  </div>
                  <h3 className="font-semibold text-lg">Workday Focus</h3>
                </div>
                <p className="text-gray-600 text-sm">Professional productivity templates for deep work and meeting-free time.</p>
              </a>
              
              <a href="/pillar/reduce-screen-time-android" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">⏰</span>
                  </div>
                  <h3 className="font-semibold text-lg">Reduce Screen Time</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive strategies to minimize device dependency and digital overwhelm.</p>
              </a>
              
              <a href="/guides/block-youtube-shorts-android" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">📺</span>
                  </div>
                  <h3 className="font-semibold text-lg">Block YouTube Shorts</h3>
                </div>
                <p className="text-gray-600 text-sm">Target YouTube&apos;s addictive short-form content while keeping educational videos.</p>
              </a>
              
              <a href="/compare/freedom-vs-focusme-vs-pure-detox-android" className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">📋</span>
                  </div>
                  <h3 className="font-semibold text-lg">Compare Solutions</h3>
                </div>
                <p className="text-gray-600 text-sm">See how Pure Detox compares to other blocking apps and find your best fit.</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Questions, answered</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  No dark patterns—commitment is transparent and optional; emergency exit always available.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">No root access required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Ethical design principles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Compassionate recovery system</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to reclaim your time?</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Join thousands of users who have already broken free from digital addiction and regained control of their focus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ClientCTAButton 
                  label="Start your 7-day rescue" 
                  eventParams={{ variant: "bottom-cta", source: "cta-section", route: "/" }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                />
                <ClientCTAButton 
                  label="View pricing plans" 
                  variant="secondary" 
                  eventParams={{ variant: "pricing", source: "cta-section", route: "/" }} 
                  href="/pricing"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                />
              </div>
            </div>
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


