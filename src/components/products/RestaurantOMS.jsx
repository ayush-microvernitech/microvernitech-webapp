import React from 'react';
import { ScrollableFeatures } from '../common/ScrollableFeatures';

export const RestaurantOMS = ({ setFormData, setShowModal, formData }) => {
  const features = [
    { icon: '🍽️', title: 'Table Management', color: 'blue', features: ['Real-time status', 'Reservation system', 'Floor plan view', 'Wait time tracking'] },
    { icon: '📊', title: 'Order Analytics', color: 'purple', features: ['Sales trends', 'Peak hours insights', 'Menu performance', 'Revenue tracking'] },
    { icon: '💰', title: 'Payment Integration', color: 'pink', features: ['Multiple methods', 'Split bills', 'Tip management', 'Receipt automation'] },
    { icon: '📱', title: 'Mobile POS', color: 'green', features: ['Tableside ordering', 'Kitchen sync', 'Offline mode', 'Cloud backup'] },
    { icon: '🔔', title: 'Smart Notifications', color: 'orange', features: ['Order updates', 'Kitchen alerts', 'Customer feedback', 'Staff messaging'] },
    { icon: '📦', title: 'Inventory Control', color: 'indigo', features: ['Stock tracking', 'Auto reorder', 'Waste management', 'Supplier sync'] }
  ];

  return (
    <div className="mb-20 sm:mb-24 lg:mb-32">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Restaurant OMS
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
          Transform your restaurant operations with our comprehensive Order Management System. 
          Streamline orders, optimize kitchen workflows, and deliver exceptional dining experiences.
        </p>
      </div>

      {/* Product Screenshot - Order Interface Mockup */}
      <div className="mb-8 sm:mb-12 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-1 sm:p-2 rounded-2xl sm:rounded-3xl border border-blue-500/30">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Side - Text Content */}
              <div className="space-y-4 sm:space-y-6 flex flex-col justify-center order-2 lg:order-1">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Take the next step</h4>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white">
                  in seamless order-management
                </h4>
                <div className="text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3 leading-relaxed">
                  <p className="text-yellow-600 font-semibold">Our seamless ordering software revolutionizes restaurant operations, providing a smooth and intuitive ordering experience for customers.</p>
                  <p>With <span className="font-bold text-gray-900">real-time menu updates</span> and <span className="font-bold text-gray-900">direct integration</span> into your POS and kitchen display systems, it <span className="font-bold text-gray-900">reduces errors and wait times</span> while <span className="font-bold text-gray-900">improving efficiency</span>.</p>
                  <p className="text-yellow-600 font-semibold">Empower your staff and delight your customers with faster, accurate service.</p>
                </div>
              </div>

              {/* Right Side - Order Interface Mockup */}
              <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-inner order-1 lg:order-2">
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 h-full flex flex-col shadow-lg">
                  {/* Search and Cart Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200 flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-gray-400 flex-1 min-w-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm truncate">Search for Dishes...</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                      Cart <span className="text-gray-500 font-normal hidden sm:inline">2 ITEM(S)</span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 space-y-4 sm:space-y-6 overflow-y-auto max-h-96">
                    <div>
                      <div className="text-xs font-bold text-gray-600 mb-2 sm:mb-3">Snacks <span className="font-normal">2 ITEM(S)</span></div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3 bg-blue-50 p-2 sm:p-3 rounded-lg border border-blue-100">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">🍕</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">Spicy Peas Pizza 🌶️</div>
                            <div className="text-xs sm:text-sm font-bold text-red-600 mt-1">$7.00</div>
                          </div>
                          <button className="text-xs px-2 sm:px-3 py-1 border border-green-500 rounded text-green-600 hover:bg-green-50 font-semibold whitespace-nowrap flex-shrink-0">+ADD</button>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 bg-purple-50 p-2 sm:p-3 rounded-lg border border-purple-100">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">🌽</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">Butter Corn Cone 🌽</div>
                            <div className="text-xs sm:text-sm font-bold text-red-600 mt-1">$12.00</div>
                          </div>
                          <button className="text-xs px-2 sm:px-3 py-1 border border-green-500 rounded text-green-600 hover:bg-green-50 font-semibold whitespace-nowrap flex-shrink-0">+ADD</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cart Summary */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 sm:gap-2 items-center">
                        <button className="bg-green-500 text-white w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center font-bold text-sm">−</button>
                        <span className="font-bold text-gray-900 min-w-[16px] sm:min-w-[20px] text-center text-sm sm:text-base">1</span>
                        <button className="bg-green-500 text-white w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center font-bold text-sm">+</button>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Pizza - Full</div>
                        <div className="text-sm font-bold text-gray-900">$15.00</div>
                      </div>
                    </div>
                    <div className="pt-2 sm:pt-3 border-t border-gray-200 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Sub Total</span>
                        <span className="font-bold text-gray-900">$35.00</span>
                      </div>
                      <div className="flex justify-between text-base font-bold">
                        <span className="text-gray-900">Amount Payable</span>
                        <span className="text-gray-900">$35.00</span>
                      </div>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm mt-2 sm:mt-3 transition">
                        PLACE ORDER NOW
                      </button>
                    </div>
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
            setFormData({ ...formData, interest: 'Restaurant OMS' });
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
        >
          Explore Restaurant OMS in Detail
        </button>
      </div>
    </div>
  );
};