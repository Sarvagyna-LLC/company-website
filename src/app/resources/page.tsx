"use client";

import MainLayout from "@/components/global/MainLayout";
import { Book, FileText, Video, Podcast } from "lucide-react";

const resourceCategories = [
  {
    title: "Whitepapers",
    description: "In-depth research and insights on AI technologies",
    icon: FileText,
    items: [
      { title: "AI in Enterprise", link: "/resources/whitepapers/ai-enterprise" },
      { title: "Machine Learning Trends", link: "/resources/whitepapers/ml-trends" },
      { title: "Ethical AI Development", link: "/resources/whitepapers/ethical-ai" }
    ]
  },
  {
    title: "Video Tutorials",
    description: "Learn AI concepts through visual guides",
    icon: Video,
    items: [
      { title: "AI Fundamentals", link: "/resources/videos/fundamentals" },
      { title: "Advanced Machine Learning", link: "/resources/videos/advanced-ml" },
      { title: "AI Implementation Strategies", link: "/resources/videos/implementation" }
    ]
  },
  {
    title: "Podcasts",
    description: "Expert discussions on AI innovation",
    icon: Podcast,
    items: [
      { title: "AI Innovators Series", link: "/resources/podcasts/innovators" },
      { title: "Tech Insights", link: "/resources/podcasts/tech-insights" },
      { title: "Future of AI", link: "/resources/podcasts/future" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="bg-gradient-gold bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of AI knowledge and insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-lg p-6 shadow-gold-soft hover:shadow-gold-medium transition-all"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
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