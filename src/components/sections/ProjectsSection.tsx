"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  client: string;
  clientLogo: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Intelligent Customer Service Automation",
    client: "Global Finance Corp",
    clientLogo: "/placeholder.svg",
    industry: "Financial Services",
    description: "Implemented an AI agent solution that revolutionized customer support, reducing response times and improving satisfaction.",
    challenge: "The client faced mounting customer service backlogs with 30+ minute wait times and 72+ hour email response times, leading to customer dissatisfaction and churn.",
    solution: "Deployed a multi-agent AI system capable of handling 85% of routine inquiries, with seamless human handoff for complex issues. Integrated with existing CRM systems.",
    results: [
      "Reduced average response time from 30 minutes to under 60 seconds",
      "Improved customer satisfaction ratings by 42%",
      "Saved $2.4M annually in operational costs",
      "Enabled 24/7 service coverage across all time zones"
    ],
    image: "/placeholder.svg",
    tags: ["AI Agents", "Financial Services", "Customer Support"]
  },
  {
    id: 2,
    title: "Predictive Maintenance AI Platform",
    client: "TechManufacture Inc.",
    clientLogo: "/placeholder.svg",
    industry: "Manufacturing",
    description: "Custom AI tool that predicts equipment failures before they happen, minimizing downtime and maintenance costs.",
    challenge: "Unexpected equipment failures were causing production delays, resulting in approximately $5M in annual losses and compromising delivery timelines.",
    solution: "Developed IoT-connected AI models to analyze real-time equipment performance data, predict failures up to 2 weeks in advance, and recommend optimal maintenance schedules.",
    results: [
      "Reduced unplanned downtime by 78%",
      "Decreased maintenance costs by 35%",
      "Extended equipment lifespan by 15-20%",
      "ROI achieved within 6 months of implementation"
    ],
    image: "/placeholder.svg",
    tags: ["AI Tools", "Manufacturing", "Predictive Analytics"]
  },
  {
    id: 3,
    title: "Healthcare Diagnostic Assistant",
    client: "MedCare Systems",
    clientLogo: "/placeholder.svg",
    industry: "Healthcare",
    description: "AI research project that developed advanced diagnostic tools to assist medical professionals with rapid, accurate diagnoses.",
    challenge: "Radiologists were overwhelmed with increasing caseloads, leading to longer turnaround times for critical diagnostics and potential for human error.",
    solution: "Created an AI research partnership to develop a diagnostic assistant that analyzes medical imaging with 99.2% accuracy, flagging areas of concern for radiologist review.",
    results: [
      "Increased diagnostic accuracy by 28%",
      "Reduced analysis time by 62% per case",
      "Improved early detection rates of critical conditions",
      "Enabled triaging of urgent cases for immediate attention"
    ],
    image: "/placeholder.svg",
    tags: ["AI Research", "Healthcare", "Medical Imaging"]
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="bg-gradient-gold bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through AI innovation. Explore how our solutions have transformed businesses across industries.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-24 relative">
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg bg-white h-10 w-10 hidden md:flex"
              onClick={prevProject}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg bg-white h-10 w-10 hidden md:flex"
              onClick={nextProject}
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Card className="border-border overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image/Visual */}
                <div className="relative h-64 lg:h-auto bg-accent/20 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-primary">{project.client}</h3>
                      <p className="text-muted-foreground">{project.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-accent/50 text-primary border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Results:</h4>
                    <ul className="space-y-2 mb-6">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="rounded-full bg-primary h-4 w-4 mt-1 flex-shrink-0"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90">
                    Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile navigation */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === activeProject ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">
            Solutions For Every Industry
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Financial Services",
              "Healthcare",
              "Manufacturing",
              "Retail",
              "Technology",
              "Education"
            ].map((industry, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-md transition-shadow h-32 flex items-center justify-center cursor-pointer"
              >
                <CardContent className="text-center p-4">
                  <h4 className="font-semibold">{industry}</h4>
                  <p className="text-xs text-muted-foreground mt-1">View Solutions</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All Industry Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
