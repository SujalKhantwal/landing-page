import React from "react";
import { featuresData } from "../data.js";
import MediaFeatureCard from "./MediaFeatureCard";

const Benefits = () => {
  return (
    <div className="relative bg-lime-100 py-16 px-6 overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <p className="text-orange-500 font-medium mb-2 text-lg">Explore</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Media+ Features</h2>

        {/* Image Section - Lowered z-index */}
        <div className="relative flex justify-center mb-20 sm:mb-32">
          {/* Yellow circular background elements */}
          <div className="absolute rounded-full bg-yellow-300 opacity-50 w-64 h-64 -left-12 top-12"></div>
          <div className="absolute rounded-full bg-yellow-300 opacity-50 w-40 h-40 right-8 -top-12"></div>

          <div className="relative z-0 mx-auto">
            <img
              src="/Media+ offerings.png"
              alt="Media+ Platform Showcase"
              className="rounded-2xl shadow-lg max-w-4xl w-full"
            />
          </div>
        </div>

        {/* Feature Cards Section - Responsive spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative mt-10 md:-mt-16 lg:-mt-42 z-10">
          {featuresData.map((feature, index) => (
            <MediaFeatureCard
              key={index}
              title={feature.title}
              iconType={feature.iconType}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
