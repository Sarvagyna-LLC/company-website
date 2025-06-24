"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Globe, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { getStaggeredDelay } from "@/lib/utils";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    github?: string;
  };
  skills: string[];
  featured: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "G. Chandu Kumar",
    role: "Co-Founder",
    bio: "Student at Parul University. Handles client management and relationships, ensuring smooth business operations.",
    image: "/team/placeholder-1.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/chandu-kumar-42514031a/",
      twitter: "https://twitter.com/chandu-kumar",
      website: "https://github.com/chandu-kumar",
      instagram: "https://www.instagram.com/chandu_kumar_42514031a/"
    },
    skills: [],
    featured: true,
  },
  {
    id: 2,
    name: "Sarwan Nandh",
    role: "Co-Founder",
    bio: "Student at SRM University KTR. A visionary leader focused on building the product and shaping the future of the company.",
    image: "/team/placeholder-2.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/sarwannandh/",
      twitter: "https://twitter.com/sarwannandh",
      website: "https://sarwan67.com/",
      instagram: "https://www.instagram.com/sarwannandh/",
      facebook: "https://www.facebook.com/sarwannandh",
      github: "https://github.com/sarwannandh67"
    },
    skills: [],
    featured: true,
  },
  {
    id: 3,
    name: "Roudra Ghosal",
    role: "Team Lead",
    bio: "Student at SRM University KTR. ",
    image: "/team/placeholder-3.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/roudra-ghosal/",
      website: "https://example.com",
    },
    skills: [],
    featured: true,
  },
  {
    id: 4,
    name: "Jack Whagan",
    role: "FullStack Developer",
    bio: "Leads our responsible AI initiatives. Previously developed AI ethics frameworks for government organizations.",
    image: "/team/placeholder-6.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/jackwaghan/",
      twitter: "https://twitter.com/jackwaghan",
      website: "https://jackwaghan.com/",
    },
    skills: [],
    featured: true,
  },
  {
    id: 5,
    name: "Anirban Choudhury",
    role: "VP of Engineering",
    bio: "20+ years in software engineering leadership at major tech companies, specializing in scalable AI infrastructure.",
    image: "/team/placeholder-4.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/anirbanchoudhury90322b61",
      instagram: "https://www.instagram.com/anirban_co?igsh=MW1yYWdkZHlpYjhicA==",
      
    },
    skills: [],
    featured: true,
  },
  {
    id: 6,
    name: "Abhirudh S",
    role: "Chief Product Officer",
    bio: "Product leader with experience at Google, Microsoft, and startups. Expert in translating AI capabilities into user value.",
    image: "/team/placeholder-5.svg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    skills: [],
    featured: true,
  },
  {
    id: 7,
    name: "Imana Sarkar",
    role: "Director of Ethics & Governance",
    bio: "Leads our responsible AI initiatives. Previously developed AI ethics frameworks for government organizations.",
    image: "/team/placeholder-6.svg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    skills: [],
    featured: true,
  },
  {
    id: 8,
    name: "Abishek Skanda G",
    role: "Director of Ethics & Governance",
    bio: "Leads our responsible AI initiatives. Previously developed AI ethics frameworks for government organizations.",
    image: "/team/placeholder-6.svg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    skills: [],
    featured: true,
  },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Display all team members
  const displayedMembers = teamMembers;

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gold-light/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-light-gold/50 rounded-full blur-3xl opacity-70"></div>

      <div className="container mx-auto relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            World-class experts in AI research, engineering, and business leadership driving our vision forward.
          </p>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member, index) => (
            <Card
              key={member.id}
              className={`border-border hover:shadow-md transition-all overflow-hidden ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: getStaggeredDelay(index),
                transitionDuration: '0.5s',
                transitionProperty: 'all'
              }}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-accent">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-accent text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/30 text-primary border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-muted transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-muted transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="h-4 w-4 text-primary" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-muted transition-colors"
                        aria-label={`${member.name}'s personal website`}
                      >
                        <Globe className="h-4 w-4 text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            We're always looking for exceptional talent to join our team.
          </p>
          <Button
            onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
          >
            View Open Positions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
