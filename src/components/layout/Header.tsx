
import React from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  setShowWaitlist: (show: boolean) => void;
  showWaitlist: boolean;
  googleSheetsConfigDialog: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ 
  setShowWaitlist, 
  showWaitlist,
  googleSheetsConfigDialog 
}) => {
  return (
    <header className="w-full py-6 px-4 bg-[#2454AA]">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <img 
            src="/lovable-uploads/28d6bfe8-5cdd-44f6-a342-918b2d2a603d.png" 
            alt="ZenTask Logo" 
            className="h-10 w-auto"
          />
          <h1 className="text-3xl font-bold text-white">ZenTask</h1>
        </div>
        <div className="absolute top-6 right-4">
          {googleSheetsConfigDialog}
        </div>
      </div>
    </header>
  );
};
