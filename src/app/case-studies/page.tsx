"use client";

import MainLayout from "@/components/global/MainLayout";
import { Briefcase, TrendingUp, Globe, Building, Wrench, Brain } from "lucide-react";

const caseStudies = [
  {
    title: "AI-Powered Financial Forecasting",
    client: "Global Investment Firm",
    challenge: "Improve investment decision-making accuracy",
    solution: "Developed a machine learning model for predictive financial analysis",
    results: [
      "25% increase in investment accuracy",
      "Reduced risk assessment time by 40%",
      "Enhanced portfolio optimization"
    ],
    industry: "Finance",
    icon: TrendingUp
  },
  {
    title: "Healthcare Diagnostic AI",
    client: "Metropolitan Hospital Network",
    challenge: "Early disease detection and patient risk assessment",
    solution: "Implemented AI-driven diagnostic support system",
    results: [
      "15% earlier disease detection",
      "Improved patient outcome predictions",
      "Reduced diagnostic errors"
    ],
    industry: "Healthcare",
    icon: Globe
  },
  {
    title: "Supply Chain Optimization",
    client: "Global Logistics Corporation",
    challenge: "Minimize logistics inefficiencies and predict disruptions",
    solution: "Created an AI-powered supply chain prediction model",
    results: [
      "30% reduction in delivery delays",
      "Improved inventory management",
      "Real-time disruption forecasting"
    ],
    industry: "Logistics",
    icon: Briefcase
  },
  {
    title: "Intelligent Customer Service Automation",
    client: "Global Finance Corp",
    challenge: "The client faced mounting customer service backlogs with 30+ minute wait times and 72+ hour email response times, leading to customer dissatisfaction and churn.",
    solution: "Deployed a multi-agent AI system capable of handling 85% of routine inquiries, with seamless human handoff for complex issues. Integrated with existing CRM systems.",
    results: [
      "Reduced average response time from 30 minutes to under 60 seconds",
      "Improved customer satisfaction ratings by 42%",
      "Saved $2.4M annually in operational costs",
      "Enabled 24/7 service coverage across all time zones"
    ],
    industry: "Financial Services",
    icon: Building
  },
  {
    title: "Predictive Maintenance AI Platform",
    client: "TechManufacture Inc.",
    challenge: "Unexpected equipment failures were causing production delays, resulting in approximately $5M in annual losses and compromising delivery timelines.",
    solution: "Developed IoT-connected AI models to analyze real-time equipment performance data, predict failures up to 2 weeks in advance, and recommend optimal maintenance schedules.",
    results: [
      "Reduced unplanned downtime by 78%",
      "Decreased maintenance costs by 35%",
      "Extended equipment lifespan by 15-20%",
      "ROI achieved within 6 months of implementation"
    ],
    industry: "Manufacturing",
    icon: Wrench
  },
  {
    title: "Healthcare Diagnostic Assistant",
    client: "MedCare Systems",
    challenge: "Radiologists were overwhelmed with increasing caseloads, leading to longer turnaround times for critical diagnostics and potential for human error.",
    solution: "Created an AI research partnership to develop a diagnostic assistant that analyzes medical imaging with 99.2% accuracy, flagging areas of concern for radiologist review.",
    results: [
      "Increased diagnostic accuracy by 28%",
      "Reduced analysis time by 62% per case",
      "Improved early detection rates of critical conditions",
      "Enabled triaging of urgent cases for immediate attention"
    ],
    industry: "Healthcare",
    icon: Brain
  }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="bg-gradient-gold bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world AI solutions that drive transformative business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-lg p-6 shadow-gold-soft hover:shadow-gold-medium transition-all"
              >
                <div className="flex items-center mb-4">
                  <study.icon className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">{study.title}</h2>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">Client: {study.client}</p>
                  <p className="text-sm text-muted-foreground">Industry: {study.industry}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 