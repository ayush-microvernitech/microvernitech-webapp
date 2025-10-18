import React from 'react';

export const AboutSection = ({ setShowWhitePaperModal }) => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Microvernitech</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
            Pioneering integrated business solutions through innovation and academic excellence
          </p>
        </div>

        {/* Founding Story */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl sm:rounded-3xl border border-blue-500/30 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Story</h3>
                  <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      Microvernitech was founded by distinguished alumni of the <span className="font-bold text-white">University of Pittsburgh</span>, 
                      one of the world's leading research institutions. Our journey began with a clear vision: to transform how businesses 
                      operate by bringing structure, efficiency, and intelligence to every process.
                    </p>
                    <p>
                      Led by <span className="font-bold text-white">CEO Ayush Mishra</span>, a seasoned technology executive with a proven track 
                      record at <span className="font-bold text-blue-400">Planview</span> and <span className="font-bold text-blue-400">Tata Steel</span>, 
                      we've built a company that bridges the gap between academic rigor and real-world business challenges.
                    </p>
                    <p>
                      Our founding principle is simple yet powerful: <span className="font-bold text-white">every task, every process, every 
                      interaction can be formalized, optimized, and elevated through best practices and innovative technology.</span> We don't 
                      just build software; we architect comprehensive solutions that become the nervous system of modern enterprises.
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl sm:text-4xl font-bold">
                        AM
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold mb-2">Ayush Mishra</h4>
                      <p className="text-blue-400 text-sm sm:text-base mb-1">Founder & CEO</p>
                      <p className="text-gray-500 text-xs sm:text-sm">University of Pittsburgh</p>
                    </div>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400">Ex-Planview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-400">Ex-Tata Steel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-400">Enterprise SaaS Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-blue-400">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              To empower organizations worldwide by formalizing operational chaos into structured excellence. We believe that 
              every business process deserves the discipline of best practices, the power of automation, and the intelligence 
              of data-driven insights.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-purple-400">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              To become the global standard for integrated business operations, where every task flows seamlessly into the next, 
              where data speaks across departments, and where intelligence guides every decision.
            </p>
          </div>
        </div>

        {/* White Paper CTA Card */}
        <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl sm:rounded-3xl border-2 border-cyan-500/50 p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20 lg:mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">The Integrated Business Imperative</h3>
            <p className="text-cyan-200 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
              Discover our comprehensive framework for achieving operational excellence in the digital age. 
              Learn how integrated business systems drive measurable results.
            </p>
            <button
              onClick={() => setShowWhitePaperModal(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Read White Paper
            </button>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 text-center hover:border-blue-500 transition">
              <div className="text-4xl sm:text-5xl mb-4">🎓</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Academic Rigor</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Every solution is built on proven methodologies, research-backed best practices, and continuous learning.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 text-center hover:border-purple-500 transition">
              <div className="text-4xl sm:text-5xl mb-4">💡</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Innovation First</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                We don't follow trends—we set them. Our solutions push the boundaries of what's possible in enterprise software.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 text-center hover:border-pink-500 transition sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl mb-4">🤝</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Partnership Mindset</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Your success is our success. We're not just vendors—we're long-term partners invested in your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};