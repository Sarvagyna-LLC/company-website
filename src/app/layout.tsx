import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
      <head />

      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
