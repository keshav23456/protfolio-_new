import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-6">Our Legacy of Excellence</h1>
        <p className="text-gray-600 mb-8">
          Since 1947, Shankers Jewellers has been crafting exquisite jewelry that celebrates life's most precious moments. 
          Our journey began in the heart of India's jewelry district, where our founder's passion for gemology and 
          artistry laid the foundation for what would become one of the most trusted names in fine jewelry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800" 
            alt="Jewelry crafting"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif mb-4">Artistry & Heritage</h2>
          <p className="text-gray-600 mb-4">
            Each piece at Shankers Jewellers is a testament to our commitment to excellence. Our master craftsmen, 
            many of whom represent the third generation in their field, combine traditional techniques with modern 
            innovation to create jewelry that's both timeless and contemporary.
          </p>
          <p className="text-gray-600">
            We pride ourselves on sourcing only the finest diamonds and gemstones, each carefully selected to meet 
            our exacting standards for quality, brilliance, and ethical sourcing.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-12 text-center mb-16">
        <h2 className="text-3xl font-serif mb-6">Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Quality Assurance</h3>
            <p className="text-gray-600">
              Every piece undergoes rigorous quality checks, ensuring it meets our exceptional standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Ethical Sourcing</h3>
            <p className="text-gray-600">
              We partner only with responsible suppliers who share our commitment to ethical practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Craftsmanship</h3>
            <p className="text-gray-600">
              Our artisans bring decades of experience to create pieces that will be cherished for generations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">Custom Design Service</h2>
        <p className="text-gray-600 mb-8">
          Our bespoke service allows you to create the jewelry of your dreams. Work directly with our designers 
          to bring your vision to life, whether it's an engagement ring, family heirloom, or special occasion piece.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800" 
          alt="Custom jewelry design"
          className="rounded-lg shadow-lg mb-8"
        />
      </div>
    </div>
  );
}

export default About;