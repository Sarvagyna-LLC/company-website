import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { Shield, FileText, Globe, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Terms and Conditions",
  description: "Read the terms and conditions governing the use of Sarvagyna's AI services and platform.",
  keywords: ["terms of service", "legal", "AI services", "usage terms"],
  openGraph: {
    title: "Sarvagyna Terms and Conditions",
    description: "Legal terms governing the use of our AI platform",
    type: "website",
    url: "/terms",
  },
};

const TERMS_SECTIONS = [
  {
    title: "Acceptance of Terms",
    description: "By accessing or using Sarvagyna's services, you agree to be bound by these terms and conditions.",
    icon: FileText
  },
  {
    title: "Service Usage",
    description: "Our AI services are provided for lawful purposes only. Users must comply with all applicable laws and regulations.",
    icon: Globe
  },
  {
    title: "Intellectual Property",
    description: "All content, software, and intellectual property on our platform are owned by Sarvagyna and protected by international copyright laws.",
    icon: Shield
  },
  {
    title: "Data Privacy",
    description: "We are committed to protecting user data and maintaining strict privacy standards as outlined in our Privacy Policy.",
    icon: Lock
  }
];

export default function TermsPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Terms</span> & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Understand the legal framework governing the use of Sarvagyna's AI services and platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {TERMS_SECTIONS.map((section, index) => (
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
            Detailed <span className="bg-gradient-gold bg-clip-text text-transparent">Terms</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">1. User Responsibilities</h3>
              <p>Users are responsible for maintaining the confidentiality of their account and for all activities under their account.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">2. Service Limitations</h3>
              <p>Sarvagyna reserves the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">3. Disclaimer of Warranties</h3>
              <p>Our services are provided "as is" without any warranties, express or implied, including accuracy, reliability, or fitness for a particular purpose.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Questions about our <span className="bg-gradient-gold bg-clip-text text-transparent">Terms</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you have any questions or concerns about our Terms and Conditions, please contact our legal team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg text-white rounded-lg"
          >
            Contact Legal Team
          </a>
        </div>
      </section>
    </MainLayout>
  );
} 