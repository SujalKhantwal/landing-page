import { useState } from "react";
import { testimonials } from "../data.js"; // Importing the testimonials array
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import FormComponent from "./Form.jsx"; // Import the form

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false); // State for form visibility

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col justify-center items-center bg-[#E4875D] px-6 md:px-20 py-20">
      <div className="text-center">
        <h3 className="text-sm uppercase text-white">Take it from a Customer</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          “{testimonials[currentIndex].heading}”
        </h2>

        <div className="flex justify-center mt-6">
          <img
            src={testimonials[currentIndex].profileImg}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 cursor-pointer"
          >
            <CircleChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 cursor-pointer"
          >
            <CircleChevronRight />
          </button>
        </div>

        <p className="text-white mt-4 italic">
          “{testimonials[currentIndex].description}”
        </p>

        <h4 className="text-lg text-white font-semibold mt-4">
          {testimonials[currentIndex].name}
        </h4>
        <p className="text-white">{testimonials[currentIndex].designation}</p>

        {/* Dots for Indicators */}
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* Request a Demo Button */}
        <button
          onClick={() => setShowForm(true)} // Show form on click
          className="bg-white text-orange-500 mt-6 px-4 py-2 rounded-md cursor-pointer"
        >
          Request a Demo
        </button>

        {/* Show Form Component when showForm is true */}
        {showForm && (
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
            <FormComponent />
            <button
              onClick={() => setShowForm(false)} // Close form button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

