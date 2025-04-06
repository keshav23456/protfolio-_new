import React, { useState } from 'react';
import { products } from '../data/products';

function BraceletsPage() {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const categoryProducts = products.bracelets;

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, categoryProducts.length));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif mb-8">Bracelets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-4">Weight: {product.weight}</p>
                <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < categoryProducts.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default BraceletsPage;