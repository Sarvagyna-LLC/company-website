"use client";

import MainLayout from "@/components/global/MainLayout";
import { 
  HelpCircle, 
  ChevronDown 
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    title: "General AI Solutions",
    faqs: [
      {
        question: "What types of AI solutions does Sarvagyna offer?",
        answer: "We provide comprehensive AI solutions including machine learning models, predictive analytics, natural language processing, and custom AI consulting for various industries."
      },
      {
        question: "How can AI benefit my business?",
        answer: "AI can improve decision-making, automate complex processes, provide predictive insights, enhance customer experiences, and drive operational efficiency across multiple business domains."
      }
    ]
  },
  {
    title: "Technical Implementation",
    faqs: [
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on project complexity. Typically, our projects range from 3-6 months, with initial proof of concept taking 4-8 weeks."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive support packages including maintenance, updates, and continuous optimization of AI models."
      }
    ]
  },
  {
    title: "Pricing and Consultation",
    faqs: [
      {
        question: "How do you price AI solutions?",
        answer: "We offer customized pricing based on project scope, complexity, and specific business requirements. We provide transparent pricing after an initial consultation."
      },
      {
        question: "Do you offer free consultations?",
        answer: "We provide initial 1-hour consultations to understand your business needs and explore potential AI solutions at no cost."
      }
    ]
  }
];

export default function FAQsPage() {
  const [activeQuestions, setActiveQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sarvagyna <span className="bg-gradient-gold bg-clip-text text-transparent">FAQs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answers to common questions about our AI solutions and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-white border border-border rounded-lg shadow-gold-soft"
              >
                <div className="p-6 bg-gold-light/30 rounded-t-lg">
                  <h2 className="text-2xl font-bold flex items-center">
                    <HelpCircle className="mr-4 text-primary" />
                    {category.title}
                  </h2>
                </div>
                <div className="divide-y divide-border">
                  {category.faqs.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeQuestions[key];

                    return (
                      <div key={key} className="p-6">
                        <div 
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                          <ChevronDown 
                            className={`h-6 w-6 text-primary transition-transform ${
                              isActive ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        {isActive && (
                          <p className="mt-4 text-muted-foreground">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 