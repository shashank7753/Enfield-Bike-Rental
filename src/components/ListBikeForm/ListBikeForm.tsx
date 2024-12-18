import React, { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';
import { LocationPicker } from './LocationPicker';
import { ImageUpload } from './ImageUpload';
import { toast } from 'react-hot-toast';
import type { Location } from '../../types';

export const ListBikeForm = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your bike has been listed successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">List Your Bike</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Motorcycle Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select type</option>
              <option value="sport">Sport</option>
              <option value="cruiser">Cruiser</option>
              <option value="touring">Touring</option>
              <option value="adventure">Adventure</option>
              <option value="classic">Classic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Engine Size (CC)
            </label>
            <input
              type="number"
              required
              min="50"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Daily Rate ($)
            </label>
            <input
              type="number"
              required
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos
          </label>
          <ImageUpload />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Location
          </label>
          <button
            type="button"
            onClick={() => setShowLocationPicker(true)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
          >
            <MapPin className="h-5 w-5" />
            <span>{location ? location.address : 'Set pickup location'}</span>
          </button>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>List Bike</span>
          </button>
        </div>
      </form>

      {showLocationPicker && (
        <LocationPicker
          onSelect={(loc) => {
            setLocation(loc);
            setShowLocationPicker(false);
          }}
          onClose={() => setShowLocationPicker(false)}
        />
      )}
    </div>
  );
};