
import React from 'react';

export const BenefitsList = () => {
  const benefits = [
    {
      title: "Boost Academic Performance",
      description: "Stay on top of homework, projects, and exams with ZenTask's academic tracking features. Students can organize their assignments, set reminders for due dates, and track their progress, leading to improved grades and a greater sense of accomplishment."
    },
    {
      title: "Cultivate Responsibility and Independence",
      description: "ZenTask encourages students to take ownership of their responsibilities. By managing their own schedules and tasks, they develop crucial life skills that will benefit them far beyond the classroom."
    },
    {
      title: "Academic and Activity Balance",
      description: "Ensure perfect balance between studies and extracurriculars for optimal development."
    },
    {
      title: "Automatic Updates",
      description: "School emails automatically sync to give the alerts."
    },
    {
      title: "Reduced Mental Load",
      description: "Stop carrying schedules in your head - let ZenTask remember everything for you."
    },
    {
      title: "Stay Effortlessly Informed",
      description: "ZenTask keeps you in the loop with timely alerts about your child's after-school classes, homework deadlines, and completed tasks — so you never have to ask, guess, or worry."
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
