import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [dropoffDate, setDropoffDate] = useState<string>('');
  const [dropoffTime, setDropoffTime] = useState<string>('');

  const navigate = useNavigate();

  const fetchUserLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation(data.display_name || 'Location not found');
          } catch (error) {
            console.error('Error fetching location:', error);
            setLocation('Unable to fetch location');
          }
        },
        () => {
          setLocation('Permission denied or unavailable');
        }
      );
    } else {
      setLocation('Geolocation not supported by your browser');
    }
  };

  const handleConfirm = (): void => {
    navigate('/MotorcycleCard', {
      state: {
        pickupDate,
        pickupTime,
        dropoffDate,
        dropoffTime,
      },
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gray-500/70 mix-blend-multiply" />
      </div>

      <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm">
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Time
            </label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dropoff Date
            </label>
            <input
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dropoff Time
            </label>
            <input
              type="time"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={handleConfirm}
          className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Confirm
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Rent Your Dream Ride
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover the freedom of the open road. Rent a motorcycle from local owners or share your bike with passionate riders.
        </p>
        <div className="mt-10">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button
                  onClick={fetchUserLocation}
                  className="bg-indigo-600 text-white px-6 py-2 mt-4 sm:mt-0 rounded-md hover:bg-indigo-700 flex items-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Use My Location</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
};
