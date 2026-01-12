import Script from "next/script";
import PlayStoreButton from "@/components/PlayStoreButton"; // Keeping this for the final action

export default function Home() {
  // --- KEEPING YOUR ORIGINAL JSON-LD FOR SEO ---
  // Even with a minimal design, these help Google understand the product.
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexusEdge",
    url: "https://puredetox.app/",
    logo: "https://puredetox.app/logo.jpg",
    contactPoint: { "@type": "ContactPoint", email: "ridwan@puredetox.app", contactType: "customer service" }
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PureDetox - Block Apps & Sites",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Android",
    description: "PureDetox is an Android app blocker that helps you block distracting apps.",
    url: "https://puredetox.app",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    downloadUrl: "https://play.google.com/store/apps/details?id=com.nexusedge.puredetox",
  };
  // ---------------------------------------------

  return (
    <>
      <main className="min-h-screen px-6 pt-32 pb-20">
        <article className="max-w-[650px] mx-auto space-y-24 md:space-y-32">
          
          {/* 1. Opening Section (Safety First) */}
          <section>
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
              There is nothing you need to do right now.
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-700">
              You do not need to sign up for anything. You do not need to optimize yourself. 
              You do not need to be more productive than you are at this exact moment.
            </p>
            <p className="text-lg md:text-xl font-light text-gray-700 mt-6">
              You can simply be here.
            </p>
          </section>

          {/* 2. Naming the Experience */}
          <section>
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-gray-400 mb-6">The Context</h2>
            <p className="mb-6">
              It is often loud inside the screen.
            </p>
            <p className="mb-6">
              The feeling is familiar: the twitch to open a new tab, the infinite scroll that eats twenty minutes 
              when you only intended to spend two, and the slight heaviness in your chest when you realize the 
              day is gone but you aren't sure where it went.
            </p>
            <p>
              It feels like a fragmented mind. It is tiring to constantly filter out the noise.
            </p>
          </section>

          {/* 3. Reframing Responsibility */}
          <section className="pl-6 border-l-2 border-gray-200">
            <p className="italic text-gray-600">
              This fragmentation is not a personal failure.
            </p>
            <p className="mt-4 text-gray-600">
              Our digital environments are engineered to be magnetic. They are built to extract attention. 
              It is difficult to maintain stillness in a place designed to keep you moving.
            </p>
          </section>

          {/* 4. Introducing the Tool */}
          <section>
             <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-gray-400 mb-6">The Utility</h2>
            <p>
              There is a small utility here called <strong>Pure Detox</strong>.
            </p>
            <p className="mt-6">
              It is not a life-changing transformation. It will not fix the internet, and it cannot 
              solve the root causes of distraction. It is simply a digital boundary.
            </p>
          </section>

          {/* 5. What the Tool Does */}
          <section>
            <p className="mb-6">It performs three specific functions:</p>
            <ul className="space-y-4 list-disc pl-5 text-gray-800">
              <li>It creates a delay before opening specific apps.</li>
              <li>It greyscales the screen during hours you select.</li>
              <li>It blocks notifications until you manually request them.</li>
            </ul>
            <p className="mt-8 text-gray-600 text-sm">
              There are no gamification elements, no streaks to maintain, and no rewards for using it.
            </p>
          </section>

          {/* 6. Who It’s For / Not For */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans font-medium text-gray-900 mb-3">For you if...</h3>
              <p className="text-sm text-gray-600">
                You are looking for a quiet aid to support your own intention. You prefer tools that stay out of the way.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-medium text-gray-900 mb-3">Not for you if...</h3>
              <p className="text-sm text-gray-600">
                You are looking for a system to force you to work. You want to track metrics or optimize your performance output.
              </p>
            </div>
          </section>

          {/* 7. Why This Exists */}
          <section>
            <p>
              This tool was written because the noise became too much. It was built not to maximize engagement, 
              but to protect a little bit of silence. It is maintained by a human, not an algorithm.
            </p>
          </section>

          {/* 8. Choice Section */}
          <section className="pt-12 border-t border-gray-100 flex flex-col items-center text-center">
            <p className="mb-8">
              If this sounds helpful, the installer is available below.<br />
              If you prefer not to use it, that is perfectly fine.
            </p>
            
            <div className="opacity-90 hover:opacity-100 transition-opacity">
               {/* We wrap your existing button but keep it isolated */}
               <PlayStoreButton size="lg" />
            </div>
          </section>

          {/* 9. Closing Line */}
          <section className="text-center pb-24">
            <p className="text-gray-400 text-sm italic">Take your time.</p>
          </section>

        </article>
      </main>

      {/* JSON-LD Scripts preserved for SEO */}
      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
    </>
  );
}
