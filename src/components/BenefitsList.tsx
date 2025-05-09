
import React from 'react';

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
