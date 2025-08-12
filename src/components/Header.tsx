import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#171E43] py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/src/public/LIGHT2.png" 
            alt="RAM Health Communications" 
            className="h-20 w-auto"
          />
          <span className="text-white font-bold text-xl">RAM HEALTH COMMUNICATIONS</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition-colors">About</Link>
          <Link to="/services" className="text-white hover:text-gray-200 transition-colors">Services</Link>
          <Link to="/case-studies" className="text-white hover:text-gray-200 transition-colors">Case Studies</Link>
          <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">Contact</Link>
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