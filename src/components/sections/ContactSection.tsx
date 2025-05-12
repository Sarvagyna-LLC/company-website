"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  Phone,
  Check,
  Loader2
} from "lucide-react";

// Add a custom toast function
const toast = (options: { title: string, description: string, variant?: 'default' | 'destructive' }) => {
  // Simple console log for now, can be replaced with a more sophisticated toast library
  console[options.variant === 'destructive' ? 'error' : 'log'](`${options.title}: ${options.description}`);
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Make sure subject is selected
    if (!formData.subject) {
      toast({
        title: "Missing subject",
        description: "Please select a subject for your message.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset submitted state after a delay
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-24 bg-background/70 dark:bg-background"
      aria-labelledby="contact-section-heading"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="contact-section-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Get <span className="bg-gradient-gold bg-clip-text text-transparent"> in Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            Have questions about our AI technologies, services, or want to explore potential collaborations? We're here to help you navigate the AI landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
            aria-label="Contact Information"
          >
            <address 
              className="bg-card/50 dark:bg-card/30 p-6 rounded-lg shadow-md border not-italic"
              aria-label="Company Address"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded mr-4">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">123 AI Drive, Suite 200</p>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                </div>
              </div>
            </address>
            
            <address 
              className="bg-card/50 dark:bg-card/30 p-6 rounded-lg shadow-md border not-italic"
              aria-label="Contact Email Addresses"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded mr-4">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@sarvagyna.com" className="hover:underline">info@sarvagyna.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:support@sarvagyna.com" className="hover:underline">support@sarvagyna.com</a>
                  </p>
                </div>
              </div>
            </address>
            
            <address 
              className="bg-card/50 dark:bg-card/30 p-6 rounded-lg shadow-md border not-italic"
              aria-label="Contact Phone Numbers"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded mr-4">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+15559876543" className="hover:underline">+1 (555) 987-6543</a>
                  </p>
                </div>
              </div>
            </address>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2"
            aria-label="Contact Form"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-card/50 dark:bg-card/30 p-8 rounded-lg shadow-md border" 
              aria-label="Contact form"
              role="form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background/80 dark:bg-input text-foreground"
                    placeholder="Your name"
                    aria-required="true"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background/80 dark:bg-input text-foreground"
                    placeholder="Your email"
                    aria-required="true"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="block font-medium text-foreground">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background/80 dark:bg-input text-foreground"
                  aria-required="true"
                  disabled={isSubmitting || isSubmitted}
                >
                  <option value="">Select an option</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="AI Agents">AI Agents</option>
                  <option value="AI Tools">AI Tools</option>
                  <option value="AI Research">AI Research</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career">Career</option>
                </select>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background/80 dark:bg-input text-foreground"
                  placeholder="Your message"
                  aria-required="true"
                  disabled={isSubmitting || isSubmitted}
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#FFC000] text-black hover:bg-[#FFD44D] transition-all"
                  disabled={isSubmitting || isSubmitted}
                  aria-label={isSubmitting ? "Sending message..." : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                      Sent Successfully
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 