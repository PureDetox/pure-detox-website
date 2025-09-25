import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Account & Data Deletion - Pure Detox",
  description: "Delete your PureDetox account or specific data via email. Choose full account deletion or selective data deletion while keeping your account active.",
  robots: "index, follow",
};

export default function AccountDeletionPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
      { "@type": "ListItem", position: 2, name: "Account Deletion", item: "https://puredetox.app/account-deletion" },
    ],
  };

  return (
    <>
      <main className="container py-12 max-w-5xl">
        <article className="max-w-none">
          <header className="text-center mb-12 border-b pb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              🗑️ Account Management
            </div>
            <h1 className="text-4xl font-bold mb-4">Account Deletion</h1>
            <p className="text-lg opacity-70 max-w-3xl mx-auto leading-relaxed">
              You may request deletion of your PureDetox account and associated data at any time. We respect your right to be forgotten.
            </p>
          </header>

          {/* Important Notice */}
          <div className="mb-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold mb-4 text-red-800">⚠️ Important Notice</h2>
            <p className="text-base leading-relaxed text-red-700">
              <strong>Once your account is deleted, you cannot recover your data.</strong> Please make sure you want to permanently delete your account before proceeding.
            </p>
          </div>

          {/* How to Delete */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Account & Data Deletion Options</h2>
            
            {/* Option Selection */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Choose Your Deletion Type</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">🗑️ Full Account Deletion</h4>
                  <p className="text-sm text-blue-600">Delete your entire account and all associated data permanently.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">📄 Data Deletion Only</h4>
                  <p className="text-sm text-blue-600">Keep your account but delete specific data (backups, settings, etc.).</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900">Full Account Deletion</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Method 1: In-App */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Method 1: In-App Deletion</h3>
                    <p className="text-sm text-gray-600">Recommended - Quick & Easy</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    <span>Open the PureDetox app</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    <span>Go to <strong>Settings</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    <span>Tap <strong>Account</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    <span>Select <strong>Delete Account</strong></span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>✅ Instant Processing:</strong> Your account will be deleted immediately with confirmation.
                  </p>
                </div>
              </div>

              {/* Method 2: Email */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Method 2: Email Request</h3>
                    <p className="text-sm text-gray-600">Alternative option</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">Submit a deletion request to:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <a 
                      href="mailto:ridwan@puredetox.app?subject=Account Deletion Request&body=I would like to delete my PureDetox account and all associated data. Please confirm when this has been completed."
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                    >
                      ridwan@puredetox.app
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Please include:</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Your account email address</li>
                      <li>• Confirmation that you want to delete your account</li>
                      <li>• Any specific data deletion requests</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>⏱️ Processing Time:</strong> Email requests are processed within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Deletion Only Section */}
            <div className="mt-16 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Data Deletion Only (Keep Account Active)</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-bold mb-4 text-green-800">📄 Selective Data Deletion</h4>
                <p className="text-green-700 mb-4">
                  Want to keep your account but delete specific data? You can request deletion of individual data types while keeping your account active.
                </p>
              </div>

              {/* Email Method for Data Deletion */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Email Data Deletion Request</h4>
                    <p className="text-sm text-gray-600">Specify exactly what data to delete</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">Send your specific data deletion request to:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <a 
                      href="mailto:ridwan@puredetox.app?subject=Data Deletion Request - Keep Account Active&body=I would like to delete specific data from my PureDetox account while keeping the account active.%0A%0APlease delete the following data:%0A☐ Backup files%0A☐ Personal settings and configurations%0A☐ Usage statistics%0A☐ Support conversation history%0A☐ Other (please specify): ____________%0A%0AMy account email: ____________%0A%0APlease confirm when this has been completed."
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                    >
                      ridwan@puredetox.app
                    </a>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="font-medium text-gray-700">What you can request to delete:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-blue-800 mb-2">App Data</h6>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Backup files and configurations</li>
                          <li>• Personal settings and preferences</li>
                          <li>• Session profiles and schedules</li>
                          <li>• Usage statistics and history</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h6 className="font-semibold text-purple-800 mb-2">Account Data</h6>
                        <ul className="text-sm text-purple-600 space-y-1">
                          <li>• Support conversation history</li>
                          <li>• Feedback and survey responses</li>
                          <li>• Device information logs</li>
                          <li>• Custom preferences</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h6 className="font-semibold text-yellow-800 mb-2">📋 Email Template Instructions</h6>
                      <div className="text-sm text-yellow-700 space-y-2">
                        <p><strong>Subject:</strong> "Data Deletion Request - Keep Account Active"</p>
                        <p><strong>Include in your email:</strong></p>
                        <ul className="ml-4 space-y-1">
                          <li>• Your account email address</li>
                          <li>• Specific data types you want deleted (use checkboxes)</li>
                          <li>• Any additional details or special requests</li>
                          <li>• Confirmation that you want to keep your account active</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>⏱️ Processing Time:</strong> Data deletion requests are processed within 48-72 hours. You'll receive confirmation via email.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What Data Is Deleted</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                <span className="mr-2">✅</span>
                Completely Removed
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Account Information</h4>
                  <ul className="space-y-2 text-green-600">
                    <li>• Email address</li>
                    <li>• User ID (UID)</li>
                    <li>• Display name</li>
                    <li>• Account preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">App Data</h4>
                  <ul className="space-y-2 text-green-600">
                    <li>• Backup files</li>
                    <li>• Personal settings</li>
                    <li>• Firebase stored data</li>
                    <li>• Configuration profiles</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What May Be Retained */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What Data May Be Retained</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-800 flex items-center">
                <span className="mr-2">⚠️</span>
                Limited Retention (Legal & Technical Requirements)
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-2 text-yellow-700">📊 Anonymous Analytics</h4>
                  <p className="text-yellow-600 text-sm">
                    Crash logs and performance metrics that cannot be linked to your identity. These help us improve app stability for all users.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-2 text-yellow-700">🎧 Support Records</h4>
                  <p className="text-yellow-600 text-sm">
                    Customer support communications may be kept for up to <strong>30 days</strong> if you had an open support ticket. This is for quality assurance and follow-up purposes only.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-2 text-yellow-700">⚖️ Legal Requirements</h4>
                  <p className="text-yellow-600 text-sm">
                    Any data we are legally required to retain under applicable laws and regulations. This is rare and only applies in specific legal circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Deletion Timeline</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-blue-800 mb-2">In-App Deletion</h3>
                  <p className="text-blue-600 text-sm">Immediate processing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-bold text-purple-800 mb-2">Email Request</h3>
                  <p className="text-purple-600 text-sm">Within 48 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-bold text-green-800 mb-2">Confirmation</h3>
                  <p className="text-green-600 text-sm">Email notification sent</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ Can I recover my account after deletion?</h3>
                <p className="text-gray-600">No, account deletion is permanent. Once deleted, your account and data cannot be recovered. Please be certain before proceeding.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ What happens to my app settings?</h3>
                <p className="text-gray-600">All your personal settings, backup configurations, and preferences will be permanently deleted from our servers.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ Will I receive confirmation?</h3>
                <p className="text-gray-600">Yes, you will receive an email confirmation once your account has been successfully deleted.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ Can I delete specific data instead of my entire account?</h3>
                <p className="text-gray-600">Yes! Use the "Data Deletion Only" section above to request deletion of specific data types while keeping your account active. This includes backups, settings, usage statistics, and support history.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ What's the difference between account deletion and data deletion?</h3>
                <p className="text-gray-600"><strong>Account deletion:</strong> Removes your entire account and all data permanently. <strong>Data deletion:</strong> Removes specific data types while keeping your account active so you can continue using the app.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">❓ Can I delete my data and then create a fresh account?</h3>
                <p className="text-gray-600">Yes, you can either: 1) Use "Data Deletion Only" to clear your current account data, or 2) Delete your entire account and create a new one. Both options give you a fresh start.</p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-12">
            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">🤝 Need Help?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Before You Delete</h3>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Questions:</span> <a href="mailto:ridwan@puredetox.app" className="text-blue-400 hover:text-blue-300">ridwan@puredetox.app</a></li>
                    <li><span className="font-medium">Privacy Policy:</span> <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Full details</Link></li>
                    <li><span className="font-medium">Terms:</span> <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
                    <li><span className="font-medium">Permissions:</span> <Link href="/permissions" className="text-blue-400 hover:text-blue-300">Permission Info</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Alternative Options</h3>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Account Issues:</span> Try troubleshooting first</li>
                    <li><span className="font-medium">Privacy Concerns:</span> Review our data practices</li>
                    <li><span className="font-medium">App Problems:</span> Contact support for help</li>
                    <li><span className="font-medium">Feature Requests:</span> Share your feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section>
            <div className="border-t pt-8">
              <p className="text-sm opacity-70 mb-4">Related pages:</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
                <Link href="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</Link>
                <Link href="/permissions" className="text-blue-600 hover:underline font-medium">Permissions</Link>
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
