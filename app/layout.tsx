import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://puredetox.app"),
  title: "Pure Detox — Android Digital Detox",
  description: "Block TikTok/Shorts, focus modes for ADHD, and ethical recovery. Mobile-first performance with compassionate design.",
  authors: [{ name: "NexusEdge", url: "https://puredetox.app" }],
  creator: "NexusEdge",
  publisher: "NexusEdge",
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
    title: "Pure Detox — Android Digital Detox",
    description: "Block TikTok/Shorts, focus modes for ADHD, and ethical recovery.",
    url: "/",
    images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "Pure Detox Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Detox — Android Digital Detox",
    description: "Block TikTok/Shorts, focus modes for ADHD, and ethical recovery.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="container py-12">
            <div className="grid md:grid-cols-4 gap-8">
               <div className="space-y-4">
                 <div className="flex items-center space-x-2">
                   <img 
                     src="/logo.jpg" 
                     alt="Pure Detox Logo" 
                     className="w-8 h-8 rounded-lg object-cover"
                     width={32}
                     height={32}
                   />
                   <h3 className="text-xl font-bold text-gray-900">Pure Detox</h3>
                 </div>
                <p className="text-gray-600 leading-relaxed">
                  Reclaim your focus. Block distractions on Android without root. Ethical commitment with compassionate recovery.
                </p>
                <div className="flex space-x-4">
                  <a href="mailto:ridwan@puredetox.app" className="text-blue-600 hover:text-blue-700 font-medium">
                    Contact Support
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                  <li><span className="text-gray-400">App Features</span></li>
                  <li><span className="text-gray-400">Focus Sessions</span></li>
                  <li><span className="text-gray-400">Block Management</span></li>
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


