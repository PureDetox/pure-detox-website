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
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 min-h-screen flex items-center">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-5xl mx-auto">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium mb-8">
                ✨ Now Available on Google Play
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Stop losing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+ hours/week</span> to digital distractions
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                Pure Detox is the most effective digital detox app for Android. Block TikTok, YouTube Shorts, and distracting apps. Create focus sessions, track screen time, and reclaim your time—without root access.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">No root required</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">ADHD-friendly</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Ethical design</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Compassionate recovery</span>
                </div>
              </div>

              {/* Play Store Download Button */}
              <div className="mb-12 flex justify-center">
                <PlayStoreButton size="lg" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">32%</div>
                  <div className="text-sm text-gray-600">Less screen time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">2+ hrs</div>
                  <div className="text-sm text-gray-600">Saved daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-sm text-gray-600">User satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Reduction in strict mode</div>
                </div>
              </div>

              {/* App Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-16">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose PureDetox?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Smart Shield</div>
                      <div className="text-sm text-gray-600">Block apps, websites, and keywords with ease</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Session Profiles</div>
                      <div className="text-sm text-gray-600">Custom blocking schedules for different activities</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Focus Sessions</div>
                      <div className="text-sm text-gray-600">Timed productivity sessions to boost your focus</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Analytics & Progress</div>
                      <div className="text-sm text-gray-600">Track your digital usage and see your improvements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Trusted by users worldwide</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-sm text-gray-500">🇮🇳 India</div>
                  <div className="text-sm text-gray-500">🇺🇸 USA</div>
                  <div className="text-sm text-gray-500">🇬🇧 UK</div>
                  <div className="text-sm text-gray-500">🇨🇦 Canada</div>
                  <div className="text-sm text-gray-500">🇦🇺 Australia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview Video Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="preview-heading">
          <div className="container">
            <AppPreview />
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-white" aria-labelledby="features-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">Why Pure Detox Will Change Your Life</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">The most comprehensive digital detox solution built specifically for modern challenges</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Smart App Blocking</h3>
                <p className="text-gray-600 leading-relaxed">Target TikTok, YouTube Shorts, and other dopamine traps while keeping productivity apps accessible. No root required.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="font-bold text-xl mb-4">ADHD-Friendly Focus</h3>
                <p className="text-gray-600 leading-relaxed">Customizable focus sessions with break reminders, gentle transitions, and understanding of neurodivergent needs.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Professional Templates</h3>
                <p className="text-gray-600 leading-relaxed">Pre-configured blocking schedules for work, study, and deep focus sessions that respect your workflow. <a href="/templates/workday-focus-schedule-android" className="text-blue-600 hover:underline">Try workday focus schedule</a>.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Compassionate Recovery</h3>
                <p className="text-gray-600 leading-relaxed">No shame, no punishment. Grace periods and transparent policies help you build sustainable habits.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Progress Insights</h3>
                <p className="text-gray-600 leading-relaxed">Track your digital wellbeing journey with meaningful metrics that celebrate progress, not perfection.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Privacy First</h3>
                <p className="text-gray-600 leading-relaxed">Your data stays on your device. No tracking, no data collection, no dark patterns. Complete transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <PressKit />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about PureDetox</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <article className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Does PureDetox require root access?</h3>
                <p className="text-gray-600 leading-relaxed">
                  No, PureDetox does not require root access. The app uses Android's Accessibility services to block apps and websites securely, making it accessible to all Android users without needing to root their device.
                </p>
              </article>
              
              <article className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I block TikTok and YouTube Shorts with PureDetox?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, PureDetox can block TikTok, YouTube Shorts, and any other apps or websites you want to restrict. You can create custom blocking schedules for different activities like work, study, or focus sessions. <a href="/guides/block-tiktok-android-no-root" className="text-blue-600 hover:underline">Learn how to block TikTok</a> or <a href="/guides/block-youtube-shorts-android" className="text-blue-600 hover:underline">block YouTube Shorts</a>.
                </p>
              </article>
              
              <article className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is PureDetox free to use?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, PureDetox is available for free on the Google Play Store. The app offers core features including app blocking, website blocking, and focus sessions at no cost.
                </p>
              </article>
              
              <article className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How does PureDetox help with ADHD?</h3>
                <p className="text-gray-600 leading-relaxed">
                  PureDetox is designed with ADHD-friendly features including customizable focus sessions, break reminders, gentle transitions, and understanding of neurodivergent needs. It helps reduce distractions and improve focus without being punitive. <a href="/solutions/study-mode-android-adhd" className="text-blue-600 hover:underline">Learn about ADHD-friendly study mode</a>.
                </p>
              </article>
              
              <article className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I track my screen time with PureDetox?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, PureDetox includes analytics and progress tracking features that help you monitor your digital usage, see improvements, and track your screen time reduction over time. The app provides meaningful metrics that celebrate progress.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Start Your Digital Detox Journey Today</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Join thousands of users who have taken control of their screen time and boosted their productivity with PureDetox.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-2xl font-bold mb-2">Available Now</div>
                <div className="text-white/80">Download from Google Play Store</div>
              </div>
              <div className="flex justify-center">
                <PlayStoreButton size="lg" />
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


