import React from 'react';

export const CustomCRM = ({ setFormData, setShowModal, formData }) => {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-32">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Custom CRM & Business Integration
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl mx-auto">
          Transform your entire organization with our custom-designed CRM and integrated cloud-based business applications. 
          Break down silos, connect every vertical, and unlock intelligent insights across your enterprise.
        </p>
      </div>

      {/* Integration Architecture Visualization */}
      <div className="mb-16 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-3xl border-2 border-cyan-500/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-white mb-4">Unified Business Intelligence Platform</h4>
              <p className="text-cyan-200 text-lg max-w-3xl mx-auto">
                Connect sales, marketing, operations, finance, and customer service into one intelligent ecosystem
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition">
                <div className="text-4xl mb-3">🔗</div>
                <h5 className="text-xl font-bold mb-2 text-cyan-300">Cross-Vertical Integration</h5>
                <p className="text-gray-300 text-sm">Seamlessly connect all business departments with real-time data synchronization</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition">
                <div className="text-4xl mb-3">☁️</div>
                <h5 className="text-xl font-bold mb-2 text-blue-300">Cloud-Native Architecture</h5>
                <p className="text-gray-300 text-sm">Scalable, secure, and accessible from anywhere with enterprise-grade reliability</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition">
                <div className="text-4xl mb-3">🤖</div>
                <h5 className="text-xl font-bold mb-2 text-purple-300">AI-Driven Insights</h5>
                <p className="text-gray-300 text-sm">Intelligent recommendations powered by machine learning across all verticals</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition">
                <div className="text-4xl mb-3">🎨</div>
                <h5 className="text-xl font-bold mb-2 text-pink-300">Custom Design</h5>
                <p className="text-gray-300 text-sm">Tailored to your unique workflows, processes, and business requirements</p>
              </div>
            </div>

            {/* Capabilities List */}
            <div className="mt-12 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <h5 className="text-2xl font-bold mb-6 text-cyan-200 text-center">Enterprise Capabilities</h5>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Customer 360° View
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-300 ml-4">
                    <li>• Complete customer lifecycle tracking</li>
                    <li>• Unified communication history</li>
                    <li>• Behavioral analytics & insights</li>
                    <li>• Predictive customer scoring</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Process Automation
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-300 ml-4">
                    <li>• Workflow automation engine</li>
                    <li>• Smart task assignment</li>
                    <li>• Approval routing & triggers</li>
                    <li>• Document generation</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Analytics & Reporting
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-300 ml-4">
                    <li>• Real-time dashboards</li>
                    <li>• Custom report builder</li>
                    <li>• Predictive forecasting</li>
                    <li>• KPI tracking & alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 px-4">
        <button 
          onClick={() => {
            setFormData({ ...formData, interest: 'Custom CRM & Business Integration' });
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
        >
          Explore Custom CRM Solutions
        </button>
      </div>
    </div>
  );
};