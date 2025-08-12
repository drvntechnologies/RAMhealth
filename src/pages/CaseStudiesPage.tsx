import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight, X } from 'lucide-react';

const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const openModal = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-[#171E43] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-200">
              Real results from our healthcare communications partnerships
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={caseStudy.logoUrl}
                      alt={`${caseStudy.name} logo`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#003087] mb-2 text-center">
                  <h3 className="text-xl font-bold text-[#171E43] mb-2 text-center">
                    {caseStudy.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {caseStudy.subtitle}
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {caseStudy.overallGoal.length > 120 
                      ? caseStudy.overallGoal.substring(0, 120) + '...' 
                      : caseStudy.overallGoal}
                  </p>
                  
                  <button 
                    onClick={() => openModal(caseStudy)}
                    className="w-full bg-[#171E43] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#0f1530] transition-all inline-flex items-center justify-center group"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#171E43] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you achieve similar results for your healthcare organization.
            </p>
            <button className="bg-white text-[#003087] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
            <button className="bg-white text-[#171E43] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center group">
              Start your project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <Footer />
      </div>

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
                      className="w-24 h-24 object-cover rounded-lg mx-auto mb-4"
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
                      <div className="text-gray-700 leading-relaxed">
                        {selectedCaseStudy.results.split('\n').map((line, index) => (
                          <div key={index} className="mb-2">
                            {line.trim() && (
                              <div className="flex items-start">
                                <span className="text-[#171E43] mr-2 mt-1">•</span>
                                <span>{line.replace('• ', '')}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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

export default CaseStudiesPage;