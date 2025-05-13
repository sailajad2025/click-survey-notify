
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsList } from "@/components/BenefitsList";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { WaitlistAdmin } from "@/components/waitlist/WaitlistAdmin";
import { 
  GoogleSheetsConfig,
  getGoogleSheetConfig
} from "@/utils/googleSheetsUtil";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmails, setWaitlistEmails] = useState<string[]>([]);
  const [googleSheetConfig, setGoogleSheetConfig] = useState<GoogleSheetsConfig>(getGoogleSheetConfig());
  
  // Updated Tally.so form configuration
  const tallyFormId = "wayLpv";
  
  // Load emails from localStorage on component mount
  useEffect(() => {
    try {
      const savedEmails = localStorage.getItem('waitlistEmails');
      if (savedEmails) {
        setWaitlistEmails(JSON.parse(savedEmails));
      }
    } catch (error) {
      console.error("Error loading waitlist emails:", error);
      setWaitlistEmails([]);
    }
  }, []);
  
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Trying different parameter formats that might work with Tally
      const encodedEmail = encodeURIComponent(email);
      
      // Try multiple parameters since we're not sure which one will work with your form
      const formUrl = `https://tally.so/r/${tallyFormId}?prefill_Email=${encodedEmail}&email=${encodedEmail}&prefill_email=${encodedEmail}&autoSubmit=1`;
      
      console.log("Opening form URL:", formUrl);
      window.open(formUrl, "_blank");
      
      toast.success("You've been added to our waitlist!");
      
      // Update local state with the new email for admin view
      const updatedEmails = [...waitlistEmails];
      if (!updatedEmails.includes(email)) {
        updatedEmails.push(email);
        setWaitlistEmails(updatedEmails);
        
        // Save to localStorage for persistence
        try {
          localStorage.setItem('waitlistEmails', JSON.stringify(updatedEmails));
        } catch (error) {
          console.error("Error saving email to localStorage:", error);
        }
      }
      
      setEmail("");
    } catch (error) {
      console.error("Error processing submission:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const openSurvey = () => {
    window.open(`https://tally.so/r/${tallyFormId}`, "_blank", "noopener,noreferrer");
  };
  
  const clearWaitlist = () => {
    try {
      localStorage.removeItem('waitlistEmails');
      setWaitlistEmails([]);
      toast.success("Waitlist cleared from local storage.");
    } catch (error) {
      console.error("Error clearing waitlist:", error);
      toast.error("Failed to clear waitlist from local storage.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <Header 
        setShowWaitlist={setShowWaitlist} 
        showWaitlist={showWaitlist}
      />

      {/* Admin Panel for Waitlist */}
      {showWaitlist && (
        <WaitlistAdmin
          waitlistEmails={waitlistEmails}
          googleSheetConfig={googleSheetConfig}
          clearWaitlist={clearWaitlist}
        />
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Section */}
        <section className="py-16 bg-[#FFF8E6]">
          <div className="container mx-auto px-4 text-center">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2454AA]">
                Unlock Your Child's Potential with ZenTask:
              </h2>
            </div>
            
            <BenefitsList />
          </div>
        </section>

        {/* Ready to Experience Section */}
        <section className="py-16 bg-[#2454AA]">
          <WaitlistForm
            email={email}
            setEmail={setEmail}
            isSubmitting={isSubmitting}
            handleWaitlistSubmit={handleWaitlistSubmit}
            googleSheetConfig={googleSheetConfig}
            openSurvey={openSurvey}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
