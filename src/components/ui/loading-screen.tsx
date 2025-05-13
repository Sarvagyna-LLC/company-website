"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LoadingScreenProps {
  /**
   * Minimum display time in milliseconds to prevent flashing
   */
  minimumDisplayTime?: number;
  /**
   * Whether to show the loading screen
   */
  isLoading?: boolean;
  /**
   * Custom loading message
   */
  message?: string;
  /**
   * Whether to show the logo
   */
  showLogo?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function LoadingScreen({
  minimumDisplayTime = 1000,
  isLoading = true,
  message = "Loading...",
  showLogo = true,
  className,
}: LoadingScreenProps) {
  const [shouldDisplay, setShouldDisplay] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldDisplay(false);
      }, minimumDisplayTime);
      return () => clearTimeout(timer);
    } else {
      setShouldDisplay(true);
    }
  }, [isLoading, minimumDisplayTime]);

  return (
    <AnimatePresence>
      {shouldDisplay && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-40 h-40"
              >
                <Image
                  src="/sarvagyna-high-resolution-logo-transparent.png"
                  alt="Sarvagyna Logo"
                  width={160}
                  height={160}
                  className="w-auto h-auto"
                  priority={true}
                  unoptimized={true}
                />
              </motion.div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-3 h-3 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-3 h-3 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              
              <p className="text-lg font-medium text-muted-foreground">{message}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * A page loading component that shows a full-screen loading state
 */
export function PageLoading({ message }: { message?: string }) {
  return <LoadingScreen message={message || "Loading page..."} />;
}

/**
 * A component loading spinner for smaller loading states
 */
export function ComponentLoading({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center items-center py-8", className)}>
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 rounded-full bg-gold-primary animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
