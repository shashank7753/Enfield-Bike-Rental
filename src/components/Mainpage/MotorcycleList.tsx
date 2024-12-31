
import { useEffect, useState } from 'react';
import { MotorcycleCard } from './MotorcycleCard'; // Adjust the path as needed
// import { motorcycles } from '../Mainpage/MotorcycleCard';

interface Motorcycle {
  id: string;
  name: string;
  image: string;
  price: number;
  type: string;
  cc: number;
  available: boolean;
  rating: number;
}

const MotorcycleList = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    fetch('http://localhost:6003/api/motorcycles')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMotorcycles(data))
      .catch((err) => {
        console.error('Error fetching motorcycles:', err);
        setError('Failed to fetch motorcycles');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (motorcycles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {motorcycles.map((motorcycle) => (
        <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </div>
  );
};

export default MotorcycleList;
