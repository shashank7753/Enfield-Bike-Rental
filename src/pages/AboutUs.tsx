// src/pages/AboutUs.tsx
import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-400 mb-6">
              Enfield Bike Rental was founded with the goal of providing an exciting and safe motorcycle rental experience. We believe in the freedom of the open road and want to make it accessible to as many riders as possible. Whether you're a local or a traveler, we offer a wide range of bikes to suit your adventure needs.
            </p>
            <p className="text-lg text-gray-400">
              Our mission is to connect people with motorcycles, ensuring quality, safety, and customer satisfaction. All our bikes are thoroughly inspected before each rental, so you can focus on enjoying your ride without worrying about maintenance.
            </p>
          </div>
          <div>
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="Motorcycles on a scenic ride" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
