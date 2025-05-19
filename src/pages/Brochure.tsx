
import React from "react";
import { Check } from "lucide-react";

const BrochurePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Logo and Title - Yellow Background */}
          <div className="bg-[#FFF8D4] p-8 flex items-center">
            <div className="bg-[#FFDF70] rounded-full p-4 mr-4">
              <Check className="h-8 w-8 text-[#1E3A8A]" />
            </div>
            <div className="text-[#1E3A8A] text-5xl font-bold tracking-tighter leading-none">
              ZEN<br />TASK
            </div>
          </div>

          {/* Company Overview - Dark Blue Background */}
          <div className="bg-[#1E3A8A] text-white p-8 flex-grow">
            <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
            <p className="mb-6 text-lg">
              ZenTask is an early-stage edtech startup focused on solving a critical
              everyday challenge faced by parents and students—managing
              after-school classes, schoolwork, reminders and communications
              in one place. Our goal is to reduce chaos and bring calm through smart
              scheduling, reminders, and task planning.
            </p>
          </div>

          {/* Our Mission - Yellow Background */}
          <div className="bg-[#FFF8D4] p-8">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Our Mission</h2>
            <p className="text-[#1E3A8A] text-lg">
              To empower families with a simple, intuitive tool that keeps them
              organized, informed, and stress free in managing after-school education
              and related tasks.
            </p>
          </div>

          {/* The Problem - Dark Blue Background */}
          <div className="bg-[#1E3A8A] text-white p-8">
            <h2 className="text-3xl font-bold mb-4">The Problem We're Solving:</h2>
            <ul className="list-none space-y-4 mb-6 text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>
                  Parents and students struggle to: Track multiple after-school
                  classes and tuition timings
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>
                  Stay updated with school announcements, PTMs, and events
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>
                  Manage daily school tasks, homework, and projects
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>
                  Avoid confusion, missed classes, or last-minute scrambles
                </span>
              </li>
            </ul>

            <p className="text-lg font-medium">
              This leads to stress, time loss, and even financial waste.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Smart After-School - Light Blue Background */}
          <div className="bg-[#D3E4FD] p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 text-center">
              Smart After-School<br />Scheduler for<br />Parents and Students
            </h2>
            <p className="text-center text-[#1E3A8A] font-bold text-xl mt-4">
              www.zentask.in
            </p>
          </div>

          {/* Target Users - Yellow Background */}
          <div className="bg-[#FFF8D4] p-8 flex-grow">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Target Users</h2>
            <ul className="list-none space-y-4 mb-6 text-lg text-[#1E3A8A]">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Parents of children aged 6-16</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Students in private/International schools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Schools offering extracurricular classes or multiple schedules</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1E3A8A] mt-6 mb-4">Current Stage</h2>
            <ul className="list-none space-y-4 text-lg text-[#1E3A8A]">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Product in development (early prototype)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>
                  Website www.zentask.in
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Location: Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Bottom sections */}
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="bg-[#1E3A8A] p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Business Model</h2>
              <p className="text-lg">
                ZenTask will operate on a premium subscription model
              </p>
            </div>
            <div className="bg-[#D3E4FD] p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A]">Contact</h2>
              <p className="text-[#1E3A8A] text-lg">
                sailajad@zentask.in<br />
                www.zentask.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
