import React, { useState, useCallback, useEffect } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { CarouselButton } from './CarouselButton';
import { ReviewCard } from '../Mainpage/ReviewCard';
import type { Review } from '../../types';

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [items, setItems] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsToShow = 3;
  
  // Initialize carousel with duplicated items for infinite scroll
  useEffect(() => {
    const duplicatedReviews = [...reviews, ...reviews, ...reviews];
    setItems(duplicatedReviews);
  }, [reviews]);

  const moveCarousel = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (currentIndex + increment + items.length) % items.length;
    
    setCurrentIndex(newIndex);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
      
      // If we're at the end of the duplicated items, jump to the original position
      if (newIndex >= reviews.length * 2) {
        setCurrentIndex(newIndex % reviews.length);
      }
    }, 500);
  }, [currentIndex, items.length, reviews.length, isAnimating]);

  // Auto-advance carousel
  useInterval(() => {
    moveCarousel('right');
  }, 5000);

  if (!items.length) return null;

  return (
    <div className="relative max-w-7xl mx-auto px-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / itemsToShow))}%)`,
          }}
        >
          {items.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-full min-w-[33.333%] px-4"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      
      <CarouselButton
        direction="left"
        onClick={() => moveCarousel('left')}
      />
      <CarouselButton
        direction="right"
        onClick={() => moveCarousel('right')}
      />
    </div>
  );
};