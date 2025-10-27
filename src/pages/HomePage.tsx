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
      <Footer />
    </div>
  );
};

export default HomePage;