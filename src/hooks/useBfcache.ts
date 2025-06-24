import { useEffect } from 'react';

/**
 * Hook to optimize for back/forward cache (bfcache)
 * Handles page visibility and cleanup for better bfcache compatibility
 */
export function useBfcache() {
  useEffect(() => {
    // Handle page visibility changes for bfcache
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Clean up any ongoing operations when page becomes hidden
        // This helps with bfcache eligibility
      }
    };

    // Handle beforeunload for bfcache optimization
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Don't prevent unload - this would break bfcache
      // Just clean up if needed
      return undefined;
    };

    // Handle pagehide event for bfcache
    const handlePageHide = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page is being cached for bfcache
        console.log('Page cached for bfcache');
      }
    };

    // Handle pageshow event for bfcache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from bfcache
        console.log('Page restored from bfcache');
        // Refresh any time-sensitive data if needed
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);
}
