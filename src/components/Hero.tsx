import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#171E43] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The Mission: Simplify Science, Engage Many Audiences, and Generate Growth
            </h1>
            <div className="text-xl text-gray-200 mb-8">
              <p>Focused on Your Business Goals for Clear, Maximum Results</p>
            </div>
            <button className="bg-white text-[#171E43] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
              We Love What We Do. Let Us Show You.
            </button>
          </div>
          
          <div className="relative">
            <div className="flex justify-center">
              <img
                src="/robertprofilephoto.jpg"
                alt="Robert - Healthcare Communications Expert"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;