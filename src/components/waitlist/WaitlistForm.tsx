
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GoogleSheetsConfig } from "@/utils/googleSheetsUtil";

interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  handleWaitlistSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  googleSheetConfig: GoogleSheetsConfig;
  openSurvey: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  isSubmitting,
  googleSheetConfig,
  openSurvey,
}) => {
  // Updated Tally.so form URL
  const tallyFormUrl = "https://tally.so/r/wayLpv";
  
  const openWaitlistForm = () => {
    window.open(tallyFormUrl, "_blank", "noopener,noreferrer");
  };
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-center md:text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to experience the ZenTask difference?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            If you are interested in simplifying your child's school life and empowering them for success, we invite you to learn more and join our community!
          </p>
          
          <div className="flex justify-center mb-8">
            <Button 
              size="lg"
              className="bg-[#D946EF] text-white hover:bg-[#C026D3] font-medium px-8 py-3 h-auto text-lg rounded-full"
              onClick={openSurvey}
            >
              <span className="font-bold">Take Our Survey</span> <ArrowRight className="ml-1" />
            </Button>
          </div>

          <div id="waitlist-form">
            <p className="text-white mb-4">Or join our waitlist to get early access and exclusive updates:</p>
            <div className="max-w-md mx-auto flex justify-center">
              <Button 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium whitespace-nowrap"
                disabled={isSubmitting}
                onClick={openWaitlistForm}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-2">
              You'll be redirected to our Tally.so form at <a href={tallyFormUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">this link</a>.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-2/3 mx-auto">
            <img 
              src="/lovable-uploads/70f0ad6f-7af1-4a8c-b78d-b9ba6a4009eb.png" 
              alt="Students using mobile applications" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
