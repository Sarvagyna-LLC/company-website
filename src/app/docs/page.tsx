"use client";

import MainLayout from "@/components/global/MainLayout";
import { Book, Code, Terminal, Shield } from "lucide-react";

const documentationSections = [
  {
    title: "Getting Started",
    description: "Quick guides to help you begin with Sarvagyna's AI solutions",
    icon: Book,
    items: [
      { title: "Installation Guide", link: "/docs/getting-started/installation" },
      { title: "First Steps", link: "/docs/getting-started/first-steps" },
      { title: "System Requirements", link: "/docs/getting-started/requirements" }
    ]
  },
  {
    title: "API Reference",
    description: "Comprehensive documentation for our AI APIs",
    icon: Code,
    items: [
      { title: "Authentication", link: "/docs/api/authentication" },
      { title: "Endpoints", link: "/docs/api/endpoints" },
      { title: "Request/Response Formats", link: "/docs/api/formats" }
    ]
  },
  {
    title: "Advanced Usage",
    description: "Deep dive into advanced features and configurations",
    icon: Terminal,
    items: [
      { title: "Custom Configurations", link: "/docs/advanced/configurations" },
      { title: "Performance Optimization", link: "/docs/advanced/optimization" },
      { title: "Scaling Solutions", link: "/docs/advanced/scaling" }
    ]
  },
  {
    title: "Security",
    description: "Best practices for secure AI implementation",
    icon: Shield,
    items: [
      { title: "Data Privacy", link: "/docs/security/privacy" },
      { title: "Compliance Guidelines", link: "/docs/security/compliance" },
      { title: "Ethical AI Principles", link: "/docs/security/ethics" }
    ]
  }
];

export default function DocumentationPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides and references for our AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-lg p-6 shadow-gold-soft hover:shadow-gold-medium transition-all"
              >
                <div className="flex items-center mb-4">
                  <section.icon className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{section.description}</p>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <a 
                      key={itemIndex} 
                      href={item.link} 
                      className="block py-2 px-4 rounded-md hover:bg-gold-light/30 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 