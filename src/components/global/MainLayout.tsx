"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import RelatedPages from "@/components/global/RelatedPages";
import RouteChangeIndicator from "@/components/global/RouteChangeIndicator";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useEffect, useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set page as loaded after a short delay
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
      // Add a slight delay before hiding the loading screen
      setTimeout(() => setIsLoading(false), 300);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <RouteChangeIndicator />
      <LoadingScreen isLoading={isLoading} message="Preparing AI experience..." />
      <Header />
      <div className="container mt-16 pt-4">
        <Breadcrumbs />
      </div>
      <main className={`flex-1 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      <RelatedPages />
      <Footer />
    </div>
  );
}
