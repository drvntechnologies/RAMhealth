import React from 'react';
import { ArrowRight, Heart, TrendingUp, BarChart3 } from 'lucide-react';

const CallToAction = () => {
  const features = [
    {
      icon: Heart,
      title: "Automate and Improve Care Decisions",
      description: "Leverage AI-powered insights to enhance patient outcomes"
    },
    {
      icon: TrendingUp,
      title: "Drive Sustainable Health Outcomes", 
      description: "Build long-term patient relationships with data-driven care"
    },
    {
      icon: BarChart3,
      title: "Latest Health Insights",
      description: "Access real-time analytics and performance metrics"
    }
  ];

  return (
    <section className="bg-[#003087] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Ready to Enhance Your Practice?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-[#003087]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <button className="bg-white text-[#003087] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
          Get started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;