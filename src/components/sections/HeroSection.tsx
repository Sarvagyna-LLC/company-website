"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { ArrowRight, Zap, Shield, Brain, Download } from "lucide-react";
import DemoRequestForm from "@/components/forms/DemoRequestForm";

export default function HeroSection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative min-h-[60vh] flex items-center py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-pattern opacity-70"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-light-gold/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="animate-slide-up space-y-6">
            <div className="inline-block bg-accent/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-4">
              <span className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                🚀 Next-Gen AI Startup
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Sarvagyna
              </span>{" "}
              <span className="block mt-2">
                AI Solutions for Tomorrow's Businesses
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
              We're a passionate team building cutting-edge AI tools that help businesses of all sizes automate, optimize, and grow. Join us on our mission to make AI accessible and impactful.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 text-white px-6 py-4 h-auto rounded-xl transition-all duration-300 text-base"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 h-auto rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-base"
                    size="lg"
                  >
                    Request Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Request a Personalized Demo</DialogTitle>
                    <DialogDescription className="text-center">
                      Fill out the form below and our team will reach out to schedule your personalized demo.
                    </DialogDescription>
                  </DialogHeader>
                  <DemoRequestForm onSuccess={() => setIsDemoOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Trusted by leading enterprises worldwide
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {/* Placeholder for company logos - Replace with real logos */}
                <div className="opacity-60 hover:opacity-100 transition-opacity w-24 h-10 bg-zinc-700/10 rounded flex items-center justify-center font-bold text-primary/70">
                  ACME Inc
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity w-24 h-10 bg-zinc-700/10 rounded flex items-center justify-center font-bold text-primary/70">
                  TechCorp
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity w-24 h-10 bg-zinc-700/10 rounded flex items-center justify-center font-bold text-primary/70">
                  Innovate
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity w-24 h-10 bg-zinc-700/10 rounded flex items-center justify-center font-bold text-primary/70">
                  FutureLabs
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-8 animate-slide-in-right">
              <div className="absolute -top-6 -right-6 bg-primary text-white p-3 rounded-full shadow-lg">
                <Brain className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold mb-4">Enterprise AI Suite</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Agents</h4>
                    <p className="text-base text-muted-foreground">Autonomous AI solutions that handle complex business tasks</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-light-gold flex items-center justify-center text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Tools</h4>
                    <p className="text-base text-muted-foreground">Specialized applications for industry-specific challenges</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Research</h4>
                    <p className="text-base text-muted-foreground">Cutting-edge R&D to solve tomorrow's complex problems</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => scrollToSection("services")}
                >
                  <span>Explore All Solutions</span>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
