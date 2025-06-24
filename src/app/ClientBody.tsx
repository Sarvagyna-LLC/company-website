"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBfcache } from "@/hooks/useBfcache";

// Create a custom hook to completely disable Next.js auto-scroll behavior
const useDisableNextJsAutoScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store original scrollIntoView method
      const originalScrollIntoView = Element.prototype.scrollIntoView;
      
      // Override scrollIntoView to completely disable Next.js auto-scroll
      Element.prototype.scrollIntoView = function(arg) {
        // Check if this scroll is coming from Next.js router
        const stackTrace = new Error().stack || '';
        if (stackTrace.includes('layout-router.js') || 
            stackTrace.includes('app-router.js') || 
            stackTrace.includes('navigation.js')) {
          // Skip all Next.js auto-scrolling
          console.debug('Prevented Next.js auto-scroll');
          return;
        }
        
        // Allow normal programmatic scrolling
        return originalScrollIntoView.call(this, arg);
      };

      // Also disable scroll restoration for bfcache compatibility
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      return () => {
        // Restore original method when component unmounts
        Element.prototype.scrollIntoView = originalScrollIntoView;
      };
    }
  }, []);
};

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  
  // Use our hooks for optimization
  useDisableNextJsAutoScroll();
  useBfcache(); // Add bfcache optimization
  
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    
    // Enhanced bfcache compatibility
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      
      // Add data attribute to body to prevent auto-scroll
      document.body.setAttribute('data-nextjs-scroll-focus-boundary', '');
      
      // Optimize for bfcache - avoid blocking operations
      // Remove any potential bfcache blockers
      const cleanup = () => {
        // Clear any intervals or timeouts that might block bfcache
        // This is called when page is being cached
      };
      
      // Listen for page hide to clean up
      window.addEventListener('pagehide', cleanup);
      
      return () => {
        window.removeEventListener('pagehide', cleanup);
      };
    }
  }, []);

  return <div className="antialiased" data-nextjs-scroll-focus-boundary>{children}</div>;
}
