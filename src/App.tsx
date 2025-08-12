import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ServiceBundle from './components/ServiceBundle';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <ServiceBundle />
      <Testimonials />
      <CaseStudies />
      <FAQ />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;