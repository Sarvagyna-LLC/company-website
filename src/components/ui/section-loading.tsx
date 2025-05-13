"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionLoadingProps {
  /**
   * Text to display while loading
   */
  text?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Height of the loading container
   */
  height?: string;
}

export function SectionLoading({
  text = "Loading content...",
  className,
  height = "min-h-[400px]",
}: SectionLoadingProps) {
  return (
    <div className={cn("w-full flex flex-col items-center justify-center", height, className)}>
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-gold-primary"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-t-2 border-gold-secondary"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gold-primary" />
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm font-medium">{text}</p>
      </div>
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border p-4 animate-pulse", className)}>
      <div className="h-40 bg-muted rounded-md mb-4" />
      <div className="h-4 bg-muted rounded w-3/4 mb-2" />
      <div className="h-3 bg-muted rounded w-1/2 mb-4" />
      <div className="space-y-2">
        <div className="h-2 bg-muted rounded w-full" />
        <div className="h-2 bg-muted rounded w-full" />
        <div className="h-2 bg-muted rounded w-3/4" />
      </div>
    </div>
  );
}

export function GridSkeleton({ 
  count = 6, 
  columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  className
}: { 
  count?: number;
  columns?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6", columns, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
