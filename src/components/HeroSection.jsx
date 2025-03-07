import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FormComponent from "./Form";

export default function HeroSection() {
  const words = ["Engage🫣", "Optimize😎", "$$$🤑"];
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Unlock video’s full potential; <br />
        <span className="text-orange-500">half of marketers</span> haven’t yet!
      </h1>
      
      {/* Animated Medial+ section */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="relative text-2xl font-bold text-orange-500 px-4 py-2 rounded-lg bg-white border-2 border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#E4875D] before:to-[#FFFFFF] before:-z-10 before:m-[-2px]">
          Media+
        </span>

        <span className="mx-2">=</span>
        <div className="h-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-2xl font-bold text-black"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <p className="text-gray-600 mt-4 max-w-2xl">
        Netflix-style video discovery for your prospects that turns viewers into customers
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 text-white px-6 py-3 rounded-md mt-6 cursor-pointer"
        onClick={() => setShowForm(true)}
      >
        Request a Demo
      </motion.button>

      {showForm && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <FormComponent />
          <button 
            className="mt-2 text-red-500" 
            onClick={() => setShowForm(false)}
          >
            Close
          </button>
        </div>
      )}
      
      <div className="relative mt-10 w-full max-w-5xl mb-10">
        <img
          src="/image 1069.png"
          alt="Hero Section"
          className="w-full rounded-lg shadow-lg z-10 relative"
        />
        <img
          src="/Screenshot 2024-08-27 at 12.27.50 PM 1.png"
          alt="Second Image"
          className="absolute bottom-6 left-0 w-full rounded-lg shadow-md z-20"
        />
      </div>
    </section>
  );
}
