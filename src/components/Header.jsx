import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, Menu, X } from 'lucide-react';
import Logo from './Logo';

const categories = [
  { name: 'Rings', path: '/rings' },
  { name: 'Earrings', path: '/earrings' },
  { name: 'Bracelets', path: '/bracelets' }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:relative sm:left-0 sm:transform-none">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6 md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm md:text-base">Home</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900 text-sm md:text-base"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className={`absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isOpen ? '' : 'hidden'}`}>
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm md:text-base">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm md:text-base">Contact</Link>
            
            <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm md:text-base">
              <User className="h-5 w-5 md:h-6 md:w-6" />
              <span className="ml-2">Login</span>
            </button>
          </div>

          {/* Mobile User Icon */}
          <div className="flex items-center sm:hidden">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
              aria-label="User account"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;