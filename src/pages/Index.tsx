
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const testimonials = [
    {
      quote: "This platform revolutionized how we collect user feedback and respond to customer needs.",
      author: "Sarah Johnson",
      position: "Product Manager at TechCorp"
    },
    {
      quote: "The analytics provided by this tool helped us increase conversion rates by over 40% in just two months.",
      author: "Michael Chen",
      position: "Marketing Director at GrowthFlow"
    },
    {
      quote: "Setting up surveys and notifications was incredibly easy. The interface is intuitive and powerful.",
      author: "Aisha Patel",
      position: "UX Researcher at DesignHub"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Click-Survey-Notify
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The all-in-one platform for tracking user clicks, creating interactive surveys,
            and sending smart notifications.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
            <Button variant="outline" size="lg">
              Sign Up Free
            </Button>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
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

      {/* Testimonial Carousel */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="mx-10">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <blockquote className="text-xl italic text-center">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-4 text-center">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
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
