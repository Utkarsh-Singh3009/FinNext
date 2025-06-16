import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full opacity-40 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-indigo-100 via-purple-100 to-transparent rounded-full opacity-30 blur-2xl -z-10" />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-blue-50/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl shadow-md py-8 px-4 transition-transform hover:scale-105"
              >
                <div className="text-4xl font-extrabold text-blue-600 mb-2 drop-shadow">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <Card
                className="p-8 rounded-3xl shadow-xl border-0 bg-white/80 hover:shadow-2xl transition-all"
                key={index}
              >
                <CardContent className="space-y-5 pt-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-2 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl shadow-md p-8 transition-transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 rounded-3xl shadow-xl border-0 bg-blue-50/60 hover:shadow-2xl transition-all"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-blue-200"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of users who are already managing their finances smarter with FinNext
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-5 rounded-full shadow-lg animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
