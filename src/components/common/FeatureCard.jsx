import React from 'react';

export const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};