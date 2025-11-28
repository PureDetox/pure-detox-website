import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://puredetox.app"),
  title: {
    default: "Pure Detox — Android Digital Detox App | Block Apps & Sites",
    template: "%s | Pure Detox"
  },
  description: "Download PureDetox on Google Play Store. Block TikTok, YouTube Shorts, and distracting apps on Android without root access. ADHD-friendly focus sessions, screen time control, and digital wellbeing tools. Free app blocker for productivity.",
  keywords: [
    "app blocker android",
    "block apps android",
    "digital detox app",
    "block tiktok android",
    "block youtube shorts",
    "screen time control",
    "focus app android",
    "productivity app",
    "adhd focus app",
    "website blocker android",
    "social media blocker",
    "app lock android",
    "digital wellbeing",
    "reduce screen time",
    "block distracting apps"
  ],
  authors: [{ name: "NexusEdge", url: "https://puredetox.app" }],
  creator: "NexusEdge",
  publisher: "NexusEdge",
  category: "Productivity",
  classification: "Productivity Application",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    siteName: "Pure Detox",
    title: "Pure Detox — Android Digital Detox App | Block Apps & Sites",
    description: "Download PureDetox on Google Play. Block TikTok, YouTube Shorts, and distracting apps on Android. ADHD-friendly focus sessions and screen time control. Free app blocker for productivity.",
    url: "https://puredetox.app/",
    images: [
      { 
        url: "https://puredetox.app/logo.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Pure Detox - Android App Blocker and Digital Detox App" 
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Detox — Android Digital Detox App",
    description: "Block TikTok, YouTube Shorts, and distracting apps on Android. Free app blocker for productivity and digital wellbeing.",
    images: ["https://puredetox.app/logo.jpg"],
    creator: "@puredetox",
  },
  alternates: { 
    canonical: "https://puredetox.app/",
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Replace with actual verification code from Google Search Console
  // },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-gray-900 antialiased">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --ease: cubic-bezier(.2,.8,.2,1);
                color-scheme: light;
              }
              .container {
                max-width: 72rem;
                margin-inline: auto;
                padding-inline: 1rem;
              }
              .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                height: 2.75rem;
                padding-inline: 1rem;
                border-radius: 9999px;
                transition: all 0.2s ease;
              }
              .hero-skeleton {
                min-height: 240px;
              }
              * {
                color-scheme: light;
              }
            `,
          }}
        />
        
        <Header />
        {children}
        
        {/* Global Footer - Appears on Every Page */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="container py-8">
            <div className="grid md:grid-cols-4 gap-6">
               <div className="space-y-4">
                 <div className="flex items-center space-x-2">
                   <img 
                     src="/logo.jpg" 
                     alt="Pure Detox - Android App Blocker and Digital Detox App Logo" 
                     className="w-8 h-8 rounded-lg object-cover"
                     width={32}
                     height={32}
                     loading="lazy"
                   />
                   <h3 className="text-xl font-bold text-gray-900">Pure Detox</h3>
                 </div>
                <p className="text-gray-600 leading-relaxed">
                  Reclaim your focus. Block distractions on Android without root. Ethical commitment with compassionate recovery.
                </p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.nexusedge.puredetox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Download PureDetox app on Google Play Store - Android app blocker"
                      className="h-10 w-auto"
                      width={135}
                      height={40}
                      loading="lazy"
                    />
                  </a>
                  <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Contact Support
                  </a>
                </div>
              </div>
              
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                       <ul className="space-y-3 text-gray-600">
                         <li><a href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                         <li><a href="/permissions" className="hover:text-blue-600 transition-colors">Permissions</a></li>
                         <li><span className="text-gray-400">App Features</span></li>
                         <li><span className="text-gray-400">Focus Sessions</span></li>
                       </ul>
                     </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="mailto:ridwan@puredetox.app" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
                  <li><a href="mailto:ridwan@puredetox.app" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                  <li><span className="text-gray-400">FAQ (Coming Soon)</span></li>
                  <li><span className="text-gray-400">User Guide</span></li>
                </ul>
              </div>
              
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-4">Legal & Company</h4>
                       <ul className="space-y-3 text-gray-600">
                         <li><a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                         <li><a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                         <li><a href="/account-deletion" className="hover:text-red-600 transition-colors">Delete Account</a></li>
                         <li><span className="text-sm">NexusEdge</span></li>
                         <li><span className="text-sm">Kolkata, West Bengal, India</span></li>
                       </ul>
                     </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-600 text-sm">
                  <p>&copy; 2025 NexusEdge. All rights reserved.</p>
                </div>
                <div className="text-gray-600 text-sm">
                  <p>Made with ❤️ for digital wellbeing • Contact: ridwan@puredetox.app</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


