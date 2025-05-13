"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Home, 
  Search, 
  AlertTriangle 
} from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gold-light/20 flex items-center justify-center px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="max-w-xl w-full text-center"
      >
        <div className="relative mb-8">
          <AlertTriangle 
            className="h-24 w-24 text-primary mx-auto mb-4 animate-pulse" 
            strokeWidth={1.5} 
          />
          <Bot 
            className="absolute top-0 right-1/2 translate-x-1/2 h-16 w-16 text-muted-foreground opacity-20" 
            strokeWidth={1.5} 
          />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          404 - Page <span className="bg-gradient-gold bg-clip-text text-transparent">Not Found</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Oops! Looks like our AI got a bit lost. The page you're searching for seems to have wandered off into the digital wilderness.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild 
            className="border border-primary text-primary hover:bg-primary/10"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>

          <Button 
            className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
          >
            <Link href="/search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search Site
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            While our AI couldn't find the exact page, we're always ready to help you navigate.
          </p>
          <p className="mt-2 italic">
            Maybe this is a sign to explore something new?
          </p>
        </div>
      </motion.div>
    </div>
  );
} 