import React from 'react';
import { Lightbulb as Lighthouse, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171E43] py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Lighthouse className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-lg">Creating and Monetizing Thought Leadership Since 2013</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We bring 20+ years of communications experience to his work, specializing in creating thought-leadership initiatives that build trust and deliver measurable results.
            </p>
          </div>
          
          <div className="md:col-span-1 flex flex-col justify-center">
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex items-center">
              <a 
                href="https://www.linkedin.com/in/robertminicucci/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            ©2025 RAM Health Communications. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-white text-[#171E43] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;