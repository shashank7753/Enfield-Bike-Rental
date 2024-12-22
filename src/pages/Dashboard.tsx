import { useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

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
            Authorization: `Bearer ${token}`, // Fixed template string issue
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
      }
    };

    fetchUserRole();
  }, [navigate]);

  return <div>Loading...</div>; // Added a simple loading message
};
