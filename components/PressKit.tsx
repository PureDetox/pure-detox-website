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
      alt: "Pure Detox Screenshot 1",
      title: "Main Dashboard"
    },
    {
      src: "/2nd-image.png", 
      alt: "Pure Detox Screenshot 2",
      title: "Smart Controls"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-3">
            📱 Press Kit
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Meet Pure Detox
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
              The most effective digital detox solution for Android. Combines smart app blocking with compassionate design to help you build sustainable digital habits.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Built for students, professionals, and anyone struggling with digital overwhelm. Features ADHD-friendly focus sessions and professional productivity templates.
            </p>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-gray-50 to-white">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto max-w-full"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-sm font-semibold text-gray-900">{screenshot.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">✓</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Assets */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Assets</h3>
          <p className="text-sm text-gray-600 mb-4">High-resolution screenshots and app preview video available</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:ridwan@puredetox.app?subject=Press%20Kit%20Request" 
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📧 Request Press Kit
            </a>
            <a 
              href="mailto:ridwan@puredetox.app?subject=Media%20Inquiry" 
              className="inline-flex items-center px-5 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors text-sm"
            >
              📰 Media Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
