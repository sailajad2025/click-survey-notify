
import React from "react";
import { Button } from "@/components/ui/button";

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
          
          <Button 
            onClick={scrollToWaitlist}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium mb-6"
          >
            Join Waitlist
          </Button>
          
          <p className="text-lg text-gray-700 text-center">
            Discover ZenTask – the ultimate student activity tracker designed to bring peace of mind to busy parents and help students thrive!
          </p>
        </div>
      </div>
    </section>
  );
};
