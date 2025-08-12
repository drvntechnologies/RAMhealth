import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      features: [
        "Basic Telehealth",
        "Patient Communication",
        "Standard Support",
        "5 Provider Accounts",
        "Basic Analytics"
      ],
      buttonText: "Get started",
      popular: false
    },
    {
      name: "Professional", 
      price: "$149",
      period: "per month",
      features: [
        "Advanced EMR Integration",
        "Priority Support",
        "Custom Workflows",
        "Unlimited Providers",
        "Advanced Analytics",
        "API Access"
      ],
      buttonText: "Get started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Full Platform Access",
        "Dedicated Account Manager",
        "Custom Development",
        "White-label Solutions",
        "24/7 Phone Support",
        "SLA Guarantees"
      ],
      buttonText: "Contact us",
      popular: false
    }
  ];

  return (
    <section className="bg-[#003087] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Choose Your Health Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 shadow-lg relative ${plan.popular ? 'ring-4 ring-yellow-400 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-[#003087] px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#171E43] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#171E43]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-1">/{plan.period.split(' ')[1]}</span>}
                </div>
                <p className="text-gray-600">{plan.period}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular 
                  ? 'bg-[#171E43] text-white hover:bg-[#0f1530]' 
                  : 'bg-gray-100 text-[#171E43] hover:bg-gray-200'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;