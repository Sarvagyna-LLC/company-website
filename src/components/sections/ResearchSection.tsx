"use client";

import { Book, Brain, Code, Lock, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const researchAreas = [
  {
    name: "AI Ethics & Governance",
    icon: Lock,
    description: "Developing responsible AI frameworks that prioritize transparency, fairness, and accountability.",
    details: [
      "Bias detection and mitigation",
      "Ethical AI decision-making models",
      "Regulatory compliance strategies"
    ]
  },
  {
    name: "Advanced Machine Learning",
    icon: Brain,
    description: "Pushing the boundaries of machine learning with cutting-edge algorithmic research.",
    details: [
      "Generative AI models",
      "Transfer learning techniques",
      "Self-supervised learning"
    ]
  },
  {
    name: "Natural Language Processing",
    icon: Book,
    description: "Advancing language understanding and generation capabilities.",
    details: [
      "Multilingual AI systems",
      "Contextual language models",
      "Semantic understanding"
    ]
  },
  {
    name: "AI Infrastructure",
    icon: Cloud,
    description: "Developing scalable and efficient computational architectures for AI.",
    details: [
      "Distributed computing",
      "Edge AI optimization",
      "High-performance computing"
    ]
  },
  {
    name: "Computational Intelligence",
    icon: Code,
    description: "Exploring innovative computational approaches to complex problem-solving.",
    details: [
      "Evolutionary algorithms",
      "Quantum machine learning",
      "Neuromorphic computing"
    ]
  },
  {
    name: "Applied AI Research",
    icon: Brain,
    description: "Translating theoretical advancements into practical, industry-changing solutions.",
    details: [
      "Cross-domain AI applications",
      "Interdisciplinary research",
      "Proof-of-concept prototyping"
    ]
  }
];

export default function ResearchSection() {
  return (
    <section className="py-24 bg-gold-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-gold bg-clip-text text-transparent">Research Frontiers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering AI research that pushes the boundaries of technological innovation and transforms industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="border-border h-full flex flex-col transition-all hover:shadow-md cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-0">
                        Research
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{area.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <area.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{area.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Research Collaboration Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-accent text-primary border-0">Research Collaboration</Badge>
              <h3 className="text-2xl font-bold mb-4">Partner with Our Research Team</h3>
              <p className="text-muted-foreground mb-6">
                Collaborate with our world-class research team to drive innovation, develop groundbreaking AI solutions, 
                and tackle complex challenges across various domains.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90">
                  Explore Partnerships
                </Button>
                <Button className="border-primary text-primary hover:bg-primary/10">
                  Download Research Whitepaper
                </Button>
              </div>
            </div>
            <div className="bg-accent/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Published Papers</h4>
                  <p className="text-2xl font-bold text-primary">42+</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Research Grants</h4>
                  <p className="text-2xl font-bold text-primary">15</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Active Projects</h4>
                  <p className="text-2xl font-bold text-primary">23</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Collaborations</h4>
                  <p className="text-2xl font-bold text-primary">8+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 