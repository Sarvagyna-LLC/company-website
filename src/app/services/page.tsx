"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
} 