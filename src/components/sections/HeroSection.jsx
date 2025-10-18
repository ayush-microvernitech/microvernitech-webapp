import React from 'react';

export const HeroSection = ({ parallaxOffset }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          We help<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            businesses
          </span><br />
          gear up for<br />
          tomorrow
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Microvernitech unlocks operational excellence through purpose-built management systems. 
          We understand the challenges companies face in streamlining operations at speed and scale. 
          With the right technology, we help organizations overcome those challenges and become 
          adaptive intelligent enterprises.
        </p>
        <button 
          onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
        >
          Explore Solutions
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 sm:py-8 bg-gradient-to-t from-black to-transparent">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-4 sm:mx-8 text-gray-600 text-sm sm:text-xl font-light">
              INNOVATE • AUTOMATE • ELEVATE •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};