import React from 'react';
import { Zap, TrendingUp, Boxes, Clock } from 'lucide-react';
import { FeatureCard } from '../common/FeatureCard';

export const WhyMicrovernitech = () => {
  const features = [
    { 
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12" />, 
      title: "Purpose Built Systems", 
      desc: "Tailored solutions designed with deep industry expertise" 
    },
    { 
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />, 
      title: "Outcome Driven", 
      desc: "Committed to creating value with measurable results" 
    },
    { 
      icon: <Boxes className="w-10 h-10 sm:w-12 sm:h-12" />, 
      title: "Integrated Solutions", 
      desc: "Seamless integration across your entire operation" 
    },
    { 
      icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12" />, 
      title: "Rapid Deployment", 
      desc: "Fast implementation, scalable architecture, quick ROI" 
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          Why <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Microvernitech?</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};