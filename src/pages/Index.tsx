
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
      <header className="w-full py-6 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">ZenTask</h1>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-primary">
                Is keeping track of your child's school activities, homework, and extracurriculars a <span className="text-primary">juggling</span> act?
              </h2>
              
              <div className="flex justify-center mb-6">
                <Button 
                  onClick={() => {
                    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 h-auto text-lg rounded-full mx-auto"
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
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 text-center">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary/90">
                Unlock Your Child's Potential with ZenTask:
              </h2>
            </div>
            
            <BenefitsList />
          </div>
        </section>

        {/* Ready to Experience Section */}
        <section className="py-16 bg-primary">
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
                    className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 h-auto text-lg rounded-full"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
                    />
                    <Button 
                      type="submit"
                      className="bg-white hover:bg-gray-100 text-primary font-medium whitespace-nowrap"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                    alt="Teacher and students using tablets" 
                    className="max-w-full h-auto rounded-lg"
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
