
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }
    
    // Create mailto link with the entered email address
    const subject = encodeURIComponent("New Waitlist Signup");
    const body = encodeURIComponent(`New signup from: ${email}`);
    window.location.href = `mailto:sailajad@meraevents.com?subject=${subject}&body=${body}`;
    
    // Show toast confirmation
    toast({
      title: "Success!",
      description: "Opening email client to complete your waitlist signup.",
    });
    
    // Reset the form
    setEmail("");
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">All-in-One Task Management</h3>
                <p className="text-gray-600">Track homework, projects, extracurriculars, and school events in one central dashboard.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Priority Assistant</h3>
                <p className="text-gray-600">Help your child prioritize assignments and activities with our smart scheduling features.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Parent-Teacher Connection</h3>
                <p className="text-gray-600">Stay connected with teachers and receive real-time updates about your child's progress.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Progress Tracking</h3>
                <p className="text-gray-600">Celebrate successes with visual progress indicators that motivate your child.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Smart Reminders</h3>
                <p className="text-gray-600">Never miss a deadline with customizable alerts for upcoming assignments and activities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Easy to Use Interface</h3>
                <p className="text-gray-600">Intuitive design that both parents and children can navigate with ease.</p>
              </div>
            </div>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
