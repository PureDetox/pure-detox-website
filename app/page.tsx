import Script from "next/script";
import AppPreview from "@/components/AppPreview";
import PressKit from "@/components/PressKit";
import PlayStoreButton from "@/components/PlayStoreButton";
import Link from "next/link";

export default function Home() {
  // --- SEO JSON-LD Data (Preserved) ---
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
      <main className="overflow-hidden bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-50/80 via-purple-50/40 to-white/0 rounded-full blur-3xl -z-10 opacity-70" />

          <div className="container px-4 mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              
              {/* Professional Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">New Release v1.0</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] animate-fade-in delay-100">
                Reclaim your attention from{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  digital noise.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-200">
                The professional-grade app blocker for Android. Stop doom-scrolling on TikTok and Shorts with strict schedules, no-root blocking, and ADHD-friendly focus modes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in delay-300">
                <PlayStoreButton size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 hover:-translate-y-0.5 transition-all duration-300" />
                <Link 
                  href="/how-it-works" 
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  See how it works →
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-500 animate-fade-in delay-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No Root Required
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ADHD Friendly
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Private & Secure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="border-y border-gray-100 bg-gray-50/50 py-12">
          <div className="container px-4 mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-200">
                <StatItem value="32%" label="Less Screen Time" />
                <StatItem value="2h+" label="Saved Daily" />
                <StatItem value="4.8/5" label="User Rating" />
                <StatItem value="500" label="Distractions Blocked" />
             </div>
          </div>
        </section>

        {/* --- APP PREVIEW --- */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <AppPreview />
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Engineered for deep focus</h2>
              <p className="text-lg text-gray-600">Comprehensive tools designed to help you build a healthier relationship with technology, not just block it.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon="🎯" 
                title="Precision Blocking" 
                desc="Block specific apps (TikTok, Shorts) or entire categories. Keep essential productivity apps available while silencing the noise."
              />
              <FeatureCard 
                icon="🧠" 
                title="Neurodivergent Design" 
                desc="Built with ADHD brains in mind. Gentle transitions, visual countdowns, and 'Strict Mode' to prevent impulse bypassing."
              />
              <FeatureCard 
                icon="⚡️" 
                title="Instant Focus" 
                desc="One-tap 'Deep Work' sessions. Start a 25-minute Pomodoro timer that automatically silences your phone."
              />
              <FeatureCard 
                icon="🛡️" 
                title="Privacy First" 
                desc="Your data never leaves your device. We monetize through optional premium features, not by selling your personal data."
              />
              <FeatureCard 
                icon="📊" 
                title="Insightful Analytics" 
                desc="Visualize your progress with beautiful charts. See exactly how much life you've reclaimed this week versus last."
              />
              <FeatureCard 
                icon="🤝" 
                title="Accountability" 
                desc="Prevent uninstalling during active sessions. Add friction to ensure you stick to your goals when willpower fades."
              />
            </div>
          </div>
        </section>

        {/* --- PRESS & SOCIAL PROOF --- */}
        <PressKit />

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Everything you need to know about getting started.</p>
            </div>
            
            <div className="space-y-4">
              <FAQItem 
                question="Does PureDetox require root access?" 
                answer="No. PureDetox uses standard Android Accessibility Services to detect and block distractions securely. We do not require root access, ensuring your device's warranty and security remain intact."
              />
              <FAQItem 
                question="Can I block TikTok and YouTube Shorts?" 
                answer="Yes. You can block specific apps like TikTok, or use our specialized 'Shorts Blocker' to prevent doom-scrolling on YouTube while keeping the main video functionality accessible for learning."
              />
              <FAQItem 
                question="Is the app free?" 
                answer="PureDetox offers a generous free tier that includes core app blocking, website blocking, and focus sessions. We offer a Premium tier for advanced scheduling and unlimited stats."
              />
              <FAQItem 
                question="How does the 'Strict Mode' work?" 
                answer="Strict Mode prevents you from changing settings or uninstalling the app during an active focus session. It's designed for moments when your willpower is low."
              />
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 relative overflow-hidden bg-slate-900">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          <div className="container px-4 mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to reclaim your time?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join thousands of users who are building healthier digital habits today.</p>
            <div className="flex justify-center">
              <PlayStoreButton size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-transparent shadow-2xl shadow-blue-900/50" />
            </div>
            <p className="mt-8 text-sm text-slate-500">
              No credit card required • Cancel anytime • 4.8/5 Star Rating
            </p>
          </div>
        </section>

      </main>

      {/* Script Injections */}
      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Script id="jsonld-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </>
  );
}

// --- SUBCOMPONENTS ---

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center px-2 py-4">
      <div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-1">{value}</div>
      <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
      <h3 className="font-bold text-gray-900 mb-2 text-lg">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  );
}

