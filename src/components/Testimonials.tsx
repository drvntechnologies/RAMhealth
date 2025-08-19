import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
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
    },
    {
      quote: "I worked with Robert for more than two years during my time at vRad. He was a valuable extension of my marketing team, working day and night to ensure all deadlines were met. He is a motivated and proactive professional; I would welcome the chance to work with him again given his background and ability to successfully promote the unique benefits and convergence of healthcare and technology.",
      name: "Keri Couples",
      title: "Former Sr. Director of Marketing, vRad",
      rating: 5
    },
    {
      quote: "SQA very much appreciates all the input and hard work you have provided over the last couple of years. We have enjoyed getting to know you, and you have helped us so much with increasing the volume and quality of content we share with our members and prospective members.",
      name: "Alison H. Cockrell, CAE",
      title: "Executive Director, Society of Quality Assurance",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] text-center mb-16">
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171E43] text-center mb-16">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <blockquote className="text-gray-700 mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <div className="font-bold text-[#171E43]">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;