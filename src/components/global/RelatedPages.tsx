"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navigationConfig, NavItem } from "@/lib/navigation";

export default function RelatedPages() {
  const pathname = usePathname();
  
  // Don't show related pages on homepage
  if (pathname === "/") {
    return null;
  }

  const relatedLinks = getRelatedLinks(pathname);
  
  // If no related links found, don't render anything
  if (relatedLinks.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-border">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="group p-6 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              {link.description && (
                <p className="text-muted-foreground text-sm">{link.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function getRelatedLinks(currentPath: string): NavItem[] {
  // Find which section the current page belongs to
  let parentSection: NavItem | undefined;
  let currentNavItem: NavItem | undefined;
  
  // First check if it's a top-level page
  currentNavItem = navigationConfig.find(item => item.href === currentPath);
  
  if (!currentNavItem) {
    // Check if it's a sub-page
    for (const section of navigationConfig) {
      if (section.subItems) {
        const subItem = section.subItems.find(item => item.href === currentPath);
        if (subItem) {
          parentSection = section;
          currentNavItem = subItem;
          break;
        }
      }
    }
  }
  
  // If we found the current page in the navigation
  if (currentNavItem) {
    // If it's a top-level page with subitems, show those as related
    if (currentNavItem.subItems && currentNavItem.subItems.length > 0) {
      return currentNavItem.subItems;
    }
    
    // If it's a sub-page, show other pages in the same section
    if (parentSection && parentSection.subItems) {
      return parentSection.subItems.filter(item => item.href !== currentPath);
    }
    
    // Otherwise, show other top-level pages
    return navigationConfig.filter(item => 
      item.href !== currentPath && 
      item.href !== "/" && 
      !item.href.includes("#")
    ).slice(0, 3);
  }
  
  // If we couldn't find the page in navigation, show some default related pages
  return navigationConfig.filter(item => 
    item.href !== "/" && 
    item.href !== currentPath && 
    !item.href.includes("#")
  ).slice(0, 3);
}
