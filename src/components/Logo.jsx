import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Diamond className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
      <span className="text-xl sm:text-2xl font-serif">Shankers Jewellers</span>
    </Link>
  );
}

export default Logo;