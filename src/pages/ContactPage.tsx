import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200">
            Ready to transform your healthcare communications? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            <span className="text-[#171E43]">Let's Go! Let's Get Started</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="bg-[#faf8f5] rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#171E43] mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-[#171E43]" />
                    <div>
                      <h4 className="font-medium text-[#171E43]">Location</h4>
                      <p className="text-gray-600">Greater Boston</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/rminicucci/introductory-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#171E43] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0f1530] transition-all"
                >
                  Book a Call
                </a>
              </div>
              
              <div className="bg-[#faf8f5] rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#171E43] mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're here to help you gain the attention you deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;