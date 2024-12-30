import React from 'react';

interface Motorcycle {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface AdventureRoute {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const motorcycles: Motorcycle[] = [
  { id: 1, name: 'Cruiser', description: 'Experience the freedom of the open road with our premium cruiser motorcycles.', imageUrl: 'https://www.travellersofindia.com/wp-content/uploads/2021/08/Adventure_Bikes_in_India_Travellersofindia.com_-1-scaled.jpg' },
  { id: 2, name: 'Adventure Bike', description: 'Ready for off-road challenges? Our adventure bikes are built for rugged terrain.', imageUrl: 'https://adventuremotorcycle.com/images/ARTICLES/Rides/Nepal-CherylJones/Nepal-Ride-Report-misty.jpg' },
  { id: 3, name: 'Sport Bike', description: 'For thrill-seekers, our sport bikes offer high speed and precision handling.', imageUrl: 'https://www.motorcycleexpeditions.com/wp-content/uploads/2018/12/HeadAboveTheClouds.jpg' }
];

const adventureRoutes: AdventureRoute[] = [
  { id: 1, title: 'Mountain Adventure', description: 'Experience the thrill of the mountains with winding roads and stunning views.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdltapPoxjqHx5um8WoKXDGmCqgOsRvup1TzbNj6mTflZ1e2fdBCGMV1jwyQeas4u1Cg&usqp=CAU' },
  { id: 2, title: 'Coastal Ride', description: 'Enjoy the serenity of the sea as you ride along the coastal cliffs.', imageUrl: 'https://www.madornomad.com/wp-content/uploads/2022/04/How-to-Join-a-Motorcycle-Tour-in-India-36.jpg' },
  { id: 3, title: 'Desert Trail', description: 'Tackle the desert trails with our high-performance adventure bikes.', imageUrl: 'https://static.wixstatic.com/media/fcf53a_8e241993ade24198808c88f2ffdd06e9~mv2.jpg/v1/fill/w_630,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fcf53a_8e241993ade24198808c88f2ffdd06e9~mv2.jpg' }
];

export const OurFleetAndAdventure: React.FC = () => {
  return (
    <div className="py-16 bg-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent mb-8">Our Fleet and Adventure</h1>
        <p className="text-lg text-gray-60 mb-8">
          Explore our diverse range of motorcycles, each offering a unique adventure experience. Whether you're looking to cruise along scenic routes or take on rugged trails, we have the perfect bike for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle) => (
            <div
              key={motorcycle.id}
              className="bg-gray-100 p-6 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:brightness-110 hover:shadow-lg hover:translate-y-4"
            >
              <div className="relative mb-6">
                <img
                  src={motorcycle.imageUrl}
                  alt={motorcycle.name}
                  className="w-full h-48 object-cover rounded-lg transition-all duration-500 transform hover:scale-110 hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">{motorcycle.name}</p>
                </div>
              </div>
              <p className="text-gray-600">{motorcycle.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-16">Our Adventure Routes</h2>
        <p className="text-lg text-white mb-8">
          Embark on a thrilling journey with our curated adventure routes. Whether you love mountain roads, coastal paths, or exploring hidden gems, we've got the perfect route for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventureRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-gray-100 p-6 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:brightness-110 hover:shadow-lg hover:translate-y-4"
            >
              <div className="relative mb-6">
                <img
                  src={route.imageUrl}
                  alt={route.title}
                  className="w-full h-48 object-cover rounded-lg transition-all duration-500 transform hover:scale-110 hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">{route.title}</p>
                </div>
              </div>
              <p className="text-gray-600">{route.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
