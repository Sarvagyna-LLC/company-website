import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { 
  HelpCircle, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Mail, 
  PhoneCall 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Customer Support",
  description: "Get comprehensive support for Sarvagyna's AI services and solutions.",
  keywords: ["customer support", "help center", "AI support", "technical assistance"],
  openGraph: {
    title: "Sarvagyna Support Center",
    description: "Your go-to resource for AI service support and assistance",
    type: "website",
    url: "/support",
  },
};

const SUPPORT_CHANNELS = [
  {
    title: "Knowledge Base",
    description: "Explore our comprehensive documentation and guides.",
    icon: BookOpen,
    href: "/docs"
  },
  {
    title: "Live Chat",
    description: "Connect with our support team in real-time.",
    icon: MessageCircle,
    href: "#chat"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides and product walkthroughs.",
    icon: Video,
    href: "/tutorials"
  }
];

const CONTACT_OPTIONS = [
  {
    title: "Email Support",
    description: "support@sarvagyna.com",
    icon: Mail,
    contact: "support@sarvagyna.com"
  },
  {
    title: "Phone Support",
    description: "+1 (555) 123-4567",
    icon: PhoneCall,
    contact: "+1 (555) 123-4567"
  }
];

export default function SupportPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Support</span> Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're here to help you get the most out of Sarvagyna's AI solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {SUPPORT_CHANNELS.map((channel, index) => (
              <div 
                key={index} 
                className="bg-gold-light/30 rounded-lg p-6 hover:shadow-md transition-all group"
                style={{ transitionProperty: 'box-shadow, transform' }}
              >
                <div className="flex items-center mb-4">
                  <channel.icon className="h-8 w-8 text-primary mr-4 group-hover:rotate-6 transition-transform" />
                  <h3 className="text-xl font-bold">{channel.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <a 
                  href={channel.href} 
                  className="inline-block bg-gradient-gold hover:opacity-90 px-6 py-2 text-white rounded-lg"
                >
                  Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact <span className="bg-gradient-gold bg-clip-text text-transparent">Support</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {CONTACT_OPTIONS.map((option, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <a 
                  href={option.title === 'Email Support' ? `mailto:${option.contact}` : `tel:${option.contact}`}
                  className="inline-block bg-gradient-gold hover:opacity-90 px-6 py-2 text-white rounded-lg"
                >
                  {option.title === 'Email Support' ? 'Send Email' : 'Call Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Need <span className="bg-gradient-gold bg-clip-text text-transparent">Immediate Help</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg text-white rounded-lg"
          >
            Contact Support Team
          </a>
        </div>
      </section>
    </MainLayout>
  );
} 