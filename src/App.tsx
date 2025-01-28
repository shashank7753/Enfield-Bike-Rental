import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Mainpage/Header';
import { Hero } from './components/Mainpage/Hero';
import  MotorcycleList  from './components/Mainpage/MotorcycleList'; 
import { ReviewCarousel } from './components/ReviewCarousel/ReviewCarousel';
import { Map } from './components/Mainpage/Map';
import { ListBikeForm } from './components/ListBikeForm/ListBikeForm';
import { AuthPage } from './components/Accounts/AuthPage';
import { Account } from './components/Accounts/Account';
import { Toaster } from 'react-hot-toast';
import { OurFleetAndAdventure } from './pages/OurFleetAndAdventure';
import { AboutUs } from './pages/AboutUs';
import { HowItWorks } from './pages/HowItWorks';
import { Safety } from './pages/Safety';
import { Contact } from './pages/Contact';
import { reviews } from './data/reviews';
import AccountPage from './components/Accounts/AdminPortal';
import UserPortal from './components/Accounts/UserPortal';

const App: React.FC = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Header />
      <div className="pt-16 min-h-screen bg-gray-400">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="our-fleet-and-adventure" className="py-16 bg-gray-800 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">Our Fleet and Adventure</h2>
                    <OurFleetAndAdventure />
                  </div>
                </section>

                <section id="motorcycles" className="py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '30px' }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Motorcycles</h2>
                    {/* Replaced static data with MotorcycleList */}
                    <MotorcycleList />
                  </div>
                </section>

                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Pickup Locations</h2>
                    <Map />
                  </div>
                </section>

                <section id="reviews" className="py-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4 sm:px-6 lg:px-8">What Our Riders Say</h2>
                    <ReviewCarousel reviews={reviews} />
                  </div>
                </section>
              </>
            }
          />

          {/* About Us, How It Works, Safety, Contact Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />

          {/* List a Bike Route */}
          <Route path="/list-bike" element={<ListBikeForm />} />

          {/* Authentication Page */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Existing Routes */}
          <Route path="/account" element={<Account />} />
        <Route path="/admin-dashboard" element={<AccountPage />} />
        <Route path="/user-dashboard" element={<UserPortal />} />
        </Routes>
{/* Footer */}
<footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
  {/* Animated background effect */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 animate-pulse"></div>
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Brand Section */}
      <div className="transform hover:scale-105 transition-all duration-500 p-6 rounded-xl hover:bg-gray-800/30 group">
        <h3 className="text-3xl font-bold mb-4 relative inline-block">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent group-hover:bg-gradient-to-l transition-all duration-500">
            Enfield Bike Rental
          </span>
          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-purple-500 transition-all duration-500"></div>
        </h3>
        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          The best way to rent motorcycles from local owners. Experience the thrill of riding with confidence.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-1 p-6 rounded-xl hover:bg-gray-800/30 group transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-6 relative inline-block">
          Quick Links
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
        </h3>
        <ul className="space-y-4">
          {[
            ['About Us', '/about-us'],
            ['How It Works', '/how-it-works'],
            ['Safety', '/safety'],
            ['Contact', '/contact']
          ].map(([text, href]) => (
            <li key={href} className="transform hover:translate-x-2 transition-all duration-300">
              <a 
                href={href}
                className="text-gray-400 hover:text-white flex items-center space-x-2 group/link relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover/link:opacity-10 transition-opacity duration-300"></span>
                <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500 transition-all duration-300 group-hover/link:w-4"></span>
                <span className="relative z-10">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="p-6 rounded-xl hover:bg-gray-800/30 group transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-6 relative inline-block">
          Contact Us
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
        </h3>
        <div className="space-y-4">
          {[
            { icon: '📧', text: 'Shashank33379@gmail.com', href: 'mailto:Shashank33379@gmail.com' },
            { icon: '📱', text: '(775) 303-3379', href: 'tel:7753033379' },
            { icon: '📍', text: '168 Ek Omkar, Kharar, Mohali, Punjab-140413', href: 'https://maps.google.com/?q=168 Ek Omkar, Kharar, Mohali, Punjab-140413' }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center group/contact relative p-2 -mx-2 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-orange-500 to-purple-500 rounded-full mr-3 transform group-hover/contact:scale-110 transition-transform duration-300">
                {contact.icon}
              </span>
              <span className="text-gray-400 group-hover/contact:text-white transition-colors duration-300">
                {contact.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 rounded-xl hover:bg-gray-800/30 group transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-6 relative inline-block">
          Follow Us
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
        </h3>
        <div className="flex space-x-6">
          {[
            {
              href: 'https://facebook.com',
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              )
            },
            {
              href: 'https://twitter.com',
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              )
            },
            {
              href: 'https://instagram.com',
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              )
            }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300 p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 rounded-full group/social"
            >
              <div className="transform group-hover/social:rotate-12 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 pt-8 border-t border-gray-800/50 text-center relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
        &copy; {new Date().getFullYear()} Enfield Bike Rental. All rights reserved.
      </p>
    </div>
  </div>
</footer>

      </div>
    </Router>
  );
};

export default App;
