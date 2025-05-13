import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Careers at Sarvagyna | Join Our AI Innovation Team",
  description: "Explore exciting career opportunities at Sarvagyna. We're looking for passionate AI professionals to help shape the future of artificial intelligence.",
  keywords: ["AI jobs", "machine learning careers", "tech jobs", "AI startup careers", "Sarvagyna careers"],
  openGraph: {
    title: "Careers at Sarvagyna | Join Our AI Innovation Team",
    description: "Explore exciting career opportunities at Sarvagyna.",
    type: "website",
    url: "/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
} 