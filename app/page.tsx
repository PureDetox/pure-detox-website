import Script from "next/script";
import EmailSignup from "@/components/EmailSignup";
import AppPreview from "@/components/AppPreview";
import PressKit from "@/components/PressKit";
import PlayStoreButton from "@/components/PlayStoreButton";

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexusEdge",
    alternateName: "Pure Detox",
    url: "https://puredetox.app/",
    logo: "https://puredetox.app/logo.jpg",
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

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PureDetox - Block Apps & Sites",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Android",
    description: "PureDetox is an Android app blocker that helps you block distracting apps, websites, and social media. Features include focus sessions, screen time tracking, ADHD-friendly design, and digital wellbeing tools. No root access required.",
    url: "https://puredetox.app",
    softwareVersion: "1.0",
    releaseNotes: "Initial release with app blocking, website blocking, focus sessions, and screen time tracking.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
      bestRating: "5",
      worstRating: "1"
    },
    downloadUrl: "https://play.google.com/store/apps/details?id=com.nexusedge.puredetox",
    screenshot: [
      "https://puredetox.app/logo.jpg",
      "https://puredetox.app/1st-image.png",
      "https://puredetox.app/2nd-image.png"
    ],
    featureList: [
      "Block apps and websites",
      "Focus sessions",
      "Screen time tracking",
      "ADHD-friendly design",
      "No root access required",
      "Smart schedules",
      "Strict mode",
      "Analytics and progress tracking"
    ],
    permissions: "Accessibility services for secure content blocking"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does PureDetox require root access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, PureDetox does not require root access. The app uses Android's Accessibility services to block apps and websites securely."
        }
      },
      {
        "@type": "Question",
        name: "Can I block TikTok and YouTube Shorts with PureDetox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PureDetox can block TikTok, YouTube Shorts, and any other apps or websites you want to restrict. You can create custom blocking schedules for different activities."
        }
      },
      {
        "@type": "Question",
        name: "Is PureDetox free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PureDetox is available for free on the Google Play Store. The app offers core features including app blocking, website blocking, and focus sessions at no cost."
        }
      },
      {
        "@type": "Question",
        name: "How does PureDetox help with ADHD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PureDetox is designed with ADHD-friendly features including customizable focus sessions, break reminders, gentle transitions, and understanding of neurodivergent needs. It helps reduce distractions and improve focus."
        }
      },
      {
        "@type": "Question",
        name: "Can I track my screen time with PureDetox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PureDetox includes analytics and progress tracking features that help you monitor your digital usage, see improvements, and track your screen time reduction over time."
        }
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://puredetox.app/"
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use PureDetox to Block Apps and Websites on Android",
    description: "Learn how to use PureDetox app blocker to block distracting apps and websites on Android without root access.",
    step: [
      {
        "@type": "HowToStep",
        name: "Download PureDetox",
        text: "Download PureDetox from the Google Play Store on your Android device.",
        url: "https://play.google.com/store/apps/details?id=com.nexusedge.puredetox"
      },
      {
        "@type": "HowToStep",
        name: "Enable Accessibility Services",
        text: "Grant accessibility permissions to PureDetox so it can block apps and websites securely.",
        url: "https://puredetox.app/permissions"
      },
      {
        "@type": "HowToStep",
        name: "Select Apps to Block",
        text: "Choose which apps you want to block, such as TikTok, YouTube Shorts, or social media apps.",
        url: "https://puredetox.app/guides/block-tiktok-android-no-root"
      },
      {
        "@type": "HowToStep",
        name: "Create Focus Sessions",
        text: "Set up focus sessions with custom schedules to automatically block apps during specific times.",
        url: "https://puredetox.app/templates/workday-focus-schedule-android"
      },
      {
        "@type": "HowToStep",
        name: "Track Your Progress",
        text: "Monitor your screen time reduction and see how much time you've saved with PureDetox analytics."
      }
    ]
  };

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 md:py-16">
          <div className="container px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Status Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-xs font-medium mb-4 md:mb-6">
                ✨ Now Available on Google Play
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 px-2">
                Stop losing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+ hours/week</span> to digital distractions
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-5 md:mb-6 px-2">
                Block TikTok, YouTube Shorts, and distracting apps. Create focus sessions, track screen time—no root required.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-700">No root</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-700">ADHD-friendly</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-700">Ethical</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-700">Free</span>
                </div>
              </div>

              {/* Play Store Download Button - Prominent on Mobile */}
              <div className="mb-6 md:mb-8 flex justify-center px-4">
                <PlayStoreButton size="lg" className="w-full max-w-[280px] md:max-w-none" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto mb-6 md:mb-8 px-2">
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">32%</div>
                  <div className="text-xs text-gray-600 mt-1">Less screen time</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">2+ hrs</div>
                  <div className="text-xs text-gray-600 mt-1">Saved daily</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">60%</div>
                  <div className="text-xs text-gray-600 mt-1">Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview Video Section */}
        <section className="py-8 md:py-16 bg-gray-50" aria-labelledby="preview-heading">
          <div className="container px-4">
            <AppPreview />
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-8 md:py-16 bg-white" aria-labelledby="features-heading">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-10">
              <h2 id="features-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2">Why Pure Detox Will Change Your Life</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">The most comprehensive digital detox solution for modern challenges</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Smart App Blocking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Block TikTok, YouTube Shorts, and distracting apps while keeping productivity tools accessible.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-lg mb-2">ADHD-Friendly Focus</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Customizable focus sessions with break reminders and gentle transitions for neurodivergent needs.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Professional Templates</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Pre-configured schedules for work, study, and focus sessions. <a href="/templates/workday-focus-schedule-android" className="text-blue-600 hover:underline text-xs">Try templates</a>.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Compassionate Recovery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">No shame, no punishment. Grace periods help you build sustainable habits.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Progress Insights</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Track your digital wellbeing with meaningful metrics that celebrate progress.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Your data stays on your device. No tracking, no data collection, complete transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <PressKit />

        {/* FAQ Section */}
        <section className="py-8 md:py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">Everything you need to know about PureDetox</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
              <article className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Does PureDetox require root access?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No, PureDetox does not require root access. The app uses Android's Accessibility services to block apps and websites securely.
                </p>
              </article>
              
              <article className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I block TikTok and YouTube Shorts?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, PureDetox can block TikTok, YouTube Shorts, and any other apps or websites. Create custom blocking schedules for different activities. <a href="/guides/block-tiktok-android-no-root" className="text-blue-600 hover:underline font-medium">Learn more</a>.
                </p>
              </article>
              
              <article className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Is PureDetox free to use?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, PureDetox is free on Google Play Store with core features including app blocking, website blocking, and focus sessions.
                </p>
              </article>
              
              <article className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">How does PureDetox help with ADHD?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  PureDetox includes ADHD-friendly features like customizable focus sessions, break reminders, and gentle transitions. <a href="/solutions/study-mode-android-adhd" className="text-blue-600 hover:underline font-medium">Learn more</a>.
                </p>
              </article>
              
              <article className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I track my screen time?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, PureDetox includes analytics and progress tracking to monitor your digital usage and screen time reduction over time.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container text-center px-4">
            <div className="max-w-2xl mx-auto space-y-5 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold px-2">Start Your Digital Detox Journey Today</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed px-2">
                Join thousands of users who have taken control of their screen time with PureDetox.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 max-w-sm mx-auto">
                <div className="text-lg md:text-xl font-bold mb-1">Available Now</div>
                <div className="text-xs md:text-sm text-white/80">Download from Google Play Store</div>
              </div>
              <div className="flex justify-center px-4">
                <PlayStoreButton size="lg" className="w-full max-w-[280px] md:max-w-none" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Script id="jsonld-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </>
  );
}



