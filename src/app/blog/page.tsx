"use client";

import MainLayout from "@/components/global/MainLayout";
import { Newspaper, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Enterprise Solutions",
    excerpt: "Exploring how AI is transforming business operations and decision-making processes.",
    date: "June 15, 2024",
    tags: ["AI", "Enterprise", "Technology"],
    readTime: "5 min read",
    image: "/blog/ai-enterprise.jpg"
  },
  {
    title: "Ethical Considerations in Machine Learning",
    excerpt: "A deep dive into the moral implications of AI development and deployment.",
    date: "May 22, 2024",
    tags: ["Ethics", "Machine Learning", "AI Responsibility"],
    readTime: "7 min read",
    image: "/blog/ai-ethics.jpg"
  },
  {
    title: "Breakthrough in Natural Language Processing",
    excerpt: "Recent advancements that are pushing the boundaries of AI communication.",
    date: "April 10, 2024",
    tags: ["NLP", "AI Research", "Language Models"],
    readTime: "6 min read",
    image: "/blog/nlp-breakthrough.jpg"
  }
];

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="bg-gradient-gold bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, innovations, and in-depth analysis of AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-lg overflow-hidden shadow-gold-soft hover:shadow-gold-medium transition-all"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    <div className="flex space-x-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-gold-light/30 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 