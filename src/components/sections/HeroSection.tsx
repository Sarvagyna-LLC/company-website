import React, { useState } from "react";
import { Button } from "../../../sarvagyna-website/src/components/ui/button";
import { scrollToSection } from "../../../sarvagyna-website/src/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../sarvagyna-website/src/components/ui/dialog";
import { ArrowRight, Zap, Shield, Brain, Download } from "lucide-react";
import DemoRequestForm from "../../../sarvagyna-website/src/components/forms/DemoRequestForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function HeroSection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* ... existing code ... */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border-gold-primary text-primary hover:bg-gold-accent/10 px-8 py-6 h-auto"
            size="lg"
          >
            Request Demo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center">Request a Personalized Demo</DialogTitle>
            <DialogDescription className="text-center">
              Fill out the form below and our team will reach out to schedule your personalized demo.
            </DialogDescription>
          </DialogHeader>
          <DemoRequestForm onSuccess={() => setIsDemoOpen(false)} />
        </DialogContent>
      </Dialog>
      {/* ... rest of existing code ... */}
    </section>
  );
} 