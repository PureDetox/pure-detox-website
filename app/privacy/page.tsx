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
      <main className="container py-12 max-w-5xl">
        <article className="prose prose-lg max-w-none">
          <header className="not-prose mb-12 text-center border-b pb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-70">Last updated: January 9, 2024</p>
            <p className="text-sm opacity-60 mt-2">NexusEdge - Pure Detox Application & Service</p>
          </header>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
            <p className="text-base leading-relaxed">
              This privacy policy (&quot;Privacy Policy&quot;) describes the manner of collecting, retaining and other processing of personal data by NexusEdge (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), operated by Ridwan Mullick. At present, Nexus Edge is in its early stage and pre-revenue. All services are provided under the responsibility of Ridwan Mullick, until a formal legal entity is established. Any such change will be updated in this Privacy Policy and communicated to users, with current operations at Eksara, Howrah 711114. This is in connection with the use of PureDetox application and service (&quot;Application&quot;) and the website www.puredetox.app (&quot;Web Interface&quot;), the purpose of which is the temporary blocking of other applications by the Users (&quot;Service&quot;).
            </p>
          </div>

          <section className="mb-10">
            <p className="text-lg mb-4">This Privacy Policy supplements and is incorporated by reference in the <strong>Conditions of Use of Puredetox Service</strong> (&quot;Conditions&quot;). The definitions/capitalized terms specified in the Conditions have the same meaning herein.</p>
            
            <p className="mb-4">The protection of privacy and personal data processing is a priority for the Operator and the processing of personal data is regarded as strictly confidential. Personal data are treated in compliance with the valid and effective laws and regulations in the field of personal data protection, including the General Data Protection Regulation EU 2016/679 (&quot;Regulation&quot;).</p>

            <p className="mb-4">The Operator may change this Privacy Policy at any time with immediate effect. We will inform you of such changes. Should this Privacy Policy be changed in a manner that requires your consent, we will request your consent again.</p>

              <p className="mb-4">The latest version hereof is available in the footer of the Web Interface and through a link in the relevant section of the Application.</p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
                <p className="text-base leading-relaxed">
                  <strong>Permission Transparency:</strong> For more details on permissions we request and why, please see our <Link href="/permissions" className="text-blue-600 hover:text-blue-700 font-medium underline">Permission Clarifications page</Link>.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-semibold text-yellow-800">If you choose to use our Service, then you agree to the collection and use of information in relation to this policy.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Eligibility and Age Requirements</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <p className="text-base leading-relaxed">
                <strong>Age and Consent:</strong> Our services are intended for users aged 18 and over, or 16 and over with parental consent. We do not knowingly collect data from children under 16.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">2. General Information</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Under the Regulation, the Operator is the controller of your personal data, i.e. the Operator collects, stores and uses (and otherwise processes) your personal data in connection with its business activities (the individual purposes for which the personal data are processed are specified below).</p>
              
              <p>Without your consent, we may only process such personal data that are necessary for the performance of the contract (i.e. the provision of the Service) and other contracts we may make with you or for the purpose of meeting our legal obligations, and/or for the purpose of legitimate interests. In other situations, we process your personal data only if you give us your consent to the processing of your personal data.</p>

              <p>Personal data are processed by us both manually and by automated means. Personal data are processed by automated means for the purpose of performance of a contract (the provision of the Service), in particular, to secure internal procedures of the Operator and its contractual partners that are necessary for the provision of the Service.</p>

              <p>This Privacy Policy describes the purposes of personal data processing and the manners of processing, it provides information regarding individual categories of personal data to be processed, individual recipients of personal data, the storage period of personal data and your rights regarding the protection of personal data.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Information Collection and Use</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>NexusEdge does not collect or store any Personal Information except data needed for the backup system to store progress, save Session Profiles and Smart Shield blocking setups or synchronize app settings, nor does it share any such information with third parties. This data is voluntary and other services may be used without creating an account. All statistics and related configurations available through the Service are stored locally on the user&apos;s device for their use only and are not accessible by NexusEdge and its affiliates. However, we use third-party services for analyses, advertisement and bug reporting. These services are managed by their own Privacy Policy:</p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
                <p className="text-base leading-relaxed">
                  <strong>Analytics Disclosure:</strong> We may collect anonymous technical data (such as crash logs, error reports, and performance metrics) strictly for the purpose of improving app stability. This data does not include any personally identifiable information.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">Third-Party Services:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Play Services</li>
                  <li>Firebase Analytics</li>
                  <li>Firebase Crashlytics</li>
                  <li>Superwall</li>
                  <li>Big Query</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Purposes of Personal Data Processing</h2>
            <p className="mb-4">Your personal data may be processed by the Operator for the following purposes:</p>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div><strong>Performance of a contract</strong> with the User (fulfilment of mutual contractual relationship based on which the Service is provided to the User);</div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div><strong>Fulfilment of legal obligations;</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div><strong>Protection of the controller&apos;s legitimate interest</strong> (protection of the rights and legally protected interests of the Operator, e.g. creating statistics concerning the behaviour of the Users of the Service);</div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div><strong>Distributing commercial communications and offering of services and goods</strong> (the Operator may send you commercial communications regarding the Service via e-mail or push notifications);</div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div><strong>Dealing with requests of the Users</strong> (e.g. using the possibility to contact the Operator through the Application).</div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Types of Personal Data Processed</h2>
            <h3 className="text-xl font-semibold mb-4">5.1 Categories of Personal Data</h3>
            <p className="mb-4">In connection with your activity and depending on the content thereof, the following personal data may be processed in the course of the provision of the Service:</p>
            
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Data Subject Data</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Purposes of Processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">E-mail</td>
                    <td className="border border-gray-300 p-4">Performance of a contract with the User; fulfilment of legal obligations; protection of the controller&apos;s legitimate interest; distributing commercial communications and offering of services and goods; dealing with requests of the Users</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Password</td>
                    <td className="border border-gray-300 p-4">Performance of a contract with the User; protection of a legitimate interest of the controller</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">Smart Shield and Session Profile configuration</td>
                    <td className="border border-gray-300 p-4">Performance of a contract with the User</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Means of Personal Data Processing</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Through registration, we collect personal data via the form in the Application. The Operator thus gets access to your e-mail and password. It is not possible to complete the registration (or create a Profile) without processing these personal data. In addition to this, you may at any time also fill in voluntary information.</p>

              <p>The Smart Shield and Session Profiles setup will only be saved for users who use the Backup feature. This data is used for providing backups and, in the case of a backup or restoration failure, debugging and will not be provided to third parties.</p>

              <p>Notwithstanding whether you register or not, we process your operational and localization data when you use the Service.</p>

              <p>By giving us the data, you are aware of the fact that they will be processed, or, if it is stated, you give your consent to the processing. You can withdraw your consent to the processing of personal data at any time. If so, we will no longer process your personal data unless there is a legal ground for their processing.</p>

              <p>When you use the Service, the Operator&apos;s servers or the servers of the processors automatically recognize the IP address of your device (it is a number by which each device connected to the Internet is identified) or other identifiers.</p>

              <p>We also process statistical anonymized information in order to find out in what manner the Users or the visitors use the application.</p>

              <p>You may refuse the processing of your personal data for the purpose of sending commercial communications at any time and this will not affect our other mutual relationships. All you have to do is to refuse sending other messages by clicking on the link located in the footer of the sent commercial communication or you can send us an e-mail with the appropriate request at <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:underline font-medium">ridwan@puredetox.app</a>.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Recipients of Data</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>We disclose your personal data only to authorized employees or to individual processors of personal data contracted by the Operator, or to other controllers. However, we always disclose your data only to the extent necessary to fulfil the individual purposes of the processing, and on the basis of an appropriate legal title for the processing of personal data. The categories of recipients of personal data are as follows:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Public authorities;</li>
                  <li>Web service providers and IT solutions;</li>
                </ul>
              </div>

              <p>Personal data may also be transferred to entities established in countries that do not provide an adequate level of protection within the meaning of the Regulation. In such cases, the Operator concludes with the recipients&apos; standard contractual clauses approved by the European Commission to ensure an adequate level of personal data protection.</p>

              <p>Under certain conditions, we are entitled, or even obliged, to transfer certain personal data on the basis of applicable and effective legislation, for example to law enforcement authorities or other public authorities.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">8. Personal Data Retention Period</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Purpose of Processing</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">Performance of a contract with the User</td>
                    <td className="border border-gray-300 p-4">For the duration of registration of the User in the Service</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">Fulfilment of legal obligations</td>
                    <td className="border border-gray-300 p-4">For the period prescribed by applicable legal regulation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">Protection of the controller&apos;s legitimate interest</td>
                    <td className="border border-gray-300 p-4">Up to a maximum of 3 years from the start of processing of personal data, unless otherwise provided for by specific legal regulation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">Distributing commercial communications</td>
                    <td className="border border-gray-300 p-4">For as long as consent is granted or until withdrawal of consent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">Dealing with requests of the Users</td>
                    <td className="border border-gray-300 p-4">For the duration of registration of the User in the Service</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-3 text-green-800">Data Retention Policy</h3>
              <div className="space-y-2 text-base leading-relaxed">
                <p><strong>Backups:</strong> Backups are stored until you disable backups in the app or request deletion.</p>
                <p><strong>Analytics Data:</strong> Anonymous analytics data may be retained for up to 24 months for stability analysis and to fulfill our offered features.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Backups</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Our app offers an optional backup feature for your app configuration (such as block lists and preferences). If you choose to enable backups, this data is stored securely using Google Firebase and is encrypted in transit and at rest.</p>
              
              <p>These backups are only used to restore your settings when you request it.</p>

              <p>Our team does not access backups by default. Access is possible only when you explicitly request support (for example, to disable blocking without doing a full reset).</p>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <p className="text-base leading-relaxed">
                  <strong>Support Access:</strong> In rare cases where you contact our support team and explicitly request assistance, our team may temporarily access your backup data to help restore or adjust your app settings. This access is strictly limited to your request and is never done otherwise.
                </p>
              </div>

              <p>You may disable backups at any time in the app settings. You can also request permanent deletion of your backups by contacting us at <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:underline font-medium">ridwan@puredetox.app</a>.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">10. Security and Confidential Nature of Personal Data</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Personal data will be secured in such a way and using such technical and organizational means that a complete protection of personal data is provided in accordance with the Regulation and the applicable regulations governing personal data protection.</p>
              
              <p>Personal data are processed electronically by automated means or in printed form manually by authorized employees of the Operator and the employees of authorized processors.</p>

              <p>Personal data are stored on secured servers in appropriate IT systems. The Operator adopted adequate technical and organizational measures to prevent any loss or destruction of personal data, any access to the data by unauthorised persons, any changes or disclosure thereof.</p>

              <p>Backups stored in Firebase are encrypted in transit and at rest.</p>

              <p>Your Profile may be accessed only with a personal password. It is necessary to refrain from disclosing your login data to third parties. The Operator does not assume any liability for the misuse of the passwords used.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">11. Installed Apps Inventory Access</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-base leading-relaxed">The Service requires access to the user&apos;s inventory of installed apps in order to provide its basic functionality, such as blocking setup and usage statistics. This data is used solely in order to provide the required functionality to the user, as per the user&apos;s configuration. No app inventory data is stored or used in any other way.</p>
            </div>
            
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                📋 <strong>Want to understand all permissions?</strong> Visit our comprehensive <Link href="/permissions" className="text-blue-600 hover:text-blue-700 font-medium underline">Permission Clarifications page</Link> for detailed explanations of every access request.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">12. Log Data</h2>
            <p className="text-base leading-relaxed">We want to inform you that whenever you use our Service, we may collect data and information, called Log Data, (through third party products) on your device in case of an error occurring in the app. This Log Data may include information such as your device Internet Protocol (&quot;IP&quot;) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. This data is used solely for the purpose of improving the Service and providing reliability, does not hold any information about the user and cannot be used to identify the user.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">13. Service Providers</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>We may employ third-party companies (see the complete list under Information Collection and Use) due to the following reasons:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>To facilitate our Service;</li>
                  <li>To provide the Service on our behalf;</li>
                  <li>To perform Service-related services; or</li>
                  <li>To assist us in analyzing how our Service is used.</li>
                </ul>
              </div>
              
              <p>We want to inform users of this Service that these third parties have access to your anonymous information as per their specifications and policies. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

              <p>In particular, we use Singular SDK, a Mobile Measurement Partner (MMP), to analyze and attribute user acquisition and marketing campaign performance. Singular may collect device identifiers, installation source information, and app event data.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">14. Rights of the Data Subjects</h2>
            <p className="mb-6 text-base">In connection with personal data processing, you have the rights specified below, under the conditions of articles 15 to 21 of the Regulation, that you may exercise at any time:</p>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Right to access your personal data:</h3>
                <p>If you are interested in whether the Operator processes your personal data, you are entitled to obtain information regarding whether your personal data are being processed and if so, you are entitled to gain access to your personal data.</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Right to have inaccurate personal data rectified:</h3>
                <p>If you think that the Operator processes any inaccurate or incomplete personal data of yours, you are entitled to demand that they are rectified and completed.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Right to erasure:</h3>
                <p>If you request an erasure, the Operator will delete your personal data, provided that they are no longer necessary for the purpose for which they were collected or otherwise processed. You can request account deletion or permanent deletion of your backups at any time by contacting us.</p>
                
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">
                    🗑️ <strong>Need to delete your account?</strong> Visit our <Link href="/account-deletion" className="text-red-600 hover:text-red-700 font-medium underline">Account Deletion page</Link> for step-by-step instructions and information about what data is removed.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Right to data portability:</h3>
                <p>If you want the Operator to submit your personal data processed by the Operator based on your consent to a third party, you can exercise your right to data portability.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Right to object:</h3>
                <p>You have the right to object to the processing of your personal data that are being processed for the purpose of the protection of legitimate interests of the Operator.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <p className="mb-4 font-medium">If you wish to exercise your rights, you can do so:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>By a letter addressed to NexusEdge (operated by Ridwan Mullick) at Eksara, Howrah 711114, West Bengal, India.</li>
                <li>By e-mail to: <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:underline font-medium">ridwan@puredetox.app</a></li>
              </ul>
            </div>
          </section>

          <div className="not-prose bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-lg">Company Details</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Company:</span> NexusEdge</li>
                  <li><span className="font-medium">Operator:</span> Ridwan Mullick</li>
                  <li><span className="font-medium">Email:</span> <a href="mailto:ridwan@puredetox.app" className="text-blue-400 hover:text-blue-300">ridwan@puredetox.app</a></li>
                  <li><span className="font-medium">Address:</span> Eksara, Howrah 711114</li>
                  <li><span className="font-medium">State:</span> West Bengal, India</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg">Privacy Rights</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Response Time:</span> Within 30 days</li>
                  <li><span className="font-medium">Support:</span> Available via email</li>
                  <li><span className="font-medium">Data Protection:</span> GDPR Compliant</li>
                  <li><span className="font-medium">Account Deletion:</span> <Link href="/account-deletion" className="text-blue-400 hover:text-blue-300">Delete Account</Link></li>
                  <li><span className="font-medium">Last Updated:</span> January 9, 2024</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="not-prose mt-12">
            <div className="border-t pt-8">
              <p className="text-sm opacity-70 mb-4">Related pages:</p>
              <div className="flex gap-6">
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