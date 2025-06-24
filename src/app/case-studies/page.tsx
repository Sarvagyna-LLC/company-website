"use client";

import MainLayout from "@/components/global/MainLayout";
import { Briefcase, Lightbulb, Rocket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world AI solutions that drive transformative business outcomes
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-border rounded-lg p-10 shadow-gold-soft">
            <div className="flex justify-center mb-8">
              <div className="bg-gold-light/50 p-6 rounded-full">
                <Clock className="h-16 w-16 text-gold-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-6">
              Case Studies Coming Soon
            </h2>
            
            <p className="text-lg text-center mb-8 text-muted-foreground">
              As a growing startup, we're currently working with our first clients to build success stories. 
              Our case studies section will be updated soon with real-world examples of how our AI solutions 
              are transforming businesses across industries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gold-light/30 p-6 rounded-lg text-center">
                <Rocket className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge AI solutions tailored to business needs</p>
              </div>
              
              <div className="bg-gold-light/30 p-6 rounded-lg text-center">
                <Lightbulb className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Expertise</h3>
                <p className="text-sm text-muted-foreground">Deep technical knowledge and industry experience</p>
              </div>
              
              <div className="bg-gold-light/30 p-6 rounded-lg text-center">
                <Briefcase className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Results</h3>
                <p className="text-sm text-muted-foreground">Measurable outcomes and business transformation</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-primary text-white hover:bg-primary/90 font-medium px-8 py-2 shadow-md border border-primary/20 transition-all duration-300"
              >
                <Link href="/contact">Become Our Next Success Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}