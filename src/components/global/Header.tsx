"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
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
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((item: NavItem, e: React.MouseEvent) => {
    // Prevent multiple clicks while navigating
    if (isNavigating) return;
    
    // Handle page navigation
    if (item.href.startsWith('/')) {
      // Set navigating state to prevent multiple clicks
      setIsNavigating(true);
      
      // Use prefetched routes when possible
      router.push(item.href);
      
      // Reset navigation state after a short delay
      setTimeout(() => setIsNavigating(false), 300);

      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [router, isMobileMenuOpen, isNavigating]);

  const isActiveRoute = useCallback((href: string) => {
    // Simplified and optimized active route check
    if (pathname === href) return true;
    if (href === '/') return false; // Home is only active when exact match
    
    // Company section special case
    if (href === '/company') {
      return pathname.startsWith('/about') || 
             pathname.startsWith('/team') || 
             pathname.startsWith('/careers') ||
             pathname.startsWith('/press');
    }
    
    // General case - parent route match
    return pathname.startsWith(href);
  }, [pathname]);
  
  // Pre-compute navigation items with active state for better performance
  const computedNavigationConfig = useMemo(() => {
    return navigationConfig.map(item => ({
      ...item,
      isActive: isActiveRoute(item.href)
    }));
  }, [navigationConfig, isActiveRoute]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-border"
          : "bg-transparent border-transparent"
      )}
      data-nextjs-scroll-focus-boundary
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/sarvagyna-high-resolution-logo-transparent.png"
            alt="Sarvagyna Logo"
            width={120}
            height={40}
            className="h-10" 
            style={{ height: '40px', width: 'auto' }} 
            priority={true}
            loading="eager"
            unoptimized={false}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {computedNavigationConfig.map((item: NavItem & { isActive?: boolean }, i: number) => {
            return item.subItems ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground flex items-center"
                    aria-label={`${item.title} dropdown menu`}
                    disabled={isNavigating}
                  >
                    {item.title}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem: NavItem) => {
                    const isSubItemActive = isActiveRoute(subItem.href);
                    
                    return (
                      <DropdownMenuItem key={subItem.title} asChild>
                        <Link 
                          href={subItem.href} 
                          className={cn(
                            "cursor-pointer",
                            isSubItemActive ? "bg-gold-light/30 text-primary" : ""
                          )}
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(subItem, e)}
                          aria-label={subItem.description}
                          prefetch={true}
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  item.isActive ? "bg-gold-light/30 text-primary" : ""
                )}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(item, e)}
                aria-label={item.description}
                prefetch={true}
              >
                {item.title}
              </Link>
            );
          })}

          <Button
            variant="default"
            className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
            onClick={() => {
              if (!isNavigating) {
                setIsNavigating(true);
                router.push('/book-demo');
                setTimeout(() => setIsNavigating(false), 300);
              }
            }}
            aria-label="Book Demo with Sarvagyna LLC"
            disabled={isNavigating}
          >
            Book Demo
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden" 
              aria-label="Open Menu" 
              type="button" 
              aria-haspopup="dialog" 
              data-state="closed"
            >
              <Menu className="lucide lucide-menu h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-[350px] bg-white">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Main navigation links and options</SheetDescription>
            <div className="flex flex-col h-full" aria-label="Mobile Navigation Menu">

              <div className="mt-12 flex flex-col space-y-3">
                {navigationConfig.map((item) => (
                  item.subItems ? (
                    <div key={item.title} className="relative">
                      <div className="px-4 py-3 rounded-md text-lg font-medium hover:bg-accent hover:text-accent-foreground flex justify-between items-center transition-colors">
                        {item.title}
                        <ChevronDown className="h-5 w-5" />
                      </div>
                      <div className="pl-4 space-y-1 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                              handleNavClick(subItem, e);
                              setIsMobileMenuOpen(false);
                            }}
                            className={cn(
                              "block px-4 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground transition-colors",
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
                        "px-4 py-3 rounded-md text-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                        isActiveRoute(item.href) ? "bg-gold-light/30 text-primary" : ""
                      )}
                      aria-label={item.description}
                    >
                      {item.title}
                    </Link>
                  )
                ))}

                <Button
                  className="mt-6 bg-gradient-gold hover:bg-gold-primary hover:opacity-90 text-white font-medium px-6 py-4 h-auto rounded-xl transition-all duration-300 text-base shadow-md hover:shadow-lg border border-gold-primary/20 w-full"
                  onClick={() => {
                    if (!isNavigating) {
                      setIsNavigating(true);
                      router.push('/contact');
                      setIsMobileMenuOpen(false);
                      setTimeout(() => setIsNavigating(false), 300);
                    }
                  }}
                  aria-label="Book Demo with Sarvagyna LLC"
                  disabled={isNavigating}
                >
                  Book Demo
                </Button>
              </div>

              <div className="mt-auto p-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} © Sarvagyna LLC. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      </div>
    </header>
  );
}
