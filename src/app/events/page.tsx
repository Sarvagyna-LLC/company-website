import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Video, 
  Rocket 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna | Events",
  description: "Explore upcoming AI conferences, webinars, and networking events.",
  keywords: ["AI events", "technology conferences", "webinars", "networking", "AI innovation"],
  openGraph: {
    title: "Sarvagyna AI Events",
    description: "Join us for cutting-edge AI discussions and networking opportunities",
    type: "website",
    url: "/events",
  },
};

const UPCOMING_EVENTS = [
  {
    title: "AI Innovation Summit",
    date: "September 15-17, 2024",
    location: "San Francisco, CA",
    type: "In-Person Conference",
    icon: Rocket
  },
  {
    title: "Enterprise AI Webinar",
    date: "October 5, 2024",
    location: "Online Event",
    type: "Virtual Seminar",
    icon: Video
  },
  {
    title: "AI Research Symposium",
    date: "November 12-14, 2024",
    location: "Boston, MA",
    type: "Hybrid Conference",
    icon: Users
  }
];

export default function EventsPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Sarvagyna</span> Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect, learn, and innovate at the forefront of AI technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming <span className="bg-gradient-gold bg-clip-text text-transparent">Events</span>
          </h2>
          
          <div className="space-y-8">
            {UPCOMING_EVENTS.map((event, index) => (
              <div 
                key={index} 
                className="bg-gold-light/30 rounded-lg p-6 hover:shadow-md transition-all group"
                style={{ transitionProperty: 'box-shadow, transform' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <event.icon className="h-8 w-8 text-primary mr-4 group-hover:rotate-6 transition-transform" />
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a 
                    href="#" 
                    className="inline-block bg-gradient-gold hover:opacity-90 px-6 py-2 text-white rounded-lg"
                  >
                    Learn More
                  </a>
                  <a 
                    href="#" 
                    className="inline-block border border-primary text-primary hover:bg-gold-light/50 px-6 py-2 rounded-lg"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-light/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Stay <span className="bg-gradient-gold bg-clip-text text-transparent">Connected</span>
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
                <label htmlFor="eventInterests" className="block text-sm font-medium text-muted-foreground mb-2">
                  Event Interests
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Conferences",
                    "Webinars",
                    "Workshops",
                    "Networking",
                    "Research Talks",
                    "Product Demos"
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
                Get Event Updates
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Can't Attend <span className="bg-gradient-gold bg-clip-text text-transparent">In-Person</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We offer virtual attendance and on-demand recordings for most of our events.
          </p>
          <a 
            href="#" 
            className="inline-block bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg text-white rounded-lg"
          >
            Explore Virtual Options
          </a>
        </div>
      </section>
    </MainLayout>
  );
} 