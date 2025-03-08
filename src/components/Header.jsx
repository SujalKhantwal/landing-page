import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import FormComponent from "./Form";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full py-6 z-50">
        <div className="mx-auto w-[90%] max-w-[1200px] h-[60px] border border-black/10 bg-white/30 backdrop-blur-[48px] rounded-[16px] shadow-md p-[12px] px-[24px] flex items-center justify-between">
          {/* Logo */}
        <div className="h-10 w-10 bg-white/30 backdrop-blur-[48px] rounded-md p-1">
          <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
        </div>


          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            {["Product", "Customers", "Resources", "About us"].map((item) => (
              <li key={item} className="flex items-center gap-1 cursor-pointer hover:text-black">
                {item} <ChevronDown size={16} />
              </li>
            ))}
            <li className="cursor-pointer hover:text-black">Plans</li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleForm} className="bg-red-100 text-red-500 px-4 py-2 rounded-md">Login</button>
            <button onClick={toggleForm} className="bg-orange-500 text-white px-4 py-2 rounded-md">Request a Demo</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[calc(60px+1.5rem)] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden rounded-md border border-black/10">
            {["Product", "Customers", "Resources", "About us", "Plans"].map((item) => (
              <div key={item} className="flex items-center gap-1 cursor-pointer hover:text-black">
                {item} <ChevronDown size={16} />
              </div>
            ))}
            <button onClick={toggleForm} className="bg-red-100 text-red-500 px-4 py-2 rounded-md cursor-pointer">Login</button>
            <button onClick={toggleForm} className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer">Request a Demo</button>
          </div>
        )}
      </header>
      
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <button onClick={toggleForm} className="absolute top-2 right-2 text-gray-700">✕</button>
            <FormComponent />
          </div>
        </div>
      )}
    </>
  );
}