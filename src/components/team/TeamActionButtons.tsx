"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, Award } from "lucide-react";
import { useCallback } from "react";

interface TeamActionButtonsProps {
  variant?: "default" | "join";
}

const TeamActionButtons = ({ variant = "default" }: TeamActionButtonsProps) => {
  const router = useRouter();

  const handleViewTeam = useCallback(() => {
    try {
      console.log('Attempting to navigate to /team');
      console.trace('Navigation stack trace');
      
      // Verify router exists
      if (!router) {
        console.error('Router is not initialized');
        alert('Navigation error: Router not available');
        return;
      }

      // Attempt navigation
      router.push("/team");
    } catch (error) {
      console.error('Navigation error:', error);
      alert(`Failed to navigate: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, [router]);

  const handleJoinTeam = useCallback(() => {
    try {
      console.log('Attempting to navigate to /careers');
      console.trace('Navigation stack trace');
      
      // Verify router exists
      if (!router) {
        console.error('Router is not initialized');
        alert('Navigation error: Router not available');
        return;
      }

      // Attempt navigation
      router.push("/careers");
    } catch (error) {
      console.error('Navigation error:', error);
      alert(`Failed to navigate: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, [router]);

  if (variant === "join") {
    return (
      <Button 
        onClick={handleJoinTeam}
        className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-10 py-4 text-lg"
      >
        View Open Positions
      </Button>
    );
  }

  return (
    <div className="flex justify-center gap-4">
      <Button 
        onClick={handleViewTeam}
        className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90 px-8 py-3"
      >
        <Users className="mr-2 h-5 w-5" /> View Team
      </Button>
      <Button 
        onClick={handleViewTeam}
        className="border border-gold-primary text-primary hover:bg-gold-accent/10 px-8 py-3"
      >
        <Award className="mr-2 h-5 w-5" /> Our Achievements
      </Button>
    </div>
  );
};

export default TeamActionButtons; 