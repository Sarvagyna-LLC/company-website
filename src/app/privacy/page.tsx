import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { Shield, Lock, Database, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Privacy Policy",
  description: "Understand how Sarvagyna protects and manages your personal data and privacy.",
  keywords: ["privacy policy", "data protection", "user privacy", "AI services"],
  openGraph: {
    title: "Sarvagyna Privacy Policy",
    description: "Comprehensive privacy guidelines for our AI platform",
    type: "website",
    url: "/privacy",
  },
};

const PRIVACY_SECTIONS = [
  {
    title: "Data Collection",
    description: "We collect minimal personal information necessary to provide and improve our AI services.",
    icon: Database
  },
  {
    title: "User Consent",
    description: "Your explicit consent is required for data processing, with full transparency about data usage.",
    icon: UserCheck
  },
  {
    title: "Data Protection",
    description: "We implement advanced security measures to protect your personal and sensitive information.",
    icon: Shield
  },
  {
    title: "Privacy Commitment",
    description: "Our commitment is to maintain the highest standards of data privacy and user trust.",
    icon: Lock
  }
];

export default function PrivacyPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Privacy</span> Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transparent guidelines on how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {PRIVACY_SECTIONS.map((section, index) => (
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
            Detailed <span className="bg-gradient-gold bg-clip-text text-transparent">Privacy</span> Guidelines
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">1. Information We Collect</h3>
              <p>We collect only essential information required to provide our AI services, including contact details, usage data, and optional profile information.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">2. Data Usage</h3>
              <p>Your data is used solely to improve our services, personalize user experience, and maintain platform functionality.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">3. Data Sharing and Protection</h3>
              <p>We do not sell personal data. Information is shared only when required by law or with explicit user consent, always with strict confidentiality measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Questions about <span className="bg-gradient-gold bg-clip-text text-transparent">Privacy</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you have any privacy-related questions or concerns, our dedicated team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg text-white rounded-lg"
          >
            Contact Privacy Team
          </a>
        </div>
      </section>
    </MainLayout>
  );
} 