
import React from "react";
import { Check } from "lucide-react";

export const Brochure: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl max-w-6xl mx-auto">
      {/* Left column */}
      <div className="w-full md:w-1/2 bg-[#2454AA] text-white p-8">
        <div className="flex items-center mb-8">
          <div className="bg-[#FFD54F] rounded-full p-4 mr-4">
            <Check className="h-8 w-8 text-[#2454AA]" />
          </div>
          <div className="text-4xl font-bold tracking-tighter">
            ZEN<br />TASK
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
        <p className="mb-6">
          ZenTask is an early-stage edtech startup focused on solving a critical
          everyday challenge faced by parents and students—managing
          after-school classes, schoolwork, reminders and communications
          in one place. Our goal is to reduce chaos and bring calm through smart
          scheduling, reminders, and task planning.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          To empower families with a simple, intuitive tool that keeps them
          organized, informed, and stress-free in managing after-school education
          and related tasks.
        </p>

        <h2 className="text-2xl font-bold mb-4">The Problem We're Solving:</h2>
        <ul className="list-none space-y-3 mb-6">
          <li className="flex">
            <span className="mr-2">•</span> 
            <span>
              Parents and students struggle to: Track multiple after-school
              classes and tuition timings
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span> 
            <span>
              Stay updated with school announcements, PTMs, and events
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span> 
            <span>
              Manage daily school tasks, homework, and projects
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span> 
            <span>
              Avoid confusion, missed classes, or last-minute scrambles
            </span>
          </li>
        </ul>

        <p className="font-medium">
          This leads to stress, time loss, and even financial waste.
        </p>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/2">
        {/* Top section - light blue */}
        <div className="bg-[#D3E4FD] p-8">
          <h2 className="text-2xl font-bold text-[#2454AA] mb-4 text-center">
            Smart After-School<br />Scheduler for<br />Parents and Students
          </h2>
          <p className="text-center text-[#2454AA] font-bold text-xl mt-6">
            <a href="https://www.zentask.in" className="hover:underline">
              www.zentask.in
            </a>
          </p>
        </div>

        {/* Middle section - light yellow */}
        <div className="bg-[#FFF8E6] p-8">
          <h2 className="text-2xl font-bold text-[#2454AA] mb-4">Target Users</h2>
          <ul className="list-none space-y-3 mb-6 text-[#2454AA]">
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>Parents of children aged 6-16</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>Students in private/International schools</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>Schools offering extracurricular classes or multiple schedules</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2454AA] mt-6 mb-4">Current Stage</h2>
          <ul className="list-none space-y-3 text-[#2454AA]">
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>Product in development (early prototype)</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>
                Website 
                <a href="https://www.zentask.in" className="hover:underline ml-1">
                  www.zentask.in
                </a>
              </span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span> 
              <span>Location Hyderabad, India</span>
            </li>
          </ul>
        </div>

        {/* Bottom sections */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#2454AA] p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Business Model</h2>
            <p>
              ZenTask will operate on a premium subscription model
            </p>
          </div>
          <div className="bg-[#D3E4FD] p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#2454AA]">Contact</h2>
            <p className="text-[#2454AA]">
              <a href="mailto:sailajad@zentask.in" className="hover:underline block mb-2">
                sailajad@zentask.in
              </a>
              <a href="https://www.zentask.in" className="hover:underline block">
                www.zentask.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
