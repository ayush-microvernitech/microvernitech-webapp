import React from 'react';
import { ScrollableFeatures } from '../common/ScrollableFeatures';

export const CMMS = ({ setFormData, setShowModal, formData }) => {
  const features = [
    { icon: '🔧', title: 'Work Order Management', color: 'purple', features: ['Automated scheduling', 'Priority queuing', 'Task assignment', 'Progress tracking'] },
    { icon: '📊', title: 'Asset Tracking', color: 'blue', features: ['Complete history', 'QR code scanning', 'Lifecycle management', 'Depreciation calc'] },
    { icon: '⚡', title: 'Predictive Analytics', color: 'yellow', features: ['Failure prediction', 'Pattern detection', 'Risk assessment', 'ML algorithms'] },
    { icon: '📱', title: 'Mobile Access', color: 'green', features: ['Field technicians', 'Photo uploads', 'Offline mode', 'Real-time sync'] },
    { icon: '📈', title: 'Performance Reports', color: 'pink', features: ['KPI dashboards', 'Downtime analysis', 'Cost tracking', 'Custom reports'] },
    { icon: '🔔', title: 'Smart Alerts', color: 'orange', features: ['Preventive reminders', 'Critical alerts', 'Team notifications', 'Escalation rules'] }
  ];

  return (
    <div className="mb-20 sm:mb-24 lg:mb-32">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">CMMS</h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 leading-relaxed">
          Computerized Maintenance Management System
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
          Maximize equipment uptime and minimize maintenance costs with our intelligent CMMS. 
          Automate workflows, predict failures, and optimize your maintenance operations.
        </p>
      </div>

      {/* Reliability Based Maintenance Highlight */}
      <div className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 border-purple-500/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">Reliability Based Maintenance (RBM)</h4>
                <p className="text-purple-200 text-sm sm:text-base lg:text-lg">Proactive maintenance strategy powered by data intelligence</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30">
                <div className="text-3xl sm:text-4xl mb-3">📊</div>
                <h5 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">Risk Assessment</h5>
                <p className="text-gray-300 text-xs sm:text-sm">Identify critical assets and prioritize maintenance activities based on failure modes and consequences</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30">
                <div className="text-3xl sm:text-4xl mb-3">🔍</div>
                <h5 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">Condition Monitoring</h5>
                <p className="text-gray-300 text-xs sm:text-sm">Real-time tracking of asset health through sensors and IoT integration for predictive insights</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30 sm:col-span-2 lg:col-span-1">
                <div className="text-3xl sm:text-4xl mb-3">⚙️</div>
                <h5 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">Optimization</h5>
                <p className="text-gray-300 text-xs sm:text-sm">Optimize maintenance intervals and strategies to maximize reliability while minimizing costs</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30">
              <h5 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-purple-200">RBM Framework Integration</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Failure Mode Analysis:</span>
                    <span className="text-gray-300"> Comprehensive FMEA and FMECA capabilities</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Criticality Ranking:</span>
                    <span className="text-gray-300"> Automated asset criticality assessment</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Preventive Strategies:</span>
                    <span className="text-gray-300"> PM, PdM, and CBM task scheduling</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Performance Metrics:</span>
                    <span className="text-gray-300"> MTBF, MTTR, and reliability KPIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollableFeatures features={features} />

      <div className="text-center mt-8 sm:mt-12 px-4">
        <button 
          onClick={() => {
            setFormData({ ...formData, interest: 'CMMS' });
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
        >
          Explore CMMS in Detail
        </button>
      </div>
    </div>
  );
};
