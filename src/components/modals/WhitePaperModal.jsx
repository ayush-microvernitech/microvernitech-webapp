import React from 'react';
import { X } from 'lucide-react';

export const WhitePaperModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
    >
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="sticky top-0 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800 p-6 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                White Paper: The Integrated Business Imperative
              </h3>
              <p className="text-cyan-200 text-sm sm:text-base">A Framework for Operational Excellence in the Digital Age</p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-white transition flex-shrink-0 ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
            {/* Executive Summary */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Executive Summary</h4>
              <p>
                In today's hyperconnected business landscape, operational silos are not just inefficient—they're existential threats. 
                Organizations that fail to integrate their business processes, data flows, and decision-making systems risk being 
                outpaced by more agile competitors who leverage comprehensive operational intelligence.
              </p>
            </div>

            {/* Cost of Fragmentation */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Cost of Fragmentation</h4>
              <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-cyan-500/30 mb-4">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-white">Data Disconnection:</strong> The average enterprise uses 110+ different software 
                    applications, with less than 29% of them integrated. This fragmentation leads to duplicated efforts, inconsistent 
                    data, and missed opportunities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-white">Decision Latency:</strong> When systems don't communicate, decision-makers lack 
                    real-time visibility. Studies show that 67% of business leaders make critical decisions based on incomplete or 
                    outdated information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-white">Operational Overhead:</strong> Manual data reconciliation, duplicate data entry, 
                    and workflow gaps consume an estimated 20-30% of employee productivity in non-integrated environments.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Integration Framework */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Microvernitech Integration Framework</h4>
              <p className="mb-4">
                Our approach to business integration is built on four foundational pillars:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-cyan-500/30">
                  <h5 className="font-bold text-cyan-400 mb-2 text-base sm:text-lg">1. Unified Data Architecture</h5>
                  <p className="text-xs sm:text-sm">
                    A single source of truth across all business verticals, eliminating data silos and ensuring consistency, 
                    accuracy, and real-time accessibility.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-blue-500/30">
                  <h5 className="font-bold text-blue-400 mb-2 text-base sm:text-lg">2. Process Orchestration</h5>
                  <p className="text-xs sm:text-sm">
                    Automated workflows that span departments and systems, ensuring seamless handoffs, reducing manual touchpoints, 
                    and accelerating time-to-value.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30">
                  <h5 className="font-bold text-purple-400 mb-2 text-base sm:text-lg">3. Intelligent Analytics</h5>
                  <p className="text-xs sm:text-sm">
                    AI-powered insights that synthesize information across the entire business ecosystem, providing predictive 
                    recommendations and identifying opportunities before they become obvious.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-pink-500/30">
                  <h5 className="font-bold text-pink-400 mb-2 text-base sm:text-lg">4. Adaptive Infrastructure</h5>
                  <p className="text-xs sm:text-sm">
                    Cloud-native, microservices-based architecture that scales with your business, integrates with existing systems, 
                    and evolves as your needs change.
                  </p>
                </div>
              </div>
            </div>

            {/* Measurable Impact */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Measurable Impact</h4>
              <p className="mb-4">
                Organizations implementing comprehensive business integration report transformative results:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-cyan-500/30">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">40%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Faster Decision Making</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/30">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-2">35%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/30">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Process Efficiency</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-pink-500/30">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-400 mb-2">50%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Revenue Growth</div>
                </div>
              </div>
            </div>

            {/* The Path Forward */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Path Forward</h4>
              <p>
                The question is no longer whether to integrate your business operations, but how quickly you can do so. Every day 
                spent operating with disconnected systems is a day your competitors gain ground. The integrated enterprise is not 
                a future vision—it's a present imperative.
              </p>
              <p className="mt-4">
                Microvernitech stands ready to be your partner in this transformation. Our proven frameworks, battle-tested 
                technology, and experienced team have helped organizations across industries achieve operational excellence. 
                The time to act is now.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 sm:p-6 rounded-xl border border-cyan-500/50 text-center">
              <p className="text-base sm:text-lg font-semibold text-white mb-2">
                Ready to transform your business operations?
              </p>
              <p className="text-xs sm:text-sm text-cyan-200">
                Schedule a consultation with our integration specialists to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};