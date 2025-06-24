"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import { validateEmail } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubscribeStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Simulate API call for newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail("");
    } catch (error) {
      setSubscribeStatus('error');
      setErrorMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", isScroll: false },
        { name: "Our Mission", href: "#mission", isScroll: true },
        { name: "Team", href: "/team", isScroll: false },
        { name: "Careers", href: "/careers", isScroll: false },
        { name: "Press", href: "/press", isScroll: false },
        { name: "Investors", href: "#investors", isScroll: true },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "AI Agents", href: "/services/ai-agents", isScroll: false },
        { name: "AI Tools", href: "/services/ai-tools", isScroll: false },
        { name: "AI Research", href: "/research", isScroll: false },
        { name: "Enterprise Solutions", href: "/enterprise", isScroll: false },
        { name: "Consulting", href: "/consulting", isScroll: false },
        { name: "Custom AI Development", href: "/custom-ai", isScroll: false },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog", isScroll: false },
        { name: "Case Studies", href: "/case-studies", isScroll: false },
        { name: "Whitepapers", href: "/whitepapers", isScroll: false },
        { name: "Documentation", href: "/docs", isScroll: false },
        { name: "FAQs", href: "/faqs", isScroll: false },
        { name: "Newsletter", href: "/newsletter", isScroll: false },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy", isScroll: false },
        { name: "Terms of Service", href: "/terms", isScroll: false },
        { name: "Cookie Policy", href: "/cookies", isScroll: false },
        { name: "Data Protection", href: "/data-protection", isScroll: false },
        { name: "Accessibility", href: "/accessibility", isScroll: false },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact Us", href: "/contact", isScroll: false },
        { name: "Support", href: "/support", isScroll: false },
        { name: "Book a Demo", href: "/demo", isScroll: false },
        { name: "Partner Program", href: "/partners", isScroll: false },
        { name: "Events", href: "/events", isScroll: false },
      ],
    }
  ];

  const handleLinkClick = (href: string, isScroll?: boolean, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (isScroll && href.startsWith("#")) {
      e?.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-gold-light/40 border-t border-border py-8 sm:py-12 md:py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <Image
                src="/sarvagyna-high-resolution-logo-transparent.png"
                alt="Sarvagyna Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
                priority={true}
                loading="eager"
                unoptimized={true}
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              A tech startup specializing in AI agents, AI tools, and pioneering AI research. Building the future of enterprise technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <a href="mailto:admin@sarvagyna.com" className="hover:text-primary transition-colors">
                  admin@sarvagyna.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <a href="tel:+919704736991" className="hover:text-primary transition-colors">
                  +91 9704736991
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>
                  Ongole, Andhra Pradesh, India, 523001.
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Footer Links - Combined in a single column with grid */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">{footerLinks[0].title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(link.href, link.isScroll, e)}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services Links */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">{footerLinks[1].title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks[1].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(link.href, link.isScroll, e)}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Resources, Legal, and Connect Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Resources Links */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">{footerLinks[2].title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks[2].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(link.href, link.isScroll, e)}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* Connect Links */}
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4 mt-6">{footerLinks[4].title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks[4].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(link.href, link.isScroll, e)}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal Links */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">{footerLinks[3].title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks[3].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(link.href, link.isScroll, e)}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4">
              Subscribe to our newsletter to get the latest updates on AI innovation.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 h-8 w-8 p-0 flex items-center justify-center bg-primary text-white hover:bg-primary/90"
                  disabled={isSubmitting}
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {subscribeStatus === 'success' && (
                <p className="text-green-600 text-xs">
                  Successfully subscribed to our newsletter!
                </p>
              )}

              {subscribeStatus === 'error' && (
                <p className="text-red-500 text-xs">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarvagyna. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Cookie Policy", href: "/cookies" },
              { name: "Accessibility", href: "/accessibility" }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
