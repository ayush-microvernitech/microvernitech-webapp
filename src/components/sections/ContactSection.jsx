import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const ContactSection = ({ setShowModal }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Get in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're ready to transform your operations or just have questions, we're here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Customer Support */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 sm:p-8 rounded-2xl border-2 border-blue-500/50 hover:border-blue-500 transition group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 sm:p-4 rounded-xl group-hover:scale-110 transition">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Customer Support</h3>
                <p className="text-sm sm:text-base text-gray-400">For existing customers and product inquiries</p>
              </div>
            </div>
            <div className="space-y-4">
              <a 
                href="mailto:customer.support@microvernitech.com" 
                className="flex items-center gap-3 p-3 sm:p-4 bg-black/40 rounded-xl hover:bg-black/60 transition group/link"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/link:bg-blue-500/30 transition">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500">Email</div>
                  <div className="text-sm sm:text-base text-blue-400 font-medium truncate">customer.support@microvernitech.com</div>
                </div>
              </a>
              <div className="p-3 sm:p-4 bg-black/40 rounded-xl">
                <div className="text-xs sm:text-sm text-gray-500 mb-1">Response Time</div>
                <div className="text-sm sm:text-base text-white font-medium">Within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Partnership */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 sm:p-8 rounded-2xl border-2 border-purple-500/50 hover:border-purple-500 transition group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 sm:p-4 rounded-xl group-hover:scale-110 transition">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Partnerships & Alliances</h3>
                <p className="text-sm sm:text-base text-gray-400">For strategic partnerships and collaborations</p>
              </div>
            </div>
            <div className="space-y-4">
              <a 
                href="mailto:partner@microvernitech.com" 
                className="flex items-center gap-3 p-3 sm:p-4 bg-black/40 rounded-xl hover:bg-black/60 transition group/link"
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover/link:bg-purple-500/30 transition">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500">Email</div>
                  <div className="text-sm sm:text-base text-purple-400 font-medium truncate">partner@microvernitech.com</div>
                </div>
              </a>
              <div className="p-3 sm:p-4 bg-black/40 rounded-xl">
                <div className="text-xs sm:text-sm text-gray-500 mb-1">Partnership Types</div>
                <div className="text-sm sm:text-base text-white font-medium">Technology • Reseller • Integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Summary */}
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-gray-800 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Global Presence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Singapore</h4>
              <p className="text-sm text-gray-400">Headquarters</p>
              <p className="text-xs text-gray-500 mt-1">Sengkang, Singapore</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Gurgaon</h4>
              <p className="text-sm text-gray-400">North India Office</p>
              <p className="text-xs text-gray-500 mt-1">Haryana, India</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Bengaluru</h4>
              <p className="text-sm text-gray-400">South India Office</p>
              <p className="text-xs text-gray-500 mt-1">Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* CTA Button - THIS IS THE FIX */}
        <div className="text-center">
          <button 
            onClick={() => {
              console.log('Contact button clicked!'); // Debug log
              setShowModal(true);
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Schedule a Demo
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-4">We typically respond within 24 hours</p>
        </div>
      </div>
    </section>
  );
};