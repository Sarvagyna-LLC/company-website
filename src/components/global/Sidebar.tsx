"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  BookOpen,
  Users,
  Briefcase,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Building,
  FileText,
  Award,
  History,
  Video,
  Download,
  BookMarked,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  className?: string;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavItem[];
}

export default function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    company: false,
    resources: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarCollapsed", String(newState));
    }
  };

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
      description: "Return to homepage",
    },
    {
      title: "Services",
      href: "/services",
      icon: <Sparkles className="h-4 w-4" />,
      description: "Our AI services",
    },
    {
      title: "Resources",
      href: "/resources",
      icon: <BookOpen className="h-4 w-4" />,
      description: "Knowledge base and guides",
      children: [
        {
          title: "Documentation",
          href: "/resources/documentation",
          icon: <FileText className="h-3.5 w-3.5" />,
        },
        {
          title: "Tutorials",
          href: "/resources/tutorials",
          icon: <GraduationCap className="h-3.5 w-3.5" />,
        },
        {
          title: "Case Studies",
          href: "/resources/case-studies",
          icon: <BookMarked className="h-3.5 w-3.5" />,
        },
        {
          title: "Videos",
          href: "/resources/videos",
          icon: <Video className="h-3.5 w-3.5" />,
        },
        {
          title: "Downloads",
          href: "/resources/downloads",
          icon: <Download className="h-3.5 w-3.5" />,
        },
      ],
    },
    {
      title: "Company",
      href: "/about",
      icon: <Building className="h-4 w-4" />,
      description: "About our company",
      children: [
        {
          title: "About Us",
          href: "/about",
          icon: <Users className="h-3 w-3" />,
        },
        {
          title: "Our Team",
          href: "/about/team",
          icon: <Users className="h-3 w-3" />,
        },
        {
          title: "History",
          href: "/about/history",
          icon: <History className="h-3.5 w-3.5" />,
        },
        {
          title: "Awards",
          href: "/about/awards",
          icon: <Award className="h-3.5 w-3.5" />,
        },
      ],
    },
    {
      title: "Careers",
      href: "/careers",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ];

  const bottomNavItems: NavItem[] = [
    {
      title: "Help",
      href: "/help",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState) {
      setIsCollapsed(savedState === "true");
    }
  }, []);

  if (!isMounted) return null;

  return (
    <aside className={cn("flex flex-col h-full w-[240px] border-r bg-background", isCollapsed && "w-[56px]", className)}>
      {/* Logo & Toggle */}
      <div className="p-2 flex items-center justify-between border-b">
        {!isCollapsed && (
          <Link href="/" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-gold">
            Sarvagyna
          </Link>
        )}
        <Button variant="ghost" size="sm" onClick={toggleSidebar} className={cn("h-6 w-6 p-0", isCollapsed ? "mx-auto" : "ml-auto")}>
          {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-0.5 px-1">
          {navItems.map((item) => (
            <li key={item.title} className="relative">
              {item.children ? (
                <div>
                  <div
                    className={cn(
                      "flex items-center px-2 py-1.5 rounded-md transition-colors text-xs cursor-pointer",
                      isActive(item.href) ? "bg-gold-light/30 text-primary" : "text-muted-foreground hover:bg-accent"
                    )}
                    onClick={() => toggleSection(item.title.toLowerCase())}
                  >
                    <div className="flex items-center justify-center min-w-[24px] w-[24px]">
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    {!isCollapsed && (
                      expandedSections[item.title.toLowerCase()] ? (
                        <ChevronUp className="ml-auto h-3 w-3" />
                      ) : (
                        <ChevronDown className="ml-auto h-3 w-3" />
                      )
                    )}
                  </div>

                  {/* Nested Items */}
                  {!isCollapsed && expandedSections[item.title.toLowerCase()] && (
                    <ul className="pl-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href}
                            className={cn(
                              "flex items-center px-2 py-1.5 text-xs rounded-md transition-colors",
                              isActive(child.href) ? "bg-gold-light/20 text-primary" : "text-muted-foreground hover:bg-accent"
                            )}
                          >
                            <div className="flex items-center justify-center min-w-[20px] w-[20px]">
                              {child.icon}
                            </div>
                            <span className="ml-3">{child.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tooltip for collapsed */}
                  {isCollapsed && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="absolute top-0 left-0 w-full h-full" />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p className="font-medium">{item.title}</p>
                          {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                          <ul className="space-y-1 mt-2">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <Link href={child.href} className="flex items-center text-sm hover:text-primary">
                                  <div className="flex items-center justify-center min-w-[20px] w-[20px]">
                                    {child.icon}
                                  </div>
                                  <span className="ml-2">{child.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md transition-colors",
                          isActive(item.href)
                            ? "bg-gold-light/30 text-primary"
                            : "text-muted-foreground hover:bg-accent",
                          isCollapsed ? "justify-center" : "justify-start"
                        )}
                      >
                        <div className="flex items-center justify-center min-w-[24px] w-[24px]">
                          {item.icon}
                        </div>
                        {!isCollapsed && <span className="ml-3">{item.title}</span>}
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                        {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Nav */}
      <div className="border-t border-border py-4">
        <ul className="space-y-1 px-2">
          {bottomNavItems.map((item) => (
            <li key={item.title}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md transition-colors",
                        isActive(item.href)
                          ? "bg-gold-light/30 text-primary"
                          : "text-muted-foreground hover:bg-accent",
                        isCollapsed ? "justify-center" : "justify-start"
                      )}
                    >
                      <div className="flex items-center justify-center min-w-[24px] w-[24px]">
                        {item.icon}
                      </div>
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </Link>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right">
                      <p>{item.title}</p>
                      {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
