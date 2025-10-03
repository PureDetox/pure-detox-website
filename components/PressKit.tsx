export default function PressKit() {
  const appFeatures = [
    "Block TikTok, YouTube Shorts, and other addictive apps without root access",
    "Smart focus sessions with ADHD-friendly templates and customizable breaks",
    "Ethical commitment system with compassionate recovery and transparent policies",
    "Professional productivity modes for deep work and distraction-free sessions",
    "Comprehensive screen time control strategies to minimize device dependency"
  ];

  const screenshots = [
    {
      src: "/1st-image.png",
      alt: "Pure Detox Main Dashboard - Focus Sessions and App Blocking",
      title: "Main Dashboard"
    },
    {
      src: "/2nd-image.png", 
      alt: "Pure Detox Settings - Customizable Blocking and Whitelist Options",
      title: "Smart Controls"
    },
    {
      src: "/logo.jpg",
      alt: "Pure Detox App Icon - Digital Detox for Android",
      title: "App Icon"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            📱 Press Kit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Pure Detox
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Pure Detox is the most effective digital detox solution for Android users who want to break free from short-form content addiction and reclaim their focus. Unlike other blocking apps, Pure Detox combines smart app blocking with compassionate design principles, helping users build sustainable digital habits without feeling restricted or punished.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Built specifically for students, professionals, and anyone struggling with digital overwhelm, Pure Detox offers ADHD-friendly focus sessions, professional productivity templates, and a transparent commitment system that respects user autonomy while providing effective guardrails against distraction.
            </p>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[9/16] group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{screenshot.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Assets */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Press Assets</h3>
          <p className="text-gray-600 mb-6">High-resolution screenshots and app preview video available for press coverage</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ridwan@puredetox.app?subject=Press%20Kit%20Request" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              📧 Request Press Kit
            </a>
            <a 
              href="mailto:ridwan@puredetox.app?subject=Media%20Inquiry" 
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors duration-200"
            >
              📰 Media Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
