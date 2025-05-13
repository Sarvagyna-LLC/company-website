"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { navigationConfig, NavItem } from "@/lib/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
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
    // Handle page navigation
    if (item.href.startsWith('/')) {
      router.push(item.href);

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const isActiveRoute = (href: string) => {
    // Exact match or parent route match for dropdown items
    return pathname === href || 
           (href !== '/' && pathname.startsWith(href)) ||
           (href === '/company' && pathname.startsWith('/about') || 
            pathname.startsWith('/team') || 
            pathname.startsWith('/careers') ||
            pathname.startsWith('/press'));
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
          <Image
            src="/sarvagyna-high-resolution-logo-transparent.png"
            alt="Sarvagyna Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority={true}
            loading="eager"
            unoptimized={true}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationConfig.map((item, i) => (
            item.subItems ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground flex items-center"
                    aria-label={`${item.title} dropdown menu`}
                  >
                    {item.title}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.title} asChild>
                      <Link 
                        href={subItem.href} 
                        className={cn(
                          "cursor-pointer",
                          isActiveRoute(subItem.href) ? "bg-gold-light/30 text-primary" : ""
                        )}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(subItem, e)}
                        aria-label={subItem.description}
                      >
                        {subItem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(item, e)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActiveRoute(item.href) ? "bg-gold-light/30 text-primary" : ""
                )}
                aria-label={item.description}
              >
                {item.title}
              </Link>
            )
          ))}

          <Button
            variant="default"
            className="ml-2 bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
            onClick={() => {
              router.push('/contact');
            }}
            aria-label="Get Started with Lago"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open Menu">
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
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="mt-12 flex flex-col space-y-3">
                {navigationConfig.map((item) => (
                  item.subItems ? (
                    <div key={item.title} className="relative">
                      <div className="px-4 py-3 rounded-md text-lg font-medium hover:bg-muted flex justify-between items-center">
                        {item.title}
                        <ChevronDown className="h-5 w-5" />
                      </div>
                      <div className="pl-6 space-y-2 mt-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                              handleNavClick(subItem, e);
                              setIsMobileMenuOpen(false);
                            }}
                            className={cn(
                              "block px-4 py-2 rounded-md text-base hover:bg-muted",
                              isActiveRoute(subItem.href) ? "bg-gold-light/30 text-primary" : ""
                            )}
                            aria-label={subItem.description}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        handleNavClick(item, e);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-md text-lg font-medium hover:bg-muted",
                        isActiveRoute(item.href) ? "bg-gold-light/30 text-primary" : ""
                      )}
                      aria-label={item.description}
                    >
                      {item.title}
                    </Link>
                  )
                ))}

                <Button
                  variant="default"
                  className="mt-4 bg-gradient-gold hover:bg-gold-primary hover:opacity-90 w-full"
                  onClick={() => {
                    router.push('/contact');
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Get Started with Lago"
                >
                  Get Started
                </Button>
              </div>

              <div className="mt-auto p-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Lago. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
