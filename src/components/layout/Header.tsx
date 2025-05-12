
import React from "react";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

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
      <div className="container mx-auto text-center flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">ZenTask</h1>
        <div className="flex items-center gap-4">
          {googleSheetsConfigDialog}
          
          <Button 
            variant="ghost"
            className="text-white hover:bg-[#1A4080]/50"
            onClick={() => setShowWaitlist(!showWaitlist)}
          >
            <List className="h-5 w-5 mr-1" /> Admin
          </Button>
        </div>
      </div>
    </header>
  );
};
