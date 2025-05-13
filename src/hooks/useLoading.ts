"use client";

import { useState, useEffect } from "react";

interface UseLoadingOptions {
  /**
   * Initial loading state
   */
  initialState?: boolean;
  /**
   * Minimum loading time in milliseconds
   */
  minLoadingTime?: number;
  /**
   * Delay before showing loading state (prevents flashing for fast loads)
   */
  loadingDelay?: number;
}

/**
 * Hook to manage loading states with minimum display time and delay
 */
export function useLoading({
  initialState = true,
  minLoadingTime = 1000,
  loadingDelay = 200,
}: UseLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [shouldShowLoading, setShouldShowLoading] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  // Handle the loading state with minimum display time
  useEffect(() => {
    let delayTimer: NodeJS.Timeout | null = null;
    let minTimeTimer: NodeJS.Timeout | null = null;

    if (isLoading) {
      // Set the loading start time
      setLoadingStartTime(Date.now());
      
      // Add a delay before showing the loading state to prevent flashing
      delayTimer = setTimeout(() => {
        setShouldShowLoading(true);
      }, loadingDelay);
    } else {
      // If we're no longer loading, ensure we've shown the loading state for the minimum time
      if (loadingStartTime !== null) {
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        if (remainingTime > 0) {
          minTimeTimer = setTimeout(() => {
            setShouldShowLoading(false);
            setLoadingStartTime(null);
          }, remainingTime);
        } else {
          setShouldShowLoading(false);
          setLoadingStartTime(null);
        }
      } else {
        setShouldShowLoading(false);
      }
    }

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if (minTimeTimer) clearTimeout(minTimeTimer);
    };
  }, [isLoading, loadingDelay, minLoadingTime, loadingStartTime]);

  // Function to start loading
  const startLoading = () => setIsLoading(true);
  
  // Function to stop loading
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading: shouldShowLoading,
    startLoading,
    stopLoading,
    setIsLoading,
  };
}
