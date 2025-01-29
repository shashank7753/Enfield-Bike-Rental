import { useState, useEffect } from 'react';
import { Bike, Menu, X, User } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Accounts/firebase';
import { signOut } from 'firebase/auth';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <Bike
              className={cn(
                'h-8 w-8 transition-transform duration-300',
                isScrolled ? 'text-indigo-600 scale-100' : 'text-white scale-110'
              )}
            />
            <span
              className={cn(
                'text-2xl font-bold tracking-wide transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
            >
              Enfield Bike Rental
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              { label: 'Home', href: '/', as: Link },
              { label: 'Motorcycles', href: '/motorcycles', as: Link },
              { label: 'List Your Bike', href: '/list-bike' },
              ...(user ? [] : [{ label: 'Login/SignUp', href: '/auth', onClick: handleLogin }]),
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'transition-colors duration-300 hover:text-black hover:underline',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            ))}
            {user && (
              <div className="flex items-center space-x-4">
                <Avatar className="cursor-pointer" onClick={() => handleNavigation('/account')}>
                  <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                  <AvatarFallback>
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <button
                  onClick={handleLogout}
                  className={cn(
                    'transition-colors duration-300 hover:text-black hover:underline',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  Logout
                </button>
              </div>
            )}
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
          <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 rounded-lg shadow-md p-4 mt-2">
            <div className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Motorcycles', href: '#motorcycles' },
                { label: 'List Your Bike', href: '/list-bike' },
                ...(user ? [] : [{ label: 'Login/SignUp', href: '/auth', onClick: handleLogin }]),
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-base font-medium text-white hover:text-indigo-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (item.onClick) item.onClick();
                  }}
                >
                  {item.label}
                </a>
              ))}
              {user && (
                <>
                  <a
                    href="/account"
                    className="block text-base font-medium text-white hover:text-indigo-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Account
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block text-base font-medium text-white hover:text-indigo-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg w-full text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};