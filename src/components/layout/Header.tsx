
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
        <h1 className="text-3xl font-bold text-white">ZenTask</h1>
      </div>
    </header>
  );
};
