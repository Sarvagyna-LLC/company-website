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
              Contact <span className="bg-gradient-gold bg-clip-text text-transparent">Sarvagyna</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how AI can transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white border border-border rounded-lg p-8 shadow-gold-soft">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:info@sarvagyna.com" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      info@sarvagyna.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a 
                      href="tel:+1-555-AI-TECH" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 (555) AI-TECH
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      123 AI Innovation Drive, 
                      Tech Valley, CA 94000
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