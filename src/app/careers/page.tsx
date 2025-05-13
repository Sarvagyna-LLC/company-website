"use client";

import CareersSection from "@/components/sections/CareersSection";
import MainLayout from "@/components/global/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function CareersPage() {
  const router = useRouter();

  const scrollToOpenPositions = useCallback(() => {
    try {
      const careersSection = document.getElementById('open-positions');
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Open positions section not found');
      }
    } catch (error) {
      console.error('Scroll error:', error);
    }
  }, []);

  const navigateToTeam = useCallback(() => {
    try {
      console.log('Attempting to navigate to /team');
      console.trace('Navigation stack trace');
      
      // Verify router exists
      if (!router) {
        console.error('Router is not initialized');
        alert('Navigation error: Router not available');
        return;
      }

      // Attempt navigation
      router.push('/team');
    } catch (error) {
      console.error('Navigation error:', error);
      alert(`Failed to navigate: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, [router]);

  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        {/* Careers Landing Hero Section */}
        <section className="relative bg-gradient-to-br from-gold-light to-accent text-primary py-24 px-4">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future of AI with <span className="text-primary">Sarvagyna</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-primary/80">
              Join a team of passionate innovators pushing the boundaries of artificial intelligence. 
              We're not just building technology; we're creating solutions that transform industries.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={scrollToOpenPositions}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View Open Positions
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={navigateToTeam}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Why Join Sarvagyna Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Join <span className="bg-gradient-gold bg-clip-text text-transparent">Sarvagyna</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Sarvagyna, we believe in empowering talented individuals to make a real impact in the world of AI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cutting-Edge Innovation",
                  description: "Work on groundbreaking AI technologies that are reshaping industries.",
                  icon: "🚀"
                },
                {
                  title: "Collaborative Culture",
                  description: "Join a team that values creativity, diversity, and mutual growth.",
                  icon: "🤝"
                },
                {
                  title: "Impactful Work",
                  description: "Create solutions that make a meaningful difference in the world.",
                  icon: "💡"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-border rounded-lg p-6 text-center shadow-gold-soft hover:shadow-gold-medium transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="bg-gold-light/30 py-24">
          <CareersSection />
        </section>
      </div>
    </MainLayout>
  );
} 