
import React from 'react';

export const BenefitsList = () => {
  const benefits = [
    {
      title: "All-in-One Task Management",
      description: "Track homework, projects, extracurriculars, and school events in one central dashboard."
    },
    {
      title: "Priority Assistant",
      description: "Help your child prioritize assignments and activities with our smart scheduling features."
    },
    {
      title: "Parent-Teacher Connection",
      description: "Stay connected with teachers and receive real-time updates about your child's progress."
    },
    {
      title: "Progress Tracking",
      description: "Celebrate successes with visual progress indicators that motivate your child."
    },
    {
      title: "Smart Reminders",
      description: "Never miss a deadline with customizable alerts for upcoming assignments and activities."
    },
    {
      title: "Easy to Use Interface",
      description: "Intuitive design that both parents and children can navigate with ease."
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className={`${cardColors[index]} p-6 rounded-xl shadow-md transition-transform hover:scale-105`}>
          <h3 className={`text-xl font-semibold mb-3 ${textColors[index]}`}>{benefit.title}</h3>
          <p className="text-gray-700">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
