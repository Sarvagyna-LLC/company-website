import { Metadata } from "next";
import PressPageClient from "./PressPageClient";

export const metadata: Metadata = {
  title: "Sarvagyna | Press & Media",
  description: "Discover the latest news, media coverage, and achievements of Sarvagyna in the AI innovation landscape.",
  keywords: ["AI press", "media coverage", "Sarvagyna news", "AI innovation", "technology achievements"],
  openGraph: {
    title: "Sarvagyna Press & Media",
    description: "Latest news and media coverage of our AI innovations.",
    type: "website",
    url: "/press",
  },
};

export default function PressPage() {
  return <PressPageClient />;
} 