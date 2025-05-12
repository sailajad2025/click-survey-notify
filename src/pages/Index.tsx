
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { 
  saveEmailToGoogleSheet, 
  getGoogleSheetConfig, 
  saveGoogleSheetConfig, 
  GoogleSheetsConfig,
  isGoogleSheetConfigured,
  setSpreadsheetId
} from "@/utils/googleSheetsUtil";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsList } from "@/components/BenefitsList";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { WaitlistAdmin } from "@/components/waitlist/WaitlistAdmin";
import { GoogleSheetsConfigDialog } from "@/components/settings/GoogleSheetsConfigDialog";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmails, setWaitlistEmails] = useState<string[]>([]);
  const [googleSheetConfig, setGoogleSheetConfig] = useState<GoogleSheetsConfig>(getGoogleSheetConfig());
  const [newSheetId, setNewSheetId] = useState(googleSheetConfig.spreadsheetId);
  const [newSheetName, setNewSheetName] = useState(googleSheetConfig.sheetName);
  
  // Set the default Google Sheet ID on component mount
  useEffect(() => {
    const defaultSpreadsheetId = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRm3h68Xrc5l1pg8RXC3xMWQtWJqfU41N6-ZuCsY4rrIuHX5HC-9Fgz6ne_hKE-rtnm9WsqIV3mVOVR/pub?gid=0&single=true&output=tsv";
    
    // Only set if not already configured
    if (!googleSheetConfig.spreadsheetId) {
      setSpreadsheetId(defaultSpreadsheetId);
      // Update local state as well
      setGoogleSheetConfig({
        ...googleSheetConfig,
        spreadsheetId: defaultSpreadsheetId
      });
      setNewSheetId(defaultSpreadsheetId);
      console.log("Set default spreadsheet ID:", defaultSpreadsheetId);
    }
  }, []);
  
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
      toast.error("Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Current Google Sheet Config:", googleSheetConfig);
      
      // Always attempt to save to Google Sheets
      const saveSuccessful = await saveEmailToGoogleSheet(email, googleSheetConfig);
      
      if (saveSuccessful) {
        toast.success("You've been added to our waitlist!");
        
        // Update local state with the new email
        const updatedEmails = [...waitlistEmails];
        if (!updatedEmails.includes(email)) {
          updatedEmails.push(email);
          setWaitlistEmails(updatedEmails);
        }
        
        setEmail("");
      } else {
        // Failed to save to Google Sheets, save locally as fallback
        const updatedEmails = [...waitlistEmails];
        if (!updatedEmails.includes(email)) {
          updatedEmails.push(email);
          localStorage.setItem('waitlistEmails', JSON.stringify(updatedEmails));
          setWaitlistEmails(updatedEmails);
        }
        
        toast.error("Failed to save to Google Sheets. Email saved locally only.");
        setEmail("");
      }
    } catch (error) {
      console.error("Error processing submission:", error);
      toast.error("Something went wrong. Please try again later.");
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
    toast.success("Waitlist cleared from local storage.");
  };

  const saveSheetSettings = () => {
    const config = {
      spreadsheetId: newSheetId.trim(),
      sheetName: newSheetName.trim() || 'Sheet1'
    };
    saveGoogleSheetConfig(config);
    setGoogleSheetConfig(config);
    toast.success("Google Sheets configuration has been updated.");
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
