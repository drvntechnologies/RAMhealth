import React from 'react';
import { Lightbulb as Lighthouse, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#003087] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Lighthouse className="h-8 w-8 text-white" />
          <span className="text-white font-bold text-xl">RAM HEALTH COMMUNICATIONS</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-gray-200 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-gray-200 transition-colors">About</a>
          <a href="#services" className="text-white hover:text-gray-200 transition-colors">Services</a>
          <a href="#case-studies" className="text-white hover:text-gray-200 transition-colors">Case Studies</a>
          <a href="#contact" className="text-white hover:text-gray-200 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white text-[#003087] border border-[#003087] px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all">
            Get started
          </button>
        </div>
        
        <Menu className="h-6 w-6 text-white md:hidden" />
      </div>
    </header>
  );
};

export default Header;