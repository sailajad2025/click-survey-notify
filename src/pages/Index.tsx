
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Click Tracking",
      description: "Track user interactions through sophisticated click analytics.",
      benefits: [
        "Real-time interaction tracking",
        "Comprehensive click heat maps",
        "User behavior insights",
        "Conversion optimization"
      ]
    },
    {
      title: "Survey Integration",
      description: "Create beautiful and engaging surveys to collect valuable user feedback.",
      benefits: [
        "Customizable survey templates",
        "Multiple question types",
        "Response analytics dashboard",
        "Easy embedding options"
      ]
    },
    {
      title: "Smart Notifications",
      description: "Send timely notifications based on user behavior and preferences.",
      benefits: [
        "Targeted message delivery",
        "Behavior-based triggers",
        "Multi-channel support",
        "A/B testing capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Powerful Features
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our platform offers comprehensive tools to track, survey, and notify your users
            with seamless integration and powerful analytics.
          </p>
          <div className="mt-10">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/90 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    Ready to supercharge your user engagement?
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Start tracking clicks, creating surveys, and sending smart notifications today.
                    Our platform makes it easy to understand and engage your users.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button variant="secondary" size="lg">
                    Start for Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
