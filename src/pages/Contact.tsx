// src/pages/Contact.tsx
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-gray-400 mb-6">
          We're here to help! Whether you have a question, feedback, or need support, feel free to get in touch with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-400" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-400" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md">Submit</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Contact Info</h3>
            <p className="text-lg text-gray-400">
              <strong>Email:</strong> Shashank33379@gmail.com<br />
              <strong>Phone:</strong> (775) 303-3379<br />
              <strong>Address:</strong> 168 Ek Omkar, Kharar, Mohali, Punjab-140413
            </p>
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="Office Location" 
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
