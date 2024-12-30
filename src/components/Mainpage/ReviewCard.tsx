
import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
      {/* Main Container */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Avatar Section */}
        <img
          src={review.avatar}
          alt={review.user}
          className="h-16 w-16 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
        />

        {/* Content Section */}
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-lg font-semibold">{review.user}</h4>
          <div className="flex justify-center sm:justify-start mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < review.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-gray-600">{review.comment}</p>
          <p className="mt-2 text-sm text-gray-500">{review.date}</p>
        </div>
      </div>
    </div>
  );
};
