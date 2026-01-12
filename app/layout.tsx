import type { Metadata } from "next";
import "./globals.css";
// We are removing the heavy Header component to keep the top clean
// If you need a minimal nav, it should be just a logo, but for this concept, empty is better.

export const metadata: Metadata = {
  metadataBase: new URL("https://puredetox.app"),
  title: "Pure Detox — A Quiet Boundary",
  description: "A calm utility to reduce digital noise. Block apps, greyscale screens, and reclaim attention without force.",
  authors: [{ name: "NexusEdge", url: "https://puredetox.app" }],
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
    title: "Pure Detox — A Quiet Boundary",
    description: "A calm utility to reduce digital noise. Not a productivity hack, just a tool for silence.",
    url: "https://puredetox.app/",
    images: [{ url: "https://puredetox.app/logo.jpg", width: 1200, height: 630, alt: "Pure Detox" }],
  },
  robots: { index: true, follow: true },
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
    <html lang="en">
      <head>
        {/* Importing Merriweather for the 'Book' feel */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-[#333333] bg-[#FDFBF7]">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-serif: 'Merriweather', serif;
                --font-sans: 'Inter', sans-serif;
              }
              body {
                font-family: var(--font-serif);
                line-height: 1.8;
              }
              h1, h2, h3 {
                font-family: var(--font-sans);
                letter-spacing: -0.02em;
              }
            `,
          }}
        />
        
        {children}
        
        {/* Minimal Footer */}
        <footer className="mt-32 pb-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-4 text-sm font-sans">
             <div className="flex gap-6">
                <a href="mailto:ridwan@puredetox.app" className="hover:underline">Contact</a>
                <a href="/privacy" className="hover:underline">Privacy</a>
                <a href="/terms" className="hover:underline">Terms</a>
             </div>
             <p>&copy; 2025 NexusEdge. Made for silence.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
