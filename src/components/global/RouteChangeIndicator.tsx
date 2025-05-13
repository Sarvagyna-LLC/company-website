"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function RouteChangeIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isChangingRoute, setIsChangingRoute] = useState(false);
  
  useEffect(() => {
    // Start the loading indicator
    setIsChangingRoute(true);
    
    // Hide the loading indicator after a short delay
    const timer = setTimeout(() => {
      setIsChangingRoute(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);
  
  return (
    <>
      {isChangingRoute && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold-primary z-[100]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </>
  );
}
