import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Robert
          </h1>
          <p className="text-xl text-gray-200">
            Creating and Monetizing Thought Leadership Stories Since 2013
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Robert - Healthcare Communications Expert"
                className="w-full h-[600px] object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#171E43] mb-4">
                Helping Companies Share Remarkable Stories that Create Remarkable Actions.
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With 20+ years of communications experience, Robert specializes in creating thought-leadership initiatives that deliver measurable results. Our passion? Collaborating with teams to create brand authority and market credibility that drives engagement and shortens the sales cycle.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We have successfully developed messaging strategies for companies across healthcare and life sciences—working with startups, associations, consulting groups, advocacy groups, and public companies alike.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We know how to turn your expertise into revenue-generating visibility.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-[#171E43] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Thought Leadership?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can create compelling healthcare communications that drive results for your organization.
          </p>
          <button className="bg-white text-[#171E43] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;