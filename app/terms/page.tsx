import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Conditions of Use - Pure Detox",
  description: "Terms and conditions governing the use of Pure Detox application and services.",
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
      <main className="container py-12 max-w-5xl">
        <article className="prose prose-lg max-w-none">
          <header className="not-prose mb-12 text-center border-b pb-8">
            <h1 className="text-4xl font-bold mb-4">Conditions of Use</h1>
            <p className="text-lg opacity-70">Effective Date: September 23, 2025</p>
            <p className="text-sm opacity-60 mt-2">NexusEdge - Pure Detox Application & Service</p>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Recitals</h2>
            <h3 className="text-xl font-semibold mb-4">1.1 Definitions</h3>
            <p className="mb-4">For the purpose hereof, including any parts hereof included by reference, (in particular the Privacy Policy) the terms below have the following meaning:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <strong>&quot;Application&quot;</strong> means an Android application of the same name through which the Service is provided;
              </div>
              <div>
                <strong>&quot;Copyright Act&quot;</strong> means the Copyright Act, 1957 (Act No. 14 of 1957) as amended by the Copyright (Amendment) Act, 2012, and as may be amended from time to time;
              </div>
              <div>
                <strong>&quot;Indian Contract Law&quot;</strong> shall mean the Indian Contract Act, 1872 (Act No. 9 of 1872), as amended from time to time, and includes other applicable laws relating to civil obligations in force within the territory of India;
              </div>
              <div>
                <strong>&quot;Conditions&quot;</strong> mean these Conditions of Use of AppBlock Service;
              </div>
              <div>
                <strong>&quot;Regulation&quot;</strong> means Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation);
              </div>
              <div>
                <strong>&quot;Profile&quot;</strong> means a User&apos;s account created by registration;
              </div>
              <div>
                <strong>&quot;Operator&quot;</strong> means MobileSoft s.r.o., identification no.: 02573857, a company with its registered office at Ceskoskalick� 650, 549 41 Cerven� Kostelec, registered in the Commercial Register administered by the Regional Court in Hradec Kr�lov�, section C, file 33165;
              </div>
              <div>
                <strong>&quot;Service&quot;</strong> means service for users provided in the AppBlock application;
              </div>
              <div>
                <strong>&quot;User&quot;</strong> means any individual who uses the Application or a visitor to the Web Interface;
              </div>
              <div>
                <strong>&quot;Privacy Policy&quot;</strong> means the privacy policy that is included herein by reference and comprises a separate related document at <a href="/privacy" className="text-blue-600 hover:underline">https://puredetox.app/privacy</a>;
              </div>
              <div>
                <strong>&quot;Web Interface&quot;</strong> means content or web application on www.puredetox.app domain.
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Basic Provisions and Registration of the User</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p><strong>2.1</strong> The Operator provides PureDetox Service that may be used by the Users through the Application or the Web Interface. The Service enables them to temporarily block other applications, using a wide range of conditions.</p>
              </div>
              
              <p><strong>2.2</strong> Without registration, the Users can use basic PureDetox services, like blocking, time tracking and similar.</p>
              
              <p><strong>2.3</strong> Users may register free of charge through the Application. In the course of registration, Users enter their password and their email. The Registration is made online. After a User&apos;s Profile is created, the User may add other information.</p>
              
              <p><strong>2.4</strong> Users are fully liable for the use of the user name, password and/or other login data entered during the registration process. Users are obliged to keep their login data confidential and secure and to adopt adequate measures to maintain the security and confidentiality of their login data (including changing their login data regularly). Should their login data be revealed, stolen or misused, the Users are obliged to change their login data immediately and inform the Operator by sending an e-mail to <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:underline font-medium">ridwan@puredetox.app</a>.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Rights and Obligations of the User</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p><strong>3.1</strong> In the course of using the Service, the Users are obliged to observe the Conditions.</p>
              
              <p><strong>3.2</strong> By using the Service, the User undertakes to:</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 ml-4">
                <ul className="space-y-3">
                  <li><strong>(i)</strong> fulfil all of his/her obligations arising from the generally binding laws and regulations;</li>
                  <li><strong>(ii)</strong> refrain from any infringement of intellectual property (copyright, trademarks, patents etc.) of the Operator or third parties, including, but not limited to, making accessible, disclosing, copying, distributing, misusing or using illegitimately in any other way the content of the Service, i.e. photos, audiovisual records etc. protected by the Copyright Act or other generally binding laws and regulations.</li>
                </ul>
              </div>
              
              <p><strong>3.3</strong> Trademarks, logos, graphics, images, photos, animations, videos and texts that are displayed through the Service, may not be reproduced, used, published, distributed, sold or shown without the prior written consent of the Operator.</p>
              
              <p><strong>3.4</strong> The User undertakes that he/she will inform the Operator without undue delay about any breach of any obligations specified herein. Each User is obliged to inform the Operator about a breach of the Conditions by another User and to notify any undesirable or improper content in the Service published by another User by sending a message to the Operator.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Operator&apos;s Liability</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p><strong>4.1</strong> In the course of the use of the Services, the Operator is not liable for any services supplied by third parties, such as the quality of the Internet connection, the quality of telecommunication services etc.</p>
              
              <p><strong>4.2</strong> The Operator is not liable in any way for unauthorized use of the Service or a Profile.</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p><strong>4.3</strong> The Operator is not liable in case the use of the Service by a User is prevented or restricted as a result of the Application or the Web Interface being inaccessible due to any breakdown in the Internet operation or other circumstances of a technical nature that the Operator is unable to influence or the solution of which requires the co-operation of third parties. The Operator is not liable for any loss of data of the User, with the exception of liability for a breach of personal data security under the relevant provisions of the Regulation. The Operator reserves the right to restrict or temporarily suspend the operation of the Service without any compensation.</p>
              </div>
              
              <p><strong>4.4</strong> The Operator is entitled to discontinue the provision of the Services to a User should the User breach any of the Conditions specified herein. The Operator is not liable for any loss caused to the User by a suspension of the Services and the User is not entitled to any compensation for any loss caused to the User by such a suspension.</p>
              
              <p><strong>4.5</strong> The User bears all legal consequences that arise as a result of a breach of obligations of the User, namely the obligations hereunder or obligations arising from the generally binding laws and regulations. The User is obliged to reimburse the Operator for any costs incurred as a result of third party claims against the Operator arising from any breach of obligations by the User. The entitlement of the Operator and third parties to compensation for any loss (damage to property and non-proprietary damage) resulting from a breach of any of the obligations of the User is not prejudiced.</p>
              
              <p><strong>4.6</strong> The User is not entitled to hold the Operator liable for any legal claims of third parties that arise based on registration, by using the Services, the Application or the Web Interface or in connection therewith.</p>
              
              <p><strong>4.7</strong> The operator is not in any way liable for any damage caused to the User&apos;s electronic devices running our Application or Services, nor any damage to any other software it may run.</p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p><strong>4.8</strong> The User expressly acknowledges that by installing and using our Application the User may, in its own discretion, temporarily block websites, applications or notifications which is the main purpose of our Application and that by doing so the User will prevent any use of such blocked websites, applications or notifications on its electronic devices for any purpose.</p>
              </div>
              
              <p><strong>4.9</strong> The User expressly acknowledges any and all risks connected with the use of our Application for the purposes of blocking websites, applications or notifications and acknowledges that the Operator shall not in any way be liable for any damage, harm or any other injury caused by blocking of the websites, applications or notifications by the User through our Application.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Application</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p><strong>5.1</strong> The processes of Registration and using the Services are described in the relevant sections of the Application and the Web Interface and may be amended or changed by the Operator at any time, from the point of view of graphic layout, content or otherwise. When completing the Registration and using the Services, the User is obliged to observe the relevant instructions in the Application or the Web Interface, unless such instructions are given herein. Any instructions concerning the technical aspects of the Registration are considered as instructions given hereunder and are binding.</p>
              
              <p><strong>5.2</strong> The Operator will actively strive to prevent any technical issues, however, the Operator is unable to guarantee uninterrupted accessibility of the Application (or the Services).</p>
              
              <p><strong>5.3</strong> The Application may not be adapted or disseminated without the Operator&apos;s consent. Any use of the Application, or any parts or content thereof, by the User or for other than intended purposes in accordance with the Conditions, in particular any unauthorised dissemination of the content, is prohibited.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Licence Provisions</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p><strong>6.1</strong> The Operator is the exclusive copyright holder as well as the holder of other rights related to the Service, the Application and the Web Interface.</p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p><strong>6.2</strong> The Operator grants to the User the licence to the Application and the related databases to be used by the User in the course of using the Application. The licence is granted free of charge, is non-exclusive, time-restricted for the period of use of the Application and without territorial limitations. The licence is granted for the use of the Application and databases in the manner and for the purposes arising from the Conditions and the purpose and function of the Application. The User is liable to observe any changes in the named manners and purposes.</p>
              </div>
              
              <p><strong>6.3</strong> Specifically, the User may not change the content of the Application or the Web Interface, reproduce, translate, disseminate, publish the content thereof, create derived works, disclose it to the public, store it in any extent and in any manner etc.</p>
              
              <p><strong>6.4</strong> Any monitoring or interference with the technical or factual content of the Application and the Web Interface is prohibited (such as decomposition, decompiling, decoding or back analysis of any software or aspect incorporated in the Application or Web Interface). The User is not entitled to make any backup copies of any content of the Application and the Web Interface. The User understands that any unauthorized interference with the Application and the Web Interface or any unauthorized use of any rights connected with the Application and Web Interface (specifically the copyrights) may cause damage to the Operator that will be claimed against the User.</p>
              
              <p><strong>6.5</strong> The User understands that the Service may include intellectual property of third parties. The User does not acquire any rights in regard to the use of any trademarks, business names, logos, copyrights or any other types of intellectual property of the Operator or third parties. Any trademarks used in the Application are trademarks of third parties that are not related to the Operator.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Final Provisions</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p><strong>7.1</strong> These Conditions govern all legal relations between the Operator and the User that arise in the course of the use of the Service. &quot;The use of the Service, the Conditions, and the legal relations between the Operator and the User are governed by the laws of India, specifically by the provisions of the Indian Contract Act, 1872, as amended from time to time.&quot; In case of any discrepancies, the Conditions prevail over any directory provisions of the Indian Contract Law. The Operator and the User agree that commercial usage will not be taken into consideration in the fulfilment of the Conditions.</p>
              </div>
              
              <p><strong>7.2</strong> The Operator is entitled to set off any of its claims against the claims of the User, in particular any compensation for damage, loss, unjust enrichment, fees, costs and other performances. The User is not entitled to set off any of his/her claims against the Operator&apos;s claims or assign their claims against the Operator. The User hereby expressly agrees and gives his/her consent to the assignment or transfer of the rights and obligations of the Operator or any part thereof to any third party or parties. The Operator undertakes to inform the User about any assignment or transfer.</p>
              
              <p><strong>7.3</strong> No unenforceability or invalidity of any provision hereof will result in the unenforceability or invalidity hereof as a whole. The Operator undertakes to replace such a provision with a valid provision that will be as close to the original one from the point of view of factual content and the economic effect as possible.</p>
              
              <p><strong>7.4</strong> The Operator is entitled to change the Conditions unilaterally.</p>
              
              <div className="bg-gray-900 text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">The Conditions come into force and effect on September 23, 2025.</p>
              </div>
            </div>
          </section>

          <div className="not-prose bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Legal Contact Information</h3>
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
                <h4 className="font-semibold mb-4 text-lg">Legal Information</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Governing Law:</span> Laws of India</li>
                  <li><span className="font-medium">Jurisdiction:</span> Kolkata, West Bengal</li>
                  <li><span className="font-medium">Response Time:</span> Within 30 days</li>
                  <li><span className="font-medium">Effective Date:</span> September 23, 2025</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="not-prose mt-12">
            <div className="border-t pt-8">
              <p className="text-sm opacity-70 mb-4">Related pages:</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
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