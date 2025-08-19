import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What's our mission?",
      answer: "We help life sciences companies translate complex innovation into clear, compelling stories that engage healthcare stakeholders and drive results"
    },
    {
      question: "What's Our Vision?",
      answer: "To accelerate healthcare innovation adoption through strategic communications with clear actions that connect breakthroughs to the people they help and serve."
    },
    {
      question: "Why Work With Us?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] text-center mb-16">
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] text-center mb-16">
          You Have Questions. We Have Answers.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-[#171E43]">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-[#171E43]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#171E43]" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;