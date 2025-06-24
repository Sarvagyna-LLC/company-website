import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
  style: ['normal']
});

export const metadata: Metadata = {
  title: "Sarvagyna | AI Agents, Tools, and Research",
  description: "Sarvagyna is a tech startup specializing in AI agents, tools, and research for enterprise solutions.",
  keywords: "AI agents, AI tools, AI research, enterprise AI, Sarvagyna, artificial intelligence",
  metadataBase: new URL("https://sarvagyna.com"),
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" },
      { url: "/favicon/icon0.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon/apple-icon.png", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/favicon/icon0.svg", color: "#FFC000" }
    ]
  },
  manifest: "/favicon/manifest.json",
  openGraph: {
    title: "Sarvagyna | AI Agents, Tools, and Research",
    description: "Sarvagyna is a tech startup specializing in AI agents, tools, and research for enterprise solutions.",
    url: "https://sarvagyna.com",
    siteName: "Sarvagyna",
    images: [
      {
        url: "/favicon/icon1.png", // Using existing image instead of missing og-image.jpg
        width: 1200,
        height: 630,
        alt: "Sarvagyna - AI Agents, Tools, and Research",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvagyna | AI Agents, Tools, and Research",
    description: "Sarvagyna is a tech startup specializing in AI agents, tools, and research for enterprise solutions.",
    images: ["/favicon/icon1.png"], // Using existing image instead of missing og-image.jpg
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sarvagyna.com",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sarvagyna AI"
  },
  // Fix for deprecated apple-mobile-web-app-capable warning
  other: {
    "mobile-web-app-capable": "yes"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFC000",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimizations for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical font weights for faster LCP */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        
        {/* Critical CSS hint */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for LCP optimization */
            .hero-text { 
              font-display: swap; 
              font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
            }
            .text-4xl, .text-5xl, .text-6xl, .text-7xl { 
              font-display: swap; 
              will-change: auto;
            }
            /* Reduce layout shift */
            .min-h-\\[90vh\\] { min-height: 90vh; }
            /* Optimize font rendering */
            body { 
              font-display: swap;
              text-rendering: optimizeSpeed;
            }
          `
        }} />
      </head>

      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
        suppressHydrationWarning
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
