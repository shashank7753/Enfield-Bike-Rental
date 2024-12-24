import React, { useState } from 'react';
import { Star } from 'lucide-react';
import MotorcyclePayment from './MotorcyclePayment';
import { Motorcycle } from '../../types';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export const MotorcycleCard: React.FC<MotorcycleCardProps> = ({ motorcycle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(null);
  };

  const handleConfirm = () => {
    console.log('Renting motorcycle:', motorcycle.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={motorcycle.image}
        alt={motorcycle.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold truncate" title={motorcycle.name}>{motorcycle.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{motorcycle.rating}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>{motorcycle.type} • {motorcycle.cc}cc</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">₹{motorcycle.price}</span>
            <span className="text-gray-600">/day</span>
          </div>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={openModal}
          >
            Rent Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg p-6 w-full max-w-md shadow-2xl transform transition-all">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Confirm Rent</h2>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            <div className="mb-4">
              <span className="font-bold text-gray-700">Total Price: </span>
              <span className="text-lg text-indigo-600">₹{motorcycle.price}</span>
            </div>

            <MotorcyclePayment motorcycle={motorcycle} />

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
