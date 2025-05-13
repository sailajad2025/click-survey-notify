
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

export const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Replace with your actual Tally.so form ID
  const tallyFormId = "meyybo"; // This is the same ID used in your survey
  const tallySubmitEndpoint = `https://tally.so/submit/${tallyFormId}`;
  
  // Google Doc URL for opening in browser after submission
  const docUrl = "https://docs.google.com/document/d/15Crh6l-zHRXJYkBsenWK-ceuiPtbx3PQsC3Q2vW9mPQ/edit?tab=t.41puokvj5x9r#heading=h.zeg1auslj27d";
  
  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit the email to Tally.so
      const response = await fetch(tallySubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email: email
          }
        }),
      });
      
      if (response.ok) {
        toast.success("You've been added to our waitlist!");
        setEmail("");
        
        // Open the Google Doc in a new tab after successful submission
        window.open(docUrl, "_blank", "noopener,noreferrer");
      } else {
        console.error("Tally submission error:", await response.text());
        toast.error("Unable to join waitlist. Please try again later.");
      }
    } catch (error) {
      console.error("Error processing submission:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto mb-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2454AA] text-center">
            Is keeping track of your child's school activities, homework, and extracurriculars after school a <span className="text-[#F59E0B]">juggling</span> act?
          </h2>
          
          <form onSubmit={handleJoinWaitlist} className="w-full max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium h-10 px-4 text-sm rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
          
          <p className="text-lg text-gray-700 text-center">
            Discover ZenTask – the ultimate student activity tracker designed to bring peace of mind to busy parents and help students thrive!
          </p>
        </div>
      </div>
    </section>
  );
};
