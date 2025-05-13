import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { Cookie, Settings, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Cookie Policy",
  description: "Learn about our use of cookies and how we protect your online privacy.",
  keywords: ["cookie policy", "website cookies", "data tracking", "privacy", "AI services"],
  openGraph: {
    title: "Sarvagyna Cookie Policy",
    description: "Comprehensive guide to cookie usage on our AI platform",
    type: "website",
    url: "/cookies",
  },
};

const COOKIE_SECTIONS = [
  {
    title: "Essential Cookies",
    description: "Necessary cookies that enable core website functionality and security.",
    icon: ShieldCheck
  },
  {
    title: "Performance Cookies",
    description: "Help us understand website usage and improve our AI services and user experience.",
    icon: Settings
  },
  {
    title: "Functional Cookies",
    description: "Enhance website features and provide personalized services.",
    icon: Cookie
  },
  {
    title: "Tracking Cookies",
    description: "Used for analytics and understanding user interactions across our platform.",
    icon: Globe
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Cookie</span> Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transparent information about how we use cookies to enhance your browsing experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {COOKIE_SECTIONS.map((section, index) => (
              <div 
                key={index} 
                className="bg-gold-light/30 rounded-lg p-6 hover:shadow-md transition-all"
                style={{ transitionProperty: 'box-shadow, transform' }}
              >
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed <span className="bg-gradient-gold bg-clip-text text-transparent">Cookie</span> Guidelines
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">1. What Are Cookies?</h3>
              <p>Cookies are small text files stored on your device that help us provide a better, more personalized browsing experience.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">2. Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Session Cookies: Temporary cookies that expire when you close your browser</li>
                <li>Persistent Cookies: Remain on your device for a set period to remember your preferences</li>
                <li>First-Party Cookies: Directly set by Sarvagyna</li>
                <li>Third-Party Cookies: Set by our trusted analytics and service providers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">3. Cookie Management</h3>
              <p>You can control and manage cookies through your browser settings. Blocking cookies may impact website functionality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cookie <span className="bg-gradient-gold bg-clip-text text-transparent">Consent</span>
          </h2>
          
          <div className="bg-gold-light/30 rounded-lg p-8 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              By using our website, you consent to the use of cookies as described in this policy.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                className="bg-gradient-gold hover:opacity-90 px-8 py-3 text-white rounded-lg"
              >
                Accept All Cookies
              </button>
              <button 
                className="border border-primary text-primary hover:bg-gold-light/50 px-8 py-3 rounded-lg"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Questions about <span className="bg-gradient-gold bg-clip-text text-transparent">Cookies</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you have any questions about our Cookie Policy, our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg text-white rounded-lg"
          >
            Contact Support
          </a>
        </div>
      </section>
    </MainLayout>
  );
} 