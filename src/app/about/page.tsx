"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import AboutPageSection from "@/components/sections/AboutPageSection";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <AboutPageSection />
      </div>
      <Footer />
    </main>
  );
} 