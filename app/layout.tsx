import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Detox — Android Digital Detox",
  description: "Block TikTok/Shorts, focus modes for ADHD, and ethical recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


