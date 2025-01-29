import React, { useState } from 'react';
import { MapPin, Plus, Camera, Info, DollarSign, Bike, Wine as Engine, Calendar, CheckCircle2 } from 'lucide-react';
import { LocationPicker } from './LocationPicker';
import { ImageUpload } from './ImageUpload';
import { toast } from 'react-hot-toast';
import type { Location } from '../../types';

interface BikeFormData {
  name: string;
  type: string;
  engineSize: string;
  dailyRate: string;
  description: string;
  features: string[];
  availability: {
    start: string;
    end: string;
  };
}

const BIKE_TYPES = [
  { value: 'sport', label: 'Sport', icon: '🏍' },
  { value: 'cruiser', label: 'Cruiser', icon: '🛵' },
  { value: 'touring', label: 'Touring', icon: '🌄' },
  { value: 'adventure', label: 'Adventure', icon: '🌲' },
  { value: 'classic', label: 'Classic', icon: '🎸' },
  { value: 'dirt', label: 'Dirt Bike', icon: '🏔' },
  { value: 'scooter', label: 'Scooter', icon: '🛴' },
];

const FEATURES = [
  { id: 'abs', label: 'ABS', icon: '🛑' },
  { id: 'led', label: 'LED Lights', icon: '💡' },
  { id: 'usb', label: 'USB Charger', icon: '🔌' },
  { id: 'heated', label: 'Heated Grips', icon: '🔥' },
  { id: 'luggage', label: 'Luggage Rack', icon: '🎒' },
  { id: 'gps', label: 'GPS Mount', icon: '📍' },
  { id: 'cruise', label: 'Cruise Control', icon: '⚡' },
  { id: 'shifter', label: 'Quick Shifter', icon: '⚙️' },
];

export const ListBikeForm = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BikeFormData>({
    name: '',
    type: '',
    engineSize: '',
    dailyRate: '',
    description: '',
    features: [],
    availability: {
      start: '',
      end: '',
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) {
      toast.error('Please set a pickup location');
      return;
    }
    if (!previewImage) {
      toast.error('Please upload at least one photo');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Your motorcycle has been listed successfully! 🎉', {
        duration: 5000,
        icon: '🏍'
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.type && formData.engineSize && 
                     formData.dailyRate && location && previewImage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Bike className="h-8 w-8" />
              List Your Motorcycle
              <span className="text-indigo-200 text-base font-normal ml-2">
                Share your ride with the community
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
            {/* Main Form Section */}
            <div className="lg:col-span-3 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Motorcycle Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                      placeholder="e.g., Kawasaki Ninja 650"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <select
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                    >
                      <option value="">Select type</option>
                      {BIKE_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Engine Size (CC)
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Engine className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="engineSize"
                        required
                        min="50"
                        value={formData.engineSize}
                        onChange={handleInputChange}
                        className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                        placeholder="e.g., 650"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Daily Rate
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="dailyRate"
                        required
                        min="1"
                        value={formData.dailyRate}
                        onChange={handleInputChange}
                        className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                        placeholder="e.g., 75"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                    placeholder="Tell renters about your motorcycle's condition, features, and any special instructions..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Features
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {FEATURES.map((feature) => (
                      <label
                        key={feature.id}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          formData.features.includes(feature.id)
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-indigo-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={formData.features.includes(feature.id)}
                          onChange={() => handleFeatureToggle(feature.id)}
                        />
                        <span className="text-lg mr-2">{feature.icon}</span>
                        <span className="text-sm">{feature.label}</span>
                        {formData.features.includes(feature.id) && (
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 ml-auto" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    Availability
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Start Date</label>
                      <input
                        type="date"
                        name="availability.start"
                        value={formData.availability.start}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">End Date</label>
                      <input
                        type="date"
                        name="availability.end"
                        value={formData.availability.end}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Photos
                  </label>
                  <div 
                    className={`relative mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-all duration-200 ${
                      previewImage ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'
                    }`}
                  >
                    {previewImage ? (
                      <div className="space-y-4 w-full">
                        <img
                          src={previewImage}
                          alt="Upload preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setPreviewImage(null)}
                          className="block w-full text-center text-sm text-red-600 hover:text-red-500"
                        >
                          Remove photo
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2 text-center">
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload photos</span>
                            <ImageUpload onImageSelect={(url) => setPreviewImage(url)} />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Pickup Location
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowLocationPicker(true)}
                    className={`flex items-center space-x-2 p-3 rounded-lg border-2 w-full transition-all duration-200 ${
                      location 
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                        : 'border-gray-300 text-gray-700 hover:border-indigo-500'
                    }`}
                  >
                    <MapPin className="h-5 w-5 flex-shrink-0" />
                    <span className="flex-1 text-left">
                      {location ? location.address : 'Set pickup location'}
                    </span>
                  </button>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`
                      relative px-8 py-3 rounded-lg flex items-center space-x-2 font-medium
                      transition-all duration-200 
                      ${isFormValid 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Listing...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-5 w-5" />
                        <span>List Your Bike</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-8 bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                  <Info className="h-5 w-5 text-indigo-500" />
                  Listing Preview
                </h3>
                
                <div className="space-y-6">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Motorcycle preview"
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  
                  {formData.name && (
                    <div>
                      <h4 className="font-medium text-xl text-gray-900">{formData.name}</h4>
                      <p className="text-gray-500 flex items-center gap-2 mt-1">
                        {formData.type && (
                          <span className="inline-flex items-center">
                            {BIKE_TYPES.find(t => t.value === formData.type)?.icon}
                            {BIKE_TYPES.find(t => t.value === formData.type)?.label}
                          </span>
                        )}
                        {formData.engineSize && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span>{formData.engineSize}cc</span>
                          </>
                        )}
                      </p>
                    </div>
                  )}

                  {formData.dailyRate && (
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-3xl font-bold text-indigo-600">
                        ${formData.dailyRate}
                        <span className="text-sm text-gray-500 font-normal ml-1">per day</span>
                      </p>
                    </div>
                  )}

                  {location && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-indigo-500" />
                      <span>{location.address}</span>
                    </div>
                  )}

                  {formData.features.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-medium mb-3 text-gray-900">Features</h5>
                      <div className="flex flex-wrap gap-2">
                        {formData.features.map((featureId) => {
                          const feature = FEATURES.find(f => f.id === featureId);
                          return feature && (
                            <span
                              key={feature.id}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                            >
                              {feature.icon} {feature.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {formData.description && (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-medium mb-2 text-gray-900">Description</h5>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {formData.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default ListBikeForm;