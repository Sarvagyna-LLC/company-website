"use client";

import { Button } from "@/components/ui/button";
import { ScrollText, TrendingUp, Lightbulb, Heart, Sparkles, Shield } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-light-gold/30 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/20 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-gold bg-clip-text text-transparent">Sarvagyna</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of enterprise AI with innovative solutions that transform industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Company story/about image - left side */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              {/* You would replace this with a real image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent to-gold-light opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <ScrollText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                  <p className="text-muted-foreground">
                    Founded in 2023 by AI experts and industry veterans with a vision to bridge the gap between cutting-edge AI research and practical enterprise solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg border border-border p-6 w-72">
              <div className="flex gap-4 items-center mb-3">
                <div className="bg-accent rounded-full p-2 flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Growth</h4>
                  <p className="text-sm text-muted-foreground">300% YoY</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-light-gold rounded-full p-2 flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">15+ AI Patents</p>
                </div>
              </div>
            </div>
          </div>

          {/* About content - right side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                Empowering Enterprises with Next-Gen AI
              </h3>
              <p className="text-muted-foreground">
                At Sarvagyna, we're on a mission to transform how enterprises operate by providing advanced AI solutions that are both powerful and practical. Our team of world-class AI researchers and engineers work tirelessly to push the boundaries of what's possible.
              </p>
            </div>

            {/* Tabs for Mission, Vision, Values */}
            <div className="mt-8">
              <div className="flex space-x-1 border-b mb-6">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                    activeTab === "mission"
                      ? "bg-gradient-gold text-white"
                      : "hover:bg-muted"
                  }`}
                  aria-selected={activeTab === "mission"}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                    activeTab === "vision"
                      ? "bg-gradient-gold text-white"
                      : "hover:bg-muted"
                  }`}
                  aria-selected={activeTab === "vision"}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab("values")}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                    activeTab === "values"
                      ? "bg-gradient-gold text-white"
                      : "hover:bg-muted"
                  }`}
                  aria-selected={activeTab === "values"}
                >
                  Core Values
                </button>
              </div>

              <div className="min-h-[200px]">
                {activeTab === "mission" && (
                  <div className="animate-fade-in">
                    <div className="flex gap-4 mb-4">
                      <div className="bg-accent rounded-full p-2 h-fit flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                        <p className="text-muted-foreground">
                          To democratize access to advanced AI capabilities by developing intuitive, powerful solutions that solve real-world enterprise challenges while maintaining the highest standards of ethics and responsibility.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="animate-fade-in">
                    <div className="flex gap-4 mb-4">
                      <div className="bg-light-gold rounded-full p-2 h-fit flex-shrink-0">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Our Vision</h4>
                        <p className="text-muted-foreground">
                          A world where AI seamlessly augments human potential, enabling businesses to operate at unprecedented levels of efficiency, creativity, and impact, all while ensuring technology remains human-centered and beneficial for society.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "values" && (
                  <div className="animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex gap-3">
                        <div className="bg-accent rounded-full p-2 h-fit flex-shrink-0">
                          <Heart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-medium">Ethical Innovation</h5>
                          <p className="text-sm text-muted-foreground">Advancing AI with responsibility</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-light-gold rounded-full p-2 h-fit flex-shrink-0">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-medium">Customer Trust</h5>
                          <p className="text-sm text-muted-foreground">Building lasting relationships</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-accent rounded-full p-2 h-fit flex-shrink-0">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-medium">Continuous Learning</h5>
                          <p className="text-sm text-muted-foreground">Growing and adapting always</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-light-gold rounded-full p-2 h-fit flex-shrink-0">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-medium">Visionary Thinking</h5>
                          <p className="text-sm text-muted-foreground">Pushing boundaries forward</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
