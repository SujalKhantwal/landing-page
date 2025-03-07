import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { clientDetails } from "../data.js";

export default function ClientSites() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Tap to reveal on mobile

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientDetails.length);
        setIsHovered(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientDetails.length) % clientDetails.length);
        setIsHovered(false);
    };

    return (
        <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
            {/* Header Section */}
            <header className="text-center mb-6">
                <h3 className="text-[#E4875D] font-bold text-2xl leading-6 tracking-tight">
                    Media+ in action:
                </h3>
                <h2 className="text-[#333132] font-medium text-[28px] sm:text-[36px] md:text-[42px] leading-[36px] sm:leading-[44px] md:leading-[50.4px] tracking-tight">
                    Customer Spotlight
                </h2>
                <p className="text-[#4D4D4D] font-light text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[30px] mt-2">
                    See how customers use Media+ to create branded media sites that captivate and convert.
                </p>
            </header>

            {/* Carousel Section */}
            <div className="relative w-full max-w-[1200px] flex items-center justify-center">
                {/* Previous Button */}
                <button 
                    onClick={handlePrev} 
                    className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Image Wrapper */}
                <div className="relative w-full max-w-[900px] flex items-center justify-center">
                    {/* Previous Image (Only visible on medium+ screens) */}
                    <div className="hidden md:flex space-x-4 items-center justify-center">
                        <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto flex-shrink-0 opacity-50 transform scale-90">
                            <img 
                                src={clientDetails[(currentIndex - 1 + clientDetails.length) % clientDetails.length].coverImg} 
                                alt="Previous client"
                                className="w-full h-auto object-cover rounded-lg" 
                            />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div 
                        className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto flex-shrink-0 rounded-lg overflow-hidden shadow-lg z-20 relative group"
                        onClick={() => setIsHovered(!isHovered)} // Tap to reveal on mobile
                    >
                        {/* Image */}
                        <img 
                            src={clientDetails[currentIndex].coverImg} 
                            alt={clientDetails[currentIndex].name} 
                            className="w-full h-auto object-cover transition duration-300 ease-in-out group-hover:brightness-75"
                        />

                        {/* Hover Content */}
                        <div 
                            className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm px-4 text-center transition-opacity duration-300 
                                ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                        >
                            <h3 className="text-white text-lg sm:text-xl font-semibold drop-shadow-md">
                                {clientDetails[currentIndex].name}
                            </h3>
                            <p className="text-white text-sm sm:text-md mt-2 drop-shadow-md">
                                {clientDetails[currentIndex].onHoverText}
                            </p>
                            <button 
                                onClick={() => window.open(clientDetails[currentIndex].link, "_blank")}
                                className="mt-3 bg-white text-black px-4 py-2 rounded-md shadow-md cursor-pointer"
                            >
                                Visit Site →
                            </button>
                        </div>
                    </div>

                    {/* Next Image (Only visible on medium+ screens) */}
                    <div className="hidden md:flex space-x-4 items-center justify-center">
                        <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto flex-shrink-0 opacity-50 transform scale-90">
                            <img 
                                src={clientDetails[(currentIndex + 1) % clientDetails.length].coverImg} 
                                alt="Next client"
                                className="w-full h-auto object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <button 
                    onClick={handleNext} 
                    className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </div>
    );
}

