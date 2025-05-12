
import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto mb-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2454AA] text-center">
            Is keeping track of your child's school activities, homework, and extracurriculars after school a <span className="text-[#F59E0B]">juggling</span> act?
          </h2>
          
          <div className="flex justify-center mb-6">
            <Button 
              onClick={() => {
                document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium px-8 py-3 h-auto text-lg rounded-full mx-auto"
            >
              Join Waitlist
            </Button>
          </div>
          
          <p className="text-lg text-gray-700 text-center">
            Discover ZenTask – the ultimate student activity tracker designed to bring peace of mind to busy parents and help students thrive!
          </p>
        </div>
      </div>
    </section>
  );
};
