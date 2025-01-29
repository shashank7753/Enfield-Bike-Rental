import React from 'react';
import { useLocation } from 'react-router-dom';
import { Download, Calendar, Clock, Recycle as MotorcycleIcon, CheckCircle } from 'lucide-react';
import { Motorcycle } from '../types';

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const motorcycle = location.state?.motorcycle as Motorcycle;

  if (!motorcycle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-red-600 text-xl font-semibold">Error: No motorcycle selected.</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Generate a random confirmation number
  const confirmationNumber = `MR${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  
  // Get current date for the rental
  const rentalDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownloadReceipt = () => {
    // In a real application, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header with animated success icon */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 transform -skew-y-12"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle className="w-16 h-16" />
              </div>
              <h1 className="text-4xl font-bold text-center text-shadow">Booking Confirmed!</h1>
              <p className="text-center mt-2 text-green-100 font-medium">
                Confirmation Number: <span className="font-mono bg-green-700/30 px-2 py-1 rounded">{confirmationNumber}</span>
              </p>
            </div>
          </div>

          {/* Motorcycle Details with hover effects */}
          <div className="px-6 py-8">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <MotorcycleIcon className="mr-2 text-green-600" />
                Rental Details
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-gray-600">Motorcycle</p>
                  <p className="text-xl font-semibold text-gray-800">{motorcycle.name}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-gray-600">Daily Rate</p>
                  <p className="text-xl font-semibold text-gray-800">₹{motorcycle.price}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-gray-600">Rental Date</p>
                  <p className="text-xl font-semibold text-gray-800 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    {rentalDate}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-gray-600">Pickup Time</p>
                  <p className="text-xl font-semibold text-gray-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    10:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information with improved styling */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-green-600 rounded mr-2"></span>
                Important Information
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Please bring a valid driver\'s license and ID for pickup',
                  'A security deposit will be required at pickup',
                  'Fuel should be returned at the same level as pickup',
                  'Helmet and basic safety gear will be provided'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions with improved styling */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 border-t border-gray-200 pt-6">
              <button
                onClick={handleDownloadReceipt}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Receipt
              </button>
              <div className="text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Need help? Contact us at EnfieldBR@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview with enhanced styling */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1.5 h-6 bg-green-600 rounded mr-2"></span>
            Pickup Location
          </h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Store location"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-4 text-gray-600 flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            168 Ek Omkar, Kharar, Mohali, Punjab-140413
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;