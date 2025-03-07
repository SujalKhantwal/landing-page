import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { clientDetails } from "../data.js";

export default function ClientSites() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientDetails.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientDetails.length) % clientDetails.length);
    };

    return (
        <div className="w-full flex flex-col items-center px-6 md:px-10 py-10">
            <header className="text-center mb-6">
                <h3 className="text-[#E4875D] font-bold text-2xl leading-6 tracking-tight">
                    Media+ in action:
                </h3>
                <h2 className="text-[#333132] font-medium text-[42px] leading-[50.4px] tracking-tight">
                    Customer Spotlight
                </h2>
                <p className="text-[#4D4D4D] font-light text-[20px] leading-[30px] mt-2">
                    See how customers use Media+ to create branded media sites that captivate and convert.
                </p>
            </header>

            {/* Image Carousel Container */}
            <div className="relative w-full max-w-[1200px] flex items-center justify-center">
                {/* Previous Button (Visible on all screens) */}
                <button 
                    onClick={handlePrev} 
                    className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Image Wrapper (Small screens: Single image, Large screens: 3 images) */}
                <div className="relative w-full max-w-[900px] flex items-center justify-center">
                    {/* Show previous/next images only on medium+ screens */}
                    <div className="hidden md:flex space-x-4 items-center justify-center">
                        <div className="w-[380px] h-[356px] flex-shrink-0 opacity-50 transform scale-90">
                            <img 
                                src={clientDetails[(currentIndex - 1 + clientDetails.length) % clientDetails.length].coverImg} 
                                alt="Previous client"
                                width={380} 
                                height={356} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </div>

                    {/* Main Image with Hover Effect */}
                    <div className="w-[380px] h-[356px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg z-20 relative group">
                        {/* Image */}
                        <img 
                            src={clientDetails[currentIndex].coverImg} 
                            alt={clientDetails[currentIndex].name} 
                            width={380} 
                            height={356} 
                            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-75"
                        />
                        {/* Hover Content - Adjusted for semi-transparent overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                            <h3 className="text-white text-xl font-semibold drop-shadow-md">{clientDetails[currentIndex].name}</h3>
                            <p className="text-white text-sm mt-2 drop-shadow-md">{clientDetails[currentIndex].onHoverText}</p>
                            <button 
                                onClick={() => window.open(clientDetails[currentIndex].link, "_blank")}
                                className="mt-3 bg-white text-black px-4 py-2 rounded-md shadow-md cursor-pointer"
                            >
                                Visit Site →
                            </button>
                        </div>
                    </div>

                    {/* Show previous/next images only on medium+ screens */}
                    <div className="hidden md:flex space-x-4 items-center justify-center">
                        <div className="w-[380px] h-[356px] flex-shrink-0 opacity-50 transform scale-90">
                            <img 
                                src={clientDetails[(currentIndex + 1) % clientDetails.length].coverImg} 
                                alt="Next client"
                                width={380} 
                                height={356} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                </div>

                {/* Next Button (Visible on all screens) */}
                <button 
                    onClick={handleNext} 
                    className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
}

