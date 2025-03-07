import React, { useState, useEffect } from 'react';
import { sections } from '../data.js';

const MediaPlusMobileComponent = () => {
  const [openSection, setOpenSection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile(); // Initial check
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSection = (id) => {
    if (!isMobile) {
      setOpenSection(openSection === id ? null : id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-orange-500 font-medium text-sm">Why choose Media+?</p>
        <h1 className="text-4xl md:text-2xl font-bold text-gray-800">
          Media+ turns video engagement into customer conversions
        </h1>
      </div>

      {/* Mobile View */}
      {isMobile ? (
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className={`${section.color} rounded-lg p-4`}>
              {/* Image */}
              <img src={section.image} alt="section" className="w-full h-auto rounded-lg mb-4" />
              
              {/* Text */}
              <div>
                <h3 className="font-medium text-gray-800 mb-2">{section.question}</h3>
                <p className="text-sm text-gray-600">{section.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop View */
        <div className="flex flex-row">
          {/* Text/Q&A Section */}
          <div className="w-1/2 pr-4">
            <div className="space-y-4">
              {sections.map((section) => (
                <div 
                  key={section.id} 
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    openSection === section.id ? section.color : 'bg-white'
                  }`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">{section.question}</h3>
                    <span className="text-xl">
                      {openSection === section.id ? '−' : '+'}
                    </span>
                  </div>
                  
                  {openSection === section.id && (
                    <div className="mt-3 text-gray-600">
                      <p>{section.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 pl-4">
            <div className={`rounded-lg p-4 h-full flex items-center justify-center transition-colors duration-300 ${sections[openSection]?.color || 'bg-gray-100'}`}>
              {sections[openSection] ? (
                <img 
                  src={sections[openSection].image} 
                  alt="Section Image" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-400">Select a section to view details</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPlusMobileComponent;
