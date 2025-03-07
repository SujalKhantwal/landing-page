import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-orange-500 text-center font-medium mb-2">
        Our top-list of commonly asked questions
      </h3>
      <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
      

      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center pb-4">
              <div className="flex">
                <span className="text-gray-500 font-medium mr-2">{index + 1}.</span>
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
              </div>
              <button className="flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center text-gray-500 cursor-pointer">
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="pl-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
            <div className="border-b border-gray-200 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}