import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Pure Detox",
  description: "Terms and conditions for using Pure Detox app and website. Learn about your rights and responsibilities.",
  robots: "index, follow",
};

export default function TermsOfService() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://puredetox.app/terms" },
    ],
  };

  return (
    <>
      <main className="container py-10 prose max-w-[800px]">
        <header className="not-prose mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Terms of Service</h1>
          <p className="opacity-80">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-lg">These Terms of Service govern your use of Pure Detox app and website. By using our service, you agree to these terms.</p>
        </header>

        <section>
          <h2>Service Description</h2>
          <p>Pure Detox provides a digital wellbeing service that enables users to:</p>
          <ul>
            <li><strong>Block applications:</strong> Temporarily restrict access to distracting apps</li>
            <li><strong>Schedule focus sessions:</strong> Set up time-based blocking schedules</li>
            <li><strong>Track usage:</strong> Monitor app usage and screen time</li>
            <li><strong>Sync across devices:</strong> Access settings and progress on multiple devices</li>
            <li><strong>Manage digital habits:</strong> Build healthier relationships with technology</li>
          </ul>

          <h3>Service Tiers</h3>
          <ul>
            <li><strong>Basic (Free):</strong> Core app blocking and time tracking without registration</li>
            <li><strong>Focus (Premium):</strong> Advanced features including sync, schedules, and analytics</li>
            <li><strong>Pro (Team):</strong> Multi-device management and admin controls</li>
          </ul>
        </section>

        <section>
          <h2>User Accounts and Registration</h2>
          
          <h3>Account Creation</h3>
          <ul>
            <li>You must be at least 13 years old to create an account</li>
            <li>Provide accurate and complete information during registration</li>
            <li>Choose a secure password and keep login credentials confidential</li>
            <li>You are responsible for all activities under your account</li>
          </ul>

          <h3>Account Security</h3>
          <ul>
            <li>Maintain confidentiality of your login credentials</li>
            <li>Notify us immediately of unauthorized access or security breaches</li>
            <li>Change your password if you suspect compromise</li>
            <li>Enable two-factor authentication when available</li>
          </ul>

          <h3>Account Termination</h3>
          <ul>
            <li>You may delete your account at any time through app settings</li>
            <li>We may suspend or terminate accounts for violations of these terms</li>
            <li>Upon termination, your data will be deleted according to our Privacy Policy</li>
            <li>Some data may be retained for legal or security purposes</li>
          </ul>
        </section>

        <section>
          <h2>License and Usage Rights</h2>
          
          <h3>License Grant</h3>
          <p>Pure Detox grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
          <ul>
            <li>Download and use the Pure Detox app on your personal devices</li>
            <li>Access our website and related services</li>
            <li>Use our blocking and focus features for personal use</li>
          </ul>

          <h3>Usage Restrictions</h3>
          <p>You may NOT:</p>
          <ul>
            <li><strong>Reverse engineer:</strong> Decompile, disassemble, or attempt to derive source code</li>
            <li><strong>Modify or distribute:</strong> Alter, copy, or redistribute the app without permission</li>
            <li><strong>Commercial use:</strong> Use the service for commercial purposes without authorization</li>
            <li><strong>Interfere:</strong> Disrupt or interfere with the service or servers</li>
            <li><strong>Circumvent:</strong> Attempt to bypass security measures or access controls</li>
            <li><strong>Misuse:</strong> Use the service for illegal or harmful purposes</li>
          </ul>

          <h3>Intellectual Property</h3>
          <ul>
            <li>Pure Detox retains all rights to the app, website, and related content</li>
            <li>Trademarks and logos are owned by Pure Detox</li>
            <li>User-generated content remains your property, but you grant us license to use it</li>
          </ul>
        </section>

        <section>
          <h2>Subscription and Payment Terms</h2>
          
          <h3>Subscription Plans</h3>
          <ul>
            <li><strong>Free Trial:</strong> 7-day trial with full access to premium features</li>
            <li><strong>Monthly:</strong> Recurring monthly subscription</li>
            <li><strong>Annual:</strong> Yearly subscription with discount</li>
            <li><strong>Lifetime:</strong> One-time payment for permanent access (when available)</li>
          </ul>

          <h3>Payment and Billing</h3>
          <ul>
            <li>Subscriptions are billed in advance through your app store account</li>
            <li>Prices are displayed in your local currency</li>
            <li>Auto-renewal can be disabled in your app store settings</li>
            <li>We do not store payment information directly</li>
          </ul>

          <h3>Refunds and Cancellation</h3>
          <ul>
            <li><strong>14-day money-back guarantee:</strong> Full refund within 14 days, no questions asked</li>
            <li><strong>Cancellation:</strong> Cancel anytime through app store settings</li>
            <li><strong>Refund process:</strong> Refunds processed through original payment method</li>
            <li><strong>Service access:</strong> Premium features remain available until subscription ends</li>
          </ul>
        </section>

        <section>
          <h2>Acceptable Use Policy</h2>
          
          <h3>Permitted Uses</h3>
          <ul>
            <li>Personal digital wellbeing and focus improvement</li>
            <li>Educational use for study and productivity</li>
            <li>Workplace focus enhancement (with appropriate permissions)</li>
            <li>Parental controls for family devices (with proper consent)</li>
          </ul>

          <h3>Prohibited Uses</h3>
          <ul>
            <li><strong>Illegal activities:</strong> Any unlawful purpose or activity</li>
            <li><strong>Harassment:</strong> Targeting or harassing other users</li>
            <li><strong>Spam:</strong> Sending unsolicited communications</li>
            <li><strong>Malware:</strong> Introducing viruses or malicious code</li>
            <li><strong>Unauthorized access:</strong> Accessing accounts or data without permission</li>
            <li><strong>False information:</strong> Providing misleading or false information</li>
          </ul>

          <h3>Enforcement</h3>
          <ul>
            <li>We reserve the right to investigate violations</li>
            <li>Violating accounts may be suspended or terminated</li>
            <li>We may cooperate with law enforcement when required</li>
            <li>Repeated violations may result in permanent bans</li>
          </ul>
        </section>

        <section>
          <h2>Service Availability and Support</h2>
          
          <h3>Service Availability</h3>
          <ul>
            <li>We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
            <li>Scheduled maintenance will be announced in advance when possible</li>
            <li>Emergency maintenance may occur without notice</li>
            <li>Service may be temporarily unavailable due to technical issues</li>
          </ul>

          <h3>Customer Support</h3>
          <ul>
            <li><strong>In-app support:</strong> Help center and contact forms</li>
            <li><strong>Email support:</strong> support@puredetox.app</li>
            <li><strong>Response time:</strong> Within 48 hours for most inquiries</li>
            <li><strong>Priority support:</strong> Faster response for premium users</li>
          </ul>

          <h3>Updates and Changes</h3>
          <ul>
            <li>We may update the app and service regularly</li>
            <li>Some updates may be required for continued service access</li>
            <li>New features may be added to existing subscription tiers</li>
            <li>Significant changes will be communicated to users</li>
          </ul>
        </section>

        <section>
          <h2>Privacy and Data Protection</h2>
          
          <h3>Data Collection</h3>
          <ul>
            <li>We collect only necessary data to provide our service</li>
            <li>Usage analytics help us improve the app</li>
            <li>Personal data is protected according to our Privacy Policy</li>
            <li>You control what data is shared and how it&apos;s used</li>
          </ul>

          <h3>Data Security</h3>
          <ul>
            <li>All data is encrypted in transit and at rest</li>
            <li>We implement industry-standard security measures</li>
            <li>Regular security audits and updates</li>
            <li>Breach notification procedures in place</li>
          </ul>

          <p>For complete details, see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
        </section>

        <section>
          <h2>Disclaimers and Limitations</h2>
          
          <h3>Service Disclaimers</h3>
          <ul>
            <li><strong>As-is service:</strong> Pure Detox is provided &apos;as is&apos; without warranties</li>
            <li><strong>No medical claims:</strong> Not intended as medical or therapeutic treatment</li>
            <li><strong>Individual results:</strong> Results may vary between users</li>
            <li><strong>Third-party content:</strong> Not responsible for external links or content</li>
          </ul>

          <h3>Limitation of Liability</h3>
          <ul>
            <li>Our liability is limited to the amount you paid for the service</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>Some jurisdictions may not allow these limitations</li>
            <li>Nothing in these terms limits liability for death, personal injury, or fraud</li>
          </ul>

          <h3>Device Compatibility</h3>
          <ul>
            <li>Pure Detox requires Android 6.0 or later</li>
            <li>Some features may require specific Android permissions</li>
            <li>Performance may vary on older or modified devices</li>
            <li>We cannot guarantee compatibility with all device configurations</li>
          </ul>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>You agree to indemnify and hold Pure Detox harmless from any claims, damages, or expenses arising from:</p>
          <ul>
            <li>Your use of the service</li>
            <li>Violation of these terms</li>
            <li>Infringement of third-party rights</li>
            <li>Any content you submit or share</li>
          </ul>
        </section>

        <section>
          <h2>Governing Law and Disputes</h2>
          
          <h3>Governing Law</h3>
          <ul>
            <li>These terms are governed by the laws of India</li>
            <li>Disputes will be resolved in the courts of Kolkata, West Bengal, India</li>
            <li>International users may have additional rights under local law</li>
          </ul>

          <h3>Dispute Resolution</h3>
          <ul>
            <li><strong>First contact:</strong> Contact our support team to resolve issues</li>
            <li><strong>Mediation:</strong> Attempt mediation before formal legal action</li>
            <li><strong>Arbitration:</strong> Binding arbitration for certain disputes (where legally permitted)</li>
            <li><strong>Class action waiver:</strong> Individual disputes only (where legally permitted)</li>
          </ul>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>We may modify these Terms of Service to reflect:</p>
          <ul>
            <li>Changes in our service or features</li>
            <li>Legal or regulatory requirements</li>
            <li>Industry best practices</li>
            <li>User feedback and improvements</li>
          </ul>

          <h3>Notification of Changes</h3>
          <ul>
            <li>Material changes will be announced via email</li>
            <li>Updates posted on website with revision date</li>
            <li>30-day notice period for significant changes</li>
            <li>Continued use constitutes acceptance of new terms</li>
          </ul>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>For questions about these Terms of Service:</p>
          
          <div className="not-prose bg-black/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Legal Contact</h3>
            <ul className="space-y-2">
              <li><strong>Company:</strong> NexusEdge</li>
              <li><strong>Email:</strong> ridwan@puredetox.app</li>
              <li><strong>Support:</strong> ridwan@puredetox.app</li>
              <li><strong>Address:</strong> Kolkata, West Bengal, India 711114</li>
              <li><strong>Response time:</strong> Within 30 days</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Severability</h2>
          <p>If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. The unenforceable provision will be replaced with an enforceable provision that most closely reflects the original intent.</p>
        </section>

        <section className="not-prose">
          <div className="border-t pt-6 mt-8">
            <p className="text-sm opacity-70 mb-4">Related pages:</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>

      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
