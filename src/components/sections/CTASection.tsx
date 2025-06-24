"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const ctaVariants = {
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gold-light/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ctaVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Unlock the potential of AI with Sarvagyna. Whether you're looking to innovate, optimize, or revolutionize, we have solutions tailored to your needs.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Get Started CTA */}
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-6 text-lg rounded-xl transition-all duration-300"
            >
              <Link href="/demo" className="flex items-center gap-3">
                <Rocket className="h-5 w-5" />
                Get Started
              </Link>
            </Button>

            {/* Join Beta CTA */}
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Link href="/beta" className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                Join Beta Program
              </Link>
            </Button>

            {/* Apply Now CTA */}
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="bg-accent/20 hover:bg-accent/30 px-10 py-6 text-lg rounded-xl transition-all duration-300"
            >
              <Link href="/careers" className="flex items-center gap-3">
                <Code className="h-5 w-5" />
                Apply Now
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No commitment. Explore the future of AI with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 
