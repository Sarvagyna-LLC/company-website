"use client";

import MainLayout from "@/components/global/MainLayout";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Sarvagyna</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how AI can transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white border border-[#e8e8e8] rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-[#5c3d03]">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#b87d14]">
                      <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#5c3d03]">Email</p>
                    <a 
                      href="mailto:admin@sarvagyna.com" 
                      className="text-[#b87d14] hover:text-[#8a5e0f] transition-colors"
                    >
                      admin@sarvagyna.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#b87d14]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#5c3d03]">Phone</p>
                    <a 
                      href="tel:+919704736991" 
                      className="text-[#b87d14] hover:text-[#8a5e0f] transition-colors"
                    >
                      +91 97047 36991
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#b87d14]">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#5c3d03]">Address</p>
                    <p className="text-[#5c3d03]/80">
                      Ongole, 
                      Andhra Pradesh, India 523001.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-border rounded-lg p-8 shadow-gold-soft">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 text-sm font-medium text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="company" 
                    className="block mb-2 text-sm font-medium text-muted-foreground"
                  >
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm font-medium text-muted-foreground"
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your AI project or inquiry"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center bg-gradient-gold hover:bg-gold-primary hover:opacity-90 text-white font-bold py-3 rounded-md transition-all"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 