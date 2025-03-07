import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full py-6 z-50"
    >
      <div className="mx-auto w-[90%] max-w-[1200px] h-[60px] border border-black/10 bg-white/30 backdrop-blur-[48px] rounded-[16px] shadow-md p-[12px] px-[24px] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase"> 
          <span className="block leading-5"> 
            V 
            <span className="block"> ^ </span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {[
            "Product",
            "Customers",
            "Resources",
            "About us",
          ].map((item) => (
            <li key={item} className="flex items-center gap-1 cursor-pointer hover:text-black">
              {item} <ChevronDown size={16} />
            </li>
          ))}
          <li className="cursor-pointer hover:text-black">Plans</li>
        </ul>
        
        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md">Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Request a Demo</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
        
      {/* Mobile Menu */}
      <div 
        className={`absolute top-[calc(60px+1.5rem)] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden rounded-md border border-black/10 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
      >
        {[
          "Product",
          "Customers",
          "Resources",
          "About us",
          "Plans",
        ].map((item) => (
          <div key={item} className="flex items-center gap-1 cursor-pointer hover:text-black">
            {item} <ChevronDown size={16} />
          </div>
        ))}
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md">Login</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Request a Demo</button>
      </div>
    </header>
  );
}