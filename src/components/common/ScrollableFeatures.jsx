import React, { useRef } from 'react';

export const ScrollableFeatures = ({ features }) => {
  const scrollRef = useRef(null);

  return (
    <div className="relative px-4">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((item, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-64 sm:w-72 lg:w-80 snap-center"
          >
            <div className={`bg-gradient-to-br from-${item.color}-900/30 to-${item.color}-900/10 p-1 rounded-2xl sm:rounded-3xl border border-${item.color}-500/30 h-full hover:border-${item.color}-500 transition-all duration-300`}>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm sm:text-base text-gray-300">
                      <div className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-4">← Scroll to explore features →</div>
    </div>
  );
};