import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#003087] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200">
            Ready to transform your healthcare communications? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-[#003087] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003087] mb-2">Phone</h3>
              <p className="text-gray-600">+1 234-567-8901</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#003087] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003087] mb-2">Email</h3>
              <p className="text-gray-600">hello@ramhealth.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#003087] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003087] mb-2">Location</h3>
              <p className="text-gray-600">Boston, MA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;