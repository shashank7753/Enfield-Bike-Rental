import { useState, useEffect } from 'react';
import { Bike, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-10',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Bike className={cn(
              'h-8 w-8 transition-colors duration-300',
              isScrolled ? 'text-indigo-600' : 'text-white'
            )} />
            <span className={cn(
              'text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              Enfield Bike Rental
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Home', href: '#' },
              { label: 'Motorcycles', href: '#motorcycles' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'List Your Bike', href: '/list-bike' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'transition-colors duration-300 hover:text-indigo-600',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden transition-colors duration-300',
              isScrolled ? 'text-gray-700' : 'text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: 'Home', href: '#' },
                { label: 'Motorcycles', href: '#motorcycles' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'List Your Bike', href: '/list-bike' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-brown-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};