import { useEffect, useState } from 'react';

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
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        console.log(response)
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
    <ul>
      {motorcycles.map((motorcycle) => (
        <li key={motorcycle.id}>{motorcycle.name}</li>
      ))}
    </ul>
  );
};

export default MotorcycleList;
