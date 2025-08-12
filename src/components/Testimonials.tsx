import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SQA very much appreciates all the input and hard work you have provided over the last couple of years. We have enjoyed getting to know you, and you have helped us so much with increasing the volume and quality of content we share with our members and prospective members.",
      name: "Alison H. Cockrell, CAE",
      title: "Executive Director, Society of Quality Assurance",
      rating: 5
    },
    {
      quote: "Robert has been instrumental in helping me build my brand and successfully market it. He provides a perspective that results in a better final product. I look forward to our continued relationship and conquering new challenges. I can't recommend him strongly enough.",
      name: "Judy Carmody, Ph.D.",
      title: "Carmody Quality Solutions, LLC",
      rating: 5
    },
    {
      quote: "Robert is exceptional. He's genuinely interested in your business and takes the time to learn what you do, who your customers are, and what your goals are. He tackles complex material with ease. He is a strategic partner who helps accelerate your business through top-notch communications strategies and content.",
      name: "Dorit Baxter",
      title: "Former Senior Vice President of Marketing, Inteliquet",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] text-center mb-16">
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] text-center mb-16">
          Building Trust. Patient Success Stories.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-[#171E43]">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;