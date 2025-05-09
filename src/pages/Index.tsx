
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BenefitsList } from "@/components/BenefitsList";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  
  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you soon!",
    });
  };
  
  const openSurvey = () => {
    window.open("https://tally.so/r/meyybo", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-4 bg-[#2454AA]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">ZenTask</h1>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2454AA]">
                Is keeping track of your child's school activities, homework, and extracurriculars a <span className="text-[#F59E0B]">juggling</span> act?
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
                    className="bg-white text-[#2454AA] hover:bg-gray-100 font-medium px-8 py-3 h-auto text-lg rounded-full"
                    onClick={openSurvey}
                  >
                    Take Our Survey <ArrowRight className="ml-1" />
                  </Button>
                </div>

                <div id="waitlist-form">
                  <p className="text-white mb-4">Or join our waitlist to get early access and exclusive updates:</p>
                  <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto flex gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#F59E0B]"
                    />
                    <Button 
                      type="submit"
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium whitespace-nowrap"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto">
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
