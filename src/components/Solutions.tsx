import React from 'react';
import { Radiation as Foundation, Handshake, Lightbulb, Brain, GraduationCap, MessageSquare } from 'lucide-react';

const Solutions = () => {
  const beliefs = [
    {
      icon: Foundation,
      title: "\"Foundation First\" Brand Building",
      description: "This framework communicates your beliefs, origins, mission, and values. Why you do what you do."
    },
    {
      icon: Handshake,
      title: "Collaboration To Solve Challenges", 
      description: "So we are accountable and have a personal stake in the result. The boat moves forward only by rowing together."
    },
    {
      icon: Lightbulb,
      title: "Healthy Doses of \"What If\" & \"Why Not\"",
      description: "This brings answers from left field. Nothing feeds us more than hearing partners say, \"That's a great idea\" or \"We never thought of that.\""
    }
  ];

  const howWeDo = [
    {
      icon: Brain,
      title: "Adopting A Beginner's Mindset"
    },
    {
      icon: GraduationCap,
      title: "Expertise in \"Always New\" Learning"
    },
    {
      icon: MessageSquare,
      title: "A Sales Mindset to Communications"
    }
  ];

  return (
    <section className="bg-[#faf8f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-16 text-center">
          We Believe In…
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {beliefs.map((belief, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#171E43] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <belief.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                {belief.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] mb-16 text-center">
          How We Do It
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {howWeDo.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#171E43] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#171E43] mb-4">
                {method.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;