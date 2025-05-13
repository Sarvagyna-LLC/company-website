import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { 
  Handshake, 
  Globe, 
  Rocket, 
  Award, 
  Users, 
  CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Partner Program",
  description: "Join our innovative AI partnership ecosystem and unlock new opportunities.",
  keywords: ["AI partnership", "technology collaboration", "partner program", "business innovation"],
  openGraph: {
    title: "Sarvagyna Partner Program",
    description: "Collaborate and grow with cutting-edge AI technologies",
    type: "website",
    url: "/partners",
  },
};

const PARTNER_BENEFITS = [
  {
    title: "Technology Integration",
    description: "Seamlessly integrate Sarvagyna's AI solutions into your ecosystem.",
    icon: Globe
  },
  {
    title: "Co-Innovation",
    description: "Collaborate on groundbreaking AI technologies and research.",
    icon: Rocket
  },
  {
    title: "Revenue Sharing",
    description: "Unlock new revenue streams through strategic partnerships.",
    icon: Award
  }
];

const PARTNER_TYPES = [
  {
    title: "Technology Partners",
    description: "Integrate our AI solutions into your existing platforms.",
    icon: Users
  },
  {
    title: "Reseller Partners",
    description: "Expand your portfolio with cutting-edge AI technologies.",
    icon: Handshake
  }
];

export default function PartnerProgramPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Partner</span> Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform the future of AI through strategic collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {PARTNER_BENEFITS.map((benefit, index) => (
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
            Partner <span className="bg-gradient-gold bg-clip-text text-transparent">Types</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PARTNER_TYPES.map((type, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-md text-center"
              >
                <type.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <a 
                  href="#apply" 
                  className="inline-block bg-gradient-gold hover:opacity-90 px-8 py-3 text-white rounded-lg"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Apply to Our <span className="bg-gradient-gold bg-clip-text text-transparent">Partner Program</span>
          </h2>
          
          <form className="bg-gold-light/30 rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your company name"
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
              <div className="md:col-span-2">
                <label htmlFor="partnerType" className="block text-sm font-medium text-muted-foreground mb-2">
                  Partner Type
                </label>
                <select 
                  id="partnerType" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option>Technology Partner</option>
                  <option>Reseller Partner</option>
                  <option>Consulting Partner</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="details" className="block text-sm font-medium text-muted-foreground mb-2">
                  Tell Us About Your Partnership Interests
                </label>
                <textarea 
                  id="details" 
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Share how you envision collaborating with Sarvagyna"
                ></textarea>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="bg-gradient-gold hover:opacity-90 px-12 py-4 text-white rounded-lg text-lg"
              >
                Submit Partnership Application
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Why <span className="bg-gradient-gold bg-clip-text text-transparent">Partner</span> with Us?
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Access to cutting-edge AI technologies
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Dedicated partner support and training
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Competitive revenue sharing model
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 