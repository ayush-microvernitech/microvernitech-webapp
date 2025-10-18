import React from 'react';
import { RestaurantOMS } from '../products/RestaurantOMS';
import { CMMS } from '../products/CMMS';
import { CustomCRM } from '../products/CustomCRM';

export const ProductsSection = ({ setFormData, setShowModal, formData }) => {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 px-4">
          Take the<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            next leap
          </span> in<br />
          operations
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
          Changing market dynamics, complex workflows, siloed systems, evolving customer expectations 
          and operational inefficiencies – add to the complexity of modern business operations.
        </p>

        <RestaurantOMS setFormData={setFormData} setShowModal={setShowModal} formData={formData} />
        <CMMS setFormData={setFormData} setShowModal={setShowModal} formData={formData} />
        <CustomCRM setFormData={setFormData} setShowModal={setShowModal} formData={formData} />
      </div>
    </section>
  );
};