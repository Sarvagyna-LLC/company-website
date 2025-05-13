export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  subItems?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  { 
    title: "Home", 
    href: "/",
    description: "Sarvagyna AI Startup Homepage"
  },
  { 
    title: "Services", 
    href: "/services",
    description: "AI-powered solutions and services"
  },
  { 
    title: "Research", 
    href: "/research",
    description: "Cutting-edge AI research and innovative projects"
  },
  { 
    title: "Company", 
    href: "/company",
    description: "About Sarvagyna",
    subItems: [
      { 
        title: "About", 
        href: "/about",
        description: "Learn about Sarvagyna's mission and vision"
      },
      { 
        title: "Team", 
        href: "/team",
        description: "Meet the innovative minds behind Sarvagyna"
      },
      { 
        title: "Careers", 
        href: "/careers",
        description: "Join our innovative AI team"
      },
      { 
        title: "Press", 
        href: "/press",
        description: "Latest news and media coverage"
      }
    ]
  },
  { 
    title: "Resources", 
    href: "/resources",
    description: "Knowledge hub for AI insights",
    subItems: [
      { 
        title: "Blog", 
        href: "/blog",
        description: "Insights and thought leadership"
      },
      { 
        title: "Documentation", 
        href: "/docs",
        description: "Technical guides and API references"
      },
      { 
        title: "Case Studies", 
        href: "/case-studies",
        description: "Real-world AI applications"
      },
      { 
        title: "FAQs", 
        href: "/faqs",
        description: "Answers to common questions"
      }
    ]
  },
  { 
    title: "Contact", 
    href: "/contact",
    description: "Get in touch with Sarvagyna"
  }
];

// Utility functions for navigation
export const getNavItemByTitle = (title: string): NavItem | undefined => 
  navigationConfig.find(item => item.title.toLowerCase() === title.toLowerCase());

export const getSubItemsByParentTitle = (parentTitle: string): NavItem[] => {
  const parentItem = getNavItemByTitle(parentTitle);
  return parentItem?.subItems || [];
}; 