import  { useEffect, useState } from 'react';
import { MotorcycleCard } from './MotorcycleCard';

const MotorcycleList = () => {
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

  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

  useEffect(() => {
    fetch('http://localhost:6000/api/motorcycles')
      .then((response) => response.json())
      .then((data) => setMotorcycles(data))
      .catch((error) => console.error('Error fetching motorcycles:', error));
  }, []);

  return (
    <div>
      {motorcycles.map((motorcycle) => (
        <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </div>
  );
};

export default MotorcycleList;
