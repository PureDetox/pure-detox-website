import Script from "next/script";
import EmailSignup from "@/components/EmailSignup";
import AppPreview from "@/components/AppPreview";
import PressKit from "@/components/PressKit";

export default function ComingSoonHome() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexusEdge",
    alternateName: "Pure Detox",
    url: "https://puredetox.app/",
    logo: "https://puredetox.app/logo.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@puredetox.app",
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

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero Section - Coming Soon */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 min-h-screen flex items-center">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-5xl mx-auto">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-pulse">
                🚀 Coming Soon to Android
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Stop losing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+ hours/week</span> to digital distractions
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                Pure Detox is the most effective digital detox app for Android. Block TikTok/Shorts, create focus sessions, and reclaim your time—without root access.
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

              {/* Email Signup */}
              <div className="mb-16">
                <EmailSignup />
              </div>

              {/* Launch Timeline */}
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-16">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Launch Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Beta Testing Complete</div>
                      <div className="text-sm text-gray-600">Over 500 users tested core features</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-blue-600 text-sm">⏳</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Final Polish & Google Play Review</div>
                      <div className="text-sm text-gray-600">Expected launch: January 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">🚀</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Public Launch</div>
                      <div className="text-sm text-gray-600">Available on Google Play Store</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Trusted by beta testers worldwide</p>
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
        <section className="py-20 bg-gray-50">
          <div className="container">
            <AppPreview />
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Pure Detox Will Change Your Life</h2>
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
                <p className="text-gray-600 leading-relaxed">Pre-configured blocking schedules for work, study, and deep focus sessions that respect your workflow.</p>
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Be Among the First</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Join our exclusive early access list and get Pure Detox the moment it launches on Google Play Store.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-white/80">Beta testers already transformed their digital habits</div>
              </div>
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>

      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}


