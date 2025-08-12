import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is RAM Health about?",
      answer: "RAM Health Communications is a comprehensive healthcare technology platform that provides innovative solutions for healthcare providers, including patient communication tools, telehealth capabilities, and clinic management systems."
    },
    {
      question: "How do I start with telehealth?",
      answer: "Getting started with our telehealth solution is simple. Sign up for our platform, complete the setup wizard, and you'll be conducting virtual consultations within minutes. We provide full onboarding support and training."
    },
    {
      question: "Can I integrate my EMR?",
      answer: "Yes, we support integration with all major EMR systems including Epic, Cerner, Athenahealth, and many others. Our team will help you set up seamless data flow between your existing systems and our platform."
    },
    {
      question: "What if I need custom solutions?",
      answer: "We offer extensive customization options and can develop tailored solutions to meet your specific needs. Our Enterprise plan includes custom development and dedicated support to ensure your unique requirements are met."
    },
    {
      question: "How secure is patient data?",
      answer: "Security is our top priority. We are HIPAA compliant and use enterprise-grade encryption, secure data centers, and regular security audits to ensure your patient data is always protected."
    },
    {
      question: "Do you offer training?",
      answer: "Absolutely! We provide comprehensive training programs for your staff, including live sessions, recorded tutorials, and ongoing support to ensure your team can effectively use all platform features."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-[#e0e0e0] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] text-center mb-16">
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] text-center mb-16">
          Questions? We're Here to Guide You
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