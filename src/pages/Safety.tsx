// src/pages/Safety.tsx
import React from 'react';

export const Safety: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Safety First</h2>
        <p className="text-lg text-gray-400 mb-6">
          Your safety is our top priority. We want to ensure that you have an enjoyable and secure experience while riding. Here are the key safety measures we follow:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">1. Thorough Bike Inspections</h3>
            <p className="text-lg text-gray-400">
              Every bike is inspected before and after each rental to ensure it meets safety standards. We check tires, brakes, lights, tyres and Newest Safety Halmet.
            </p>
            <img 
              src="https://news24online.com/wp-content/uploads/2024/09/Royal-enfield.jpg" 
              alt="Bike Inspection" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">2. Safety Gear Provided</h3>
            <p className="text-lg text-gray-400">
              Helmets and other safety gear are provided with every rental. We recommend wearing protective gear, including gloves and jackets, for your safety.
            </p>
            <img 
              src="https://bikeaholic.in/cdn/shop/articles/Blog-3.png?v=1722422624" 
              alt="Safety Gear" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <p className="text-lg text-gray-400 mt-6">
          Please remember to ride responsibly, follow all traffic laws, and always wear your helmet. Stay safe on the road!
        </p>
      </div>
    </section>
  );
};
