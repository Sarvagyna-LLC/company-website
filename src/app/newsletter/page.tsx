import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { 
  Mail, 
  Newspaper, 
  Rocket, 
  Users, 
  CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Newsletter",
  description: "Stay updated with the latest AI innovations, research, and insights.",
  keywords: ["AI newsletter", "technology updates", "AI research", "innovation insights"],
  openGraph: {
    title: "Sarvagyna Newsletter Subscription",
    description: "Get the latest AI trends and Sarvagyna updates delivered to your inbox",
    type: "website",
    url: "/newsletter",
  },
};

const NEWSLETTER_BENEFITS = [
  {
    title: "AI Insights",
    description: "Exclusive deep-dive articles on AI technologies and trends.",
    icon: Newspaper
  },
  {
    title: "Research Updates",
    description: "First access to our groundbreaking AI research findings.",
    icon: Rocket
  },
  {
    title: "Community Highlights",
    description: "Featuring innovators and success stories in the AI ecosystem.",
    icon: Users
  }
];

export default function NewsletterPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Newsletter</span> Subscription
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay at the forefront of AI innovation with curated insights delivered directly to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {NEWSLETTER_BENEFITS.map((benefit, index) => (
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
            Subscribe to <span className="bg-gradient-gold bg-clip-text text-transparent">Sarvagyna Insights</span>
          </h2>
          
          <form className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="interests" className="block text-sm font-medium text-muted-foreground mb-2">
                  Areas of Interest
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "AI Research",
                    "Enterprise Solutions",
                    "Machine Learning",
                    "AI Ethics",
                    "Technology Trends",
                    "Product Updates"
                  ].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={interest.toLowerCase().replace(/\s+/g, '-')} 
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <label htmlFor={interest.toLowerCase().replace(/\s+/g, '-')} className="text-muted-foreground">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="bg-gradient-gold hover:opacity-90 px-12 py-4 text-white rounded-lg text-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Why <span className="bg-gradient-gold bg-clip-text text-transparent">Subscribe</span>?
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Monthly curated AI insights and trends
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              Exclusive research and industry analysis
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="text-xl text-muted-foreground">
              No spam, only valuable content
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 