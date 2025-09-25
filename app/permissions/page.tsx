import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Why We Ask for Permissions - Pure Detox",
  description: "Transparent explanation of every permission Pure Detox requests and why it's needed for digital detox features.",
  robots: "index, follow",
};

export default function PermissionsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
      { "@type": "ListItem", position: 2, name: "Permissions", item: "https://puredetox.app/permissions" },
    ],
  };

  const permissions = [
    {
      icon: "🛡️",
      title: "Device Administrator (Uninstall Protection)",
      why: "This permission allows PureDetox to provide temporary uninstall protection for the period you select. It prevents quick removal of the app during a focus session, helping you stay committed to your goals.",
      what: "PureDetox does not use advanced Device Admin powers (like wiping data or locking screens). However, because of how Android works, the system dialog shows all potential admin capabilities. These are displayed by Android itself, not requested by our app.",
      note: "Official reference: Android Device Admin Overview"
    },
    {
      icon: "👁️",
      title: "Accessibility Service",
      why: "PureDetox uses accessibility services to detect when a blocked app or website is opened, so it can gently stop distractions in real time.",
      what: "We do not record, monitor, or store your screen contents, keystrokes, or personal information. The service only checks which app is active in order to apply blocking rules.",
      note: null
    },
    {
      icon: "📱",
      title: "Display Over Other Apps (Appear on Top)",
      why: "This allows us to show a simple overlay when a blocked app or website is opened. It ensures you see a consistent blocking screen, reminding you of your goals.",
      what: "The overlay only appears during blocking. It does not appear at other times or interfere with normal phone use.",
      note: null
    },
    {
      icon: "⚡",
      title: "Performance & Speed Enhancement",
      why: "Blocking requires quick, precise actions. We use this feature to make sure our app responds instantly when you open a restricted app or site.",
      what: "We don't alter your device performance in the background. This permission is used purely to improve reliability of blocks.",
      note: null
    },
    {
      icon: "⏰",
      title: "Alarms & Reminders",
      why: "PureDetox uses alarms and timers to manage blocking sessions, scheduled profiles, and uninstall protection countdowns.",
      what: "We don't send hidden notifications or track you — alarms are only used to power the features you set up yourself.",
      note: null
    },
    {
      icon: "🔋",
      title: "Battery Enhancement (Ignore Battery Restrictions)",
      why: "Some devices stop apps in the background to save battery, which can break blocking. By disabling battery enhancement for PureDetox, you ensure consistent blocking even during low-power modes.",
      what: "We don't increase battery usage unnecessarily — this option simply prevents Android from force-closing the app.",
      note: null
    },
    {
      icon: "🚀",
      title: "Auto-Start",
      why: "Auto-start ensures PureDetox runs reliably after a device restart, so your blocking rules are always active without needing to manually relaunch the app.",
      what: "Some Android devices display auto-start permissions differently. If you ever see a mismatch, it's just a system quirk, not extra tracking. You can always verify or adjust this setting in your device's system settings.",
      note: null
    },
    {
      icon: "☁️",
      title: "Cloud Backup",
      why: "To let you save and restore your blocking configurations when reinstalling or switching devices. (No usage data backup is done - usage data backups can't be performed)",
      what: "We don't access your backups unless you explicitly contact support and request help in emergency situations.",
      note: null
    },
    {
      icon: "📊",
      title: "Analytics & Crash Reports",
      why: "To improve app stability and performance.",
      what: "We don't collect or store personally identifiable information — only anonymous crash and usage data.",
      note: null
    }
  ];

  return (
    <>
      <main className="container py-12 max-w-5xl">
        <article className="max-w-none">
          <header className="text-center mb-12 border-b pb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🔒 Transparency First
            </div>
            <h1 className="text-4xl font-bold mb-4">Why We Ask for Permissions</h1>
            <p className="text-lg opacity-70 max-w-3xl mx-auto leading-relaxed">
              We only request the permissions necessary for PureDetox to work properly. Here's what each permission does and why it's needed.
            </p>
          </header>

          <div className="mb-12 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-800">✅ Our Promise</h2>
            <div className="space-y-3 text-base leading-relaxed">
              <p>• <strong>We never misuse permissions</strong> for anything beyond what's explained here.</p>
              <p>• <strong>Data stays private:</strong> sensitive information is never collected, shared, or stored without your consent.</p>
              <p>• <strong>You're always in control:</strong> most permissions are optional and only needed if you choose to use specific features (like uninstall protection or cloud backup).</p>
            </div>
          </div>

          <div className="grid gap-6 md:gap-8">
            {permissions.map((permission, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">
                    {permission.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {index + 1}. {permission.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Why we need it:</h4>
                        <p className="text-gray-700 leading-relaxed">{permission.why}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">What we don't do:</h4>
                        <p className="text-gray-700 leading-relaxed">{permission.what}</p>
                      </div>
                      
                      {permission.note && (
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm text-yellow-800 font-medium">{permission.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">🛡️ Privacy & Trust</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-lg">Transparency Commitment</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Open Communication:</span> Every permission explained clearly</li>
                  <li><span className="font-medium">No Hidden Features:</span> What you see is what you get</li>
                  <li><span className="font-medium">User Control:</span> You decide which features to enable</li>
                  <li><span className="font-medium">Data Minimization:</span> Only collect what's absolutely necessary</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-lg">Need Help?</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Questions:</span> <a href="mailto:ridwan@puredetox.app" className="text-blue-400 hover:text-blue-300">ridwan@puredetox.app</a></li>
                  <li><span className="font-medium">Privacy Policy:</span> <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Full details</Link></li>
                  <li><span className="font-medium">Terms:</span> <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
                  <li><span className="font-medium">Support:</span> Available via email</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mt-12">
            <div className="border-t pt-8">
              <p className="text-sm opacity-70 mb-4">Related pages:</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
                <Link href="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</Link>
                <Link href="/" className="text-blue-600 hover:underline font-medium">Back to Home</Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
