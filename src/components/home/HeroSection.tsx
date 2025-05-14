
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToWaitlist = () => {
    // This will find the element with id="waitlist-form" and scroll to it
    const waitlistElement = document.getElementById("waitlist-form");
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto mb-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2454AA] text-center">
            Is keeping track of your child's school activities, homework, and extracurriculars after school a <span className="text-[#F59E0B]">juggling</span> act?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium"
            >
              Join Waitlist
            </Button>
            
            <a 
              href="https://zentask.in" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center text-[#2454AA] hover:text-[#F59E0B] font-medium transition-colors"
            >
              Visit zentask.in <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <p className="text-lg text-gray-700 text-center">
            Discover Zentask – the ultimate student activity tracker designed to bring peace of mind to busy parents and help students thrive!
          </p>
        </div>
      </div>
    </section>
  );
};
