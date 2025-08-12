import React from 'react';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(caseStudies.length / 3));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(caseStudies.length / 3)) % Math.ceil(caseStudies.length / 3));
  };
  
  const getPreviewText = (text: string, maxLength: number = 120) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const openModal = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <>
      <section className="bg-[#171E43] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Case Studies
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(caseStudies.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {caseStudies.slice(slideIndex * 3, (slideIndex + 1) * 3).map((caseStudy) => (
                      <div key={caseStudy.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center justify-center mb-4">
                          <img
                            src={caseStudy.logoUrl}
                            alt={`${caseStudy.name} logo`}
                            className="w-20 h-20 object-contain rounded-lg"
                          />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 text-center">
                          {caseStudy.name}
                        </h3>
                        
                        <p className="text-gray-200 text-sm mb-4 text-center leading-relaxed">
                          {getPreviewText(caseStudy.overallGoal)}
                        </p>
                        
                        <button 
                          onClick={() => openModal(caseStudy)}
                          className="w-full text-white border border-white/30 px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center group"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          
          {Math.ceil(caseStudies.length / 3) > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(caseStudies.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
      </div>
      </section>

      {/* Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#171E43]">Case Study</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <img
                      src={selectedCaseStudy.logoUrl}
                      alt={`${selectedCaseStudy.name} logo`}
                      className="w-24 h-24 object-contain rounded-lg mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-[#171E43] mb-2">
                      {selectedCaseStudy.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedCaseStudy.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-[#171E43] mb-3">Overall Goal</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedCaseStudy.overallGoal}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#171E43] mb-3">Results</h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedCaseStudy.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;