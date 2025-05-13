"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
  isSmoothScroll?: boolean;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", isSmoothScroll: true },
  { name: "About", href: "/#about", isSmoothScroll: true },
  { name: "Services", href: "/services", isSmoothScroll: false },
  { name: "Research", href: "/research", isSmoothScroll: false },
  { name: "Projects", href: "/#projects", isSmoothScroll: true },
  { 
    name: "Company", 
    href: "#", 
    isSmoothScroll: false,
    subItems: [
      { name: "About Us", href: "/about", isSmoothScroll: false },
      { name: "Team", href: "/team", isSmoothScroll: false },
      { name: "Careers", href: "/careers", isSmoothScroll: false },
      { name: "Blog", href: "/blog", isSmoothScroll: false },
      { name: "Contact", href: "/contact", isSmoothScroll: false }
    ]
  },
  { name: "Contact", href: "/#contact", isSmoothScroll: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    // Close dropdown when navigating
    setOpenDropdown(null);

    console.log('Navigation item clicked:', {
      name: item.name,
      href: item.href,
      isSmoothScroll: item.isSmoothScroll,
      currentPath: window.location.pathname
    });

    // If it's a smooth scroll item and starts with a hash
    if (item.isSmoothScroll && item.href.includes('#')) {
      e.preventDefault();
      
      // If on home page, scroll to section
      if (window.location.pathname === '/') {
        const sectionId = item.href.substring(item.href.indexOf('#') + 1);
        console.log('Attempting to scroll to section:', sectionId);
        scrollToSection(sectionId);
      } else {
        // If not on home page, redirect to home page with hash
        console.log('Redirecting to:', item.href);
        window.location.href = item.href;
      }
    } else if (!item.isSmoothScroll) {
      // For pages like Team and Careers, ensure default link behavior
      // This allows Next.js to handle client-side navigation
      console.log('Using default navigation');
      return;
    }
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
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
            Lago
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.subItems ? (
                  <div 
                    className="flex items-center cursor-pointer text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.subItems && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-lg rounded-lg border border-border py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={(e) => {
                          handleNavClick(e, subItem);
                          setOpenDropdown(null);
                        }}
                        className="block px-4 py-2 text-sm hover:bg-gold-light/30 hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-gold hover:opacity-90 transition-opacity"
          >
            Request Demo
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger>
            <div role="button" aria-label="Menu" className="cursor-pointer">
              <Menu className="h-6 w-6" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <span className="text-lg font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Lago
                </span>
              </div>
              <ul className="flex flex-col py-6 space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-primary">
                          {item.name}
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <SheetTrigger key={subItem.name} asChild>
                              <Link
                                href={subItem.href}
                                onClick={(e) => {
                                  const sheetTrigger = e.currentTarget.closest('[data-radix-sheet-trigger]');
                                  if (sheetTrigger) {
                                    (sheetTrigger as HTMLElement).click();
                                  }
                                  handleNavClick(e, subItem);
                                }}
                                className="block py-2 hover:text-primary transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            </SheetTrigger>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetTrigger asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            const sheetTrigger = e.currentTarget.closest('[data-radix-sheet-trigger]');
                            if (sheetTrigger) {
                              (sheetTrigger as HTMLElement).click();
                            }
                            handleNavClick(e, item);
                          }}
                          className="block px-4 py-2 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </SheetTrigger>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-8 px-4 space-y-4">
                <Button
                  onClick={() => {
                    const sheetTrigger = document.querySelector('[data-radix-sheet-trigger]');
                    if (sheetTrigger) {
                      (sheetTrigger as HTMLElement).click();
                    }
                    scrollToSection("contact");
                  }}
                  className="w-full bg-gradient-gold hover:opacity-90 transition-opacity"
                >
                  Request Demo
                </Button>
                <Button 
                  className="w-full border border-primary/20 text-primary hover:bg-primary/10"
                  onClick={() => {
                    const sheetTrigger = document.querySelector('[data-radix-sheet-trigger]');
                    if (sheetTrigger) {
                      (sheetTrigger as HTMLElement).click();
                    }
                  }}
                >
                  Close Menu
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
