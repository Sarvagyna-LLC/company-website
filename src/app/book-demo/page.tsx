"use client";

import { useState } from "react";
import MainLayout from "@/components/global/MainLayout";
import { Button } from "@/components/ui/button";
import { Clock, Calendar as CalendarIcon, Check } from "lucide-react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phoneNumber: "",
    teamSize: "",
    useCase: "",
  });

  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots
  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", { ...formData, date, timeSlot });
    setIsSubmitted(true);
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-gold-light/20 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book a <span className="bg-gradient-gold bg-clip-text text-transparent">Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Sarvagyna AI can transform your business with our cutting-edge AI solutions
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-3xl mx-auto bg-white border border-[#e8e8e8] rounded-lg p-12 shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#5c3d03]">Thank You for Booking a Demo!</h2>
              <p className="text-lg mb-6 text-[#5c3d03]/80">
                We've received your request for a demo on {date} at {timeSlot}.
              </p>
              <p className="text-md mb-8 text-[#5c3d03]/80">
                A member of our team will contact you shortly to confirm your appointment and provide any additional information.
              </p>
              <Button 
                className="bg-gradient-to-r from-[#b87d14] to-[#e2a336] hover:from-[#a06c10] hover:to-[#d19630] text-white px-6 py-2 rounded-md font-medium shadow-md transition-all duration-300"
                onClick={() => window.location.href = '/'}
              >
                Return to Homepage
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="bg-white border border-[#e8e8e8] rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#5c3d03]">Your Information</h2>
                
                <form className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-2 text-sm font-medium text-[#5c3d03]"
                    >
                      Full Name*
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-sm font-medium text-[#5c3d03]"
                    >
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="company" 
                        className="block mb-2 text-sm font-medium text-[#5c3d03]"
                      >
                        Company Name*
                      </label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="jobTitle" 
                        className="block mb-2 text-sm font-medium text-[#5c3d03]"
                      >
                        Job Title*
                      </label>
                      <input 
                        type="text" 
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                        placeholder="Your Position"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="phoneNumber" 
                      className="block mb-2 text-sm font-medium text-[#5c3d03]"
                    >
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="teamSize" 
                      className="block mb-2 text-sm font-medium text-[#5c3d03]"
                    >
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                    >
                      <option value="">Select team size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="useCase" 
                      className="block mb-2 text-sm font-medium text-[#5c3d03]"
                    >
                      What are you interested in?*
                    </label>
                    <textarea 
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                      placeholder="Tell us about your specific needs or use cases"
                    />
                  </div>
                </form>
              </div>

              {/* Calendar Section */}
              <div className="bg-white border border-[#e8e8e8] rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#5c3d03]">Schedule Your Demo</h2>
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <CalendarIcon className="mr-2 h-5 w-5 text-[#b87d14]" />
                    <h3 className="text-lg font-medium text-[#5c3d03]">Select a Date</h3>
                  </div>
                  <div className="border border-[#e8e8e8] rounded-md p-3">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b87d14]"
                    />
                    <p className="text-sm text-[#5c3d03]/70 mt-2">
                      Note: Weekends are not available for demos
                    </p>
                  </div>
                </div>

                {date && (
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <Clock className="mr-2 h-5 w-5 text-[#b87d14]" />
                      <h3 className="text-lg font-medium text-[#5c3d03]">Select a Time Slot</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                            timeSlot === slot
                              ? "bg-[#b87d14] text-white border-[#b87d14]"
                              : "border-[#e8e8e8] text-[#5c3d03] hover:border-[#b87d14]"
                          }`}
                          onClick={() => setTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email || !formData.company || !formData.jobTitle || !formData.useCase || !date || !timeSlot}
                  className="w-full bg-gradient-to-r from-[#b87d14] to-[#e2a336] hover:from-[#a06c10] hover:to-[#d19630] text-white px-6 py-3 rounded-md font-medium shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Your Demo
                </Button>

                <p className="text-xs text-[#5c3d03]/60 mt-4 text-center">
                  By booking a demo, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
