import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Pure Detox",
  description: "Learn how Pure Detox collects, processes, and protects your personal data. Your privacy is our priority.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://puredetox.app/privacy" },
    ],
  };

  return (
    <>
      <main className="container py-10 prose max-w-[800px]">
        <header className="not-prose mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Privacy Policy</h1>
          <p className="opacity-80">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-lg">Your privacy is important to us. This Privacy Policy explains how Pure Detox collects, uses, and protects your information when you use our Android app and website.</p>
        </header>

        <section>
          <h2>Information We Collect</h2>
          
          <h3>Personal Data</h3>
          <p>When you register for Pure Detox, we collect:</p>
          <ul>
            <li><strong>Email address:</strong> Used for account creation and communication</li>
            <li><strong>Password:</strong> Securely encrypted and stored</li>
            <li><strong>Third-party sign-in data:</strong> If you sign in through Google, Apple, or other services, we access your email and public name with your consent</li>
          </ul>

          <h3>Usage Data</h3>
          <p>To improve our service, we collect:</p>
          <ul>
            <li><strong>App usage statistics:</strong> Which apps you block, session durations, and blocking patterns</li>
            <li><strong>Device information:</strong> Android version, device type, and app version</li>
            <li><strong>Performance data:</strong> Crash reports and app performance metrics</li>
            <li><strong>Location data:</strong> Only if you enable location-based blocking features (optional)</li>
          </ul>

          <h3>Technical Data</h3>
          <p>For website functionality:</p>
          <ul>
            <li><strong>Cookies and analytics:</strong> Website performance and user behavior (with consent)</li>
            <li><strong>IP address:</strong> Anonymized for security and analytics</li>
            <li><strong>Browser information:</strong> For compatibility and optimization</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          
          <h3>Core Service Delivery</h3>
          <ul>
            <li>Provide app and website blocking functionality</li>
            <li>Sync your settings across devices</li>
            <li>Deliver focus schedules and notifications</li>
            <li>Track your progress and streaks</li>
          </ul>

          <h3>Service Improvement</h3>
          <ul>
            <li>Analyze usage patterns to improve features</li>
            <li>Fix bugs and optimize performance</li>
            <li>Develop new blocking and focus features</li>
            <li>Provide customer support</li>
          </ul>

          <h3>Communication</h3>
          <ul>
            <li>Send important service updates</li>
            <li>Provide customer support responses</li>
            <li>Share tips for better focus (with consent)</li>
            <li>Notify about new features or updates</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing and Third Parties</h2>
          
          <h3>We Do NOT Share Your Data For:</h3>
          <ul>
            <li><strong>Advertising:</strong> We never sell your data to advertisers</li>
            <li><strong>Marketing:</strong> No third-party marketing without explicit consent</li>
            <li><strong>Profiling:</strong> No behavioral profiling for external purposes</li>
          </ul>

          <h3>We May Share Data With:</h3>
          <ul>
            <li><strong>Service providers:</strong> Cloud hosting, analytics, and customer support tools (under strict data processing agreements)</li>
            <li><strong>Legal requirements:</strong> When required by law or to protect user safety</li>
            <li><strong>Business transfers:</strong> In case of merger or acquisition (users will be notified)</li>
          </ul>

          <h3>Third-Party Services We Use:</h3>
          <ul>
            <li><strong>Google Analytics:</strong> Website usage analytics (anonymized)</li>
            <li><strong>Cloud storage:</strong> Secure data backup and sync</li>
            <li><strong>Payment processors:</strong> For subscription management (minimal data shared)</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          
          <h3>Technical Measures</h3>
          <ul>
            <li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
            <li><strong>Secure servers:</strong> Data stored on secured, monitored servers</li>
            <li><strong>Access controls:</strong> Limited employee access on need-to-know basis</li>
            <li><strong>Regular audits:</strong> Security assessments and vulnerability testing</li>
          </ul>

          <h3>Your Responsibilities</h3>
          <ul>
            <li>Keep your login credentials confidential</li>
            <li>Use strong, unique passwords</li>
            <li>Report suspicious activity immediately</li>
            <li>Keep your app updated for latest security features</li>
          </ul>
        </section>

        <section>
          <h2>Your Privacy Rights</h2>
          
          <h3>Access and Control</h3>
          <ul>
            <li><strong>Access:</strong> View all data we have about you</li>
            <li><strong>Correction:</strong> Update incorrect information</li>
            <li><strong>Deletion:</strong> Request complete account and data deletion</li>
            <li><strong>Export:</strong> Download your data in portable format</li>
            <li><strong>Withdraw consent:</strong> Opt out of optional data processing</li>
          </ul>

          <h3>Communication Preferences</h3>
          <ul>
            <li>Unsubscribe from marketing emails</li>
            <li>Control push notification types</li>
            <li>Manage analytics and tracking preferences</li>
          </ul>

          <h3>Regional Rights</h3>
          <ul>
            <li><strong>GDPR (EU):</strong> Full data protection rights</li>
            <li><strong>CCPA (California):</strong> Right to know, delete, and opt-out</li>
            <li><strong>Other regions:</strong> Rights as applicable under local law</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          
          <h3>Account Data</h3>
          <ul>
            <li><strong>Active accounts:</strong> Retained while account is active</li>
            <li><strong>Deleted accounts:</strong> Permanently deleted within 30 days</li>
            <li><strong>Backup data:</strong> Removed from backups within 90 days</li>
          </ul>

          <h3>Usage Analytics</h3>
          <ul>
            <li><strong>Aggregated data:</strong> May be retained indefinitely (anonymized)</li>
            <li><strong>Individual metrics:</strong> Deleted with account deletion</li>
            <li><strong>Crash reports:</strong> Retained for 12 months maximum</li>
          </ul>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>Pure Detox is designed for users 13 years and older. We do not knowingly collect personal information from children under 13. If we discover we have collected information from a child under 13, we will delete it immediately.</p>
          
          <p>For users 13-17, we recommend parental supervision and consent before using Pure Detox.</p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>Your data may be processed in countries other than your own. We ensure adequate protection through:</p>
          <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions by relevant authorities</li>
            <li>Certification schemes and codes of conduct</li>
          </ul>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will:</p>
          <ul>
            <li>Notify users of material changes via email</li>
            <li>Post updates on our website with revision date</li>
            <li>Provide 30 days notice for significant changes</li>
            <li>Maintain archive of previous policy versions</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>For privacy-related questions, requests, or concerns:</p>
          
          <div className="not-prose bg-black/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Privacy Contact</h3>
            <ul className="space-y-2">
              <li><strong>Company:</strong> NexusEdge</li>
              <li><strong>Email:</strong> ridwan@puredetox.app</li>
              <li><strong>Privacy Officer:</strong> ridwan@puredetox.app</li>
              <li><strong>Address:</strong> Kolkata, West Bengal, India 711114</li>
              <li><strong>Response time:</strong> Within 30 days</li>
              <li><strong>Support:</strong> Available in-app and via website</li>
            </ul>
          </div>
        </section>

        <section className="not-prose">
          <div className="border-t pt-6 mt-8">
            <p className="text-sm opacity-70 mb-4">Related pages:</p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>

      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
