import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredCollections = [
    {
      id: 1,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743930432/jqjlvqi1vlu1mfxhq8mu.jpg',
      category: 'necklaces',
      weight: '4.660g'
    },
    {
      id: 2,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743930432/mpnk5gg1k0fv1y0gtfvx.jpg',
      category: 'rings',
      weight: '2.780g'
    },
    {
      id: 3,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743931911/rings/zftcfynilsrdfev0kghp.jpg',
      category: 'bracelets',
      weight: '4.460g',
    },
    {
      id: 4,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743931912/rings/hephe5lqizvhrrwuif23.jpg',
      category: 'earrings',
      weight: '3.170g',
    },
    {
      id: 5,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743930433/pcl8fgg9eytewmjtkft3.jpg',
      category: 'necklaces',
      weight: '3.600g',
    },
    {
      id: 6,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743931912/rings/oejijulj6ndt0orxn9y6.jpg',
      category: 'rings',
      weight: '2.560g',
    },
    {
      id: 7,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743931913/rings/dcwo5s0ix6eteu6jgn9t.jpg',
      category: 'bracelets',
      weight: '3.660g',
    },
    {
      id: 8,
      name: '',
      image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1743930433/jdgeiewvevcgtr30kxe1.jpg',
      category: 'earrings',
      weight: '2.860g',
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-3 sm:mb-4 md:mb-6">Timeless Elegance, Modern Style</h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8">Discover our curated collection where each piece tells your unique story.</p>
            <Link 
              to="/category/rings" 
              className="inline-block bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-6 sm:mb-8 md:mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {featuredCollections.map((collection) => (
            <div key={collection.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 sm:p-4 bg-white">
                  <h3 className="text-base sm:text-lg font-medium mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">Weight: {collection.weight}</p>
                  <Link 
                    to={`/category/${collection.category}`}
                    className="block w-full bg-gray-900 text-white text-center py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;