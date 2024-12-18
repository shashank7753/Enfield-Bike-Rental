import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
  className,
}) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg',
        'hover:bg-gray-50 transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        direction === 'left' ? '-left-4' : '-right-4',
        className
      )}
      aria-label={`Scroll ${direction}`}
    >
      <Icon className="w-6 h-6 text-gray-600" />
    </button>
  );
};