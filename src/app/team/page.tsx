import { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout";
import TeamSection from "@/components/sections/TeamSection";
import TeamActionButtons from "@/components/team/TeamActionButtons";
import { Globe, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sarvagyna Team | AI Innovators",
  description: "Meet the world-class experts driving AI innovation at Sarvagyna. Our diverse team of researchers, engineers, and leaders are committed to pushing the boundaries of artificial intelligence.",
  keywords: ["AI team", "AI researchers", "machine learning experts", "AI innovation", "Sarvagyna team"],
  openGraph: {
    title: "Sarvagyna Team | AI Innovators",
    description: "Meet the world-class experts driving AI innovation at Sarvagyna.",
    type: "website",
    url: "/team",
  },
};

export default function TeamLandingPage() {
  return (
    <MainLayout>
      <section className="relative min-h-[60vh] flex items-center py-24 bg-gold-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet the <span className="gradient-text">Visionaries</span> Behind Sarvagyna
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A diverse collective of AI researchers, engineers, and thought leaders united by a mission to transform enterprise innovation through cutting-edge artificial intelligence.
            </p>
            <TeamActionButtons />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gold-light/30 rounded-lg">
              <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Global Talent</h3>
              <p className="text-muted-foreground">
                Our team spans multiple continents, bringing diverse perspectives to AI innovation.
              </p>
            </div>
            <div className="p-6 bg-gold-light/30 rounded-lg">
              <Award className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Industry Leaders</h3>
              <p className="text-muted-foreground">
                Experts from top tech companies, research institutions, and groundbreaking startups.
              </p>
            </div>
            <div className="p-6 bg-gold-light/30 rounded-lg">
              <Users className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                A culture of innovation, continuous learning, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-24 bg-gold-light/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to <span className="gradient-text">Join Us</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for exceptional talent who are passionate about pushing the boundaries of AI.
          </p>
          <TeamActionButtons variant="join" />
        </div>
      </section>
    </MainLayout>
  );
} 