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
    <div className="relative min-h-[600px] lg:min-h-[700px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
          alt="Hero"  />
        <div className="absolute inset-0 bg-gray-500/70 mix-blend-multiply" />
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Hero Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Rent Your Dream Ride
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Discover the freedom of the open road. Rent a motorcycle from local owners or share your bike with passionate riders.
          </p>
          
          {/* Location Search */}
          <div className="mt-8 max-w-xl">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  onClick={fetchUserLocation}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Search className="h-5 w-5" />
                  <span>Use My Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full lg:w-auto lg:min-w-[380px] bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Time
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dropoff Date
              </label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dropoff Time
              </label>
              <input
                type="time"
                value={dropoffTime}
                onChange={(e) => setDropoffTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              onClick={handleConfirm}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors" >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};