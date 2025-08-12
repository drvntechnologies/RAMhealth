import React from 'react';
import { Stethoscope, TrendingUp, Phone, Clipboard, Users, Settings } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: "Patient Communication Tools",
      description: "Automate patient outreach with intelligent messaging systems that improve engagement and care continuity."
    },
    {
      icon: TrendingUp,
      title: "Increase Outreach Efforts", 
      description: "Boost patient engagement through targeted campaigns and personalized health communications."
    },
    {
      icon: Phone,
      title: "Enhance Telehealth",
      description: "Optimize virtual care delivery with seamless video consultations and remote monitoring tools."
    },
    {
      icon: Clipboard,
      title: "Streamline Patient Journeys",
      description: "Create smooth patient experiences from appointment booking to post-care follow-up."
    },
    {
      icon: Users,
      title: "Optimize Clinic Operations",
      description: "Improve staff efficiency and patient flow with intelligent scheduling and resource management."
    },
    {
      icon: Settings,
      title: "Advanced Analytics",
      description: "Gain insights into patient patterns and clinic performance with comprehensive reporting tools."
    }
  ];

  return (
    <section className="bg-[#faf8f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-16">
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-16">
          Solutions for Busy Providers
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#171E43] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;