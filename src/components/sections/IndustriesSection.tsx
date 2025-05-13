"use client";

import { 
  Building, 
  Rocket, 
  University, 
  Globe, 
  Briefcase, 
  HeartPulse, 
  Factory, 
  BookOpen, 
  Cpu, 
  Landmark 
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industryBenefits = [
  {
    title: "Startups",
    description: "Accelerate innovation and compete with enterprise-grade AI solutions",
    icon: Rocket,
    benefits: [
      "Rapid prototyping",
      "Cost-effective AI implementation",
      "Scalable technology solutions",
      "Competitive edge in market"
    ]
  },
  {
    title: "Enterprises",
    description: "Transform operations with intelligent, data-driven AI strategies",
    icon: Building,
    benefits: [
      "Process automation",
      "Predictive analytics",
      "Enhanced decision-making",
      "Operational efficiency"
    ]
  },
  {
    title: "Universities & Research Institutions",
    description: "Advance academic research and educational capabilities",
    icon: University,
    benefits: [
      "Cutting-edge research tools",
      "Advanced data analysis",
      "Interdisciplinary AI applications",
      "Grant-winning research potential"
    ]
  },
  {
    title: "Healthcare",
    description: "Revolutionize patient care and medical research",
    icon: HeartPulse,
    benefits: [
      "Diagnostic support",
      "Personalized treatment planning",
      "Medical image analysis",
      "Research acceleration"
    ]
  },
  {
    title: "Manufacturing",
    description: "Optimize production and predictive maintenance",
    icon: Factory,
    benefits: [
      "Predictive maintenance",
      "Quality control",
      "Supply chain optimization",
      "Efficiency improvements"
    ]
  },
  {
    title: "Financial Services",
    description: "Enhance risk management and customer experiences",
    icon: Landmark,
    benefits: [
      "Fraud detection",
      "Investment analysis",
      "Customer service automation",
      "Personalized financial insights"
    ]
  }
];

export default function IndustriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries <span className="bg-gradient-gold bg-clip-text text-transparent">Transformed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions are designed to empower organizations across diverse sectors, driving innovation and efficiency.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industryBenefits.map((industry, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full border-border hover:shadow-gold-soft transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <industry.icon className="h-10 w-10 text-primary mr-4" />
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 