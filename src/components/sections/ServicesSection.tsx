"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Wrench, FlaskConical, CheckCircle, LucideIcon, Zap, Brain, Database, Lock, Code, LineChart, Cloud } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  badge?: string;
  ctaText: string;
  onCtaClick: () => void;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  badge,
  ctaText,
  onCtaClick
}: ServiceCardProps) => (
  <Card className="border-border h-full flex flex-col transition-all hover:shadow-md">
    <CardHeader className="pb-4">
      <div className="flex justify-between items-start">
        <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {badge && (
          <Badge variant="outline" className="bg-primary/10 text-primary border-0">
            {badge}
          </Badge>
        )}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        onClick={onCtaClick}
        variant="outline"
        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        {ctaText}
      </Button>
    </CardFooter>
  </Card>
);

const technologies = [
  { name: "Natural Language Processing", icon: Brain, description: "Advanced language understanding and generation" },
  { name: "Deep Learning", icon: Zap, description: "Neural networks that learn from complex data patterns" },
  { name: "Computer Vision", icon: Bot, description: "AI systems that can interpret and analyze visual information" },
  { name: "Data Analytics", icon: Database, description: "Extract insights from large datasets" },
  { name: "Reinforcement Learning", icon: LineChart, description: "Systems that learn optimal behaviors through trial and error" },
  { name: "Secure Computation", icon: Lock, description: "Privacy-preserving AI algorithms and encryption" },
  { name: "API Integration", icon: Code, description: "Connect AI capabilities with your existing systems" },
  { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable, secure hosting for enterprise AI" },
];

export default function ServicesSection() {
  const handleLearnMore = (service: string) => {
    // This would typically open a detailed page or modal for the service
    console.log(`Learn more about ${service}`);
  };

  return (
    <section id="services" className="py-24 bg-gold-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-gold bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed for enterprises, from autonomous agents to cutting-edge research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Agents"
            description="Autonomous, intelligent agents that perform complex tasks and streamline business operations."
            icon={Bot}
            badge="Popular"
            features={[
              "Personal assistants for executives",
              "Customer service automation",
              "Intelligent workflow agents",
              "Multi-agent systems for complex operations",
              "Contextual adaptation to business domains"
            ]}
            ctaText="Learn More"
            onCtaClick={() => handleLearnMore("AI Agents")}
          />

          <ServiceCard
            title="AI Tools & Applications"
            description="Specialized tools that solve specific business problems with precision and efficiency."
            icon={Wrench}
            features={[
              "Document analysis and processing",
              "Predictive analytics dashboards",
              "Intelligent search solutions",
              "Decision support systems",
              "Natural language data querying"
            ]}
            ctaText="Explore Tools"
            onCtaClick={() => handleLearnMore("AI Tools")}
          />

          <ServiceCard
            title="AI Research & Development"
            description="Cutting-edge research into next-generation AI technologies and applications."
            icon={FlaskConical}
            badge="Enterprise"
            features={[
              "Custom AI model development",
              "Industry-specific AI solutions",
              "Research partnerships",
              "Ethics and governance frameworks",
              "Emerging technology exploration"
            ]}
            ctaText="Research Offerings"
            onCtaClick={() => handleLearnMore("AI Research")}
          />
        </div>

        {/* Technologies section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies We Leverage
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="p-6 border border-border rounded-lg bg-white hover:shadow-md transition-shadow flex flex-col items-center text-center cursor-pointer">
                    <tech.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-medium">{tech.name}</h4>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <tech.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{tech.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>

        {/* Enterprise callout */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-accent text-primary border-0">Enterprise Solutions</Badge>
              <h3 className="text-2xl font-bold mb-4">Custom AI Solutions for Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                Tailored AI strategies and implementations designed specifically for your industry challenges and business objectives. Our enterprise solutions combine all our capabilities into comprehensive transformation programs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90">
                  Contact Sales
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="bg-accent/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Implementation Time</h4>
                  <p className="text-2xl font-bold text-primary">4-8 Weeks</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">ROI Timeline</h4>
                  <p className="text-2xl font-bold text-primary">3-6 Months</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Success Rate</h4>
                  <p className="text-2xl font-bold text-primary">97%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Client Retention</h4>
                  <p className="text-2xl font-bold text-primary">94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
