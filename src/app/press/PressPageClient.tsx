"use client";

import { Suspense } from 'react';
import MainLayout from "@/components/global/MainLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Mic, Globe } from "lucide-react";

// Types for press highlights
type PressHighlight = {
  date: string;
  title: string;
  publication: string;
  description: string;
  icon: React.ElementType;
};

// Empty arrays since we don't have press highlights yet
const PRESS_HIGHLIGHTS: PressHighlight[] = [];
const MEDIA_LOGOS: string[] = [];

export default function PressPageClient() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Press</span> & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the latest news, insights, and media coverage highlighting Sarvagyna&apos;s innovative AI solutions and global impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent <span className="gradient-text">Press Highlights</span>
          </h2>
          
          <div className="max-w-2xl mx-auto bg-gold-light/30 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gold-light/50 p-4 rounded-full">
                <Award className="h-12 w-12 text-gold-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Press Coverage Coming Soon
            </h3>
            
            <p className="text-lg mb-6 text-foreground/80">
              We're working on exciting developments that will be featured in the press soon. 
              Check back for updates on Sarvagyna's innovations and industry recognition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Featured in <span className="gradient-text">Global Media</span>
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white/50 rounded-lg p-8 shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-gold-light/50 p-4 rounded-full">
                <Globe className="h-12 w-12 text-gold-primary" />
              </div>
            </div>
            
            <p className="text-lg mb-4 text-foreground/80">
              Media coverage and partnerships are in development.
              Our team is focused on creating innovative AI solutions that will soon be recognized by leading publications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Want to <span className="gradient-text">Connect</span>?
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