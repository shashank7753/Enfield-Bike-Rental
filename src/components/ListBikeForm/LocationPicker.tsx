import React from 'react';
import type { Location } from '../../types';

interface LocationPickerProps {
  onSelect: (location: Location) => void;
  onClose: () => void;
}

export const LocationPicker: React.FC<LocationPickerProps> = ({ onSelect, onClose }) => {
  const handleConfirm = () => {
    // Using a default location for demonstration
    onSelect({
      lat: 30.76032535242796,
      lng: 76.61676308703706,
      address: "Enfield Bike Rental, Chandigarh, India"
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-grey-400 rounded-lg max-w-2xl w-full p-6">
        <h3 className="text-lg font-semibold mb-4">Select Pickup Location</h3>
        <div className="mb-4 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.2645630565289!2d76.61676308703706!3d30.76032535242796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb9031dc1609%3A0x11854b338e4a6013!2sEnfield%20Bike%20Rental!5e0!3m2!1sen!2sin!4v1734451874496!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
};