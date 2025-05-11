
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BenefitsList } from "@/components/BenefitsList";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, List } from "lucide-react";
import emailjs from '@emailjs/browser';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmails, setWaitlistEmails] = useState<string[]>([]);
  
  // Load emails from localStorage on component mount
  useEffect(() => {
    const savedEmails = localStorage.getItem('waitlistEmails');
    if (savedEmails) {
      setWaitlistEmails(JSON.parse(savedEmails));
    }
  }, []);
  
  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Log the submission (for demonstration)
      console.log("Email submitted to waitlist:", email);
      
      // Store the email in localStorage
      const updatedEmails = [...waitlistEmails, email];
      localStorage.setItem('waitlistEmails', JSON.stringify(updatedEmails));
      setWaitlistEmails(updatedEmails);
      
      // Simulate a small delay to mimic network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success message
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you soon!",
      });
      
      // In production, you would replace the above with actual EmailJS code:
      // Initialize with your EmailJS user ID
      // emailjs.init("YOUR_USER_ID");
      // Send the email
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     to_email: "sailajad@meraevents.com",
      //     from_email: email,
      //     message: `${email} has been added to the waitlist`,
      //     subject: "New ZenTask Waitlist Signup"
      //   }
      // );
      
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
      description: "All waitlist email addresses have been cleared.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-4 bg-[#2454AA]">
        <div className="container mx-auto text-center flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">ZenTask</h1>
          <Button 
            variant="ghost"
            className="text-white hover:bg-[#1A4080]/50"
            onClick={() => setShowWaitlist(!showWaitlist)}
          >
            <List className="h-5 w-5 mr-1" /> Admin
          </Button>
        </div>
      </header>

      {/* Admin Panel for Waitlist */}
      {showWaitlist && (
        <div className="bg-white p-4 border-b shadow-md">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Waitlist Emails</h2>
              <Button variant="destructive" size="sm" onClick={clearWaitlist}>
                Clear All
              </Button>
            </div>
            
            {waitlistEmails.length === 0 ? (
              <p className="text-gray-500 italic">No emails in waitlist yet.</p>
            ) : (
              <div className="bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto">
                <ul className="space-y-2">
                  {waitlistEmails.map((email, index) => (
                    <li key={index} className="bg-white p-2 rounded border">
                      {email}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-500">Total: {waitlistEmails.length} email(s)</p>
              </div>
            )}
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2454AA]">
                Is keeping track of your child's after school activities, homework, and extracurriculars a <span className="text-[#F59E0B]">juggling</span> act?
              </h2>
              
              <div className="flex justify-center mb-6">
                <Button 
                  onClick={() => {
                    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#2454AA] hover:bg-[#1A4080] text-white font-medium px-8 py-3 h-auto text-lg rounded-full mx-auto"
                >
                  Join Our Waitlist
                </Button>
              </div>
              
              <p className="text-lg text-gray-700">
                Discover ZenTask – the ultimate student activity tracker designed to bring peace of mind to busy parents and help students thrive!
              </p>
            </div>
          </div>
        </section>

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
                  <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto flex gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#F59E0B]"
                      disabled={isSubmitting}
                    />
                    <Button 
                      type="submit"
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} ZenTask. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
