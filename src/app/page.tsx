import { Suspense } from "react";
import MainLayout from "@/components/global/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import IndustriesSection from "@/components/sections/IndustriesSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <CTASection />
      <ContactSection />
    </MainLayout>
  );
}
