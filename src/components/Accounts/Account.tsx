import React from 'react';
import { Link } from 'react-router-dom';

export const Account: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Admin Portal</h3>
          <p className="text-gray-600 mb-6">
            Manage platform-wide settings, users, and more.
          </p>
          <Link
            to="/admin-dashboard"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Admin Portal
          </Link>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User Portal</h3>
          <p className="text-gray-600 mb-6">
            Access your account, track bookings, and more.
          </p>
          <Link
            to="/user-dashboard"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to User Portal
          </Link>
        </div>
      </div>
    </div>
  );
};
