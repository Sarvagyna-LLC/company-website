"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ResearchSection from "@/components/sections/ResearchSection";

export default function Research() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <ResearchSection />
      </div>
      <Footer />
    </main>
  );
} 