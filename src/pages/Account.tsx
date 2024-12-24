// import { useEffect, useState } from 'react';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// export const Dashboard: React.FC = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);  // New state for loading status

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const token = await auth.currentUser?.getIdToken();
//         if (!token) {
//           console.error('Token not found');
//           return;
//         }

//         const response = await fetch('http://localhost:6000/user-role', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           console.error('Error fetching user role:', response.statusText);
//           return;
//         }

//         const { role } = await response.json();
//         if (role === 'admin') {
//           navigate('/admin-dashboard');
//         } else {
//           navigate('/user-dashboard');
//         }
//       } catch (error) {
//         console.error('Error in fetchUserRole:', error);
//       } finally {
//         setLoading(false);  // Set loading to false after fetching user role
//       }
//     };

//     fetchUserRole();
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         {/* You can replace this with a spinner or animation */}
//         <div>Loading...</div>
//       </div>
//     );
//   }

//   return <div>Redirecting...</div>; // In case fetching completes but nothing happens yet
// };


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
