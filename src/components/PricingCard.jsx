import React from "react";

const PricingCard = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#E4875D] to-[#FFBF84] shadow-lg flex flex-col md:flex-row items-center p-6 relative">
        {/* Left Side - Text Content */}
        <div className="md:w-2/5 flex flex-col items-start relative p-6 border-dashed border-2 border-white/30 rounded-lg">
          <h2 className="text-white text-3xl font-bold mb-4 leading-tight">
            Get your media library <br /> up and running
          </h2>

          <p className="text-white mb-6 text-sm">
            Kickstart your media library with up to 25 high-quality videos. <br />
            Upgrade anytime with our flexible add-on plans to upload additional videos.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center text-white text-sm">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              25 media upload credits & add-ons
            </div>

            <div className="flex items-center text-white text-sm">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              1 media site credits & add-ons for more
            </div>
          </div>

          <button className="bg-white text-orange-600 font-medium py-2 px-6 rounded-md hover:bg-orange-50 transition-colors">
            Get Pricing
          </button>
        </div>

        {/* Right Side - Image Preview */}
        <div className=" md:w-3/5 flex justify-center items-center p-6">
          <img
            src="../Media.png"
            alt="Dashboard Preview"
            className="w-full h-auto rounded-xl"
          />
        </div>

        
      </div>
    </div>
  );
};

export default PricingCard;