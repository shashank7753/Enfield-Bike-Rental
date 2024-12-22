import React, { useState } from 'react';
import { Star } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { Motorcycle } from '../types';
import MotorcyclePayment from './MotorcyclePayment';  // Import MotorcyclePayment

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export const MotorcycleCard: React.FC<MotorcycleCardProps> = ({ motorcycle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={motorcycle.image}
        alt={motorcycle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{motorcycle.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{motorcycle.rating}</span>
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
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={openModal}
          >
            Rent Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-2 border rounded"
                dateFormat="yyyy/MM/dd"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full p-2 border rounded"
                dateFormat="yyyy/MM/dd"
                minDate={startDate || new Date()}
              />
            </div>
            <MotorcyclePayment motorcycle={motorcycle} />

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  closeModal();
                  console.log('Start:', startDate, 'End:', endDate);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
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
