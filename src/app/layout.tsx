import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";

const inter = Inter({ 
  subsets: ["latin"], 
  display: 'swap',
  preload: true 
});

export const metadata: Metadata = {
  title: "Sarvagyna | AI Agents, Tools, and Research",
  description: "Sarvagyna is a tech startup specializing in AI agents, tools, and research for enterprise solutions.",
  keywords: "AI agents, AI tools, AI research, enterprise AI, Sarvagyna, artificial intelligence",
  metadataBase: new URL("https://sarvagyna.com"),
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
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
