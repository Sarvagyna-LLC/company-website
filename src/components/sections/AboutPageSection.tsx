"use client";

import { Target, Globe, Users, Trophy, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const companyValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing the boundaries of AI technology and exploring groundbreaking solutions."
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "Committed to developing responsible AI that prioritizes transparency, fairness, and human values."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Fostering a culture of teamwork, diversity, and collective intelligence."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Solving complex challenges with AI solutions that have worldwide significance."
  }
];

const milestones = [
  {
    year: "March 2025",
    title: "Founding",
    description: "Established with a vision to revolutionize AI technology and its applications."
  },
  {
    year: "May 2025",
    title: "Idea Finalized",
    description: "Completed the conceptualization and planning of our core AI solutions."
  },
  {
    year: "June 2025",
    title: "Team Formation",
    description: "Assembled our talented team of AI researchers, engineers, and business experts."
  },
  {
    year: "July 2025",
    title: "First Release",
    description: "Preparing to launch version 0.1 of our AI platform and solutions."
  }
];

export default function AboutPageSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gold-light/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Company Introduction */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Sarvagyna</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We are a pioneering AI research and solutions company dedicated to transforming industries 
            through cutting-edge artificial intelligence technologies. Our mission is to develop intelligent 
            systems that enhance human potential and solve complex global challenges.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card 
                key={index} 
                className="border-border h-full flex flex-col transition-all hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="h-16 w-16 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 bg-primary/20 h-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} relative`}
                >
                  <Card className="w-full md:w-96 border-border hover:shadow-md transition-all">
                    <CardHeader>
                      <Badge className="w-fit bg-primary/10 text-primary border-0">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-xl mt-2">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-accent text-primary border-0">Join Our Mission</Badge>
              <h3 className="text-2xl font-bold mb-4">Collaborate and Innovate with Sarvagyna</h3>
              <p className="text-muted-foreground mb-6">
                Interested in pushing the boundaries of AI? Whether you're a potential partner, 
                researcher, or future team member, we're always looking for passionate innovators.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 transition-all duration-300 rounded-xl">
                  Explore Careers
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="bg-accent/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Team Members</h4>
                  <p className="text-2xl font-bold text-primary">5+</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Research Projects</h4>
                  <p className="text-2xl font-bold text-primary">1+</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Patents</h4>
                  <p className="text-2xl font-bold text-primary">....</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Global Offices</h4>
                  <p className="text-2xl font-bold text-primary">....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
