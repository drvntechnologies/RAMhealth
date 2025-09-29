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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-20 bg-[#171E43] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-center text-white">
                <div className="w-24 h-2 bg-white/30 rounded mx-auto mb-2"></div>
                <div className="w-16 h-2 bg-white/20 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;