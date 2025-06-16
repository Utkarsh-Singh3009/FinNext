"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      }}
    >
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full opacity-60 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-100 via-purple-100 to-transparent rounded-full opacity-50 blur-2xl -z-10" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl lg:text-[90px] font-extrabold leading-tight gradient-title mb-6 drop-shadow-lg">
            Manage Your Finances <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              with Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 font-medium">
            An AI-powered financial management platform that helps you track,
            analyze, and optimize your spending with real-time insights.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-10 py-5 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transition-all duration-200"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center relative">
          <div
            ref={imageRef}
            className="hero-image transition-transform duration-500 ease-in-out shadow-2xl rounded-3xl border-4 border-white/80 bg-white/60 backdrop-blur-lg hover:scale-105"
            style={{
              maxWidth: 520,
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 6px 0 rgba(0,0,0,0.04)",
            }}
          >
            <Image
              src="/banner.jpeg"
              width={520}
              height={320}
              alt="Dashboard Preview"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
