import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Solutions />
      <CaseStudies />
      <FAQ />
      
      {/* Call to Action */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Thought Leadership?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's collaborate to achieve your business goals.
          </p>
          <a 
            href="https://calendly.com/rminicucci/introductory-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#171E43] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group"
          >
            Book a Call
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;