import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { 
  Calendar, 
  Video, 
  Users, 
  Rocket, 
  CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Book a Demo",
  description: "Schedule a personalized demo of Sarvagyna's AI solutions.",
  keywords: ["AI demo", "product demonstration", "enterprise AI", "technology showcase"],
  openGraph: {
    title: "Sarvagyna AI Demo Booking",
    description: "Experience the power of our AI technologies firsthand",
    type: "website",
    url: "/demo",
  },
};

const DEMO_BENEFITS = [
  {
    title: "Personalized Walkthrough",
    description: "Get a tailored demonstration of our AI solutions.",
    icon: Users
  },
  {
    title: "Live Q&A",
    description: "Interact directly with our AI experts.",
    icon: Video
  },
  {
    title: "Custom Consultation",
    description: "Discuss how our AI can solve your specific challenges.",
    icon: Rocket
  }
];

export default function BookDemoPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Book</span> a Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the transformative power of Sarvagyna's AI solutions through a personalized demonstration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {DEMO_BENEFITS.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gold-light/30 rounded-lg p-6 hover:shadow-md transition-all group"
                style={{ transitionProperty: 'box-shadow, transform' }}
              >
                <div className="flex items-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary mr-4 group-hover:rotate-6 transition-transform" />
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schedule Your <span className="bg-gradient-gold bg-clip-text text-transparent">Demo</span>
          </h2>
          
          <form className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Work Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your work email"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="interests" className="block text-sm font-medium text-muted-foreground mb-2">
                  What are you interested in?
                </label>
                <select 
                  id="interests" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option>AI Agents</option>
                  <option>Enterprise Solutions</option>
                  <option>Custom AI Development</option>
                  <option>AI Research</option>
                </select>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="bg-gradient-gold hover:opacity-90 px-12 py-4 text-white rounded-lg text-lg"
              >
                Schedule Demo
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            What to <span className="bg-gradient-gold bg-clip-text text-transparent">Expect</span>
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              45-minute personalized demo with an AI solutions expert
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <Calendar className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Flexible scheduling to fit your availability
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 