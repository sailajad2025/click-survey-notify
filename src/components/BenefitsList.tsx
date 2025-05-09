
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const BenefitsList = () => {
  const benefits = [
    {
      title: "Boost Academic Performance",
      description: "Stay on top of homework, projects, and exams with smart tracking features that help improve grades and build accomplishment."
    },
    {
      title: "Cultivate Responsibility and Independence",
      description: "Empower students to take ownership of their schedules and tasks, developing crucial life skills that extend beyond the classroom."
    },
    {
      title: "Academic and Activities Balance",
      description: "Ensure perfect balance between studies and extracurriculars for optimal development and well-rounded growth."
    },
    {
      title: "Automatic Updates",
      description: "School emails automatically sync, ensuring timely alerts for important events such as orientation sessions, parent-teacher meetings, and other key updates."
    },
    {
      title: "Reduced Mental Load",
      description: "Stop carrying schedules in your head - let ZenTask remember everything for you and your child."
    },
    {
      title: "Stay Effortlessly Informed",
      description: "Receive timely alerts about after-school classes, homework deadlines, and completed tasks — no more guessing or worrying."
    }
  ];

  // Color array with blue and yellow from the image
  const cardColors = [
    'bg-blue-100', // Light blue
    'bg-yellow-100', // Light yellow
    'bg-blue-100', // Light blue
    'bg-yellow-100', // Light yellow
    'bg-blue-100', // Light blue
    'bg-yellow-100', // Light yellow
  ];

  // Text color array with blue and yellow from the image
  const textColors = [
    'text-[#2454AA]', // Dark blue
    'text-[#F59E0B]', // Golden yellow
    'text-[#2454AA]', // Dark blue
    'text-[#F59E0B]', // Golden yellow
    'text-[#2454AA]', // Dark blue
    'text-[#F59E0B]', // Golden yellow
  ];

  // Button background colors
  const buttonColors = [
    'bg-[#2454AA]', // Dark blue
    'bg-[#F59E0B]', // Golden yellow
    'bg-[#2454AA]', // Dark blue
    'bg-[#F59E0B]', // Golden yellow
    'bg-[#2454AA]', // Dark blue
    'bg-[#F59E0B]', // Golden yellow
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className={`${cardColors[index]} p-6 rounded-xl shadow-md transition-transform hover:scale-105`}>
          <div className="flex items-start mb-4">
            <Button 
              className={`${buttonColors[index]} p-1 h-8 w-8 rounded-full flex items-center justify-center mr-3 shadow-md`}
              size="icon"
            >
              <Check className="h-5 w-5 text-white" />
            </Button>
            <h3 className={`text-xl font-semibold ${textColors[index]}`}>{benefit.title}</h3>
          </div>
          <p className="text-gray-700 ml-11">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
