"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig, NavItem } from "@/lib/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on homepage
  if (pathname === "/") {
    return null;
  }

  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav aria-label="Breadcrumbs" className="py-2 text-sm">
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
            )}
            
            <Link
              href={breadcrumb.href}
              className={cn(
                "hover:text-primary transition-colors",
                breadcrumb.isCurrent 
                  ? "font-medium text-primary" 
                  : "text-muted-foreground"
              )}
              aria-current={breadcrumb.isCurrent ? "page" : undefined}
            >
              {index === 0 ? (
                <span className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  {breadcrumb.label}
                </span>
              ) : (
                breadcrumb.label
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Always start with home
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/", isCurrent: pathname === "/" }
  ];
  
  if (pathname === "/") {
    return breadcrumbs;
  }

  // Split the pathname into segments
  const segments = pathname.split("/").filter(Boolean);
  
  // Build up the breadcrumbs based on the path segments
  let currentPath = "";
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isCurrent = currentPath === pathname;
    
    // Try to find a matching navigation item to get a proper label
    let label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    
    // Check main navigation items
    const navItem = findNavItemByPath(currentPath);
    if (navItem) {
      label = navItem.title;
    }
    
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrent
    });
  });
  
  return breadcrumbs;
}

// Helper function to find a navigation item by its path
function findNavItemByPath(path: string): NavItem | undefined {
  // First check top-level items
  const directMatch = navigationConfig.find(item => item.href === path);
  if (directMatch) {
    return directMatch;
  }
  
  // Then check subitems
  for (const item of navigationConfig) {
    if (item.subItems) {
      const subItemMatch = item.subItems.find(subItem => subItem.href === path);
      if (subItemMatch) {
        return subItemMatch;
      }
    }
  }
  
  return undefined;
}
