import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Palette, FileText, Cog, Monitor, Smartphone, Activity, Users, TrendingUp, MessageSquare } from 'lucide-react';

const Services = () => {
  const additionalServices = [
    {
      icon: Users,
      title: "Messaging/Positioning Development",
      description: "We can help you establish the right messaging that speaks to why you do what you do and how you are different … in short order."
    },
    {
      icon: TrendingUp,
      title: "Social Marketing Strategy",
      description: "LinkedIn corporate pages and personal profile management that gain attention and followers."
    },
    {
      icon: MessageSquare,
      title: "Thought Leadership Programs",
      description: "From contributed articles and media outreach to blog planning, newsletter and podcast creation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200">
            Comprehensive healthcare communications solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-16 text-center">
            Expertise In
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-[#faf8f5] rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="bg-[#171E43] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#171E43] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#e0e0e0] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-16 text-center">
            Our Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#171E43] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#171E43] mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and target audience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#171E43] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#171E43] mb-2">Strategy</h3>
              <p className="text-gray-600">Develop a customized communications strategy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#171E43] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#171E43] mb-2">Execute</h3>
              <p className="text-gray-600">Create and implement high-quality content and campaigns</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#171E43] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#171E43] mb-2">Measure</h3>
              <p className="text-gray-600">Track results and optimize for continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our services can help you achieve your healthcare communications goals.
          </p>
          <button className="bg-white text-[#171E43] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
            Contact us today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;