
import { ListBikeForm } from '../components/ListBikeForm/ListBikeForm';

export const ListBikePage = () => {
  return (
    <div className="min-h-screen bg-gray-5000 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            List Your Motorcycle
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Share your motorcycle with riders in your area and earn extra income
          </p>
        </div>
        <ListBikeForm />
      </div>
    </div>
  );
};