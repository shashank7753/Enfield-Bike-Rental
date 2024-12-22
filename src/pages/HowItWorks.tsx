// src/pages/HowItWorks.tsx
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <p className="text-lg text-gray-400 mb-6">
          Renting a bike has never been easier. Follow these simple steps to get started:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">1. Browse Our Fleet</h3>
            <p className="text-lg text-gray-400">
              Explore our selection of well-maintained motorcycles. From sport bikes to cruisers, we have something for every rider.
            </p>
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Browse Fleet" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">2. Choose Your Ride</h3>
            <p className="text-lg text-gray-400">
              Select your preferred bike based on availability and location. You can filter by type, price, and features.
            </p>
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Choose Ride" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">3. Pick Up & Enjoy</h3>
            <p className="text-lg text-gray-400">
              Once you’ve made your choice, visit the designated pickup location, get your keys, and hit the road!
            </p>
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Pick Up Ride" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
