// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { MotorcycleCard } from './components/MotorcycleCard';
// import { ReviewCarousel } from './components/ReviewCarousel/ReviewCarousel';
// import { Map } from './components/Map';
// import { motorcycles } from './data/motorcycles';
// import { reviews } from './data/reviews';
// import { Toaster } from 'react-hot-toast';


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-400">
//       <Toaster position="top-right" />
//       <Header />
//       <div className="pt-16"> {/* Add padding to prevent content from going under fixed header */}
//         <Hero />
        
//         {/* Motorcycles Section */}
//         <section id="motorcycles" className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4" style={{ marginTop: '30px' }}>
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Motorcycles</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {motorcycles.map((motorcycle) => (
//                 <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Map Section */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Pickup Locations</h2>
//             <Map />
//           </div>
//         </section>

//         {/* Reviews Section */}
//         <section id="reviews" className="py-16">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4 sm:px-6 lg:px-8">What Our Riders Say</h2>
//             <ReviewCarousel reviews={reviews} />
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-white py-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Enfield Bike Rental</h3>
//                 <p className="text-gray-400">
//                   The best way to rent motorcycles from local owners.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//                 <p className="text-gray-400">
//                   Email: Shashank33379@gmail.com.com<br />
//                   Phone: (775) 303-3379<br />
//                   Address: 168 Ek Omkar, kharar,Mohali,Punjab-140413
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//               <p>&copy; 2024 Enfield Bike Rental. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MotorcycleCard } from './components/MotorcycleCard';
import { ReviewCarousel } from './components/ReviewCarousel/ReviewCarousel';
import { Map } from './components/Map';
import { ListBikeForm } from '../src/components/ListBikeForm/ListBikeForm'; // Import your ListBikeForm
import { motorcycles } from './data/motorcycles';
import { reviews } from './data/reviews';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Header />
      <div className="pt-16 min-h-screen bg-gray-400">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* Motorcycles Section */}
                <section id="motorcycles" className="py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4" style={{ marginTop: '30px' }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Motorcycles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {motorcycles.map((motorcycle) => (
                        <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Map Section */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Pickup Locations</h2>
                    <Map />
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="py-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4 sm:px-6 lg:px-8">What Our Riders Say</h2>
                    <ReviewCarousel reviews={reviews} />
                  </div>
                </section>
              </>
            }
          />
          {/* Route for ListBikeForm */}
          <Route path="/list-bike" element={<ListBikeForm />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Enfield Bike Rental</h3>
                <p className="text-gray-400">The best way to rent motorcycles from local owners.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Email: Shashank33379@gmail.com<br />
                  Phone: (775) 303-3379<br />
                  Address: 168 Ek Omkar, Kharar, Mohali, Punjab-140413
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 Enfield Bike Rental. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
