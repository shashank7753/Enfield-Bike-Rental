import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);  // New state for loading status

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = await auth.currentUser?.getIdToken();
        if (!token) {
          console.error('Token not found');
          return;
        }

        const response = await fetch('http://localhost:6000/user-role', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error('Error fetching user role:', response.statusText);
          return;
        }

        const { role } = await response.json();
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
      } catch (error) {
        console.error('Error in fetchUserRole:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetching user role
      }
    };

    fetchUserRole();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* You can replace this with a spinner or animation */}
        <div>Loading...</div>
      </div>
    );
  }

  return <div>Redirecting...</div>; // In case fetching completes but nothing happens yet
};
