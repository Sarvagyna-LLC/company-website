"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
  isSmoothScroll?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", isSmoothScroll: true },
  { name: "About", href: "#about", isSmoothScroll: true },
  { name: "Services", href: "#services", isSmoothScroll: true },
  { name: "Projects", href: "#projects", isSmoothScroll: true },
  { name: "Team", href: "#team", isSmoothScroll: true },
  { name: "Careers", href: "#careers", isSmoothScroll: true },
  { name: "Contact", href: "#contact", isSmoothScroll: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isSmoothScroll && item.href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(item.href.substring(1));
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Sarvagyna
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-gold hover:opacity-90 transition-opacity"
          >
            Request Demo
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <span className="text-lg font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Sarvagyna
                </span>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </div>
              <ul className="flex flex-col py-6 space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <SheetTrigger asChild>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className="text-base font-medium block py-2 hover:text-primary transition-colors"
                        aria-label={`Navigate to ${item.name}`}
                      >
                        {item.name}
                      </Link>
                    </SheetTrigger>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-8">
                <SheetTrigger asChild>
                  <Button
                    variant="default"
                    className="w-full bg-gradient-gold hover:opacity-90 transition-opacity"
                    onClick={() => scrollToSection("contact")}
                  >
                    Request Demo
                  </Button>
                </SheetTrigger>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
