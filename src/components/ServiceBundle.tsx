import React from 'react';
import { Palette, FileText, Cog, Monitor, Smartphone, Activity } from 'lucide-react';

const ServiceBundle = () => {
  const services = [
    {
      icon: Palette,
      title: "Health Branding",
      description: "Crafting unique healthcare narratives that resonate with patients and build trust."
    },
    {
      icon: FileText,
      title: "Medical Design",
      description: "Visual aids for patient education that simplify complex medical information."
    },
    {
      icon: Cog,
      title: "Program Development",
      description: "Implementing comprehensive care programs tailored to your practice needs."
    },
    {
      icon: Monitor,
      title: "Technology Consultation",
      description: "Leveraging cutting-edge technology to enhance healthcare delivery and efficiency."
    },
    {
      icon: Smartphone,
      title: "UX/UI for Health",
      description: "User-centered health interfaces that improve patient experience and engagement."
    },
    {
      icon: Activity,
      title: "System Performance",
      description: "Optimizing clinic efficiency through performance monitoring and system improvements."
    }
  ];

  return (
    <section className="bg-[#e0e0e0] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">
          Your Custom Health Service Bundle
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Comprehensive care solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-[#003087] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003087] mb-4">
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
  );
};

export default ServiceBundle;