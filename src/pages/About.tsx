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
              <p className="text-lg text-gray-700 leading-relaxed">
                Robert brings 25+ years of communications experience to his work, specializing in creating thought-leadership initiatives that build trust and deliver measurable results.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Throughout his career, he successfully developed strategic content for websites, social media, as well as articles for pharmaceutical, medical device, associations and advocacy groups, and healthcare and life sciences companies—working with startups, associations, and public companies alike. He has established strong collaborative relationships with senior leaders, consistently ensuring positive outcomes.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                His diverse portfolio includes contributions to The Boston Globe, ghost-written articles, and production of award-winning marketing and sales support materials ranging from blog postings to company newsletters, annual reports, advertorials, product brochures, direct mail, and advertising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#faf8f5] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                Director of Corporate Communications and External Relations - Radisphere National Radiology Group
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Prior to founding RHC, Robert was Director of Corporate Communications and External Relations for Radisphere National Radiology Group, where he established the company as a thought leader in innovative teleradiology services. His responsibilities included providing strategic communications counsel, developing local communications programs for hospital clients launching Radisphere's services, securing testimonials, and managing crises. He was the day-to-day contact for media inquiries and managed the company's social media channels as well as its ongoing press announcement pipeline.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                Corporate Communications Manager - ZOLL Medical Corporation (NASDAQ: ZOLL)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As the Corporate Communications Manager at ZOLL Medical Corporation, Robert built the public relations function for the medical device company. He increased ZOLL's awareness and editorial mentions, which more than doubled during his three-year tenure. He also developed award-winning annual reports and advertisements as well as corporate newsletters, videos, white papers, case studies, and product brochures. One report won recognition from the League of American Communications Professionals, which cited its excellent overall creativity, and clear messaging and narrative.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                Early Career Highlights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Earlier in his career, Robert developed programs for companies such as Avid Technology, Hewlett Packard Medical Products Group, and IBM. Robert began his career with Ogilvy Adams & Rinehart in Washington, D.C., where clients included Burger King Corporation, Nestlé Foods, and Nissan Motor Corporation.
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
          <button className="bg-white text-[#003087] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
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