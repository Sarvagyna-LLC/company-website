"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarClock, Mail, BellRing } from 'lucide-react';

export default function ComingSoonCareersSection() {
  const handleNotifyMe = () => {
    // This would typically connect to a newsletter or notification system
    alert('Thank you for your interest! We will notify you when positions open.');
    // In a real implementation, you would collect the email and store it
  };

  return (
    <section id="careers" className="py-12 sm:py-16 md:py-24 bg-background/70 dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join in <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            Be part of a cutting-edge team transforming industries through AI. We're always looking for passionate innovators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card/50 dark:bg-card/30 rounded-lg p-8 shadow-md text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gold-light/30 p-4 rounded-full">
              <CalendarClock className="h-12 w-12 text-gold-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Hiring Window Opening Soon
          </h3>
          
          <p className="text-lg mb-6 text-foreground/80">
            We're preparing to launch our next hiring phase. Our team is growing and we'll be looking for talented individuals to join us on our mission to transform AI innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <BellRing className="h-5 w-5 text-gold-primary" />
              <span>Get notified when positions open</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <Mail className="h-5 w-5 text-gold-primary" />
              <span>Send your resume to admin@sarvagyna.com</span>
            </div>
          </div>
          
          <Button 
            onClick={handleNotifyMe}
            className="bg-primary text-white hover:bg-primary/90 font-medium px-8 py-2 shadow-md border border-primary/20 transition-all duration-300"
          >
            Notify Me When Positions Open
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
