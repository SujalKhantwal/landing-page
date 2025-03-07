import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { certifications } from "../data";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1400px] mx-auto flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
        {/* First Section */}
        <div className="w-full lg:w-[789.95px] border border-gray-300 rounded-[12.06px] p-8 bg-white shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Product</h3>
              <ul className="space-y-2">
                <li>Webinar+</li>
                <li>Media+</li>
                <li>Generate Interest 👀</li>
                <li>Capture Intent 🤔</li>
                <li>Prove Impact ✴️</li>
                <li>Repurpose Content 🏆</li>
              </ul>
            </div>
            {/* Who are you Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Who are you</h3>
              <ul className="space-y-2">
                <li>Demand Gen Marketer</li>
                <li>Content Marketer</li>
                <li>Event Marketer</li>
                <li>Field Marketer</li>
                <li>Marketing Op</li>
                <li>CMO</li>
              </ul>
            </div>
            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>People who love us</li>
                <li>People who hate us</li>
                <li>Our Webinars</li>
                <li>Our Thoughts</li>
                <li>Help!</li>
              </ul>
            </div>
            {/* About Us Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">About Us</h3>
              <ul className="space-y-2">
                <li>Mission + Values</li>
                <li>The Head Honchos</li>
                <li>The Gossip</li>
                <li>Our Contact Deets</li>
                <li>Join the team!</li>
              </ul>
            </div>
          </div>

          {/* Divider Line (Visible on large screens) */}
          <div className="hidden lg:block w-full h-[1px] bg-gray-300 mt-8"></div>

          {/* Certifications (Visible on large screens) */}
          <div className="hidden lg:flex justify-center items-center gap-6 mt-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-lg p-2 bg-gray-100"
              >
                <img
                  src={cert.image}
                  alt={`Certification ${cert.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full lg:w-[789.95px] border border-gray-300 rounded-[12.06px] p-8 bg-white shadow-md flex flex-col justify-between">
          {/* Contact Us */}
          <div className="p-6 border border-gray-300 rounded-lg">
            <h3 className="font-semibold text-lg">Contact us</h3>
            <p className="text-gray-600 text-sm mt-2">
              to see what Webinar+ can do for your business
            </p>
            <div className="flex items-center border border-gray-400 rounded-md mt-3 p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow outline-none bg-transparent px-2"
              />
              <button className="text-gray-700">→</button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="p-6 border border-gray-300 rounded-lg relative flex justify-center items-center">
              <img src="/Frame 1000004479.png" className="w-auto h-auto" alt="G2 Review" />
              <p className="absolute font-light text-black px-4 py-2 text-sm bg-transparent">
                  Read our reviews on G2.com
              </p>
          </div>


          {/* Social Media Icons */}
          <div className="flex justify-center gap-6">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-[1400px] border border-gray-300 rounded-[12.06px] flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white shadow-md text-center md:text-left">
        <p className="text-gray-600">© 2022 Hubilo. All rights reserved</p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-gray-700">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Security and Compliance
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
