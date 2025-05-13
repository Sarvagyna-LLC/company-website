"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { useEffect, useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
