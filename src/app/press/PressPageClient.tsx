"use client";

import { Suspense } from 'react';
import MainLayout from "@/components/global/MainLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Mic, Globe } from "lucide-react";

// Predefine static data for faster rendering
const PRESS_HIGHLIGHTS = [
  {
    date: "May 2024",
    title: "Sarvagyna Wins Global AI Innovation Award",
    publication: "Tech Innovators Magazine",
    description: "Recognized for groundbreaking AI solutions transforming enterprise technology.",
    icon: Award
  },
  {
    date: "March 2024",
    title: "Revolutionizing AI: An Exclusive Interview",
    publication: "AI Today Podcast",
    description: "Our CEO discusses the future of artificial intelligence and ethical AI development.",
    icon: Mic
  },
  {
    date: "January 2024",
    title: "Global Expansion and Research Milestones",
    publication: "International Business Times",
    description: "Sarvagyna expands international research partnerships and opens new innovation centers.",
    icon: Globe
  }
];

const MEDIA_LOGOS = [
  "/logos/tech-innovators.svg",
  "/logos/ai-today.svg", 
  "/logos/international-business.svg",
  "/logos/wired.svg",
  "/logos/forbes.svg"
];

export default function PressPageClient() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Press</span> & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the latest news, insights, and media coverage highlighting Sarvagyna&apos;s innovative AI solutions and global impact.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="container mx-auto text-center py-24">Loading press highlights...</div>}>
        <section className="py-24 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Recent <span className="bg-gradient-gold bg-clip-text text-transparent">Press Highlights</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {PRESS_HIGHLIGHTS.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-gold-light/30 rounded-lg p-6 hover:shadow-md transition-all"
                  style={{ transitionProperty: 'box-shadow, transform' }}
                >
                  <div className="flex items-center mb-4">
                    <highlight.icon className="h-8 w-8 text-primary mr-4" />
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {highlight.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-4">{highlight.description}</p>
                  <p className="font-medium text-primary">{highlight.publication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<div className="container mx-auto text-center py-24">Loading media logos...</div>}>
        <section className="py-24 bg-gold-light/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Featured in <span className="bg-gradient-gold bg-clip-text text-transparent">Global Media</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-all">
              {MEDIA_LOGOS.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Media Logo ${index + 1}`} 
                  width={128}
                  height={64}
                  loading="lazy"
                  className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      <section className="py-24 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Want to <span className="bg-gradient-gold bg-clip-text text-transparent">Connect</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            For media inquiries, press releases, or interview requests, please contact our media relations team.
          </p>
          <Button 
            asChild 
            className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg"
          >
            <Link href="/contact">Contact Media Relations</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
} 