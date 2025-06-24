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
    <section className="relative min-h-[90vh] flex items-center py-12 md:py-24 pb-24 md:pb-48 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-accent/20"></div>
        {/* Reduced blur effects - only load after initial render */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-light-gold/30 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content - removed heavy animations */}
          <div className="space-y-6">
            <div className="inline-block bg-accent/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-4 shadow-sm border border-gold-primary/20">
              <span className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-gold-primary" />
                <span className="font-semibold">India's First FullStack Ai AgentOps Platform</span>
              </span>
            </div>

            {/* Simplified heading - removed complex gradients and animations */}
            <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">
                Sarvagyna
              </span>
              <span className="block mt-4">
                <span className="gradient-text">
                  AI Solutions
                </span>{" "}
                <span className="text-foreground">
                  for{" "}
                  <span className="font-extrabold relative inline-block">
                    Tomorrow's
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#A86523] to-[#E9A319] rounded-full opacity-80"></span>
                  </span>{" "}
                  Businesses
                </span>
              </span>
            </h1>

            {/* Simplified paragraph - removed text shadow */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-lg">
              We're a passionate team building cutting-edge AI tools that help businesses of all sizes automate, optimize, and grow. Join us on our mission to make AI accessible and impactful.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-gold-primary to-gold-secondary hover:from-gold-secondary hover:to-gold-primary text-white font-medium px-4 sm:px-6 py-3 sm:py-4 h-auto rounded-xl transition-colors duration-300 text-sm sm:text-base shadow-md hover:shadow-lg border border-gold-primary/20 w-full sm:w-auto"
                    size="lg"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
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
          </div>

          {/* Feature highlights - simplified animations */}
          <div className="relative mt-8 lg:mt-0">
            {/* Simplified decorative element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full opacity-50 hidden md:block"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-4 sm:p-6 md:p-8">
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg">
                <Brain className="h-6 w-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Enterprise AI Suite</h3>

              <div className="space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">AI Agents</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Autonomous AI solutions that handle complex business tasks</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-gold flex items-center justify-center text-primary">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">AI Tools</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Specialized applications for industry-specific challenges</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                    <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">AI Research</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Cutting-edge R&D to solve tomorrow's complex problems</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full justify-between font-medium hover:bg-accent/20 hover:text-primary transition-colors duration-300 border-gold-primary/30 hover:border-gold-primary/60"
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
