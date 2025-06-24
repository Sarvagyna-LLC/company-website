"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Sidebar from "@/components/global/Sidebar";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import RelatedPages from "@/components/global/RelatedPages";
import RouteChangeIndicator from "@/components/global/RouteChangeIndicator";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set page as loaded after a short delay
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
      // Add a slight delay before hiding the loading screen
      setTimeout(() => setIsLoading(false), 300);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Determine if sidebar should be shown based on the current route
  useEffect(() => {
    // Show sidebar on dashboard or admin pages
    const sidebarRoutes = ["/dashboard", "/admin", "/account", "/settings", "/resources"];
    const shouldShowSidebar = sidebarRoutes.some(route => pathname.startsWith(route));
    setShowSidebar(shouldShowSidebar);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <RouteChangeIndicator />
      <LoadingScreen isLoading={isLoading} message="Preparing AI experience..." />
      <Header />
      
      <div className="flex flex-1">
        {/* Sidebar - only shown on specific routes */}
        {showSidebar && (
          <div 
            className="hidden md:block sticky top-16 h-[calc(100vh-4rem)]"
            data-nextjs-scroll-focus-boundary
          >
            <Sidebar />
          </div>
        )}
        
        {/* Main content */}
        <div className={`flex-1 flex flex-col ${showSidebar ? 'md:ml-0' : ''}`}>
          <div className={`${showSidebar ? 'container-fluid px-4 md:px-6' : 'container'} mt-16 pt-4`}>
            <Breadcrumbs />
          </div>
          <main className={`flex-1 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Remove padding from this container so each child section can define its own padding and background */}
            <div className="">
              {children}
            </div>
          </main>
          <RelatedPages />
          <Footer />
        </div>
      </div>
    </div>
  );
}
