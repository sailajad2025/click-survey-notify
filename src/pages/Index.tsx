
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { saveEmailToGoogleSheet, getGoogleSheetConfig, saveGoogleSheetConfig, GoogleSheetsConfig } from "@/utils/googleSheetsUtil";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsList } from "@/components/BenefitsList";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { WaitlistAdmin } from "@/components/waitlist/WaitlistAdmin";
import { GoogleSheetsConfigDialog } from "@/components/settings/GoogleSheetsConfigDialog";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmails, setWaitlistEmails] = useState<string[]>([]);
  const [googleSheetConfig, setGoogleSheetConfig] = useState<GoogleSheetsConfig>(getGoogleSheetConfig());
  const [newSheetId, setNewSheetId] = useState(googleSheetConfig.spreadsheetId);
  const [newSheetName, setNewSheetName] = useState(googleSheetConfig.sheetName);
  
  // Load emails from localStorage on component mount
  useEffect(() => {
    const savedEmails = localStorage.getItem('waitlistEmails');
    if (savedEmails) {
      setWaitlistEmails(JSON.parse(savedEmails));
    }
  }, []);
  
  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Log the submission (for demonstration)
      console.log("Email submitted to waitlist:", email);
      
      // Store the email in localStorage as backup
      const updatedEmails = [...waitlistEmails, email];
      localStorage.setItem('waitlistEmails', JSON.stringify(updatedEmails));
      setWaitlistEmails(updatedEmails);
      
      // Try to save to Google Sheets
      let saveSuccessful = false;
      let errorMessage = "";
      
      if (googleSheetConfig.spreadsheetId) {
        try {
          saveSuccessful = await saveEmailToGoogleSheet(email, googleSheetConfig);
        } catch (err) {
          console.error("Error saving to Google Sheets:", err);
          errorMessage = "Unable to save to Google Sheets. Your email is saved locally.";
        }
      } else {
        errorMessage = "Google Sheets not configured. Your email is saved locally.";
      }
      
      // Simulate a small delay to mimic network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success message
      if (saveSuccessful) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist and saved to Google Sheets!",
        });
      } else if (errorMessage) {
        toast({
          title: "Partially Successful",
          description: errorMessage,
          variant: "default",
        });
      } else {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you soon!",
        });
      }
      
      setEmail("");
    } catch (error) {
      console.error("Error processing submission:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to join waitlist at the moment. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const openSurvey = () => {
    window.open("https://tally.so/r/meyybo", "_blank");
  };
  
  const clearWaitlist = () => {
    localStorage.removeItem('waitlistEmails');
    setWaitlistEmails([]);
    toast({
      title: "Waitlist Cleared",
      description: "All waitlist email addresses have been cleared from local storage.",
    });
  };

  const saveSheetSettings = () => {
    const config = {
      spreadsheetId: newSheetId.trim(),
      sheetName: newSheetName.trim() || 'Sheet1'
    };
    saveGoogleSheetConfig(config);
    setGoogleSheetConfig(config);
    toast({
      title: "Settings Saved",
      description: "Google Sheets configuration has been updated.",
    });
  };

  // Create configuration dialog component with props
  const configDialog = (
    <GoogleSheetsConfigDialog
      googleSheetConfig={googleSheetConfig}
      newSheetId={newSheetId}
      newSheetName={newSheetName}
      setNewSheetId={setNewSheetId}
      setNewSheetName={setNewSheetName}
      saveSheetSettings={saveSheetSettings}
    />
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <Header 
        setShowWaitlist={setShowWaitlist} 
        showWaitlist={showWaitlist}
        googleSheetsConfigDialog={configDialog}
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
