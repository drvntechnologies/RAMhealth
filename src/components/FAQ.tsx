import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What's Our Mission?",
      answer: "We help life sciences companies translate complex innovation into clear, compelling stories that engage healthcare stakeholders and drive results"
    },
    {
      question: "What's Our Vision?",
      answer: "To accelerate healthcare innovation adoption through strategic communications with clear actions that connect breakthroughs to the people they help and serve."
    },
    {
      question: "Why Work With Us?",
      answer: "We Speak Your Language, Fast. Every industry we've entered has been a \"first time\" for us, from biomedical devices to deep end-to-end drug target and biomarker discovery to AI-powered pharma platforms. We quickly master complex topics by asking the right questions and listening to your experts, then translate that knowledge into content that resonates with your audiences.\n\nWe Think Like Your Sales Team. Our content isn't just pretty—it works. We embed ourselves with sales teams to understand exactly how our communications can help shorten the cycle. When salespeople start calling us first for support tools, we know we're doing our job right.\n\nWe Educate, Don't Sell. Our philosophy is simple: help people understand their problems first, then position your solution as the natural answer. This educational approach builds trust and credibility that aggressive sales tactics simply can't match.\n\nWe Deliver Proven Results. From tripling LinkedIn followers for life sciences associations to achieving 44% newsletter open rates, our strategic content consistently drives engagement, generates leads, and shortens sales cycles.\n\nWe're Always Learning. Healthcare and life sciences never stop evolving. So, we stay current with daily industry research because we genuinely love discovering what's new and sharing those insights through compelling storytelling.\n\nWhen you work with us, you get a true partner who understands that great communications should make your sales team more effective, your prospects more educated, and your brand more trusted."
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