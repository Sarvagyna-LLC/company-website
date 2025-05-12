"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  isScroll?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about", isScroll: true },
  { title: "Services", href: "#services", isScroll: true },
  { title: "Projects", href: "#projects", isScroll: true },
  { title: "Team", href: "#team", isScroll: true },
  { title: "Careers", href: "#careers", isScroll: true },
  { title: "Contact", href: "#contact", isScroll: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.isScroll && item.href.startsWith('#')) {
      e.preventDefault();
      const sectionId = item.href.substring(1);
      scrollToSection(sectionId);

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Sarvagyna
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                i === 0 && "text-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button
            variant="default"
            className="ml-2 bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
            <div className="flex flex-col h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="mt-12 flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="px-4 py-3 rounded-md text-lg font-medium hover:bg-muted"
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="mt-4 bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>

              <div className="mt-auto p-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Sarvagyna. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
