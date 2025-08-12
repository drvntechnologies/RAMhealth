import React from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#171E43] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Let's Navigate Healthcare Together
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Tell us about your healthcare needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-[#171E43] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                Send message
              </button>
            </form>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Contact our team</h3>
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 mr-3" />
              <span>+1 234-567-8901</span>
            </div>
            <p className="text-gray-200 mt-6 leading-relaxed">
              Ready to transform your healthcare practice? Our team of experts is here to help you navigate the future of healthcare technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;